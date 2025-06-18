import React from 'react';
import { BarChart3, Sparkles } from 'lucide-react';
import './AuthForm.css';

const AuthForm = ({ isLogin, setIsLogin, handleLogin, handleRegister }) => (
  <div className="auth-container">
    <div className="auth-background-effects">
      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>
      <div className="floating-element floating-element-3"></div>
    </div>
    
    <div className="auth-card">
      <div className="auth-header">
        <div className="auth-icon">
          <BarChart3 className="icon" />
          <Sparkles className="sparkle" />
        </div>
        <h1 className="auth-title">Excel Analytics</h1>
        <p className="auth-subtitle">Transform your data into professional insights</p>
      </div>

      <div className="auth-tabs">
        <button
          onClick={() => setIsLogin(true)}
          className={`auth-tab ${isLogin ? 'active' : ''}`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`auth-tab ${!isLogin ? 'active' : ''}`}
        >
          Register
        </button>
      </div>

      <div className="auth-form">
        {!isLogin && (
          <div className="input-group">
            <input type="text" placeholder="Full Name" />
            <div className="input-underline"></div>
          </div>
        )}
        <div className="input-group">
          <input type="email" placeholder="Email Address" />
          <div className="input-underline"></div>
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" />
          <div className="input-underline"></div>
        </div>
        {!isLogin && (
          <div className="input-group">
            <input type="password" placeholder="Confirm Password" />
            <div className="input-underline"></div>
          </div>
        )}
        <button 
          onClick={isLogin ? handleLogin : handleRegister}
          className="auth-submit-btn"
        >
          <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
          <div className="btn-shine"></div>
        </button>
      </div>

      <div className="auth-footer">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Register here' : 'Login here'}
        </button>
      </div>
    </div>
  </div>
);

export default AuthForm;