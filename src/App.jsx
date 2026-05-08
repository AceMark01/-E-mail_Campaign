import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('login'); // 'login', 'dashboard'

  useEffect(() => {
    // Check for existing session
    const user = localStorage.getItem('botivate_mail_session');
    if (user) {
      setIsAuthenticated(true);
      setCurrentView('dashboard');
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('botivate_mail_session');
    setIsAuthenticated(false);
    setCurrentView('login');
  };

  if (isAuthenticated && currentView === 'dashboard') {
    return <Dashboard onLogout={handleLogout} />;
  }

  // Default to Login
  return <Login onLogin={handleLogin} />;
}

export default App;