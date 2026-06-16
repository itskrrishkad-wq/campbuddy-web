import {
  CampPackage,
  TentType,
  GalleryItem,
  Testimonial,
  FAQItem,
} from "./types";
import pawnaLakeHero from "@/src/assets/images/pawna_lake_hero_1781554186715.jpg";
import premiumGlampingTent from "@/src/assets/images/premium_glamping_tent_1781554215882.jpg";
import bonfireBarbecueNight from "@/src/assets/images/bonfire_barbecue_night_1781554229242.jpg";

export const STATS = [
  {
    value: "18,400+",
    label: "Happy Campers Hosted",
    description: "Across Pune & Lonavala",
  },
  {
    value: "4.8 ★",
    label: "Average Rating",
    description: "From 3,200+ Google Reviews",
  },
  {
    value: "5+ Years",
    label: "Hospitality Excellence",
    description: "Certified lakeside camping",
  },
  {
    value: "100%",
    label: "Safe & Family Friendly",
    description: "In-house security & CCTV",
  },
];

export const DESTINATIONS_INFO = {
  pawna: {
    id: "pawna" as const,
    name: "Pawna Lake Camping WITH Camp Buddy",
    location: "Lonavala, Maharashtra",
    distance: "110-120 km from Mumbai | 55-70 km from Pune",
    rating: 4.8,
    reviews: 1980,
    bannerImage: "/src/assets/images/pawna_lake_hero_1781554186715.jpg",
    shortDesc:
      "Experience premium lakeside camping near Lonavala with breathtaking sunset views, bonfire nights, and cozy tent stays.",
    longDesc:
      "Experience the best Pawna Lake Camping near Pune and Mumbai with Camp Buddy — a perfect blend of nature, adventure, and unforgettable lakeside experiences. Nestled along the pristine shores of Pawna Lake near Lonavala, our campsite offers breathtaking waterfront views, peaceful surroundings, and spectacular sunsets, making it one of the most sought-after destinations for camping near Pune, Mumbai, and Lonavala. Whether you're planning a weekend getaway near Pune, a romantic lakeside camping experience for couples, a family vacation, or a group outing, Camp Buddy provides comfortable tent stays, delicious hot meals, bonfire nights with live music, barbecue sessions, and stargazing. Discover why thousands choose Camp Buddy for the ultimate getaway.",
    highlights: [
      "Secured, sanitised beach touching campsite with gorgeous waterfront view",
      "Saturday Live Acoustic Jamming & unplugged music programs",
      "Unlimited delicious Indian buffet dinner (Veg, Non-Veg, and specialised Jain options)",
      "Cozy fireplaces, common glowing bonfire, and outdoor activities like boating",
      "Optional Trekking Activity: Early morning hiking to Tikona Fort (1 hour up, 1 hour down)",
    ],
    bestTimeToVisit:
      "Throughout the year (Monsoon offers lush green valley views, winter offers crisp 12°C chilly star-filled nights)",
    foodSchedule: [
      {
        time: "4:30 PM",
        title: "Welcoming High-Tea",
        detail: "Freshly brewed tea/coffee, hot kanda pakodas and local snacks",
      },
      {
        time: "7:30 PM",
        title: "Live Barbecue Starters",
        detail:
          "Sizzling charcoal-grilled Paneer/Veg skewers or Chicken BBQ cooked live under starlight",
      },
      {
        time: "9:30 PM",
        title: "Unlimited Dinner Buffet",
        detail:
          "Jeera rice, Dal tadka, paneer masala, spicy chicken curry, Maharashtrian bhakri/roti, and dessert",
      },
      {
        time: "8:30 AM",
        title: "Morning Breakfast",
        detail:
          "Hot tasty Poha, Misal Pav, soft boiled eggs, tea, coffee, and biscuits",
      },
    ],
    locationDetails: {
      address:
        "Camp Buddy Pawna Lake Camping, Thakursai Village, Near Lonavala, Maharashtra 410406",
      directions:
        "From Pune: 55-70 km (1.5 to 2 hrs). Drive via Pune-Mumbai Expressway (NH48), exit Talegaon or Kamshet, and continue via Kamshet. By Train: Board local train to Lonavala or Kamshet, then hire taxi. From Mumbai: 110-120 km (2 to 3 hrs) via Expressway, exit at Lonavala and drive 10-20 km past Kamshet. Landmarks: Lonavala (20 km), Kamshet (15 km), Tikona Fort (5 km), Lohagad Fort (15 km), Visapur Fort (15 km), Tung Fort (8 km).",
      mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.38541570535!2d73.4735878!3d18.892011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2a3f7c0000001%3A0xe54e99f1fa0adbb5!2sPawna%20Lake%20Camping!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    },
  },
  panshet: {
    id: "panshet" as const,
    name: "Panshet Camping",
    location: "Velhe, Near Pune, Maharashtra",
    distance: "180 km from Mumbai | 42 km from Pune",
    rating: 4.7,
    reviews: 1220,
    bannerImage: "/src/assets/images/panshet_lake_hero_1781554201017.jpg",
    shortDesc:
      "Immerse in nature with majestic backwater valleys, exciting water sports adventure, and authentic village cooking.",
    longDesc:
      "Tucked inside the serene valleys of Velhe, Panshet Camping overlooks the magnificent, sprawling backwaters of the Panshet Dam. This campsite is tailor-made for those who seek solace and true nature-immersion away from city traffic. Flanked by deep green hills of the Western Ghats, this camp offers an array of adrenaline-pumping water sports including kayaking, speed boats, swimming with life jackets, and a beautiful forest nature trail. In the evening, the camp comes alive with the aroma of 'Chulivarchi Jevan'—traditional local Maharashtrian dishes cooked slowly over wood-fired earthen stoves, preserving absolute rich field flavors. Unwind, listen to whispering leaves, gaze at the glowing moon, and enjoy peaceful rustic glamping.",
    highlights: [
      "Peaceful, off-grid atmosphere deeply sheltered by rising Sahyadri valley mountains",
      "Direct backwater access featuring Kayaking, Speed Boat Rides, and safe Lake Swimming with safety jackets",
      "Authentic rural Maharashtrian buffet lunch/dinner cooked on traditional woodfire stoves ('Chulivarchi')",
      "Guided forest nature trail walking and bird-watching sessions early morning",
      "Extremely spacious layout inside orchard mango farms with dedicated privacy zones for groups",
    ],
    bestTimeToVisit:
      "Throughout the year. Monsoon (June-Oct) is highly recommended for majestic roaring waterfalls and rich green peaks.",
    foodSchedule: [
      {
        time: "4:00 PM",
        title: "Organic High-Tea",
        detail:
          "Spiced Kanda Bhajji or Batata Vada, local village tea and black coffee",
      },
      {
        time: "7:30 PM",
        title: "Rustic BBQ Starters",
        detail:
          "Smoked potato wedges, spiced marinated local veggies & chicken starters baked over charcoal grill",
      },
      {
        time: "9:00 PM",
        title: "Traditional Firewood Dinner",
        detail:
          "Authentic local Chulivarchi Jevan: Pitla Bhakri, spicy Chicken Rassa, local Indrayani steamed rice, and sweet Puranpoli",
      },
      {
        time: "8:30 AM",
        title: "Farmhouse Breakfast",
        detail:
          "Hot tasty Pohe or Upma, boiled farm-eggs, village milk, tea, and dry-fruits",
      },
    ],
    locationDetails: {
      address:
        "Panshet Backwaters Green Farms, Shirkoli Village, Velhe Taluka, Pune, Maharashtra 412107",
      directions:
        "Drive via Sinhagad Road from Pune, take Left past Khadakwasla Dam toward Panshet, and proceed about 8 km from the Panshet Dam wall along the backwater loop.",
      mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15147.886470005527!2d73.6190892!3d18.3516597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebe99e190df1%3A0x7d391f2dc348003f!2sPanshet%20Dam!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin",
    },
  },
};

export const PACKAGES: CampPackage[] = [
  {
    id: "pw-lake-classic",
    name: "Lakeside Classic Stay",
    pricePerPerson: 1299,
    originalPricePerPerson: 1999,
    duration: "1 Night / 2 Days",
    rating: 4.8,
    reviewsCount: 840,
    destination: "pawna",
    tags: ["Best Seller", "Popular"],
    meals: [
      "Hi-Tea",
      "BBQ (250g limited)",
      "Unlimited Indian Dinner (Veg/Non-Veg)",
      "Morning Breakfast",
    ],
    amenities: [
      "Comfortable Bedding",
      "Pillows & Blankets",
      "Shared Clean Washrooms",
      "Charging Points",
      "First Aid",
    ],
    activities: [
      "Bonfire",
      "Archery & Dart Game",
      "Cricket & Volleyball",
      "Carrom/Chess",
      "Sunset Lake Walk",
    ],
    tentType: "Premium Dome Tent",
    occupancy: "2, 3, or 4 Adults Sharing",
    checkIn: "4:00 PM",
    checkOut: "11:00 AM",
    description:
      "Our signature and most well-rounded weekend camp package. Sleep right beside the silver waters of Pawna Lake, feast on coal-grilled starters, and enjoy a warm blazing bonfire with games.",
    // image: "/src/assets/images/pawna_lake_hero_1781554186715.jpg"
    image: pawnaLakeHero,
  },
  {
    id: "pw-couple-glamping",
    name: "Couple's Lakeside Glamping",
    pricePerPerson: 1899,
    originalPricePerPerson: 2999,
    duration: "1 Night / 2 Days",
    rating: 4.9,
    reviewsCount: 410,
    destination: "pawna",
    tags: ["Romantic Choice", "Luxury Comfort"],
    meals: [
      "Welcoming Drinks",
      "Premium Hi-Tea",
      "Paneer & Chicken BBQ Skewers",
      "Premium Lakeside Dinner",
      "Breakfast & Fresh Juice",
    ],
    amenities: [
      "Plush Double Mattress",
      "Elegant Boho Caravan Style Decor",
      "Fairy Lights & Lanterns",
      "Private Garden Sitting Setup",
      "Complimentary Water & Snacks",
    ],
    activities: [
      "Romantic Bonfire",
      "Stargazing Session",
      "Live Band Music (Saturday Night)",
      "Guitar Serenade",
      "Archery & Boating Discount",
    ],
    tentType: "Boho Glamping Bell Tent",
    occupancy: "Strictly 2 Adults Only",
    checkIn: "3:30 PM",
    checkOut: "11:00 AM",
    description:
      "Designed for couples wanting absolute comfort and serene romance. A private spacious bell tent adorned with fairy lights, dual mattresses, beautiful local flowers, and front-row seats to the tranquil Pawna sunset.",
    // image: "/src/assets/images/premium_glamping_tent_1781554215882.jpg"
    image: premiumGlampingTent,
  },
  {
    id: "pw-group-bonanza",
    name: "Adventure Group Bonanza",
    pricePerPerson: 1199,
    originalPricePerPerson: 1799,
    duration: "1 Night / 2 Days",
    rating: 4.7,
    reviewsCount: 390,
    destination: "pawna",
    tags: ["Best Price for Groups", "Active Fun"],
    meals: [
      "Lakeside Hi-Tea",
      "Veg/Chicken BBQ Starters",
      "Jumbo Unlimited Multi-cuisine Buffet",
      "Puri Bhaji Breakfast",
    ],
    amenities: [
      "Waterproof Standard Dome Tents",
      "Pillows & Sleeping Bags",
      "Mobile Charging Rails",
      "Locker Room access",
      "24/7 Security Patrol",
    ],
    activities: [
      "Common Bonfire",
      "Live DJ Party Night",
      "Kayaking (15-min trial)",
      "Volleyball Tourney",
      "Tug of War",
      "Foosball",
    ],
    tentType: "4-Person Sturdy Dome Tents",
    occupancy: "Min 4 to 8 Adults per group",
    checkIn: "4:00 PM",
    checkOut: "11:00 AM",
    description:
      "Specially discounted pricing package perfect for corporate outings, college groups, and large families. Included features are a lakeside DJ dance floor, competitive lawn games, and a full-size barbecue feast.",
    // image: "/src/assets/images/bonfire_barbecue_night_1781554229242.jpg"
    image: bonfireBarbecueNight,
  },
  {
    id: "pn-backwater-sports",
    name: "Valley Backwater Adventure",
    pricePerPerson: 1499,
    originalPricePerPerson: 2299,
    duration: "1 Night / 2 Days",
    rating: 4.8,
    reviewsCount: 310,
    destination: "panshet",
    tags: ["Water Sports Included", "Trending"],
    meals: [
      "Hi-Tea with Hot Bhajji",
      "Charcoal BBQ (Veg/Chicken)",
      "Unlimited Chulivarchi Dinner",
      "Maharashtrian Breakfast",
    ],
    amenities: [
      "Premium Coated Dome Tents",
      "Cotton Sheets & Thick Quilts",
      "Modern Western Restrooms",
      "Water Purifier Water Station",
      "First Aid Kit",
    ],
    activities: [
      "Guided Kayaking Session",
      "Speed Boat Round Trip",
      "Safe Backwater Swimming with Lifejacket",
      "Archery",
      "Night Jungle Trail Trekking",
    ],
    tentType: "Luxe Backwater Dome Tent",
    occupancy: "2, 3, or 4 Adults Sharing",
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    description:
      "Get wet and wild! This package fully includes high-quality kayaking, exhilarating high-speed boating, and swimming under strict supervision of certified lifeguards on Panshet backwaters.",
    image:
      "https://images.unsplash.com/photo-1723049256176-1aa6e8cbf364?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "pn-rustic-nature",
    name: "Panshet Rustic Wilderness Eco-Retreat",
    pricePerPerson: 1299,
    originalPricePerPerson: 1899,
    duration: "1 Night / 2 Days",
    rating: 4.6,
    reviewsCount: 220,
    destination: "panshet",
    tags: ["Organic Food", "Eco Friendly"],
    meals: [
      "Herbal High-Tea",
      "Farm-fresh Grill BBQ",
      "Traditional Organic Firewood Buffet",
      "Ragi Malt & Kanda Pohe Breakfast",
    ],
    amenities: [
      "Clean Weatherproof Tents",
      "Cotton sleeping mats & blankets",
      "Eco dry-composting & Western toilets",
      "Solar-powered charging lamps",
      "Insect repellents provided",
    ],
    activities: [
      "Bird Watching Trail",
      "Organic Farm Harvest Walk",
      "Traditional Chulivarchi Cooking Class",
      "Silent Bonfire & Flute Music",
      "Badminton",
    ],
    tentType: "Sturdy Triangular Wilderness Tent",
    occupancy: "2 to 4 Adults Sharing",
    checkIn: "4:00 PM",
    checkOut: "12:00 PM",
    description:
      "Unplug from screen strain and heal in nature. Situated within an organic mango grove, enjoy guided early morning bird spotting, organic farming demonstrations, and slow woodfired Maharashtrian dishes.",
    image:
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pn-luxury-safari",
    name: "Panshet Canopy Safari Cabin",
    pricePerPerson: 2299,
    originalPricePerPerson: 3499,
    duration: "1 Night / 2 Days",
    rating: 4.9,
    reviewsCount: 150,
    destination: "panshet",
    tags: ["Peak Luxury", "Forest Cabin Vibe"],
    meals: [
      "Fresh Fruit Welcome Cooler",
      "Premium Hi-Tea",
      "Assorted Sizzling Bbq Skewers",
      "Unlimited Royal Multi-cuisine Dinner",
      "Buffet Breakfast & Dessert",
    ],
    amenities: [
      "Semi-Permanent Safari Canvas Cabin",
      "Raised Wooden Deck Patio",
      "En-suite Attached Washroom",
      "Plush King Size Bed",
      "Stand Fan & Tea Kettle",
    ],
    activities: [
      "Private Campfire Ring",
      "Sunset Kayak Experience",
      "Rifle Shooting",
      "Star-observation Telescope session",
      "Board Games Club",
    ],
    tentType: "Raised Safari Canvas Cabin",
    occupancy: "2 to 3 Adults Max",
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    description:
      "The pinnacle of comfortable wilderness living. Enjoy semi-permanent high-canopy safari luxury tents built on sturdy wooden decks with attached clean private western washrooms, comfortable wood furniture, and unmatched privacy.",
    image:
      "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=800&q=80",
  },
];

export const TENTS: TentType[] = [
  {
    id: "tent-classic-dome",
    name: "Classic Weather-Resistant Dome Tent",
    description:
      "The quintessential, heavy-duty double layer dome tent designed to withstand rains, cold, and winds. Compact, highly insulated, and rests on cushioned ground pads.",
    capacity: "2 to 4 Adults",
    pricing: 1299,
    originalPricing: 1999,
    features: [
      "Double-deck waterproof fabric",
      "Mosquito protective screen mesh",
      "Ventilation vents",
      "E-port for power cord",
    ],
    amenities: [
      "Foldable Ground Mattress",
      "Soft Hotel-grade Pillows",
      "Warm Woolen Blankets",
      "External Solar Lanterns",
    ],
    destinations: ["pawna", "panshet"],
    image: "/src/assets/images/premium_glamping_tent_1781554215882.jpg", // Our beautiful bespoke boho glamping tent photo!
  },
  {
    id: "tent-glamping-bell",
    name: "Bohemian Glamping Bell Tent",
    description:
      "Stand-tall, heavy cotton-canvas bohemian bell tent. Elegant, spacious interiors beautifully lit up with mood lights, high-end bedding, and classic rugs, perfect for cozy couple dates.",
    capacity: "2 Adults (Strictly)",
    pricing: 1899,
    originalPricing: 2999,
    features: [
      "Spacious 10ft high center pole dome",
      "Handcrafted bohemian decor",
      "Ambient warm yellow fairy lights",
      "Private outdoor bamboo sitting chairs",
    ],
    amenities: [
      "Queen-size high rise mattress",
      "Duvets, pillows and soft throws",
      "Dedicated electrical multi-socket strip",
      "Drinking water container & glasses",
    ],
    destinations: ["pawna"],
    image:
      "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tent-safari-cabin",
    name: "Premium Elevated Safari Cabin",
    description:
      "Semi-permanent wood-framed cabin canvas, built on elevated local wooden decks. Offers high-standing space, complete insects protection, premium furniture, and attached private bath facilities.",
    capacity: "2 to 3 Adults",
    pricing: 2299,
    originalPricing: 3499,
    features: [
      "Raised wooden viewing balcony patio",
      "Spacious wooden wardrobe with lock",
      "Full mosquito netting windows",
      "Thick soundproof insulated walls",
    ],
    amenities: [
      "King-size wooden bed with spring mattress",
      "Private Attached Western Washroom",
      "Electrical wall-fan & kettle",
      "Mirror, towels and toiletries kit",
    ],
    destinations: ["panshet"],
    image:
      "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=800&q=80",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-pawna-lakeside",
    src: "/src/assets/images/pawna_lake_hero_1781554186715.jpg",
    alt: "Sunset over pristine Pawna Lake",
    category: "pawna",
    locationLabel: "Pawna Lake",
    description: "Pristine golden hours on the lakeside",
  },
  {
    id: "g-panshet-valley",
    src: "/src/assets/images/panshet_lake_hero_1781554201017.jpg",
    alt: "Scenic backwater valleys at Panshet Dam",
    category: "panshet",
    locationLabel: "Panshet Eco-Camp",
    description: "Mist rolling over the silent valleys",
  },
  {
    id: "g-bell-tent-cozy",
    src: "/src/assets/images/premium_glamping_tent_1781554215882.jpg",
    alt: "Inside a warm glowing bell glamping tent",
    category: "tents",
    locationLabel: "Pawna Lake",
    description: "Bohemian fairy lights cozy interiors",
  },
  {
    id: "g-bonfire-party",
    src: "/src/assets/images/bonfire_barbecue_night_1781554229242.jpg",
    alt: "Friends gathering around a sparkling bonfire at night",
    category: "bonfire",
    locationLabel: "Campfire Common Ring",
    description: "Acoustic tunes, laughter, and crackling logs",
  },
  // Unsplash high quality photos to complete the masonry gallery
  {
    id: "g-un-tent",
    src: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
    alt: "Campsite setup during beautiful morning blue hour",
    category: "tents",
    locationLabel: "Panshet Camp",
    description: "Stormproof double layer domes",
  },
  {
    id: "g-un-bbq",
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    alt: "Barbecue chicken skewers sizzling over coal embers",
    category: "food",
    locationLabel: "Food Court Starters",
    description: "Sizzling smoky marinated tikkas cooked live",
  },
  {
    id: "g-un-kayak",
    src: "https://images.unsplash.com/photo-1471079688237-3ac9a5553a6b?auto=format&fit=crop&w=800&q=80",
    alt: "Kayaking on clear emerald river waters",
    category: "activities",
    locationLabel: "Panshet Dam backwaters",
    description: "Paddling during calm windless mornings",
  },
  {
    id: "g-un-dinner",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    alt: "Buffet dishes laid out on wooden table under lanterns",
    category: "food",
    locationLabel: "Lakeside Buffet Area",
    description: "Traditional hot cooked Indian mains",
  },
  {
    id: "g-un-nightsky",
    src: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=800&q=80",
    alt: "Milky way galaxy shining bright over the campsite hills",
    category: "night",
    locationLabel: "High Sky Observatory",
    description: "Zero light-pollution night stargazing",
  },
  {
    id: "g-un-singing",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    alt: "Acoustic guitar sitting next to campfire",
    category: "activities",
    locationLabel: "Pawna Lake Stage",
    description: "Sat live acoustic unplugged jams",
  },
  {
    id: "g-un-archery",
    src: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=800&q=80",
    alt: "A wood archery bow setup aimed at target board",
    category: "activities",
    locationLabel: "Recreation Lawn",
    description: "Lawn games like archery and carrom",
  },
  {
    id: "g-un-tea",
    src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    alt: "Hot steaming tea poured into glass cups next to hot fritters",
    category: "food",
    locationLabel: "Sunset Dining tent",
    description: "Hot high-tea paired with tasty Kanda Bhajji",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Rohit Deshmukh",
    location: "Pune, Maharashtra",
    rating: 5,
    date: "May 2026",
    text: "Pawna Lake camping exceeded all my expectations! The food was incredibly delicious—especially the unlimited barbecue. But the highlight was the live music on Saturday. The singer played beautiful acoustic Hindi and Marathi songs while we sat around the bonfire. Clean toilets, safe for family, cooperative staff. Very reliable booking system!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    destination: "Pawna Lake Camping",
  },
  {
    id: "t-2",
    name: "Sneha Sen",
    location: "Mumbai, Maharashtra",
    rating: 5,
    date: "June 2026",
    text: "We booked the couple's bell tent package for our anniversary at Pawna Lake. The tents were absolutely gorgeous, beautifully decorated with cozy fairy lights and dynamic lanterns, making it look incredibly magical. Absolute privacy, clean private-feeling washrooms nearby, and breathtaking mountain-fort sunset views. A highly recommended romantic getaway!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    destination: "Pawna Lake Camping",
  },
  {
    id: "t-3",
    name: "Vikram & Family",
    location: "Thane",
    rating: 5,
    date: "April 2026",
    text: "If you love peaceful nature trails and exciting water sports, Panshet is the place. We spent hours kayaking on the calm backwaters and riding speed boats. Best part? The authentic 'Chulivarchi Jevan' village food cooked over wood stows was unbelievable, tasted just like rural Grandma's kitchen. Very safe environment for kids too.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
    destination: "Panshet Camping",
  },
  {
    id: "t-4",
    name: "Ananya Iyer",
    location: "Mumbai",
    rating: 4,
    date: "April 2026",
    text: "Awesome experience. Panshet was super green even in late April, surrounded by lush tall valleys and birds chirping in the morning. The booking customer service on WhatsApp was so fast—they prefilled everything, answered all our safety queries, and guided us patiently on route details. Highly premium setups!",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    destination: "Panshet Camping",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question:
      "Is Pawna Lake / Panshet Camping safe for couples, families, and solo female travelers?",
    answer:
      "Absolutely 100% safe. Both our campsites are fully fenced with physical boundaries, monitored by continuous security guards 24/7, and strictly families-and-couples friendly. We do not tolerate public alcohol nuisance, and women will find clean well-lit grounds with professional trained staff ready to assist.",
    category: "general",
  },
  {
    id: "faq-2",
    question: "Are toilets clean? Do you have western flushing washrooms?",
    answer:
      "Yes! High-standard hygiene is our top priority. We have separate, modern concrete washrooms for ladies and gentlemen. They feature western flushing pots, clean basins, dynamic mirrors, and continuous flowing water. Our cleaning crew sanitizes them multiple times a day.",
    category: "food-amenities",
  },
  {
    id: "faq-3",
    question:
      "How much barbecue (BBQ) starter do we get? Can we request Jain or pure veg options?",
    answer:
      "For standard packages, we provide 250 grams of marinated barbecue starters per person (Veg: Paneer, Potato, Capsicum; Non-Veg: Spiced Chicken Drumsticks/Chunks). If you book our premium couple or group packages, BBQ contains multiple servings. We boast full dedicated kitchen sections for pure Veg and specialized Jain food prepared without onion/garlic.",
    category: "food-amenities",
  },
  {
    id: "faq-4",
    question:
      "What is your booking registration process? Do we pay full or partial deposit?",
    answer:
      "Our conversion-focused booking checkout process is incredibly seamless! You select a package, estimate the custom quote via our interactive calculator, and submit an inquiry. We then instantly WhatsApp or call you with a pre-filled booking order under 15 minutes. To lock the booking, you only make a partial 30% advance via secured UPI (GPay/PhonePe), with the remaining 70% paid directly on-field when check-in.",
    category: "booking",
  },
  {
    id: "faq-5",
    question: "How is cellular network connectivity at the campsites?",
    answer:
      "Pawna Lake Camping has strong 4G connectivity for Jio, Airtel, and Vi networks, making it easy to work or share live stories. Panshet Camping, situated deeper in a mountain-locked valley backwater, has excellent Airtel network but slightly spotty Jio connection. It is the perfect scenic zone for a digital detox weekend!",
    category: "location",
  },
  {
    id: "faq-6",
    question: "Are pets allowed at the campsite?",
    answer:
      "Pawna Lake is highly pet-friendly as we have spacious green turf meadows where your furry friends can leap around happily! Just let us know during booking so we can allocate a corner campsite for better convenience. Panshet Camping has minor wildlife zones nearby, so pets must remain on-leash there.",
    category: "general",
  },
  {
    id: "faq-7",
    question:
      "Do you offer private transportation services from Lonavala or Pune railway stations?",
    answer:
      "Yes. While transport is not included in the default camp base package, we can easily reserve a private comfortable shared auto, Ertiga car, or Bolero cruiser directly from Kamshet/Lonavala Station (for Pawna) or Shivajinagar/Kothrud (for Panshet) at standard nominal local taxi tariffs.",
    category: "booking",
  },
];
