import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js

import file from '../../../../Assets/edusity_assets/final-01.csv';

const PieChart = () => {
  const [data, setData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(file);
        const text = await response.text();
        const rows = text.split('\n').slice(1); // Remove header row
        const parsedData = rows.map(row => {
          const [Sr_No, visit_date, Company_Name, Comp, IT, ENTC, Sal_lpa, total_no, total, Month] = row.split(',');
          return { Company_Name, ENTC: parseInt(ENTC), Sal_lpa: parseFloat(Sal_lpa) };
        }).filter(entry => entry.Sal_lpa > 20); // Filter out companies with Sal_lpa less than 10
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }
    if (data) {
      const companies = {};
      data.forEach(entry => {
        if (!companies[entry.Company_Name]) {
          companies[entry.Company_Name] = 0;
        }
        companies[entry.Company_Name] += entry.ENTC;
      });
      const colors = generateColors(Object.keys(companies).length);

      const chartData = {
        labels: Object.keys(companies),
        datasets: [
          {
            label: 'IT Students Placed by Company',
            data: Object.values(companies),
            backgroundColor: colors,
            borderWidth: 1,
          },
        ],
      };

      const ctx = document.getElementById('pie-chart');
      const newChartInstance = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
          layout: {
            padding: 20,
          },
          maintainAspectRatio: true,
        },
      });

      setChartInstance(newChartInstance);
    }
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>IT Students Placed by Company</h2>
      <canvas id="pie-chart"></canvas>
    </div>
  );
};

const generateColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    colors.push(`rgba(${r}, ${g}, ${b}, 0.6)`);
  }
  return colors;
};

export default PieChart;
