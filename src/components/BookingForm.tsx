import {
  AlertCircle,
  Calculator,
  Calendar,
  Check,
  CheckCircle,
  Copy,
  MapPin,
  Phone,
  PhoneCall,
  Sparkles,
  X
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { BookingInquiry } from "../types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PACKAGES } from "../refactored-packages";

interface BookingFormProps {
  open: boolean;
  onClose: () => void;
  destinationParam?: "pawna" | "panshet";
  packageIdParam?: string;
}

export default function BookingForm({
  open,
  onClose,
  destinationParam,
  packageIdParam,
}: BookingFormProps) {
  // Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState<"pawna" | "panshet">(
    destinationParam ? destinationParam : "pawna"
  );
  const [packageId, setPackageId] = useState<string>(packageIdParam || "");
  const [checkInDate, setCheckInDate] = useState("");
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [vegGuests, setVegGuests] = useState<number>(1);
  const [nonVegGuests, setNonVegGuests] = useState<number>(1);
  const [notes, setNotes] = useState("");

  // UI success states
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<BookingInquiry | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Filter packages based on selected destination
  const availablePackages = PACKAGES.filter((p) => p.destination === destination);

  // Adjust packageId if destination changes
  // useEffect(() => {
  //   if (destinationParam && !packageIdParam) {
  //     setDestination(destinationParam);
  //     const pkgs = PACKAGES.filter((p) => p.destination === destinationParam);
  //     if (pkgs.length > 0) setPackageId(pkgs[0].id);
  //   } else if (packageIdParam) {
  //     const pkg = PACKAGES.find((p) => p.id === packageIdParam);
  //     if (pkg) {
  //       setDestination(pkg.destination);
  //       setPackageId(pkg.id);
  //     }
  //   } else {
  //     const firstPkg = PACKAGES.find((p) => p.destination === destination);
  //     if (firstPkg) setPackageId(firstPkg.id);
  //   }
  // }, [destination, destinationParam, packageIdParam]);

  useEffect(() => {
    if (!open) return;

    if (packageIdParam) {
      const pkg = PACKAGES.find(
        (p) => p.id === packageIdParam
      );

      if (pkg) {
        setDestination(pkg.destination as "pawna" | "panshet");
        setPackageId(pkg.id);
      }

      return;
    }

    if (destinationParam) {
      setDestination(destinationParam);

      const firstPkg = PACKAGES.find(
        (p) => p.destination === destinationParam
      );

      if (firstPkg) {
        setPackageId(firstPkg.id);
      }

      return;
    }

    const firstPkg = PACKAGES.find(
      (p) => p.destination === destination
    );

    if (firstPkg) {
      setPackageId(firstPkg.id);
    }
  }, [open]);


  useEffect(() => {
    const firstPkg = PACKAGES.find(
      (p) => p.destination === destination
    );

    if (
      firstPkg &&
      !availablePackages.some((p) => p.id === packageId)
    ) {
      setPackageId(firstPkg.id);
    }
  }, [destination]);

  // Adjust food proportions on guests slider shift
  useEffect(() => {
    if (guestsCount < vegGuests + nonVegGuests) {
      setVegGuests(guestsCount);
      setNonVegGuests(0);
    }
  }, [guestsCount, vegGuests, nonVegGuests]);

  // Find selected package details
  const selectedPackage =
    PACKAGES.find((p) => p.id === packageId) || availablePackages[0];

  // Dynamic cost math
  const priceExponent = selectedPackage ? selectedPackage.pricing[0].price : 1290;
  const originalExponent = selectedPackage
    ? selectedPackage.pricing[0].price
    : 1990;

  const baseCost = priceExponent * guestsCount;
  const originalCost = originalExponent * guestsCount;
  const discountSavings = originalCost - baseCost;
  const gstAmount = Math.round(baseCost * 0.05); // 5% GST
  const totalCost = baseCost + gstAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      alert("Please fill your name, phone and email completely.");
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
      alert(`Meal counts must total exactly ${guestsCount} guests.`);
      return;
    }

    // Prepare full inquiry model
    const inquiryID = "CAMP-" + Math.floor(100000 + Math.random() * 900000);
    const newInquiry: BookingInquiry = {
      id: inquiryID,
      name,
      phone,
      email,
      destination,
      packageId: selectedPackage?.id || "",
      packageName: selectedPackage?.name || "Premium Camping Stay",
      guestsCount,
      vegGuests,
      nonVegGuests,
      checkInDate,
      notes,
      totalCost,
      status: "pending",
      createdAt: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
      })
    };

    setSubmittedInquiry(newInquiry);
    setIsSubmitted(true);
  };

  const getWhatsAppURL = () => {
    if (!submittedInquiry) return "#";
    const destName =
      submittedInquiry.destination === "pawna"
        ? "Pawna Lake Camping"
        : "Panshet Valley Camping";
    const msg = `Hello Pawna & Panshet Campings! I have generated a booking inquiry.

📍 STAY TYPE: ${destName}
📦 PACKAGE SELECTED: ${submittedInquiry.packageName}
📅 DATE OF CHECK-IN: ${submittedInquiry.checkInDate}
👥 TOTAL GUESTS: ${submittedInquiry.guestsCount} (${submittedInquiry.vegGuests} Veg, ${submittedInquiry.nonVegGuests} Non-veg)
💳 ESTIMATED RATE (INCL. GST): ₹${submittedInquiry.totalCost}
🔑 REFERENCE CODE: ${submittedInquiry.id}

My Name: ${submittedInquiry.name}
Phone: ${submittedInquiry.phone}

Please confirm slot availability so I can make standard 50% secured UPI booking deposit. Thank you!`;

    return `https://wa.me/918459154887?text=${encodeURIComponent(msg)}`;
  };

  const copyReceiptSummary = () => {
    if (!submittedInquiry) return;
    const destName =
      submittedInquiry.destination === "pawna"
        ? "Pawna Lake Camping"
        : "Panshet Valley Camping";
    const summary = `Campsite Reservation Inquiry: ${submittedInquiry.id} 
Stay: ${destName} 
Package: ${submittedInquiry.packageName} 
Guests: ${submittedInquiry.guestsCount} 
Date: ${submittedInquiry.checkInDate}
Cost: ₹${submittedInquiry.totalCost}`;

    navigator.clipboard.writeText(summary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handlePrint = () => {
    if (!submittedInquiry) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Popup blocker prevented opening printable voucher. Please enable popups!");
      return;
    }
    const destName =
      submittedInquiry.destination === "pawna"
        ? "Pawna Lake Camping, Lonavala"
        : "Panshet Valley Camping, Velhe, Pune";

    printWindow.document.write(`
      <html>
        <head>
          <title>Camp Buddy - Booking Voucher ${submittedInquiry.id}</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1c1917; padding: 40px; line-height: 1.6; }
            .badge { background: #dbeafe; color: #1e40af; border-radius: 9999px; padding: 4px 12px; font-size: 11px; font-weight: bold; text-transform: uppercase; }
            .header { border-bottom: 2px solid #e7e5e4; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; }
            h1 { margin: 0; color: #064e3b; font-size: 28px; font-weight: 850; text-transform: uppercase; letter-spacing: -0.02em; }
            h3 { color: #0f172a; margin-top: 0; font-size: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; }
            .detail-container { display: grid; grid-template-cols: 1fr 1fr; gap: 20px; border: 1px solid #e7e5e4; border-radius: 12px; padding: 24px; background: #fafaf9; }
            .label { font-size: 11px; text-transform: uppercase; color: #78716c; font-weight: 700; letter-spacing: 0.05em; }
            .value { font-size: 15px; color: #1c1917; font-weight: 500; margin-top: 4px; }
            .disclaimer { font-size: 12px; color: #78716c; margin-top: 40px; border-top: 1px dashed #e7e5e4; padding-top: 20px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <h1>Camp Buddy Camping Resorts</h1>
              <span style="font-size:12px; color:#15803d; font-weight:bold; letter-spacing:0.1em; text-transform:uppercase;">Reservation Voucher Desk</span>
            </div>
            <span class="badge">Inquiry Active</span>
          </div>
          
          <h3>Booking Code: ${submittedInquiry.id}</h3>
          
          <div class="detail-container">
            <div>
              <div class="label">Customer Name</div>
              <div class="value">${submittedInquiry.name}</div>
            </div>
            <div>
              <div class="label">Contact Mobile</div>
              <div class="value">+91 ${submittedInquiry.phone}</div>
            </div>
            <div>
              <div class="label">Camp Grounds</div>
              <div class="value">${destName}</div>
            </div>
            <div>
              <div class="label">Target Check-In Date</div>
              <div class="value">${submittedInquiry.checkInDate}</div>
            </div>
            <div>
              <div class="label">Guest Statistics</div>
              <div class="value">${submittedInquiry.guestsCount} Adults (${submittedInquiry.vegGuests} Veg / ${submittedInquiry.nonVegGuests} Non-veg Meals)</div>
            </div>
            <div>
              <div class="label">Total Paid (Estimate)</div>
              <div class="value" style="font-size:20px; font-weight:800; color:#16a34a;">₹${submittedInquiry.totalCost}</div>
            </div>
          </div>

          <div class="disclaimer">
            <p><strong>Note:</strong> This is an online-calculated inquiry draft voucher. To officially reserve physical sleeping beds, trigger the WhatsApp cell support with this voucher to finalize your 50% secured advance UPI deposit. The remaining 50% must be paid directly on check-in day.</p>
          </div>

          <div style="margin-top:40px; text-align:center;">
            <button onclick="window.print()" style="background:#022c22; color:white; border:none; padding:12px 24px; border-radius:8px; font-weight:bold; cursor:pointer;">Print This Voucher</button>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="p-0 gap-0 max-h-[90vh] overflow-hidden max-w-[95vw] md:min-w-3xl"
      >
        <ScrollArea className={"gap-0 max-h-[90vh] max-w-[95vw] md:min-w-3xl"}>


          <DialogHeader className="sr-only">
            <DialogTitle>Camping Booking</DialogTitle>
            <DialogDescription>
              Book your camping experience.
            </DialogDescription>
          </DialogHeader>

          <div className="relative w-full bg-white text-stone-900 h-full overflow-y-scroll">
            {!isSubmitted ? (
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-orange-600 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-wider text-orange-600 font-bold uppercase">
                    Quick Single-Step Booking
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-stone-900 tracking-tight">
                  Instantly Calculate & Book
                </h3>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  Fill out your travel specifications. Dynamic pricing and inclusions will load instantly lower down.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  {/* SECTION 1: DESTINATION & PACKAGE SELECT */}
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-4">
                    <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      <span className="text-xs font-mono font-bold text-stone-800 uppercase">
                        1. Choose Camp & package style
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div
                        // type="button"
                        // onClick={() => setDestination("pawna")}
                        onClick={() => {
                          setDestination("pawna");

                          const firstPkg = PACKAGES.find(
                            (p) => p.destination === "pawna"
                          );

                          if (firstPkg) {
                            setPackageId(firstPkg.id);
                          }
                        }}
                        className={`py-3 px-4 rounded-xl text-xs font-sans font-bold text-center border cursor-pointer transition-all ${destination === "pawna"
                          ? "bg-orange-50 border-orange-500 text-orange-800"
                          : "bg-white border-stone-200 text-stone-500 hover:text-stone-800"
                          }`}
                      >
                        Pawna Lake (Lonavala)
                      </div>
                      <div
                        // type="button"
                        // onClick={() => setDestination("panshet")}
                        onClick={() => {
                          setDestination("panshet");

                          const firstPkg = PACKAGES.find(
                            (p) => p.destination === "panshet"
                          );

                          if (firstPkg) {
                            setPackageId(firstPkg.id);
                          }
                        }}
                        className={`py-3 px-4 rounded-xl text-xs font-sans font-bold text-center border cursor-pointer transition-all ${destination === "panshet"
                          ? "bg-orange-50 border-orange-500 text-orange-800"
                          : "bg-white border-stone-200 text-stone-500 hover:text-stone-800"
                          }`}
                      >
                        Panshet Valley (Pune)
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <select
                          value={packageId}
                          onChange={(e) => setPackageId(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-850 focus:outline-none focus:border-orange-500 appearance-none cursor-pointer font-sans font-semibold"
                        >
                          {availablePackages.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} (₹{p.pricing[0].price}/person)
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
                          <svg
                            className="fill-current h-4 w-4"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.516 7.548a0.625 0.625 0 0 1 0.884 0L10 11.148l3.6-3.6a0.625 0.625 0 1 1 0.884 0l-4.042 4.042a0.625 0.625 0 0 1-0.884 0L5.516 8.432a0.625 0.625 0 0 1 0-0.884z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {selectedPackage && (
                      <div className="bg-white border border-stone-150 rounded-xl p-3 text-[11px] leading-relaxed">
                        <p className="font-extrabold text-stone-800 font-sans border-b border-stone-100 pb-1.5 mb-2 flex items-center justify-between">
                          <span>{selectedPackage.name} Key Features</span>
                          <span className="text-orange-700 font-mono font-black">
                            ₹{selectedPackage.pricing[0].price}/head
                          </span>
                        </p>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-stone-605">
                          <li>• Tent Type: {selectedPackage.category}</li>
                          <li>• Occupancy: {selectedPackage.occupancy}</li>
                          <li>• Access: {"3: 00 PM"} check-in</li>
                          <li className="truncate">
                            • Meals: {selectedPackage.meals[1] || selectedPackage.meals[0]}
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* SECTION 2: SCHEDULE & GUESTS COUNT */}
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-4">
                    <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span className="text-xs font-mono font-bold text-stone-800 uppercase">
                        2. Choose Dates & Guests list
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <label className="block text-[10px] font-mono text-stone-500 mb-1 uppercase">
                          Check-In Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
                          <input
                            type="date"
                            required
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                            className="w-full bg-white border border-stone-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-stone-850 focus:outline-none focus:border-orange-500 font-sans font-semibold"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <label className="block text-[10px] font-mono text-stone-500 uppercase">
                            How many adults?
                          </label>
                          <span className="text-xs font-black font-mono text-orange-700">
                            {guestsCount} Guests
                          </span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="25"
                          value={guestsCount}
                          onChange={(e) => setGuestsCount(Number(e.target.value))}
                          className="w-full mt-2 h-1.5 accent-orange-600 bg-stone-200 rounded-lg cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-3 border border-stone-150">
                      <p className="text-[9px] uppercase font-mono font-bold text-stone-400 mb-2">
                        Food Preferences Split (Must equal {guestsCount})
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] text-stone-605 font-mono mb-1">
                            Vegetarian Diet
                          </label>
                          <input
                            type="number"
                            min="0"
                            max={guestsCount}
                            value={vegGuests}
                            onChange={(e) =>
                              setVegGuests(Math.min(guestsCount, Number(e.target.value)))
                            }
                            className="bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs w-full text-stone-850 font-bold focus:outline-none focus:border-orange-500"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-stone-605 font-mono mb-1">
                            Non-Veg Diet
                          </label>
                          <input
                            type="number"
                            min="0"
                            max={guestsCount}
                            value={nonVegGuests}
                            onChange={(e) =>
                              setNonVegGuests(Math.min(guestsCount, Number(e.target.value)))
                            }
                            className="bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs w-full text-stone-850 font-bold focus:outline-none focus:border-orange-500"
                          />
                        </div>
                      </div>

                      {vegGuests + nonVegGuests !== guestsCount && (
                        <p className="text-[10px] text-rose-600 mt-2 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Meal totals must equate exactly {guestsCount}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* SECTION 3: CONTACT INFORMATION */}
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-4">
                    <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                      <Phone className="w-4 h-4 text-orange-600" />
                      <span className="text-xs font-mono font-bold text-stone-800 uppercase">
                        3. Contact Coordinates
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Deshmukh"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-850 focus:outline-none focus:border-orange-500 font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">
                          Mobile (WhatsApp)
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 opac-50 top-1/2 -translate-y-1/2 text-stone-500 font-mono text-[11px] font-bold">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            placeholder="9876543210"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-white border border-stone-200 rounded-xl pl-11 pr-3 py-2.5 text-xs text-stone-850 focus:outline-none focus:border-orange-500 font-sans"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rahul@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-850 focus:outline-none focus:border-orange-500 font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-stone-500 uppercase mb-1">
                          Special requests / diet (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="Anniversary banner, extra mattress, etc."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-850 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic bill calculations summary */}
                  <div className="bg-stone-100 rounded-2xl p-4 border border-stone-200 flex flex-col gap-2 shadow-xs font-sans text-xs text-stone-605">
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-500 font-mono uppercase mb-1 tracking-wider">
                      <Calculator className="w-4 h-4 text-orange-600" />
                      <span>Real-Time Bill Breakdown</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Base package tag:</span>
                      <span className="font-mono font-bold">₹{priceExponent}/head</span>
                    </div>

                    <div className="flex justify-between font-semibold text-stone-800">
                      <span>Group Tariff ({guestsCount} adults):</span>
                      <span className="font-mono">₹{baseCost}</span>
                    </div>

                    {discountSavings > 0 && (
                      <div className="flex justify-between text-orange-600 font-bold">
                        <span>Lakeside Direct Discount:</span>
                        <span className="font-mono">-₹{discountSavings}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-[11px]">
                      <span>Tourism Luxury GST Tax (5%):</span>
                      <span className="font-mono">₹{gstAmount}</span>
                    </div>

                    <div className="border-t border-stone-200 mt-2 pt-2.5 flex justify-between items-baseline">
                      <span className="font-black text-stone-900 text-sm">Estimated Total Rate:</span>
                      <div className="text-right">
                        <span className="text-xl font-black font-mono text-orange-600">
                          ₹{totalCost}
                        </span>
                        <p className="text-[9px] text-stone-500 font-mono -mt-0.5">
                          Only 50% UPI advance is required to secure draft dates
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* SUBMISSION CONTROL */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-sans font-black text-sm py-4 rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Submit Inquiry & Generate Voucher</span>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* SUCCESS INQUIRY RECEIPT FRAME */
              <div className="p-6 text-center bg-white text-stone-900">
                <div className="w-16 h-16 bg-orange-50 border border-orange-200 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xs">
                  <CheckCircle className="w-9 h-9" />
                </div>

                <h3 className="text-2xl font-sans font-extrabold text-stone-900 leading-tight">
                  Inquiry Calculated!
                </h3>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                  We have compiled your camping invoice proposal. To safeguard your booking dates, trigger the direct WhatsApp button below to lock slots in our physical registers.
                </p>

                <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 my-6 text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-amber-400 text-stone-950 font-mono text-[9px] font-black px-2.5 py-0.5 uppercase rounded-bl-xl">
                    Pending Confirmation
                  </div>

                  <span className="block text-[9px] uppercase font-mono text-stone-500">
                    Camp Reference Reservation
                  </span>
                  <span className="block font-sans font-mono font-bold text-sm text-stone-800 mt-0.5 flex items-center gap-2">
                    <span>{submittedInquiry?.id}</span>
                    <button
                      onClick={copyReceiptSummary}
                      className="text-stone-400 hover:text-stone-700 p-1 cursor-pointer"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-orange-600 font-bold" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </span>

                  <div className="border-t border-dashed border-stone-200 my-3.5" />

                  <ul className="space-y-1.5 text-xs text-stone-600 font-sans">
                    <li className="flex justify-between">
                      <span>Camp Location:</span>
                      <span className="text-stone-800 font-semibold">
                        {submittedInquiry?.destination === "pawna"
                          ? "Pawna Lake Dam"
                          : "Panshet Backwaters"}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Stay Option:</span>
                      <span
                        className="text-stone-800 font-semibold leading-none truncate max-w-[200px]"
                        title={submittedInquiry?.packageName}
                      >
                        {submittedInquiry?.packageName}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>In-Check Date:</span>
                      <span className="text-stone-800 font-semibold">
                        {submittedInquiry?.checkInDate}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Travelers registered:</span>
                      <span className="text-stone-800 font-semibold">
                        {submittedInquiry?.guestsCount} Adults
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Diet (Veg / Non-Veg):</span>
                      <span className="text-stone-800 font-semibold">
                        {submittedInquiry?.vegGuests}V / {submittedInquiry?.nonVegGuests}NV
                      </span>
                    </li>
                    <li className="border-t border-dashed border-stone-200 my-2 pt-2 flex justify-between font-bold text-stone-900">
                      <span>Total Payable:</span>
                      <span className="text-orange-700 font-mono font-extrabold text-base">
                        ₹{submittedInquiry?.totalCost}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <a
                    href={getWhatsAppURL()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-sans font-black py-4 rounded-xl text-center shadow-sm transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-5 h-5 shrink-0" />
                    <span>Lock Slots on WhatsApp Support</span>
                  </a>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handlePrint}
                      className="bg-stone-50 hover:bg-stone-100 text-stone-700 font-sans font-bold text-xs py-3 rounded-xl cursor-pointer"
                    >
                      Print Slip Voucher
                    </button>
                    <button
                      onClick={onClose}
                      className="bg-white hover:bg-stone-50 text-stone-500 border border-stone-200 font-sans font-semibold py-3 rounded-xl cursor-pointer transition-colors"
                    >
                      Return to Website
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
