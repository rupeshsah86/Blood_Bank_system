import React, { useState } from 'react';
import { authAPI } from '../services/api';

const Register = ({ onRegister, switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'donor'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authAPI.register(formData);
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data));
      onRegister(response.data.data);
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed: ' + error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🩸</div>
          <h2 className="auth-title">Join e-Blood Bank</h2>
          <p className="auth-subtitle">Create your account to save lives</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            className="auth-input"
          />
          
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
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
            className="auth-input"
          />
          
          <select
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
            className="auth-select"
          >
            <option value="donor">👤 Donor</option>
            <option value="hospital">🏥 Hospital</option>
            <option value="admin">⚙️ Admin</option>
          </select>
          
          <button type="submit" className="auth-btn">
            ✨ Create Account
          </button>
        </form>
        
        <div className="auth-switch">
          Already have an account? 
          <button onClick={switchToLogin} className="auth-link">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;