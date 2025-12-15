import React, { useState } from 'react';
import { donorsAPI } from '../services/api';

const AddDonor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bloodGroup: '',
    city: '',
    age: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await donorsAPI.addDonor(formData);
      alert('Donor added successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        bloodGroup: '',
        city: '',
        age: ''
      });
    } catch (error) {
      alert('Error: ' + error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="section-card">
        <div className="section-header">
          <div>
            <h2 className="section-title">👤 Add New Donor</h2>
            <p className="section-subtitle">Register a new blood donor to save lives</p>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 500px', gap: '40px', alignItems: 'start' }}>
          <div>
            <div className="advanced-stats-card" style={{ textAlign: 'left', marginBottom: '24px' }}>
              <h3 style={{ color: '#dc2626', marginBottom: '16px', fontSize: '1.2rem' }}>📝 Donor Requirements</h3>
              <ul style={{ color: '#64748b', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Age between 18-65 years</li>
                <li>Weight minimum 50kg</li>
                <li>Good general health</li>
                <li>No recent illness or medication</li>
                <li>Valid contact information required</li>
              </ul>
            </div>
            
            <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
              <h3 style={{ color: '#dc2626', marginBottom: '16px', fontSize: '1.2rem' }}>🩸 Blood Group Compatibility</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', fontSize: '0.9rem' }}>
                <div>🅰️ A+ → A+, AB+</div>
                <div>🅰️ A- → A+, A-, AB+, AB-</div>
                <div>🅱️ B+ → B+, AB+</div>
                <div>🅱️ B- → B+, B-, AB+, AB-</div>
                <div>🆎 AB+ → AB+ (Universal Receiver)</div>
                <div>🆎 AB- → AB+, AB-</div>
                <div>⭕ O+ → A+, B+, AB+, O+</div>
                <div>⭕ O- → Universal Donor</div>
              </div>
            </div>
          </div>
          
          <div className="advanced-stats-card">
            <h3 style={{ color: '#1f2937', marginBottom: '24px', fontSize: '1.3rem', textAlign: 'center' }}>📝 Donor Registration Form</h3>
            
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label className="form-label">👤 Full Name</label>
                <input
                  type="text"
                  placeholder="Enter donor's full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">📧 Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">📞 Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">🩸 Blood Group</label>
                <select
                  value={formData.bloodGroup}
                  onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})}
                  required
                  className="form-select"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">🅰️ A+ (A Positive)</option>
                  <option value="A-">🅰️ A- (A Negative)</option>
                  <option value="B+">🅱️ B+ (B Positive)</option>
                  <option value="B-">🅱️ B- (B Negative)</option>
                  <option value="AB+">🆎 AB+ (AB Positive)</option>
                  <option value="AB-">🆎 AB- (AB Negative)</option>
                  <option value="O+">⭕ O+ (O Positive)</option>
                  <option value="O-">⭕ O- (O Negative)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">📍 City/Location</label>
                <input
                  type="text"
                  placeholder="Enter city name"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">🎂 Age</label>
                <input
                  type="number"
                  placeholder="Enter age (18-65)"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  required
                  min="18"
                  max="65"
                  className="form-input"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`btn ${loading ? 'btn-secondary' : 'btn-success'}`}
                style={{ width: '100%', marginTop: '8px' }}
              >
                {loading ? '⏳ Adding Donor...' : '✨ Register Donor'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDonor;