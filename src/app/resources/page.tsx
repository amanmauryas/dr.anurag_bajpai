"use client";

import React, { useState } from "react";
import BMICalculator from "@/components/BMICalculator";
import GrowthCalculator from "@/components/GrowthCalculator";
import { Calculator, FileText, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<"growth" | "bmi">("growth");

  const checklistItems = [
    "Old medical prescriptions, growth chart records, and lab blood test reports.",
    "Mother and father's exact current heights (critical for mid-parental height target).",
    "List of current medications, vitamins, or thyroid supplements details.",
    "Child's birth weight and gestational age records (small for gestational age verification).",
    "School health check-up cards showing serial heights from past years.",
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-20 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-medical-light font-sans">For Parents</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">
            Patient Resources & Calculators
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mt-2">
            Polish your child's developmental tracking with evidence-based pediatric calculators and clinical appointment checklists.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Calculators */}
          <div className="lg:col-span-8 space-y-8">
            {/* Calculator Switch Tabs */}
            <div className="flex border border-gray-250 dark:border-gray-800 bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-sm max-w-md mx-auto">
              <button
                onClick={() => setActiveTab("growth")}
                className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
                  activeTab === "growth"
                    ? "bg-medical text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                Growth / Target Height
              </button>
              <button
                onClick={() => setActiveTab("bmi")}
                className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
                  activeTab === "bmi"
                    ? "bg-medical text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                Pediatric BMI Check
              </button>
            </div>

            {/* Render selected Calculator */}
            <div>
              {activeTab === "growth" ? <GrowthCalculator /> : <BMICalculator />}
            </div>
          </div>

          {/* Right Column: Guidelines & Checklists */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Preparation Checklist */}
            <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-50 dark:border-gray-800 pb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-medical" />
                Clinic Appointment Checklist
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                To maximize your consultation efficiency, please bring the following documents:
              </p>
              <ul className="space-y-3 text-xs text-gray-650 dark:text-gray-350">
                {checklistItems.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <CheckCircle className="h-4.5 w-4.5 text-medical shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Booking Call */}
            <div className="bg-primary-dark text-white rounded-3xl p-6 shadow space-y-4">
              <h3 className="text-base font-bold">Schedule Clinic Visit</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                If the calculators flag low growth percentiles or elevated metabolic indexes, book an evaluation.
              </p>
              <Link
                href="/book"
                className="block text-center py-2.5 bg-medical text-white text-xs font-bold rounded-xl shadow hover:bg-medical-light transition-all"
              >
                Book Appointment
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
