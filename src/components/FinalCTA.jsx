import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { useWaitlist } from '../contexts/WaitlistContext';
import './FinalCTA.css';

const FinalCTA = () => {
  const { openWaitlistModal } = useWaitlist();
  
  return (
    <section className="final-cta section gradient-bg" id="waitlist">
      <div className="floating-shapes">
        <div className="shape shape-large"></div>
        <div className="shape shape-medium"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="cta-icon"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles size={40} />
          </motion.div>

          <motion.h2 
            className="cta-title"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Workflow?
          </motion.h2>
          
          <motion.p 
            className="cta-description"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands of creators, founders, and innovators who are simplifying their AI toolkit with OnePass AI.
          </motion.p>

          <motion.div 
            className="cta-actions"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="btn btn-highlight cta-main-btn"
              onClick={openWaitlistModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
              <ArrowRight size={20} />
            </motion.button>

            <div className="cta-benefits">
              <div className="benefit">
                <Star size={16} />
                <span>Early access</span>
              </div>
              <div className="benefit">
                <Star size={16} />
                <span>Founding member pricing</span>
              </div>
              <div className="benefit">
                <Star size={16} />
                <span>Exclusive features</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="cta-tagline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="brand-text">ONEPASS AI</span>
            <span className="tagline-text">Unified Pass. No Limits.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
