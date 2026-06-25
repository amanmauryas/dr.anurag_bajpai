import React from "react";
import Link from "next/link";
import { ArrowRight, Star, Heart, Activity, Check } from "lucide-react";
import { specialtiesData } from "@/data/expertise";

export const metadata = {
  title: "Clinical Expertise | Pediatric Endocrine Services",
  description: "Explore the clinical specialties of Dr. Anurag Bajpai, including childhood diabetes, growth hormone deficiencies, thyroid disorders, and calcium metabolism.",
};

export default function ExpertisePage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-20">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-medical-light">Clinical Services</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">
            Clinical Expertise
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mt-2">
            Providing evidence-based assessment and personalized therapeutics for endocrine and metabolic diseases in infants, children, and teenagers.
          </p>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialtiesData.map((spec) => (
            <div
              key={spec.slug}
              className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold text-medical dark:text-medical-light bg-medical-ultra-light/50 dark:bg-medical-ultra-light/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  Specialty Care
                </span>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 hover:text-medical transition-colors">
                  {spec.title}
                </h2>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
                  {spec.description}
                </p>

                {/* Conditions Treated Checklist */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">
                    Conditions Evaluated
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
                    {spec.conditions.map((cond) => (
                      <li key={cond} className="flex gap-1.5 items-start">
                        <Check className="h-4 w-4 text-medical shrink-0 mt-0.5" />
                        <span>{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                <Link
                  href={`/expertise/${spec.slug}`}
                  className="text-sm font-bold text-primary dark:text-white hover:text-medical flex items-center gap-1.5 transition-colors"
                >
                  Explore Specialty & FAQs
                  <ArrowRight className="h-4 w-4" />
                </Link>
                
                <Link
                  href="/book"
                  className="text-xs font-semibold px-4 py-2 bg-slate-100 hover:bg-medical hover:text-white dark:bg-slate-800 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 rounded-full transition-all"
                >
                  Book Consult
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Support CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-primary dark:bg-primary-dark text-white rounded-3xl p-8 relative overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold">Unsure which specialty covers your child's symptoms?</h3>
            <p className="text-sm text-gray-300 max-w-xl">
              Browse our comprehensive diseases library of common hormones problems, or calculate your child's height velocity with our tools.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/conditions"
              className="px-5 py-2.5 bg-medical hover:bg-medical-light text-white text-xs font-bold rounded-full shadow transition-all whitespace-nowrap"
            >
              Conditions Library
            </Link>
            <Link
              href="/resources"
              className="px-5 py-2.5 border border-white/20 hover:bg-white/10 text-white text-xs font-bold rounded-full transition-all whitespace-nowrap"
            >
              Patient Resources
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
