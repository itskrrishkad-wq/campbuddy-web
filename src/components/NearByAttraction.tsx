type LocationType = "pawna" | "panshet";

interface NearbyAttractionsProps {
    location: LocationType;
}

const ATTRACTIONS = {
    pawna: [
        {
            emoji: "🏰",
            title: "Tikona Fort",
            description:
                "Popular beginner-friendly trek with panoramic views of Pawna Lake.",
        },
        {
            emoji: "⛰️",
            title: "Tung Fort",
            description:
                "A scenic hill fort overlooking Pawna Lake with stunning viewpoints.",
        },
        {
            emoji: "🏯",
            title: "Lohagad Fort",
            description:
                "Historic fort famous for trekking, architecture, and monsoon beauty.",
        },
        {
            emoji: "🥾",
            title: "Visapur Fort",
            description:
                "One of the largest forts in the region and a favorite trekking destination.",
        },
        {
            emoji: "🌄",
            title: "Tiger Point",
            description:
                "Enjoy spectacular valley views, sunsets, and local food stalls.",
        },
        {
            emoji: "💧",
            title: "Bhushi Dam",
            description:
                "One of the most popular monsoon attractions near Lonavala.",
        },
        {
            emoji: "🦁",
            title: "Lion's Point",
            description:
                "Beautiful viewpoint offering breathtaking mountain and valley views.",
        },
        {
            emoji: "🛕",
            title: "Hadshi Temple",
            description:
                "Peaceful spiritual destination surrounded by nature and greenery.",
        },
    ],

    panshet: [
        {
            emoji: "🌊",
            title: "Panshet Dam",
            description:
                "A scenic reservoir known for boating, water sports, and breathtaking views.",
        },
        {
            emoji: "🚤",
            title: "Water Sports Center",
            description:
                "Enjoy kayaking, speed boating, jet skiing, and other adventure activities.",
        },
        {
            emoji: "🏞️",
            title: "Khadakwasla Dam",
            description:
                "One of Pune's most famous scenic destinations located near Panshet.",
        },
        {
            emoji: "🛕",
            title: "Neelkantheshwar Temple",
            description:
                "A hilltop temple offering spiritual peace and panoramic valley views.",
        },
        {
            emoji: "🌄",
            title: "Sinhagad Fort",
            description:
                "Historic fort near Panshet known for trekking and spectacular sunrise views.",
        },
        {
            emoji: "🌿",
            title: "Lavasa",
            description:
                "A picturesque hill city ideal for sightseeing, cafes, and photography.",
        },
        {
            emoji: "🚶",
            title: "Nature Trails",
            description:
                "Explore scenic forest paths and peaceful countryside landscapes.",
        },
        {
            emoji: "📸",
            title: "Sunset Viewpoints",
            description:
                "Capture stunning sunsets over the backwaters and surrounding hills.",
        },
    ],
};

export default function NearbyAttractions({
    location,
}: NearbyAttractionsProps) {
    const attractions = ATTRACTIONS[location];

    const destinationName =
        location === "pawna" ? "Pawna Lake" : "Panshet Backwaters";

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold font-mono tracking-[0.2em] text-orange-600 uppercase">
                        Explore Beyond Camping
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-2">
                        Nearby Attractions
                    </h2>

                    <p className="text-sm text-stone-600 mt-4 max-w-xl mx-auto leading-relaxed">
                        Discover scenic viewpoints, forts, waterfalls, temples,
                        and unforgettable experiences around {destinationName}.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {attractions.map((place) => (
                        <div
                            key={place.title}
                            className="
                                group relative overflow-hidden
                                rounded-3xl border border-orange-100
                                bg-white p-6 shadow-md
                                transition-all duration-500
                                hover:-translate-y-2
                                hover:shadow-xl
                            "
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-orange-100/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative">
                                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                                    {place.emoji}
                                </div>

                                <h3 className="font-bold text-lg text-stone-900 mb-2">
                                    {place.title}
                                </h3>

                                <p className="text-sm text-stone-600 leading-relaxed">
                                    {place.description}
                                </p>
                            </div>

                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}