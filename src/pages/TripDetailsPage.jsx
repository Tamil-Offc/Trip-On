
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Calendar, Star, Clock, Users, Utensils, Heart, Share, ArrowLeft, ArrowRight,
  Check, X, MessageCircle, ChevronDown, ChevronUp
} from 'lucide-react';
import { useTripContext } from '../context/TripContext';
import { mockReviews } from '../data/mockData';

const TripDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTripById, setSelectedTrip, addToCart } = useTripContext();
  const [trip, setTrip] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedSections, setExpandedSections] = useState({
    inclusions: false,
    itinerary: true,
  });
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const galleryRef = useRef(null);
  
  // Fetch trip data
  useEffect(() => {
    const fetchTrip = async () => {
      setLoading(true);
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          const tripData = getTripById(id);
          if (!tripData) {
            navigate('/trips', { replace: true });
            return;
          }
          
          setTrip(tripData);
          setSelectedTrip(tripData);
          
          // Filter reviews for this trip
          const tripReviews = mockReviews.filter(review => review.tripId === parseInt(id)) || [];
          setReviews(tripReviews);
          
          setLoading(false);
          document.title = `TripOn - ${tripData.title}`;
        }, 500);
      } catch (error) {
        console.error('Error fetching trip:', error);
        setLoading(false);
        navigate('/trips', { replace: true });
      }
    };
    
    fetchTrip();
  }, [id, getTripById, navigate, setSelectedTrip]);

  const handleBookNow = () => {
    // In a real app, this might open a modal or navigate to a booking page
    addToCart(trip);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const nextImage = () => {
    if (!trip) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === trip.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    if (!trip) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? trip.gallery.length - 1 : prevIndex - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Page animations
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  if (loading) {
    return (
      <div className="pt-20 pb-10 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            {/* Skeleton for image */}
            <div className="w-full h-96 bg-gray-300 rounded-xl mb-8"></div>
            
            {/* Skeleton for title and basic info */}
            <div className="h-10 bg-gray-300 w-3/4 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 w-1/2 rounded mb-8"></div>
            
            {/* Skeleton for price and details */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="h-6 bg-gray-300 w-1/3 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 w-full rounded mb-2"></div>
                <div className="h-4 bg-gray-300 w-full rounded mb-2"></div>
                <div className="h-4 bg-gray-300 w-3/4 rounded mb-8"></div>
                
                <div className="h-6 bg-gray-300 w-1/4 rounded mb-4"></div>
                <div className="h-20 bg-gray-300 w-full rounded mb-8"></div>
              </div>
              
              <div className="md:w-1/3">
                <div className="h-60 bg-gray-300 w-full rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!trip) return null;

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-20 pb-10 bg-gray-50 min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button & Breadcrumbs */}
        <div className="mb-6">
          <div className="flex items-center text-sm">
            <Link to="/trips" className="text-gray-500 hover:text-tripon-teal flex items-center">
              <ArrowLeft size={16} className="mr-1" />
              Back to Trips
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">{trip.title}</span>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="mb-8 relative" ref={galleryRef}>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={trip.gallery[currentImageIndex]}
                alt={`${trip.title} - View ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            
            {/* Image Navigation */}
            <button 
              onClick={prevImage} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/60 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/60 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Thumbnails */}
          <div className="flex justify-center mt-4 space-x-2">
            {trip.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => selectImage(idx)}
                className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                  currentImageIndex === idx ? 'border-tripon-teal scale-110' : 'border-transparent'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          
          {/* Share & Favorite Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="bg-white/70 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
              <Heart size={20} />
            </button>
            <button className="bg-white/70 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
              <Share size={20} />
            </button>
          </div>
        </div>
        
        {/* Trip Details & Booking */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Trip Details */}
          <div className="lg:w-2/3">
            {/* Title & Basic Info */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-tripon-blue">{trip.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-1 text-tripon-teal" />
                  <span>{trip.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-1 text-tripon-teal" />
                  <span>{trip.duration} days</span>
                </div>
                <div className="flex items-center">
                  <Star size={16} className="mr-1 text-yellow-400" />
                  <span className="font-medium">{trip.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({trip.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-gray-700">{trip.description}</p>
            </div>
            
            {/* Inclusions */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleSection('inclusions')}>
                <h2 className="text-xl font-semibold text-tripon-blue">What's Included</h2>
                {expandedSections.inclusions ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </div>
              
              <AnimatePresence>
                {expandedSections.inclusions && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {trip.inclusions.map((inclusion, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check size={16} className="mr-2 mt-1 text-green-500 shrink-0" />
                          <span className="text-gray-700">{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Itinerary */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('itinerary')}>
                <h2 className="text-xl font-semibold text-tripon-blue">Trip Itinerary</h2>
                {expandedSections.itinerary ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </div>
              
              <AnimatePresence>
                {expandedSections.itinerary && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-4">
                      {trip.itinerary.map((day, idx) => (
                        <div key={idx} className="border-l-2 border-tripon-teal pl-4 pb-4">
                          <h3 className="font-semibold text-tripon-blue">Day {day.day}: {day.title}</h3>
                          <p className="text-gray-600 mt-1">{day.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-tripon-blue mb-4">Traveler Reviews</h2>
              
              {reviews.length > 0 ? (
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-start">
                        <img 
                          src={review.avatar} 
                          alt={review.userName} 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold">{review.userName}</h4>
                            <span className="text-gray-500 text-sm">{review.date}</span>
                          </div>
                          <div className="flex mb-2">
                            {Array(5).fill(0).map((_, idx) => (
                              <Star
                                key={idx}
                                size={14}
                                className={idx < review.rating ? "text-yellow-400" : "text-gray-300"}
                                fill={idx < review.rating ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MessageCircle size={40} className="mx-auto text-gray-300 mb-2" />
                  <p className="text-gray-500">No reviews for this trip yet.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Right Column - Booking Card */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-tripon-blue">Book This Trip</h3>
                <div className="text-tripon-teal font-bold text-xl">
                  ${trip.price}
                  <span className="text-gray-500 text-sm font-normal">/person</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Clock size={18} className="text-tripon-teal mr-3" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-gray-600">{trip.duration} days</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users size={18} className="text-tripon-teal mr-3" />
                  <div>
                    <p className="font-medium">Group Size</p>
                    <p className="text-gray-600">Max 12 people</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Utensils size={18} className="text-tripon-teal mr-3" />
                  <div>
                    <p className="font-medium">Meals</p>
                    <p className="text-gray-600">Breakfast included</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mb-6">
                <label className="block text-gray-700 font-medium mb-2">Select Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tripon-teal"
                />
              </div>
              
              <button
                onClick={handleBookNow}
                className="w-full bg-tripon-teal hover:bg-tripon-teal/90 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Book Now
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                Free cancellation up to 7 days before the trip starts
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TripDetailsPage;
