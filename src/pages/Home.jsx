import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ScrollCards from '../components/ScrollCards';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import WhyOnePass from '../components/WhyOnePass';
import ToolCategories from '../components/ToolCategories';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <ScrollCards />
      <Testimonials />
      <WhyOnePass />
      <HowItWorks />
      <ToolCategories />
      <FinalCTA />
    </motion.div>
  );
};

export default Home;
