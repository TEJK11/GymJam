import React, { useState } from "react";
import "./CalorieCounter.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const CalorieCounter = () => {
  const [bmrResult, setBmrResult] = useState("");
  const [ffmiResults, setFfmiResults] = useState({
    totalBodyFat: "",
    leanWeight: "",
    ffmi: "",
    adjustedFfmi: "",
  });

  const handleCalorieSubmit = (event) => {
    event.preventDefault();
    // Add logic to calculate BMR based on inputs
    const age = event.target.age.value;
    const gender = event.target.gender.value;
    const height = event.target.height.value;
    const weight = event.target.weight.value;
    const bodyFat = event.target.bodyFat.value || 0;
    const formula = event.target.formula.value;

    // Example BMR calculation (implement your own logic here)
    let bmr;
    if (formula === "mifflin") {
      bmr = 10 * weight + 6.25 * height - 5 * age + (gender === "male" ? 5 : -161);
    } else if (formula === "harris") {
      bmr = (weight * 13.75) + (height * 5) - (age * 6.75) + (gender === "male" ? 66 : 655);
    } else if (formula === "katch") {
      bmr = 370 + (21.6 * (weight * (1 - bodyFat / 100)));
    }

    setBmrResult(`BMR: ${bmr.toFixed(2)} kcal`);
  };

  const handleFfmiSubmit = (event) => {
    event.preventDefault();
    const weight = event.target.ffmiWeight.value;
    const bodyFat = event.target.ffmiBodyFat.value;
    const feet = event.target.feet.value;
    const inches = event.target.inches.value;

    // Example FFMI calculation (implement your own logic here)
    const heightInMeters = (parseInt(feet) * 0.3048) + (parseInt(inches) * 0.0254);
    const leanWeight = weight * (1 - (bodyFat / 100));
    const ffmi = leanWeight / (heightInMeters * heightInMeters);

    // Adjusted FFMI calculation can be added here as needed
    const adjustedFfmi = ffmi; // Replace with actual adjusted calculation

    setFfmiResults({
      totalBodyFat: `Total Body Fat: ${bodyFat}%`,
      leanWeight: `Lean Weight: ${leanWeight.toFixed(2)} kg`,
      ffmi: `FFMI: ${ffmi.toFixed(2)}`,
      adjustedFfmi: `Adjusted FFMI: ${adjustedFfmi.toFixed(2)}`,
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">GymJam</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workout-generator">
                  Workout Generator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calorie-counter">
                  Calorie Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/for-you">
                  For You
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={{ color: "rgb(255, 205, 205)" }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5" id="calorieCalculator">
        <h1>Calorie Calculator</h1>
        <form id="calorieForm" onSubmit={handleCalorieSubmit}>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="height">Height (cm):</label>
            <input type="number" id="height" required />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight (kg):</label>
            <input type="number" id="weight" required />
          </div>
          <div className="form-group">
            <label htmlFor="bodyFat">Body Fat (%):</label>
            <input type="number" id="bodyFat" />
          </div>
          <div className="form-group">
            <label htmlFor="formula">Choose a Formula:</label>
            <select id="formula" required>
              <option value="mifflin">Mifflin-St Jeor</option>
              <option value="harris">Revised Harris-Benedict</option>
              <option value="katch">Katch-McArdle</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Calculate</button>
        </form>
        <div className="results mt-4">
          <h2>Results:</h2>
          <p id="bmrResult">{bmrResult}</p>
        </div>
      </div>

      <div className="container mt-5" id="ffmiCalculator">
        <h1 className="text-center">FFMI Calculator</h1>
        <form id="ffmiForm" className="mt-4" onSubmit={handleFfmiSubmit}>
          <div className="form-group">
            <label htmlFor="ffmiWeight">Weight (kg)</label>
            <input type="number" className="form-control" id="ffmiWeight" required />
          </div>
          <div className="form-group">
            <label htmlFor="ffmiBodyFat">Body Fat (%)</label>
            <input type="number" className="form-control" id="ffmiBodyFat" required />
          </div>
          <div className="form-group">
            <label htmlFor="feet">Height (Feet)</label>
            <input type="number" className="form-control" id="feet" required />
          </div>
          <div className="form-group">
            <label htmlFor="inches">Height (Inches)</label>
            <input type="number" className="form-control" id="inches" required />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Calculate</button>
        </form>

        <div className="mt-4">
          <canvas id="ffmiChart" width="200" height="200"></canvas>
        </div>

        <div className="mt-4" id="ffmiResults">
          <h3>Results:</h3>
          <p id="totalBodyFat">{ffmiResults.totalBodyFat}</p>
          <p id="leanWeight">{ffmiResults.leanWeight}</p>
          <p id="ffmi">{ffmiResults.ffmi}</p>
          <p id="adjustedFfmi">{ffmiResults.adjustedFfmi}</p>
        </div>
      </div>
    </div>
  );
};

export default CalorieCounter;
