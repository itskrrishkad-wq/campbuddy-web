import { cn } from "@/lib/utils";
import { Tent } from "lucide-react";
import { useEffect, useState } from "react";
import BookingForm from "./components/BookingForm";
import DayTimeline from "./components/DayTimeline";
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
            <div>
              <DayTimeline />
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
      {/* {isBookingOpen && ( */}
      <BookingForm
        open={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        destinationParam={bookingParams.destination}
        packageIdParam={bookingParams.packageId}
        addBookingInquiry={addBookingInquiry}
      />
      {/* )} */}

      {/* Mobile Floating Action Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto">

        {/* Floating Tent Badge */}
        <div className="flex justify-center mb-2">
          <div className="flex items-center gap-2 bg-white border border-orange-200 rounded-full px-4 py-2 shadow-lg">
            <Tent className="w-4 h-4 text-orange-600" />
            <span className="text-[11px] font-bold text-stone-700">
              Friendly Camp Team Available
            </span>
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-white/95 backdrop-blur-xl border border-stone-200 rounded-2xl p-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-2">

            {/* WhatsApp */}
            <a
              href="https://wa.me/918459154887?text=Hello!+I+am+interested+in+booking+a+camping+session+at+Pawna/Panshet."
              target="_blank"
              rel="noreferrer"
              // className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-extrabold text-[11px] py-3 rounded-xl uppercase tracking-wider transition-all"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-extrabold text-[11px] py-3 rounded-xl uppercase tracking-wider transition-all shadow-sm"
            >
              {/* <MessageSquare className="w-4 h-4" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={cn("bi bi-whatsapp")}
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              <span>WhatsApp Chat</span>
            </a>

            {/* Booking */}
            {/* <button
              onClick={() => openBookingWithParams()}
              // className="flex-1 bg-orange-50 hover:bg-orange-100 active:bg-orange-200 text-orange-800 border border-orange-200 font-extrabold text-[11px] py-3 rounded-xl uppercase tracking-wider transition-all"
              // className="flex-1 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 text-blue-800 border border-blue-200 font-extrabold text-[11px] py-3 rounded-xl uppercase tracking-wider transition-all"
              className="flex-1 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white border border-blue-500 font-extrabold text-[11px] py-3 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200"
            >
              Book Online
            </button> */}
            <button
              onClick={() => openBookingWithParams()}
              // className="flex-1 bg-orange-50 hover:bg-orange-100 active:bg-orange-200 text-orange-800 border border-orange-200 font-extrabold text-[11px] py-3 rounded-xl uppercase tracking-wider transition-all"
              // className="flex-1 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 text-blue-800 border border-blue-200 font-extrabold text-[11px] py-3 rounded-xl uppercase tracking-wider transition-all"
              className="flex-1 flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white border border-blue-500 font-extrabold text-[11px] py-3 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <span className="inline max-sm:text-xs">Call</span>
            </button>

          </div>
        </div>

      </div>

    </div>
  );
}
