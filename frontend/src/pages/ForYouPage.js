import React from "react";
import "./ForYouPage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import Cycling from "./assets/images/cycling.jpg";


const ForYouPage = () => {
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

      <div class="container mt-5">
        <h1 class="text-center mb-5">Your GymJam Dashboard</h1>

        <section id="membership-id" class="mb-5">
          <h2 class="section-title">Membership ID</h2>
          <div class="card" id="membershipCard">
            <div class="card-body">
              <h5 class="card-title">Your Membership ID: GJ12345</h5>
              <p class="card-text">
                Use this ID for all gym-related inquiries and to access
                exclusive perks.
              </p>
            </div>
          </div>
        </section>

        <section id="membership-details" class="mb-5">
          <h2 class="section-title">Membership Details</h2>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Current Plan: Premium</h5>
              <p class="card-text">Valid until: December 31, 2024</p>
              <button
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#changePlanModal"
              >
                Change Plan
              </button>
            </div>
          </div>
        </section>

        <section id="trainers" class="mb-5">
          <h2 class="section-title">Your Trainers</h2>
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Piyush Tyagi</h5>
                  <p class="card-text">Specialization: Strength Training</p>
                  <a href="#" class="btn btn-secondary">
                    Book a Session
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Tejas Kamath</h5>
                  <p class="card-text">Specialization: Yoga and Flexibility</p>
                  <a href="#" class="btn btn-secondary">
                    Book a Session
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="membership-perks" class="mb-5">
          <h2 class="section-title">Membership Perks</h2>
          <ul class="list-group">
            <li class="list-group-item">
              Unlimited access to all gym equipment
            </li>
            <li class="list-group-item">Free group fitness classes</li>
            <li class="list-group-item">
              10% discount on personal training sessions
            </li>
            <li class="list-group-item">Access to sauna and swimming pool</li>
            <li class="list-group-item">Exclusive member-only events</li>
          </ul>
        </section>

        <div class="container mt-5" id="exclusive-content">
          <h2 class="text-center mb-5">
            Exclusive Content for Premium Members
          </h2>

          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <img
                    src={Cycling}
                    alt="Alt Image"
                    className="card-img-top"
                    style={{ paddingBottom: "10px" }}
                  />

                  <h5 class="card-title">Strength Building 101</h5>
                  <p class="card-text">
                    Learn the fundamentals of strength training for muscle
                    growth.
                  </p>
                  <button id="exclusiveAccessBtn" class="btn btn-primary">
                    Access Now
                  </button>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <img
                    src={Cycling}
                    alt="Alt Image"
                    class="card-img-top"
                    style={{ paddingBottom: "10px" }}
                  />
                  <h5 class="card-title">Meditation and Mindfulness</h5>
                  <p class="card-text">
                    Enhance your mental well-being with these techniques.
                  </p>
                  <button id="exclusiveAccessBtn" class="btn btn-primary">
                    Access Now
                  </button>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <img
                    src={Cycling}
                    alt="Alt Image"
                    class="card-img-top"
                    style={{ paddingBottom: "10px" }}
                  />
                  <h5 class="card-title">Cardio Endurance Challenge</h5>
                  <p class="card-text">
                    Take your cardio to the next level with this endurance
                    routine.
                  </p>
                  <button id="exclusiveAccessBtn" class="btn btn-primary">
                    Access Now
                  </button>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <img
                    src={Cycling}
                    alt="Alt Image"
                    class="card-img-top"
                    style={{ paddingBottom: "10px" }}
                  />
                  <h5 class="card-title">Recovery: Importance of Rest Days</h5>
                  <p class="card-text">
                    Understand how recovery can boost your fitness goals.
                  </p>
                  <button id="exclusiveAccessBtn" class="btn btn-primary">
                    Access Now
                  </button>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <img
                    src={Cycling}
                    alt="Alt Image"
                    class="card-img-top"
                    style={{ paddingBottom: "10px" }}
                  />
                  <h5 class="card-title">Powerlifting Guide</h5>
                  <p class="card-text">
                    Learn the techniques of powerlifting for serious strength.
                  </p>
                  <button id="exclusiveAccessBtn" class="btn btn-primary">
                    Access Now
                  </button>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <img
                    src={Cycling}
                    alt="Alt Image"
                    class="card-img-top"
                    style={{ paddingBottom: "10px" }}
                  />
                  <h5 class="card-title">Marathon Training Plan</h5>
                  <p class="card-text">
                    Get ready for your next marathon with this step-by-step
                    plan.
                  </p>
                  <button id="exclusiveAccessBtn" class="btn btn-primary">
                    Access Now
                  </button>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <img
                    src={Cycling}
                    alt="Alt Image"
                    class="card-img-top"
                    style={{ paddingBottom: "10px" }}
                  />
                  <h5 class="card-title">CrossFit Intro</h5>
                  <p class="card-text">
                    An introduction to CrossFit and functional fitness.
                  </p>
                  <button id="exclusiveAccessBtn" class="btn btn-primary">
                    Access Now
                  </button>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <img
                    src={Cycling}
                    alt="Alt Image"
                    class="card-img-top"
                    style={{ paddingBottom: "10px" }}
                  />
                  <h5 class="card-title">Cycling for Fitness</h5>
                  <p class="card-text">
                    A detailed guide on how to incorporate cycling into your
                    fitness routine.
                  </p>
                  <button id="exclusiveAccessBtn" class="btn btn-primary">
                    Access Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYouPage;
