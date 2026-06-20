"use client";

import { cn } from "@/lib/utils";
import {
    Coffee,
    Drum,
    Flame,
    Sun,
    Sunrise,
    UtensilsCrossed,
} from "lucide-react";
import { useState } from "react";

const timelineEvents = [
    {
        time: "4:00 PM",
        title: "Check-in",
        description:
            "Arrive at the campsite and begin your getaway with a smooth and effortless check-in. Settle into your accommodation and soak in the natural surroundings.",
        icon: Sun,
        image: "/images/others/welcome.webp",
        color: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
        time: "5:00 PM",
        title: "Tea & Pakora",
        description:
            "Enjoy freshly prepared tea and crispy pakoras as you unwind into the evening. A perfect warm-up for a relaxing lakeside experience.",
        icon: Coffee,
        image:
            "https://images.unsplash.com/photo-1604945516204-526aa4fd6425?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "bg-gradient-to-r from-yellow-400 to-amber-500",
    },
    {
        time: "5:30 PM",
        title: "Outdoor Games & Activities",
        description:
            "Have fun with a variety of engaging activities like badminton, cricket, carrom, and more—perfect for families, friends, and adventure lovers.",
        icon: Drum,
        image: "/images/others/image-18.jpeg",
        color: "bg-gradient-to-r from-orange-400 to-orange-600",
    },
    {
        time: "7:30 PM",
        title: "BBQ & DJ Music",
        description:
            "Relish freshly grilled BBQ snacks while enjoying lively DJ music. The perfect mix of great food and great vibes until 9:30 PM.",
        icon: Flame,
        image: "/images/others/image-16.webp",
        color: "bg-gradient-to-r from-red-500 to-red-700",
        object_position: "object-bottom"
    },
    {
        time: "9:30 PM",
        title: "Dinner",
        description:
            "Savor a wholesome dinner featuring local dishes prepared with authentic flavors. A comforting meal to end your adventure-filled evening.",
        icon: UtensilsCrossed,
        image: "https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?q=80",
        color: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
        time: "10:00 PM",
        title: "Campfire",
        description:
            "Relax around the warm campfire, listen to nature’s sounds, and enjoy meaningful conversations under the night sky.",
        icon: Flame,
        image:
            "https://images.unsplash.com/photo-1533243367503-0b7337004671?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "bg-gradient-to-r from-orange-300 to-orange-600",
    },
    {
        time: "8:30 AM",
        title: "Breakfast",
        description:
            "Start your morning with a hearty breakfast featuring fresh and local flavors—fueling you for the day’s adventures.",
        icon: Sunrise,
        image: "https://images.unsplash.com/photo-1673530598977-ee0eda88f0a2?q=80",
        color: "bg-gradient-to-r from-yellow-300 to-amber-500",
    },
    {
        time: "11:00 AM",
        title: "Check-out",
        description:
            "Wrap up your stay with an easy check-out process and leave with unforgettable lakeside memories.",
        icon: Sun,
        image: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80",
        color: "bg-gradient-to-r from-green-400 to-green-700",
    },
];

export default function DayTimeline() {
    const [activeEvent, setActiveEvent] = useState<number | null>(null);

    return (
        <section id="timeline" className="py-20 px-6 lg:px-12 bg-secondary">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold font-mono tracking-[0.2em] text-orange-600 uppercase">
                        Thoughtfully Crafted Experiences
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-stone-900 tracking-tight mt-2">
                        Your Camping Timeline
                    </h2>
                    <p className="text-sm text-stone-600 mt-4 max-w-xl mx-auto leading-relaxed">
                        Every moment thoughtfully crafted to create unforgettable memories that last a lifetime.
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-red-500 rounded-full" />

                    <div className="space-y-20">
                        {timelineEvents.map((event, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                    }`}
                                onMouseEnter={() => setActiveEvent(index)}
                                onMouseLeave={() => setActiveEvent(null)}
                            >
                                {/* Content */}
                                <div className="lg:w-5/12">
                                    <div
                                        className={`p-8 rounded-3xl bg-white transition-shadow duration-300 ${activeEvent === index ? "shadow-2xl" : "shadow-lg"
                                            }`}
                                    >
                                        <div
                                            className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-white font-semibold mb-4 ${event.color}`}
                                        >
                                            <event.icon className="w-5 h-5" />
                                            <span>{event.time}</span>
                                        </div>
                                        <h3 className="text-2xl font-playfair font-bold mb-3 text-stone">
                                            {event.title}
                                        </h3>
                                        <p className="text-stone/80 leading-relaxed">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Dot */}
                                <div
                                    className={`w-8 h-8 rounded-full border-4 border-white shadow-lg z-10 transition-colors duration-300 ${activeEvent === index ? event.color : "bg-moss"
                                        }`}
                                />

                                {/* Image */}
                                <div className="lg:w-5/12">
                                    <div className="relative h-80 overflow-hidden rounded-3xl shadow-xl will-change-contents">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            // sizes="(min-width: 1024px) 40vw, 100vw"
                                            className={cn("w-full object-cover transition-[filter] duration-500 hover:brightness-110")}
                                        />
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="lg:hidden space-y-8">
                    {timelineEvents.map((event, i) => (
                        <div key={i} className="relative pl-16">
                            <div
                                className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center text-white ${event.color}`}
                            >
                                <event.icon className="w-6 h-6" />
                            </div>
                            <div className="bg-white rounded-3xl p-6 shadow-lg">
                                <div className="font-bold text-moss mb-2">{event.time}</div>
                                <h3 className="text-xl font-playfair font-bold mb-2">
                                    {event.title}
                                </h3>
                                <p className="text-stone/80 mb-4">{event.description}</p>
                                <div className="relative h-48 overflow-hidden rounded-2xl">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        sizes="100vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}