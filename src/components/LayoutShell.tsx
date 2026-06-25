"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import FloatingClinicButton from "./FloatingClinicButton";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isClinicPage = pathname === "/bajpai-polyclinic";

  return (
    <>
      {!isClinicPage && <Header />}
      <main className={`flex-grow flex flex-col ${isClinicPage ? "" : "pt-16"}`}>
        {children}
      </main>
      {!isClinicPage && <FloatingClinicButton />}
      {!isClinicPage && <Footer />}
    </>
  );
}
