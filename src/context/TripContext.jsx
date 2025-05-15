
import { createContext, useContext, useState, useEffect } from 'react';
import { mockTrips, mockDestinations } from '../data/mockData';
import { toast } from '../components/ui/use-toast';

const TripContext = createContext();

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTripContext must be used within a TripContextProvider');
  }
  return context;
};

export const TripContextProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [featuredTrips, setFeaturedTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    destination: '',
    priceRange: [0, 10000],
    duration: '',
    category: ''
  });
  const [loading, setLoading] = useState(true);

  // Initialize data
  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setTrips(mockTrips);
      setDestinations(mockDestinations);
      setFeaturedTrips(mockTrips.filter(trip => trip.featured));
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Get trip by ID
  const getTripById = (id) => {
    return trips.find(trip => trip.id === parseInt(id));
  };

  // Add trip to cart/booking
  const addToCart = (trip, options = {}) => {
    const cartItem = {
      id: Date.now(),
      trip,
      quantity: options.quantity || 1,
      date: options.date || new Date(),
      totalPrice: trip.price * (options.quantity || 1)
    };

    setCart(prevCart => [...prevCart, cartItem]);
    toast({
      title: "Trip added to cart",
      description: `${trip.title} has been added to your bookings.`,
      variant: "success",
    });
  };

  // Remove from cart
  const removeFromCart = (cartItemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== cartItemId));
  };

  // Apply filters to trips
  const filterTrips = () => {
    let filteredTrips = [...mockTrips];
    
    if (filters.destination) {
      filteredTrips = filteredTrips.filter(trip => 
        trip.destination.toLowerCase().includes(filters.destination.toLowerCase()));
    }
    
    if (filters.priceRange) {
      filteredTrips = filteredTrips.filter(trip => 
        trip.price >= filters.priceRange[0] && trip.price <= filters.priceRange[1]);
    }
    
    if (filters.duration) {
      filteredTrips = filteredTrips.filter(trip => {
        if (filters.duration === 'short') return trip.duration <= 3;
        if (filters.duration === 'medium') return trip.duration > 3 && trip.duration <= 7;
        if (filters.duration === 'long') return trip.duration > 7;
        return true;
      });
    }
    
    if (filters.category) {
      filteredTrips = filteredTrips.filter(trip => 
        trip.categories.includes(filters.category));
    }
    
    return filteredTrips;
  };

  // Update filters
  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const value = {
    trips,
    destinations,
    featuredTrips,
    selectedTrip,
    setSelectedTrip,
    getTripById,
    cart,
    addToCart,
    removeFromCart,
    filters,
    updateFilters,
    filterTrips,
    loading
  };

  return (
    <TripContext.Provider value={value}>
      {children}
    </TripContext.Provider>
  );
};
