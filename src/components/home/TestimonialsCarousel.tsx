"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, MessageSquare } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  relation: string;
  condition: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "We consulted Dr. Bajpai for our daughter's short stature. Under his guidance and growth hormone treatment, her height has improved significantly. He is extremely evidence-based and takes time to explain every protocol.",
    author: "Rohan & Megha Sharma",
    relation: "Parents of a 9-year-old patient",
    condition: "Growth Disorder & Short Stature",
    rating: 5,
  },
  {
    id: 2,
    text: "Dr. Anurag Bajpai is a blessing for Type 1 Diabetes management. His tech-enabled treatment plans, including continuous glucose monitors (CGM) and pump therapy, completely changed how we handle our son's glucose readings.",
    author: "Dr. Sandeep Verma",
    relation: "Pediatrician & Parent of a T1D teen",
    condition: "Type 1 Diabetes Care",
    rating: 5,
  },
  {
    id: 3,
    text: "We visited Regency clinic after receiving confusing advice elsewhere for thyroid deficiency in our newborn. Dr. Bajpai diagnosed congenital hypothyroidism immediately and started treatment. Our child is now 4, thriving and normal.",
    author: "Pooja Dwivedi",
    relation: "Mother of 4-year-old patient",
    condition: "Congenital Hypothyroidism",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[activeIndex];

  return (
    <div className="w-full max-w-4xl mx-auto" id="testimonials-widget">
      <div className="relative border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-100/50 dark:shadow-none overflow-hidden">
        {/* Decorative Quote Icon */}
        <Quote className="absolute top-8 right-8 w-24 h-24 text-slate-100 dark:text-slate-800/30 -z-0 pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Rating */}
          <div className="flex space-x-1">
            {[...Array(active.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-medium italic">
            "{active.text}"
          </blockquote>

          {/* Author Details */}
          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-6">
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{active.author}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{active.relation}</p>
            </div>
            <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-brand-50/50 dark:bg-brand-900/10 border border-brand-100/30">
              <MessageSquare className="w-3.5 h-3.5 text-brand-500 shrink-0" />
              <span className="text-[10px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
                {active.condition}
              </span>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-12 flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 active:scale-95 transition-all cursor-pointer animate-fade-in"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 active:scale-95 transition-all cursor-pointer animate-fade-in"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center space-x-1.5 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === i ? "w-6 bg-brand-500" : "bg-slate-300 dark:bg-slate-700"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
