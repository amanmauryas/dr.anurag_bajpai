import React from "react";
import { GraduationCap, BookOpen, Video, Users, ArrowUpRight, Award, Calendar, Users2 } from "lucide-react";

export const metadata = {
  title: "Teaching & MedEClasses | Dr. Anurag Bajpai",
  description: "Learn about MedEClasses, a premium digital learning platform for Pediatric Endocrinology led by Dr. Anurag Bajpai.",
};

export default function TeachingPage() {
  const courses = [
    {
      title: "Basic Pediatric Endocrinology Course",
      audience: "Pediatricians, General Practitioners, and Residents",
      duration: "6 Months (Hybrid)",
      description: "A clinical masterclass covering normal child growth parameters, standard diagnosis pathways for thyroid and pubertal delays, and insulin treatment in Type 1 Diabetes.",
      topics: ["Auxological plotting", "Hypothyroidism management", "Rickets diagnostics", "Emergency DKA basics"],
    },
    {
      title: "Advanced Fellowship Training Manual",
      audience: "Pediatric Endocrine Fellows & Super-specialists",
      duration: "1 Year (Clinical & Practical)",
      description: "Advanced literature review and clinical case-based fellowship covering monogenic diabetes, estrogen biology, disorders of sex development (DSD), and recombinant growth hormone dosing.",
      topics: ["Molecular endocrinology", "Pituitary MRI interpretations", "Metabolic bone syndromes", "Pump & CGM technologies"],
    },
  ];

  const highlights = [
    { count: "1,000+", label: "Physicians Trained", icon: Users },
    { count: "200+", label: "National & Int'l Workshops", icon: GraduationCap },
    { count: "100+", label: "Educational Video Modules", icon: Video },
    { count: "10+", label: "Fellows Mentored Annually", icon: Award },
  ];

  const events = [
    {
      title: "Consensus Guidelines on Growth Hormone Audit",
      type: "National Seminar",
      date: "July 12, 2026",
      location: "New Delhi / Hybrid",
    },
    {
      title: "Advanced Diabetes Pump Masterclass",
      type: "Interactive Workshop",
      date: "August 05, 2026",
      location: "Kanpur",
    },
    {
      title: "Congenital Hypothyroidism Screening Seminar",
      type: "Webinar",
      date: "September 18, 2026",
      location: "Online",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-20 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-medical-light font-sans">Medical Education</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">
            Teaching & MedEClasses
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mt-2">
            Pioneering pediatric endocrine education through structured hybrid courses, clinical fellowships, and digital training models.
          </p>
        </div>
      </section>

      {/* Metrics Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-6 shadow-lg grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 text-medical rounded-xl shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 block uppercase">{item.label}</span>
                  <strong className="text-2xl font-extrabold text-gray-900 dark:text-white">{item.count}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MedEClasses Platform Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-extrabold text-primary dark:text-white">
              MedEClasses Learning Platform
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded by Dr. Anurag Bajpai, <strong>MedEClasses</strong> is a premium, digital-first learning repository built to bridge the gap in pediatric endocrinology training. In developing countries, hormone disorders are often misdiagnosed or diagnosed late. MedEClasses provides clinicians with practical, high-yield guidance to recognize conditions early and apply evidence-based protocols.
            </p>
            <p className="text-sm sm:text-base text-gray-650 dark:text-gray-305 leading-relaxed">
              We leverage interactive video tutorials, structured assessments, and physical workshops to build high clinical competence in pediatric growth velocity monitoring, insulin pump setup, and bone biochemistry.
            </p>
            <div className="pt-2">
              <a
                href="https://www.medeclasses.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-medical hover:bg-medical-light text-white font-bold rounded-full text-sm shadow transition-all"
              >
                Visit MedEClasses Portal
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right graphics panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-900 dark:to-slate-950 border border-gray-150 dark:border-gray-800 rounded-3xl p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-gray-950 dark:text-white flex items-center gap-2">
              <Users2 className="h-5 w-5 text-medical" />
              Fellowship Mentorship
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Dr. Bajpai serves as a clinical mentor for advanced fellowships. Aspiring endocrinologists gain experience with active clinical cases in growth hormone therapies, continuous glucose metrics, and interdisciplinary evaluations for atypical genitalia (DSD).
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl text-xs space-y-2 border border-gray-100 dark:border-gray-800">
              <strong className="text-gray-800 dark:text-white block font-bold">How to Apply:</strong>
              <p className="text-gray-650">Applicants must hold an MD or DNB in Pediatrics. Select positions are available annually for clinical mentorships in Kanpur.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-white dark:bg-slate-900 py-16 border-y border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-primary dark:text-white">
              Available Courses & Modules
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Structured study models designed to fit active clinical schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-800/30 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="text-[10px] font-extrabold text-medical bg-medical-ultra-light/50 dark:bg-medical-ultra-light/15 px-2.5 py-1 rounded-full uppercase">
                      Duration: {course.duration}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400">{course.audience}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Key Focus Areas:</h4>
                    <ul className="grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
                      {course.topics.map((t, i) => (
                        <li key={i} className="flex gap-1 items-center">
                          <BookOpen className="h-3.5 w-3.5 text-medical shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center">
                  <a
                    href="https://www.medeclasses.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 bg-primary dark:bg-primary-light hover:bg-primary-light dark:hover:bg-blue-600 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
                  >
                    Enroll / Inquire Course
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-primary dark:text-white">
            Upcoming Webinars & Events
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Join Dr. Bajpai at national conferences and specialized webinars.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {events.map((ev, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 p-5 rounded-2xl shadow-sm hover:shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-medical uppercase tracking-wider">
                  {ev.type}
                </span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  {ev.title}
                </h3>
                <div className="flex gap-4 text-xs text-gray-450">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {ev.date}
                  </span>
                  <span>Location: {ev.location}</span>
                </div>
              </div>
              <a
                href="https://www.medeclasses.org"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-250 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-xl transition-all whitespace-nowrap"
              >
                Register Spot
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
