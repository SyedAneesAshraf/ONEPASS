import { motion } from 'framer-motion';
import { Handshake, Users, TrendingUp, Star, ArrowRight } from 'lucide-react';
import './Partners.css';

const Partners = () => {
  const benefits = [
    {
      icon: <Users size={32} />,
      title: "Reach Thousands",
      description: "Get your product in front of creators, founders, and solopreneurs who will actually use it."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Zero Complex Integrations",
      description: "Simple partnership process without the technical headaches."
    },
    {
      icon: <Star size={32} />,
      title: "Curated Platform",
      description: "Be part of a hand-picked selection of premium AI tools that users trust."
    }
  ];

  return (
    <div className="partners-page">
      <section className="partners-hero section gradient-bg">
        <div className="container">
          <motion.div
            className="hero-content text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-icon"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Handshake size={64} />
            </motion.div>

            <h1 className="partners-title">
              Have a Great AI Tool? 
              <br />
              <span className="highlight">Let's Get You in Front of Thousands.</span>
            </h1>

            <motion.p 
              className="partners-description"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're building the go-to destination for creators, founders, and solopreneurs who love AI.
              If your tool belongs in their toolkit, we'd love to feature it inside ONEPASS AI.
            </motion.p>

            <motion.p 
              className="partners-subtitle"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Get your product in front of the people who will actually use it — 
              <strong> without complex integrations.</strong>
            </motion.p>

            <motion.div 
              className="partners-cta"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="btn btn-highlight partners-btn">
                <Handshake size={20} />
                Partner With Us
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="partners-benefits section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why Partner with ONEPASS AI?</h2>
            <p>Join a curated ecosystem that puts quality first</p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card card"
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-process section">
        <div className="container">
          <motion.div
            className="process-content"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="process-text">
              <h2>Simple Partnership Process</h2>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Apply</h4>
                    <p>Tell us about your AI tool and how it helps creators</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Review</h4>
                    <p>Our team evaluates your tool for quality and user value</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Launch</h4>
                    <p>Get featured and start reaching thousands of new users</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="process-visual">
              <motion.div
                className="partnership-card"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="card-header">
                  <div className="card-icon">🚀</div>
                  <h3>Ready to Partner?</h3>
                </div>
                <p>Join the ONEPASS AI ecosystem and grow your user base with creators who value quality AI tools.</p>
                <button className="btn btn-primary">
                  Start Partnership Application
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
