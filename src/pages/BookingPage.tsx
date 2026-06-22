import { useEffect } from "react";
import InlineBookingSection from "../components/InlineBookingSection";

export default function BookingsPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant", // use "auto" if you want instant scrolling
        });
    }, []);
    return (
        <InlineBookingSection />
    );
}