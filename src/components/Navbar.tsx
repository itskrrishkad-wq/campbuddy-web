import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Calendar, Image as ImageIcon, Menu, Phone, Tent } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";



export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = useLocation()
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
    { id: "pawna-lake-camping", label: "Pawna Lake", icon: Tent },
    { id: "panshet-camping", label: "Panshet Camping", icon: Tent },
    { id: "camping-packages", label: "Packages", icon: Calendar },
    { id: "booking-online", label: "Book Online", icon: Calendar },
    { id: "camping-gallery", label: "Gallery", icon: ImageIcon },
  ];

  const handleNavClick = (pageId: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        id="main-app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-stone-200 py-3"
          : "bg-white/60 backdrop-blur-xs border-b border-stone-200/40 py-3"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Business Branding: Camp Buddy */}
            <Link
              to={"/"}
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            >
              {/* <div className="bg-orange-500 p-2.5 rounded-xl group-hover:bg-orange-600 transition-colors shadow-sm">
                <Tent className="w-5.5 h-5.5 text-white" />
              </div> */}
              <div className={cn("p-0.5 bg-transparent rounded-xl  transition-colors")}>
                <img
                  src="/images/campbuddy/campbuddy-logo-nobg.png"
                  className="w-9.5 h-9.5 shrink-0"
                  alt="campbuddy-logo"
                />
              </div>
              <div className="text-left">
                <span className="block font-sans font-black tracking-tight text-xl text-stone-900 transition-colors uppercase">
                  Camp Buddy
                </span>
                <span className="block text-[9px] uppercase tracking-[0.25em] font-mono text-orange-600 font-bold -mt-1">
                  Premium Resorts
                </span>
              </div>
            </Link>

            {/* Desktop Navigation links */}
            <nav id="desktop-navigation-links" className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname.pathname.split("/")[1] === item.id;
                return (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    className={`px-4 py-2 rounded-full font-sans font-semibold text-sm transition-all duration-200 cursor-pointer ${isActive
                      ? "bg-orange-50 text-orange-800 border border-orange-200"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}


            </nav>

            {/* Right Side CTAs on Desktop */}
            <div id="desktop-right-ctas" className="hidden lg:flex items-center gap-5">
              {/* WhatsApp phone callout */}
              <a
                href="https://wa.me/918459154887?text=Hello!+I+am+interested+in+booking+a+camping+stay+at+Pawna/Panshet."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-stone-600 hover:text-orange-750 transition-colors text-sm font-mono "
              >
                <div className="bg-orange-50 p-1.5 rounded-lg text-orange-600">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold">+91 84591 54887</span>
              </a>

              {/* Instant Book Now div */}
              { /* <div
                id="header-book-now-cta"
                onClick={() => openBookingWithParams()}
                className="bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 font-sans font-bold text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
              >
                Book Camping Now
              </div>  */}
            </div>

            {/* Mobile Sheet triggered Hamburger Menu (Premium shadcn Component) */}
            <div id="mobile-navigation-actions" className="flex items-center gap-2 lg:hidden">


              <Sheet>
                <SheetTrigger >
                  <div
                    id="mobile-menu-trigger-btn"
                    className="p-2 text-stone-600 hover:text-stone-900 bg-transparent rounded-xl focus:outline-none cursor-pointer"
                    aria-label="Toggle Menu"
                  >
                    <Menu className="w-5 h-5" />
                  </div>
                </SheetTrigger>

                <SheetContent side="right" className="bg-white text-stone-900 !w-full p-6 flex flex-col justify-between h-full border-l border-stone-200 shadow-2xl">
                  <div className="space-y-6">
                    {/* Header branding in mobile drawer */}
                    <div className="flex items-center gap-2.5 border-b border-stone-100 pb-5">
                      <div className={cn(" bg-transparent rounded-xl  transition-colors")}>
                        <img
                          src="/images/campbuddy/campbuddy-logo-nobg.png"
                          className="w-9.5 h-9.5 shrink-0"
                          alt="campbuddy-logo"
                        />
                      </div>
                      <span className="font-sans font-black tracking-tight text-lg text-stone-900 uppercase">
                        Camp Buddy
                      </span>
                    </div>

                    {/* Navigation Items */}
                    <nav id="mobile-nav-items-drawer" className="flex flex-col gap-2">
                      {navItems.map((item) => {
                        const IconComponent = item.icon;
                        // const isActive = currentPage === item.id;
                        return (
                          <SheetClose key={item.id} >
                            <Link
                              to={`/${item.id}`}
                              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-sans font-bold text-sm text-left transition-colors cursor-pointer ${false
                                ? "bg-orange-50 text-orange-850 border border-orange-100 font-extrabold"
                                : "text-stone-600 hover:bg-stone-50"
                                }`}
                            >
                              <IconComponent className="w-4.5 h-4.5 opacity-70" />
                              <span>{item.label}</span>
                            </Link>
                          </SheetClose>
                        );
                      })}

                      <SheetClose>
                        <div
                          onClick={() => handleNavClick("bookings")}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-sans font-bold text-sm text-left transition-colors cursor-pointer ${"bookings" === "bookings"
                            ? "bg-amber-50 text-amber-700 border border-amber-100 font-extrabold"
                            : "text-stone-600 hover:bg-stone-50"
                            }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <Calendar className="w-4.5 h-4.5 opacity-70" />
                            <span>My Booking Inquiries</span>
                          </div>

                        </div>
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

                    <SheetClose className={"w-full"}>
                      <div
                        // onClick={() => openBookingWithParams()}
                        className="w-full block bg-orange-600 hover:bg-orange-700 text-white font-sans font-extrabold py-3.5 rounded-xl text-center shadow-sm cursor-pointer text-sm"
                      >
                        Book Camp Now
                      </div>
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
