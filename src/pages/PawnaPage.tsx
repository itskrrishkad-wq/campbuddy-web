import LocationDetails from "@/src/components/LocationDetails";
import { useEffect } from "react";

export default function PawnaPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant", // use "auto" if you want instant scrolling
        });
    }, []);
    return (
        <LocationDetails
            destinationId="pawna"

        />
    );
}