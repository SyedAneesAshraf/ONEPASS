import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useWaitlist } from '../contexts/WaitlistContext';
import './FAQ.css';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { openWaitlistModal } = useWaitlist();

  const faqs = [
    {
      question: "When will ONEPASS AI launch?",
      answer: "We're aiming for early 2025. Join the waitlist and you'll be first to know when we go live, plus you'll get exclusive founding-member pricing."
    },
    {
      question: "How much will it cost?",
      answer: "Simple, transparent pricing. One plan, all tools. We'll share exclusive founding-member pricing with waitlist members that's significantly lower than what you'd pay for individual subscriptions."
    },
    {
      question: "What kinds of tools are included?",
      answer: "Everything from design and creativity tools to copywriting, video editing, research, coding, and automation tools. We're adding more premium AI tools every month based on user feedback and emerging technologies."
    },
    {
      question: "Do I need to install anything?",
      answer: "Nope! Everything runs in your browser. Just log in to your ONEPASS AI dashboard and start creating. No downloads, no installations, no technical setup required."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. We believe in flexibility. You can cancel your subscription at any time with no penalties or hidden fees."
    },
    {
      question: "How do you choose which tools to include?",
      answer: "We hand-pick tools based on quality, user value, and feedback from our community. No bloat, no filler – only tools that creators, founders, and solopreneurs actually use and love."
    },
    {
      question: "Will there be usage limits?",
      answer: "Our goal is to provide unlimited access to all included tools. Some premium features might have fair-use policies, but we're designed for heavy creators and power users."
    },
    {
      question: "How is this different from buying tools individually?",
      answer: "Instead of juggling multiple subscriptions, logins, and billing cycles, you get everything in one place. Plus, you'll likely save hundreds of dollars per month compared to individual subscriptions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-hero section">
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
              <HelpCircle size={64} />
            </motion.div>

            <h1 className="faq-title">Questions? We've Got You.</h1>
            <p className="faq-subtitle">
              Everything you need to know about ONEPASS AI and how it works.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="faq-content section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${openFAQ === index ? 'open' : ''}`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="question-icon">
                    {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                
                <motion.div 
                  className="faq-answer"
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="faq-cta"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-card card">
              <h3>Still have questions?</h3>
              <p>
                We're here to help! Join our community or reach out directly for any questions 
                not covered here.
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary">Contact Support</button>
                <button className="btn btn-secondary">Join Community</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="faq-waitlist section gradient-bg">
        <div className="container">
          <motion.div
            className="waitlist-content text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="waitlist-title">Ready to Transform Your Workflow?</h2>
            <p className="waitlist-description">
              Join thousands of creators, founders, and solopreneurs waiting for ONEPASS AI.
            </p>
            <button 
              className="btn btn-highlight waitlist-btn"
              onClick={openWaitlistModal}
            >
              🚀 Join the Waitlist
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
