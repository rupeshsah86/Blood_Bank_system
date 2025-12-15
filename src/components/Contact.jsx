import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Contact Hero */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h1 className="section-title">📞 Contact Us</h1>
            <p className="section-subtitle">Get in touch with our team - We're here to help 24/7</p>
          </div>
        </div>
      </div>

      {/* Contact Information & Form */}
      <div className="section-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Contact Information */}
          <div>
            <h2 style={{ color: '#dc2626', fontSize: '1.8rem', marginBottom: '24px' }}>Get In Touch</h2>
            
            <div className="advanced-stats-card" style={{ textAlign: 'left', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '2rem' }}>🏢</div>
                <div>
                  <h3 style={{ color: '#1f2937', marginBottom: '4px' }}>Head Office</h3>
                  <p style={{ color: '#64748b' }}>123 Healthcare Plaza, Medical District<br />New Delhi, India - 110001</p>
                </div>
              </div>
            </div>

            <div className="advanced-stats-card" style={{ textAlign: 'left', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '2rem' }}>📞</div>
                <div>
                  <h3 style={{ color: '#1f2937', marginBottom: '4px' }}>Phone Numbers</h3>
                  <p style={{ color: '#64748b' }}>
                    Emergency: +91-911-BLOOD (24/7)<br />
                    General: +91-11-2345-6789<br />
                    Toll Free: 1800-123-BLOOD
                  </p>
                </div>
              </div>
            </div>

            <div className="advanced-stats-card" style={{ textAlign: 'left', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '2rem' }}>📧</div>
                <div>
                  <h3 style={{ color: '#1f2937', marginBottom: '4px' }}>Email Addresses</h3>
                  <p style={{ color: '#64748b' }}>
                    General: info@ebloodbank.gov.in<br />
                    Emergency: emergency@ebloodbank.gov.in<br />
                    Support: support@ebloodbank.gov.in
                  </p>
                </div>
              </div>
            </div>

            <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '2rem' }}>🕒</div>
                <div>
                  <h3 style={{ color: '#1f2937', marginBottom: '4px' }}>Working Hours</h3>
                  <p style={{ color: '#64748b' }}>
                    Emergency Services: 24/7<br />
                    Office Hours: Mon-Fri 9:00 AM - 6:00 PM<br />
                    Weekend: Sat 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="advanced-stats-card">
            <h3 style={{ color: '#1f2937', marginBottom: '24px', fontSize: '1.5rem', textAlign: 'center' }}>
              📝 Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label className="form-label">👤 Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">📋 Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                  className="form-select"
                >
                  <option value="">Select a subject</option>
                  <option value="emergency">🚨 Emergency Blood Request</option>
                  <option value="donation">🩸 Blood Donation Inquiry</option>
                  <option value="partnership">🤝 Hospital Partnership</option>
                  <option value="technical">🔧 Technical Support</option>
                  <option value="feedback">💬 Feedback & Suggestions</option>
                  <option value="other">📝 Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">💬 Message</label>
                <textarea
                  placeholder="Enter your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows="5"
                  className="form-input"
                  style={{ resize: 'vertical', minHeight: '120px' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                🚀 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="section-card" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)', color: 'white' }}>
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🚨 Emergency Blood Request</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
            For urgent blood requirements, call our 24/7 emergency helpline
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn" 
              style={{ padding: '16px 32px', fontSize: '1.3rem', background: 'white', color: '#dc2626', fontWeight: 'bold' }}
              onClick={() => window.open('tel:+919119BLOOD', '_self')}
            >
              📞 +91-911-BLOOD
            </button>
            <button 
              className="btn" 
              style={{ padding: '16px 32px', fontSize: '1.1rem', background: 'rgba(255,255,255,0.2)', color: 'white', border: '2px solid white' }}
              onClick={() => window.open('mailto:emergency@ebloodbank.gov.in?subject=Emergency Blood Request', '_self')}
            >
              📧 emergency@ebloodbank.gov.in
            </button>
          </div>
        </div>
      </div>

      {/* Social Media & Additional Info */}
      <div className="section-card">
        <div className="grid grid-2">
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <h3 style={{ color: '#dc2626', marginBottom: '16px', fontSize: '1.3rem' }}>🌐 Follow Us</h3>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-primary" 
                style={{ padding: '8px 16px' }}
                onClick={() => window.open('https://facebook.com', '_blank')}
              >
                📘 Facebook
              </button>
              <button 
                className="btn btn-primary" 
                style={{ padding: '8px 16px' }}
                onClick={() => window.open('https://twitter.com', '_blank')}
              >
                🐦 Twitter
              </button>
              <button 
                className="btn btn-primary" 
                style={{ padding: '8px 16px' }}
                onClick={() => window.open('https://instagram.com', '_blank')}
              >
                📸 Instagram
              </button>
              <button 
                className="btn btn-primary" 
                style={{ padding: '8px 16px' }}
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                💼 LinkedIn
              </button>
            </div>
          </div>
          
          <div className="advanced-stats-card" style={{ textAlign: 'left' }}>
            <h3 style={{ color: '#dc2626', marginBottom: '16px', fontSize: '1.3rem' }}>📱 Mobile App</h3>
            <p style={{ color: '#64748b', marginBottom: '16px' }}>
              Download our mobile app for quick blood requests and donations
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-secondary" 
                style={{ padding: '8px 16px' }}
                onClick={() => alert('📱 Mobile app coming soon! Stay tuned for updates.')}
              >
                📱 Play Store
              </button>
              <button 
                className="btn btn-secondary" 
                style={{ padding: '8px 16px' }}
                onClick={() => alert('🍎 iOS app coming soon! Stay tuned for updates.')}
              >
                🍎 App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;