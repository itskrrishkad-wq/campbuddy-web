import bonfireBarbecueNight from "@/src/assets/images/bonfire_barbecue_night_1781554229242.jpg";
import panshetHero from "@/src/assets/images/panshet_lake_hero_1781554201017.jpg";
import {
  AlertCircle,
  CheckCircle2,
  Coffee,
  Compass,
  Drum,
  Flame,
  MapPin,
  Navigation,
  Sparkles,
  Sun,
  Sunrise,
  UtensilsCrossed,
  XIcon
} from "lucide-react";
import { useMemo, useState } from "react";
import { DESTINATIONS_INFO, TENTS } from "../data";
import { PACKAGES } from "../refactored-packages";
import { CampPackage } from "../types";
import PackageCard from "./PackageCard";
import NearbyAttractions from "./NearByAttraction";
import HowToReachSection from "./HowToReach";
import ActivitiesSection from "./ActivitesSection";
import InlineBookingSection from "./InlineBookingSection";
import DayTimeline from "./DayTimeline";
import GallerySection from "./GallerySection";
import FAQAndReviews from "./FAQAndReviews";


const timelineEvents = [
  {
    time: "4:00 PM",
    title: "Check-in",
    description:
      "Arrive at the campsite and begin your getaway with a smooth and effortless check-in. Settle into your accommodation and soak in the natural surroundings.",
    icon: Sun,
    image: panshetHero,
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
    image: bonfireBarbecueNight,
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

}

export default function LocationDetails({
  destinationId,
}: LocationDetailsProps) {
  const info = DESTINATIONS_INFO[destinationId];
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  const [compareList, setCompareList] = useState<CampPackage[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [compareError, setCompareError] = useState<string | null>(null);

  // Specific filtered packages
  const activePackages = PACKAGES.filter((p) => p.destination === destinationId);

  // Specific filtered tents
  const activeTents = TENTS.filter((t) => t.destinations.includes(destinationId));


  const filteredAndSortedPackages = useMemo(() => {
    let result = [...PACKAGES];

    result = result.filter((pkg) => pkg.destination === destinationId)


    return result;
  }, [destinationId, PACKAGES]);


  const toggleCompare = (pkg: CampPackage) => {
    setCompareError(null);
    setCompareList((prev) => {
      const exists = prev.find((item) => item.id === pkg.id);
      if (exists) {
        return prev.filter((item) => item.id !== pkg.id);
      }
      if (prev.length >= 3) {
        setCompareError("You can choose up to 3 packages side-by-side!");
        return prev;
      }
      return [...prev, pkg];
    });
  };

  const clearComparisons = () => {
    setCompareList([]);
    setShowCompareModal(false);
    setCompareError(null);
  };

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

      <div className="w-full">
        <div className="w-full gap-12 py-16">

          {/* LEFT COLUMN: DESCRIPTION, HIGHLIGHTS, FOOD TIMELINE, GUIDE DIRECTIONS */}
          <div className=" space-y-16">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


              <h2 className="text-2xl font-sans font-extrabold text-stone-900 tracking-tight border-b border-stone-200 pb-3 mb-5">
                Stay Options
              </h2>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">

                {filteredAndSortedPackages.map((pkg) => {
                  const isCompared = compareList.some((item) => item.id === pkg.id);
                  return (
                    // <div
                    //   id={`package-card-${pkg.id}`}
                    //   key={pkg.id}
                    //   className="group relative bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border-orange-500/30 transition-all duration-300 flex flex-col justify-between"
                    // >
                    //   {/* Image on top */}
                    //   {pkg.images?.length && pkg.images.length > 0 && (
                    //     <div className="relative h-64 w-full overflow-hidden bg-stone-100">
                    //       {/* <img
                    //     id={`package-image-${pkg.id}`}
                    //     src={pkg.images[0]}
                    //     alt={pkg.name}
                    //     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    //     referrerPolicy="no-referrer"
                    //   /> */}
                    //       <Carousel
                    //         className="w-full h-64"
                    //         opts={{ align: "start", loop: true }}
                    //       >
                    //         <CarouselContent className="h-full">
                    //           {pkg.images.map((image, imageIndex) => (
                    //             <CarouselItem key={imageIndex} className="h-full">
                    //               <div className="relative w-full h-full">
                    //                 {/* eslint-disable-next-line @next/next/no-img-element */}
                    //                 <img
                    //                   src={image}
                    //                   loading="lazy"
                    //                   alt={`${image} - Image ${imageIndex + 1
                    //                     }`}
                    //                   className={cn(
                    //                     "w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700",
                    //                     // image.imageClassName,
                    //                   )}
                    //                 />

                    //                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    //               </div>
                    //             </CarouselItem>
                    //           ))}
                    //         </CarouselContent>

                    //         {/* Carousel Navigation */}
                    //         <CarouselPrevious className="absolute left-2 inset-y-0  bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />
                    //         <CarouselNext className="absolute right-2 inset-y-0 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />

                    //         {/* Dot Indicators */}
                    //         <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1  transition-opacity duration-300">
                    //           {pkg.images.map((_, dotIndex) => (
                    //             <div
                    //               key={dotIndex}
                    //               className="w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm"
                    //             />
                    //           ))}
                    //         </div>
                    //       </Carousel>

                    //     </div>
                    //   )}

                    //   {/* Visual Label Tags */}
                    //   <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                    //     {pkg.tags.map((tag, i) => (
                    //       <span
                    //         key={i}
                    //         className="bg-orange-600/90 text-white w-max text-[10px] font-mono font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm"
                    //       >
                    //         {tag}
                    //       </span>
                    //     ))}
                    //   </div>

                    //   {/* Compare Checkbox */}
                    //   <button
                    //     id={`compare-toggle-btn-${pkg.id}`}
                    //     onClick={() => toggleCompare(pkg)}
                    //     className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur border border-stone-200 text-stone-700 hover:text-stone-900 p-2 rounded-2xl cursor-pointer flex items-center justify-center gap-1.5 shadow-sm hover:bg-stone-50 transition-colors"
                    //     title="Compare package highlights"
                    //   >
                    //     <div
                    //       className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${isCompared ? "bg-amber-500 border-amber-500 text-stone-900" : "border-stone-300"
                    //         }`}
                    //     >
                    //       {isCompared && <Check className="w-3 h-3 stroke-[3]" />}
                    //     </div>
                    //     <span className="text-[10px] font-mono font-extrabold pr-1">COMPARE</span>
                    //   </button>

                    //   {/* Body Content */}
                    //   <div className="p-6 flex-grow flex flex-col">
                    //     {/* Destination stamp */}
                    //     <span className="text-[10px] uppercase tracking-widest font-mono font-black text-orange-600">
                    //       {pkg.destination === "pawna" ? "Pawna Lake Camping" : "Panshet Eco Backwaters"}
                    //     </span>

                    //     <h3 className="text-xl font-sans font-extrabold text-stone-900 mt-1 mb-2 group-hover:text-orange-600 transition-colors">
                    //       {pkg.name}
                    //     </h3>

                    //     {/* Reviews rating */}
                    //     <div className="flex items-center gap-1.5 mb-4 text-xs text-stone-500">
                    //       <div className="flex">
                    //         {[1, 2, 3, 4, 5].map((s) => (
                    //           <Star
                    //             key={s}
                    //             className={`w-3.5 h-3.5 ${s <= pkg.rating ? "fill-amber-400 text-amber-400" : "text-stone-200"
                    //               }`}
                    //           />
                    //         ))}
                    //       </div>
                    //       <span className="text-stone-800 font-bold font-mono">{pkg.rating}</span>
                    //       <span>({pkg.reviewsCount} reviews)</span>
                    //     </div>

                    //     {/* Pricing and savings */}
                    //     <div className="bg-stone-50 rounded-2xl p-4 mb-6 border border-stone-200/60 flex items-center justify-between">
                    //       <div>
                    //         <div className="flex items-baseline gap-2">
                    //           <span className="text-2xl font-black font-mono text-orange-600">
                    //             ₹{pkg.pricePerPerson}
                    //           </span>
                    //           <span className="text-sm line-through text-stone-400 font-mono">
                    //             ₹{pkg.originalPricePerPerson}
                    //           </span>
                    //         </div>
                    //         <span className="text-[10px] text-stone-500">Inclusive of meals & guides *</span>
                    //       </div>
                    //       <div className="bg-orange-50 border border-orange-200/50 text-orange-850 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg">
                    //         Save {Math.round((1 - pkg.pricePerPerson / pkg.originalPricePerPerson) * 100)}%
                    //       </div>
                    //     </div>

                    //     {/* Highlights Bullet list */}
                    //     <div className="space-y-3 font-sans text-xs text-stone-600 mb-6 border-b border-stone-100 pb-5">
                    //       <div className="flex items-center gap-2">
                    //         <span className="text-[10px] font-bold font-mono bg-stone-100 text-orange-800 border border-stone-200 px-1.5 py-0.5 rounded uppercase">
                    //           Meals
                    //         </span>
                    //         <span className="truncate text-stone-750" title={pkg.meals.join(", ")}>
                    //           {pkg.meals[1] || pkg.meals[0]} BBQ included
                    //         </span>
                    //       </div>

                    //       <div className="flex items-center gap-2">
                    //         <span className="text-[10px] font-bold font-mono bg-stone-100 text-orange-800 border border-stone-200 px-1.5 py-0.5 rounded uppercase">
                    //           Tents
                    //         </span>
                    //         <span className="text-stone-750">{pkg.tentType} ({pkg.occupancy})</span>
                    //       </div>

                    //       <div className="flex items-center gap-2">
                    //         <span className="text-[10px] font-bold font-mono bg-stone-100 text-orange-800 border border-stone-200 px-1.5 py-0.5 rounded uppercase">
                    //           Acts
                    //         </span>
                    //         <span className="truncate text-stone-750">{pkg.activities.slice(0, 3).join(", ")}...</span>
                    //       </div>
                    //     </div>

                    //     <p className="text-xs text-stone-600 leading-relaxed font-sans mt-auto">{pkg.description}</p>
                    //   </div>

                    //   {/* Lower Action buttons */}
                    //   <div className="p-6 pt-0 mt-auto">
                    //     <button
                    //       id={`package-book-btn-${pkg.id}`}
                    //       onClick={() => openBookingWithParams(pkg.destination, pkg.id)}
                    //       className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-850 text-white font-sans font-bold text-sm py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
                    //     >
                    //       <span>Instant Booking Inquiry</span>
                    //     </button>
                    //   </div>
                    // </div>
                    <PackageCard key={pkg.id} pkg={pkg} />
                  );
                })}
              </div>
            </div>

            {/* Overview */}
            <div id="overview-content-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div id="highlights-content-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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




            <div className="w-full">
              <DayTimeline />
              <ActivitiesSection />
              <InlineBookingSection preSelectedDestination={info.id} />
              <GallerySection />
              <NearbyAttractions location={info.id} />
              <FAQAndReviews destination={info.id} />
              {info.id === "pawna" && <HowToReachSection />}
            </div>


            {/* How to Reach section */}
            <div id="directions-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="space-y-4">


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

        </div>
      </div>


      {/* 3. Floating Comparison Bar */}
      {compareList.length > 0 && (
        <div id="floating-compare-bar" className="fixed bottom-32 sm:bottom-32 left-1/2 -translate-x-1/2 z-40 w-full max-w-2xl px-4">
          <div className="bg-amber-50 border-2 border-amber-400/80 backdrop-blur-md p-4 rounded-3xl shadow-xl flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Left Section */}
              <div className="flex items-start sm:items-center gap-3">
                <div className="bg-amber-400 text-stone-900 p-2 rounded-2xl shrink-0 hidden sm:block">
                  <Sparkles className="w-5 h-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-extrabold text-stone-900 font-sans uppercase tracking-wider leading-tight">
                    Package Comparison Tool
                  </p>
                  <p className="text-[10px] sm:text-xs text-amber-800 font-mono font-medium">
                    {compareList.length} of 3 items selected to compare side-by-side
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  id="trigger-compare-modal-btn"
                  onClick={() => setShowCompareModal(true)}
                  className="flex-1 sm:flex-none bg-stone-900 hover:bg-stone-800 text-white font-sans font-bold text-xs px-4 py-2.5 rounded-xl"
                >
                  Compare Now
                </button>

                <button
                  id="clear-comparisons-btn"
                  onClick={clearComparisons}
                  className="shrink-0 text-stone-500 hover:text-stone-900 p-2 transition-colors"
                  title="Clear compared items"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Compare warning banner built dynamically in bar */}
            {compareError && (
              <div id="compare-error-banner" className="flex items-center gap-1.5 text-[11px] text-amber-700 font-sans font-bold bg-amber-100/60 px-3 py-1.5 rounded-xl border border-amber-200/40 animate-pulse">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>{compareError}</span>
              </div>
            )}
          </div>
        </div>
      )}


      {/* 4. Comparison Modal Layout */}
      {showCompareModal && (
        <div id="compare-modal" className="fixed inset-0 bg-stone-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-y-auto flex flex-col">

            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-stone-100">
              <div className="flex items-start justify-between gap-3">

                <div className="min-w-0 flex-1">
                  <h3 className="flex items-start gap-2 text-lg sm:text-xl font-sans font-extrabold text-stone-900 leading-tight">
                    <Sparkles className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                    <span className="break-words">
                      Compare Camp Packages Side-by-Side
                    </span>
                  </h3>

                  <p className="mt-2 text-[11px] sm:text-xs text-stone-500 leading-relaxed">
                    Review features, amenities, activities, and pricing to choose
                    the best camping experience.
                  </p>
                </div>

                <button
                  id="close-compare-x-btn"
                  onClick={() => setShowCompareModal(false)}
                  className="shrink-0 rounded-xl p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
                  aria-label="Close comparison modal"
                >
                  <XIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

              </div>
            </div>

            {/* Grid content columns */}
            <div className="p-6 overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="py-3 px-4 text-stone-500 font-mono uppercase bg-stone-50 rounded-tl-xl w-1/4">Specification</th>
                    {compareList.map((pkg) => (
                      <th key={pkg.id} className="py-3 px-4 font-extrabold text-stone-900 text-sm bg-stone-50/50">
                        {pkg.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-stone-600 font-mono">Camp Destination</td>
                    {compareList.map((pkg) => (
                      <td key={pkg.id} className="py-3.5 px-4 font-bold text-orange-600 uppercase">
                        {pkg.destination === "pawna" ? "Pawna Lake" : "Panshet Eco-Camp"}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-stone-600 font-mono">Direct Ticket Price</td>
                    {compareList.map((pkg) => (
                      <td key={pkg.id} className="py-3.5 px-4 font-bold text-stone-900 text-base">
                        ₹{pkg.pricePerPerson} <span className="text-[10px] text-stone-500 font-normal">/ person</span>
                        <p className="text-[9px] line-through text-stone-400 -mt-0.5 font-mono font-medium">₹{pkg.originalPricePerPerson}</p>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-stone-600 font-mono">Duration</td>
                    {compareList.map((pkg) => (
                      <td key={pkg.id} className="py-3.5 px-4 text-stone-600">
                        {pkg.duration}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-stone-600 font-mono">Tent Style Provided</td>
                    {compareList.map((pkg) => (
                      <td key={pkg.id} className="py-3.5 px-4 text-stone-600">
                        <span className="font-semibold text-amber-600">{pkg.tentType}</span>
                        <p className="text-[10px] text-stone-500">{pkg.occupancy}</p>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-stone-600 font-mono">Included Meals</td>
                    {compareList.map((pkg) => (
                      <td key={pkg.id} className="py-3.5 px-4 text-stone-600 text-[11px] leading-relaxed">
                        <ul className="list-disc pl-4 space-y-1">
                          {pkg.meals.map((meal, i) => (
                            <li key={i}>{meal}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-stone-600 font-mono">Core Amenities</td>
                    {compareList.map((pkg) => (
                      <td key={pkg.id} className="py-3.5 px-4 text-stone-600 text-[11px] leading-relaxed">
                        <ul className="list-disc pl-4 space-y-1">
                          {pkg.amenities.slice(0, 4).map((amen, i) => (
                            <li key={i}>{amen}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-stone-600 font-mono">Included Activities</td>
                    {compareList.map((pkg) => (
                      <td key={pkg.id} className="py-3.5 px-4 text-stone-600 text-[11px] leading-relaxed">
                        <div className="flex flex-wrap gap-1">
                          {pkg.activities.slice(0, 4).map((act, i) => (
                            <span key={i} className="bg-stone-50 border border-stone-200 text-stone-700 text-[9px] px-1.5 py-0.5 rounded">
                              {act}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-stone-600 font-mono">Guest Timing</td>
                    {compareList.map((pkg) => (
                      <td key={pkg.id} className="py-3.5 px-4 text-stone-500 text-[10px]">
                        <p>In: {pkg.checkIn}</p>
                        <p>Out: {pkg.checkOut}</p>
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="py-5 px-4"></td>
                    {compareList.map((pkg) => (
                      <td key={pkg.id} className="py-5 px-4">
                        <button
                          id={`modal-compare-book-btn-${pkg.id}`}
                          // onClick={() => {
                          //   setShowCompareModal(false);
                          //   openBookingWithParams(pkg.destination, pkg.id);
                          // }}
                          className="bg-orange-600 hover:bg-orange-700 text-white font-sans font-extrabold text-xs px-4 py-2.5 rounded-xl cursor-pointer w-full text-center shadow-sm"
                        >
                          Inquire Stay
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-stone-100 flex justify-between items-center bg-stone-50/50">
              <button
                id="modal-clear-comparisons-link"
                onClick={clearComparisons}
                className="text-stone-500 hover:text-stone-900 text-xs font-mono font-bold transition-colors"
              >
                Clear Comparison List
              </button>
              <button
                id="close-compare-sheet-btn"
                onClick={() => setShowCompareModal(false)}
                className="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer transition-colors"
              >
                Close Compare Sheet
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
