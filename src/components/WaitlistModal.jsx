import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket, Star, Mail, User, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import './WaitlistModal.css';

const WaitlistModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzNBO7RwEK2pSLk-LqB8OAPERXqVyEX1I8EDhOjLNafv9OAw3X9PvBta59cZTLg_Qy6CQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          Name: formData.name,
          Email: formData.email
        })
      });

      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: '', email: '' });
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '' });
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="waitlist-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="waitlist-modal"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={handleClose}>
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <div className="modal-content">
                <motion.div 
                  className="modal-header"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="modal-icon">
                    <Rocket size={40} />
                  </div>
                  <h2>Join the Waitlist</h2>
                  <p>Be the first to experience the future of AI productivity</p>
                </motion.div>

                <motion.form 
                  className="waitlist-form"
                  onSubmit={handleSubmit}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="form-group">
                    <div className="input-container">
                      <User size={20} className="input-icon" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-container">
                      <Mail size={20} className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="loading-spinner" />
                    ) : (
                      <>
                        <Rocket size={20} />
                        Join Waitlist
                      </>
                    )}
                  </motion.button>
                </motion.form>

                <motion.div 
                  className="modal-benefits"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="benefit">
                    <Star size={16} />
                    <span>Early access privileges</span>
                  </div>
                  <div className="benefit">
                    <Star size={16} />
                    <span>Founding member pricing</span>
                  </div>
                  <div className="benefit">
                    <Star size={16} />
                    <span>Exclusive beta features</span>
                  </div>
                </motion.div>
              </div>
            ) : (
              <motion.div 
                className="success-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="success-icon">
                  <CheckCircle size={60} />
                </div>
                <h2>Welcome to the Future!</h2>
                <p>You're now on the waitlist. We'll notify you as soon as OnePass AI launches.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
