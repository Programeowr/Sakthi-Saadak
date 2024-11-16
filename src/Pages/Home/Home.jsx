import React from 'react';
import './Home.css';
import { Leaf, BarChart, Calculator, FileText, BookOpen, Sun, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from "lucide-react";

function Home() {
    const navigate = useNavigate();

const handleBack = () => {
  navigate('/');  // This will navigate back to the previous page
};

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
                <a href="/Input" className="ss-home-dropdown-item">Energy Usage</a>
                <a href="/Carbon" className="ss-home-dropdown-item">Carbon Footprint</a>
              </div>
            </div>
            <div className="ss-home-nav-item">
              View
              <div className="ss-home-dropdown">
                <a href="/Comparsion" className="ss-home-dropdown-item">Material Comparison</a>
                <a href="/Reports" className="ss-home-dropdown-item">Reports & Graphs</a>
                <a href="/Educational" className="ss-home-dropdown-item">Educational Articles</a>
              </div>
            </div>
            <div className="ss-home-nav-item">
              Renewable Energy
              <div className="ss-home-dropdown">
                <a href="/renewable-potential" className="ss-home-dropdown-item">Renewable Energy Potential</a>
              </div>
            </div>
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

export default Home