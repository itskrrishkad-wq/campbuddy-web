import {
    Train,
    Plane,
    MapPin,
    Car,
    Clock,
} from "lucide-react";

export default function HowToReachSection() {
    return (
        <section className="py-24 bg-stone-50">
            <div className="container mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold font-mono tracking-[0.2em] text-orange-600 uppercase">
                        Easy & Scenic Journey
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-stone-900 tracking-tight mt-2">
                        How To Reach Pawna Lake
                    </h2>

                    <p className="text-sm text-stone-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                        Located conveniently between Pune and Mumbai, Camp Buddy
                        Pawna Lake Camping is an easy weekend getaway with
                        breathtaking mountain and lake views throughout the journey.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Pune */}
                    <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm hover:shadow-xl transition-all">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                                <Car className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold">
                                From Pune
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                                <p>Approx. 55 km</p>
                            </div>

                            <div className="flex gap-3">
                                <Clock className="w-5 h-5 text-orange-500 mt-1" />
                                <p>1.5 – 2 Hours Drive</p>
                            </div>

                            <div className="bg-orange-50 rounded-2xl p-4 mt-4">
                                <p className="text-sm text-stone-700">
                                    Pune → Chandni Chowk → Paud Road →
                                    Pirangut → Hadshi → Pawna Lake
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mumbai */}
                    <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm hover:shadow-xl transition-all">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                                <Car className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold">
                                From Mumbai
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                                <p>Approx. 120 km</p>
                            </div>

                            <div className="flex gap-3">
                                <Clock className="w-5 h-5 text-orange-500 mt-1" />
                                <p>3 – 4 Hours Drive</p>
                            </div>

                            <div className="bg-orange-50 rounded-2xl p-4 mt-4">
                                <p className="text-sm text-stone-700">
                                    Mumbai → Expressway → Lonavala →
                                    Kamshet → Pawna Lake
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transport Info */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white rounded-3xl border border-orange-100 p-6">
                        <Train className="w-8 h-8 text-orange-600 mb-4" />
                        <h4 className="font-bold text-lg">
                            Nearest Railway Station
                        </h4>
                        <p className="text-stone-600 mt-2">
                            Kamshet Railway Station
                        </p>
                        <p className="text-sm text-stone-500">
                            Approximately 20 km away
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl border border-orange-100 p-6">
                        <Plane className="w-8 h-8 text-orange-600 mb-4" />
                        <h4 className="font-bold text-lg">
                            Nearest Airport
                        </h4>
                        <p className="text-stone-600 mt-2">
                            Pune International Airport
                        </p>
                        <p className="text-sm text-stone-500">
                            Approximately 65 km away
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}