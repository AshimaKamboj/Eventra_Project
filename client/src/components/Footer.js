import React from "react";
import "./../style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-col">
          <h2 className="footer-logo">📅 Eventra</h2>
          <p>
            Discover, create, and book amazing events. <br />
            Your gateway to unforgettable experiences.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Explore Events</a></li>
            <li><a href="#">Create Event</a></li>
            <li><a href="#">Find Venues</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Support Info */}
        <div className="footer-col">
          <h3>Support</h3>
          <p>📧 support@eventra.com</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>📍 San Francisco, CA</p>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h3>Stay Updated</h3>
          <p>Get the latest events and exclusive offers delivered to your inbox.</p>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Eventra. All rights reserved. Built with ❤️ for amazing events.</p>
      </div>
    </footer>
  );
}

export default Footer;
