
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, Star, ArrowRight, Users, ChevronRight } from 'lucide-react';
import { useTripContext } from '../context/TripContext';
import StatsCounter from '../components/home/StatsCounter';
import { mockStats, mockGuides, mockReviews } from '../data/mockData';

const HomePage = () => {
  const { featuredTrips, destinations, loading, setSelectedTrip } = useTripContext();
  const { scrollY } = useScroll();
  
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const heroY = useTransform(scrollY, [0, 300], [0, 100]);
  
  // Page animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  useEffect(() => {
    // This is where you would fetch your data in a real app
    document.title = "TripOn - Discover Your Next Adventure";
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            opacity: heroOpacity, 
            scale: heroScale,
            y: heroY
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
            alt="Stunning landscape with mountains" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center text-white mt-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-1 uppercase tracking-wide">
              Discover the world with us
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg max-w-3xl mx-auto font-poppins"
          >
            Unforgettable Adventures Await You
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-8 max-w-xl mx-auto text-white/90"
          >
            Explore the world's most breathtaking destinations with curated experiences
            tailored just for you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/trips" className="bg-tripon-teal hover:bg-tripon-teal/90 text-white py-3 px-8 rounded-lg font-medium text-lg transition-colors duration-300">
              Explore Trips
            </Link>
            <Link to="/about" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-3 px-8 rounded-lg font-medium text-lg transition-colors duration-300">
              Learn More
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm animate-bounce">
            <ChevronRight size={20} className="text-white transform rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tripon-blue mb-4">
              Popular Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most sought-after destinations, carefully selected for unforgettable experiences and breathtaking views.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {loading ? (
              Array(4).fill(0).map((_, index) => (
                <div key={index} className="rounded-xl overflow-hidden bg-white shadow-lg h-64 animate-pulse">
                  <div className="h-full bg-gray-200"></div>
                </div>
              ))
            ) : (
              destinations
                .filter(dest => dest.featured)
                .slice(0, 4)
                .map((destination) => (
                  <motion.div
                    key={destination.id}
                    variants={cardVariants}
                    whileHover="hover"
                    className="rounded-xl overflow-hidden bg-white shadow-lg transform transition duration-300"
                  >
                    <Link to={`/trips?destination=${destination.name}`} className="block h-full">
                      <div className="relative h-52">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                          <div className="flex items-center">
                            <MapPin size={16} className="text-white mr-1" />
                            <span className="text-white text-sm font-medium">{destination.country}</span>
                          </div>
                          <h3 className="text-white text-xl font-bold">{destination.name}</h3>
                        </div>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <p className="text-sm text-gray-500">{destination.description.split(' ').slice(0, 3).join(' ')}...</p>
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400" />
                          <span className="ml-1 font-semibold">{destination.rating}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
            )}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={3}
            className="text-center mt-12"
          >
            <Link
              to="/trips"
              className="inline-flex items-center text-tripon-teal hover:text-tripon-teal/80 font-medium"
            >
              <span>View all destinations</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Trips */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tripon-blue mb-4">
              Featured Trips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hand-picked adventures with exceptional experiences, perfect accommodations,
              and unforgettable moments.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {loading ? (
              Array(3).fill(0).map((_, index) => (
                <div key={index} className="rounded-xl overflow-hidden bg-white shadow-lg h-96 animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              ))
            ) : (
              featuredTrips.slice(0, 3).map((trip) => (
                <motion.div
                  key={trip.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="rounded-xl overflow-hidden bg-white shadow-lg"
                >
                  <Link to={`/trips/${trip.id}`} onClick={() => setSelectedTrip(trip)}>
                    <div className="relative h-52">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-semibold text-tripon-blue">
                        {trip.duration} days
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2 text-tripon-blue">{trip.title}</h3>
                      <div className="flex items-center mb-3 text-gray-500">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{trip.location}</span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{trip.description}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400 mr-1" />
                          <span className="font-medium">{trip.rating}</span>
                          <span className="text-gray-500 text-sm ml-1">({trip.reviews})</span>
                        </div>
                        <div className="text-tripon-teal font-bold">
                          ${trip.price}
                          <span className="text-gray-500 text-sm font-normal">/person</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={3}
            className="text-center mt-12"
          >
            <Link
              to="/trips"
              className="bg-tripon-teal hover:bg-tripon-teal/90 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300 inline-flex items-center"
            >
              <span>Browse All Trips</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-tripon-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter stats={mockStats} />
        </div>
      </section>

      {/* Meet Our Guides Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tripon-blue mb-4">
              Meet Our Guides
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced travel experts bring destinations to life with their knowledge, passion, and local connections.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {mockGuides.map((guide) => (
              <motion.div
                key={guide.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="mb-4 relative w-24 h-24 mx-auto">
                  <img
                    src={guide.avatar}
                    alt={guide.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1 text-tripon-blue">{guide.name}</h3>
                <p className="text-tripon-teal font-medium text-sm mb-2">{guide.speciality}</p>
                <p className="text-gray-600 text-sm mb-3">{guide.bio}</p>
                <div className="flex justify-center space-x-1 text-xs text-gray-500">
                  {guide.languages.map((language, idx) => (
                    <span key={idx} className="bg-gray-100 px-2 py-1 rounded-full">
                      {language}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tripon-blue mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences from real travelers who have embarked on unforgettable journeys with us.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {mockReviews.slice(0, 3).map((review) => (
              <motion.div
                key={review.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <img
                      src={review.avatar}
                      alt={review.userName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.userName}</h4>
                    <div className="flex">
                      {Array(5).fill(0).map((_, idx) => (
                        <Star
                          key={idx}
                          size={14}
                          className={idx < review.rating ? "text-yellow-400" : "text-gray-300"}
                          fill={idx < review.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic mb-2">"{review.comment.substring(0, 150)}..."</p>
                <div className="text-xs text-gray-500 flex items-center mt-4">
                  <Calendar size={12} className="mr-1" />
                  <span>{review.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-tripon-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-tripon-blue" />
          <img 
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
            alt="Ocean waves" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={0}
            className="max-w-xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Travel Inspiration</h2>
            <p className="mb-8 text-blue-100">
              Sign up for our newsletter to receive exclusive offers, travel tips, and destination insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-tripon-teal"
              />
              <button className="bg-tripon-orange hover:bg-tripon-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-xs text-blue-200">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from TripOn.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="bg-gradient-to-r from-tripon-blue to-tripon-teal rounded-2xl p-8 md:p-12 text-center text-white shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Adventure Today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              From secluded beaches to mountain peaks, your perfect journey awaits.
              Let's create memories that last a lifetime.
            </p>
            <Link
              to="/trips"
              className="bg-white text-tripon-blue hover:bg-gray-100 py-3 px-8 rounded-lg font-medium text-lg transition-colors duration-300 inline-flex items-center"
            >
              <span>Find Your Trip</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
