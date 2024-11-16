import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="ss-home-navbar">
      <div className="ss-home-nav-content">
        <a href="/" className="ss-home-logo">Sakthi Saadhak</a>
        <div className="ss-home-nav-links">
          <div className="ss-home-nav-item">Home</div>
          <div className="ss-home-nav-item">About</div>
          <div className="ss-home-nav-item">Contact</div>
        </div>
      </div>
    </nav>
  );
}