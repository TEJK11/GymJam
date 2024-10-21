import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import HomeVideo from "./assets/videos/Sony A7S III X Fitness Commercial.mp4";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector(".navbar").classList.add("scrolled");
      } else {
        document.querySelector(".navbar").classList.remove("scrolled");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            GymJam
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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
                  to="/login"
                  style={{ color: "rgb(255, 205, 205)" }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="gym-photo">
          <video autoPlay muted loop className="home-background-video">
            <source src={HomeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="container position-relative text-container">
            <h1>Welcome to GymJam</h1>
            <h2>
              <i>
                - "Change can be tough, but you know what's tougher? Letting a
                lack of drive hold you back from pushing your limits and making
                real progress." -
              </i>
            </h2>
            <Link to="#onwards-about" className="btn-get-started scrollto">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <div id="onwards-about"></div>

      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="assets/images/genericimage.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 owners">
              <h3 style={{ paddingTop: "20px" }}>
                <strong>GymJam</strong>
              </h3>
              <p>
                GymJam was founded with the goal of becoming a digital health
                model service aimed at providing modern health services and
                education to users. GymJam is passionate about bringing benefits
                in the field of health to its users and is ready to pioneer
                advancements in health and sports in the information and
                technology sector.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="assets/images/piyushtyagi.png"
                    className="profile-img"
                    alt="Tejas Kamath"
                  />
                  <h5>
                    <strong>Tejas Kamath</strong>
                  </h5>
                  <h6>Chief Executive Officer</h6>
                </div>
                <div className="col-md-6">
                  <img
                    src="assets/images/tejas.png"
                    className="profile-img"
                    alt="Piyush Tyagi"
                  />
                  <h5>
                    <strong>Piyush Tyagi</strong>
                  </h5>
                  <h6>Chief Operating Officer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="offer">
        <div className="container">
          <div className="section-title">
            <h2>Our Offer</h2>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box iconbox-blue">
                <img
                  src="./assets/icons/weight-lifting-down.png"
                  style={{ width: "100px" }}
                  alt="Workout Generator"
                />
                <h4 style={{ fontWeight: 900, color: "rgb(249, 255, 69)" }}>
                  Workout Generator
                </h4>
                <p>
                  We have science-based workout generators which provide you
                  with a workout plan based on what muscle group you want to
                  target and train for peak hypertrophy.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box iconbox-orange">
                <img
                  src="./assets/icons/calculator.png"
                  style={{ width: "100px" }}
                  alt="Calculators"
                />
                <h4 style={{ fontWeight: 900, color: "rgb(249, 255, 69)" }}>
                  Calculators
                </h4>
                <p>
                  We have a variety of calculators to help you track your
                  progress and set goals. These include calorie calculators,
                  FFMI calculators.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box iconbox-teal">
                <img
                  src="./assets/icons/calendar.png"
                  style={{ width: "100px" }}
                  alt="Personalised Trackers"
                />
                <h4 style={{ fontWeight: 900, color: "rgb(249, 255, 69)" }}>
                  Personalised Trackers
                </h4>
                <p>
                  We have personalised trackers to help you track your progress
                  and set goals. These include calorie trackers, workout
                  trackers, and more.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box iconbox-orange">
                <img
                  src="./assets/icons/camp-cooking-pot.png"
                  style={{ width: "100px" }}
                  alt="Nutrition Consultant"
                />
                <h4 style={{ fontWeight: 900, color: "rgb(249, 255, 69)" }}>
                  Nutrition Consultant
                </h4>
                <p>
                  This Nutrition Consultation Service allows users to directly
                  consult with our nutrition consultants regarding the necessary
                  nutritional needs.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box iconbox-green">
                <img
                  src="./assets/icons/healing.png"
                  style={{ width: "100px" }}
                  alt="Health Consultant"
                />
                <h4 style={{ fontWeight: 900, color: "rgb(249, 255, 69)" }}>
                  Health Consultant
                </h4>
                <p>
                  This Health Consultation Service allows users to directly
                  consult with our health consultants regarding their health
                  concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="cta">
        <div className="container">
          <div className="text-center">
            <h3
              style={{
                fontWeight: 900,
                fontSize: "40px",
                color: "rgb(126, 139, 255)",
              }}
            >
              Are You Ready to Join Us?
            </h3>
            <p>Sign up now and make use of our free features.</p>
            <Link className="cta-btn" to="/login">
              Join Now
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Feel free to talk to us if you still have any questions about
              GymJam.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="info-box">
                <i className="bi bi-geo-alt"></i>
                <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="info-box mt-4">
                <i className="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
              <div className="info-box mt-4">
                <i className="bi bi-phone"></i>
                <h3>Call Us</h3>
                <p>+1 234 567 89</p>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <form action="">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center mt-3">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
