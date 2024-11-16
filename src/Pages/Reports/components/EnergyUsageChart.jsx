import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { format, subDays } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function EnergyUsageChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      const response = await axios.get('https://sakthi-saadak-backend.onrender.com/get-power', {
        headers: {
          'Authorization': token
        }
      });

      const groupedData = response.data;
      const today = new Date();
      const dates = Array.from({ length: 7 }, (_, i) => 
        format(subDays(today, 6 - i), 'yyyy-MM-dd')
      );
      
      const dataPoints = dates.map(date => {
        const dayData = groupedData[date] || [];
        const dayTotal = dayData.reduce((sum, entry) => sum + entry.power, 0);
        return dayTotal / 1000; // Convert to kWh
      });

      const formattedDates = dates.map(date => format(new Date(date), 'MMM dd'));

      setChartData({
        labels: formattedDates,
        datasets: [
          {
            label: 'Daily Power Usage (kWh)',
            data: dataPoints,
            fill: true,
            borderColor: '#0eff85',
            backgroundColor: 'rgba(14, 255, 133, 0.1)',
            tension: 0.4,
            pointBackgroundColor: '#0eff85',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#0eff85'
          }
        ]
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 300000);
    return () => clearInterval(interval);
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
          font: {
            size: 14
          }
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
        displayColors: false,
        callbacks: {
          label: (context) => `Power Usage: ${context.raw.toFixed(2)} KWh`
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
          font: {
            size: 12
          },
          callback: (value) => `${value} KWh`
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#fff',
          font: {
            size: 12
          }
        }
      }
    }
  };

  return (
    <div className="chart-container" style={{ height: '400px', width: '100%', padding: '20px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default EnergyUsageChart