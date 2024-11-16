import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="ss-home-navbar">
      <div className="ss-home-nav-content">
      <h2 style={{ fontSize: '35px', fontFamily: "'Yanone Kaffeesatz', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontWeight: 400, color: '#f5f5dc' }}>SAKTHI SAADHAK</h2>
        <div className="ss-home-nav-links">
          <div className="ss-home-nav-item">Home</div>
          <div className="ss-home-nav-item">About</div>
          <div className="ss-home-nav-item">Contact</div>
        </div>
      </div>
    </nav>
  );
}