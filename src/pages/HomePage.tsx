import { useEffect } from "react";
import ActivitiesSection from "../components/ActivitesSection";
import DayTimeline from "../components/DayTimeline";
import FAQAndReviews from "../components/FAQAndReviews";
import GallerySection from "../components/GallerySection";
import Hero from "../components/Hero";
import HomeOverview from "../components/HomeOverview";
import InlineBookingSection from "../components/InlineBookingSection";
import PackageSection from "../components/PackageSection";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";



const schema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Pawna Lake Camping & Panshet Camping",
    description:
        "Experience the best camping near Pune with Pawna Lake Camping and Panshet Camping. Enjoy lakeside camping, tent stays, bonfire nights, barbecue, adventure activities, group camping, family camping, couples camping, and weekend camping experiences in Maharashtra.",
    url: "https://campbuddy.in",
    telephone: "+918459154887",

    address: {
        "@type": "PostalAddress",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
    },

    keywords: [
        "Pawna Lake Camping",
        "Pawna Camping",
        "Camping Near Pune",
        "Lakeside Camping Pune",
        "Weekend Camping Near Pune",
        "Panshet Camping",
        "Panshet Lake Camping",
        "Camping in Maharashtra",
        "Tent Camping Near Pune",
        "Adventure Camping",
        "Bonfire Camping",
        "Family Camping",
        "Couple Camping",
        "Group Camping",
        "Camping Packages Pune"
    ].join(", "),

    hasPart: [
        {
            "@type": "Campground",
            name: "Pawna Lake Camping",
            description:
                "Pawna Lake Camping offers lakeside tent stays, bonfire, barbecue, music, outdoor games, adventure activities, family camping, couple camping, and group camping near Pune.",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Pawna",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
            },
            amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Tent Stay" },
                { "@type": "LocationFeatureSpecification", name: "Bonfire" },
                { "@type": "LocationFeatureSpecification", name: "Barbecue" },
                { "@type": "LocationFeatureSpecification", name: "Outdoor Games" },
                { "@type": "LocationFeatureSpecification", name: "Lake View Camping" }
            ]
        },
        {
            "@type": "Campground",
            name: "Panshet Camping",
            description:
                "Panshet Camping provides scenic lakeside camping near Pune with tents, bonfire, barbecue, music, water activities, family camping, group camping, and weekend camping experiences.",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Panshet",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
            },
            amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Tent Stay" },
                { "@type": "LocationFeatureSpecification", name: "Bonfire" },
                { "@type": "LocationFeatureSpecification", name: "Barbecue" },
                { "@type": "LocationFeatureSpecification", name: "Water Activities" },
                { "@type": "LocationFeatureSpecification", name: "Lake View Camping" }
            ]
        }
    ],

    areaServed: {
        "@type": "State",
        name: "Maharashtra"
    },

    touristType: [
        "Couples",
        "Families",
        "Friends",
        "Corporate Groups",
        "Adventure Travelers"
    ]
};

export default function HomePage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant", // use "auto" if you want instant scrolling
        });
    }, []);
    return (
        <>
            <SEO
                title="CampBuddy - Best Pawna Lake & Panshet Camping Packages Near Pune"
                description="Discover the best camping experiences near Pune with CampBuddy. Book Pawna Lake and Panshet camping packages featuring lakeside tents, BBQ dinner, bonfires, music, games, and outdoor adventures."
                keywords="best camping near pune, campbuddy, pawna lake camping, panshet camping, camping packages pune, lakeside camping, overnight camping pune, family camping pune, group camping pune, weekend getaway pune"
                image="https://26q8s2ga0k.ufs.sh/f/II9VNliNyEei5gVc2ekTeRJmBS4iKNu6oEX8O2WClbazAZQv"
                url="https://campbuddy.in"
            />
            <StructuredData schema={schema} />
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