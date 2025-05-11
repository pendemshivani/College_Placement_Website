import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/global.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      if (response.data.role === "student") navigate("/student");
      else if (response.data.role === "admin") navigate("/admin");
      else if (response.data.role === "company") navigate("/company");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">Vaagdevi Colleges</h2>
        <img src="/logo.png" alt="Vaagdevi Colleges Logo" className="logo" /> {/* Logo below title */}
        <h3 className="subtitle">Login</h3>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input-field"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input-field"
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className="register-link">
          Don't have an account?{" "}
          <a href="/register" className="link">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
