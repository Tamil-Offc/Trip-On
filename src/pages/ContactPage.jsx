
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold text-tripon-blue mb-8">Contact Us</h1>
      <p className="text-lg mb-8">
        Have questions or need assistance? We're here to help you plan your perfect trip.
      </p>
    </motion.div>
  );
};

export default ContactPage;
