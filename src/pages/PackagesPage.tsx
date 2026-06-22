import PackageSection from "@/src/components/PackageSection";
import { useEffect } from "react";

export default function PackagesPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant", // use "auto" if you want instant scrolling
        });
    }, []);
    return (
        <PackageSection />
    );
}