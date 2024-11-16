import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Zap, DollarSign, Leaf } from 'lucide-react';
import axios from 'axios';
import { format, subDays, startOfWeek, endOfWeek } from 'date-fns';

function ComparisonStats() {
  const [stats, setStats] = useState({
    usage: {
      current: 0,
      previous: 0,
      unit: 'kWh'
    },
    cost: {
      current: 0,
      previous: 0,
      unit: '₹'
    },
    carbon: {
      current: 0,
      previous: 0,
      unit: 'kg'
    }
  });

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 300000); // Update every 5 minutes
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      // Get current and previous week dates
      const today = new Date();
      const currentWeekStart = startOfWeek(today);
      const previousWeekStart = subDays(currentWeekStart, 7);

      const response = await axios.get('https://sakthi-saadak-backend.onrender.com/get-power', {
        headers: {
          'Authorization': token
        }
      });

      const groupedData = response.data;

      // Calculate current week stats
      let currentWeekPower = 0;
      let currentWeekCost = 0;
      let previousWeekPower = 0;
      let previousWeekCost = 0;

      Object.entries(groupedData).forEach(([date, dayData]) => {
        const dateObj = new Date(date);
        const power = dayData.reduce((sum, entry) => sum + entry.power, 0);
        const cost = dayData.reduce((sum, entry) => sum + entry.cost, 0);

        if (dateObj >= currentWeekStart && dateObj <= today) {
          currentWeekPower += power;
          currentWeekCost += cost;
        } else if (dateObj >= previousWeekStart && dateObj < currentWeekStart) {
          previousWeekPower += power;
          previousWeekCost += cost;
        }
      });

      currentWeekPower = currentWeekPower / 1000;
      previousWeekPower = previousWeekPower / 1000;

      const currentCarbon = currentWeekPower * 0.82;
      const previousCarbon = previousWeekPower * 0.82;

      setStats({
        usage: {
          current: Math.round(currentWeekPower * 100) / 100,
          previous: Math.round(previousWeekPower * 100) / 100,
          unit: 'kWh'
        },
        cost: {
          current: Math.round(currentWeekCost * 100) / 100,
          previous: Math.round(previousWeekCost * 100) / 100,
          unit: '₹'
        },
        carbon: {
          current: Math.round(currentCarbon * 100) / 100,
          previous: Math.round(previousCarbon * 100) / 100,
          unit: 'kg'
        }
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const calculateChange = (current, previous) => {
    if (previous === 0) return '0.0';
    const change = ((current - previous) / previous) * 100;
    return change.toFixed(1);
  };

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-header">
          <Zap className="stat-icon" />
          <h3>Energy Usage</h3>
        </div>
        <div className="stat-content">
          <p className="stat-value">{stats.usage.current} {stats.usage.unit}</p>
          <div className="stat-change">
            {stats.usage.current < stats.usage.previous ? (
              <>
                <TrendingDown className="trend-icon down" />
                <span className="positive">
                  {Math.abs(calculateChange(stats.usage.current, stats.usage.previous))}% Less
                </span>
              </>
            ) : (
              <>
                <TrendingUp className="trend-icon up" />
                <span className="negative">
                  {calculateChange(stats.usage.current, stats.usage.previous)}% More
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <DollarSign className="stat-icon" />
          <h3>Cost</h3>
        </div>
        <div className="stat-content">
          <p className="stat-value">{stats.cost.unit} {stats.cost.current}</p>
          <div className="stat-change">
            {stats.cost.current < stats.cost.previous ? (
              <>
                <TrendingDown className="trend-icon down" />
                <span className="positive">
                  {Math.abs(calculateChange(stats.cost.current, stats.cost.previous))}% Less
                </span>
              </>
            ) : (
              <>
                <TrendingUp className="trend-icon up" />
                <span className="negative">
                  {calculateChange(stats.cost.current, stats.cost.previous)}% More
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <Leaf className="stat-icon" />
          <h3>Carbon Footprint</h3>
        </div>
        <div className="stat-content">
          <p className="stat-value">{stats.carbon.current} {stats.carbon.unit}</p>
          <div className="stat-change">
            {stats.carbon.current < stats.carbon.previous ? (
              <>
                <TrendingDown className="trend-icon down" />
                <span className="positive">
                  {Math.abs(calculateChange(stats.carbon.current, stats.carbon.previous))}% Less
                </span>
              </>
            ) : (
              <>
                <TrendingUp className="trend-icon up" />
                <span className="negative">
                  {calculateChange(stats.carbon.current, stats.carbon.previous)}% More
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonStats;
