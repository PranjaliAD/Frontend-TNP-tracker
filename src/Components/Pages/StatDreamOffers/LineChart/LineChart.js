import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js
import file from '../../../../Assets/edusity_assets/final-01.csv';

const LineChart = () => {
  const chartRef = useRef(null);
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
          return { Month, Sal_lpa: parseFloat(Sal_lpa) };
        });
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && chartRef.current) {
      const averageSalaryByMonth = {};
      const totalSalaryByMonth = {};
      const countByMonth = {};
      data.forEach(({ Month, Sal_lpa }) => {
        if (!totalSalaryByMonth[Month]) {
          totalSalaryByMonth[Month] = 0;
          countByMonth[Month] = 0;
        }
        totalSalaryByMonth[Month] += Sal_lpa;
        countByMonth[Month]++;
      });
      Object.keys(totalSalaryByMonth).forEach(Month => {
        averageSalaryByMonth[Month] = totalSalaryByMonth[Month] / countByMonth[Month];
      });

      const sortedMonths = Object.keys(averageSalaryByMonth).sort((a, b) => new Date(a + "-01") - new Date(b + "-01"));

      const chartData = {
        labels: sortedMonths,
        datasets: [
          {
            label: 'Average Salary (LPA)',
            data: sortedMonths.map(month => averageSalaryByMonth[month]),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      };

      if (chartInstance) {
        chartInstance.data = chartData;
        chartInstance.update();
      } else {
        const newChartInstance = new Chart(chartRef.current, {
          type: 'line',
          data: chartData,
          options: {
            scales: {
              y: {
                type: 'linear',
                position: 'left',
              },
            },
          },
        });
        setChartInstance(newChartInstance);
      }
    }
  }, [data, chartInstance]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: '500px', width: '800px' }}>
      <h2>Average Salary (LPA) by Month</h2>
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineChart;
