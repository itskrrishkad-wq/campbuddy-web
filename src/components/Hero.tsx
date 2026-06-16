import { ArrowRight, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface HeroProps {
  setCurrentPage: (page: string) => void;
  openBookingWithParams: () => void;
}

const slides = [
  {
    image: "/src/assets/images/pawna_lake_hero_1781554186715.jpg",
    title: "Eco Glamping & Lakeside Camping",
    accent: "Pawna Lake, Lonavala",
    desc: "Wake up to cold lakeside winds, glowing morning mists, and the majestic sight of ancient mountain forts. Perfect Saturday acoustic nights.",
    tagline: "WET BANK TOUCHING PRIVATE GROUNDS",
    pageId: "pawna",
    stats: "840+ Daily Booked Spots"
  },
  {
    image: "/src/assets/images/panshet_lake_hero_1781554201017.jpg",
    title: "Adventure Valleys & Watersports",
    accent: "Panshet Backwaters, Pune",
    desc: "Unplug from screen exhaustion inside a serene mango orchard farm. Enjoy adrenaline-fueled kayaking, speedboats, and traditional wood-cooked culinary plates.",
    tagline: "UNLIMITED WATER SPORTS INCLUDED",
    pageId: "panshet",
    stats: "620+ Active Campers Weekly"
  }
];

export default function Hero({ setCurrentPage, openBookingWithParams }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="hero-slider-main" className="relative min-h-screen bg-stone-950 flex items-center justify-center overflow-hidden pt-20">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Elegant dark/black-focused gradient overlays for supreme visual punch */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/15 z-10" />
            <img
              id={`hero-slide-image-${currentSlide}`}
              src={slides[currentSlide].image}
              alt={slides[currentSlide].accent}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="max-w-2xl lg:max-w-3xl text-left">
          {/* Trust Badge Hero */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-950/40 border border-orange-500/30 backdrop-blur-md mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
            <span className="text-[11px] font-mono tracking-wider text-orange-300 font-extrabold uppercase animate-pulse">
              {slides[currentSlide].tagline}
            </span>
          </motion.div>

          {/* Heading with high-contrast text */}
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-6 drop-shadow-sm">
            <span className="block text-orange-400 font-medium text-2xl sm:text-3xl font-serif mb-2 italic">
              Escape to {slides[currentSlide].accent}
            </span>
            {slides[currentSlide].title}
          </h1>

          {/* Description */}
          <p className="font-sans text-base sm:text-lg text-stone-200 font-normal leading-relaxed mb-8 max-w-xl drop-shadow-xs">
            {slides[currentSlide].desc}
          </p>

          {/* Real-time social trust bar */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-xs text-stone-400 font-mono">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-stone-200 font-extrabold">4.8/5 Rating</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-stone-700" />
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-orange-400 animate-bounce" />
              <span>CCTV Protected Grounds</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-stone-700" />
            <div className="flex items-center gap-1 text-orange-400 font-extrabold uppercase tracking-wide">
              <span>{slides[currentSlide].stats}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              id="hero-reserve-booking-cta"
              onClick={openBookingWithParams}
              className="bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 font-sans font-extrabold text-base px-8 py-4 rounded-full shadow-md hover:shadow transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Instant Online Booking</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              id="hero-explore-destination-cta"
              onClick={() => {
                setCurrentPage(slides[currentSlide].pageId);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-white/10 hover:bg-white/20 text-white font-sans font-bold text-base px-6 py-4 rounded-full border border-white/25 hover:border-white/50 backdrop-blur-md shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="w-4.5 h-4.5 text-orange-400" />
              <span>Explore {slides[currentSlide].accent.split(",")[0]}</span>
            </button>
          </div>
        </div>

        {/* Carousel Indicators / Controls */}
        <div className="absolute bottom-8 right-4 sm:right-8 z-30 flex items-center gap-2.5 bg-stone-900/90 backdrop-blur-md px-4 py-2 border border-stone-800 rounded-full shadow-sm">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? "w-8 bg-orange-600" : "w-2.5 bg-stone-700 hover:bg-orange-500"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          <span className="text-[10px] text-stone-300 ml-2 font-mono uppercase font-black">
            Slide {currentSlide + 1} of {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
}
