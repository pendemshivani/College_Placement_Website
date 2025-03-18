import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/global.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { name, email, password, role }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", role);

      if (role === "student") navigate("/student");
      else if (role === "admin") navigate("/admin");
      else if (role === "company") navigate("/company");
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">Vaagdevi Colleges</h2>
        <img src="/logo.png" alt="Vaagdevi Colleges Logo" className="logo" /> {/* Logo below title */}
        <h3 className="subtitle">Register</h3>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="input-field"
          />
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
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="select-field"
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="company">Company</option>
          </select>
          <button type="submit" className="login-btn">
            Register
          </button>
        </form>
        <p className="register-link">
          Already have an account?{" "}
          <a href="/login" className="link">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
