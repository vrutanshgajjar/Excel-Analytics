import React from 'react';
import {
  FileSpreadsheet,
  BarChart3,
  TrendingUp,
  Download,
  Upload,
  Activity
} from 'lucide-react';
import StatsCard from '../components/StatsCard';
import './Dashboard.css';

const Dashboard = () => {
  const uploadHistory = [
    {
      id: 1,
      fileName: 'sales_data_2024.xlsx',
      uploadDate: '2024-12-10',
      chartType: 'Bar Chart',
      status: 'Completed',
      records: 1250,
    },
    {
      id: 2,
      fileName: 'customer_analytics.xlsx',
      uploadDate: '2024-12-08',
      chartType: '3D Column',
      status: 'Completed',
      records: 856,
    },
    {
      id: 3,
      fileName: 'revenue_breakdown.xlsx',
      uploadDate: '2024-12-05',
      chartType: 'Pie Chart',
      status: 'Processing',
      records: 432,
    },
  ];

  return (
    <div className="dashboard">
      <div className="stats-grid">
        <StatsCard icon={FileSpreadsheet} title="Total Files Uploaded" value="24" trend={12} />
        <StatsCard icon={BarChart3} title="Charts Generated" value="87" trend={8} />
        <StatsCard icon={TrendingUp} title="Data Points Analyzed" value="15.2K" trend={15} />
        <StatsCard icon={Download} title="Downloads" value="156" trend={-3} />
      </div>

      <div className="dashboard-section">
        <h3>Quick Actions</h3>
        <div className="quick-actions">
          <button>
            <Upload size={20} />
            <span>
              <strong>Upload New File</strong>
              <br />
              Import Excel data
            </span>
          </button>
          <button>
            <BarChart3 size={20} />
            <span>
              <strong>Create Chart</strong>
              <br />
              Generate visualization
            </span>
          </button>
          <button>
            <Activity size={20} />
            <span>
              <strong>AI Insights</strong>
              <br />
              Get smart analysis
            </span>
          </button>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="dashboard-header">
          <h3>Recent Activity</h3>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="recent-list">
          {uploadHistory.map((item) => (
            <div key={item.id} className="recent-item">
              <div className="file-icon">
                <FileSpreadsheet size={16} />
              </div>
              <div className="file-info">
                <p className="file-name">{item.fileName}</p>
                <p className="file-meta">{item.chartType} • {item.records} records</p>
              </div>
              <div className="file-date-status">
                <p className="file-date">{item.uploadDate}</p>
                <span className={`status-badge ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
