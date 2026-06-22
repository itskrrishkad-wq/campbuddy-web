import { useEffect } from "react";
import DayTimeline from "../components/DayTimeline";
import FAQAndReviews from "../components/FAQAndReviews";
import GallerySection from "../components/GallerySection";
import Hero from "../components/Hero";
import HomeOverview from "../components/HomeOverview";
import InlineBookingSection from "../components/InlineBookingSection";
import PackageSection from "../components/PackageSection";
import ActivitiesSection from "../components/ActivitesSection";
import HowToReachSection from "../components/HowToReach";
import NearbyAttractions from "../components/NearByAttraction";

export default function HomePage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant", // use "auto" if you want instant scrolling
        });
    }, []);
    return (
        <>
            <Hero />
            <HomeOverview />

            <div id="packages-section">
                <PackageSection />
            </div>

            <DayTimeline />
            <ActivitiesSection />

            <div id="booking-section">
                <InlineBookingSection />
            </div>

            <div id="gallery-section">
                <GallerySection />
            </div>
          
            <FAQAndReviews />
        </>
    );
}