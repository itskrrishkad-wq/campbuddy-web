import React, { useState } from "react";
import { DESTINATIONS_INFO, PACKAGES, TENTS } from "../data";
import {
  CheckCircle2,
  Navigation,
  Compass,
  MapPin,
  Coffee,
  Drum,
  Flame,
  Sun,
  Sunrise,
  UtensilsCrossed,
} from "lucide-react";

const timelineEvents = [
  {
    time: "4:00 PM",
    title: "Check-in",
    description:
      "Arrive at the campsite and begin your getaway with a smooth and effortless check-in. Settle into your accommodation and soak in the natural surroundings.",
    icon: Sun,
    image: "/src/assets/images/panshet_lake_hero_1781554201017.jpg",
    color: "bg-gradient-to-r from-orange-400 to-orange-600",
  },
  {
    time: "5:00 PM",
    title: "Tea & Pakora",
    description:
      "Enjoy freshly prepared tea and crispy pakoras as you unwind into the evening. A perfect warm-up for a relaxing lakeside experience.",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1604945516204-526aa4fd6425?q=80&w=1738&auto=format&fit=crop",
    color: "bg-gradient-to-r from-amber-400 to-amber-500",
  },
  {
    time: "5:30 PM",
    title: "Outdoor Games & Activities",
    description:
      "Have fun with a variety of engaging activities like badminton, cricket, carrom, and more—perfect for families, friends, and adventure lovers.",
    icon: Drum,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800",
    color: "bg-gradient-to-r from-orange-400 to-orange-600",
  },
  {
    time: "7:30 PM",
    title: "BBQ & DJ Music",
    description:
      "Relish freshly grilled BBQ snacks while enjoying lively DJ music. The perfect mix of great food and great vibes until 9:30 PM.",
    icon: Flame,
    image: "/src/assets/images/bonfire_barbecue_night_1781554229242.jpg",
    color: "bg-gradient-to-r from-red-500 to-red-700",
  },
  {
    time: "9:30 PM",
    title: "Dinner",
    description:
      "Savor a wholesome dinner featuring local dishes prepared with authentic flavors. A comforting meal to end your adventure-filled evening.",
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    color: "bg-gradient-to-r from-orange-500 to-orange-700",
  },
  {
    time: "10:00 PM",
    title: "Campfire",
    description:
      "Relax around the warm campfire, listen to nature’s sounds, and enjoy meaningful conversations under the night sky.",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1533243367503-0b7337004671?q=80&w=1740&auto=format&fit=crop",
    color: "bg-gradient-to-r from-amber-500 to-orange-600",
  },
  {
    time: "8:30 AM",
    title: "Breakfast",
    description:
      "Start your morning with a hearty breakfast featuring fresh and local flavors—fueling you for the day’s adventures.",
    icon: Sunrise,
    image: "https://images.unsplash.com/photo-1673530598977-ee0eda88f0a2?q=80&w=800",
    color: "bg-gradient-to-r from-yellow-400 to-amber-500",
  },
  {
    time: "11:00 AM",
    title: "Check-out",
    description:
      "Wrap up your stay with an easy check-out process and leave with unforgettable lakeside memories.",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=800",
    color: "bg-gradient-to-r from-orange-400 to-orange-600",
  },
];

interface LocationDetailsProps {
  destinationId: "pawna" | "panshet";
  openBookingWithParams: (destination: "pawna" | "panshet", packageId?: string) => void;
  setCurrentPage: (page: string) => void;
}

export default function LocationDetails({
  destinationId,
  openBookingWithParams,
  setCurrentPage
}: LocationDetailsProps) {
  const info = DESTINATIONS_INFO[destinationId];
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  // Specific filtered packages
  const activePackages = PACKAGES.filter((p) => p.destination === destinationId);

  // Specific filtered tents
  const activeTents = TENTS.filter((t) => t.destinations.includes(destinationId));

  return (
    <div id="location-details-container" className="bg-white text-stone-900 min-h-screen pt-16 pb-16">
      
      {/* 1. Immersive Location Hero Banner */}
      <div id="location-details-hero" className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent z-10" />
        <img
          id="destination-hero-banner-image"
          src={info.bannerImage}
          alt={info.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Floating title badges */}
        <div className="absolute inset-x-0 bottom-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-900/40 border border-orange-500/35 backdrop-blur-md mb-4 text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Certified Premium Destination</span>
            </div>
            <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              {info.name}
            </h1>
            <p className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-200 font-mono mt-3">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span>{info.locationDetails.address}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: DESCRIPTION, HIGHLIGHTS, FOOD TIMELINE, GUIDE DIRECTIONS */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Overview */}
            <div id="overview-content-block">
              <h2 className="text-2xl font-sans font-extrabold text-stone-900 tracking-tight border-b border-stone-200 pb-3 mb-5">
                Overview & Experience
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans font-normal mb-8">
                {info.longDesc}
              </p>
              <div id="best-time-box" className="p-5 bg-stone-50 border border-stone-200 rounded-3xl">
                <span className="block text-xs font-mono font-bold uppercase text-orange-600">BEST TIME TO VISIT</span>
                <p className="text-xs text-stone-550 mt-1 font-semibold">{info.bestTimeToVisit}</p>
              </div>
            </div>

            {/* Stay Highlights checklist */}
            <div id="highlights-content-block">
              <h2 className="text-2xl font-sans font-extrabold text-stone-900 tracking-tight border-b border-stone-200 pb-3 mb-6">
                Camping Experience Highlights
              </h2>
              <div className="space-y-4">
                {info.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-stone-50 border border-stone-200 p-5 rounded-3xl shadow-sm">
                    <CheckCircle2 className="w-5.5 h-5.5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm text-stone-705 font-semibold font-sans leading-relaxed">{hl}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Food Schedule Timeline */}
            <div id="meals-timeline-block">
              <h2 className="text-2xl font-sans font-extrabold text-stone-900 tracking-tight border-b border-stone-200 pb-3 mb-6">
                Your Adventure & Culinary Timeline
              </h2>
              <p className="text-xs sm:text-sm text-stone-605 mb-10 max-w-xl leading-relaxed">
                Every single moment is carefully crafted for beautiful memories. Enjoy hot water-filtered meals, live BBQ, starlit campfire circles, and delightful adventure activities during your stay.
              </p>

              {/* DayTimeline view */}
              <div id="timeline" className="relative space-y-12">
                <div className="absolute left-[23px] sm:left-[31px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-orange-400 via-amber-400 to-orange-650 rounded-full z-0" />

                {timelineEvents.map((event, index) => {
                  const EventIcon = event.icon;
                  const isHovered = activeEvent === index;
                  return (
                    <div
                      key={index}
                      className="relative pl-14 sm:pl-20 group text-left cursor-default"
                      onMouseEnter={() => setActiveEvent(index)}
                      onMouseLeave={() => setActiveEvent(null)}
                    >
                      {/* Timeline Dot Indicator */}
                      <div
                        className={`absolute left-0 sm:left-2 top-0 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300 z-10 ${
                          isHovered
                            ? "scale-110 shadow-lg ring-4 ring-orange-100"
                            : ""
                        } ${event.color}`}
                      >
                        <EventIcon className="w-5.5 h-5.5" />
                      </div>

                      {/* Content Card */}
                      <div
                        className={`bg-white border rounded-[32px] p-6 shadow-xs hover:shadow-xl transition-all duration-350 ${
                          isHovered
                            ? "border-orange-500/30 -translate-y-0.5 bg-stone-50/20"
                            : "border-stone-200"
                        }`}
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2.5 mb-3">
                          <h3 className="text-base sm:text-lg font-sans font-extrabold text-stone-900">
                            {event.title}
                          </h3>
                          <span className="text-xs font-mono font-bold text-orange-700 bg-orange-50 border border-orange-150 px-3 py-1 rounded-full uppercase tracking-wider">
                            {event.time}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-stone-605 leading-relaxed font-sans mb-5 font-normal">
                          {event.description}
                        </p>

                        {/* Image Showcase */}
                        <div className="relative h-44 sm:h-56 w-full overflow-hidden rounded-2xl bg-stone-100 border border-stone-150 shadow-inner">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* How to Reach section */}
            <div id="directions-block">
              <h2 className="text-2xl font-sans font-extrabold text-stone-900 tracking-tight border-b border-stone-200 pb-3 mb-5">
                Directions & Travel Guide
              </h2>
              <div className="space-y-4">
                <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 shadow-sm">
                  <h4 className="text-sm font-sans font-extrabold text-stone-900 flex items-center gap-2 mb-2">
                    <Navigation className="w-4 h-4 text-orange-600" />
                    <span>How to Reach</span>
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
                    {info.locationDetails.directions}
                  </p>
                  <p className="text-xs font-mono font-bold text-amber-600">
                    Need Private Pickups? Contact us under the booking wizard to arrange standard local taxis directly from Kamshet / Pune station.
                  </p>
                </div>

                {/* Google Maps Embed iframe */}
                <div className="rounded-[28px] border border-stone-200 overflow-hidden h-[300px] w-full shadow-sm relative bg-stone-50">
                  <iframe
                    src={info.locationDetails.mapEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title={`${info.name} Google Map Coordinates`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: DIRECT ACTION BOOKING CTA PANEL, AVAILABLE PACKAGES INDEX */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* Quick Pricing Inquiry CTA Box */}
            <div className="bg-white border-2 border-stone-200 rounded-[28px] p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 h-2 bg-orange-600 w-1/3" />
              <span className="text-[10px] uppercase tracking-wider font-mono text-orange-600 font-extrabold">Instant Quote Estimation</span>
              <h3 className="text-lg sm:text-xl font-sans font-extrabold text-stone-900 tracking-tight mt-1 mb-2">
                Draft Reserve Stay
              </h3>
              <p className="text-xs text-stone-550 font-sans leading-relaxed mb-6">
                Estimate package cost instantly and trigger custom booking inquiries directly toward WhatsApp register cells.
              </p>

              <button
                id="location-wizard-quote-btn"
                onClick={() => openBookingWithParams(destinationId)}
                className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-850 text-white font-sans font-bold text-xs sm:text-sm py-4 rounded-xl shadow-xs transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
              >
                <span>Launch Booking Inquiry</span>
              </button>
              
              <div className="flex items-center gap-2 justify-center mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
                <span className="text-[10px] text-stone-500 font-mono font-semibold">14 people booking slots today</span>
              </div>
            </div>

            {/* Micro List of Available Packages at this destination */}
            <div className="bg-stone-50 border border-stone-200 rounded-[28px] p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-sans font-extrabold text-stone-900 mb-4 border-b border-stone-200 pb-2">
                Available Holiday Tiers
              </h3>
              <div className="space-y-4">
                {activePackages.map((pkg) => (
                  <div
                    id={`package-tier-${pkg.id}`}
                    key={pkg.id}
                    onClick={() => openBookingWithParams(destinationId, pkg.id)}
                    className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-orange-500 hover:shadow transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-xs sm:text-sm font-extrabold text-stone-800 group-hover:text-orange-600 transition-colors">
                          {pkg.name}
                        </h4>
                        <span className="text-xs font-mono font-bold text-orange-600 shrink-0">₹{pkg.pricePerPerson}</span>
                      </div>
                      <p className="text-[10px] text-stone-500 line-clamp-2 leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-mono text-stone-500">
                      <span>{pkg.duration}</span>
                      <span className="bg-orange-50 text-orange-700 border border-orange-100 px-1.5 py-0.5 rounded text-[8px] font-black uppercase shadow-sm">Click to book</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cozy Tent Accommodations list */}
            <div className="bg-stone-50 border border-stone-200 rounded-[28px] p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-sans font-extrabold text-stone-900 mb-4 border-b border-stone-200 pb-2">
                Stay Outpost Options
              </h3>
              <div className="space-y-4">
                {activeTents.map((tent) => (
                  <div
                    key={tent.id}
                    className="flex items-center gap-3 bg-white border border-stone-200 p-3 rounded-2xl shadow-sm"
                  >
                    <img
                      src={tent.image}
                      alt={tent.name}
                      className="w-16 h-16 object-cover rounded-xl shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs font-sans font-bold text-stone-850">
                        {tent.name}
                      </h4>
                      <p className="text-[10px] text-stone-500 mt-1">Fits {tent.capacity}</p>
                      <span className="text-xs font-mono font-bold text-orange-600 mt-1 block">From ₹{tent.pricing}/head</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
