
import { motion } from 'framer-motion';

const GalleryPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold text-tripon-blue mb-8">Our Gallery</h1>
      <p className="text-lg mb-8">
        Explore our collection of stunning destinations from around the world.
      </p>
    </motion.div>
  );
};

export default GalleryPage;
