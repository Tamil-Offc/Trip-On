
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, CreditCard, Check } from 'lucide-react';
import { useTripContext } from '../../context/TripContext';
import { toast } from '../../components/ui/use-toast';

const BookingModal = ({ trip, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    travelers: 1,
    date: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });
  const { addToCart } = useTripContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitBooking = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      addToCart(trip, {
        quantity: formData.travelers,
        date: formData.date,
      });
      setIsSubmitting(false);
      setStep(4); // Show success step
    }, 1500);
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const stepVariants = {
    hidden: {
      x: 20,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      x: -20,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              {step < 4 ? `Book Your Trip ${step}/3` : 'Booking Confirmed'}
            </h3>
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
            {/* Progress bar */}
            {step < 4 && (
              <div className="h-2 w-full bg-gray-200 rounded-full mt-3">
                <motion.div 
                  className="h-2 bg-tripon-teal rounded-full"
                  initial={{ width: '33.3%' }}
                  animate={{ width: `${step * 33.3}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {/* Step 1: Trip Details */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img 
                      src={trip.image} 
                      alt={trip.title} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{trip.title}</h4>
                  <p className="text-gray-500 mb-4">{trip.location}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Trip Date</label>
                      <div className="relative">
                        <Calendar className="absolute top-3 left-3 text-gray-400" size={18} />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full py-2 px-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-tripon-teal focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Number of Travelers</label>
                      <div className="relative">
                        <Users className="absolute top-3 left-3 text-gray-400" size={18} />
                        <select
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleChange}
                          className="w-full py-2 px-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-tripon-teal focus:border-transparent appearance-none"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between mb-2">
                        <span>Trip Price</span>
                        <span>${trip.price} per person</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${trip.price * formData.travelers}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Personal Details */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h4 className="text-lg font-semibold mb-4">Personal Information</h4>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tripon-teal focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tripon-teal focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tripon-teal focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tripon-teal focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 mt-4">
                    <p>This information will be used for booking confirmation and trip updates.</p>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h4 className="text-lg font-semibold mb-4">Payment Details</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Card Number</label>
                      <div className="relative">
                        <CreditCard className="absolute top-3 left-3 text-gray-400" size={18} />
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="**** **** **** ****"
                          className="w-full py-2 px-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-tripon-teal focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Name on Card</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tripon-teal focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Expiration Date</label>
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tripon-teal focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="***"
                          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tripon-teal focus:border-transparent"
                          required
                          maxLength={3}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between mb-2">
                      <span>Trip Total</span>
                      <span>${trip.price * formData.travelers}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Booking Fee</span>
                      <span>$49</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total to Pay</span>
                      <span>${trip.price * formData.travelers + 49}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-center py-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20,
                      delay: 0.2 
                    }}
                    className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <Check className="text-green-500" size={40} />
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600 mb-6">
                    Your trip to {trip.destination} has been booked successfully. Check your email for details.
                  </p>

                  <div className="bg-gray-50 rounded-md p-4 text-left mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Booking Reference</span>
                      <span className="font-semibold">TRP-{Math.floor(Math.random() * 10000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Trip Date</span>
                      <span className="font-semibold">{formData.date}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full py-3 px-4 bg-tripon-teal text-white font-medium rounded-md hover:bg-tripon-teal/90 transition-colors"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Footer */}
          {step < 4 && (
            <div className="bg-gray-50 px-6 py-4 flex justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="py-2 px-4 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="py-2 px-4 bg-tripon-teal text-white font-medium rounded-md hover:bg-tripon-teal/90 transition-colors"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submitBooking}
                  className="py-2 px-4 bg-tripon-teal text-white font-medium rounded-md hover:bg-tripon-teal/90 transition-colors flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div 
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Processing...
                    </>
                  ) : (
                    'Complete Booking'
                  )}
                </button>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingModal;
