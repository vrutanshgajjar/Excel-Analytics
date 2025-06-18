import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import History from './pages/History';
import Charts from './pages/Charts';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import './styles/global.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = () => {
    setCurrentUser({ name: 'John Doe', email: 'john@example.com' });
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setCurrentUser({ name: 'New User', email: 'newuser@example.com' });
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setActiveTab('dashboard');
  };

  if (!isAuthenticated) {
    return (
      <AuthForm
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      />
    );
  }

  return (
    <div className="app">
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <div className="app-body">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="app-main">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'upload' && <Upload />}
          {activeTab === 'history' && <History />}
          {activeTab === 'charts' && <Charts />}
          {activeTab === 'profile' && <Profile />}
          {activeTab === 'settings' && <Settings />}
        </main>
      </div>
    </div>
  );
};

export default App;
