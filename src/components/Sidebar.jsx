import React from 'react';
import { 
  BarChart3, 
  Upload, 
  History, 
  PieChart, 
  User, 
  Settings,
  ChevronRight,
  Zap
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab, isOpen, closeSidebar }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, color: 'blue' },
    { id: 'upload', label: 'Upload File', icon: Upload, color: 'green' },
    { id: 'history', label: 'History', icon: History, color: 'purple' },
    { id: 'charts', label: 'Charts', icon: PieChart, color: 'orange' },
    { id: 'profile', label: 'Profile', icon: User, color: 'cyan' },
    { id: 'settings', label: 'Settings', icon: Settings, color: 'gray' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          {/* Premium Badge */}
          <div className="premium-badge">
            <Zap className="premium-icon" />
            <div className="premium-text">
              <span className="premium-title">Pro Plan</span>
              <span className="premium-subtitle">Advanced Analytics</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="sidebar-nav">
            <div className="nav-section">
              <h3 className="nav-title">Main Menu</h3>
              {tabs.slice(0, 4).map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`nav-item ${activeTab === tab.id ? 'nav-item-active' : ''}`}
                    data-color={tab.color}
                  >
                    <div className="nav-item-content">
                      <div className="nav-icon">
                        <Icon className="icon" />
                      </div>
                      <span className="nav-label">{tab.label}</span>
                      {activeTab === tab.id && (
                        <ChevronRight className="nav-arrow" />
                      )}
                    </div>
                    <div className="nav-item-highlight"></div>
                  </button>
                );
              })}
            </div>

            <div className="nav-section">
              <h3 className="nav-title">Account</h3>
              {tabs.slice(4).map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`nav-item ${activeTab === tab.id ? 'nav-item-active' : ''}`}
                    data-color={tab.color}
                  >
                    <div className="nav-item-content">
                      <div className="nav-icon">
                        <Icon className="icon" />
                      </div>
                      <span className="nav-label">{tab.label}</span>
                      {activeTab === tab.id && (
                        <ChevronRight className="nav-arrow" />
                      )}
                    </div>
                    <div className="nav-item-highlight"></div>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="sidebar-footer">
            <div className="footer-content">
              <p className="footer-text">Excel Analytics v2.0</p>
              <p className="footer-subtext">Professional Edition</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;