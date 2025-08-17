import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { DollarSign, Key, Download, AlertCircle } from 'lucide-react';
import upgradeToProImage from '../assets/upgradetopro.png';
import workflowBreakImage from '../assets/workflowbreak.png';
import './WhyOnePass.css';

const cards = [
  {
    icon: DollarSign,
    title: "Multiple Subscriptions",
    description: "Paying $15-50 per month for each AI tool adds up fast. Your wallet feels the pain as you juggle multiple expensive subscriptions.",
    gradient: "linear-gradient(135deg, var(--primary-slate-blue) 0%, var(--primary-charcoal) 100%)",
    color: "#546a7b",
    image: "https://cdn.vectorstock.com/i/500p/24/26/ai-logo-collection-vector-47122426.jpg"
  },
  {
    icon: Key,
    title: "Login Chaos",
    description: "Remember passwords for 10+ tools? Switch between tabs constantly? Your workflow becomes a frustrating mess of logins and redirects.",
    gradient: "linear-gradient(135deg, var(--primary-teal) 0%, var(--primary-slate-blue) 100%)",
    color: "#62929e",
    image: "https://static01.nyt.com/images/2023/10/29/magazine/29mag-lor/29mag-lor-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale"
  },
  {
    icon: Download,
    title: "Limited Features",
    description: "Free tiers give you 3 exports, 5 generations. Hit the paywall just when you're getting creative and need to deliver results.",
    gradient: "linear-gradient(135deg, var(--primary-charcoal) 0%, var(--primary-slate-blue) 100%)",
    color: "#393d3f",
    image: upgradeToProImage
  },
  {
    icon: AlertCircle,
    title: "Workflow Breaks",
    description: "Copy from Tool A, paste to Tool B, export from Tool C. Your creative flow is constantly interrupted by tool switching.",
    gradient: "linear-gradient(135deg, var(--primary-slate-blue) 0%, var(--primary-teal) 100%)",
    color: "#546a7b",
    image: workflowBreakImage
  }
];

const Card = ({ i, title, description, icon: Icon, gradient, color, image, progress, range, targetScale, isLeftSide }) => {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  // Always call hooks, but conditionally use values
  const imageScaleTransform = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scaleTransform = useTransform(progress, range, [1, targetScale]);
  const xTransform = useTransform(progress, range, [300, i * 30]);
  
  // Apply mobile overrides
  const imageScale = isMobile ? 1 : imageScaleTransform;
  const scale = isMobile ? 1 : scaleTransform;
  const x = (isLeftSide && !isMobile) ? xTransform : 0;

  return (
    <div ref={container} className="why-card-container">
      <motion.div 
        style={{
          backgroundColor: color,
          scale,
          x,
        }}
        className="why-card"
      >
        <h2>{title}</h2>
        <div className="why-card-body">
          <div className="why-card-description">
            <p>{description}</p>
            <motion.div 
              className="why-card-icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon size={40} />
            </motion.div>
          </div>
          
          <div className="why-card-image-container">
            {image ? (
              <motion.img
                src={image}
                alt={title}
                className="why-card-image"
                style={{ 
                  scale: imageScale
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            ) : (
              <motion.div
                className="why-card-image"
                style={{ 
                  scale: imageScale,
                  background: gradient 
                }}
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WhyOnePass = () => {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const rightCard = {
    icon: AlertCircle,
    title: "The OnePass Solution",
    description: "Access 100+ premium AI tools with one login, one subscription. Everything you need for content creation, design, coding, and productivity in one unified platform.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#667eea"
  };

  // Always call useTransform hooks
  const solutionOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
  const solutionX = useTransform(scrollYProgress, [0.95, 1], [100, 0]);

  return (
    <main ref={container} className="why-onepass-main">
      <div className="why-section-header">
        <motion.h2 
          className="why-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Stop Tool-Hopping. Start <span className="highlight">Creating</span>.
        </motion.h2>
        <motion.p 
          className="why-section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We know the struggle — and we built ONEPASS AI to solve it.
        </motion.p>
      </div>
      
      <div className="why-content-split">
        <div className="why-left-section">
          {cards.map((card, i) => {
            const targetScale = 1 - ((cards.length - i) * 0.05);
            return (
              <Card 
                key={`card_${i}`} 
                i={i} 
                {...card} 
                progress={scrollYProgress} 
                range={[i * 0.2, 1]} 
                targetScale={targetScale}
                isLeftSide={true}
              />
            );
          })}
        </div>
        
        <div className="why-right-section">
          <motion.div 
            className="why-solution-card"
            style={{ 
              backgroundColor: rightCard.color,
              opacity: isMobile ? 1 : solutionOpacity,
              x: isMobile ? 0 : solutionX
            }}
          >
            <h2>{rightCard.title}</h2>
            <div className="why-card-body">
              <div className="why-card-description">
                <p>{rightCard.description}</p>
                <motion.div 
                  className="why-card-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <rightCard.icon size={40} />
                </motion.div>
              </div>
              
              <div className="why-card-image-container">
                <motion.div
                  className="why-card-image"
                  style={{ 
                    background: rightCard.gradient 
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default WhyOnePass;
