import React from "react";
import "./auth.css";
import broadwayImage from "../../assets/Broadway.jpg";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

    const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="login-page">
      <button className="login-back-button" onClick={() => window.history.back()}>
        <span className="back-arrow">&larr;</span> Back
      </button>
      <div className="login-container">
        <div className="login-toggle">
          <button className="login-toggle-button" onClick={handleLoginClick}>Login</button>
          <button className="login-toggle-button active" >Sign Up</button>
        </div>
        <div className="login-flex">
          <div className="login-form">
            <h2>Sign Up</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" required />
              </div>
              <button type="submit" className="login-button">Login</button>
            </form>
            <div className="Google-login">
              <button className="google-button-container" onClick={() => alert("Google login not implemented yet")}>
              <div className="google-button">
                <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google Logo" />
                <p>Login with Google</p>
              </div>
              </button>
            </div>
          </div>
          <div className="login-image">
            <img src={broadwayImage} alt="Login Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;