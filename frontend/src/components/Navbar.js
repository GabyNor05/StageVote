import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import {FaUser} from "react-icons/fa";
function Navbar() {
  return (
    <nav className="navbar">
      <img className = "logo" src={logo} alt="Stage Vote"/>
        <h1 className="logo-text">Stage Vote</h1>
      <div className = "nav-link" >
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/submission" className="nav-link">Submission</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
      <Link to="/login" className="nav-link">
        <FaUser className = "user-icon"/>  
      </Link>
    </nav>
  );
}

export default Navbar;