import GallerySection from "@/src/components/GallerySection";
import { useEffect } from "react";

export default function GalleryPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant", // use "auto" if you want instant scrolling
        });
    }, []);
    return (
        <GallerySection />
    );
}