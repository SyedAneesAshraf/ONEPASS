import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Designer",
    avatar: "SC",
    rating: 5,
    statement: "OnePass AI has completely transformed my workflow. Having all my design tools in one place saves me hours every day!"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Software Engineer",
    avatar: "MR",
    rating: 5,
    statement: "The coding assistance and automation tools are incredible. It's like having a senior developer as my pair programming partner."
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Content Creator",
    avatar: "ET",
    rating: 4,
    statement: "From writing to video editing, OnePass AI handles everything. The quality and speed improvements are phenomenal."
  },
  {
    id: 4,
    name: "David Kim",
    role: "Marketing Director",
    avatar: "DK",
    rating: 5,
    statement: "Our marketing campaigns have never been more effective. The AI insights and automation features are game-changing."
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "UX Researcher",
    avatar: "LW",
    rating: 5,
    statement: "The research and analysis tools help me uncover insights I would have missed. It's revolutionized how I approach user research."
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "Startup Founder",
    avatar: "AJ",
    rating: 4,
    statement: "As a solo founder, OnePass AI is like having an entire team. It handles design, coding, marketing - everything I need."
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={index < rating ? 'star-filled' : 'star-empty'}
          fill={index < rating ? '#FFD700' : 'none'}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      className="testimonial-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="testimonial-content">
        <p className="testimonial-statement">"{testimonial.statement}"</p>
        <StarRating rating={testimonial.rating} />
      </div>
      
      <div className="testimonial-author">
        <div className="author-avatar">
          <span>{testimonial.avatar}</span>
        </div>
        <div className="author-info">
          <h4 className="author-name">{testimonial.name}</h4>
          <p className="author-role">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="testimonials-title">
            Loved by <span className="highlight">Thousands</span>
          </h2>
          <p className="testimonials-subtitle">
            See what creators, developers, and entrepreneurs are saying about OnePass AI
          </p>
        </motion.div>

        <div className="testimonials-scroll-container">
          <motion.div 
            className="testimonials-track"
            animate={{ 
              x: ['-50%', '0%'] 
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`${testimonial.id}-${index}`} 
                testimonial={testimonial} 
              />
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="testimonials-bg-decoration">
        <motion.div 
          className="floating-quote quote-1"
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          "
        </motion.div>
        <motion.div 
          className="floating-quote quote-2"
          animate={{ 
            y: [20, -20, 20],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          "
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
