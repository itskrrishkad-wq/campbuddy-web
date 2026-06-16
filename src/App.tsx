import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import BookingForm from "./components/BookingForm";
import FAQAndReviews from "./components/FAQAndReviews";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";
import HomeOverview from "./components/HomeOverview";
import InlineBookingSection from "./components/InlineBookingSection";
import LocationDetails from "./components/LocationDetails";
import MyBookings from "./components/MyBookings";
import Navbar from "./components/Navbar";
import PackageSection from "./components/PackageSection";
import { BookingInquiry } from "./types";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [bookingInquiries, setBookingInquiries] = useState<BookingInquiry[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingParams, setBookingParams] = useState<{
    destination?: "pawna" | "panshet";
    packageId?: string;
  }>({});

  // Parse booking inquiries from localStorage on app boot
  useEffect(() => {
    try {
      const stored = localStorage.getItem("booking_inquiries");
      if (stored) {
        setBookingInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Could not parse booking inquiries from localStorage", e);
    }
  }, []);

  // Save changes to localStorage
  const saveInquiries = (updated: BookingInquiry[]) => {
    setBookingInquiries(updated);
    try {
      localStorage.setItem("booking_inquiries", JSON.stringify(updated));
    } catch (e) {
      console.error("Could not save to localStorage", e);
    }
  };

  const addBookingInquiry = (newInq: BookingInquiry) => {
    const updated = [newInq, ...bookingInquiries];
    saveInquiries(updated);
  };

  const removeInquiry = (id: string) => {
    const updated = bookingInquiries.filter((item) => item.id !== id);
    saveInquiries(updated);
  };

  // Open booking modal with prefill parameters
  const openBookingWithParams = (destination?: "pawna" | "panshet", packageId?: string) => {
    setBookingParams({ destination, packageId });
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-white text-stone-900 min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      
      {/* 1. Header Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        openBookingWithParams={openBookingWithParams}
        bookingInquiriesCount={bookingInquiries.length}
      />

      {/* 2. Page Router Switch */}
      <main className="pb-20 lg:pb-0">
        {currentPage === "home" && (
          <>
            <Hero
              setCurrentPage={setCurrentPage}
              openBookingWithParams={openBookingWithParams}
            />
            <HomeOverview
              setCurrentPage={setCurrentPage}
              openBookingWithParams={(dest) => openBookingWithParams(dest)}
            />
            <div id="packages-section">
              <PackageSection openBookingWithParams={openBookingWithParams} />
            </div>
            <div id="booking-section">
              <InlineBookingSection addBookingInquiry={addBookingInquiry} setCurrentPage={setCurrentPage} />
            </div>
            <div id="gallery-section">
              <GallerySection openBookingWithParams={(dest) => openBookingWithParams(dest)} />
            </div>
            <FAQAndReviews />
          </>
        )}

        {(currentPage === "pawna" || currentPage === "panshet") && (
          <LocationDetails
            destinationId={currentPage as "pawna" | "panshet"}
            openBookingWithParams={openBookingWithParams}
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === "packages" && (
          <PackageSection openBookingWithParams={openBookingWithParams} />
        )}

        {currentPage === "tents" && (
          <InlineBookingSection addBookingInquiry={addBookingInquiry} setCurrentPage={setCurrentPage} />
        )}

        {currentPage === "gallery" && (
          <GallerySection openBookingWithParams={(dest) => openBookingWithParams(dest)} />
        )}

        {currentPage === "bookings" && (
          <MyBookings
            inquiries={bookingInquiries}
            removeInquiry={removeInquiry}
            setCurrentPage={setCurrentPage}
            openBookingWithParams={() => openBookingWithParams()}
          />
        )}
      </main>

      {/* 3. Footer Section */}
      <Footer
        setCurrentPage={setCurrentPage}
        openBookingWithParams={() => openBookingWithParams()}
      />

      {/* 4. Modular Booking Form Overlay */}
      {isBookingOpen && (
        <BookingForm
          onClose={() => setIsBookingOpen(false)}
          destinationParam={bookingParams.destination}
          packageIdParam={bookingParams.packageId}
          addBookingInquiry={addBookingInquiry}
        />
      )}

      {/* 5. STICKY MOBILE CONVERSION BAR - Styled in clean white / orange accents */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 border-t border-stone-200 p-3 lg:hidden flex items-center justify-between gap-3 backdrop-blur-md shadow-lg">
        {/* WhatsApp Hot Click */}
        <a
          href="https://wa.me/918459154887?text=Hello!+I+am+interested+in+booking+a+camping+session+at+Pawna/Panshet."
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-sans font-extrabold text-xs py-3.5 rounded-xl uppercase tracking-wider text-center cursor-pointer shadow-xs"
        >
          <MessageSquare className="w-4.5 h-4.5" />
          <span>WhatsApp Chat</span>
        </a>

        {/* Dynamic Reservation Dialog Trigger */}
        <button
          onClick={() => openBookingWithParams()}
          className="flex-1 bg-orange-50 hover:bg-orange-100 text-orange-800 border border-orange-200 font-sans font-extrabold text-xs py-3.5 rounded-xl uppercase tracking-wider text-center cursor-pointer shadow-xs"
        >
          Book Camping Online
        </button>
      </div>

    </div>
  );
}
