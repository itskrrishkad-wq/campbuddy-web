import React, { useState } from "react";
import { Star, HelpCircle } from "lucide-react";
import { FAQS, TESTIMONIALS } from "../data";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQAndReviews() {
  // Frequently asked questions
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section id="faq-reviews-section" className="py-24 bg-stone-50 text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: Testimonials Review Grid */}
        <div id="reviews-sub-section" className="mb-24">
          <div className="text-center mb-16">
            <span className="text-xs font-bold font-mono tracking-[0.2em] text-orange-600 uppercase">
              REVIEWS FROM REAL CAMPERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-stone-900 tracking-tight mt-2">
              Our Guests Share Their Experience
            </h2>
            <p className="text-sm text-stone-600 mt-4 max-w-xl mx-auto leading-relaxed">
              Read authentic feedback regarding our lakeside camps safety, cleanliness of toilet blocks, BBQ quantities, and acoustic music programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((review) => {
              return (
                <div
                  id={`review-card-${review.id}`}
                  key={review.id}
                  className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Rating & Date */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-4 h-4 ${
                              s <= review.rating ? "fill-amber-400 text-amber-400" : "text-stone-250"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-mono text-stone-500">{review.date}</span>
                    </div>

                    {/* Stay details */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-orange-50 border border-orange-100 text-[10px] font-mono text-orange-700 font-extrabold uppercase mb-4">
                      <span>Stay Type: {review.destination} Camping</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans mb-8 italic">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Customer author profile */}
                  <div className="flex items-center gap-3.5 border-t border-stone-100 pt-5">
                    <img
                      id={`reviewer-avatar-${review.id}`}
                      src={review.avatar}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover border border-stone-200"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-sm font-sans font-bold text-stone-900">{review.name}</h4>
                      <p className="text-[11px] text-stone-500 font-mono">{review.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: Interactive FAQ Accordion */}
        <div id="faq-sub-section" className="border-t border-stone-200 pt-24">
          <div className="text-center mb-16">
            <span className="text-xs font-bold font-mono tracking-[0.2em] text-orange-600 uppercase">
              GOT QUESTIONS / ANSWERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-stone-900 tracking-tight mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-stone-600 mt-4 max-w-xl mx-auto leading-relaxed">
              Find instant, helpful answers concerning food menu preparations, deposit requirements, packing essentials, and network signals.
            </p>
          </div>

          {/* Accordion List */}
          <div id="faq-accordion-list" className="max-w-3xl mx-auto">
            <Accordion type="single" className="space-y-4">
              {FAQS.map((faq) => {
                return (
                  <AccordionItem
                    id={`faq-item-${faq.id}`}
                    key={faq.id}
                    value={faq.id}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all duration-200"
                  >
                    <AccordionTrigger className="w-full flex items-center justify-between px-6 py-5 cursor-pointer text-left focus:outline-none hover:no-underline hover:bg-stone-50/10 [&_[data-slot=accordion-trigger-icon]]:text-stone-400 [&_[data-slot=accordion-trigger-icon]]:mr-1">
                      <span className="font-sans font-bold text-sm sm:text-base text-stone-900 transition-colors flex items-center gap-2.5">
                        <HelpCircle className="w-4.5 h-4.5 text-orange-600 shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2 border-t border-stone-100 bg-stone-50/50 text-xs sm:text-sm text-stone-605 leading-relaxed font-sans">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>

      </div>
    </section>
  );
}
