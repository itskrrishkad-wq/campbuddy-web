import { useEffect } from "react";
import InlineBookingSection from "../components/InlineBookingSection";
import SEO from "../components/SEO";

export default function BookingsPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant", // use "auto" if you want instant scrolling
        });
    }, []);
    return (
        <>
            <SEO
                title="Book Pawna Lake & Panshet Camping Packages Near Pune | CampBuddy"
                description="Book Pawna Lake and Panshet camping packages near Pune with CampBuddy. Reserve lakeside tent stays, BBQ dinner, bonfire, live music, outdoor games, family camping, group camping, and weekend getaway experiences."
                keywords="book pawna lake camping, book panshet camping, camping booking near pune, pawna lake camping booking, panshet camping booking, camping packages pune, reserve camping near pune, lakeside camping booking, weekend camping pune, camping reservations pune"
                image="https://26q8s2ga0k.ufs.sh/f/II9VNliNyEei5gVc2ekTeRJmBS4iKNu6oEX8O2WClbazAZQv"
                url="https://campbuddy.in/booking-online"
            />
            <InlineBookingSection />
        </>
    );
}