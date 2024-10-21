import React, { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import MikeWasowski from "./assets/images/mike-wasowski.gif";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-outside">
      <div className="login-container">
        <img
          src={MikeWasowski}
          alt="GymJam Logo"
          className="gym-logo"
          style={{
            width: "350px",
            paddingBottom: "10px",
            borderRadius: "2rem",
          }}
        />
        <div className="heading">Sign In</div>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit} className="form">
          <input
            required
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="forgot-password">
            <a href="#">Forgot Password?</a>
          </span>
          <input className="login-button" type="submit" value="Sign In" />
        </form>
        <span className="agreement">
          <a href="#">Learn user license agreement</a>
        </span>
      </div>
    </div>
  );
}