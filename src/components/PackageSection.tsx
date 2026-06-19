import { AlertCircle, ArrowUpDown, Check, Filter, Search, Sparkles, Star, X } from "lucide-react";
import { useMemo, useState } from "react";
import { PACKAGES } from "../data";
import { CampPackage } from "../types";
import { Carousel, CarouselPrevious, CarouselContent, CarouselItem, CarouselNext } from "@/components/ui/carousel"
import { cn } from "@/lib/utils";

interface PackageSectionProps {
  openBookingWithParams: (destination: "pawna" | "panshet", packageId: string) => void;
  preSelectedDestination?: "pawna" | "panshet" | "all";
}

export default function PackageSection({ openBookingWithParams, preSelectedDestination = "all" }: PackageSectionProps) {
  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  // Destination filter state
  const [destFilter, setDestFilter] = useState<"all" | "pawna" | "panshet">(preSelectedDestination);
  // Max Price filter state
  const [priceFilter, setPriceFilter] = useState<number>(4000);
  // Sort state
  const [sortBy, setSortBy] = useState<"popular" | "price-asc" | "price-desc" | "rating">("popular");
  // Comparison list
  const [compareList, setCompareList] = useState<CampPackage[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [compareError, setCompareError] = useState<string | null>(null);

  // Filter & Sort math
  const filteredAndSortedPackages = useMemo(() => {
    let result = [...PACKAGES];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tentType.toLowerCase().includes(q)
      );
    }

    // Destination filter (only apply if the page parameter itself is "all" or state allows switching)
    if (destFilter !== "all") {
      result = result.filter((p) => p.destination === destFilter);
    }

    // Price query
    result = result.filter((p) => p.pricePerPerson <= priceFilter);

    // Sorting
    if (sortBy === "popular") {
      result.sort((a, b) => b.reviewsCount - a.reviewsCount);
    } else if (sortBy === "price-asc") {
      result.sort((a, b) => a.pricePerPerson - b.pricePerPerson);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.pricePerPerson - a.pricePerPerson);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchQuery, destFilter, priceFilter, sortBy]);

  // Comparison toggle
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
    <section id="packages-section" className="py-24 bg-stone-50 text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold font-mono tracking-[0.2em] text-orange-600 uppercase">
            Curated Camp Experience Offers
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-stone-900 tracking-tight mt-2">
            Explore Premium Packages
          </h2>
          <p className="text-sm text-stone-600 mt-4 max-w-xl mx-auto leading-relaxed">
            Choose your perfect wilderness stay. Compare various layouts, included breakfast, live barbecues, and water sports with completely fair rates.
          </p>
        </div>

        {/* 1. Filter, Search & Sort Panel */}
        <div id="filter-panel" className="bg-white border border-stone-200 p-6 rounded-3xl mb-12 flex flex-col gap-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="relative md:col-span-4">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 w-4.5 h-4.5" />
              <input
                id="package-search-input"
                type="text"
                placeholder="Search packages, tents, etc..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl pl-11 pr-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-orange-505 transition-colors"
              />
            </div>

            {/* Destination filter buttons - only render switch if we are looking at 'all' */}
            <div className="md:col-span-4 flex items-center gap-1.5 p-1 bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden">
              <button
                id="dest-filter-all"
                onClick={() => setDestFilter("all")}
                className={`flex-1 py-1.5 text-xs font-sans font-semibold rounded-xl transition-all cursor-pointer ${destFilter === "all" ? "bg-orange-600 text-white shadow-sm font-bold" : "text-stone-500 hover:text-stone-800"
                  }`}
              >
                All Camps
              </button>
              <button
                id="dest-filter-pawna"
                onClick={() => setDestFilter("pawna")}
                className={`flex-1 py-1.5 text-xs font-sans font-semibold rounded-xl transition-all cursor-pointer ${destFilter === "pawna" ? "bg-orange-600 text-white shadow-sm font-bold" : "text-stone-500 hover:text-stone-800"
                  }`}
              >
                Pawna Lake
              </button>
              <button
                id="dest-filter-panshet"
                onClick={() => setDestFilter("panshet")}
                className={`flex-1 py-1.5 text-xs font-sans font-semibold rounded-xl transition-all cursor-pointer ${destFilter === "panshet" ? "bg-orange-600 text-white shadow-sm font-bold" : "text-stone-500 hover:text-stone-800"
                  }`}
              >
                Panshet
              </button>
            </div>

            {/* Sorting selectors */}
            <div className="md:col-span-4 flex items-center gap-2">
              <div className="relative w-full">
                <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
                <select
                  id="package-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl pl-9 pr-6 py-2.5 text-xs text-stone-700 font-sans font-semibold focus:outline-none focus:border-orange-500/50 cursor-pointer appearance-none"
                >
                  <option value="popular">Sort: Popularity / Reviews</option>
                  <option value="price-asc">Sort: Price (Low to High)</option>
                  <option value="price-desc">Sort: Price (High to Low)</option>
                  <option value="rating">Sort: Best Rated (★4.9)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-stone-500">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.213 0.213-0.556 0.213-0.769 0l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-mono text-stone-600 font-bold">Max Price Ceiling:</span>
              <span className="text-orange-600 font-extrabold text-sm font-mono font-bold">₹{priceFilter}/person</span>
            </div>
            <div className="flex-1 max-w-md">
              <input
                id="max-price-range-slider"
                type="range"
                min="1100"
                max="3500"
                step="100"
                value={priceFilter}
                onChange={(e) => setPriceFilter(Number(e.target.value))}
                className="w-full mt-2 h-1.5 accent-orange-600 bg-stone-200 rounded-lg cursor-pointer"
              />
            </div>
            <button
              id="reset-filter-button"
              onClick={() => {
                setSearchQuery("");
                setDestFilter("all");
                setPriceFilter(4000);
                setSortBy("popular");
              }}
              className="text-stone-500 hover:text-stone-800 text-xs font-mono font-bold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* 2. Packages Cards Grid */}
        <div id="packages-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedPackages.map((pkg) => {
            const isCompared = compareList.some((item) => item.id === pkg.id);
            return (
              <div
                id={`package-card-${pkg.id}`}
                key={pkg.id}
                className="group relative bg-white border border-stone-250/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image on top */}
                {pkg.images?.length && pkg.images.length > 0 && (



                  <div className="relative h-64 w-full overflow-hidden bg-stone-100">
                    {/* <img
                      id={`package-image-${pkg.id}`}
                      src={pkg.images[0]}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    /> */}
                    <Carousel
                      className="w-full h-64"
                      opts={{ align: "start", loop: true }}
                    >
                      <CarouselContent className="h-full">
                        {pkg.images.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex} className="h-full">
                            <div className="relative w-full h-full">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={image}
                                loading="lazy"
                                alt={`${image} - Image ${imageIndex + 1
                                  }`}
                                className={cn(
                                  "w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700",
                                  // image.imageClassName,
                                )}
                              />

                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      {/* Carousel Navigation */}
                      <CarouselPrevious className="absolute left-2 inset-y-0  bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />
                      <CarouselNext className="absolute right-2 inset-y-0 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />

                      {/* Dot Indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1  transition-opacity duration-300">
                        {pkg.images.map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className="w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm"
                          />
                        ))}
                      </div>
                    </Carousel>

                  </div>
                )}

                {/* Visual Label Tags */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                  {pkg.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-orange-600/90 text-white w-max text-[10px] font-mono font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Compare Checkbox */}
                <button
                  id={`compare-toggle-btn-${pkg.id}`}
                  onClick={() => toggleCompare(pkg)}
                  className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur border border-stone-200 text-stone-700 hover:text-stone-900 p-2 rounded-2xl cursor-pointer flex items-center justify-center gap-1.5 shadow-sm hover:bg-stone-50 transition-colors"
                  title="Compare package highlights"
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${isCompared ? "bg-amber-500 border-amber-500 text-stone-900" : "border-stone-300"
                      }`}
                  >
                    {isCompared && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className="text-[10px] font-mono font-extrabold pr-1">COMPARE</span>
                </button>

                {/* Body Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Destination stamp */}
                  <span className="text-[10px] uppercase tracking-widest font-mono font-black text-orange-600">
                    {pkg.destination === "pawna" ? "Pawna Lake Camping" : "Panshet Eco Backwaters"}
                  </span>

                  <h3 className="text-xl font-sans font-extrabold text-stone-900 mt-1 mb-2 group-hover:text-orange-600 transition-colors">
                    {pkg.name}
                  </h3>

                  {/* Reviews rating */}
                  <div className="flex items-center gap-1.5 mb-4 text-xs text-stone-500">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${s <= pkg.rating ? "fill-amber-400 text-amber-400" : "text-stone-200"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-stone-800 font-bold font-mono">{pkg.rating}</span>
                    <span>({pkg.reviewsCount} reviews)</span>
                  </div>

                  {/* Pricing and savings */}
                  <div className="bg-stone-50 rounded-2xl p-4 mb-6 border border-stone-200/60 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black font-mono text-orange-600">
                          ₹{pkg.pricePerPerson}
                        </span>
                        <span className="text-sm line-through text-stone-400 font-mono">
                          ₹{pkg.originalPricePerPerson}
                        </span>
                      </div>
                      <span className="text-[10px] text-stone-500">Inclusive of meals & guides *</span>
                    </div>
                    <div className="bg-orange-50 border border-orange-200/50 text-orange-850 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg">
                      Save {Math.round((1 - pkg.pricePerPerson / pkg.originalPricePerPerson) * 100)}%
                    </div>
                  </div>

                  {/* Highlights Bullet list */}
                  <div className="space-y-3 font-sans text-xs text-stone-600 mb-6 border-b border-stone-100 pb-5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold font-mono bg-stone-100 text-orange-800 border border-stone-200 px-1.5 py-0.5 rounded uppercase">
                        Meals
                      </span>
                      <span className="truncate text-stone-750" title={pkg.meals.join(", ")}>
                        {pkg.meals[1] || pkg.meals[0]} BBQ included
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold font-mono bg-stone-100 text-orange-800 border border-stone-200 px-1.5 py-0.5 rounded uppercase">
                        Tents
                      </span>
                      <span className="text-stone-750">{pkg.tentType} ({pkg.occupancy})</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold font-mono bg-stone-100 text-orange-800 border border-stone-200 px-1.5 py-0.5 rounded uppercase">
                        Acts
                      </span>
                      <span className="truncate text-stone-750">{pkg.activities.slice(0, 3).join(", ")}...</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans mt-auto">{pkg.description}</p>
                </div>

                {/* Lower Action buttons */}
                <div className="p-6 pt-0 mt-auto">
                  <button
                    id={`package-book-btn-${pkg.id}`}
                    onClick={() => openBookingWithParams(pkg.destination, pkg.id)}
                    className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-850 text-white font-sans font-bold text-sm py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
                  >
                    <span>Instant Booking Inquiry</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search state */}
        {
          filteredAndSortedPackages.length === 0 && (
            <div id="no-packages-empty-state" className="text-center py-16 bg-white border border-stone-200 rounded-3xl mt-6">
              <p className="text-stone-800 text-lg font-bold font-sans">No matching packages found.</p>
              <p className="text-xs text-stone-400 font-sans mt-2">Try adjusting your filters, resetting the price range, or clearing the search query.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setPriceFilter(4000);
                  setDestFilter("all");
                }}
                className="mt-4 bg-stone-100 text-stone-700 text-xs font-mono font-bold px-4 py-2 rounded-xl hover:bg-stone-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )
        }

        {/* 3. Floating Comparison Bar */}
        {
          compareList.length > 0 && (
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
                      <X className="w-5 h-5" />
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
          )
        }

        {/* 4. Comparison Modal Layout */}
        {
          showCompareModal && (
            <div id="compare-modal" className="fixed inset-0  bg-stone-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
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
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
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
                              onClick={() => {
                                setShowCompareModal(false);
                                openBookingWithParams(pkg.destination, pkg.id);
                              }}
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
          )
        }

      </div>
    </section>
  );
}
