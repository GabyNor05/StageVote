import React, { useEffect, useState }  from "react";
import "./auth.css";
import broadwayImage from "../../assets/Broadway.jpg";
import { useNavigate } from "react-router-dom";
import { registerWithEmail, registerWithGoogle } from "../../firebase/authService";
import { useAuth } from "../../firebase/contexts/authContext";

function Signup() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
      if (currentUser) {
        navigate("/");
      }
    }, [currentUser, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      await registerWithEmail(email, password);
      // Optionally update displayName here
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please check your details.");
    }
  };

  const handleGoogleSignup = async () => {

    try {
      await registerWithGoogle();
      navigate("/");
    } catch (err) {
      alert("Google login failed: " + err.message);
    }

  };

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
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>
              <button type="submit" className="login-button">Signup</button>
            </form>
            <div className="Google-login">
              <button className="google-button-container" onClick={handleGoogleSignup}>
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