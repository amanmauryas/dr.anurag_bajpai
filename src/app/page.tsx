"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  FileText,
  Video,
  Award,
  Users,
  BookOpen,
  TrendingUp,
  ArrowRight,
  Star,
  Check,
  Clock,
  MapPin,
  MessageSquare,
  Play,
  Heart,
  Activity,
  ShieldCheck,
  ChevronRight,
  Info,
  Phone,
  Brain,
  Bone
} from "lucide-react";
import { specialtiesData } from "@/data/expertise";
import { testimonialsData } from "@/data/testimonials";
import Image from "next/image";

export default function Home() {
  const [activeClinic, setActiveClinic] = useState(0);

  const clinicsData = [
    {
      name: "Regency Hospital (Tower 1)",
      address: "Sarvodaya Nagar, Kanpur, Uttar Pradesh - 208005",
      schedule: "Mon, Wed, Fri: 10:00 AM to 3:00 PM",
      phone: "+91-512-3081111",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.5449527998203!2d80.30122659999999!3d26.4799781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39862de0cc79%3A0x41465e2a16000e63!2sRegency%20Multi%20Super%20Speciality%20Hospital%20-%20Tower%201%2C%20Sarvodaya%20Nagar%2C%20Kanpur!5e1!3m2!1sen!2sin!4v1782364977263!5m2!1sen!2sin"
    },
    {
      name: "Regency Super Speciality Clinic",
      address: "P.P.N Market, Permat, Kanpur, Uttar Pradesh - 208001",
      schedule: "Tue, Thu, Sat: 11:00 AM - 1:00 PM | Mon: 6:00 PM - 8:00 PM",
      phone: "+91-512-3081111",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.695975568982!2d80.34346020000001!3d26.4748605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c389f5572bdb7%3A0xdf9e8c3a73ccc2b5!2sRegency%20Hospital%2C%20P.P.N%20Market%2C%20Permat%2C%20Kanpur%2C%20Uttar%20Pradesh%20208001!5e1!3m2!1sen!2sin!4v1782365022978!5m2!1sen!2sin"
    },
    {
      name: "Bajpai Poly Clinic (Fatehpur)",
      address: "Building Number-9 C, Opposite Government Inter College, Imamganj, G T Road, Fatehpur Court, Fatehpur, Uttar Pradesh - 212601",
      schedule: "Second Sunday of every Month (10:00 AM - 2:00 PM)",
      phone: "094502 01568",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.4242793239305!2d80.80855287518929!3d25.93675747724237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b62aa960018ab%3A0xeb11f7d1e11e0afe!2sBajpai%20Polyclinic!5e1!3m2!1sen!2sin!4v1782365080770!5m2!1sen!2sin"
    }
  ];

  const servicesGrid = [
    { title: "Growth Disorders", desc: "Short stature, growth hormone deficit & catch-up growth profiling.", icon: TrendingUp },
    { title: "Childhood Diabetes", desc: "Type 1 diabetes technologies, continuous monitoring & pump clinics.", icon: Activity },
    { title: "Thyroid Clinics", desc: "Congenital hypothyroidism, goiter, and autoimmune thyroiditis.", icon: ShieldCheck },
    { title: "Puberty & PCOS", desc: "Early or delayed puberty delays and adolescent menstrual balance.", icon: Heart },
    { title: "Bone & Rickets", desc: "Nutritional rickets, calcium deficits, and brittle bones therapy.", icon: BookOpen },
    { title: "Adrenal & Hormone", desc: "Congenital adrenal hyperplasia (CAH) stress dosage & audits.", icon: Award }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-20 min-h-screen relative">

      {/* 1. HERO SECTION (Oakland Style Refined) */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-36 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">

        {/* Modern background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00336605_1px,transparent_1px),linear-gradient(to_bottom,#00336605_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none dark:opacity-10" />

        {/* Decorative backdrop shapes */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-medical-ultra-light/20 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-blue-300/10 rounded-full blur-[80px] pointer-events-none" />



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

              {/* Star Rating Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 glass-panel rounded-full text-xs font-bold text-gray-700 dark:text-gray-300 shadow-sm border border-white/20">
                <span className="flex gap-0.5 text-accent">
                  <Star className="h-4.5 w-4.5 fill-current" />
                </span>
                <span className="font-extrabold text-primary dark:text-blue-300">4.8 Rated on Google</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary dark:text-white tracking-tight leading-tight">
                Transforming Your Child's <br />
                <span className="text-medical">Health With Excellence</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                Expert pediatric endocrine care combining world-class clinical expertise, advanced research, and clinical compassion to ensure healthy growth.
              </p>

              {/* Checklist list points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-gray-700 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="p-1 bg-medical-ultra-light text-medical rounded-full shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>Advance Auxology</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="p-1 bg-medical-ultra-light text-medical rounded-full shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>Hormone Audits</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="p-1 bg-medical-ultra-light text-medical rounded-full shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>In-Person & Online</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-medical hover:bg-medical-light text-white font-bold rounded-full shadow-lg shadow-blue-500/20 hover:scale-102 transition-all font-sans"
                >
                  Contact & Kanpur Clinics
                  <ArrowRight className="h-4.5 w-4.5" />
                </Link>
              </div>
            </div>

            {/* Right Photo Column (Oakland Style Frame) */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-80 h-96 sm:w-[400px] sm:h-[460px] rounded-[50px] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-blue-50 to-blue-200/50 dark:from-slate-900 dark:to-slate-850 transition-all duration-500 hover:scale-102">
                <Image
                  src="/dr_anurag.png"
                  alt="Dr. Anurag Bajpai Portrait"
                  fill
                  priority
                  className="object-cover object-top"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 bg-primary dark:bg-primary-light text-white p-4 rounded-3xl shadow-xl border border-white/10 flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-xl">
                    <Award className="h-6 w-6 text-accent-light" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-blue-200">Clinical practice</span>
                    <strong className="block text-sm font-extrabold">17+ Years Experience</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



            {/* 3. OUR SERVICES SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-medical">Our Services</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-white">
                  Endocrine Clinics & Specialties
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We offer comprehensive range of medical evaluations to meet all your child's hormonal health needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesGrid.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-900 border border-blue-100/30 dark:border-gray-800 rounded-3xl p-6 shadow-sm hover-lift flex flex-col justify-between"
                    >
                      <div>
                        <div className="p-3 bg-medical-ultra-light dark:bg-medical-ultra-light/10 text-medical rounded-2xl w-fit mb-5">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-5 mt-6 border-t border-gray-50 dark:border-gray-800/80">
                        <Link
                          href={`/expertise`}
                          className="text-xs font-bold text-medical hover:text-primary dark:hover:text-white flex items-center gap-1 group"
                        >
                          Learn More
                          <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 4. MEET DR. ANURAG SECTION (Oakland Hamid Amiri style) */}
            <section className="bg-white dark:bg-slate-900/40 py-20 border-y border-blue-100/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                  {/* Doctor Photo Left */}
                  <div className="lg:col-span-5 flex justify-center relative">
                    <div className="relative w-80 h-96 sm:w-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-tr from-blue-100 to-blue-200">
                      <Image
                        src="/dr_anurag.png"
                        alt="Dr. Anurag Bajpai Profile"
                        fill
                        className="object-cover object-top"
                      />

                      <div className="absolute top-4 left-4 bg-medical text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                        Best Specialist
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info Right */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-medical uppercase tracking-widest block">Chief Practitioner</span>
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-white">
                        Meet Dr. Anurag Bajpai
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      Dr. Anurag Bajpai is a highly dedicated and compassionate pediatric endocrinologist with a career spanning over 17 years. Throughout his decades of practice, he has remained committed to delivering premium-quality, personalized endocrine therapies in a stress-free environment.
                    </p>

                    {/* Checklist details */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider border-b border-gray-150 dark:border-gray-800 pb-1 max-w-xs">
                        Core Capabilities
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-650 dark:text-gray-350">
                        <li className="flex gap-2 items-center">
                          <Check className="h-4 w-4 text-medical shrink-0" />
                          <span>Advanced Growth Therapies</span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <Check className="h-4 w-4 text-medical shrink-0" />
                          <span>CGM & Pump Implementations</span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <Check className="h-4 w-4 text-medical shrink-0" />
                          <span>Congenital CAH Audits</span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <Check className="h-4 w-4 text-medical shrink-0" />
                          <span>Evidence-Based Treatment Plans</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 flex items-center gap-6">
                      <Link
                        href="/about"
                        className="px-6 py-3 bg-primary dark:bg-primary-light hover:bg-primary-light text-white font-bold rounded-full text-xs shadow transition-all"
                      >
                        Read Detailed Biography
                      </Link>
                      <div className="text-xs">
                        <span className="block text-gray-400 font-semibold italic">Dr. Anurag Bajpai</span>
                        <span className="block text-[9px] uppercase tracking-wider text-medical font-bold">FRACP Specialist</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* 5. PATIENT EDUCATION & LECTURES SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-150 dark:border-gray-850">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-medical">Media & Learning</span>
                <h2 className="text-3xl font-extrabold text-primary dark:text-white">
                  Informative Videos & Lectures
                </h2>
                <p className="text-sm text-gray-550 dark:text-gray-400">
                  Watch Dr. Anurag Bajpai discuss key growth, hormonal evaluations, and metabolic health conditions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Video 1 */}
                <div className="bg-white dark:bg-slate-900 border border-blue-100/30 dark:border-gray-800 rounded-3xl p-4 shadow-sm flex flex-col justify-between hover-lift">
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4 shadow-inner">
                    <iframe
                      src="https://www.youtube.com/embed/R4DoqGbvFvY?si=aHR__E_yuhdjU2Fc"
                      title="Informative Video by Dr. Anurag Bajpai"
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-medical font-sans">Featured Guideline</span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mt-1 leading-snug">
                      Endocrine Evaluations Overview
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                      Overview of pediatric endocrine diagnosis steps, growth evaluations, and hormonal clinic workflows.
                    </p>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="bg-white dark:bg-slate-900 border border-blue-100/30 dark:border-gray-800 rounded-3xl p-4 shadow-sm flex flex-col justify-between hover-lift">
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4 shadow-inner">
                    <iframe
                      src="https://www.youtube.com/embed/1ylg7nW1aww"
                      title="Understanding Childhood Obesity"
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-medical font-sans">Patient Education</span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mt-1 leading-snug">
                      Childhood Obesity Management
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                      Understanding clinical evaluations, early assessments, and lifestyle balances for childhood obesity.
                    </p>
                  </div>
                </div>

                {/* Video 3 */}
                <div className="bg-white dark:bg-slate-900 border border-blue-100/30 dark:border-gray-800 rounded-3xl p-4 shadow-sm flex flex-col justify-between hover-lift">
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4 shadow-inner">
                    <iframe
                      src="https://www.youtube.com/embed/LGFz8VOFc6s"
                      title="Clinical Lectures by Dr. Anurag"
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-medical font-sans">Specialized Lecture</span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mt-1 leading-snug">
                      Approaching Short Stature
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                      Advanced training lecture on growth auxology, hormone audits, and pediatric diagnosis steps.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. GET IN TOUCH SECTION (Map and Form) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-150 dark:border-gray-850">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-extrabold text-primary dark:text-white">
                  Get In Touch
                </h2>
                <p className="text-sm text-gray-550 dark:text-gray-400 mt-2">
                  Have questions or need to reach our administrative desk? Explore our clinic locations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-5xl mx-auto">

                {/* Tabbed Clinic Locator Left (50%) */}
                <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold text-medical uppercase tracking-wider block font-sans">Clinic Locations</span>
                    
                    {/* Tabs row */}
                    <div className="flex flex-wrap gap-1.5 p-1 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-150/50 dark:border-gray-800">
                      {clinicsData.map((clinic, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveClinic(idx)}
                          className={`flex-1 min-w-[110px] text-[10px] font-extrabold px-2 py-2 rounded-xl transition-all ${
                            activeClinic === idx
                              ? "bg-primary text-white shadow-sm"
                              : "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white"
                          }`}
                        >
                          {idx === 2 ? "Fatehpur Clinic" : clinic.name.replace("Hospital", "").replace("Clinic", "").trim()}
                        </button>
                      ))}
                    </div>

                    {/* Active Clinic Details */}
                    <div className="space-y-3.5 pt-1">
                      <h3 className="font-extrabold text-base text-gray-900 dark:text-white leading-tight">
                        {clinicsData[activeClinic].name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-semibold">
                        {clinicsData[activeClinic].address}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                        <div className="flex gap-2">
                          <Clock className="h-4.5 w-4.5 text-medical shrink-0" />
                          <div>
                            <strong className="block font-bold text-gray-700 dark:text-gray-300">OPD Schedule:</strong>
                            <span className="text-gray-500 dark:text-gray-450">{clinicsData[activeClinic].schedule}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Phone className="h-4.5 w-4.5 text-medical shrink-0" />
                          <div>
                            <strong className="block font-bold text-gray-700 dark:text-gray-300">Call Desk:</strong>
                            <a href={`tel:${clinicsData[activeClinic].phone.replace(/[^0-9+]/g, "")}`} className="hover:underline text-medical font-bold">
                              {clinicsData[activeClinic].phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Embedded Google Map Frame */}
                  <div className="h-52 w-full bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden mt-5 border border-gray-150 dark:border-gray-800 shadow-inner relative">
                    <iframe
                      src={clinicsData[activeClinic].mapEmbedUrl}
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Inquiry Form Right (50%) */}
                <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 p-6 rounded-3xl shadow-sm">
                  <form className="space-y-4 text-xs">
                    <h3 className="font-extrabold text-base text-gray-950 dark:text-white border-b border-gray-50 dark:border-gray-800 pb-2">
                      General Inquiry
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-650 dark:text-gray-400 mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="FullName"
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs focus:outline-none dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-655 dark:text-gray-400 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="Phone"
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs focus:outline-none dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-655 dark:text-gray-400 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs focus:outline-none dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-655 dark:text-gray-400 mb-1">Inquiry Message</label>
                      <textarea
                        rows={3}
                        placeholder="How Can We Help"
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs focus:outline-none dark:text-white"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => alert("Message logged. Dr. Bajpai's desk will call you back soon.")}
                        className="w-full py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-xl shadow transition-all text-xs uppercase"
                      >
                        Submit Your Message
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </section>

          </div>
        );
}
