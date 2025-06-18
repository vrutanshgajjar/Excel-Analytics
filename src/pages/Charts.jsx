import React from 'react';
import './Charts.css';

const chartData = [
  { title: 'Sales Overview', type: 'Bar Chart', date: 'May 2025' },
  { title: 'Customer Growth', type: 'Line Chart', date: 'April 2025' },
  { title: 'Revenue Split', type: 'Pie Chart', date: 'March 2025' },
];

const Charts = () => {
  return (
    <div className="charts-page">
      <h2 className="charts-title">Chart Gallery</h2>
      <p className="charts-subtitle">Your generated charts will appear below.</p>

      <div className="chart-grid">
        {chartData.map((chart, idx) => (
          <div key={idx} className="chart-card">
            <div className="chart-header">
              <h3>{chart.title}</h3>
              <span className="chart-type">{chart.type}</span>
            </div>
            <div className="chart-footer">
              <span>Generated: {chart.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charts;
