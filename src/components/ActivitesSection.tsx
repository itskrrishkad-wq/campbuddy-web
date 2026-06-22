const activities = [
    {
        emoji: "🚣",
        title: "Boating (Extra charges)",
        description: "Glide across calm waters and soak in breathtaking lakeside views.",
    },
    {
        emoji: "🔥",
        title: "Bonfire Nights",
        description: "Enjoy cozy evenings around a crackling bonfire beneath the stars.",
    },
    {
        emoji: "🎵",
        title: "Live Music Sessions",
        description: "Relax with live performances that elevate the camping atmosphere.",
    },
    {
        emoji: "🎯",
        title: "Indoor & Outdoor Games",
        description: "Challenge your friends and family with exciting games and activities.",
    },
    {
        emoji: "📸",
        title: "Photography Points",
        description: "Capture stunning sunsets, mountains, and unforgettable memories.",
    },
    {
        emoji: "🤝",
        title: "Group Activities",
        description: "Participate in fun social activities designed for everyone.",
    },
    {
        emoji: "🌅",
        title: "Lakeside Relaxation",
        description: "Unwind beside the lake and embrace the tranquility of nature.",
    },
];

export default function ActivitiesSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-orange-50/60 via-background to-background">
            <div className="container mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold font-mono tracking-[0.2em] text-orange-600 uppercase">
                        Thoughtfully Crafted Experiences
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-stone-900 tracking-tight mt-2">
                        Activities at Camp Buddy
                    </h2>

                    <p className="text-sm text-stone-600 mt-4 max-w-xl mx-auto leading-relaxed">
                        From sunrise adventures to cozy bonfire evenings,
                        every activity is designed to create unforgettable camping memories.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {activities.map((activity) => (
                        <div
                            key={activity.title}
                            className="
                                group relative overflow-hidden
                                rounded-3xl border border-orange-100
                                bg-white p-6
                                transition-all duration-500
                                hover:-translate-y-2
                                shadow-md
                                hover:shadow-[0_20px_50px_-12px_rgba(234,88,12,0.18)]
                            "
                        >
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-orange-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <div className="relative mb-5">
                                <div
                                    className="
                                        flex h-16 w-16 items-center justify-center
                                        rounded-2xl
                                        bg-gradient-to-br
                                        from-orange-500
                                        to-amber-500
                                        text-3xl
                                        shadow-lg
                                        shadow-orange-200
                                        transition-all duration-500
                                        group-hover:scale-110
                                        group-hover:-rotate-6
                                    "
                                >
                                    {activity.emoji}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <h3 className="text-lg font-bold text-stone-900 mb-2">
                                    {activity.title}
                                </h3>

                                <p className="text-sm text-stone-600 leading-relaxed">
                                    {activity.description}
                                </p>
                            </div>

                            {/* Accent Line */}
                            <div
                                className="
                                    absolute bottom-0 left-0
                                    h-1 w-0
                                    bg-gradient-to-r
                                    from-orange-500
                                    to-amber-500
                                    transition-all duration-500
                                    group-hover:w-full
                                "
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}