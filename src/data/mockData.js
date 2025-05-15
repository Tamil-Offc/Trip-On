// Mock destinations
export const mockDestinations = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Tropical paradise with stunning beaches and vibrant culture",
    featured: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "City of love with iconic landmarks and exquisite cuisine",
    featured: true,
    rating: 4.7
  },
  {
    id: 3,
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    description: "Breathtaking island with white-washed buildings and blue domes",
    featured: true,
    rating: 4.9
  },
  {
    id: 4,
    name: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    description: "Modern metropolis with ancient traditions and futuristic technology",
    featured: true,
    rating: 4.6
  },
  {
    id: 5,
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    description: "Ancient Incan citadel set amidst breathtaking mountain scenery",
    featured: true,
    rating: 4.9
  },
  {
    id: 6,
    name: "New York",
    country: "USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    description: "Bustling metropolis known for its iconic skyline and diverse culture",
    featured: false,
    rating: 4.5
  },
  {
    id: 7,
    name: "Rome",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    description: "Eternal city with ancient ruins and Renaissance masterpieces",
    featured: false,
    rating: 4.7
  },
  {
    id: 8,
    name: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
    description: "Coastal city with stunning Table Mountain and diverse wildlife",
    featured: false,
    rating: 4.6
  }
];

// Mock trips
export const mockTrips = [
  {
    id: 1,
    title: "Bali Bliss Retreat",
    destination: "Bali",
    location: "Ubud, Bali, Indonesia",
    price: 1499,
    duration: 7,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      "https://images.unsplash.com/photo-1554481923-a6918bd997bc",
      "https://images.unsplash.com/photo-1517822306483-869b56603e95",
      "https://images.unsplash.com/photo-1573790387438-4da905039392",
    ],
    description: "Immerse yourself in the spiritual and cultural heart of Bali with this 7-day retreat in Ubud. Surrounded by lush rice terraces and ancient temples, you'll experience daily yoga, traditional Balinese healing, and explore the island's natural beauty.",
    inclusions: [
      "Round-trip airport transfer",
      "6 nights accommodation in luxury villa",
      "Daily breakfast and welcome dinner",
      "Guided tours of local temples and rice terraces",
      "Balinese cooking class",
      "Daily yoga sessions",
      "Traditional spa treatment"
    ],
    itinerary: [
      { day: 1, title: "Arrival & Welcome", description: "Airport pickup and transfer to your villa in Ubud. Welcome dinner and orientation." },
      { day: 2, title: "Sacred Temples", description: "Visit Tirta Empul Temple for a purification ceremony and explore the Goa Gajah (Elephant Cave)." },
      { day: 3, title: "Rice Terraces & Coffee", description: "Hike through the Tegallalang Rice Terraces and visit a local coffee plantation." },
      { day: 4, title: "Culinary Adventure", description: "Morning market visit followed by a traditional Balinese cooking class." },
      { day: 5, title: "Mount Batur Sunrise", description: "Early morning hike to witness sunrise from Mount Batur volcano, followed by a relaxing afternoon." },
      { day: 6, title: "Spa & Cultural Show", description: "Traditional Balinese spa treatment and evening cultural performance." },
      { day: 7, title: "Departure", description: "Free morning for last-minute shopping or relaxation before airport transfer." },
    ],
    rating: 4.8,
    reviews: 128,
    featured: true,
    categories: ["cultural", "wellness"]
  },
  {
    id: 2,
    title: "Paris Romance Package",
    destination: "Paris",
    location: "Paris, France",
    price: 2299,
    duration: 5,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      "https://images.unsplash.com/photo-1543349689-9a4d426bee8e",
      "https://images.unsplash.com/photo-1550340499-a6c60fc8287c",
      "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f",
    ],
    description: "Experience the magic of Paris with this romantic 5-day getaway. Stay in a boutique hotel near the Champs-Élysées, enjoy a private Seine River cruise, and savor authentic French cuisine at charming local bistros.",
    inclusions: [
      "Round-trip airport transfer",
      "4 nights accommodation in boutique hotel",
      "Daily breakfast and one romantic dinner",
      "Skip-the-line access to the Eiffel Tower",
      "Louvre Museum guided tour",
      "Seine River evening cruise",
      "Montmartre walking tour"
    ],
    itinerary: [
      { day: 1, title: "Bonjour Paris", description: "Arrival, hotel check-in, and evening stroll along the Seine River." },
      { day: 2, title: "Iconic Landmarks", description: "Visit the Eiffel Tower and Arc de Triomphe, followed by shopping on the Champs-Élysées." },
      { day: 3, title: "Art & Culture", description: "Guided tour of the Louvre Museum and afternoon in the Marais district." },
      { day: 4, title: "Montmartre & Romance", description: "Explore the artistic Montmartre neighborhood followed by a romantic Seine River dinner cruise." },
      { day: 5, title: "Au Revoir", description: "Final morning to visit Notre Dame Cathedral (exterior) before departure." },
    ],
    rating: 4.7,
    reviews: 93,
    featured: true,
    categories: ["city", "cultural", "romantic"]
  },
  {
    id: 3,
    title: "Greek Islands Hopping",
    destination: "Santorini",
    location: "Santorini & Mykonos, Greece",
    price: 2799,
    duration: 8,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    gallery: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077",
      "https://images.unsplash.com/photo-1570077188670-e3a8d3a6e8e9",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    ],
    description: "Island hop through the jewels of the Aegean Sea with this 8-day Greek adventure. Experience the iconic whitewashed buildings of Santorini, the vibrant nightlife of Mykonos, and discover hidden beaches and ancient ruins.",
    inclusions: [
      "All ferry transfers between islands",
      "4 nights in Santorini, 3 nights in Mykonos",
      "Daily breakfast",
      "Santorini caldera sunset cruise",
      "Wine tasting tour in Santorini",
      "Beach club day pass in Mykonos",
      "Athens airport transfers"
    ],
    itinerary: [
      { day: 1, title: "Welcome to Santorini", description: "Arrival in Santorini, transfer to your cliffside hotel in Oia." },
      { day: 2, title: "Caldera Views", description: "Morning at leisure, afternoon hiking along the caldera from Fira to Oia." },
      { day: 3, title: "Sailing the Aegean", description: "Full-day catamaran cruise around Santorini with stops for swimming and snorkeling." },
      { day: 4, title: "Wine & History", description: "Visit ancient Akrotiri ruins and enjoy a wine tasting tour of local vineyards." },
      { day: 5, title: "Santorini to Mykonos", description: "Morning ferry to Mykonos, afternoon to explore Mykonos Town." },
      { day: 6, title: "Beach Day", description: "Day at a famous beach club with optional water sports." },
      { day: 7, title: "Delos Excursion", description: "Optional morning trip to ancient Delos, afternoon at leisure in Mykonos." },
      { day: 8, title: "Departure", description: "Transfer to Mykonos airport for departure." },
    ],
    rating: 4.9,
    reviews: 156,
    featured: true,
    categories: ["beach", "cultural", "romantic"]
  },
  {
    id: 4,
    title: "Tokyo Technology & Tradition",
    destination: "Tokyo",
    location: "Tokyo, Japan",
    price: 2499,
    duration: 6,
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d",
    ],
    description: "Experience the fascinating contrast of ultra-modern technology and ancient traditions in Tokyo. From robot restaurants to serene temples, this 6-day tour showcases the many faces of Japan's captivating capital.",
    inclusions: [
      "Airport transfers via airport express train",
      "5 nights in centrally located hotel",
      "Daily breakfast and one traditional dinner",
      "24-hour Tokyo subway pass",
      "Guided tour of Tsukiji Outer Market",
      "Robot Restaurant show tickets",
      "Tea ceremony experience"
    ],
    itinerary: [
      { day: 1, title: "Welcome to Japan", description: "Arrival in Tokyo, hotel check-in, and evening orientation walk in Shinjuku." },
      { day: 2, title: "Tokyo Classics", description: "Visit Meiji Shrine, Harajuku, and shopping in Shibuya. Evening in Shinjuku." },
      { day: 3, title: "Traditional Tokyo", description: "Explore Asakusa, Senso-ji Temple, and take a river cruise to Odaiba." },
      { day: 4, title: "Culinary Adventure", description: "Tsukiji Market tour, sushi-making class, and evening at the Robot Restaurant." },
      { day: 5, title: "Technology & Pop Culture", description: "Visit Akihabara for electronics and anime, then explore Tokyo National Museum." },
      { day: 6, title: "Sayonara", description: "Morning for last-minute shopping before departure." },
    ],
    rating: 4.6,
    reviews: 87,
    featured: true,
    categories: ["city", "cultural", "foodie"]
  },
  {
    id: 5,
    title: "Machu Picchu Explorer",
    destination: "Machu Picchu",
    location: "Cusco & Machu Picchu, Peru",
    price: 1899,
    duration: 7,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    gallery: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
      "https://images.unsplash.com/photo-1531065208531-4036c0dba5cd",
      "https://images.unsplash.com/photo-1565633248292-a83834533a0f",
    ],
    description: "Follow in the footsteps of the Incas on this 7-day adventure to Machu Picchu. Acclimatize in historic Cusco, explore the Sacred Valley, and witness the sunrise over the iconic ruins of the lost city of the Incas.",
    inclusions: [
      "All domestic transfers (flights, trains, buses)",
      "3 nights in Cusco, 1 night in Aguas Calientes, 2 nights in Sacred Valley",
      "Daily breakfast",
      "Guided tour of Cusco and Sacred Valley",
      "2-day entrance to Machu Picchu with expert guide",
      "Traditional Pachamanca feast experience",
      "Ollantaytambo ruins visit"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Cusco", description: "Arrive in Cusco, transfer to hotel, and rest to acclimatize to the altitude." },
      { day: 2, title: "Cusco Exploration", description: "City tour including Sacsayhuaman fortress and the Cathedral of Santo Domingo." },
      { day: 3, title: "Sacred Valley", description: "Full day exploring the Sacred Valley, visiting Pisac Market and ruins." },
      { day: 4, title: "Ollantaytambo & Train Journey", description: "Morning at Ollantaytambo ruins, afternoon scenic train to Aguas Calientes." },
      { day: 5, title: "Machu Picchu", description: "Early morning bus to witness sunrise at Machu Picchu, guided tour, and free time to explore." },
      { day: 6, title: "Optional Second Visit & Return", description: "Optional second visit to Machu Picchu or explore Aguas Calientes. Afternoon train back to Ollantaytambo and transfer to Cusco." },
      { day: 7, title: "Departure", description: "Transfer to Cusco airport for departure." },
    ],
    rating: 4.9,
    reviews: 204,
    featured: true,
    categories: ["adventure", "cultural", "hiking"]
  },
  {
    id: 6,
    title: "New York City Break",
    destination: "New York",
    location: "New York, USA",
    price: 1699,
    duration: 4,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    gallery: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
      "https://images.unsplash.com/photo-1522083165195-3424ed129620",
      "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc",
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25",
    ],
    description: "Experience the energy of the Big Apple with this action-packed 4-day city break. Stay in the heart of Manhattan, catch a Broadway show, and explore iconic landmarks from Central Park to the Statue of Liberty.",
    inclusions: [
      "Airport transfers",
      "3 nights in midtown Manhattan hotel",
      "Daily breakfast",
      "72-hour New York City Pass",
      "Top of the Rock observation deck tickets",
      "Broadway show tickets",
      "Guided walking tour of Lower Manhattan"
    ],
    itinerary: [
      { day: 1, title: "Welcome to NYC", description: "Arrival, hotel check-in, and evening visit to Times Square." },
      { day: 2, title: "Iconic Manhattan", description: "Visit Empire State Building, stroll through Central Park, and evening Broadway show." },
      { day: 3, title: "Downtown & Liberty", description: "Ferry to Statue of Liberty and Ellis Island, explore Wall Street and 9/11 Memorial." },
      { day: 4, title: "Museums & Departure", description: "Morning visit to Metropolitan Museum of Art or Museum of Modern Art before departure." },
    ],
    rating: 4.5,
    reviews: 76,
    featured: false,
    categories: ["city", "cultural"]
  },
  {
    id: 7,
    title: "Roman Holiday",
    destination: "Rome",
    location: "Rome, Italy",
    price: 1599,
    duration: 5,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    gallery: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
      "https://images.unsplash.com/photo-1555992828-ca4dbe41d294",
      "https://images.unsplash.com/photo-1529260830199-42c24126f198",
      "https://images.unsplash.com/photo-1560704429-1c0e1a61b887",
    ],
    description: "Step back in time with this 5-day exploration of the Eternal City. Wander through ancient ruins, toss a coin in the Trevi Fountain, and indulge in authentic Italian cuisine in Rome's charming trattorias.",
    inclusions: [
      "Airport transfers",
      "4 nights in central hotel",
      "Daily breakfast and one traditional dinner",
      "Skip-the-line Vatican Museums & Sistine Chapel tour",
      "Colosseum and Roman Forum guided visit",
      "Pasta making class",
      "Rome city pass for public transport"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Rome", description: "Check in to your hotel and evening passeggiata through Piazza Navona and Pantheon." },
      { day: 2, title: "Ancient Rome", description: "Guided tour of the Colosseum, Roman Forum, and Palatine Hill." },
      { day: 3, title: "Vatican City", description: "Morning tour of Vatican Museums, Sistine Chapel, and St. Peter's Basilica." },
      { day: 4, title: "Roman Cuisine", description: "Morning at Trevi Fountain and Spanish Steps, afternoon pasta making class." },
      { day: 5, title: "Arrivederci Roma", description: "Final morning for shopping or visit to Borghese Gallery before departure." },
    ],
    rating: 4.7,
    reviews: 118,
    featured: false,
    categories: ["city", "cultural", "foodie"]
  },
  {
    id: 8,
    title: "Cape Town & Safari",
    destination: "Cape Town",
    location: "Cape Town & Kruger National Park, South Africa",
    price: 3299,
    duration: 10,
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
    gallery: [
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
      "https://images.unsplash.com/photo-1553174733-5ea5caa342a4",
      "https://images.unsplash.com/photo-1611779252107-7f9a94575049",
    ],
    description: "Experience the best of South Africa with this 10-day adventure combining the vibrant city of Cape Town with a thrilling safari in Kruger National Park. Ascend Table Mountain, explore the Cape Peninsula, and spot the Big Five on daily game drives.",
    inclusions: [
      "All domestic flights and transfers",
      "5 nights in Cape Town, 4 nights in safari lodge",
      "Daily breakfast, all meals during safari",
      "Cape Peninsula tour",
      "Table Mountain cable car tickets",
      "4-day safari with game drives",
      "Wine tasting in Stellenbosch"
    ],
    itinerary: [
      { day: 1, title: "Welcome to Cape Town", description: "Arrival, hotel check-in, and orientation walk along V&A Waterfront." },
      { day: 2, title: "Table Mountain & City", description: "Morning ascent of Table Mountain, afternoon city tour including Company Gardens and Castle of Good Hope." },
      { day: 3, title: "Cape Peninsula", description: "Full day tour of Cape Peninsula, visiting Cape Point, Boulder's Beach penguin colony, and Kirstenbosch Gardens." },
      { day: 4, title: "Winelands", description: "Day trip to Stellenbosch and Franschhoek for wine tasting and gourmet lunch." },
      { day: 5, title: "Cape Town at Leisure", description: "Free day to explore Cape Town or optional Robben Island visit." },
      { day: 6, title: "To Kruger", description: "Morning flight to Kruger, transfer to safari lodge, and evening game drive." },
      { day: 7, title: "Safari Day 1", description: "Morning and afternoon game drives with expert rangers." },
      { day: 8, title: "Safari Day 2", description: "Continue exploring Kruger National Park with game drives and bush walk." },
      { day: 9, title: "Safari Day 3", description: "Final full day of game viewing opportunities." },
      { day: 10, title: "Departure", description: "Morning game drive, then transfer for flight home." },
    ],
    rating: 4.8,
    reviews: 92,
    featured: false,
    categories: ["adventure", "wildlife", "city"]
  }
];

export const mockReviews = [
  {
    id: 1,
    tripId: 1,
    userName: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    date: "2025-04-12",
    comment: "The Bali retreat was absolutely life-changing! Our guide Putu was knowledgeable and friendly, the villa was stunning, and the itinerary perfectly balanced activities and relaxation. The sunrise hike to Mount Batur was a highlight - challenging but absolutely worth it for the breathtaking views!"
  },
  {
    id: 2,
    tripId: 1,
    userName: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    date: "2025-04-02",
    comment: "Great experience overall. The accommodation was luxurious and the activities well-planned. The only reason I'm not giving 5 stars is that the cooking class felt a bit rushed. Otherwise, a wonderful cultural immersion!"
  },
  {
    id: 3,
    tripId: 2,
    userName: "Emma Wilson",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5,
    date: "2025-03-28",
    comment: "Paris was everything we dreamed of and more! The boutique hotel was charming and in the perfect location. The Seine dinner cruise was incredibly romantic, and our guide Amélie made the Louvre visit fascinating even for someone who isn't an art expert."
  },
  {
    id: 4,
    tripId: 3,
    userName: "David Smith",
    avatar: "https://randomuser.me/api/portraits/men/57.jpg",
    rating: 5,
    date: "2025-03-15",
    comment: "Island hopping in Greece was the perfect honeymoon choice. The views in Santorini are even more spectacular than photos can capture, and the catamaran cruise was an absolute highlight. Mykonos had great energy and beautiful beaches."
  },
  {
    id: 5,
    tripId: 4,
    userName: "Jessica Taylor",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4,
    date: "2025-02-27",
    comment: "Tokyo is a fascinating blend of old and new! The Robot Restaurant was a wild experience and the traditional tea ceremony provided a peaceful contrast. Hotel was conveniently located near a subway station which made exploring easy."
  }
];

export const mockGuides = [
  {
    id: 1,
    name: "Carlos Rodriguez",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    speciality: "Adventure & Hiking",
    experience: 7,
    languages: ["English", "Spanish", "Portuguese"],
    bio: "Former mountaineering instructor with a passion for sustainable tourism. Carlos has led expeditions in the Andes, Himalayas, and Atlas Mountains."
  },
  {
    id: 2,
    name: "Aiko Tanaka",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    speciality: "Cultural & Historical",
    experience: 9,
    languages: ["English", "Japanese", "Mandarin"],
    bio: "Art historian and cultural expert who specializes in Asian traditions and heritage sites. Aiko brings history to life with her storytelling and local connections."
  },
  {
    id: 3,
    name: "Sophie Laurent",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    speciality: "Culinary & Wine Tours",
    experience: 6,
    languages: ["English", "French", "Italian"],
    bio: "Former sous-chef turned culinary guide with extensive knowledge of European cuisines and wine regions. Sophie's tours are a feast for the senses."
  },
  {
    id: 4,
    name: "Kwame Osei",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    speciality: "Wildlife & Safari",
    experience: 12,
    languages: ["English", "Swahili", "French"],
    bio: "Wildlife biologist and conservation advocate with over a decade of experience in East African national parks. Kwame's knowledge of animal behavior ensures unforgettable safari experiences."
  }
];

export const mockStats = {
  happyCustomers: 15000,
  toursCompleted: 1200,
  destinations: 72,
  awards: 25
};
