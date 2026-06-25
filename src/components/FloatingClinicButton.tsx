"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function FloatingClinicButton() {
  const [opdDate, setOpdDate] = useState("July 12, 2026");

  useEffect(() => {
    // Read schedule date from local storage if available
    const storedDate = localStorage.getItem("fatehpur_opd_date");
    if (storedDate) {
      setOpdDate(storedDate);
    }

    // Set up a listener for local storage changes
    const handleStorageChange = () => {
      const updatedDate = localStorage.getItem("fatehpur_opd_date");
      if (updatedDate) {
        setOpdDate(updatedDate);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    // Custom event to listen to changes on the same page
    window.addEventListener("opd_schedule_update", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("opd_schedule_update", handleStorageChange);
    };
  }, []);

  // Format short date for floating pill (e.g. "Sunday, July 12, 2026" -> "July 12")
  const getShortDate = (fullDate: string) => {
    const parts = fullDate.split(",");
    if (parts.length >= 2) {
      return parts[1].trim(); // returns "July 12"
    }
    return fullDate;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link
        href="/bajpai-polyclinic"
        className="flex items-center gap-2 bg-gradient-to-r from-[#10B981] to-[#84CC16] hover:from-[#84CC16] hover:to-[#10B981] text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 hover:shadow-green-500/20 transition-all duration-300 group border border-white/20 animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <Calendar className="h-4.5 w-4.5 text-white/90" />
        <div className="text-left leading-none text-xs">
          <span className="block text-[9px] uppercase tracking-widest text-green-100 font-extrabold">Fatehpur OPD</span>
          <strong className="block text-[11px] font-extrabold mt-0.5 whitespace-nowrap text-white">{getShortDate(opdDate)}</strong>
        </div>
        <ArrowRight className="h-4 w-4 ml-1 text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
      </Link>
    </div>
  );
}
