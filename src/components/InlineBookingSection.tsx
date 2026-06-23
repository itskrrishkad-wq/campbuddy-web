import {
  AlertCircle,
  Calculator,
  Calendar,
  CheckCircle,
  Clock,
  Coins,
  PhoneCall,
  Shield,
  Sparkles,
  Utensils
} from "lucide-react";
import React, { useEffect, useState } from "react";
// import { PACKAGES } from "../data";
import { useLocation } from "react-router-dom";
import { PACKAGES } from "../refactored-packages";

interface InlineBookingSectionProps {
  preSelectedDestination?: "pawna" | "panshet";
}

export default function InlineBookingSection({
  preSelectedDestination
}: InlineBookingSectionProps) {
  const { pathname } = useLocation();

  // Form Fields State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState<"pawna" | "panshet">(
    preSelectedDestination || "pawna"
  );
  const [packageId, setPackageId] = useState<string>("");
  const [checkInDate, setCheckInDate] = useState("");
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [vegGuests, setVegGuests] = useState<number>(1);
  const [nonVegGuests, setNonVegGuests] = useState<number>(1);
  const [notes, setNotes] = useState("");



  // Filter packages based on selected destination
  const availablePackages = PACKAGES.filter((p) => p.destination === destination);

  // Auto-select first package if none selected or on destination change
  useEffect(() => {
    if (preSelectedDestination) {
      setDestination(preSelectedDestination);
    }
  }, [preSelectedDestination]);

  useEffect(() => {
    const pkgs = PACKAGES.filter((p) => p.destination === destination);
    if (pkgs.length > 0) {
      const match = pkgs.find((p) => p.id === packageId);
      if (!match) {
        setPackageId(pkgs[0].id);
      }
    } else {
      setPackageId("");
    }
  }, [destination, packageId]);

  // Handle diet constraints on guest sliders change
  useEffect(() => {
    if (guestsCount < vegGuests + nonVegGuests) {
      setVegGuests(guestsCount);
      setNonVegGuests(0);
    }
  }, [guestsCount, vegGuests, nonVegGuests]);

  const selectedPackage =
    PACKAGES.find((p) => p.id === packageId) || availablePackages[0];

  // Price calculations
  const priceExponent = selectedPackage ? selectedPackage.pricing[0].price : 1290;
  const originalExponent = selectedPackage
    ? selectedPackage.pricing[0].price
    : 1990;

  const baseCost = priceExponent * guestsCount;
  const originalCost = originalExponent * guestsCount;
  const discountSavings = originalCost - baseCost;
  const totalCost = baseCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim()) {
      alert("Please fill your name, phone, and email completely.");
      return;
    }

    if (!checkInDate) {
      alert("Please select a check-in date.");
      return;
    }

    const selectedDate = new Date(checkInDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert("Please select a current or future check-in date.");
      return;
    }

    if (vegGuests + nonVegGuests !== guestsCount) {
      alert(`Meals preference count must sum up to exactly ${guestsCount}.`);
      return;
    }

    const inquiryID = `CAMP-${Math.floor(
      100000 + Math.random() * 900000
    )}`;

    const destName =
      destination === "pawna"
        ? "Pawna Lake Camping"
        : "Panshet Valley Camping";

    const message = `Hello Camp Buddy Resorts! 👋

I'm interested in booking a camping stay and would like to check availability.

📍 Destination: ${destName}
📦 Package: ${selectedPackage?.name || "Premium Camping Stay"}
📅 Check-in Date: ${checkInDate}

👥 Guests: ${guestsCount}
🥗 Veg Meals: ${vegGuests}
🍗 Non-Veg Meals: ${nonVegGuests}

💰 Estimated Package Cost: ₹${totalCost}

👤 My Details:
Name: ${name}
Phone: +91 ${phone}
Email: ${email}

${notes ? `📝 Special Requests: ${notes}` : ""}

🔑 Reference ID: ${inquiryID}

Please let me know if this package is available for the selected date and the next steps for booking. Looking forward to hearing from you. 😊

Thank you!
`;

    const whatsappUrl = `https://wa.me/918459154887?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };



  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCheckInDate("");
    setGuestsCount(2);
    setVegGuests(1);
    setNonVegGuests(1);
    setNotes("");
  };

  return (
    <section id="booking-section" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold font-mono tracking-[0.2em] text-orange-600 uppercase">
            EASY SINGLE-STEP BOOKING CALCULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-stone-900 tracking-tight mt-2">
            Calculate & Reserve Your Stay
          </h2>
          <p className="text-sm text-stone-600 mt-4 max-w-xl mx-auto leading-relaxed">
            Configure your lakeside or mountain backwater trip. Enter details on a single page, review live tariff estimations directly, and book immediately.
          </p>
        </div>

        {/* 2-Column Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* LEFT COL: Why Book with Camp Buddy & Guarantees */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            <div className="bg-white p-8 rounded-[32px] border border-stone-200 shadow-xs">
              <span className="text-[10px] font-mono uppercase bg-orange-50 text-orange-850 px-3 py-1 rounded-full font-bold">
                Online Rate Guarantee
              </span>
              <h3 className="text-xl font-sans font-black text-stone-900 mt-3 mb-5">
                Why Reserve Your Campsite Online?
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-orange-50 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-orange-100">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-extrabold text-stone-900">
                      105% Guarded Slots
                    </h4>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                      Lakeside properties fill up fast on weekends. Advance bookings ensure physical tents and pristine mattresses are pre-allocated automatically.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-orange-50 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-orange-100">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-extrabold text-stone-900">
                      Flexible 50% Deposit
                    </h4>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                      Only 50% advance locks your camping dates. The remaining tariff can be paid at check-in reception.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-orange-50 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-orange-100">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-extrabold text-stone-900">
                      Hygienic Buffet Food
                    </h4>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                      Meals are drafted specifically based on your dietary mix (Vegetarian and Non-Vegetarian counts). Sourced organically.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-orange-50 text-orange-600 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-orange-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-extrabold text-stone-900">
                      Zero Risk Flight Reschedules
                    </h4>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                      Reschedule your booking free of charge up to 4 days prior. Worry-free plan adjustments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Helpline quick-reach */}
            <div className="bg-orange-950/5 border border-orange-100 rounded-3xl p-6 flex flex-col sm:flex-row lg:flex-col justify-between items-start sm:items-center lg:items-start gap-4">
              <div>
                <p className="text-[10px] font-mono text-orange-700 font-extrabold uppercase">
                  Need Corporate / Event Pricing?
                </p>
                <p className="text-xs font-sans font-bold text-stone-800 mt-1">
                  We customize larger family/team packages with custom rates.
                </p>
              </div>
              <a
                href="tel:+918459154887"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-mono font-bold px-4 py-3 rounded-xl transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>

          {/* RIGHT COL: Single-Page Interactive Form Component */}
          <div className="lg:col-span-8 bg-white rounded-[36px] border border-stone-200 shadow-md p-6 sm:p-10 relative overflow-hidden">
            {/* Top color strap */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />


            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-orange-600 animate-pulse" />
                <span className="text-[10px] font-mono tracking-wider text-orange-600 font-bold uppercase">
                  All-In-One Draft Slip Calc
                </span>
              </div>
              <h3 className="text-2xl font-sans font-black text-stone-900 tracking-tight">
                Instant Reservations Desk
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                No multiple steps or confusing taps. Enter your specifications below to calculate real time rate splits.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                {/* BLOCK 1: DESTINATION & STAY LEVEL */}
                <div className="bg-stone-50 p-5 rounded-2.5xl border border-stone-200 space-y-4">
                  <span className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider">
                    1. Destination & Stay Level
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-stone-550 uppercase mb-1.5">
                        Choose Stay Ground
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setDestination("pawna")}
                          className={`py-3 px-3 rounded-xl text-xs font-sans font-black text-center border cursor-pointer transition-all ${destination === "pawna"
                            ? "bg-orange-50 border-orange-500 text-orange-800 font-bold" : pathname.includes("panshet-camping") && destination === "panshet" ? "bg-gray-100 text-gray-500 cursor-not-allowed opacity-60"
                              : "bg-white border-stone-200 text-stone-500 hover:text-stone-800"
                            }`}
                          disabled={pathname.includes("panshet-camping") && destination === "panshet"}
                        >
                          Pawna Lonavala
                        </button>
                        <button
                          type="button"
                          onClick={() => setDestination("panshet")}
                          className={`py-3 px-3 rounded-xl text-xs font-sans font-black text-center border cursor-pointer transition-all ${destination === "panshet"
                            ? "bg-orange-50 border-orange-500 text-orange-800 font-bold" : pathname.includes("pawna-lake-camping") && destination === "pawna" ? "bg-gray-100 text-gray-500 cursor-not-allowed opacity-60"
                              : "bg-white border-stone-200 text-stone-500 hover:text-stone-800"
                            }`}
                          disabled={pathname.includes("pawna-lake-camping") && destination === "pawna"}
                        >
                          Panshet Pune
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-stone-550 uppercase mb-1.5">
                        Stay Category Tier
                      </label>
                      <div className="relative">
                        <select
                          value={packageId}
                          onChange={(e) => setPackageId(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-850 focus:outline-none focus:border-orange-500 appearance-none cursor-pointer font-sans font-bold"
                        >
                          {availablePackages.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} (₹{p.pricing[0].price}/head)
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
                          <svg
                            className="fill-current h-4 w-4"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                          </svg>

                        </div>
                      </div>
                    </div>
                  </div>

                  {selectedPackage && (
                    <div className="bg-white border border-stone-150 rounded-xl p-4 text-[11px] leading-relaxed">
                      <p className="font-extrabold text-stone-800 font-sans border-b border-stone-100 pb-1.5 mb-2 flex items-center justify-between">
                        <span>{selectedPackage.name} Summary Inclusions</span>
                        <span className="text-orange-700 font-mono font-black">
                          ₹{selectedPackage.pricing[0].price}/person
                        </span>
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-stone-600">
                        <p>• Tent Accommodation: {selectedPackage.category}</p>
                        <p>• Built Occupancy: {selectedPackage.occupancy}</p>
                        <p>
                          • Schedule: {"4: 00 PM"} check-in,{" "}
                          {"11: 00 AM"} out
                        </p>
                        <p>
                          • Meals: {selectedPackage.meals[1] || selectedPackage.meals[0]} (Tea,
                          Snacks, BBQ, Dinner, Breakfast)
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* BLOCK 2: CALENDAR & GUEST GROUP */}
                <div className="bg-stone-50 p-5 rounded-2.5xl border border-stone-200 space-y-4">
                  <span className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider">
                    2. Date & Guest Composition
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block text-[10px] font-mono text-stone-500 mb-1.5 uppercase">
                        Target check-in date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 w-4.5 h-4.5" />
                        <input
                          type="date"
                          required
                          value={checkInDate}
                          onChange={(e) => setCheckInDate(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-stone-850 font-sans focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-1.5">
                        <label className="block text-[10px] font-mono text-stone-500 uppercase">
                          Number of Adult Guests
                        </label>
                        <span className="text-xs font-black font-mono text-orange-700 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200/50">
                          {guestsCount} Adults
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(Number(e.target.value))}
                        className="w-full mt-2 h-1.5 accent-orange-600 bg-stone-200 rounded-lg cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-stone-150">
                    <span className="block text-[9px] uppercase font-mono text-stone-400 font-bold mb-2">
                      Food Dietary split (Total Veg + Non-veg must exact {guestsCount})
                    </span>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-stone-605 font-mono mb-1">
                          Vegetarian meals
                        </label>
                        <input
                          type="number"
                          min="0"
                          max={guestsCount}
                          value={vegGuests}
                          onChange={(e) =>
                            setVegGuests(Math.min(guestsCount, Number(e.target.value)))
                          }
                          className="bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-xs w-full text-stone-850 font-bold focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-stone-605 font-mono mb-1">
                          Non-veg meals
                        </label>
                        <input
                          type="number"
                          min="0"
                          max={guestsCount}
                          value={nonVegGuests}
                          onChange={(e) =>
                            setNonVegGuests(Math.min(guestsCount, Number(e.target.value)))
                          }
                          className="bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-xs w-full text-stone-850 font-bold focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    {vegGuests + nonVegGuests !== guestsCount && (
                      <div className="text-red-500 text-[10px] mt-2 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>
                          Diet combinations must balance equivalent to total ({guestsCount})
                          travelers.
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* BLOCK 3: CONTACT CREDENTIALS */}
                <div className="bg-stone-50 p-5 rounded-2.5xl border border-stone-200 space-y-4">
                  <span className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider">
                    3. Contact Coordinates
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-stone-550 uppercase mb-1">
                        Primary Guest Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Rahul Deshmukh"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-stone-850 focus:outline-none focus:border-orange-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-stone-550 uppercase mb-1">
                        Active WhatsApp Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500 font-mono text-xs font-bold">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          placeholder="9876543210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded-xl pl-12 pr-4 py-3 text-xs sm:text-sm text-stone-850 focus:outline-none focus:border-orange-500 font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-stone-550 uppercase mb-1">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-stone-850 focus:outline-none focus:border-orange-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-stone-550 uppercase mb-1">
                        Notes / Custom request (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Jain meals, shared transport, early checkout, etc."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-3 text-xs text-stone-850 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Calculated Invoice slip in real time */}
                <div className="bg-stone-50 rounded-2.5xl p-5 border border-stone-200 flex flex-col gap-2 font-sans text-xs text-stone-605">
                  <div className="flex items-center gap-1.5 text-[10px] text-stone-500 font-mono uppercase mb-2 tracking-wider">
                    <Calculator className="w-4.5 h-4.5 text-orange-600" />
                    <span className="font-extrabold">Online quotation breakdown</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Rate base (Per traveler):</span>
                    <span className="font-mono">₹{priceExponent}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Group Subtotal ({guestsCount} adults):</span>
                    <span className="font-mono">₹{baseCost}</span>
                  </div>

                  {discountSavings > 0 && (
                    <div className="flex justify-between text-orange-600 font-bold">
                      <span>Lakeside Direct Campaign Discount:</span>
                      <span className="font-mono font-black">-₹{discountSavings}</span>
                    </div>
                  )}



                  <div className="border-t border-stone-200 mt-3 pt-3 flex justify-between text-sm items-baseline">
                    <span className="font-black text-stone-900 text-sm">Estimated Total Cost:</span>
                    <div className="text-right">
                      <span className="text-2xl font-black font-mono text-orange-600">
                        ₹{totalCost}
                      </span>
                      <p className="text-[9px] text-stone-400 font-mono -mt-1 font-semibold">
                        Only 50% UPI advance is required to lock reservation slot
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit / Proceed controllers */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-sans font-black text-xs sm:text-sm py-4 rounded-xl cursor-pointer shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Submit Inquiry & Generate Voucher</span>
                    <CheckCircle className="w-5 h-5 text-white animate-pulse" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
