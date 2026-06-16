import { AlertCircle, Calendar, Check, Copy, MessageSquare, Printer, Trash2, Users } from "lucide-react";
import { useState } from "react";
import { BookingInquiry } from "../types";

interface MyBookingsProps {
  inquiries: BookingInquiry[];
  removeInquiry: (id: string) => void;
  setCurrentPage: (page: string) => void;
  openBookingWithParams: () => void;
}

export default function MyBookings({
  inquiries,
  removeInquiry,
  setCurrentPage,
  openBookingWithParams
}: MyBookingsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyIdToClipboard = (id: string, name: string, packageTitle: string, cost: number, date: string) => {
    const summary = `My Camp Buddy Reservation:\nInquiry ID: ${id}\nName: ${name}\nPackage: ${packageTitle}\nDate: ${date}\nEstimated Price: ₹${cost}`;
    navigator.clipboard.writeText(summary);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = (inq: BookingInquiry) => {
    // Elegant temporary printing layout
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Popup blocker prevented opening printable voucher. Please enable popups!");
      return;
    }
    const destName = inq.destination === "pawna" ? "Pawna Lake Camping, Lonavala" : "Panshet Valley Camping, Velhe, Pune";
    
    printWindow.document.write(`
      <html>
        <head>
          <title>Camp Buddy - Booking Voucher ${inq.id}</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1c1917; padding: 40px; line-height: 1.6; }
            .badge { background: #dbeafe; color: #1e40af; border-radius: 9999px; padding: 4px 12px; font-size: 11px; font-weight: bold; text-transform: uppercase; }
            .header { border-bottom: 2px solid #e7e5e4; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; }
            h1 { margin: 0; color: #ea580c; font-size: 28px; font-weight: 850; text-transform: uppercase; letter-spacing: -0.02em; }
            h3 { color: #0f172a; margin-top: 0; font-size: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; }
            .detail-container { display: grid; grid-template-cols: 1fr 1fr; gap: 20px; border: 1px solid #e7e5e4; border-radius: 12px; padding: 24px; background: #fafaf9; }
            .label { font-size: 11px; text-transform: uppercase; color: #78716c; font-weight: 700; letter-spacing: 0.05em; }
            .value { font-size: 15px; color: #1c1917; font-weight: 500; margin-top: 4px; }
            .disclaimer { font-size: 12px; color: #78716c; margin-top: 40px; border-top: 1px dashed #e7e5e4; padding-top: 20px; }
            .wa-cta { margin-top: 30px; background: #ea580c; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-flex; align-items: center; }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <h1>Camp Buddy Camping Resorts</h1>
              <span style="font-size:12px; color:#ea580c; font-weight:bold; letter-spacing:0.1em; text-transform:uppercase;">Reservation Voucher Desk</span>
            </div>
            <span class="badge">Inquiry Active</span>
          </div>
          
          <h3>Booking Code: ${inq.id}</h3>
          
          <div class="detail-container">
            <div>
              <div class="label">Customer Name</div>
              <div class="value">${inq.name}</div>
            </div>
            <div>
              <div class="label">Contact Mobile</div>
              <div class="value">+91 ${inq.phone}</div>
            </div>
            <div>
              <div class="label">Camp Grounds</div>
              <div class="value">${destName}</div>
            </div>
            <div>
              <div class="label">Target Check-In Date</div>
              <div class="value">${inq.checkInDate}</div>
            </div>
            <div>
              <div class="label">Guest Statistics</div>
              <div class="value">${inq.guestsCount} Adults (${inq.vegGuests} Veg / ${inq.nonVegGuests} Non-veg Meals)</div>
            </div>
            <div>
              <div class="label">Total Paid (Estimate)</div>
              <div class="value" style="font-size:20px; font-weight:800; color:#ea580c;">₹${inq.totalCost}</div>
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

  const getWhatsAppURL = (inq: BookingInquiry) => {
    const destName = inq.destination === "pawna" ? "Pawna Lake Camping" : "Panshet Valley Camping";
    const msg = `Hello! I would like to finalize my booking reservation.

📍 DESTINATION: ${destName}
📅 CHECK-IN DATE: ${inq.checkInDate}
📦 PACKAGE STYLE: ${inq.packageName}
👥 GUESTS GROUP: ${inq.guestsCount} adults (${inq.vegGuests} Veg, ${inq.nonVegGuests} Non-veg)
💳 TOTAL ESTIMATED COST: ₹${inq.totalCost}
🔑 RESERVATION ID: ${inq.id}`;

    return `https://wa.me/918459154887?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="my-bookings-main-section" className="py-24 bg-white text-stone-900 min-h-[80vh] pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold font-mono tracking-[0.2em] text-orange-600 uppercase">
            Inquiry desk & Reservation Voucher Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-stone-900 tracking-tight mt-2">
            My Booking Inquiries
          </h2>
          <p className="text-sm text-stone-600 mt-4 max-w-xl mx-auto leading-relaxed">
            Review your previously calculated camping proposals. Real-time updates, printable slip formats, and direct WhatsApp support cells to complete transfers.
          </p>
        </div>

        {inquiries.length > 0 ? (
          <div className="space-y-8 max-w-3xl mx-auto">
            {inquiries.map((inq) => {
              const matchesPawna = inq.destination === "pawna";
              return (
                <div
                  id={`inquiry-card-${inq.id}`}
                  key={inq.id}
                  className="bg-stone-50 border border-stone-200 rounded-[28px] p-6 sm:p-8 shadow-sm relative overflow-hidden"
                >
                  {/* Background layout decoration */}
                  <div className="absolute top-0 right-0 bg-orange-600 text-white font-mono text-[9px] font-black px-4 py-1 uppercase rounded-bl-xl shadow-xs">
                    Inquiry Active
                  </div>

                  {/* Header metadata */}
                  <div className="flex flex-wrap items-baseline gap-2 mb-3 text-stone-900">
                    <span className="text-stone-500 text-xs font-mono uppercase">Reservation Ref Code:</span>
                    <span className="font-mono font-bold text-sm text-stone-900 flex items-center gap-1.5 animate-pulse-slow">
                      <span>{inq.id}</span>
                      <button
                        onClick={() => copyIdToClipboard(inq.id, inq.name, inq.packageName, inq.totalCost, inq.checkInDate)}
                        className="text-stone-400 hover:text-stone-800 p-1 cursor-pointer transition-colors"
                        title="Copy voucher reference"
                      >
                        {copiedId === inq.id ? (
                          <Check className="w-3.5 h-3.5 text-orange-600 font-bold" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-sans font-extrabold text-stone-900 mb-1">
                    {matchesPawna ? "Pawna Lake Camping Stay" : "Panshet Backwaters Luxury Stay"}
                  </h3>
                  <p className="text-xs text-stone-550 mb-6 font-semibold">Selected Tier: {inq.packageName}</p>

                  <div className="border-t border-dashed border-stone-200 my-4" />

                  {/* Booking specifics details grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-stone-605 font-sans mb-6">
                    <div>
                      <span className="block text-[10px] text-stone-400 font-mono uppercase mb-1">Registered To</span>
                      <p className="font-bold text-stone-900 truncate">{inq.name}</p>
                      <p className="text-stone-500 text-[11px] font-mono mt-0.5">+91 {inq.phone}</p>
                    </div>

                    <div>
                      <span className="block text-[10px] text-stone-400 font-mono uppercase mb-1">Check-In Date</span>
                      <p className="font-bold text-stone-900 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-orange-600" />
                        <span>{inq.checkInDate}</span>
                      </p>
                    </div>

                    <div>
                      <span className="block text-[10px] text-stone-400 font-mono uppercase mb-1">Group Size / Diet</span>
                      <p className="font-bold text-stone-900 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-orange-600" />
                        <span>{inq.guestsCount} Adults</span>
                      </p>
                      <p className="text-[10px] text-stone-500 mt-0.5">{inq.vegGuests} Veg | {inq.nonVegGuests} Non-veg</p>
                    </div>

                    <div>
                      <span className="block text-[10px] text-stone-400 font-mono uppercase mb-1">Calculated Price</span>
                      <p className="font-black text-orange-600 text-lg font-mono">₹{inq.totalCost}</p>
                      <p className="text-[9px] text-stone-500 -mt-0.5 font-mono">5% GST Invoice incl.</p>
                    </div>
                  </div>

                  {inq.notes && (
                    <div className="bg-white p-3 rounded-xl border border-stone-200 text-[11px] text-stone-600 font-sans mb-6">
                      <span className="font-bold text-stone-800">My Special Requests:</span> "{inq.notes}"
                    </div>
                  )}

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center gap-4 border-t border-stone-200 pt-5 mt-4">
                    {/* Primary complete booking */}
                    <a
                      href={getWhatsAppURL(inq)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 min-w-[200px] bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-sans font-extrabold text-xs sm:text-sm py-3 px-5 rounded-xl text-center shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4.5 h-4.5" />
                      <span>Request Booking on WhatsApp</span>
                    </a>

                    {/* Print Voucher */}
                    <button
                      onClick={() => handlePrint(inq)}
                      className="bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 font-sans font-bold text-xs p-3 rounded-xl cursor-pointer flex items-center gap-1.5 transition-colors"
                      title="Download printable reservation voucher slip"
                    >
                      <Printer className="w-4 h-4" />
                      <span className="hidden sm:inline">Voucher Slip</span>
                    </button>

                    {/* Cancel booking */}
                    <button
                      onClick={() => {
                        if (confirm("Are you sure you want to cancel this booking inquiry draft? This action is irreversible.")) {
                          removeInquiry(inq.id);
                        }
                      }}
                      className="p-3 text-stone-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl cursor-pointer transition-all"
                      title="Delete inquiry draft record"
                    >
                      <Trash2 className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* EMPTY BOOKINGS PLACEHOLDER STATE */
          <div id="empty-bookings-placeholder" className="text-center py-20 bg-stone-50 border border-stone-200 rounded-[28px] max-w-xl mx-auto shadow-sm">
            <div className="bg-white w-16 h-16 border border-stone-200 text-stone-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xs">
              <AlertCircle className="w-8 h-8 text-stone-500" />
            </div>
            <h3 className="text-xl font-sans font-extrabold text-stone-850">No Booking Inquiries Found</h3>
            <p className="text-xs text-stone-500 px-8 mt-2 leading-relaxed font-sans font-medium">
              You haven't initiated any reservation calculations or package drafts yet. Browse our premium plans, configure your schedule, and check cost structures.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setCurrentPage("packages")}
                className="bg-orange-600 hover:bg-orange-700 text-white font-sans font-bold text-xs px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                Explore Camping Packages
              </button>

              <button
                onClick={openBookingWithParams}
                className="bg-white hover:bg-stone-100 text-stone-700 font-sans font-semibold text-xs px-5 py-3.5 rounded-xl border border-stone-200 cursor-pointer shadow-xs"
              >
                Calculate Free Quote
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
