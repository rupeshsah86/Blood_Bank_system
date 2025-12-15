import React, { useState, useEffect } from 'react';
import { donorsAPI, bloodBankAPI, requestsAPI } from '../services/api';

const Dashboard = ({ user }) => {
  const [donors, setDonors] = useState([]);
  const [bloodStock, setBloodStock] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      if (user.role === 'admin' || user.role === 'hospital') {
        const donorsRes = await donorsAPI.getDonors();
        setDonors(donorsRes.data.data);
      }
      
      const stockRes = await bloodBankAPI.getBloodStock();
      setBloodStock(stockRes.data.data);
      
      if (user.role === 'admin' || user.role === 'hospital') {
        const requestsRes = await requestsAPI.getRequests();
        setRequests(requestsRes.data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="dashboard-hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to e-Blood Bank Dashboard</h1>
          <p className="hero-subtitle">Managing life-saving blood donations across the nation</p>
        </div>
      </div>

      {/* Advanced Stats Overview */}
      <div className="stats-grid">
        <div className="advanced-stats-card">
          <span className="stats-icon">🩸</span>
          <div className="stats-number">{bloodStock.length}</div>
          <div className="stats-label">Blood Types Available</div>
          <div className="stats-trend">+2 this week</div>
        </div>
        <div className="advanced-stats-card">
          <span className="stats-icon">📊</span>
          <div className="stats-number">{bloodStock.reduce((sum, stock) => sum + stock.quantity, 0)}</div>
          <div className="stats-label">Total Units in Stock</div>
          <div className="stats-trend">+15 today</div>
        </div>
        <div className="advanced-stats-card">
          <span className="stats-icon">👤</span>
          <div className="stats-number">{donors.length}</div>
          <div className="stats-label">Registered Donors</div>
          <div className="stats-trend">+5 this month</div>
        </div>
        <div className="advanced-stats-card">
          <span className="stats-icon">📝</span>
          <div className="stats-number">{requests.length}</div>
          <div className="stats-label">Active Requests</div>
          <div className="stats-trend">{requests.filter(r => r.status === 'pending').length} pending</div>
        </div>
      </div>
      
      {/* Blood Stock Inventory */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h3 className="section-title">
              🩸 Blood Stock Inventory
            </h3>
            <p className="section-subtitle">Real-time blood availability across all locations</p>
          </div>
          <button className="section-action">
            + Add Stock
          </button>
        </div>
        
        {bloodStock.length > 0 ? (
          <div className="blood-stock-grid">
            {bloodStock.map((stock) => (
              <div key={stock._id} className="blood-stock-card">
                <div className="blood-group-badge">{stock.bloodGroup}</div>
                <div className="stock-quantity">{stock.quantity}</div>
                <div className="stock-location">📍 {stock.location}</div>
                <div className={`stock-status status-${stock.status.replace('_', '-')}`}>
                  {stock.status.replace('_', ' ')}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🩸</div>
            <div className="empty-title">No Blood Stock Available</div>
            <div className="empty-subtitle">Add blood stock to get started</div>
          </div>
        )}
      </div>

      {/* Registered Donors */}
      {(user.role === 'admin' || user.role === 'hospital') && (
        <div className="section-card">
          <div className="section-header">
            <div>
              <h3 className="section-title">
                👤 Registered Donors
              </h3>
              <p className="section-subtitle">{donors.length} active donors ready to save lives</p>
            </div>
            <button className="section-action">
              + Add Donor
            </button>
          </div>
          
          {donors.length > 0 ? (
            <div className="table-container">
              <table className="advanced-table">
                <thead>
                  <tr>
                    <th>Donor</th>
                    <th>Blood Group</th>
                    <th>Location</th>
                    <th>Contact</th>
                    <th>Age</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {donors.map((donor) => (
                    <tr key={donor._id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span className="donor-avatar">
                            {donor.name.charAt(0).toUpperCase()}
                          </span>
                          <div>
                            <div style={{ fontWeight: '600', color: '#1f2937' }}>{donor.name}</div>
                            <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{donor.email}</div>
                          </div>
                        </div>
                      </td>
                      <td><span className="blood-group-badge">{donor.bloodGroup}</span></td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          📍 {donor.city}
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          📞 {donor.phone}
                        </div>
                      </td>
                      <td>{donor.age} years</td>
                      <td>
                        <span className="stock-status status-available">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">👤</div>
              <div className="empty-title">No Donors Registered</div>
              <div className="empty-subtitle">Start by adding blood donors to the system</div>
            </div>
          )}
        </div>
      )}

      {/* Blood Requests */}
      {(user.role === 'admin' || user.role === 'hospital') && (
        <div className="section-card">
          <div className="section-header">
            <div>
              <h3 className="section-title">
                📝 Blood Requests
              </h3>
              <p className="section-subtitle">
                {requests.length} total requests • {requests.filter(r => r.status === 'pending').length} pending approval
              </p>
            </div>
            <button className="section-action">
              + New Request
            </button>
          </div>
          
          {requests.length > 0 ? (
            <div className="table-container">
              <table className="advanced-table">
                <thead>
                  <tr>
                    <th>Patient Details</th>
                    <th>Blood Required</th>
                    <th>Hospital</th>
                    <th>Urgency Level</th>
                    <th>Request Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <tr key={request._id}>
                      <td>
                        <div>
                          <div style={{ fontWeight: '600', color: '#1f2937' }}>{request.patientName}</div>
                          <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Patient ID: #{request._id.slice(-6)}</div>
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="blood-group-badge">{request.bloodGroup}</span>
                          <span style={{ fontWeight: '600' }}>{request.quantity} units</span>
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          🏥 {request.hospital}
                        </div>
                      </td>
                      <td>
                        <span className={`stock-status urgency-${request.urgency}`}>
                          {request.urgency === 'critical' && '🔴'}
                          {request.urgency === 'high' && '🟠'}
                          {request.urgency === 'medium' && '🔵'}
                          {request.urgency === 'low' && '🟢'}
                          {' '}{request.urgency.toUpperCase()}
                        </span>
                      </td>
                      <td>
                        <span className={`stock-status status-${request.status}`}>
                          {request.status === 'pending' && '⏳'}
                          {request.status === 'approved' && '✅'}
                          {request.status === 'rejected' && '❌'}
                          {' '}{request.status.toUpperCase()}
                        </span>
                      </td>
                      <td>
                        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                          {new Date(request.createdAt || request.requestDate).toLocaleDateString()}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📝</div>
              <div className="empty-title">No Blood Requests</div>
              <div className="empty-subtitle">Blood requests will appear here when submitted</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;