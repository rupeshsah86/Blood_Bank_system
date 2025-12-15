import React from 'react';

const Home = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="dashboard-hero" style={{ padding: '60px 0' }}>
        <div className="hero-content">
          <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
            🩸 e-Blood Bank Management System
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '1.3rem', marginBottom: '30px' }}>
            Connecting donors with patients • Saving lives across the nation
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn btn-primary" 
              style={{ padding: '16px 32px', fontSize: '1.1rem' }}
              onClick={() => setCurrentPage('addDonor')}
            >
              🩸 Donate Blood
            </button>
            <button 
              className="btn" 
              style={{ padding: '16px 32px', fontSize: '1.1rem', background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid white' }}
              onClick={() => setCurrentPage('request')}
            >
              📞 Emergency Request
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h2 className="section-title">📊 Our Impact</h2>
            <p className="section-subtitle">Making a difference in healthcare nationwide</p>
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="advanced-stats-card">
            <span className="stats-icon">🩸</span>
            <div className="stats-number">50,000+</div>
            <div className="stats-label">Lives Saved</div>
            <div className="stats-trend">+500 this month</div>
          </div>
          <div className="advanced-stats-card">
            <span className="stats-icon">👥</span>
            <div className="stats-number">25,000+</div>
            <div className="stats-label">Registered Donors</div>
            <div className="stats-trend">+150 this week</div>
          </div>
          <div className="advanced-stats-card">
            <span className="stats-icon">🏥</span>
            <div className="stats-number">500+</div>
            <div className="stats-label">Partner Hospitals</div>
            <div className="stats-trend">Nationwide network</div>
          </div>
          <div className="advanced-stats-card">
            <span className="stats-icon">🌍</span>
            <div className="stats-number">100+</div>
            <div className="stats-label">Cities Covered</div>
            <div className="stats-trend">Expanding daily</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h2 className="section-title">🚀 Our Services</h2>
            <p className="section-subtitle">Comprehensive blood management solutions</p>
          </div>
        </div>
        
        <div className="grid grid-3">
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🩸</div>
            <h3 style={{ color: '#dc2626', marginBottom: '12px' }}>Blood Donation</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Safe and convenient blood donation process with trained medical staff and modern equipment.
            </p>
          </div>
          
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📋</div>
            <h3 style={{ color: '#dc2626', marginBottom: '12px' }}>Blood Requests</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Emergency blood request system with 24/7 availability and rapid response team.
            </p>
          </div>
          
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔬</div>
            <h3 style={{ color: '#dc2626', marginBottom: '12px' }}>Blood Testing</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Comprehensive blood screening and testing to ensure safety and compatibility.
            </p>
          </div>
          
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📱</div>
            <h3 style={{ color: '#dc2626', marginBottom: '12px' }}>Mobile App</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Easy-to-use mobile application for donors and hospitals to manage requests.
            </p>
          </div>
          
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🚨</div>
            <h3 style={{ color: '#dc2626', marginBottom: '12px' }}>Emergency Service</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              24/7 emergency blood supply service for critical and life-threatening situations.
            </p>
          </div>
          
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📊</div>
            <h3 style={{ color: '#dc2626', marginBottom: '12px' }}>Analytics</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Real-time analytics and reporting for better blood inventory management.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-card" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)', color: 'white' }}>
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Ready to Save Lives?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
            Join thousands of heroes who are making a difference every day
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn" 
              style={{ padding: '16px 32px', fontSize: '1.1rem', background: 'white', color: '#dc2626' }}
              onClick={() => setCurrentPage('addDonor')}
            >
              🩸 Become a Donor
            </button>
            <button 
              className="btn" 
              style={{ padding: '16px 32px', fontSize: '1.1rem', background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid white' }}
              onClick={() => setCurrentPage('contact')}
            >
              📞 Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;