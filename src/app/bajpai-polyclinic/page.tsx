"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  PlusCircle,
  Award
} from "lucide-react";
import Link from "next/link";

const Marquee = "marquee" as any;

export default function BajpaiPolyClinicPage() {
  const [opdDate, setOpdDate] = useState("Sunday, July 12, 2026");
  const [opdHours, setOpdHours] = useState("10:00 AM to 2:00 PM");
  const [warningText, setWarningText] = useState("Attention Patients: Pre-registration is mandatory for Dr. Anurag Bajpai's outreach OPD. Kindly request your slot in advance to avoid long queues.");

  // Custom Navbar state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Form states
  const [suffix, setSuffix] = useState("Mr.");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [isNewPatient, setIsNewPatient] = useState("Yes");
  const [uidNo, setUidNo] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Dynamic sync method including support for live events
    const syncData = () => {
      const storedDate = localStorage.getItem("fatehpur_opd_date");
      const storedHours = localStorage.getItem("fatehpur_opd_hours");
      const storedWarning = localStorage.getItem("fatehpur_opd_warning");
      if (storedDate) setOpdDate(storedDate);
      if (storedHours) setOpdHours(storedHours);
      if (storedWarning) setWarningText(storedWarning);
    };

    syncData();
    window.addEventListener("opd_schedule_update", syncData);
    return () => window.removeEventListener("opd_schedule_update", syncData);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitting(true);

    const newBooking = {
      id: "b_" + Date.now(),
      suffix,
      name,
      phone,
      time,
      newPatient: isNewPatient,
      uidNo: isNewPatient === "No" ? uidNo : "",
      date: opdDate,
      clinic: "Bajpai Poly Clinic",
      timestamp: new Date().toLocaleString()
    };

    const existingBookingsStr = localStorage.getItem("fatehpur_bookings");
    const existingBookings = existingBookingsStr ? JSON.parse(existingBookingsStr) : [];
    existingBookings.push(newBooking);
    localStorage.setItem("fatehpur_bookings", JSON.stringify(existingBookings));

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleResetForm = () => {
    setName("");
    setPhone("");
    setTime("");
    setIsNewPatient("Yes");
    setUidNo("");
    setSubmitted(false);
  };

  return (
    <div className="bg-[#FFFFFF] text-[#1E3A8A] font-sans antialiased min-h-screen">

      {/* 0. DYNAMIC MOVING WARNING TICKER */}
      <div className="w-full bg-gradient-to-r from-[#FBBF24] to-[#FCD34D] text-[#1E3A8A] border-b border-[#2563EB]/10 py-2.5 px-4 font-bold relative z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="flex items-center gap-1 bg-[#1E3A8A] text-white text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full shrink-0 shadow-sm animate-pulse">
            <AlertTriangle className="w-3 h-3 text-[#FBBF24]" />
            Updates
          </span>
          <Marquee behavior="scroll" direction="left" scrollamount="4" className="text-xs sm:text-sm font-extrabold tracking-wide w-full">
            {warningText}
          </Marquee>
        </div>
      </div>

      {/* 1. SEPARATE NAVBAR & LOGO */}
      <nav className="sticky top-0 z-40 w-full bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#2563EB]/15 py-1 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo - Clearly visible sizing with natural aspect ratio */}
          <Link href="/bajpai-polyclinic" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center">
              <img
                src="/bajpaicliniclogo.png"
                alt="Bajpai Poly Clinic Logo"
                className="h-18 sm:h-22 w-auto max-w-[300px] object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-7">
            <Link href="/" className="text-xs font-black text-[#2563EB] hover:text-[#1E3A8A] transition-colors uppercase tracking-wider">
              ← Main Site
            </Link>
            <a href="#about" className="text-xs font-extrabold text-gray-600 hover:text-[#2563EB] transition-colors uppercase tracking-wider">
              About
            </a>
            <a href="#schedule-highlight" className="text-xs font-black text-[#2563EB] hover:underline transition-colors uppercase tracking-wider">
              OPD Schedule
            </a>
            <a href="#booking" className="text-xs font-extrabold text-gray-600 hover:text-[#2563EB] transition-colors uppercase tracking-wider">
              Register OPD
            </a>
            <a href="#contact" className="text-xs font-extrabold text-gray-600 hover:text-[#2563EB] transition-colors uppercase tracking-wider">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#1E3A8A] hover:bg-[#2563EB]/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-gray-100 flex flex-col gap-2.5">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 text-sm font-bold text-[#2563EB] hover:bg-[#2563EB]/5 rounded-lg"
            >
              ← Go to Main Website
            </Link>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              About Clinic
            </a>
            <a
              href="#schedule-highlight"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 text-sm font-bold text-[#2563EB] hover:bg-gray-55 rounded-lg"
            >
              OPD Schedule
            </a>
            <a
              href="#booking"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              Register OPD
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              Contact Details
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION - Doctors portrait integrated */}
      <section className="relative overflow-hidden pt-14 pb-20 bg-gradient-to-b from-[#2563EB]/5 via-[#FFFFFF] to-[#FFFFFF]">
        {/* Pattern Background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#2563EB_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-[#14B8A6]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Hero copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#2563EB]/10 rounded-full text-xs font-black text-[#2563EB] shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                Pediatric & Adult Endocrine Outreach Clinic
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E3A8A] tracking-tight leading-tight">
                Specialist Healthcare <br />
                <span className="text-[#2563EB]">At Bajpai Poly Clinic</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
                Led by world-class Pediatric & Adolescent Endocrinologist **Dr. Anurag Bajpai** (MD/AIIMS, FRACP/Australia), we deliver monthly specialist OPD consultations in Fatehpur. Evaluate growth delays, juvenile diabetes management, thyroid status, and developmental milestones locally.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <a
                  href="#booking"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] text-white font-bold rounded-xl shadow-lg hover:shadow-[#2563EB]/30 hover:scale-102 transition-all flex items-center justify-center gap-1.5 text-xs uppercase"
                >
                  Register OPD Slot
                  <ArrowRight className="w-4 h-4 text-[#FBBF24]" />
                </a>
                <a
                  href="#schedule-highlight"
                  className="px-6 py-3.5 bg-[#FFFFFF] border border-[#2563EB]/25 text-[#1E3A8A] font-bold rounded-xl hover:bg-gray-50 transition-all text-xs uppercase text-center"
                >
                  View OPD Timings
                </a>
              </div>
            </div>

            {/* Right Hero: Doctor's portrait with custom layout styling */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-80 sm:w-96 sm:h-[420px] rounded-[45px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(30,58,138,0.3)] border-4 border-white bg-gradient-to-br from-[#2563EB]/15 to-[#1E3A8A]/10 transform hover:scale-102 transition-transform duration-300 mx-auto">
                <img
                  src="/dr_anurag.png"
                  alt="Dr. Anurag Bajpai Portrait"
                  className="w-full h-full object-cover object-top"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-5 left-5 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-3.5 px-4.5 rounded-3xl shadow-xl border border-white/10 flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-xl">
                    <Award className="h-6 w-6 text-[#FBBF24]" />
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-wider text-blue-200 font-extrabold leading-none">Clinical Practice</span>
                    <strong className="block text-xs font-black mt-1">17+ Years Experience</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 SEPARATE HIGHLIGHTED SECTION FOR UPCOMING OPD SCHEDULE */}
      <section id="schedule-highlight" className="py-10 bg-slate-50 border-y border-gray-200/60 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#14B8A6_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white border-2 border-[#2563EB]/35 rounded-[36px] shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">

            {/* Highlights Header Column (40%) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white p-6 sm:p-8 flex flex-col justify-between space-y-6 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-3.5">
                <span className="px-3 py-1 bg-[#14B8A6]/20 border border-[#14B8A6]/45 text-[#14B8A6] rounded-full text-[9px] uppercase tracking-widest font-black inline-block">
                  Next OPD Alert
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                  Upcoming Outreach Consultation OPD
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed font-medium">
                  Skip the long travel distance to Kanpur. Dr. Anurag Bajpai visits Fatehpur for dedicated clinical assessments on a regular schedule.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-xs text-yellow-300 leading-relaxed font-semibold">
                🔔 Pre-registration is mandatory so the medical desk can retrieve and catalog patient folders in advance.
              </div>
            </div>

            {/* Timings & Map Column (70%) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">

              {/* Dynamic stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="flex gap-3">
                  <div className="p-3 bg-[#2563EB]/10 rounded-2xl text-[#2563EB] h-fit">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-black tracking-wider block">OPD Session Date</span>
                    <strong className="text-[#1E3A8A] font-black text-lg mt-0.5 block">{opdDate}</strong>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-3 bg-[#14B8A6]/10 rounded-2xl text-[#14B8A6] h-fit">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-black tracking-wider block">OPD Working Hours</span>
                    <strong className="text-[#1E3A8A] font-black text-lg mt-0.5 block">{opdHours}</strong>
                  </div>
                </div>

              </div>

              <div className="flex gap-3 pt-3 border-t border-gray-150">
                <div className="p-3 bg-[#FBBF24]/10 rounded-2xl text-[#FBBF24] h-fit">
                  <MapPin className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div className="text-xs sm:text-sm text-gray-650">
                  <span className="text-[10px] text-gray-500 uppercase font-black tracking-wider block">OPD Location Address</span>
                  <strong className="text-[#1E3A8A] font-bold block mt-0.5 text-xs sm:text-sm">Bajpai Poly Clinic</strong>
                  <p className="mt-0.5 leading-relaxed font-semibold">
                    Building Number-9 C, Opposite Government Inter College, Imamganj, G T Road, Fatehpur Court, Fatehpur-Uttar Pradesh-212601, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-gray-150 items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#1E3A8A]">
                  <Phone className="w-4.5 h-4.5 text-[#2563EB]" />
                  <span>Call Hotline Desk: 094502 01568</span>
                </div>

                <a
                  href="#booking"
                  className="w-full sm:w-auto px-6 py-2.5 text-center bg-[#2563EB] hover:bg-[#1E3A8A] text-white text-xs font-black rounded-xl transition-all shadow-md shadow-[#2563EB]/10"
                >
                  Request Appointment Slot Now
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-20 border-t border-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-5">
            <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-wider">Local Health Outreach</span>
            <h2 className="text-3xl font-extrabold text-[#1E3A8A]">
              Specialist Endocrine Clinics Closer To Home
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-semibold">
              Traveling to Kanpur for regular follow-up checks (like growth hormone titration and diabetes management reviews) can be taxing and difficult for families.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              To ease this travel, Dr. Anurag Bajpai runs a specialized outreach clinic at **Bajpai Poly Clinic in Fatehpur** on a monthly basis. Parents can schedule growth assessments, collect prescriptions, get blood test audits, and consult on hormonal or developmental delays locally.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="p-4 bg-gray-55 rounded-2xl border border-[#2563EB]/10">
                <span className="block text-2xl font-extrabold text-[#2563EB]">17+</span>
                <span className="text-xs text-gray-550 font-semibold">Years of Pediatric Service</span>
              </div>
              <div className="p-4 bg-gray-55 rounded-2xl border border-[#2563EB]/10">
                <span className="block text-2xl font-extrabold text-[#10B981]">100%</span>
                <span className="text-xs text-gray-550 font-semibold">In-Clinic Audit & Logs</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1E3A8A]/5 border border-[#2563EB]/10 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-[#1E3A8A]">Clinic Facilities</h3>

            <ul className="space-y-3.5 text-xs text-gray-650 font-semibold">
              <li className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full shrink-0" />
                Growth measurement chart logs and tracking files
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full shrink-0" />
                Hormonal dosage titration & audit logs
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full shrink-0" />
                Support desk for blood work test collections
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full shrink-0" />
                Prescription updates and counseling referrals
              </li>
            </ul>

            <div className="p-4 bg-[#FBBF24]/10 border border-[#FBBF24]/20 rounded-2xl text-xs text-[#1E3A8A] leading-relaxed">
              <strong>Support Hotline:</strong> Need help finding the clinic or coordinating next timings? Call the Fatehpur outreach desk directly at <a href="tel:09450201568" className="font-bold underline text-[#2563EB]">094502 01568</a>.
            </div>
          </div>

        </div>
      </section>

      {/* 4. SCHEDULE & DIRECTIONS */}
      <section id="schedule" className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest">Map & Location</span>
            <h2 className="text-3xl font-extrabold text-[#1E3A8A] mt-1">Schedules & Directions</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Coordinates card */}
            <div className="lg:col-span-6 bg-[#FFFFFF] border border-gray-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#1E3A8A]">Bajpai Poly Clinic Address</h3>
                <div className="text-xs text-gray-600 space-y-1.5">
                  <p className="font-bold text-[#1E3A8A]">Building Number-9 C,</p>
                  <p>Opposite Government Inter College, Imamganj,</p>
                  <p>G T Road, Fatehpur Court,</p>
                  <p>Fatehpur-Uttar Pradesh-212601, Uttar Pradesh</p>
                </div>

                <div className="space-y-3.5 pt-4 border-t border-gray-100">
                  <div className="flex gap-2 text-xs">
                    <Clock className="h-4.5 w-4.5 text-[#2563EB] shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Frequency:</strong>
                      <span>Second Sunday of every Month</span>
                    </div>
                  </div>

                  <div className="flex gap-2 text-xs">
                    <Phone className="h-4.5 w-4.5 text-[#2563EB] shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Call Desk Hotline:</strong>
                      <a href="tel:09450201568" className="hover:underline font-bold text-[#2563EB]">094502 01568</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maps mock embed */}
              <div className="h-48 bg-gray-100 rounded-2xl mt-6 border border-gray-200 relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.4242793239305!2d80.80855287518929!3d25.93675747724237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b62aa960018ab%3A0xeb11f7d1e11e0afe!2sBajpai%20Polyclinic!5e1!3m2!1sen!2sin!4v1782365080770!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
          </div>

          {/* Timelines and logistics */}
          <div className="lg:col-span-6 bg-[#FFFFFF] border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#1E3A8A]">Appointment Steps & Policy</h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-xs font-bold text-[#2563EB]">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E3A8A]">Submit OPD Pre-Registration</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Fill out the booking form on this page with the patient name, UID (if existing), and select preferred timings.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-xs font-bold text-[#14B8A6]">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E3A8A]">Receive Desk Confirmation Call</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Our coordinator will call back on your contact number to allocate the exact appointment slot time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#10B981]/10 flex items-center justify-center text-xs font-bold text-[#10B981]">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E3A8A]">OPD Visit</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Carry all previous files, test results, growth trackers, and log booklets for Dr. Anurag Bajpai's auditing review.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-250 p-4 rounded-2xl flex gap-3 text-amber-950 text-xs">
              <AlertTriangle className="h-5 w-5 text-[#FBBF24] shrink-0" />
              <p className="leading-relaxed font-semibold">
                <strong>Important Notice:</strong> Outreach consultations have high patient volume. Pre-registrations ensure our desk can index patient charts before the OPD begins.
              </p>
            </div>
          </div>

        </div>
    </div>
      </section >

    {/* 5. INTERACTIVE OPD BOOKING FORM */ }
    < section id = "booking" className = "py-20 max-w-4xl mx-auto px-4 sm:px-6" >
      <div className="bg-[#FFFFFF] border-2 border-[#2563EB]/20 rounded-3xl shadow-[0_25px_60px_-15px_rgba(30,58,138,0.15)] overflow-hidden">

        {/* Header Banner inside the card */}
        <div className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] text-white p-6 sm:p-8">
          <h3 className="text-2xl font-extrabold flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#FBBF24]" />
            OPD Pre-Registration Form
          </h3>
          <p className="text-xs text-blue-100 mt-2">
            This form is open to all patients. Kindly complete the details to request your outreach slot.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleBookingSubmit} className="space-y-6 text-xs sm:text-sm">

              {/* Suffix and Patient Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-3">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Suffix *</label>
                  <select
                    value={suffix}
                    onChange={(e) => setSuffix(e.target.value)}
                    className="w-full px-3 py-3 bg-gray-55 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:outline-none font-semibold text-[#1E3A8A]"
                  >
                    <option value="Baby">Baby</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr.">Dr.</option>
                  </select>
                </div>
                <div className="sm:col-span-9">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Patient Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter patient full name"
                    className="w-full px-3 py-3 bg-gray-55 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:outline-none font-semibold text-[#1E3A8A]"
                  />
                </div>
              </div>

              {/* Contact and Timeslot row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Contact Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 09450201568 or mobile"
                    className="w-full px-3 py-3 bg-gray-55 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:outline-none font-semibold text-[#1E3A8A]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Custom Timeslot Preference</label>
                  <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="e.g., 10:30 AM, Morning slot, or 12:00 PM"
                    className="w-full px-3 py-3 bg-gray-55 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:outline-none font-semibold text-[#1E3A8A]"
                  />
                </div>
              </div>

              {/* New Patient and UID Row */}
              <div className="bg-gray-55 p-4 rounded-2xl border border-gray-150 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <span className="block text-xs font-bold text-[#1E3A8A]">New Patient ?</span>
                    <p className="text-[10px] text-gray-500 font-medium">Have you consulted Dr. Anurag Bajpai before?</p>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setIsNewPatient("Yes")}
                      className={`flex-grow sm:flex-grow-0 px-6 py-2 rounded-xl text-xs font-bold transition-all border ${isNewPatient === "Yes"
                        ? "bg-[#2563EB] border-[#2563EB] text-white shadow-md"
                        : "bg-[#FFFFFF] border-gray-300 text-gray-750 hover:bg-gray-50"
                        }`}
                    >
                      Yes, I am New
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsNewPatient("No")}
                      className={`flex-grow sm:flex-grow-0 px-6 py-2 rounded-xl text-xs font-bold transition-all border ${isNewPatient === "No"
                        ? "bg-[#2563EB] border-[#2563EB] text-white shadow-md"
                        : "bg-[#FFFFFF] border-gray-300 text-gray-750 hover:bg-gray-50"
                        }`}
                    >
                      No, I have UID
                    </button>
                  </div>
                </div>

                {isNewPatient === "No" && (
                  <div className="pt-2 border-t border-gray-200">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Enter UID Number *</label>
                    <input
                      type="text"
                      required
                      value={uidNo}
                      onChange={(e) => setUidNo(e.target.value)}
                      placeholder="Enter your existing UID number (e.g. UID-1234)"
                      className="w-full px-3 py-3 bg-[#FFFFFF] border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:outline-none font-semibold text-[#1E3A8A]"
                    />
                  </div>
                )}
              </div>

              {/* Submitting button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] text-white font-extrabold rounded-xl shadow-lg hover:shadow-[#2563EB]/25 hover:from-[#1E3A8A] hover:to-[#2563EB] transition-all duration-300 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {submitting ? "Submitting Registration..." : "Submit Registration Request"}
                </button>
              </div>

            </form>
          ) : (
            // Success Screen instead of WhatsApp redirect
            <div className="text-center py-10 px-4 space-y-6">
              <div className="w-16 h-16 bg-[#10B981]/15 text-[#10B981] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold text-[#1E3A8A]">OPD Pre-Registration Submitted!</h4>
                <p className="text-xs text-gray-505 max-w-md mx-auto">
                  Your details have been successfully logged in our outreach clinic database. No further action is required.
                </p>
              </div>

              <div className="bg-gray-55 border border-gray-200 rounded-2xl p-6 text-left text-xs max-w-md mx-auto space-y-2.5 text-gray-700 font-semibold">
                <p><strong>Patient Name:</strong> {suffix} {name}</p>
                <p><strong>Contact phone:</strong> {phone}</p>
                <p><strong>OPD Date:</strong> {opdDate}</p>
                {time && <p><strong>Timeslot Preferred:</strong> {time}</p>}
                <p><strong>Patient status:</strong> {isNewPatient === "Yes" ? "New Patient" : `Existing Patient (UID: ${uidNo})`}</p>
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={handleResetForm}
                  className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-750 font-bold rounded-xl text-xs uppercase"
                >
                  Submit Another Request
                </button>
                <Link
                  href="/"
                  className="px-6 py-2.5 bg-[#2563EB] hover:bg-[#1E3A8A] text-white font-bold rounded-xl text-xs uppercase"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>
      </section >

    {/* 6. CONTACT SECTION */ }
    < footer id = "contact" className = "bg-[#1E3A8A] text-white py-12 border-t border-[#2563EB]/25" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="flex justify-center items-center gap-3">
          <img
            src="/bajpaicliniclogo.png"
            alt="Bajpai Poly Clinic Logo"
            className="h-10 w-auto bg-white rounded-lg p-1 object-contain"
          />
          <span className="font-extrabold text-xl text-white">Bajpai Poly Clinic</span>
        </div>
        <p className="text-xs text-blue-200 max-w-md mx-auto leading-relaxed">
          Building Number-9 C, Opposite Government Inter College, Imamganj, G T Road, Fatehpur Court, Fatehpur-Uttar Pradesh-212601, Uttar Pradesh
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs font-semibold text-blue-100 font-sans">
          <div className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-[#FBBF24]" />
            <span>OPD Desk Hotline: 094502 01568</span>
          </div>
          <div className="hidden sm:block text-[#2563EB]">•</div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#FBBF24]" />
            <span>Next Clinic Date: {opdDate}</span>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-[10px] text-blue-300">
          <p>&copy; {new Date().getFullYear()} Bajpai Poly Clinic. Outreach services by Dr. Anurag Bajpai. All rights reserved.</p>
        </div>
      </div>
      </footer >

    </div >
  );
}
