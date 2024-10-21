import React from "react";
import "./Wg.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function Wg() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            GymJam
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
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

      <div class="container">
        <main>
          <div class="image-container">
            <div class="sketchfab-embed-wrapper">
              <iframe
                title="muscle anatomy"
                class="centered-iframe"
                frameborder="0"
                allowfullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/d32f5724fc294048888d03d215b9a1ff/embed"
              ></iframe>
            </div>
          </div>
          <section id="chest">
            <h2>Chest Exercises</h2>
            <ul>
              <li>
                <strong>Bench Press:</strong>
                <ul>
                  <li>Targets: Chest (pectorals), triceps, shoulders.</li>
                  <li>
                    Effectiveness: Builds strength and size, enhances upper body
                    power.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Push-Ups:</strong>
                <ul>
                  <li>Targets: Chest, shoulders, triceps, core.</li>
                  <li>
                    Effectiveness: Improves upper body strength and endurance,
                    engages stabilizing muscles.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Chest Fly:</strong>
                <ul>
                  <li>Targets: Chest (pectorals).</li>
                  <li>
                    Effectiveness: Enhances muscle definition and flexibility in
                    the chest.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="back">
            <h2>Back Exercises</h2>
            <ul>
              <li>
                <strong>Deadlift:</strong>
                <ul>
                  <li>Targets: Entire back, glutes, hamstrings.</li>
                  <li>
                    Effectiveness: Develops overall strength, power, and
                    stability, improves posture.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Pull-Ups:</strong>
                <ul>
                  <li>Targets: Lats, upper back.</li>
                  <li>
                    Effectiveness: Builds upper body strength, enhances muscular
                    endurance.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Bent-Over Row:</strong>
                <ul>
                  <li>Targets: Middle back, lats.</li>
                  <li>
                    Effectiveness: Increases back thickness, improves posture
                    and back strength.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="legs">
            <h2>Leg Exercises</h2>
            <ul>
              <li>
                <strong>Squats:</strong>
                <ul>
                  <li>Targets: Quadriceps, hamstrings, glutes.</li>
                  <li>
                    Effectiveness: Builds lower body strength, increases muscle
                    mass, improves mobility.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Lunges:</strong>
                <ul>
                  <li>Targets: Quadriceps, hamstrings, glutes.</li>
                  <li>
                    Effectiveness: Enhances balance, coordination, and lower
                    body strength.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Leg Press:</strong>
                <ul>
                  <li>Targets: Quadriceps, glutes.</li>
                  <li>
                    Effectiveness: Provides a controlled environment to build
                    lower body strength and muscle size.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="shoulders">
            <h2>Shoulder Exercises</h2>
            <ul>
              <li>
                <strong>Overhead Press:</strong>
                <ul>
                  <li>Targets: Shoulders, triceps.</li>
                  <li>
                    Effectiveness: Enhances upper body strength, stability, and
                    muscle development.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Lateral Raise:</strong>
                <ul>
                  <li>Targets: Lateral deltoids.</li>
                  <li>
                    Effectiveness: Builds shoulder width, improves shoulder
                    definition.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Front Raise:</strong>
                <ul>
                  <li>Targets: Front deltoids.</li>
                  <li>
                    Effectiveness: Strengthens and defines the front shoulder
                    muscles, improves muscle balance.
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
