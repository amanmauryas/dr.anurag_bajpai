"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import SEO from "@/components/SEO";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Schema Injection */}
      <SEO type="FAQ" data={faqs} />

      <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
        Frequently Asked Questions
      </h3>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-gray-800 dark:text-gray-250 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="h-5 w-5 text-medical shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-gray-400 shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                )}
              </button>
              
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-50 dark:border-gray-800/40 leading-relaxed bg-slate-50/20 dark:bg-slate-950/10">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
