import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>
      <p className="settings-subtitle">Configure your application preferences below.</p>

      {/* Profile Settings */}
      <section className="settings-section">
        <h3 className="section-heading">Profile Information</h3>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="john@example.com" />
        </div>
      </section>

      {/* Notifications */}
      <section className="settings-section">
        <h3 className="section-heading">Notifications</h3>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" defaultChecked /> Receive email updates
          </label>
          <label>
            <input type="checkbox" /> Notify me about chart insights
          </label>
          <label>
            <input type="checkbox" /> Weekly summaries
          </label>
        </div>
      </section>

      {/* Appearance */}
      <section className="settings-section">
        <h3 className="section-heading">Appearance</h3>
        <div className="theme-toggle">
          <span>Light Mode</span>
          <div className="toggle-switch">
            <input type="checkbox" id="themeSwitch" />
            <label htmlFor="themeSwitch" className="switch"></label>
          </div>
          <span>Dark Mode</span>
        </div>
      </section>

      {/* Actions */}
      <div className="settings-actions">
        <button className="save-btn">Save Changes</button>
        <button className="reset-btn">Reset</button>
      </div>
    </div>
  );
};

export default Settings;
