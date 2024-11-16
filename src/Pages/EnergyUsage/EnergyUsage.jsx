import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Zap, Plus, Trash2 } from 'lucide-react';
import axios from 'axios';
import EnergyMeter from './Components/EnergyMeter.jsx';
import './EnergyUsage.css';

function EnergyUsage() {
  const [appliances, setAppliances] = useState([]);
  const [newAppliance, setNewAppliance] = useState({
    name: '',
    consumption: '',
    threshold: '',
    cost: ''
  });

  const formRef = useRef(null);

  // Function to fetch appliances from the database
  const fetchAppliances = async () => {
    try {
      const token = localStorage.getItem('token');
      const currentDate = new Date().toISOString().split('T')[0];
      
      const response = await axios.get(`http://localhost:5000/get-appliance?date=${currentDate}`, {
        headers: {
          Authorization: token,
          Accept: 'application/json'
        }
      });

      const costs = {
        'Andhra Pradesh' : 6,
        'Arunachal Pradesh' : 5.5,
        'Assam' : 5.75,
        'Bihar' : 6.75,
        'Chhattisgarh' : 5,
        'Goa' : 3.75,
        'Gujarat' : 5.25,
        'Haryana' : 6.25,
        'Himachal Pradesh' : 4.25,
        'Jharkhand' : 6.25,
        'Karnataka' : 5.5,
        'Kerala' : 4.25,
        'Madhya Pradesh' : 7,
        'Maharashtra' : 6.5,
        'Manipur' : 5.75,
        'Meghalaya' : 4.75,
        'Mizoram' : 5.5,
        'Nagaland' : 5.5,
        'Odisha' : 5.5,
        'Punjab' : 5,
        'Rajasthan' : 6,
        'Sikkim' : 4.5,
        'Tamil Nadu' : 5.25,
        'Telangana' : 6.25,
        'Tripura' : 5,
        'Uttar Pradesh' : 6.5,
        'Uttarakhand' : 4.75,
        'West Bengal' : 6,
        'Andaman and Nicobar Islands' : 7.5,
        'Chandigarh' : 5,
        'Dadra and Nagar Haveli' : 4.5,
        'Daman and Diu' : 4.5,
        'Lakshadweep' : 5,
        'Delhi' : 4.5,
        'Puducherry' : 4.5,
        'Ladakh' : 6.25,
        'Jammu and Kashmir' : 6.25
    };

      const locationResponse = await axios.get('http://localhost:5000/get-location', {
        headers: {
          Authorization: token,
          Accept: 'application/json'
        }
      });

      const location = locationResponse.data.location;
      const stateCost = costs[location];

      const transformedAppliances = response.data
        .filter(app => app.date === currentDate)
        .map(app => ({
          id: app._id,
          name: app.appliance,
          consumption: app.rating * app.time,
          threshold: getThreshold(app.appliance),
          cost: ((app.rating * app.time * stateCost) / 1000).toFixed(2)
        }));

      setAppliances(transformedAppliances);
    } catch (error) {
      console.error('Error fetching appliances:', error);
    }
  };

  // Function to get threshold based on appliance type
  const getThreshold = (appliance) => {
    const thresholds = {
      'Refrigerator': 150 * 24,
      'Microwave': 1000 * 0.5,
      'Washing Machine': 700 * 0.5,
      'Electric Stove': 1500 * 1,
      'Water Heater': 2000 * 0.5,
      'Dishwasher': 1500 * 1,
      'Kettle': 1500 * 0.5,
      'Fan': 70 * 8,
      'Television': 120 * 4,
      'Vacuum': 1000 * 0.5,
      'Blender': 500 * 0.2,
      'Iron': 1500 * 0.5,
      'Light': 20 * 8,
      'Computer': 250 * 4
  };
    return thresholds[appliance] || 0;
  };

  const handleDeleteAppliance = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/delete-appliance/${id}`, {
        headers: {
          Authorization: token
        }
      });
      setAppliances(appliances.filter(app => app.id !== id));
    } catch (error) {
      console.error('Error deleting appliance:', error);
    }
  };

  useEffect(() => {
    fetchAppliances();
  }, []);

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
                {appliances.map((appliance,index) => (
                  <tr key={appliance.id || index} className={Number(appliance.consumption) > Number(appliance.threshold) ? 'threshold-exceeded' : ''}>
                    <td>{appliance.name}</td>
                    <td>{appliance.consumption}</td>
                    <td>{appliance.threshold}</td>
                    <td>₹{appliance.cost}</td>
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

export default EnergyUsage;
