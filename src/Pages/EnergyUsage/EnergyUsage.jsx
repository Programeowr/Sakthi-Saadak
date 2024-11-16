import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Zap, Plus, Trash2 } from 'lucide-react';
import EnergyMeter from './Components/EnergyMeter.jsx';
import './EnergyUsage.css';

function EnergyUsage() {
  const [appliances, setAppliances] = useState([
    { id: 1, name: 'Refrigerator', consumption: 150, threshold: 200, cost: 45 },
    { id: 2, name: 'Air Conditioner', consumption: 1500, threshold: 2000, cost: 150 },
    { id: 3, name: 'LED TV', consumption: 100, threshold: 150, cost: 30 }
  ]);

  const [newAppliance, setNewAppliance] = useState({
    name: '',
    consumption: '',
    threshold: '',
    cost: ''
  });

  const formRef = useRef(null);

  const handleAddAppliance = (e) => {
    e.preventDefault();
    if (newAppliance.name && newAppliance.consumption) {
      setAppliances([...appliances, { ...newAppliance, id: Date.now() }]);
      setNewAppliance({ name: '', consumption: '', threshold: '', cost: '' });
      formRef.current.reset();
    }
  };

  const handleDeleteAppliance = (id) => {
    setAppliances(appliances.filter(app => app.id !== id));
  };

  const totalConsumption = appliances.reduce((sum, app) => sum + Number(app.consumption), 0);

  return (
    <main className="energy-main">
      <section className="energy-hero">
        <div className="energy-hero-content">
          <h1>Energy Usage Monitor</h1>
          <p>Track and optimize your household energy consumption with our interactive dashboard.</p>
        </div>
        <div className="energy-hero-animation">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <EnergyMeter value={totalConsumption} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </section>

      <section className="energy-dashboard">
        <div className="energy-section-header">
          <h2>Appliance Energy Tracker</h2>
          <div className="total-consumption">
            <Zap className="zap-icon" />
            <span>Total Consumption: {totalConsumption} W-h</span>
          </div>
        </div>

        <div className="energy-grid">
          <div className="appliance-table">
            <table className="input-appliance-table">
              <thead>
                <tr>
                  <th>Appliance Name</th>
                  <th>Average Power Consumption (W-h)</th>
                  <th>Threshold</th>
                  <th>Cost</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="input-inputValuesBody">
                {appliances.map(appliance => (
                  <tr key={appliance.id} className={Number(appliance.consumption) > Number(appliance.threshold) ? 'threshold-exceeded' : ''}>
                    <td>{appliance.name}</td>
                    <td>{appliance.consumption}</td>
                    <td>{appliance.threshold}</td>
                    <td>${appliance.cost}</td>
                    <td>
                      <button 
                        className="delete-button"
                        onClick={() => handleDeleteAppliance(appliance.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EnergyUsage