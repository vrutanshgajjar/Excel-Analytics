import React from 'react';
import './History.css';

const History = () => {
  const historyData = [
    { id: 1, file: 'sales_data_2024.xlsx', date: '2024-12-10', chart: 'Bar Chart', records: 1250, status: 'Completed' },
    { id: 2, file: 'customer_analytics.xlsx', date: '2024-12-08', chart: '3D Column', records: 856, status: 'Completed' },
    { id: 3, file: 'revenue_breakdown.xlsx', date: '2024-12-05', chart: 'Pie Chart', records: 432, status: 'Processing' }
  ];

  return (
    <div className="history">
      <h2>Upload History</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>File</th>
            <th>Date</th>
            <th>Chart Type</th>
            <th>Records</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map(item => (
            <tr key={item.id}>
              <td>{item.file}</td>
              <td>{item.date}</td>
              <td>{item.chart}</td>
              <td>{item.records.toLocaleString()}</td>
              <td className={item.status === 'Completed' ? 'completed' : 'processing'}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
