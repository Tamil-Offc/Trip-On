
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, User, ShoppingBag } from 'lucide-react';
import { useTripContext } from '../../context/TripContext';
import { cn } from '../../lib/utils';

const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { cart } = useTripContext();
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const isActive = (path) => location.pathname === path;

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1
      } 
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: '100%', opacity: 1, transition: { duration: 0.3 } },
    exit: { width: 0, opacity: 0, transition: { duration: 0.3 } }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/trips', label: 'Trips' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled || isMenuOpen || location.pathname !== '/'
          ? "bg-white shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.div 
              className="flex items-center" 
              initial="hidden"
              animate="visible"
              variants={logoVariants}
            >
              <span className="text-2xl font-bold font-poppins bg-gradient-to-r from-tripon-blue via-tripon-teal to-tripon-orange bg-clip-text text-transparent">
                TripOn
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group",
                    isActive(link.path) 
                      ? "text-tripon-teal font-semibold" 
                      : "text-black hover:text-tripon-teal"
                  )}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-tripon-teal"
                      layoutId="activeNavItem"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center pl-2 space-x-4 border-l border-gray-200">
              <button
                onClick={toggleSearch}
                className="text-gray-600 hover:text-tripon-teal p-2 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link to="/account" className="text-gray-600 hover:text-tripon-teal p-2 transition-colors">
                <User size={20} />
              </Link>
              <Link to="/bookings" className="relative text-gray-600 hover:text-tripon-teal p-2 transition-colors">
                <ShoppingBag size={20} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-tripon-orange text-white text-xs rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-tripon-teal p-2 transition-colors mr-2"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link to="/bookings" className="relative text-gray-600 hover:text-tripon-teal p-2 transition-colors mr-2">
              <ShoppingBag size={20} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-tripon-orange text-white text-xs rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="menu-button text-gray-600 hover:text-tripon-teal p-2 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar (Desktop) */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              className="absolute top-16 md:top-20 left-0 right-0 px-4 py-2 bg-white shadow-md z-10"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={searchVariants}
            >
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search destinations, trips..."
                  className="w-full px-4 py-2 border-2 border-tripon-teal rounded-md focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button
                  onClick={toggleSearch}
                  className="ml-2 text-gray-500 hover:text-tripon-teal"
                >
                  <X size={24} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="mobile-menu md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg px-4 overflow-hidden z-10"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <motion.div className="py-2 space-y-1" variants={menuVariants}>
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={itemVariants}>
                    <Link
                      to={link.path}
                      className={cn(
                        "block px-3 py-3 rounded-md text-base font-medium transition-colors",
                        isActive(link.path)
                          ? "bg-tripon-teal/10 text-tripon-teal"
                          : "text-black hover:bg-gray-100"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Link
                    to="/account"
                    className="flex items-center px-3 py-3 rounded-md text-base font-medium text-black hover:bg-gray-100"
                  >
                    <User size={16} className="mr-2" />
                    My Account
                  </Link>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
