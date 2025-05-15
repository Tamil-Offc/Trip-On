
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const footerLinks = {
    destinations: [
      { name: 'Bali', path: '/trips?destination=Bali' },
      { name: 'Paris', path: '/trips?destination=Paris' },
      { name: 'Santorini', path: '/trips?destination=Santorini' },
      { name: 'Tokyo', path: '/trips?destination=Tokyo' },
      { name: 'Machu Picchu', path: '/trips?destination=Machu Picchu' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'Careers', path: '/careers' },
      { name: 'Sustainability', path: '/sustainability' }
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms & Conditions', path: '/terms' }
    ]
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-tripon-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-span-1"
          >
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold font-poppins bg-gradient-to-r from-white to-tripon-orange bg-clip-text text-transparent">
                TripOn
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Discover the world with TripOn - your premium travel companion for unforgettable adventures and experiences.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-tripon-orange transition-colors p-2 border border-gray-700 rounded-full">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-white hover:text-tripon-orange transition-colors p-2 border border-gray-700 rounded-full">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-white hover:text-tripon-orange transition-colors p-2 border border-gray-700 rounded-full">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-white hover:text-tripon-orange transition-colors p-2 border border-gray-700 rounded-full">
                <Youtube size={16} />
              </a>
            </div>
          </motion.div>

          {/* Destinations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Destinations</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-300 hover:text-tripon-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-300 hover:text-tripon-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-tripon-orange" />
                <span className="text-gray-300">
                  123 Travel Street, Adventure City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-tripon-orange" />
                <a href="tel:+1-800-123-4567" className="text-gray-300 hover:text-tripon-orange transition-colors">
                  +1-800-123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-tripon-orange" />
                <a href="mailto:info@tripon.com" className="text-gray-300 hover:text-tripon-orange transition-colors">
                  info@tripon.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {year} TripOn. All rights reserved.
          </p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.support.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="text-gray-400 hover:text-tripon-orange transition-colors text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
