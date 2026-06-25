import LocationDetails from "@/src/components/LocationDetails";
import { useEffect } from "react";
import StructuredData from "../components/StructuredData";
import SEO from "../components/SEO";


const schema = {
    "@context": "https://schema.org",
    "@type": "Campground",

    name: "Panshet Camping",

    description:
        "Panshet Camping is one of the most popular camping destinations near Pune, offering lakeside camping, tent stays, bonfire nights, barbecue, adventure activities, water sports, family camping, couple camping, group camping, and weekend camping experiences surrounded by the scenic Sahyadri hills and Panshet Lake.",

    url: "https://campbuddy.in/panshet-camping",

    telephone: "+918459154887",

    address: {
        "@type": "PostalAddress",
        addressLocality: "Panshet",
        addressRegion: "Maharashtra",
        addressCountry: "IN"
    },

    geo: {
        "@type": "GeoCoordinates",
        latitude: "18.3720",
        longitude: "73.5430"
    },

    areaServed: {
        "@type": "City",
        name: "Pune"
    },

    keywords: [
        "Panshet Camping",
        "Panshet Lake Camping",
        "Camping Near Pune",
        "Panshet Dam Camping",
        "Lakeside Camping Near Pune",
        "Weekend Camping Near Pune",
        "Tent Camping in Panshet",
        "Panshet Tent Stay",
        "Camping in Maharashtra",
        "Panshet Camping Packages",
        "Lake View Camping",
        "Adventure Camping Near Pune",
        "Couple Camping Panshet",
        "Family Camping Panshet",
        "Group Camping Panshet",
        "Bonfire Camping",
        "Panshet Backwater Camping",
        "Camping Near Panshet Dam",
        "Camping and Boating in Panshet",
        "Overnight Camping Panshet"
    ].join(", "),

    amenityFeature: [
        {
            "@type": "LocationFeatureSpecification",
            name: "Tent Stay",
            value: true
        },
        {
            "@type": "LocationFeatureSpecification",
            name: "Bonfire",
            value: true
        },
        {
            "@type": "LocationFeatureSpecification",
            name: "Barbecue",
            value: true
        },
        {
            "@type": "LocationFeatureSpecification",
            name: "Lake View Camping",
            value: true
        },
        {
            "@type": "LocationFeatureSpecification",
            name: "Boating",
            value: true
        },
        {
            "@type": "LocationFeatureSpecification",
            name: "Kayaking",
            value: true
        },
        {
            "@type": "LocationFeatureSpecification",
            name: "Outdoor Games",
            value: true
        },
        {
            "@type": "LocationFeatureSpecification",
            name: "Parking",
            value: true
        }
    ],

    touristType: [
        "Couples",
        "Families",
        "Friends",
        "Corporate Groups",
        "Adventure Travelers",
        "Weekend Travelers"
    ]
};

export default function PanshetPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant", // use "auto" if you want instant scrolling
        });
    }, []);
    return (
        <>
            <SEO
                title="CampBuddy - Best Panshet Camping Packages Near Pune | Lakeside Camping"
                description="Book the best Panshet camping packages near Pune with CampBuddy. Enjoy lakeside camping, tent stays, BBQ dinner, bonfire, live music, outdoor games, family camping, group camping, and memorable weekend getaways at Panshet Lake."
                keywords="panshet camping, panshet camping near pune, best panshet camping, camping near pune, lakeside camping panshet, overnight camping panshet, panshet camping packages, family camping panshet, group camping pune, weekend getaway near pune"
                image="/images/panshet/camping-tent/camping-tent-3.webp"
                url="https://campbuddy.in/panshet-camping"
            />
            <StructuredData schema={schema} />
            <LocationDetails
                destinationId="panshet"
            />
        </>
    );
}