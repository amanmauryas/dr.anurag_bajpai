import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, CheckCircle2, ChevronRight, Info, ShieldCheck, Stethoscope } from "lucide-react";
import { specialtiesData } from "@/data/expertise";
import FAQAccordion from "@/components/FAQAccordion";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return specialtiesData.map((spec) => ({
    slug: spec.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const specialty = specialtiesData.find((s) => s.slug === slug);
  if (!specialty) return {};
  
  return {
    title: `${specialty.title} | Pediatric Endocrinology Care`,
    description: specialty.shortDesc,
  };
}

export default async function SpecialtyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const specialty = specialtiesData.find((s) => s.slug === slug);
  
  if (!specialty) {
    notFound();
  }

  // Get other specialties for list sidebar
  const otherSpecialties = specialtiesData.filter((s) => s.slug !== slug);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-20">
      
      {/* Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/expertise"
            className="inline-flex items-center gap-1.5 text-xs text-medical-light font-bold uppercase tracking-wider mb-3 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Specialties
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {specialty.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl mt-2 leading-relaxed">
            {specialty.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10 bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-primary dark:text-white flex items-center gap-2">
                <Info className="h-5.5 w-5.5 text-medical" />
                Service Overview
              </h2>
              <p className="text-sm sm:text-base text-gray-650 dark:text-gray-350 leading-relaxed">
                {specialty.description}
              </p>
            </div>

            {/* Symptoms */}
            <div className="space-y-4 border-t border-gray-100 dark:border-gray-800/80 pt-8">
              <h2 className="text-2xl font-extrabold text-primary dark:text-white flex items-center gap-2">
                <Stethoscope className="h-5.5 w-5.5 text-medical" />
                Common Symptoms & Warning Signs
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Seek evaluation if you notice one or more of these clinical manifestations:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-gray-650 dark:text-gray-350">
                {specialty.symptoms.map((sympt, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="w-5 h-5 rounded-full bg-rose-50 dark:bg-rose-950/20 text-rose-500 dark:text-rose-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">!</span>
                    <span>{sympt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnosis */}
            <div className="space-y-4 border-t border-gray-100 dark:border-gray-800/80 pt-8">
              <h2 className="text-2xl font-extrabold text-primary dark:text-white flex items-center gap-2">
                <ShieldCheck className="h-5.5 w-5.5 text-medical" />
                Diagnostic Evaluation
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Our clinics execute standard and advanced diagnostic pathways:
              </p>
              <ul className="space-y-3 text-sm text-gray-650 dark:text-gray-350">
                {specialty.diagnosis.map((diag, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <CheckCircle2 className="h-5 w-5 text-medical shrink-0 mt-0.5" />
                    <span>{diag}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment */}
            <div className="space-y-4 border-t border-gray-100 dark:border-gray-800/80 pt-8">
              <h2 className="text-2xl font-extrabold text-primary dark:text-white flex items-center gap-2">
                <CheckCircle2 className="h-5.5 w-5.5 text-medical" />
                Evidence-Based Treatments
              </h2>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Targeted endocrine interventions and ongoing patient management:
              </p>
              <ul className="space-y-3 text-sm text-gray-650 dark:text-gray-350">
                {specialty.treatments.map((treat, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <Check className="h-5 w-5 text-medical shrink-0 mt-0.5" />
                    <span>{treat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordion FAQs */}
            <div className="border-t border-gray-100 dark:border-gray-800/80 pt-8">
              <FAQAccordion faqs={specialty.faqs} />
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Booking Box */}
            <div className="bg-primary-dark text-white rounded-3xl p-6 shadow-md space-y-4">
              <h3 className="text-lg font-bold border-b border-white/10 pb-2">
                Need Consultation?
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Consult with Dr. Anurag Bajpai for expert evaluation. In-person clinics and online video slots are available.
              </p>
              <div className="space-y-2 pt-2">
                <Link
                  href="/book"
                  className="block text-center py-2.5 bg-medical text-white text-xs font-bold rounded-xl shadow hover:bg-medical-light transition-all"
                >
                  Schedule Appointment
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

            {/* Other services index */}
            <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-50 dark:border-gray-800 pb-2">
                Other Specialties
              </h3>
              <ul className="space-y-2.5 text-sm">
                {otherSpecialties.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/expertise/${item.slug}`}
                      className="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-medical font-medium transition-colors group"
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
