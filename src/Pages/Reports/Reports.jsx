import React, { useState } from 'react';
import { ArrowLeft, Download, Calendar } from 'lucide-react';
import EnergyUsageChart from './components/EnergyUsageChart.jsx';
import CostAnalysisChart from './components/CostAnalysisChart.jsx';
import ComparisonStats from './components/ComparsionStats.jsx';
import DateRangePicker from './components/DateRangePicker.jsx';
import Graph from './components/Graph.jsx';
import './Reports.css';

function Reports() {

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="reports-container">
      <button onClick={handleBack} className="back-btn">
          <ArrowLeft className="icon" />
          <span>Back</span>
      </button>

      <header className="reports-header">
        <h1>Energy Usage Reports</h1>
      </header>

      <div className="reports-grid">
        <section className="chart-section">
          <h2>Energy Consumption Over Time</h2>
          <EnergyUsageChart/>
        </section>

        <section className="chart-section">
          <h2>Cost Analysis</h2>
          <CostAnalysisChart/>
        </section>

        <section className="chart-section">
          <h2>Carbon Emmisions</h2>
          <Graph/>
        </section>

        <section className="stats-section">
          <h2>Statistics Compared with Previous Week</h2>
          <ComparisonStats/>
        </section>
      </div>
    </div>
  );
}

export default Reports