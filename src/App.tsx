import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PawnaPage from "./pages/PawnaPage";
import PanshetPage from "./pages/PanshetPage";
import PackagesPage from "./pages/PackagesPage";
import GalleryPage from "./pages/GalleryPage";
import BookingsPage from "./pages/BookingPage";
import Navbar from "./components/Navbar";
import { Tent } from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "./components/Footer";
import FloatingAction from "./components/FloatingAction";
import { useBookingStore } from "./zustand/bookingStore";
import BookingForm from "./components/BookingForm";

// import HomePage from "./pages/HomePage";
// import PawnaPage from "./pages/PawnaPage";
// import PanshetPage from "./pages/PanshetPage";
// import PackagesPage from "./pages/PackagesPage";
// import GalleryPage from "./pages/GalleryPage";
// import BookingsPage from "./pages/BookingsPage";

export default function App() {
  const { open, openBooking, closeBooking, destinationParam, packageIdParam } = useBookingStore()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pawna-lake-camping" element={<PawnaPage />} />
        <Route path="/panshet-camping" element={<PanshetPage />} />
        <Route path="/camping-packages" element={<PackagesPage />} />
        <Route path="/camping-gallery" element={<GalleryPage />} />
        <Route path="/booking-online" element={<BookingsPage />} />
      </Routes>



      <FloatingAction />
      <Footer />
      <BookingForm onClose={closeBooking} open={open} destinationParam={destinationParam} packageIdParam={packageIdParam} />
    </BrowserRouter>
  );
}