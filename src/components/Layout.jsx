
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './navigation/Navbar';
import Footer from './navigation/Footer';
import BookingModal from './modals/BookingModal';
import { useTripContext } from '../context/TripContext';

const Layout = ({ children }) => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { selectedTrip } = useTripContext();
  const location = useLocation();

  // Handle scroll events for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      
      <Footer />

      <AnimatePresence>
        {showBookingModal && selectedTrip && (
          <BookingModal 
            trip={selectedTrip} 
            onClose={() => setShowBookingModal(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
