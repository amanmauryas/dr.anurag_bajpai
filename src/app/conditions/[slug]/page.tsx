import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, CheckCircle2, ChevronRight, Info, AlertTriangle, ListChecks, HelpCircle } from "lucide-react";
import { conditionsData } from "@/data/conditions";
import FAQAccordion from "@/components/FAQAccordion";
import SEO from "@/components/SEO";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return conditionsData.map((cond) => ({
    slug: cond.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const condition = conditionsData.find((c) => c.slug === slug);
  if (!condition) return {};

  return {
    title: `${condition.name} in Children | Pediatric Endocrine Library`,
    description: condition.shortDesc,
  };
}

export default async function ConditionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const condition = conditionsData.find((c) => c.slug === slug);

  if (!condition) {
    notFound();
  }

  // Find related conditions in same category
  const relatedConditions = conditionsData
    .filter((c) => c.category === condition.category && c.slug !== slug)
    .slice(0, 5);

  return (
    <>
      <SEO type="MedicalCondition" data={condition} />

      <div className="bg-slate-50 dark:bg-slate-950 pb-20">
        
        {/* Banner */}
        <section className="bg-primary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/conditions"
              className="inline-flex items-center gap-1.5 text-xs text-medical-light font-bold uppercase tracking-wider mb-3 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Library
            </Link>
            <span className="text-xs font-bold text-medical-light block uppercase tracking-wider">
              {condition.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
              {condition.name}
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-3xl mt-2 leading-relaxed">
              {condition.shortDesc}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-10 bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm">
              
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-primary dark:text-white flex items-center gap-2">
                  <Info className="h-5.5 w-5.5 text-medical" />
                  Overview
                </h2>
                <p className="text-sm sm:text-base text-gray-650 dark:text-gray-350 leading-relaxed">
                  {condition.overview}
                </p>
              </div>

              {/* Symptoms */}
              <div className="space-y-4 border-t border-gray-100 dark:border-gray-800 pt-8">
                <h2 className="text-2xl font-extrabold text-primary dark:text-white flex items-center gap-2">
                  <ListChecks className="h-5.5 w-5.5 text-medical" />
                  Symptoms & Clues
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-gray-655 dark:text-gray-355">
                  {condition.symptoms.map((s, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="w-5 h-5 rounded-full bg-rose-50 dark:bg-rose-950/20 text-rose-500 dark:text-rose-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">!</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Causes */}
              <div className="space-y-4 border-t border-gray-100 dark:border-gray-800 pt-8">
                <h2 className="text-2xl font-extrabold text-primary dark:text-white flex items-center gap-2">
                  <HelpCircle className="h-5.5 w-5.5 text-medical" />
                  What Causes It?
                </h2>
                <ul className="space-y-3.5 text-sm text-gray-655 dark:text-gray-355">
                  {condition.causes.map((c, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <Check className="h-5 w-5 text-medical shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diagnosis */}
              <div className="space-y-4 border-t border-gray-100 dark:border-gray-800 pt-8">
                <h2 className="text-2xl font-extrabold text-primary dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="h-5.5 w-5.5 text-medical" />
                  Diagnostic Protocols
                </h2>
                <ul className="space-y-3.5 text-sm text-gray-655 dark:text-gray-355">
                  {condition.diagnosis.map((d, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-medical shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment */}
              <div className="space-y-4 border-t border-gray-100 dark:border-gray-800 pt-8">
                <h2 className="text-2xl font-extrabold text-primary dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="h-5.5 w-5.5 text-medical" />
                  Standard Treatments
                </h2>
                <ul className="space-y-3.5 text-sm text-gray-655 dark:text-gray-355">
                  {condition.treatment.map((t, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <Check className="h-5 w-5 text-medical shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lifestyle Advice */}
              {condition.lifestyleAdvice && condition.lifestyleAdvice.length > 0 && (
                <div className="space-y-4 border-t border-gray-100 dark:border-gray-800 pt-8">
                  <h2 className="text-2xl font-extrabold text-primary dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="h-5.5 w-5.5 text-medical" />
                    Lifestyle & Parental Care Advice
                  </h2>
                  <ul className="space-y-3 text-sm text-gray-655 dark:text-gray-355">
                    {condition.lifestyleAdvice.map((l, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <Check className="h-5 w-5 text-medical shrink-0 mt-0.5" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* When To Consult */}
              <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900 rounded-2xl p-5 mt-6 flex gap-3 text-rose-800 dark:text-rose-300">
                <AlertTriangle className="h-6 w-6 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">When to Consult Dr. Bajpai</h4>
                  <p className="text-sm leading-relaxed">{condition.whenToConsult}</p>
                </div>
              </div>

              {/* Accordion FAQs */}
              {condition.faqs && condition.faqs.length > 0 && (
                <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
                  <FAQAccordion faqs={condition.faqs} />
                </div>
              )}

            </div>

            {/* Right Column Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Book */}
              <div className="bg-primary-dark text-white rounded-3xl p-6 shadow-md space-y-4">
                <h3 className="text-lg font-bold border-b border-white/10 pb-2">
                  Hormonal Evaluation
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Book a consultation to evaluate growth status, request hormone profiling, or adjust diagnostic treatments.
                </p>
                <div className="space-y-2 pt-2">
                  <Link
                    href="/book"
                    className="block text-center py-2.5 bg-medical text-white text-xs font-bold rounded-xl shadow hover:bg-medical-light transition-all"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="https://wa.me/915123081111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2.5 border border-white/20 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition-all"
                  >
                    WhatsApp Booking
                  </a>
                </div>
              </div>

              {/* Related Conditions */}
              {relatedConditions.length > 0 && (
                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-50 dark:border-gray-800 pb-2">
                    Related Conditions
                  </h3>
                  <ul className="space-y-2.5 text-sm">
                    {relatedConditions.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/conditions/${item.slug}`}
                          className="flex items-center justify-between text-gray-650 dark:text-gray-400 hover:text-medical font-medium transition-colors group"
                        >
                          <span>{item.name}</span>
                          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

          </div>
        </section>

      </div>
    </>
  );
}
