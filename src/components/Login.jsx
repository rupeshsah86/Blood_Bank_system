import React, { useState } from 'react';
import { authAPI } from '../services/api';

const Login = ({ onLogin, switchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authAPI.login(formData);
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data));
      onLogin(response.data.data);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed: ' + error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🩸</div>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to your e-Blood Bank account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            className="auth-input"
          />
          
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
            className="auth-input"
          />
          
          <button type="submit" className="auth-btn">
            🔐 Sign In
          </button>
        </form>
        
        <div className="auth-switch">
          Don't have an account? 
          <button onClick={switchToRegister} className="auth-link">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;