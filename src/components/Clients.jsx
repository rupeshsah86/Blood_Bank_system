import React from 'react';

const Clients = ({ setCurrentPage }) => {
  const hospitals = [
    { name: 'AIIMS New Delhi', location: 'New Delhi', type: 'Government', beds: '2,500+' },
    { name: 'Apollo Hospital', location: 'Chennai', type: 'Private', beds: '1,000+' },
    { name: 'Fortis Healthcare', location: 'Gurgaon', type: 'Private', beds: '800+' },
    { name: 'Max Healthcare', location: 'Delhi NCR', type: 'Private', beds: '1,200+' },
    { name: 'Medanta Hospital', location: 'Gurgaon', type: 'Private', beds: '1,500+' },
    { name: 'Tata Memorial Hospital', location: 'Mumbai', type: 'Government', beds: '600+' }
  ];

  const bloodBanks = [
    { name: 'Red Cross Blood Bank', location: 'Mumbai', capacity: '10,000 units' },
    { name: 'Rotary Blood Bank', location: 'Delhi', capacity: '8,000 units' },
    { name: 'Lions Blood Bank', location: 'Bangalore', capacity: '6,000 units' },
    { name: 'Government Blood Bank', location: 'Chennai', capacity: '12,000 units' }
  ];

  return (
    <div>
      {/* Clients Hero */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h1 className="section-title">🏥 Our Clients & Partners</h1>
            <p className="section-subtitle">Trusted by leading healthcare institutions across India</p>
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="advanced-stats-card">
            <span className="stats-icon">🏥</span>
            <div className="stats-number">500+</div>
            <div className="stats-label">Partner Hospitals</div>
            <div className="stats-trend">Nationwide network</div>
          </div>
          <div className="advanced-stats-card">
            <span className="stats-icon">🩸</span>
            <div className="stats-number">200+</div>
            <div className="stats-label">Blood Banks</div>
            <div className="stats-trend">Certified partners</div>
          </div>
          <div className="advanced-stats-card">
            <span className="stats-icon">🌍</span>
            <div className="stats-number">100+</div>
            <div className="stats-label">Cities Covered</div>
            <div className="stats-trend">Pan-India presence</div>
          </div>
          <div className="advanced-stats-card">
            <span className="stats-icon">⭐</span>
            <div className="stats-number">98%</div>
            <div className="stats-label">Client Satisfaction</div>
            <div className="stats-trend">Excellent rating</div>
          </div>
        </div>
      </div>

      {/* Partner Hospitals */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h2 className="section-title">🏥 Partner Hospitals</h2>
            <p className="section-subtitle">Leading healthcare institutions using our platform</p>
          </div>
        </div>
        
        <div className="table-container">
          <table className="advanced-table">
            <thead>
              <tr>
                <th>Hospital Name</th>
                <th>Location</th>
                <th>Type</th>
                <th>Capacity</th>
                <th>Partnership Status</th>
              </tr>
            </thead>
            <tbody>
              {hospitals.map((hospital, index) => (
                <tr key={index}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span className="donor-avatar" style={{ marginRight: '12px' }}>
                        {hospital.name.charAt(0)}
                      </span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#1f2937' }}>{hospital.name}</div>
                        <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Premier Healthcare</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      📍 {hospital.location}
                    </div>
                  </td>
                  <td>
                    <span className={`stock-status ${hospital.type === 'Government' ? 'status-approved' : 'status-pending'}`}>
                      {hospital.type}
                    </span>
                  </td>
                  <td>{hospital.beds} beds</td>
                  <td>
                    <span className="stock-status status-approved">
                      ✅ Active Partner
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Blood Bank Partners */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h2 className="section-title">🩸 Blood Bank Partners</h2>
            <p className="section-subtitle">Certified blood banks in our network</p>
          </div>
        </div>
        
        <div className="grid grid-2">
          {bloodBanks.map((bank, index) => (
            <div key={index} className="advanced-stats-card" style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '3rem' }}>🩸</div>
                <div>
                  <h3 style={{ color: '#dc2626', marginBottom: '4px' }}>{bank.name}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>📍 {bank.location}</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ color: '#1f2937', fontWeight: '600' }}>Capacity: {bank.capacity}</p>
                  <span className="stock-status status-approved">✅ Certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h2 className="section-title">💬 Client Testimonials</h2>
            <p className="section-subtitle">What our partners say about us</p>
          </div>
        </div>
        
        <div className="grid grid-3">
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '2rem', marginBottom: '16px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ color: '#64748b', fontStyle: 'italic', marginBottom: '16px', lineHeight: '1.6' }}>
              "e-Blood Bank has revolutionized our blood procurement process. The platform is intuitive 
              and has significantly reduced our response time for emergency cases."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="donor-avatar">DM</div>
              <div>
                <div style={{ fontWeight: '600', color: '#1f2937' }}>Dr. Medical Director</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>AIIMS New Delhi</div>
              </div>
            </div>
          </div>
          
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '2rem', marginBottom: '16px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ color: '#64748b', fontStyle: 'italic', marginBottom: '16px', lineHeight: '1.6' }}>
              "The real-time inventory management and automated matching system has improved our 
              efficiency by 300%. Highly recommended for all healthcare institutions."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="donor-avatar">BB</div>
              <div>
                <div style={{ fontWeight: '600', color: '#1f2937' }}>Blood Bank Manager</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Red Cross Mumbai</div>
              </div>
            </div>
          </div>
          
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '2rem', marginBottom: '16px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ color: '#64748b', fontStyle: 'italic', marginBottom: '16px', lineHeight: '1.6' }}>
              "Outstanding platform with excellent customer support. The emergency response feature 
              has been a game-changer for our critical care unit."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="donor-avatar">HD</div>
              <div>
                <div style={{ fontWeight: '600', color: '#1f2937' }}>Hospital Director</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Apollo Chennai</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h2 className="section-title">🤝 Partnership Benefits</h2>
            <p className="section-subtitle">Why leading institutions choose us</p>
          </div>
        </div>
        
        <div className="grid grid-2">
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <h3 style={{ color: '#dc2626', marginBottom: '16px' }}>🏥 For Hospitals</h3>
            <ul style={{ color: '#64748b', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li>24/7 blood availability tracking</li>
              <li>Emergency blood procurement</li>
              <li>Automated inventory management</li>
              <li>Real-time donor matching</li>
              <li>Compliance and quality assurance</li>
              <li>Cost-effective solutions</li>
            </ul>
          </div>
          
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <h3 style={{ color: '#dc2626', marginBottom: '16px' }}>🩸 For Blood Banks</h3>
            <ul style={{ color: '#64748b', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li>Efficient inventory management</li>
              <li>Donor database management</li>
              <li>Quality control systems</li>
              <li>Automated expiry tracking</li>
              <li>Network expansion opportunities</li>
              <li>Digital transformation support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Join Us CTA */}
      <div className="section-card" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)', color: 'white' }}>
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🤝 Become Our Partner</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
            Join hundreds of healthcare institutions in our mission to save lives
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn" 
              style={{ padding: '16px 32px', fontSize: '1.1rem', background: 'white', color: '#dc2626' }}
              onClick={() => setCurrentPage('contact')}
            >
              🏥 Hospital Partnership
            </button>
            <button 
              className="btn" 
              style={{ padding: '16px 32px', fontSize: '1.1rem', background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid white' }}
              onClick={() => setCurrentPage('contact')}
            >
              🩸 Blood Bank Partnership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;