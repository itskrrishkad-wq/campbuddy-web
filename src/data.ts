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
// import pawnaLakeHero from "@/src/assets/images/pawna_lake_hero_1781554186715.jpg";
import panshetLakeHero from "@/src/assets/images/panshet_lake_hero_1781554201017.jpg";
// import premiumGlampingTent from "@/src/assets/images/premium_glamping_tent_1781554215882.jpg";
// import bonfireBarbecueNight from "@/src/assets/images/bonfire_barbecue_night_1781554229242.jpg";

export const STATS = [
  {
    value: "18,400+",
    label: "Happy Campers Hosted",
    description: "Across Pune & Lonavala",
  },
  {
    value: "4.7 ★",
    label: "Average Rating",
    description: "From 800+ Google Reviews",
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
    name: "Pawna Lake Camping with Camp Buddy",
    location: "Lonavala, Maharashtra",
    distance: "110-120 km from Mumbai | 55-70 km from Pune",
    rating: 4.8,
    reviews: 1980,
    bannerImage: pawnaLakeHero,
    shortDesc:
      "Experience premium lakeside camping near Lonavala with breathtaking sunset views, bonfire nights, and cozy tent stays.",
    longDesc:
      "Experience the best Pawna Lake Camping with Camp Buddy, located beside the scenic Pawna Lake near Pune and Mumbai. Our lakeside campsite offers comfortable tent stays, BBQ dinner, live music, bonfire, indoor and outdoor games, and breathtaking sunset views. Whether you're planning a weekend getaway, family outing, couple camping trip, corporate event, or group camping experience, Camp Buddy provides one of the most memorable Pawna Camping and Pawna Lake Tent Stay experiences. Enjoy nature, adventure, and relaxation at one of the best camping destinations near Pune and Mumbai.",
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
        "Campbuddy pawna lake Camping Thakursai-Aajiwali Rd, Gevhande Khadak, Maharashtra 410406",
      directions:
        "From Pune: 55-70 km (1.5 to 2 hrs). Drive via Pune-Mumbai Expressway (NH48), exit Talegaon or Kamshet, and continue via Kamshet. By Train: Board local train to Lonavala or Kamshet, then hire taxi. From Mumbai: 110-120 km (2 to 3 hrs) via Expressway, exit at Lonavala and drive 10-20 km past Kamshet. Landmarks: Lonavala (20 km), Kamshet (15 km), Tikona Fort (5 km), Lohagad Fort (15 km), Visapur Fort (15 km), Tung Fort (8 km).",
      mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.38541570535!2d73.4735878!3d18.892011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2a3f7c0000001%3A0xe54e99f1fa0adbb5!2sPawna%20Lake%20Camping!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    },
  },
  panshet: {
    id: "panshet" as const,
    name: "Panshet Camping with Camp Buddy",
    location: "Velhe, Near Pune, Maharashtra",
    distance: "180 km from Mumbai | 42 km from Pune",
    rating: 4.7,
    reviews: 1220,
    bannerImage: panshetLakeHero,
    shortDesc:
      "Immerse in nature with majestic backwater valleys, exciting water sports adventure, and authentic village cooking.",
    longDesc:
      "Panshet Camping Near Pune is the perfect destination for nature lovers, adventure seekers, and weekend travelers looking to escape the city. Located beside the beautiful backwaters of Panshet Dam, our campsite offers stunning lake views, comfortable tent stays, exciting water activities like kayaking, boating, and swimming, along with campfire experiences under the stars. Surrounded by the lush greenery of the Western Ghats, guests can enjoy peaceful nature trails and authentic Maharashtrian Chulivarchi Jevan. Whether you're planning a family outing, couple getaway, group trip, or corporate outing, Camp Buddy Panshet Camping offers one of the best Panshet Dam Camping experiences near Pune.",
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
        "Campbuddy Panshet Camping Velhe-Panshet Rd, Panshet, Kadve, Maharashtra 412107",
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
    name: "Lakeside Camping Tent",
    pricePerPerson: 1099,
    originalPricePerPerson: 1500,
    duration: "1 Night / 2 Days",
    rating: 4.8,
    reviewsCount: 840,
    destination: "pawna",
    tags: ["Best Seller", "Popular", "Lake View"],
    meals: [
      "Evening Snacks",
      "Limited BBQ",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Morning Breakfast",
    ],
    amenities: [
      "Waterproof Lakeside Camping Tent",
      "Floor Mattress",
      "Blanket & Pillow",
      "Common Washroom (Indian & Western)",
      "Lake View",
      "Mountain View",
      "Sunrise & Sunset Views",
    ],
    activities: [
      "DJ Night",
      "Bonfire",
      "Movie Screening",
      "Live Music (Weekends)",
      "Indoor Games",
      "Outdoor Games",
    ],
    tentType: "Waterproof Lakeside Tent",
    occupancy: "2, 3, or 4 Adults Sharing",
    checkIn: "4:00 PM",
    checkOut: "11:00 AM",
    description:
      "Wake up to stunning lake and mountain views while enjoying a true outdoor camping experience. Stay in a comfortable waterproof tent near the lakeside, savor delicious meals, relax by the bonfire, enjoy DJ nights, movie screenings, and live music on weekends.",
    highlights: [
      "Lakeside Camping Experience",
      "Beautiful Sunrise & Sunset Views",
      "Scenic Mountain Views",
      "Unlimited Dinner (Veg/Non-Veg)",
      "DJ Night & Bonfire",
      "Movie Screening",
      "Live Music on Weekends",
      "Indoor & Outdoor Games",
    ],
    images: [
      "/images/pawna/camping-tent/camping-tent-1.webp",
      "/images/pawna/camping-tent/camping-tent-2.webp",
      "/images/pawna/camping-tent/camping-tent-3.webp",
      "/images/pawna/camping-tent/camping-tent-4.webp",
      "/images/pawna/camping-tent/camping-tent-5.webp",
      "/images/pawna/camping-tent/camping-tent-6.webp",
      "/images/pawna/camping-tent/camping-tent-7.webp",
      "/images/pawna/camping-tent/camping-tent-8.webp",
      "/images/pawna/camping-tent/camping-tent-9.webp",
      "/images/pawna/camping-tent/camping-tent-10.webp",
      "/images/pawna/camping-tent/camping-tent-11.webp",
      "/images/pawna/camping-tent/camping-tent-12.webp",
    ],
  },
  {
    id: "pw-cozy-vibes-camping",
    name: "Pawna Cozy Vibes Camping",
    pricePerPerson: 1299,
    originalPricePerPerson: 1800,
    duration: "1 Night / 2 Days",
    rating: 4.8,
    reviewsCount: 520,
    destination: "pawna",
    tags: ["Couples Favorite", "Nature View", "Peaceful Stay"],

    meals: [
      "Evening Snacks",
      "Limited BBQ",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Morning Breakfast",
    ],

    amenities: [
      "Premium Camping Tent",
      "Thick Mattress",
      "Blanket & Pillow",
      "Charging Point Nearby",
      "Common Washroom (Indian & Western)",
      "Nature View",
      "Mountain View",
      "Sunset Views",
    ],

    activities: [
      "DJ Night",
      "Bonfire",
      "Movie Screening",
      "Live Music (Weekends)",
      "Indoor Games",
      "Outdoor Games",
    ],

    tentType: "Premium Cozy Camping Tent",
    occupancy: "2, 3, or 4 Adults Sharing",

    checkIn: "4:00 PM",
    checkOut: "11:00 AM",

    description:
      "A cozy camping experience designed for couples and guests looking for peace and relaxation. Surrounded by nature and scenic mountain views, enjoy comfortable camping, delicious food, bonfire evenings, live entertainment, and beautiful sunset moments.",

    highlights: [
      "Peaceful Nature Camping",
      "Mountain & Sunset Views",
      "Premium Cozy Tent Setup",
      "Charging Point Nearby",
      "Unlimited Dinner (Veg/Non-Veg)",
      "DJ Night & Bonfire",
      "Movie Screening",
      "Live Music on Weekends",
      "Indoor & Outdoor Games",
    ],

    images: [
      "/images/pawna/white-luxury-cottage/white-luxury-cottage-1.webp",
      "/images/pawna/white-luxury-cottage/white-luxury-cottage-2.webp",
      "/images/pawna/white-luxury-cottage/white-luxury-cottage-3.webp",
      "/images/pawna/white-luxury-cottage/white-luxury-cottage-4.webp",
      "/images/pawna/white-luxury-cottage/white-luxury-cottage-5.webp",
      "/images/pawna/white-luxury-cottage/white-luxury-cottage-6.webp",
      "/images/pawna/white-luxury-cottage/white-luxury-cottage-7.webp",
      "/images/pawna/white-luxury-cottage/white-luxury-cottage-8.webp",
      "/images/pawna/white-luxury-cottage/white-luxury-cottage-9.webp",
    ],
  },
  {
    id: "pw-luxury-safari-tent",
    name: "Luxury Safari Tent",

    pricePerPerson: 1800,
    originalPricePerPerson: 2000,

    couplePrice: 3200,
    groupPricePerPerson: 1600,

    duration: "1 Night / 2 Days",

    rating: 4.9,
    reviewsCount: 280,

    destination: "pawna",

    tags: ["Premium Stay", "Couple Favorite", "Safari Tent"],

    meals: [
      "Evening Snacks",
      "Limited BBQ",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Morning Breakfast",
    ],

    amenities: [
      "Spacious Safari-Style Tent",
      "King/Queen Size Bed",
      "Air Cooler",
      "Premium Mattress & Bedding",
      "Side Tables",
      "Charging Points",
      "Aesthetic Interior Decor",
      "Fairy Lights",
      "Common Washroom",
      "Nature & Mountain Views",
    ],

    activities: ["DJ Night", "Bonfire", "Movie Screening"],

    addOns: ["Birthday Decoration", "Anniversary Decoration"],

    tentType: "Luxury Safari Tent",

    occupancy: "2 to 4 Guests",

    checkIn: "4:00 PM",
    checkOut: "11:00 AM",

    description:
      "Experience premium camping in a spacious safari-style tent designed for couples, special occasions, and guests seeking extra comfort. Enjoy a cozy king-size bed, aesthetic interiors, mountain views, delicious meals, and memorable evenings around the bonfire.",

    highlights: [
      "Premium Safari Tent Experience",
      "Nature & Mountain Views",
      "Spacious Safari-Style Tent",
      "King/Queen Bed Setup",
      "Air Cooler Included",
      "Fairy Lights & Aesthetic Decor",
      "Unlimited Dinner (Veg/Non-Veg)",
      "DJ Night & Bonfire",
      "Birthday & Anniversary Decor Available",
    ],

    images: [
      "/images/pawna/white-luxury-pods/white-luxury-pods-1.webp",
      "/images/pawna/white-luxury-pods/white-luxury-pods-2.webp",
      "/images/pawna/white-luxury-pods/white-luxury-pods-3.webp",
      "/images/pawna/white-luxury-pods/white-luxury-pods-4.webp",
      "/images/pawna/white-luxury-pods/white-luxury-pods-5.webp",
      "/images/pawna/white-luxury-pods/white-luxury-pods-6.webp",
      "/images/pawna/white-luxury-pods/white-luxury-pods-7.webp",
      "/images/pawna/white-luxury-pods/white-luxury-pods-8.webp",
      "/images/pawna/white-luxury-pods/white-luxury-pods-9.webp",
      "/images/pawna/white-luxury-pods/white-luxury-pods-10.webp",
    ],
  },
  {
    id: "pw-the-glass-haven",
    name: "The Glass Haven",

    pricePerPerson: 6499,
    originalPricePerPerson: 7999,

    couplePrice: 6499,
    threeGuestPrice: 7500,
    fourGuestPrice: 8800,

    duration: "1 Night / 2 Days",

    rating: 5.0,
    reviewsCount: 120,

    destination: "pawna",

    tags: [
      "Luxury Stay",
      "Private Dome",
      "Couple Favorite",
      "Premium Experience",
    ],

    badge: "✨ Private AC Glass Dome",
    subtitle: "🌄 Mountain & Sunset Views",

    meals: [
      "Evening Snacks",
      "Limited BBQ",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Morning Breakfast",
    ],

    amenities: [
      "Private Glass Dome Cabin",
      "Panoramic Mountain Views",
      "Valley Views",
      "Fully Air Conditioned",
      "Queen Size Bed",
      "Fresh Linen",
      "Private Attached Washroom",
      "Charging Points",
      "Modern Glass Architecture",
      "Aesthetic Decor",
      "Ambient Lighting",
      "Large Glass Panels",
    ],

    activities: [
      "DJ Night",
      "Bonfire",
      "Movie Screening",
      "Live Music (Weekends)",
      "Indoor Games",
      "Outdoor Games",
    ],

    tentType: "Private AC Glass Dome",

    occupancy: "2 to 4 Guests",

    checkIn: "4:00 PM",
    checkOut: "11:00 AM",

    description:
      "Experience luxury camping in a private glass dome surrounded by breathtaking mountain and valley views. Designed for couples, honeymooners, and guests seeking an exclusive nature retreat, The Glass Haven combines modern comfort, stunning architecture, and unforgettable sunsets.",

    highlights: [
      "Private AC Glass Dome",
      "Attached Private Washroom",
      "Panoramic Mountain Views",
      "Beautiful Valley Views",
      "Queen Size Bed",
      "Premium Couple Experience",
      "Modern Glass Architecture",
      "Breathtaking Sunset Views",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Live Music on Weekends",
    ],

    pricing: {
      couplePackage: {
        guests: 2,
        totalPrice: 6499,
        label: "❤️ Couple Package",
      },
      threeGuests: {
        guests: 3,
        totalPrice: 7500,
        label: "👨‍👩‍👦 3 Guests",
      },
      fourGuests: {
        guests: 4,
        totalPrice: 8800,
        label: "👨‍👩‍👧‍👦 4 Guests",
      },
    },

    images: [
      "/images/pawna/the-glass-haven/the-glass-haven-1.webp",
      "/images/pawna/the-glass-haven/the-glass-haven-2.webp",
      "/images/pawna/the-glass-haven/the-glass-haven-3.webp",
      "/images/pawna/the-glass-haven/the-glass-haven-4.webp",
      "/images/pawna/the-glass-haven/the-glass-haven-5.webp",
      "/images/pawna/the-glass-haven/the-glass-haven-6.webp",
      "/images/pawna/the-glass-haven/the-glass-haven-7.webp",
      "/images/pawna/the-glass-haven/the-glass-haven-8.webp",
    ],
  },
  {
    id: "pw-white-cottage",

    name: "The White Cottage",

    pricePerPerson: 2000,
    originalPricePerPerson: 2500,

    couplePrice: 4000,

    duration: "1 Night / 2 Days",

    rating: 4.8,
    reviewsCount: 210,

    destination: "pawna",

    tags: ["Private Stay", "Couple Favorite", "Budget Friendly", "Nature View"],

    badge: "🏡 Cozy Wooden White Cottage",
    subtitle: "🌄 Mountain & Sunset Views",

    meals: [
      "Evening Snacks",
      "Limited BBQ",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Morning Breakfast",
    ],

    amenities: [
      "Private Wooden White Cottage",
      "Comfortable Floor Mattress",
      "Blanket & Pillow",
      "Fan",
      "Charging Points",
      "Common Washroom (Indian & Western)",
      "Mountain Views",
      "Nature Surroundings",
      "Sunset Views",
    ],

    activities: [
      "DJ Night",
      "Bonfire",
      "Movie Screening",
      "Live Music (Weekends)",
      "Indoor Games",
      "Outdoor Games",
    ],

    tentType: "Private Wooden Cottage",

    occupancy: "2 Guests",

    checkIn: "4:00 PM",
    checkOut: "11:00 AM",

    description:
      "A cozy and budget-friendly private cottage perfect for couples seeking a peaceful getaway. Enjoy beautiful mountain views, comfortable accommodation, delicious meals, and relaxing evenings surrounded by nature.",

    highlights: [
      "Private Wooden Cottage",
      "Mountain & Sunset Views",
      "Budget-Friendly Couple Stay",
      "Peaceful Nature Surroundings",
      "Charging Points Available",
      "Unlimited Dinner (Veg/Non-Veg)",
      "DJ Night & Bonfire",
      "Movie Screening",
      "Live Music on Weekends",
    ],

    pricing: {
      couplePackage: {
        guests: 2,
        totalPrice: 4000,
        label: "❤️ Couple Package",
      },
    },

    images: [
      "/images/pawna/white-cottage/white-cottage-1.webp",
      "/images/pawna/white-cottage/white-cottage-2.webp",
      "/images/pawna/white-cottage/white-cottage-3.webp",
      "/images/pawna/white-cottage/white-cottage-4.webp",
      "/images/pawna/white-cottage/white-cottage-5.webp",
      "/images/pawna/white-cottage/white-cottage-6.webp",
    ],
  },
  {
    id: "pw-cozy-cabin",

    name: "The Cozy Cabin",

    pricePerPerson: 3200,
    originalPricePerPerson: 3800,

    couplePrice: 6400,
    threeGuestPrice: 8400,

    duration: "1 Night / 2 Days",

    rating: 4.9,
    reviewsCount: 185,

    destination: "pawna",

    tags: [
      "Premium Stay",
      "Family Friendly",
      "Couple Favorite",
      "Private Cabin",
    ],

    badge: "🏡 Premium AC Cabin",
    subtitle: "🌄 Mountain & Sunset Views",

    meals: [
      "Evening Snacks",
      "Limited BBQ",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Morning Breakfast",
    ],

    amenities: [
      "Premium Wooden-Glass Cabin",
      "King Size Bed",
      "Fully Air Conditioned",
      "Fresh Linen",
      "Private Attached Washroom",
      "Charging Points",
      "Cozy Wooden Interiors",
      "Aesthetic Lighting",
      "Large Glass Windows",
      "Mountain Views",
      "Nature Surroundings",
      "Sunset Views",
    ],

    activities: [
      "DJ Night",
      "Bonfire",
      "Movie Screening",
      "Live Music (Weekends)",
      "Indoor Games",
      "Outdoor Games",
    ],

    tentType: "Premium AC Wooden-Glass Cabin",

    occupancy: "2 to 3 Guests",

    checkIn: "4:00 PM",
    checkOut: "11:00 AM",

    description:
      "A premium wooden-glass cabin designed for couples, honeymooners, and small families seeking a peaceful nature retreat. Enjoy modern comforts, stunning mountain views, private facilities, and a cozy atmosphere surrounded by nature.",

    highlights: [
      "Premium AC Cabin",
      "Private Attached Washroom",
      "King Size Bed",
      "Mountain & Sunset Views",
      "Large Glass Windows",
      "Cozy Wooden Interiors",
      "Perfect for Couples & Families",
      "Unlimited Dinner (Veg/Non-Veg)",
      "DJ Night & Bonfire",
      "Live Music on Weekends",
    ],

    pricing: {
      couplePackage: {
        guests: 2,
        totalPrice: 6400,
        label: "❤️ Couple Package",
      },
      threeGuests: {
        guests: 3,
        totalPrice: 8400,
        label: "👨‍👩‍👦 Family Package",
      },
    },

    images: [
      "/images/pawna/cozy-cabin/cozy-cabin-1.webp",
      "/images/pawna/cozy-cabin/cozy-cabin-2.webp",
      "/images/pawna/cozy-cabin/cozy-cabin-3.webp",
      "/images/pawna/cozy-cabin/cozy-cabin-4.webp",
      "/images/pawna/cozy-cabin/cozy-cabin-5.webp",
      "/images/pawna/cozy-cabin/cozy-cabin-6.webp",
      "/images/pawna/cozy-cabin/cozy-cabin-7.webp",
      "/images/pawna/cozy-cabin/cozy-cabin-8.webp",
    ],
  },

  {
    id: "pn-dam-camping",

    name: "Panshet Dam Camping",

    pricePerPerson: 1099,
    originalPricePerPerson: 1399,

    duration: "1 Night / 2 Days",

    rating: 4.8,
    reviewsCount: 310,

    destination: "panshet",

    tags: ["Best Seller", "Dam View", "Nature Stay", "Budget Friendly"],

    badge: "✨ Special Offer Price",
    subtitle: "🏕️ Lakeside Camping Experience",

    meals: [
      "Evening Snacks",
      "Limited BBQ",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Morning Breakfast",
    ],

    amenities: [
      "Waterproof Camping Tent",
      "Floor Mattress",
      "Blanket & Pillow",
      "Common Washroom (Indian & Western)",
      "Dam View",
      "Mountain View",
      "Sunrise & Sunset Views",
    ],

    activities: [
      "DJ Night",
      "Bonfire",
      "Live Music (Weekends)",
      "Indoor Games",
      "Outdoor Games",
    ],

    tentType: "Waterproof Dam View Tent",

    occupancy: "2, 3, or 4 Adults Sharing",

    checkIn: "4:00 PM",
    checkOut: "11:00 AM",

    description:
      "Wake up to beautiful views of Panshet Dam surrounded by hills and nature. Enjoy comfortable camping, delicious meals, bonfire evenings, live music, and a relaxing outdoor experience perfect for friends, families, and groups.",

    highlights: [
      "Lakeside Camping Experience",
      "Dam View & Nature Surroundings",
      "Mountain & Sunrise Views",
      "Bonfire & Music Night",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Breakfast Included",
      "Indoor & Outdoor Games",
      "Budget-Friendly Camping",
    ],

    images: [
      "/images/panshet/camping-tent/camping-tent-1.webp",
      "/images/panshet/camping-tent/camping-tent-2.webp",
      "/images/panshet/camping-tent/camping-tent-3.webp",
      "/images/panshet/camping-tent/camping-tent-4.webp",
      "/images/panshet/camping-tent/camping-tent-5.webp",
      "/images/panshet/camping-tent/camping-tent-6.webp",
      "/images/panshet/camping-tent/camping-tent-7.webp",
      "/images/panshet/camping-tent/camping-tent-8.webp",
      "/images/panshet/camping-tent/camping-tent-9.webp",
      "/images/panshet/camping-tent/camping-tent-10.webp",
      "/images/panshet/camping-tent/camping-tent-11.webp",
    ],
  },
  {
    id: "pn-swiss-luxury-rooms",

    name: "Swiss Luxury Rooms",

    pricePerPerson: 1500,
    originalPricePerPerson: 1700,

    duration: "1 Night / 2 Days",

    rating: 4.8,
    reviewsCount: 240,

    destination: "panshet",

    tags: [
      "Luxury Stay",
      "Family Friendly",
      "Couple Favorite",
      "Mountain View",
    ],

    badge: "🏕️ Swiss Luxury Rooms",
    subtitle: "🌿 Luxury Stay Amidst Nature",

    meals: [
      "Evening Snacks",
      "Limited BBQ",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Morning Breakfast",
    ],

    amenities: [
      "Premium Swiss Safari Tent",
      "Comfortable Bed",
      "Fresh Linen",
      "Charging Points",
      "Common Washroom",
      "Mountain Views",
      "Valley Views",
      "Nature Surroundings",
    ],

    activities: [
      "DJ Night",
      "Bonfire",
      "Live Music (Weekends)",
      "Indoor Games",
      "Outdoor Games",
    ],

    tentType: "Premium Swiss Safari Room",

    occupancy: "2 to 6 Guests",

    checkIn: "4:00 PM",
    checkOut: "11:00 AM",

    description:
      "Experience luxury, comfort, and nature together at Panshet Dam. These spacious Swiss-style rooms offer beautiful mountain views, peaceful surroundings, delicious meals, and premium accommodation perfect for couples, families, and groups.",

    highlights: [
      "Luxury Stay Amidst Nature",
      "Mountain & Valley Views",
      "Premium Swiss Safari Room",
      "Perfect for Couples & Families",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Bonfire & Live Music",
      "Meals Included",
      "Perfect Weekend Getaway",
    ],

    swissRoomPricing: {
      withoutPool: {
        groupWeekend: 1700,
        groupWeekday: 1500,

        coupleWeekendPerPerson: 2500,
        coupleWeekendTotal: 5000,

        coupleWeekdayPerPerson: 2000,
        coupleWeekdayTotal: 4000,
      },

      withPool: {
        groupWeekend: 1900,
        groupWeekday: 1700,

        coupleWeekendPerPerson: 2700,
        coupleWeekendTotal: 5400,

        coupleWeekdayPerPerson: 2200,
        coupleWeekdayTotal: 4400,
      },
    },

    images: [
      "/images/panshet/swiss-tent/swiss-tent-1.webp",
      "/images/panshet/swiss-tent/swiss-tent-2.webp",
      "/images/panshet/swiss-tent/swiss-tent-3.webp",
      "/images/panshet/swiss-tent/swiss-tent-4.webp",
      "/images/panshet/swiss-tent/swiss-tent-5.webp",
    ],
  },
  {
    id: "pn-wooden-bamboo-pods",

    name: "Wooden Bamboo Pods",

    pricePerPerson: 1700,
    originalPricePerPerson: 1900,

    duration: "1 Night / 2 Days",

    rating: 4.8,
    reviewsCount: 150,

    destination: "panshet",

    tags: ["Couple Favorite", "Romantic Stay", "Private Pod", "Nature Retreat"],

    badge: "🏡 Wooden Bamboo Pods",
    subtitle: "🌄 Romantic Nature Stay",

    meals: [
      "Evening Snacks",
      "Limited BBQ",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Morning Breakfast",
    ],

    amenities: [
      "Premium Wooden Pod",
      "Queen Size Mattress",
      "Comfortable Interiors",
      "Fan",
      "Charging Points",
      "Common Washroom",
      "Mountain Views",
      "Valley Views",
      "Nature Surroundings",
    ],

    activities: [
      "DJ Night",
      "Bonfire",
      "Live Music (Weekends)",
      "Indoor Games",
      "Outdoor Games",
    ],

    tentType: "Premium Wooden Bamboo Pod",

    occupancy: "2 Guests",

    checkIn: "4:00 PM",
    checkOut: "11:00 AM",

    description:
      "Experience comfort, privacy, and nature together at Panshet Dam. These premium wooden bamboo pods are designed especially for couples seeking a peaceful getaway with scenic mountain views, delicious meals, and cozy accommodations.",

    highlights: [
      "Private Wooden Pod Stay",
      "Perfect for Couples",
      "Mountain & Valley Views",
      "Peaceful Nature Surroundings",
      "Unlimited Dinner (Veg/Non-Veg)",
      "Bonfire & Live Music",
      "Birthday & Anniversary Friendly",
      "Romantic Weekend Getaway",
    ],

    // pricing: [
    //   {
    //     guests: 2,
    //     totalPrice: 3400,
    //     label: "❤️ Couple Package",
    //   },
    //   {
    //     guests: 2,
    //     totalPrice: 3800,
    //     label: "🏊 Couple Package With Pool Access",
    //   },
    // ],
    couplePrice: 3400,
    couplePriceWithPool: 3800,

    images: [
      "/images/panshet/wooden-cottages/wooden-cottages-1.webp",
      "/images/panshet/wooden-cottages/wooden-cottages-2.webp",
      "/images/panshet/wooden-cottages/wooden-cottages-3.webp",
      "/images/panshet/wooden-cottages/wooden-cottages-4.webp",
      "/images/panshet/wooden-cottages/wooden-cottages-5.webp",
      "/images/panshet/wooden-cottages/wooden-cottages-6.webp",
      "/images/panshet/wooden-cottages/wooden-cottages-7.webp",
    ],
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
    image: premiumGlampingTent, // Our beautiful bespoke boho glamping tent photo!
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
    id: "g-un-kayak",
    src: "/images/pawna/happy-clients/happy-clients-1.webp",
    alt: "Kayaking on clear emerald river waters",
    category: "activities",
    locationLabel: "Panshet Dam backwaters",
    description: "Paddling during calm windless mornings",
  },
  {
    id: "g-un-dinner",
    src: "/images/pawna/happy-clients/happy-clients-2.webp",
    alt: "Buffet dishes laid out on wooden table under lanterns",
    category: "food",
    locationLabel: "Lakeside Buffet Area",
    description: "Traditional hot cooked Indian mains",
  },
  {
    id: "g-un-nightsky",
    src: "/images/pawna/happy-clients/happy-clients-3.webp",
    alt: "Milky way galaxy shining bright over the campsite hills",
    category: "night",
    locationLabel: "High Sky Observatory",
    description: "Zero light-pollution night stargazing",
  },
  {
    id: "g-un-singing",
    src: "/images/pawna/happy-clients/happy-clients-4.webp",
    alt: "Acoustic guitar sitting next to campfire",
    category: "activities",
    locationLabel: "Pawna Lake Stage",
    description: "Sat live acoustic unplugged jams",
  },
  {
    id: "g-panshet-happy-1",
    src: "/images/panshet/happy-clients/happy-clients-1.webp",
    alt: "Happy campers enjoying lakeside moments at Panshet",
    category: "panshet",
    locationLabel: "Panshet Camping",
    description: "Creating unforgettable memories by the lake",
  },
  {
    id: "g-panshet-happy-2",
    src: "/images/panshet/happy-clients/happy-clients-2.webp",
    alt: "Friends enjoying a camping getaway at Panshet",
    category: "panshet",
    locationLabel: "Panshet Camping",
    description: "Fun-filled moments with friends and family",
  },
  {
    id: "g-panshet-happy-3",
    src: "/images/panshet/happy-clients/happy-clients-3.webp",
    alt: "Guests relaxing and enjoying the camping atmosphere",
    category: "panshet",
    locationLabel: "Panshet Camping",
    description: "Relaxing amidst nature and scenic views",
  },
  {
    id: "g-panshet-happy-4",
    src: "/images/panshet/happy-clients/happy-clients-4.webp",
    alt: "Campers gathered together during evening activities",
    category: "panshet",
    locationLabel: "Panshet Camping",
    description: "Sharing stories and laughter under open skies",
  },
  {
    id: "g-panshet-happy-5",
    src: "/images/panshet/happy-clients/happy-clients-5.webp",
    alt: "Visitors enjoying a memorable stay at Panshet Camp",
    category: "panshet",
    locationLabel: "Panshet Camping",
    description: "Perfect weekend getaway near Pune",
  },
  {
    id: "g-panshet-happy-6",
    src: "/images/panshet/happy-clients/happy-clients-6.webp",
    alt: "Guests enjoying delicious food and camping activities",
    category: "panshet",
    locationLabel: "Panshet Camping",
    description: "Good food, great company, unforgettable experiences",
  },
  {
    id: "g-panshet-happy-7",
    src: "/images/panshet/happy-clients/happy-clients-7.webp",
    alt: "Happy campers posing for photos at Panshet",
    category: "panshet",
    locationLabel: "Panshet Camping",
    description: "Capturing memories that last a lifetime",
  },
  {
    id: "g-panshet-happy-8",
    src: "/images/panshet/happy-clients/happy-clients-8.webp",
    alt: "Group enjoying scenic views and outdoor activities",
    category: "panshet",
    locationLabel: "Panshet Camping",
    description: "Adventure, relaxation, and nature combined",
  },
  {
    id: "g-panshet-happy-9",
    src: "/images/panshet/happy-clients/happy-clients-9.webp",
    alt: "Camp Buddy guests enjoying their camping experience",
    category: "panshet",
    locationLabel: "Panshet Camping",
    description: "Smiles, sunsets, and unforgettable moments",
  },
  {
    id: "g-gallery-1",
    src: "/images/gallery/gallery-1.webp",
    alt: "Gallery image 1",
    category: "activities",
    locationLabel: "Gallery",
    description: "Camping experience highlights",
  },
  {
    id: "g-gallery-2",
    src: "/images/gallery/gallery-2.webp",
    alt: "Gallery image 2",
    category: "activities",
    locationLabel: "Gallery",
    description: "Camping experience highlights",
  },
  {
    id: "g-gallery-3",
    src: "/images/gallery/gallery-3.webp",
    alt: "Gallery image 3",
    category: "activities",
    locationLabel: "Gallery",
    description: "Camping experience highlights",
  },
  {
    id: "g-gallery-4",
    src: "/images/gallery/gallery-4.webp",
    alt: "Gallery image 4",
    category: "activities",
    locationLabel: "Gallery",
    description: "Camping experience highlights",
  },
  {
    id: "g-gallery-5",
    src: "/images/gallery/gallery-5.webp",
    alt: "Gallery image 5",
    category: "activities",
    locationLabel: "Gallery",
    description: "Camping experience highlights",
  },
  {
    id: "g-gallery-6",
    src: "/images/gallery/gallery-6.webp",
    alt: "Gallery image 6",
    category: "activities",
    locationLabel: "Gallery",
    description: "Camping experience highlights",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Rohit Deshmukh",
    location: "Pune, Maharashtra",
    rating: 5,
    date: "May 2026",
    text: "We booked Pawna Lake camping for a weekend with friends, and it turned out to be one of the most relaxing trips we've had in a long time. The lakeside view was beautiful, the barbecue was delicious, and the live music around the bonfire created such a great atmosphere. The campsite was clean, well-managed, and the staff were genuinely helpful throughout our stay.",
    avatar:
      "https://images.unsplash.com/photo-1608978897687-26a1a0730135?q=80&w=1160&auto=format&fit=crop",
    destination: "Pawna Lake Camping",
  },
  {
    id: "t-2",
    name: "Sneha Sen",
    location: "Mumbai, Maharashtra",
    rating: 5,
    date: "June 2026",
    text: "We were looking for a peaceful Pawna Lake camping near Lonavala experience for our anniversary, and this place was perfect. The tent was beautifully arranged, the sunset over the lake was stunning, and the entire setting felt calm and private. Waking up to the view of the water and surrounding hills was easily the highlight of our trip.",
    avatar:
      "https://images.unsplash.com/photo-1708534246051-7f47b279e94b?q=80&w=774&auto=format&fit=crop",
    destination: "Pawna Lake Camping",
  },
  {
    id: "t-3",
    name: "Vikram & Family",
    location: "Thane",
    rating: 5,
    date: "April 2026",
    text: "Our family recently visited Panshet camping near Pune, and everyone had a fantastic time. The kids loved the boating activities, while the adults enjoyed the peaceful surroundings and fresh air. The local-style food was surprisingly good, and the campsite felt safe and family-friendly. We'd definitely visit again.",
    avatar:
      "https://images.unsplash.com/photo-1613299790268-7c17f6880363?q=80&w=774&auto=format&fit=crop",
    destination: "Panshet Camping",
  },
  {
    id: "t-4",
    name: "Ananya Iyer",
    location: "Mumbai",
    rating: 5,
    date: "April 2026",
    text: "A friend recommended this Panshet camping near Pune location, and I'm glad we went. The greenery around the lake was beautiful, especially in the morning, and the tents were much more comfortable than we expected. The booking process was smooth, and the team was quick to answer all our questions before the trip.",
    avatar:
      "https://images.unsplash.com/photo-1666243184792-11c8f820a551?q=80&w=774&auto=format&fit=crop",
    destination: "Panshet Camping",
  },
];

export const FAQS_PAWNA: FAQItem[] = [
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
  {
    id: "faq-9",
    question: "What should I carry for the camping trip?",
    answer:
      "We recommend carrying winter wear such as a sweater or light jacket, a portable charger or power bank, personal medicines, toiletries, and Odomos or any mosquito repellent for added comfort during your stay.",
    category: "general",
  },
  {
    id: "faq-10",
    question: "What are the campsite guidelines and important advisories?",
    answer:
      "In case of rain, tents are shifted under a covered shed area. All tents are allotted on a first-come, first-served basis. The campsite welcomes families, couples, friends, and bachelor groups. Washrooms and bonfire areas are common for all guests. Mobile and laptop charging points are available in designated common areas. Guests are requested to follow all instructions provided by the organizers, avoid littering, and respect the natural surroundings. Activities such as Cricket, Volleyball, Carrom, and Badminton can be arranged on request through the campsite manager.",
    category: "general",
  },
  {
    id: "faq-8",
    question: "What is your cancellation and refund policy?",
    answer:
      "Prior booking is mandatory, and 50% of the total amount must be paid in advance to confirm your booking. The remaining 50% can be paid on arrival at the campsite. If a booking is canceled 7 days or more before the event date, 50% of the booking amount will be refunded. No refunds will be provided for cancellations made within 5 days of the event date. Please note that only bookings with the advance payment completed are considered confirmed.",
    category: "booking",
  },
];

export const FAQS_PANSHET: FAQItem[] = [
  {
    id: "faq-1",
    question:
      "Is Panshet Camping safe for couples, families, and solo female travelers?",
    answer:
      "Absolutely. Our Panshet campsite is fully secured, family-friendly, and monitored by on-site staff. The camping area is safe for couples, families, and solo female travelers. We maintain a peaceful atmosphere and do not tolerate nuisance behavior, ensuring a comfortable stay for all guests.",
    category: "general",
  },
  {
    id: "faq-2",
    question: "Are toilets clean? Do you have western flushing washrooms?",
    answer:
      "Yes. We provide separate washroom facilities for ladies and gentlemen with western-style flushing toilets, clean wash basins, mirrors, and continuous water supply. Washrooms are cleaned and sanitized regularly throughout the day.",
    category: "food-amenities",
  },
  {
    id: "faq-3",
    question:
      "How much barbecue (BBQ) starter do we get? Can we request Jain or pure veg options?",
    answer:
      "Our standard packages include approximately 250 grams of BBQ starters per person. Vegetarian options include paneer and assorted vegetables, while non-vegetarian options include marinated chicken starters. We also provide Jain and pure vegetarian meals prepared separately upon prior request.",
    category: "food-amenities",
  },
  {
    id: "faq-4",
    question:
      "What is your booking registration process? Do we pay full or partial deposit?",
    answer:
      "Booking is simple. Select your preferred package and contact us through the inquiry form or WhatsApp. To confirm your reservation, a partial advance payment is required, while the remaining balance can be paid during check-in at the campsite.",
    category: "booking",
  },
  {
    id: "faq-5",
    question: "How is cellular network connectivity at the campsite?",
    answer:
      "Panshet Camping generally has good Airtel network coverage. Jio and Vi networks may work in certain areas but can be intermittent due to the surrounding hills and valley terrain. Many guests enjoy the location as a peaceful getaway from constant connectivity.",
    category: "location",
  },
  {
    id: "faq-6",
    question: "Are pets allowed at the campsite?",
    answer:
      "Pets are allowed with prior approval. Since the campsite is located close to natural surroundings, we recommend keeping pets on a leash and under supervision at all times for their safety and comfort.",
    category: "general",
  },
  {
    id: "faq-7",
    question:
      "Do you offer private transportation services from Pune railway station or city areas?",
    answer:
      "Yes. Transportation is not included in the camping package, but we can help arrange private vehicles from Pune Railway Station, Shivajinagar, Kothrud, or nearby areas at standard local taxi charges.",
    category: "booking",
  },
  {
    id: "faq-8",
    question: "What is your cancellation and refund policy?",
    answer:
      "Advance booking is mandatory to confirm your reservation. If a cancellation is made at least 7 days before the camping date, a partial refund may be applicable. Cancellations made closer to the event date are generally non-refundable. Please contact us for specific cancellation terms applicable to your booking.",
    category: "booking",
  },
  {
    id: "faq-9",
    question: "What should I carry for the camping trip?",
    answer:
      "We recommend carrying a light jacket, comfortable clothing, personal medicines, toiletries, a power bank, flashlight, and mosquito repellent. During monsoon and winter seasons, additional warm clothing is advisable.",
    category: "general",
  },
  {
    id: "faq-10",
    question: "What are the campsite guidelines and important advisories?",
    answer:
      "In case of rain, tents may be shifted to covered areas for guest comfort. Tent allocation is done on a first-come, first-served basis. Common washrooms, dining areas, and bonfire spaces are shared by all guests. Charging points are available in designated common areas. Guests are requested to avoid littering, follow staff instructions, and respect the natural environment. Indoor and outdoor games may be available depending on weather and campsite conditions.",
    category: "general",
  },
];
