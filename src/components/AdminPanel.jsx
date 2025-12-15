import React, { useState, useEffect } from 'react';
import { bloodBankAPI, requestsAPI } from '../services/api';

const AdminPanel = () => {
  const [bloodStock, setBloodStock] = useState([]);
  const [requests, setRequests] = useState([]);
  const [newStock, setNewStock] = useState({
    bloodGroup: '',
    quantity: '',
    location: '',
    expiryDate: '',
    status: 'available'
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const stockRes = await bloodBankAPI.getBloodStock();
      setBloodStock(stockRes.data.data);
      
      const requestsRes = await requestsAPI.getRequests();
      setRequests(requestsRes.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addBloodStock = async (e) => {
    e.preventDefault();
    try {
      await bloodBankAPI.addBloodStock(newStock);
      alert('Blood stock added successfully!');
      setNewStock({
        bloodGroup: '',
        quantity: '',
        location: '',
        expiryDate: '',
        status: 'available'
      });
      fetchData();
    } catch (error) {
      alert('Error: ' + error.response.data.message);
    }
  };

  const updateRequestStatus = async (requestId, status) => {
    try {
      await requestsAPI.updateStatus(requestId, status);
      alert(`Request ${status} successfully!`);
      fetchData();
    } catch (error) {
      alert('Error updating request');
    }
  };

  return (
    <div>
      {/* Admin Header */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h2 className="section-title">⚙️ Admin Control Panel</h2>
            <p className="section-subtitle">Manage blood inventory and approve requests</p>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="advanced-stats-card">
            <span className="stats-icon">🩸</span>
            <div className="stats-number">{bloodStock.length}</div>
            <div className="stats-label">Blood Types in Stock</div>
          </div>
          <div className="advanced-stats-card">
            <span className="stats-icon">⏳</span>
            <div className="stats-number">{requests.filter(r => r.status === 'pending').length}</div>
            <div className="stats-label">Pending Requests</div>
          </div>
          <div className="advanced-stats-card">
            <span className="stats-icon">✅</span>
            <div className="stats-number">{requests.filter(r => r.status === 'approved').length}</div>
            <div className="stats-label">Approved Today</div>
          </div>
          <div className="advanced-stats-card">
            <span className="stats-icon">📊</span>
            <div className="stats-number">{bloodStock.reduce((sum, stock) => sum + stock.quantity, 0)}</div>
            <div className="stats-label">Total Units Available</div>
          </div>
        </div>
      </div>
      
      {/* Add Blood Stock */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h3 className="section-title">🩸 Add Blood Stock</h3>
            <p className="section-subtitle">Add new blood inventory to the system</p>
          </div>
        </div>
        
        <div className="advanced-stats-card">
          <form onSubmit={addBloodStock} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Blood Group</label>
              <select
                value={newStock.bloodGroup}
                onChange={(e) => setNewStock({...newStock, bloodGroup: e.target.value})}
                required
                className="form-select"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">🅰️ A+</option>
                <option value="A-">🅰️ A-</option>
                <option value="B+">🅱️ B+</option>
                <option value="B-">🅱️ B-</option>
                <option value="AB+">🆎 AB+</option>
                <option value="AB-">🆎 AB-</option>
                <option value="O+">⭕ O+</option>
                <option value="O-">⭕ O-</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Quantity (Units)</label>
              <input
                type="number"
                placeholder="Enter quantity"
                value={newStock.quantity}
                onChange={(e) => setNewStock({...newStock, quantity: e.target.value})}
                required
                min="1"
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Location</label>
              <input
                type="text"
                placeholder="Blood bank location"
                value={newStock.location}
                onChange={(e) => setNewStock({...newStock, location: e.target.value})}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Expiry Date</label>
              <input
                type="date"
                value={newStock.expiryDate}
                onChange={(e) => setNewStock({...newStock, expiryDate: e.target.value})}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group" style={{ display: 'flex', alignItems: 'end' }}>
              <button type="submit" className="btn btn-success" style={{ width: '100%' }}>
                ➕ Add to Inventory
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Pending Requests */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h3 className="section-title">⏳ Pending Blood Requests</h3>
            <p className="section-subtitle">
              {requests.filter(req => req.status === 'pending').length} requests awaiting your approval
            </p>
          </div>
        </div>
        
        {requests.filter(req => req.status === 'pending').length > 0 ? (
          <div className="table-container">
            <table className="advanced-table">
              <thead>
                <tr>
                  <th>Patient Details</th>
                  <th>Blood Required</th>
                  <th>Hospital</th>
                  <th>Urgency Level</th>
                  <th>Request Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.filter(req => req.status === 'pending').map((request) => (
                  <tr key={request._id}>
                    <td>
                      <div>
                        <div style={{ fontWeight: '600', color: '#1f2937' }}>{request.patientName}</div>
                        <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>ID: #{request._id.slice(-6)}</div>
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
                      <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                        {new Date(request.createdAt || request.requestDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button 
                          onClick={() => updateRequestStatus(request._id, 'approved')}
                          className="btn btn-success"
                          style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                        >
                          ✅ Approve
                        </button>
                        <button 
                          onClick={() => updateRequestStatus(request._id, 'rejected')}
                          className="btn btn-danger"
                          style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                        >
                          ❌ Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">✅</div>
            <div className="empty-title">All Requests Processed</div>
            <div className="empty-subtitle">No pending blood requests at the moment</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;