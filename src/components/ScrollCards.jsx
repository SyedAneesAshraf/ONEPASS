import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Image as ImageIcon, Video, Code, Shuffle } from 'lucide-react';
import ChatImage from '../assets/Chat.png';
import ImageGenImage from '../assets/Image.png';
import VideoImage from '../assets/Video.png';
import CodeImage from '../assets/Code.png';
import './ScrollCards.css';

const cards = [
  {
    icon: MessageSquare,
    title: "AI Chat & Conversations",
    description: "Access GPT-4, Claude, Gemini, and 50+ language models in one interface. Switch between models instantly to get the best response for any task.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#667eea",
    image: ChatImage,
    features: ["Multiple AI Models", "Real-time Switching", "Context Memory", "Custom Prompts"]
  },
  {
    icon: ImageIcon,
    title: "AI Image Generation",
    description: "Create stunning visuals with DALL-E, Midjourney, Stable Diffusion, and more. Generate, edit, and enhance images with professional AI tools.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "#f093fb",
    image: ImageGenImage,
    features: ["Multiple Art Styles", "HD Quality", "Batch Generation", "Style Transfer"]
  },
  {
    icon: Video,
    title: "AI Video Creation",
    description: "Transform ideas into dynamic videos using cutting-edge AI. From script to screen with automated editing, voiceovers, and visual effects.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    color: "#4facfe",
    image: VideoImage,
    features: ["Auto Editing", "AI Voiceovers", "Motion Graphics", "Multiple Formats"]
  },
  {
    icon: Code,
    title: "AI Code Assistant",
    description: "Write, debug, and optimize code across 100+ programming languages. Get intelligent suggestions, code reviews, and automated testing.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    color: "#43e97b",
    image: CodeImage,
    features: ["Multi-Language", "Code Review", "Auto-Complete", "Bug Detection"]
  }
];

const Card = ({ i, title, description, icon: Icon, gradient, color, progress, range, targetScale, image, features }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="scroll-card-container">
      <motion.div 
        style={{
          scale,
        }}
        className="scroll-card"
      >
        <h2>{title}</h2>
        <div className="scroll-card-body">
          <div className="scroll-card-description">
            <p>{description}</p>
            
            {features && (
              <div className="scroll-card-features">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="scroll-feature-tag"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>
            )}
            
            <motion.div 
              className="scroll-card-icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon size={40} />
            </motion.div>
          </div>
          
          <div className="scroll-card-image-container">
            {image ? (
              <motion.img
                src={image}
                alt={title}
                className="scroll-card-image"
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
                className="scroll-card-placeholder"
                style={{ 
                  background: gradient,
                  scale: imageScale
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Icon size={80} color="white" />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ScrollCards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <main ref={container} className="scroll-cards-main">
      <div className="scroll-section-header">
        <motion.h2 
          className="scroll-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          All AI Tools in <span className="highlight">One Platform</span>
        </motion.h2>
        <motion.p 
          className="scroll-section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From chat to code, images to videos - access every AI functionality you need in one unified platform
        </motion.p>
      </div>
      
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
          />
        );
      })}
    </main>
  );
};

export default ScrollCards;
