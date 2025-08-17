import { motion } from 'framer-motion';
import { MessageSquare, Image, Video, Code, ArrowRight, Sparkles } from 'lucide-react';
import './ToolCategories.css';

const ToolCategories = () => {
  const toolFlow = [
    {
      icon: MessageSquare,
      title: "Chat",
      subtitle: "AI Conversations",
      color: "#62929e"
    },
    {
      icon: Image,
      title: "Generate",
      subtitle: "Visual Creation",
      color: "#546a7b"
    },
    {
      icon: Video,
      title: "Create",
      subtitle: "Video Content",
      color: "#c6c5b9"
    },
    {
      icon: Code,
      title: "Code",
      subtitle: "Development",
      color: "#393d3f"
    }
  ];

  return (
    <section className="tool-categories">
      <div className="categories-container">
        <motion.div
          className="categories-header"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>One Platform. <span className="highlight">Four Superpowers.</span></h2>
          <p>Everything you need to create, generate, and build with AI</p>
        </motion.div>

        <div className="flow-diagram">
          {toolFlow.map((tool, index) => (
            <div key={tool.title} className="flow-item">
              <motion.div
                className="flow-node"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="flow-icon"
                  style={{ backgroundColor: tool.color }}
                  whileHover={{ rotate: 5 }}
                >
                  <tool.icon size={24} color="white" />
                </motion.div>
                <h3 className="flow-title">{tool.title}</h3>
                <p className="flow-subtitle">{tool.subtitle}</p>
              </motion.div>

              {index < toolFlow.length - 1 && (
                <motion.div 
                  className="flow-arrow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          className="flow-result"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="result-badge">
            <Sparkles size={20} />
            <span>100+ Premium AI Tools</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolCategories;
