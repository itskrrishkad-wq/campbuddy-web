import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { X, ChevronLeft, ChevronRight, MapPin, ZoomIn, Tent } from "lucide-react";
import { GalleryItem } from "../types";

interface GallerySectionProps {
  openBookingWithParams: (destination: "pawna" | "panshet") => void;
  preSelectedDestination?: "pawna" | "panshet" | "all";
}

export default function GallerySection({ openBookingWithParams, preSelectedDestination = "all" }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "pawna", label: "Pawna Lake" },
    { id: "panshet", label: "Panshet Valley" },
    { id: "tents", label: "Tents & Lobbies" },
    { id: "activities", label: "Adventure Activities" },
    { id: "food", label: "BBQ & Dining" },
    { id: "bonfire", label: "Bonfires" },
    { id: "night", label: "Night Stargazing" }
  ];

  // Filtering gallery items
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((gi) => gi.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
    }
  };

  const showPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <section id="gallery-main-section" className="py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold font-mono tracking-[0.2em] text-orange-600 uppercase">
            Virtual Resort Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-stone-900 mt-2 tracking-tight">
            Our Wilderness Camps Gallery
          </h2>
          <p className="text-sm text-stone-605 mt-4 max-w-xl mx-auto leading-relaxed">
            Real pictures from our lakesides, glamping bells, barbecue stoves, night sparklers, and water activities. What you see is exactly what you get!
          </p>
        </div>

        {/* Category filters with rounded corners */}
        <div id="gallery-filters-row" className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-sans font-extrabold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-orange-600 text-white shadow-sm"
                  : "bg-stone-50 text-stone-600 hover:text-stone-900 border border-stone-200 hover:bg-stone-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid Layout with highly rounded cards */}
        <div id="gallery-items-column-layout" className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="break-inside-avoid bg-stone-50 border border-stone-200 rounded-[24px] overflow-hidden cursor-pointer group relative shadow-xs hover:border-orange-500/20 hover:shadow-md transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden w-full h-auto">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500 rounded-t-[24px]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Floating overlay visible on hover */}
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 !z-30 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 border border-stone-200 p-3 rounded-full text-orange-600 shadow-sm">
                    <ZoomIn className="w-6 h-6 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Title Card lower details */}
              <div className="p-4 bg-stone-50 z-10 relative">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono tracking-wider bg-white border border-stone-200 text-stone-605 px-2.5 py-1 rounded-xl uppercase font-bold shadow-xs">
                    {item.locationLabel}
                  </span>
                  {item.category && (
                    <span className="text-[9px] uppercase font-mono text-orange-600 font-extrabold">
                      {item.category}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-xs text-stone-700 mt-2.5 font-bold truncate font-sans">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal overlay - keep dark and premium background for photography immersion */}
        {currentLightboxItem && (
          <div className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
            
            {/* Close trigger */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 text-stone-400 hover:text-white p-2.5 bg-stone-900/80 border border-stone-800 rounded-full cursor-pointer hover:bg-stone-800"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation back */}
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-stone-300 hover:text-white p-3 bg-stone-900/60 border border-stone-800 rounded-full cursor-pointer hover:bg-stone-850"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Navigation forward */}
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-stone-300 hover:text-white p-3 bg-stone-900/60 border border-stone-800 rounded-full cursor-pointer hover:bg-stone-850"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Centered panel with Content & CTA */}
            <div className="max-w-4xl w-full flex flex-col items-center">
              <div className="relative max-h-[70vh] max-w-full overflow-hidden rounded-3xl border border-stone-800 shadow-2xl bg-stone-900 flex items-center justify-center">
                <img
                  src={currentLightboxItem.src}
                  alt={currentLightboxItem.alt}
                  className="max-h-[70vh] max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Stats & booking redirection - White theme bottom bar in lightbox */}
              <div className="mt-4 bg-white border border-stone-200 p-5 rounded-[24px] max-w-xl w-full text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-stone-500 font-mono mb-1">
                    <MapPin className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
                    <span>{currentLightboxItem.locationLabel} Campsite</span>
                  </div>
                  <h4 className="text-sm font-sans font-extrabold text-stone-900">
                    {currentLightboxItem.alt}
                  </h4>
                  {currentLightboxItem.description && (
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">{currentLightboxItem.description}</p>
                  )}
                </div>

                <button
                  onClick={() => {
                    const dest = currentLightboxItem.category === "panshet" ? "panshet" : "pawna";
                    closeLightbox();
                    openBookingWithParams(dest);
                  }}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-sans font-bold text-xs px-5 py-3 rounded-xl transition-all cursor-pointer shrink-0 uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Tent className="w-4 h-4" />
                  <span>Book {currentLightboxItem.category === "panshet" ? "Panshet" : "Pawna"} Stay</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
