
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold text-tripon-blue mb-8">About Us</h1>
      <p className="text-lg mb-8">
        Welcome to TripOn, your gateway to extraordinary travel experiences. 
        We're dedicated to crafting unforgettable journeys that connect you with 
        the world's most breathtaking destinations.
      </p>
    </motion.div>
  );
};

export default AboutPage;
