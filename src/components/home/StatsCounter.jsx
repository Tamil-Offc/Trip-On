
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatsCounter = ({ stats }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState({
    happyCustomers: 0,
    toursCompleted: 0,
    destinations: 0,
    awards: 0
  });

  // Animation for counting up
  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // ms
    const interval = 20; // ms
    
    const counters = {};
    
    Object.entries(stats).forEach(([key, targetValue]) => {
      let startTime = null;
      
      counters[key] = setInterval(() => {
        if (startTime === null) startTime = Date.now();
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        const currentValue = Math.floor(progress * targetValue);
        
        setCounts(prev => ({ ...prev, [key]: currentValue }));
        
        if (progress === 1) {
          clearInterval(counters[key]);
        }
      }, interval);
    });
    
    return () => {
      Object.values(counters).forEach(interval => clearInterval(interval));
    };
  }, [stats, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const statItems = [
    { label: "Happy Customers", value: counts.happyCustomers, suffix: "+" },
    { label: "Tours Completed", value: counts.toursCompleted, suffix: "+" },
    { label: "Destinations", value: counts.destinations, suffix: "" },
    { label: "Awards Received", value: counts.awards, suffix: "" }
  ];

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
    >
      {statItems.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="text-center"
        >
          <div className="text-4xl md:text-5xl font-bold mb-2 font-poppins">
            {item.value.toLocaleString()}{item.suffix}
          </div>
          <p className="text-blue-200">{item.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsCounter;
