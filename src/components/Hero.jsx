import { motion } from 'framer-motion';
import { Rocket, Sparkles, Zap } from 'lucide-react';
import { useWaitlist } from '../contexts/WaitlistContext';
import './Hero.css';

const Hero = () => {
  const { openWaitlistModal } = useWaitlist();
  return (
    <section className="hero gradient-bg">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">
            <span className="highlight">ONEPASS AI</span> 
            <br />All Your AI Power, One Pass.
          </h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            One subscription. Unlimited access to top AI tools for writing, design, code & more — no tabs, no paywalls, just pure flow.
          </motion.h2>
          
          <motion.div 
            className="hero-cta"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              onClick={openWaitlistModal}
              className="btn btn-primary hero-btn"
            >
              Join the Waitlist
            </button>
            <p className="cta-subtitle">Be first in line when we launch</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="hero-card-stack">
            <motion.div 
              className="hero-card card-1"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles size={24} />
              <span>Design & Creativity</span>
            </motion.div>
            
            <motion.div 
              className="hero-card card-2"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <Zap size={24} />
              <span>Coding & Automation</span>
            </motion.div>
            
            <motion.div 
              className="hero-card card-3"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <span>✍️</span>
              <span>Copywriting & Marketing</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
