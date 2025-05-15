
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Star, Filter, X } from 'lucide-react';
import { useTripContext } from '../context/TripContext';
import { Link } from 'react-router-dom';

const TripsPage = () => {
  const { trips, filterTrips, updateFilters, filters, loading, setSelectedTrip } = useTripContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get destination from URL params
  useEffect(() => {
    const destinationParam = searchParams.get('destination');
    if (destinationParam) {
      updateFilters({ destination: destinationParam });
    }
    document.title = "TripOn - Explore Our Trips";
  }, [searchParams, updateFilters]);

  // Apply filters when filters or trips change
  useEffect(() => {
    setFilteredTrips(filterTrips());
  }, [filters, trips, filterTrips]);

  const handleFilterChange = (filter, value) => {
    updateFilters({ [filter]: value });
    
    // Update URL params for destination filter
    if (filter === 'destination') {
      if (value) {
        setSearchParams({ destination: value });
      } else {
        setSearchParams({});
      }
    }
  };

  const clearFilters = () => {
    updateFilters({
      destination: '',
      priceRange: [0, 10000],
      duration: '',
      category: ''
    });
    setSearchParams({});
  };

  const durations = [
    { value: '', label: 'Any Duration' },
    { value: 'short', label: 'Short (1-3 days)' },
    { value: 'medium', label: 'Medium (4-7 days)' },
    { value: 'long', label: 'Long (8+ days)' }
  ];

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'beach', label: 'Beach' },
    { value: 'city', label: 'City' },
    { value: 'wildlife', label: 'Wildlife' },
    { value: 'hiking', label: 'Hiking' },
    { value: 'foodie', label: 'Food & Culinary' },
    { value: 'romantic', label: 'Romantic' },
    { value: 'wellness', label: 'Wellness & Spa' }
  ];

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-tripon-blue text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Trips</h1>
          <p className="text-blue-100 max-w-2xl">
            Discover our carefully curated selection of trips and experiences, designed to create unforgettable memories.
          </p>
        </div>
      </div>

      {/* Filters & Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
            >
              <Filter size={18} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Filters Sidebar */}
          <motion.div 
            className={`lg:w-1/4 ${showFilters || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-tripon-blue">Filters</h2>
                <button 
                  onClick={clearFilters}
                  className="text-gray-500 hover:text-tripon-teal text-sm flex items-center"
                >
                  <X size={16} className="mr-1" />
                  Clear All
                </button>
              </div>

              {/* Destination Filter */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Destination</label>
                <input
                  type="text"
                  value={filters.destination}
                  onChange={(e) => handleFilterChange('destination', e.target.value)}
                  placeholder="Search destination..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tripon-teal"
                />
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Price Range</label>
                <div className="flex items-center space-x-2">
                  <span>${filters.priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>

              {/* Duration Filter */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Duration</label>
                <select
                  value={filters.duration}
                  onChange={(e) => handleFilterChange('duration', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tripon-teal"
                >
                  {durations.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tripon-teal"
                >
                  {categories.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Trip Cards */}
          <div className="lg:w-3/4">
            {/* Results Count & Sorting */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {loading ? 'Loading trips...' : `Showing ${filteredTrips.length} trips`}
              </p>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Sort by:</span>
                <select className="px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-tripon-teal">
                  <option>Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration</option>
                </select>
              </div>
            </div>

            {loading ? (
              // Loading state
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array(6).fill(0).map((_, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse h-80">
                    <div className="h-40 bg-gray-300"></div>
                    <div className="p-5 space-y-3">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-5 bg-gray-300 rounded w-1/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredTrips.length === 0 ? (
              // No results state
              <div className="text-center py-16 bg-white rounded-xl shadow-md">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Filter size={48} className="mx-auto text-gray-400 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">No trips found</h3>
                  <p className="text-gray-500 mb-4">
                    Try adjusting your filters to find available trips
                  </p>
                  <button 
                    onClick={clearFilters}
                    className="bg-tripon-teal hover:bg-tripon-teal/90 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              </div>
            ) : (
              // Trip cards
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredTrips.map((trip) => (
                  <motion.div
                    key={trip.id}
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <Link to={`/trips/${trip.id}`} onClick={() => setSelectedTrip(trip)}>
                      <div className="relative h-48">
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
                        <h3 className="text-xl font-semibold mb-2 text-tripon-blue">{trip.title}</h3>
                        <div className="flex items-center mb-2 text-gray-500">
                          <MapPin size={16} className="mr-1" />
                          <span className="text-sm">{trip.location}</span>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">{trip.description.substring(0, 100)}...</p>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
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
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsPage;
