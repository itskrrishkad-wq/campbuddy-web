import { Activity, ArrowRight, Award, CheckCircle, Heart, MapPin, Shield, Utensils } from "lucide-react";
import { STATS } from "../data";
import pawnaHero from "@/src/assets/images/pawna_lake_hero_1781554186715.jpg"
import panshetHero from "@/src/assets/images/panshet_lake_hero_1781554201017.jpg"

interface HomeOverviewProps {
  setCurrentPage: (page: string) => void;
  openBookingWithParams: (destination: "pawna" | "panshet") => void;
}

export default function HomeOverview({ setCurrentPage, openBookingWithParams }: HomeOverviewProps) {
  const whyChooseUsData = [
    {
      icon: MapPin,
      title: "Scenic Water-Touching Locations",
      desc: "Our private campsites sit right on the shores of Pawna Lake and Panshet. No tedious mountain climbs—just step out your tent directly onto soft, lush waterfront fields."
    },
    {
      icon: Shield,
      title: "100% Couple & Family Friendly",
      desc: "We prioritize security. Continuous CCTV monitoring, dedicated female staff assistance, professional security guards on standby, and strict codes against rowdy public behaviour."
    },
    {
      icon: Utensils,
      title: "Delicious Firewood Cooking",
      desc: "Enjoy steaming, hot, unlimited buffet meals cooked under extreme hygiene. Try local wood-fired slow cooking 'Chulivarchi Jevan' and fresh marinated barbecue starters."
    },
    {
      icon: Activity,
      title: "Exciting Adventure Activities",
      desc: "Go kayaking, speedboating, and swimming with high-standard lifejackets under certified lifeguards. Enjoy archery, volleyball, and Saturday evening acoustic live bands."
    },
    {
      icon: Heart,
      title: "Premium Accommodation Standards",
      desc: "We supply brand new double-layer stormproof tents, real thick comfortable mattress cushions (not cheap thin rubber pads), sanitized linens, and fresh soft pillows."
    },
    {
      icon: Award,
      title: "5+ Years Travel Experience",
      desc: "Having hosted 18,400+ satisfied guests over five years of active operations, we strive for flawless service, helpful travel advice, and fair, transparent booking tariffs."
    }
  ];

  return (
    <section id="home-overview-section" className="py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Statistics highlights bar */}
        <div
          id="stats-dashboard-row"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-24"
        >
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="
        bg-white
        rounded-2xl
        border border-stone-200
        p-4 sm:p-6
        text-center
        shadow-sm
        hover:shadow-md
        transition-all
        duration-300
      "
            >
              <div className="text-2xl sm:text-4xl font-black text-orange-600 leading-none">
                {stat.value}
              </div>

              <div className="mt-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.15em] text-stone-500 font-bold">
                {stat.label}
              </div>

              <div className="mt-1 text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* 1. Quick Destination Selector */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold font-mono tracking-[0.2em] text-orange-600 uppercase">
            Two Premier Western Ghats Getaways
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-stone-900 tracking-tight mt-2">
            Choose Your Camping Destination
          </h2>
          <p className="text-sm text-stone-600 mt-4 max-w-xl mx-auto leading-relaxed">
            Both of our properties offer mesmerizing nature sights and reliable safety, but specialized features cater to different hearts.
          </p>
        </div>

        {/* Destination Cards Deck */}
        <div id="destinations-cards-deck" className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-28">
          {/* Pawna Card */}
          <div className="group bg-stone-50 rounded-[32px] overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-350 hover:border-orange-500/30 flex flex-col justify-between">
            <div>
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={pawnaHero}
                  alt="Pawna lakeside sunset"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-mono font-black px-3.5 py-1.5 rounded-full uppercase shadow-sm">
                  Saturday Live Acoustic Music
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-sans font-black text-stone-900">
                    Pawna Lake Camping
                  </h3>
                  <span className="text-orange-850 font-extrabold text-sm font-mono bg-orange-50 px-2.5 py-1 rounded-xl">From ₹1,199/person</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono mb-4">
                  <MapPin className="w-4 h-4 text-orange-605" />
                  <span>Kamshet/Thakursai Village, near Lonavala</span>
                </div>
                <p className="text-sm text-stone-605 leading-relaxed mb-6 font-sans">
                  Perfect weekend getaway for music lovers and couples. Enjoy clear stargazing nights beside peaceful waves, delicious tandoor barbecue starters, and historic mountain fortress horizon views (Tikona, Lohagad).
                </p>
                <div className="space-y-2.5 mb-4 font-sans">
                  <div className="flex items-center gap-2 text-xs text-stone-700 font-semibold">
                    <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Lakeside sunset dining deck</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-700 font-semibold">
                    <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Live singing unplugged guitar (Sat night)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-700 font-semibold">
                    <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Double layer storm-proof dome & bell tents</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 pt-0 border-t border-stone-200_half flex gap-4 mt-auto">
              <button
                onClick={() => {
                  setCurrentPage("pawna");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex-1 bg-white hover:bg-stone-100 text-stone-700 font-bold border border-stone-200 text-sm py-3.5 rounded-xl transition-all cursor-pointer text-center shadow-xs"
              >
                Explore Details
              </button>
              <button
                onClick={() => openBookingWithParams("pawna")}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-sm font-extrabold py-3.5 rounded-xl transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1 hover:shadow"
              >
                <span>Book Pawna</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Panshet Card */}
          <div className="group bg-stone-50 rounded-[32px] overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-350 hover:border-orange-500/30 flex flex-col justify-between">
            <div>
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={panshetHero}
                  alt="Panshet backwaters landscape"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-mono font-black px-3.5 py-1.5 rounded-full uppercase shadow-sm">
                  Free Kayaking & Speed Boat
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-sans font-black text-stone-900">
                    Panshet Backwaters Camping
                  </h3>
                  <span className="text-orange-800 font-extrabold text-sm font-mono bg-orange-50 px-2.5 py-1 rounded-xl">From ₹1,299/person</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono mb-4">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>Velhe Taluka, near Pune backwaters</span>
                </div>
                <p className="text-sm text-stone-605 leading-relaxed mb-6 font-sans">
                  Ideal for adventure enthusiasts seeking silence and direct watersports access. Sprawled inside mango orchards with wooden decks, traditional Chulivarchi food cooking, and guided morning forest trekking.
                </p>
                <div className="space-y-2.5 mb-4 font-sans">
                  <div className="flex items-center gap-2 text-xs text-stone-700 font-semibold">
                    <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Kayaking, speed boats & safe lake swimming</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-700 font-semibold">
                    <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Traditional Chulivarchi Woodfired dinner</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-700 font-semibold">
                    <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Safari wooden-deck elevated canvas cabins</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 pt-0 border-t border-stone-200_half flex gap-4 mt-auto">
              <button
                onClick={() => {
                  setCurrentPage("panshet");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex-1 bg-white hover:bg-stone-100 text-stone-700 font-bold border border-stone-200 text-sm py-3.5 rounded-xl transition-all cursor-pointer text-center shadow-xs"
              >
                Explore Details
              </button>
              <button
                onClick={() => openBookingWithParams("panshet")}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-sm font-extrabold py-3.5 rounded-xl transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1 hover:shadow"
              >
                <span>Book Panshet</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Why Choose Us Grid */}
        <div className="border-t border-stone-250 pt-24">
          <div className="text-center mb-16">
            <span className="text-xs font-bold font-mono tracking-[0.2em] text-orange-600 uppercase">
              Our Safety & Quality Guarantee
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-stone-900 mt-2 tracking-tight">
              Why 18,400+ Campers Trust Camp Buddy Resorts
            </h2>
            <p className="text-sm text-stone-650 mt-4 max-w-xl mx-auto leading-relaxed">
              We focus heavily on premium quality details, hygienic modern bathrooms, customized safety features, and incredible food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-stone-50 p-8 rounded-[28px] border border-stone-200 hover:border-orange-500/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 border border-orange-100 shrink-0">
                    <Icon className="w-6 h-6 hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="text-lg font-sans font-extrabold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-605 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
