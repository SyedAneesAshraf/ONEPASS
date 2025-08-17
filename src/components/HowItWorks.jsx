import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CreditCard, Unlock, Zap, CheckCircle, Star } from 'lucide-react';
import { useWaitlist } from '../contexts/WaitlistContext';
import './HowItWorks.css';

const HowItWorks = () => {
  const container = useRef(null);
  const { openWaitlistModal } = useWaitlist();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const steps = [
    {
      number: 1,
      icon: CreditCard,
      title: "Choose Your Plan",
      subtitle: "Start your AI journey",
      description: "Select from our flexible plans designed for creators, teams, and enterprises. Get instant access to 100+ premium AI tools.",
      features: ["Instant Access", "Cancel Anytime", "No Setup Required"],
      gradient: "linear-gradient(135deg, var(--primary-teal) 0%, var(--primary-slate-blue) 100%)",
      color: "#62929e"
    },
    {
      number: 2,
      icon: Unlock,
      title: "Access Everything",
      subtitle: "One dashboard, infinite possibilities",
      description: "Log in once and access all tools through our unified interface. Switch between chat, image, video, and code tools seamlessly.",
      features: ["Single Login", "Unified Interface", "Real-time Switching"],
      gradient: "linear-gradient(135deg, var(--primary-slate-blue) 0%, var(--primary-charcoal) 100%)",
      color: "#546a7b"
    },
    {
      number: 3,
      icon: Zap,
      title: "Create & Scale",
      subtitle: "Work at the speed of thought",
      description: "Focus on your creativity while our AI handles the heavy lifting. Create content, code, and visuals faster than ever before.",
      features: ["10x Faster", "Professional Quality", "Scale Infinitely"],
      gradient: "linear-gradient(135deg, var(--primary-warm-grey) 0%, var(--primary-teal) 100%)",
      color: "#c6c5b9"
    }
  ];

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={container} className="how-it-works-main">
      <div className="how-section-header">
        <motion.h2 
          className="how-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How OnePass <span className="highlight">Works</span>
        </motion.h2>
        <motion.p 
          className="how-section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From subscription to creation in three simple steps
        </motion.p>
      </div>

      <div className="how-steps-container">
        <svg className="connection-path" viewBox="0 0 1000 300">
          {/* <motion.path
            d="M 100 150 Q 300 50 500 150 Q 700 250 900 150"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            style={{ pathLength }}
          /> */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#62929e" />
              <stop offset="50%" stopColor="#546a7b" />
              <stop offset="100%" stopColor="#c6c5b9" />
            </linearGradient>
          </defs>
        </svg>

        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="how-step-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <motion.div 
              className="step-number-badge"
              style={{ backgroundColor: step.color }}
              whileHover={{ scale: 1.1 }}
            >
              {step.number}
            </motion.div>

            <motion.div 
              className="step-icon-container"
              style={{ background: step.gradient }}
              whileHover={{ rotate: 5 }}
            >
              <step.icon size={40} color="white" />
            </motion.div>

            <div className="step-content">
              <motion.h3 
                className="step-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
              >
                {step.title}
              </motion.h3>
              
              <motion.p 
                className="step-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.3 }}
              >
                {step.subtitle}
              </motion.p>
              
              <motion.p 
                className="step-description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
              >
                {step.description}
              </motion.p>

              <motion.div 
                className="step-features"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.5 }}
              >
                {step.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={feature}
                    className="step-feature"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.3 + 0.6 + featureIndex * 0.1 }}
                  >
                    <CheckCircle size={16} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="how-cta-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="cta-content">
          <h3>Ready to Transform Your Workflow?</h3>
          <p>Join thousands of creators who've simplified their AI toolkit</p>
          <motion.button 
            className="cta-button"
            onClick={openWaitlistModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Waitlist
            <Star size={20} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
