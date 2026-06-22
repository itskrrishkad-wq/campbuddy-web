import { cn } from "@/lib/utils";
import { Heart, Mail, MapPin, Phone, Shield, Tent } from "lucide-react";
import { useLocation, Link } from "react-router-dom";




export default function Footer() {
  const location = useLocation()
  const handleNav = (pageId: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-app-footer" className="bg-stone-50 text-stone-600 border-t border-stone-200 pt-16 pb-8 max-md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column: Camp Buddy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className={cn(" bg-transparent rounded-xl  transition-colors")}>
                <img
                  src="/images/campbuddy/campbuddy-logo-nobg.png"
                  className="w-9.5 h-9.5 shrink-0"
                  alt="campbuddy-logo"
                />
              </div>
              <div>
                <span className="block font-sans font-black text-lg text-stone-900 tracking-tight uppercase">
                  Camp Buddy
                </span>
                <span className="block text-[8px] uppercase tracking-[0.25em] font-mono text-orange-600 font-bold -mt-0.5">
                  Premium Resorts
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-550 leading-relaxed font-sans">
              Experience the beautiful Western Ghats valleys. We operate premier, family-friendly riverside and lakeside campsites at Pawna Lake Lonavala and Panshet backwaters with extreme safety standards.
            </p>
            {/* <div className="flex items-center gap-3.5 bg-orange-50 border border-orange-100 rounded-3xl p-4 shadow-xs">
              <Shield className="w-5 h-5 text-orange-600 shrink-0 animate-pulse" />
              <div className="text-xs">
                <p className="font-extrabold text-stone-850">ISO 9001 Certified Safety</p>
                <p className="text-stone-550 font-medium">Continuous CCTV & 24/7 on-site guards</p>
              </div>
            </div> */}
          </div>

          {/* Useful Links Column */}
          <div>
            <h4 className="font-sans font-extrabold text-xs text-stone-900 uppercase tracking-widest mb-5">
              Explore Destinations
            </h4>
            <ul className="space-y-3.5 text-sm font-sans">
              <li>
                <Link
                  to={"/pawna-lake-camping"}
                  className="hover:text-orange-700 transition-colors text-stone-600 cursor-pointer text-left font-semibold"
                >
                  Pawna Lake Camping (Lonavala)
                </Link>
              </li>
              <li>
                <Link
                  to={"/panshet-camping"}
                  className="hover:text-orange-700 transition-colors text-stone-600 cursor-pointer text-left font-semibold"
                >
                  Panshet Backwaters Camping (Pune)
                </Link>
              </li>
              <li>
                <Link
                  to={"/camping-packages"}
                  className="hover:text-orange-700 transition-colors text-stone-600 cursor-pointer text-left font-semibold"
                >
                  Browse Camping Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Help Portal */}
          <div>
            <h4 className="font-sans font-extrabold text-xs text-stone-900 uppercase tracking-widest mb-5">
              Customer Center
            </h4>
            <ul className="space-y-3.5 text-sm font-sans">
              <li>
                <Link
                  to={"/booking-online"}
                  className="hover:text-orange-700 transition-colors text-stone-600 cursor-pointer text-left font-bold"
                >
                  My Booking Inquiries
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/918459154887?text=Hello+Camp+Buddy+Support!+I+need+help+regarding+campsite+locations."
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-orange-700 transition-colors text-stone-600 cursor-pointer text-left font-semibold"
                >
                  Direct WhatsApp Helpdesk
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-sans font-extrabold text-xs text-stone-900 uppercase tracking-widest mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-stone-600 font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                {/* <span>Thakursai Village, Pawna Dam, Lonavala / Shirkoli Village, Panshet backwaters, Pune, MH.</span> */}

                <span>
                  {location.pathname.includes("panshet")
                    ? "Velhe-Panshet Rd, Panshet, Kadve, Maharashtra 412107"
                    : "Thakursai-Aajiwali Rd, Gevhande Khadak, Maharashtra 410406"}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <a href="tel:+918459154887" className="hover:text-stone-900 font-semibold transition-colors">
                  +91 84591 54887
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                <a href="mailto:book@campbuddycamping.com" className="hover:text-stone-900 font-semibold transition-colors">
                  book@campbuddycamping.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 font-sans gap-4">
          <p>© 2026 Camp Buddy Camping Resorts. Built for premium conversion-focused travel experience. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted for premium outdoor glamping with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>in Maharashtra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
