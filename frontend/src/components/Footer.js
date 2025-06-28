import React from "react";
import logo from "../assets/Logo Long.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-link-section">
        <div className="footer-links">
          <div className="link">
            <a href="/about">About Us</a>
          </div>
          <div className="link">
            <a href="/contact">Contact</a>
          </div>
          <div className="link">
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div className="link">
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
        <div className="social-links">
          <p>Follow us on:</p>
          <div className="link">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <div className="link">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <div className="link">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>  
        </div>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="Stage Vote Logo" />
        </div>
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </div>
    </footer>
  );
}

export default Footer;