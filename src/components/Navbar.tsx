import React, { useState, useEffect } from "react";
import { Menu, Phone, Compass, Tent, Calendar, Image as ImageIcon, Heart } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  openBookingWithParams: (destination?: "pawna" | "panshet", packageId?: string) => void;
  bookingInquiriesCount: number;
}

export default function Navbar({
  currentPage,
  setCurrentPage,
  openBookingWithParams,
  bookingInquiriesCount
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "pawna", label: "Pawna Lake", icon: Tent },
    { id: "panshet", label: "Panshet Camping", icon: Tent },
    { id: "packages", label: "Packages", icon: Calendar },
    { id: "tents", label: "Book Online", icon: Calendar },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        id="main-app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-stone-200 py-3"
            : "bg-white/60 backdrop-blur-xs border-b border-stone-200/40 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Business Branding: Camp Buddy */}
            <button
              id="header-logo-button"
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            >
              <div className="bg-orange-500 p-2.5 rounded-xl group-hover:bg-orange-600 transition-colors shadow-sm">
                <Tent className="w-5.5 h-5.5 text-white" />
              </div>
              <div className="text-left">
                <span className="block font-sans font-black tracking-tight text-xl text-stone-900 group-hover:text-orange-600 transition-colors uppercase">
                  Camp Buddy
                </span>
                <span className="block text-[9px] uppercase tracking-[0.25em] font-mono text-orange-600 font-bold -mt-1">
                  Premium Resorts
                </span>
              </div>
            </button>

            {/* Desktop Navigation links */}
            <nav id="desktop-navigation-links" className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-full font-sans font-semibold text-sm transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-orange-50 text-orange-800 border border-orange-200"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              {/* My Inquiries Portal */}
              <button
                id="my-bookings-nav-btn"
                onClick={() => handleNavClick("bookings")}
                className={`ml-2 px-4 py-2 rounded-full font-sans font-semibold text-sm transition-all relative cursor-pointer ${
                  currentPage === "bookings"
                    ? "bg-amber-50 text-amber-700 border border-amber-200/60"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                <span>My Bookings</span>
                {bookingInquiriesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-stone-950 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-smScale">
                    {bookingInquiriesCount}
                  </span>
                )}
              </button>
            </nav>

            {/* Right Side CTAs on Desktop */}
            <div id="desktop-right-ctas" className="hidden lg:flex items-center gap-5">
              {/* WhatsApp phone callout */}
              <a
                href="https://wa.me/918459154887?text=Hello!+I+am+interested+in+booking+a+camping+stay+at+Pawna/Panshet."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-stone-600 hover:text-orange-750 transition-colors text-sm font-mono border-r border-stone-200 pr-5"
              >
                <div className="bg-orange-50 p-1.5 rounded-lg text-orange-600">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold">+91 84591 54887</span>
              </a>

              {/* Instant Book Now Button */}
              <button
                id="header-book-now-cta"
                onClick={() => openBookingWithParams()}
                className="bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 font-sans font-bold text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
              >
                Book Camping Now
              </button>
            </div>

            {/* Mobile Sheet triggered Hamburger Menu (Premium shadcn Component) */}
            <div id="mobile-navigation-actions" className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-inquiries-badge-trigger"
                onClick={() => handleNavClick("bookings")}
                className="relative p-2.5 text-stone-600 hover:text-stone-900"
              >
                <Calendar className="w-5 h-5" />
                {bookingInquiriesCount > 0 && (
                  <span className="absolute top-1 right-1 bg-amber-400 text-stone-950 text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {bookingInquiriesCount}
                  </span>
                )}
              </button>

              <Sheet>
                <SheetTrigger asChild>
                  <button
                    id="mobile-menu-trigger-btn"
                    className="p-2 text-stone-600 hover:text-stone-900 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none cursor-pointer"
                    aria-label="Toggle Menu"
                  >
                    <Menu className="w-5 h-5" />
                  </button>
                </SheetTrigger>
                
                <SheetContent side="right" className="bg-white text-stone-900 p-6 flex flex-col justify-between h-full border-l border-stone-200 shadow-2xl">
                  <div className="space-y-6">
                    {/* Header branding in mobile drawer */}
                    <div className="flex items-center gap-2.5 border-b border-stone-100 pb-5">
                      <div className="bg-orange-500 p-2 rounded-lg">
                        <Tent className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-sans font-black tracking-tight text-lg text-stone-900 uppercase">
                        Camp Buddy
                      </span>
                    </div>

                    {/* Navigation Items */}
                    <nav id="mobile-nav-items-drawer" className="flex flex-col gap-2">
                      {navItems.map((item) => {
                        const IconComponent = item.icon;
                        const isActive = currentPage === item.id;
                        return (
                          <SheetClose key={item.id} asChild>
                            <button
                              onClick={() => handleNavClick(item.id)}
                              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-sans font-bold text-sm text-left transition-colors cursor-pointer ${
                                isActive
                                  ? "bg-orange-50 text-orange-850 border border-orange-100 font-extrabold"
                                  : "text-stone-600 hover:bg-stone-50"
                              }`}
                            >
                              <IconComponent className="w-4.5 h-4.5 opacity-70" />
                              <span>{item.label}</span>
                            </button>
                          </SheetClose>
                        );
                      })}

                      <SheetClose asChild>
                        <button
                          onClick={() => handleNavClick("bookings")}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-sans font-bold text-sm text-left transition-colors cursor-pointer ${
                            currentPage === "bookings"
                              ? "bg-amber-50 text-amber-700 border border-amber-100 font-extrabold"
                              : "text-stone-600 hover:bg-stone-50"
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <Calendar className="w-4.5 h-4.5 opacity-70" />
                            <span>My Booking Inquiries</span>
                          </div>
                          {bookingInquiriesCount > 0 && (
                            <span className="bg-amber-400 text-stone-950 text-[10px] font-black px-2 py-0.5 rounded-full">
                              {bookingInquiriesCount} Active
                            </span>
                          )}
                        </button>
                      </SheetClose>
                    </nav>
                  </div>

                  {/* Drawer Footer Actions */}
                  <div className="border-t border-stone-100 pt-5 space-y-3">
                    <a
                      href="tel:+918459154887"
                      className="w-full flex items-center justify-center gap-2 bg-stone-50 text-stone-700 font-sans font-bold py-3.5 rounded-xl border border-stone-200 text-center text-xs"
                    >
                      <Phone className="w-4 h-4 text-orange-600 animate-pulse" />
                      <span>Call Support: +91 84591 54887</span>
                    </a>

                    <SheetClose asChild>
                      <button
                        onClick={() => openBookingWithParams()}
                        className="w-full block bg-orange-600 hover:bg-orange-700 text-white font-sans font-extrabold py-3.5 rounded-xl text-center shadow-sm cursor-pointer text-sm"
                      >
                        Book Camp Now
                      </button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
