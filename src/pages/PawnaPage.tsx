import LocationDetails from "@/src/components/LocationDetails";
import { useEffect } from "react";
import StructuredData from "../components/StructuredData";
import SEO from "../components/SEO";


const schema = {
    "@context": "https://schema.org",
    "@type": "Campground",

    name: "Pawna Lake Camping",

    description:
        "Pawna Lake Camping is a popular lakeside camping destination near Pune and Mumbai, offering tent stays, bonfire nights, barbecue, music, outdoor games, group camping, family camping, couple camping, and weekend camping experiences with scenic views of Pawna Lake.",

    url: "https://campbuddy.in/pawna-lake-camping",

    telephone: "+918459154887",

    address: {
        "@type": "PostalAddress",
        addressLocality: "Pawna",
        addressRegion: "Maharashtra",
        addressCountry: "IN"
    },

    areaServed: {
        "@type": "State",
        name: "Maharashtra"
    },

    keywords: [
        "Pawna Lake Camping",
        "Pawna Camping",
        "Camping Near Pune",
        "Camping Near Mumbai",
        "Lakeside Camping",
        "Pawna Tent Camping",
        "Weekend Camping Near Pune",
        "Weekend Getaway Near Mumbai",
        "Bonfire Camping",
        "Family Camping",
        "Couple Camping",
        "Group Camping",
        "Adventure Camping",
        "Camping in Maharashtra",
        "Lake View Camping",
        "Pawna Lake Tent Stay",
        "Camping Packages Pawna",
        "Overnight Camping Pawna"
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
            name: "Outdoor Games",
            value: true
        },
        {
            "@type": "LocationFeatureSpecification",
            name: "Lake View Camping",
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
        "Adventure Travelers"
    ]
};

export default function PawnaPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant", // use "auto" if you want instant scrolling
        });
    }, []);
    return (
        <>
            <SEO
                title="CampBuddy - Best Pawna Lake Camping Packages Near Pune | Lakeside Camping"
                description="Book the best Pawna Lake camping packages near Pune with CampBuddy. Enjoy lakeside camping, tent stays, BBQ dinner, bonfire, live music, outdoor games, family camping, group camping, and weekend getaways at Pawna Lake."
                keywords="pawna lake camping, pawna lake camping near pune, best pawna lake camping, camping near pune, lakeside camping pawna lake, overnight camping pawna lake, pawna camping packages, family camping pawna lake, group camping pune, weekend getaway near pune"
                image="https://26q8s2ga0k.ufs.sh/f/II9VNliNyEei5gVc2ekTeRJmBS4iKNu6oEX8O2WClbazAZQv"
                url="https://campbuddy.in/pawna-lake-camping"
            />
            <StructuredData schema={schema} />
            <LocationDetails
                destinationId="pawna"

            />
        </>
    );
}