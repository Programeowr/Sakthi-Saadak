import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { format } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function CostAnalysisChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  const fetchCostData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      // Fetch user's cost data and average cost data
      const [userResponse, averageResponse] = await Promise.all([
        axios.get('https://sakthi-saadak-backend.onrender.com/get-power', {
          headers: { 'Authorization': token }
        }),
        axios.get('https://sakthi-saadak-backend.onrender.com/get-average-power', {
          headers: { 'Authorization': token }
        })
      ]);

      const userData = userResponse.data;
      const averageData = averageResponse.data;

      const dates = [...new Set([
        ...Object.keys(userData),
        ...Object.keys(averageData)
      ])].sort();

      const formattedDates = dates.map(date => format(new Date(date), 'MMM dd'));
      const userCosts = dates.map(date => {
        const dayData = userData[date];
        return dayData ? dayData.reduce((sum, entry) => sum + entry.cost, 0) : 0;
      });
      const averageCosts = dates.map(date => averageData[date] || 0);

      setChartData({
        labels: formattedDates,
        datasets: [
          {
            label: 'Your Cost (₹)',
            data: userCosts,
            backgroundColor: '#0eff85',
          },
          {
            label: 'Average Cost (₹)',
            data: averageCosts,
            backgroundColor: 'rgba(14, 255, 133, 0.3)',
          }
        ]
      });
    } catch (error) {
      console.error('Error fetching cost data:', error);
    }
  };

  useEffect(() => {
    fetchCostData();
    const interval = setInterval(fetchCostData, 300000); 
    return () => clearInterval(interval);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff'
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#0eff85',
        borderColor: '#0eff85',
        borderWidth: 1,
        padding: 10,
        callbacks: {
          label: (context) => `${context.dataset.label}: ₹${context.raw.toFixed(2)}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#fff',
          callback: (value) => `₹${value}`
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#fff'
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default CostAnalysisChart