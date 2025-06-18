import React from 'react';
import { BarChart3, User, Menu, X, Bell, Search } from 'lucide-react';
import './Header.css';

const Header = ({ currentUser, handleLogout, toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button
            onClick={toggleSidebar}
            className="mobile-menu-btn"
          >
            {isSidebarOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
          
          <div className="logo">
            <div className="logo-icon">
              <BarChart3 className="icon" />
              <div className="logo-glow"></div>
            </div>
            <div className="logo-text">
              <h1>Excel Analytics</h1>
              <p>Professional Data Platform</p>
            </div>
          </div>
        </div>

        <div className="header-center">
          <div className="search-bar">
            <Search className="search-icon" />
            <input type="text" placeholder="Search data, charts, insights..." />
          </div>
        </div>

        <div className="header-right">
          <button className="notification-btn">
            <Bell className="icon" />
            <span className="notification-badge">3</span>
          </button>
          
          <div className="user-info">
            <div className="user-avatar">
              <User className="icon" />
              <div className="user-status"></div>
            </div>
            <div className="user-details">
              <p className="user-name">{currentUser?.name}</p>
              <p className="user-email">{currentUser?.email}</p>
            </div>
          </div>
          
          <button onClick={handleLogout} className="logout-btn">
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;