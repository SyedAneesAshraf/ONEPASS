import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useWaitlist } from '../contexts/WaitlistContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openWaitlistModal } = useWaitlist();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'For Partners', path: '/partners' },
    { name: 'FAQ', path: '/faq' }
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">ONEPASS AI</span>
          <span className="logo-tagline">Unified Pass. No Limits.</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <button 
              onClick={openWaitlistModal}
              className="btn btn-primary nav-cta"
            >
              🚀 Join Waitlist
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
