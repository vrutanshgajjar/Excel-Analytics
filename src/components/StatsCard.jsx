import React from 'react';
import './StatsCard.css';

const StatsCard = ({ icon, title, value, trend }) => {
  const Icon = icon;
  return (
    <div className="stats-card">
      <div className="stats-info">
        <p className="stats-title">{title}</p>
        <p className="stats-value">{value}</p>
        {trend !== undefined && (
          <p className={`stats-trend ${trend >= 0 ? 'positive' : 'negative'}`}>
            {trend >= 0 ? '+' : ''}{trend}% from last month
          </p>
        )}
      </div>
      <div className="stats-icon">
        <Icon size={24} />
      </div>
    </div>
  );
};

export default StatsCard;
