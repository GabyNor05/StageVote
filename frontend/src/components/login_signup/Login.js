import React, { useEffect, useState } from "react";
import "./auth.css";
import broadwayImage from "../../assets/Broadway.jpg";
import { useNavigate } from "react-router-dom";
import { loginWithEmail, loginWithGoogle } from "../../firebase/authService"; 
import { useAuth } from "../../firebase/contexts/authContext"; 

function Login() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);  // Call the login function from authService
      navigate("/"); // Redirect to dashboard on successful login
    } catch (error) { 
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/"); // Only navigate after successful login
    } catch (err) {
      alert("Google login failed: " + err.message);
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="login-page">
      <button className="login-back-button" onClick={() => window.history.back()}>
        <span className="back-arrow">&larr;</span> Back
      </button>
      <div className="login-container">
        <div className="login-toggle">
          <button className="login-toggle-button active">Login</button>
          <button className="login-toggle-button" onClick={handleSignUpClick}>Sign Up</button>
        </div>
        <div className="login-flex">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
              </div>
              <button type="submit" className="login-button" >Login</button>
            </form>
            <div className="Google-login">
              <button className="google-button-container" onClick={handleGoogleLogin}>
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

export default Login;