import React from 'react';
import './Home.css';
import { Leaf, BarChart, Calculator, FileText, BookOpen, Sun, Activity, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from "lucide-react";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.clear();
    navigate('/');
  }; 

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
      }
    };

    // Handle back button press
    const handleBackButton = (event) => {
      event.preventDefault();
      handleLogout();
    };

    // Add event listeners
    window.addEventListener('popstate', handleBackButton);
    checkAuth();

    // Replace current state to handle direct back button
    window.history.pushState(null, '', window.location.pathname);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

  // Prevent direct URL access
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="ss-home-body">
      <nav className="ss-home-navbar">
        <div className="ss-home-nav-content">
          <h2 style={{ fontSize: '35px', fontFamily: "'Yanone Kaffeesatz', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontWeight: 400, color: '#f5f5dc' }}>
            SAKTHI SAADHAK
          </h2>
          
          <div className="ss-home-nav-links">
            <div className="ss-home-nav-item">
              Energy Usage
              <div className="ss-home-dropdown">
                <a href="/EnergyUsage" className="ss-home-dropdown-item">Energy Usage</a>
                <a href="/Carbon" className="ss-home-dropdown-item">Carbon Footprint</a>
              </div>
            </div>
            <div className="ss-home-nav-item">
              View
              <div className="ss-home-dropdown">
                <a href="/Comparision" className="ss-home-dropdown-item">Material Comparison</a>
                <a href="/Reports" className="ss-home-dropdown-item">Reports & Graphs</a>
                <a href="/Educational" className="ss-home-dropdown-item">Educational Articles</a>
              </div>
            </div>
            <div className="ss-home-nav-item">
              Renewable Energy
              <div className="ss-home-dropdown">
                <a href="/Renewable" className="ss-home-dropdown-item">Renewable Energy Potential</a>
              </div>
            </div>
            <button onClick={handleLogout} className="ss-home-logout-button">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <section className="ss-home-hero">
        <div className="ss-home-hero-content">
          <h1 className="ss-home-hero-title">SMART ENERGY MANAGEMENT PLATFORM </h1>
          <div className="ss-home-hero-features">
            <div className="ss-home-hero-feature">
              <Activity size={24} />
              <span>Monitor</span>
            </div>
            <div className="ss-home-hero-feature">
              <BarChart size={24} />
              <span>Track</span>
            </div>
            <div className="ss-home-hero-feature">
              <Leaf size={24} />
              <span>Save Energy</span>
            </div>
          </div>
          <div className="ss-home-input-energy">
            <a href="/Input" className="ss-home-cta-button">Input Energy Usage</a>
          </div>
        </div>
      </section>

      <div className="ss-home-features-grid">
        <div className="ss-home-feature-card" onClick={() => window.location.href = '/EnergyUsage'}>
          <Activity className="ss-home-feature-icon" />
          <h3 className="ss-home-feature-title">Energy Usage</h3>
          <p>Track and monitor your energy consumption patterns</p>
        </div>
        <div className="ss-home-feature-card" onClick={() => window.location.href = '/Carbon'}>
          <Calculator className="ss-home-feature-icon" />
          <h3 className="ss-home-feature-title">Carbon Footprint Calculator</h3>
          <p>Calculate your environmental impact</p>
        </div>
        <div className="ss-home-feature-card" onClick={() => window.location.href = '/Comparision'}>
          <FileText className="ss-home-feature-icon" />
          <h3 className="ss-home-feature-title">Material Comparison List</h3>
          <p>Compare different materials and their efficiency</p>
        </div>
        <div className="ss-home-feature-card" onClick={() => window.location.href = '/Reports'}>
          <BarChart className="ss-home-feature-icon" />
          <h3 className="ss-home-feature-title">Reports and Graphs</h3>
          <p>Visualize your energy data</p>
        </div>
        <div className="ss-home-feature-card" onClick={() => window.location.href = '/Educational'}>
          <BookOpen className="ss-home-feature-icon" />
          <h3 className="ss-home-feature-title">Educational Articles</h3>
          <p>Learn about energy efficiency</p>
        </div>
        <div className="ss-home-feature-card" onClick={() => window.location.href = '/Renewable'}>
          <Sun className="ss-home-feature-icon" />
          <h3 className="ss-home-feature-title">Renewable Energy</h3>
          <p>Explore sustainable energy solutions</p>
        </div>
      </div>
    </div>
  );
}

export default Home;