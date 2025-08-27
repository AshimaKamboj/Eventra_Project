import React from "react";
import { Link } from "react-router-dom";
import "./../style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
              <Link to="/" className="logo">
          📅 Eventra
        </Link>
      </div>
      <div className="nav-center">
        <Link to="/explore">Explore</Link>
        <Link to="/create-event">Create Event</Link>
        <Link to="/venues">Venues</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/support">Support</Link>
      </div>
      <div className="nav-right">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
