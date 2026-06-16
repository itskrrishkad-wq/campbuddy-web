export interface CampPackage {
  id: string;
  name: string;
  pricePerPerson: number;
  originalPricePerPerson: number;
  duration: string;
  rating: number;
  reviewsCount: number;
  destination: "pawna" | "panshet";
  tags: string[];
  meals: string[];
  amenities: string[];
  activities: string[];
  tentType: string;
  occupancy: string;
  checkIn: string;
  checkOut: string;
  description: string;
  image?: string;
}

export interface TentType {
  id: string;
  name: string;
  description: string;
  capacity: string;
  pricing: number;
  originalPricing: number;
  features: string[];
  amenities: string[];
  destinations: ("pawna" | "panshet")[];
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "pawna" | "panshet" | "tents" | "activities" | "food" | "bonfire" | "night";
  description?: string;
  locationLabel: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  destination: "Pawna Lake Camping" | "Panshet Camping" | "General";
}

export interface BookingInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  destination: "pawna" | "panshet";
  packageId: string;
  packageName: string;
  guestsCount: number;
  vegGuests: number;
  nonVegGuests: number;
  checkInDate: string;
  notes?: string;
  totalCost: number;
  status: "pending" | "confirmed";
  createdAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "booking" | "location" | "food-amenities";
}
