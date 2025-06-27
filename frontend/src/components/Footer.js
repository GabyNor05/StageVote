import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <p>Follow us on:</p>
        <div className="social-links">
          <div className="social-link">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <div className="social-link">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <div className="social-link">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>  
        </div>
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </div>
    </footer>
  );
}

export default Footer;