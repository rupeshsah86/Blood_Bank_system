import React, { useState, useEffect } from 'react';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Clients from './components/Clients.jsx';
import Dashboard from './components/Dashboard.jsx';
import RequestBlood from './components/RequestBlood.jsx';
import AddDonor from './components/AddDonor.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import './styles/global.css';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [showRegister, setShowRegister] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleRegister = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMobileNavOpen(false);
  };

  if (!user) {
    return showRegister ? 
      <Register onRegister={handleRegister} switchToLogin={() => setShowRegister(false)} /> :
      <Login onLogin={handleLogin} switchToRegister={() => setShowRegister(true)} />;
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'clients':
        return <Clients setCurrentPage={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'request':
        return <RequestBlood />;
      case 'addDonor':
        return <AddDonor />;
      case 'admin':
        return <AdminPanel />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}>🩸</div>
                <div>
                  <h1 style={{ 
                    margin: 0, 
                    fontSize: '1.8rem',
                    background: 'linear-gradient(45deg, #ffffff, #ffd700)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: 'none'
                  }}>e-Blood Bank</h1>
                  <div style={{
                    fontSize: '0.7rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>Government of India</div>
                </div>
                <div style={{
                  width: '3px',
                  height: '40px',
                  background: 'linear-gradient(to bottom, #ff9933, #ffffff, #138808)',
                  borderRadius: '2px',
                  marginLeft: '8px'
                }}></div>
              </div>
            </div>
            <div className="user-info">
              <div>
                <p className="welcome-text">Welcome, {user.name}</p>
                <p className="welcome-text">Role: {user.role.toUpperCase()}</p>
                <button 
                  className="mobile-nav-toggle"
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                >
                  {mobileNavOpen ? '✕' : '☰'}
                </button>
                <nav className={`nav ${mobileNavOpen ? 'mobile-open' : ''}`}>
                  <button 
                    onClick={() => handleNavClick('home')}
                    className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
                  >
                    🏠 Home
                  </button>
                  <button 
                    onClick={() => handleNavClick('about')}
                    className={`nav-btn ${currentPage === 'about' ? 'active' : ''}`}
                  >
                    📝 About
                  </button>
                  <button 
                    onClick={() => handleNavClick('clients')}
                    className={`nav-btn ${currentPage === 'clients' ? 'active' : ''}`}
                  >
                    🏥 Clients
                  </button>
                  <button 
                    onClick={() => handleNavClick('contact')}
                    className={`nav-btn ${currentPage === 'contact' ? 'active' : ''}`}
                  >
                    📞 Contact
                  </button>
                  <button 
                    onClick={() => handleNavClick('dashboard')}
                    className={`nav-btn ${currentPage === 'dashboard' ? 'active' : ''}`}
                  >
                    📊 Dashboard
                  </button>
                  <button 
                    onClick={() => handleNavClick('request')}
                    className={`nav-btn ${currentPage === 'request' ? 'active' : ''}`}
                  >
                    🩸 Request Blood
                  </button>
                  <button 
                    onClick={() => handleNavClick('addDonor')}
                    className={`nav-btn ${currentPage === 'addDonor' ? 'active' : ''}`}
                  >
                    👤 Add Donor
                  </button>
                  {user.role === 'admin' && (
                    <button 
                      onClick={() => handleNavClick('admin')}
                      className={`nav-btn ${currentPage === 'admin' ? 'active' : ''}`}
                    >
                      ⚙️ Admin Panel
                    </button>
                  )}
                </nav>
              </div>
              <button onClick={handleLogout} className="logout-btn">
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="container">
        {renderPage()}
      </main>
      
      <footer style={{
        background: 'linear-gradient(135deg, var(--gray-900) 0%, var(--gray-800) 100%)',
        color: 'var(--white)',
        padding: '40px 0 20px 0',
        marginTop: '60px',
        borderTop: '4px solid var(--primary-red)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '30px'
          }}>
            <div>
              <h3 style={{ 
                color: 'var(--accent-gold)', 
                marginBottom: '16px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '700'
              }}>e-Blood Bank</h3>
              <p style={{ 
                color: 'var(--gray-300)', 
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>
                Connecting donors with patients across India. 
                A Government of India initiative to ensure 
                no life is lost due to blood shortage.
              </p>
            </div>
            
            <div>
              <h4 style={{ 
                color: 'var(--white)', 
                marginBottom: '16px',
                fontWeight: '600'
              }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button 
                  onClick={() => handleNavClick('home')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--gray-300)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    padding: '4px 0'
                  }}
                >🏠 Home</button>
                <button 
                  onClick={() => handleNavClick('about')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--gray-300)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    padding: '4px 0'
                  }}
                >📝 About Us</button>
                <button 
                  onClick={() => handleNavClick('contact')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--gray-300)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    padding: '4px 0'
                  }}
                >📞 Contact</button>
              </div>
            </div>
            
            <div>
              <h4 style={{ 
                color: 'var(--white)', 
                marginBottom: '16px',
                fontWeight: '600'
              }}>Emergency</h4>
              <div style={{ color: 'var(--gray-300)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                <p>📞 Helpline: 1800-123-BLOOD</p>
                <p>📧 Emergency: emergency@ebloodbank.gov.in</p>
                <p>🕒 Available 24/7</p>
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid var(--gray-700)',
            paddingTop: '20px',
            textAlign: 'center',
            color: 'var(--gray-400)',
            fontSize: '0.85rem'
          }}>
            <p>© 2024 e-Blood Bank Management System | Government of India | 
            Developed by Rupesh Kumar Sah - 24CS201</p>
            <p style={{ marginTop: '8px' }}>🇮🇳 Proudly serving the nation | Saving lives through technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
