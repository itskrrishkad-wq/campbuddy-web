import PackageSection from "@/src/components/PackageSection";
import { useEffect } from "react";
import SEO from "../components/SEO";

export default function PackagesPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant", // use "auto" if you want instant scrolling
        });
    }, []);
    return (
        <>
            <SEO
                title="Best Camping Near Pune | Pawna Lake & Panshet Camping Packages"
                description="Book the best camping near Pune with Pawna Lake and Panshet camping packages. Enjoy lakeside tent camping, BBQ dinner, bonfire nights, live music, adventure activities, family camping, group camping, and weekend getaways with CampBuddy."
                keywords="best camping near pune, pawna lake camping, panshet camping, camping packages near pune, pawna lake camping near pune, panshet camping near pune, lakeside camping, tent camping near pune, overnight camping pune, family camping near pune, group camping near pune, weekend camping pune, weekend getaway near pune"
                image="/images/pawna/the-white-cottage-2.webp"
                url="https://campbuddy.in/camping-packages"
            />
            <PackageSection />
        </>
    );
}