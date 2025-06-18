import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-title">User Profile</h2>
      <p className="profile-subtitle">Manage your account settings and preferences below.</p>

      <div className="profile-card">
        {/* Avatar upload */}
        <div className="profile-avatar-section">
          <img
            src="https://via.placeholder.com/100"
            alt="User Avatar"
            className="profile-avatar"
          />
          <div>
            <label htmlFor="avatarUpload" className="upload-label">Change Avatar</label>
            <input type="file" id="avatarUpload" className="avatar-input" />
          </div>
        </div>

        {/* Profile Form */}
        <div className="profile-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input type="text" placeholder="Administrator" disabled />
          </div>
        </div>

        <div className="profile-actions">
          <button className="save-btn">Update Profile</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
