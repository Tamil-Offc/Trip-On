
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <motion.div 
            className="w-16 h-16 border-4 border-t-blue-500 border-blue-300 border-opacity-20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-xl font-poppins">T</span>
          </motion.div>
        </div>
        <p className="mt-4 text-blue-600 font-medium text-lg">Loading...</p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
