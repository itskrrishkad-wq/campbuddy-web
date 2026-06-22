export type Destination = "pawna" | "panshet";

export interface PackagePricingTier {
  guests: number;
  totalPrice: number;
  label: string;
}

export interface PackagePricing {
  couplePackage?: PackagePricingTier;
  threeGuests?: PackagePricingTier;
  fourGuests?: PackagePricingTier;
}

export interface SwissRoomPricingTier {
  groupWeekend: number;
  groupWeekday: number;

  coupleWeekendPerPerson: number;
  coupleWeekendTotal: number;

  coupleWeekdayPerPerson: number;
  coupleWeekdayTotal: number;
}

export interface SwissRoomPricing {
  withoutPool: SwissRoomPricingTier;
  withPool: SwissRoomPricingTier;
}

export interface CampPackage {
  id: string;
  name: string;

  destination: Destination;

  pricePerPerson: number;
  originalPricePerPerson: number;

  couplePrice?: number;
  threeGuestPrice?: number;
  fourGuestPrice?: number;
  groupPricePerPerson?: number;

  couplePriceWithPool?: number;

  badge?: string;
  subtitle?: string;

  duration: string;
  rating: number;
  reviewsCount: number;

  tags: string[];

  meals: string[];
  amenities: string[];
  activities: string[];

  highlights?: string[];
  addOns?: string[];

  tentType: string;
  occupancy: string;

  checkIn: string;
  checkOut: string;

  description: string;

  // Glass Haven, White Cottage, Cozy Cabin, Safari Tent
  pricing?: PackagePricing;

  // Swiss Luxury Rooms only
  swissRoomPricing?: SwissRoomPricing;

  images: string[];
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
  category:
    | "pawna"
    | "panshet"
    | "tents"
    | "activities"
    | "food"
    | "bonfire"
    | "night";
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
