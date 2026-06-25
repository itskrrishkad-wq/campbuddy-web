import GallerySection from "@/src/components/GallerySection";
import { useEffect } from "react";
import SEO from "../components/SEO";

export default function GalleryPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant", // use "auto" if you want instant scrolling
        });
    }, []);
    return (
        <>
            <SEO
                title="CampBuddy Gallery - Pawna Lake & Panshet Camping Photos and Videos"
                description="Browse photos and videos of Pawna Lake and Panshet camping experiences. Explore lakeside tents, bonfires, BBQ nights, live music, outdoor activities, scenic views, and unforgettable camping moments near Pune."
                keywords="pawna lake camping photos, panshet camping photos, camping gallery pune, pawna lake camping images, panshet camping images, camping photos near pune, camping videos pune, lakeside camping gallery, pawna lake gallery, panshet lake gallery, camping experience pune, campbuddy gallery"
                image="/images/pawna/the-white-cottage-2.webp"
                url="https://campbuddy.in/camping-gallery"
            />
            <GallerySection />
        </>
    );
}