import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../firebase/contexts/authContext"; // Adjust path as needed
import { logout } from "../firebase/authService"; // Adjust path as needed

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Stage Vote" />
      <h1 className="logo-text">Stage Vote</h1>
      <div className="nav-link">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/submission" className="nav-link">Submission</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
      <div
        className="user-dropdown"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
        tabIndex={0}
      >
        <FaUser className="user-icon" />
        {dropdownOpen && (
          <div className="dropdown-menu">
            {!currentUser ? (
              <Link to="/login" className="dropdown-item">Login</Link>
            ) : (
              <button className="dropdown-item" onClick={handleLogout}>Logout</button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;