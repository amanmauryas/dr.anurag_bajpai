import React from "react";
import { MapPin, Phone, Mail, Clock, AlertOctagon, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact & Clinic Hours | Dr. Anurag Bajpai",
  description: "Get clinic locations, maps directions, telephone desks, and emergency pediatric care instructions for Dr. Anurag Bajpai in Kanpur.",
};

export default function ContactPage() {
  const contacts = [
    {
      title: "Regency Hospital (Tower 1)",
      address: "Sarvodaya Nagar, Kanpur, Uttar Pradesh - 208005",
      phone: "+91-512-3081111",
      email: "info@regencyhealthcare.in",
      hours: "Mon, Wed, Fri: 10:00 AM to 3:00 PM",
      mapUrl: "https://maps.google.com",
    },
    {
      title: "Regency Super Speciality Clinic",
      address: "Kakadeo, Kanpur, Uttar Pradesh - 208025",
      phone: "+91-512-3081111",
      email: "info@regencyhealthcare.in",
      hours: "Tue, Thu, Sat: 11:00 AM to 1:00 PM | Mon: 6:00 PM to 8:00 PM",
      mapUrl: "https://maps.google.com",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-20 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-medical-light font-sans">Contact Center</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">
            Clinic Locations & Directions
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mt-2">
            Reach our administrative desk, explore OPD hours, and open map directions to our clinics.
          </p>
        </div>
      </section>

      {/* Main layout split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clinic details */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Urgent/Emergency Box */}
            <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900 rounded-3xl p-6 flex gap-4 text-rose-800 dark:text-rose-300 shadow-sm">
              <AlertOctagon className="h-10 w-10 text-rose-600 shrink-0 mt-1" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold uppercase tracking-wider">Critical Pediatric Emergency</h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  If your child is experiencing an acute medical emergency (such as severe low blood sugar with seizures, diabetic ketoacidosis with vomiting and rapid deep breathing, or severe dehydration), <strong>go immediately to the nearest hospital emergency room.</strong> Do not wait for a clinic slot or an online consultation!
                </p>
              </div>
            </div>

            {/* Clinics grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contacts.map((clinic, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-6 shadow-sm space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-extrabold text-primary dark:text-white leading-tight">
                      {clinic.title}
                    </h3>
                    
                    <div className="space-y-3 text-xs sm:text-sm text-gray-655 dark:text-gray-400">
                      <div className="flex gap-2">
                        <MapPin className="h-4.5 w-4.5 text-medical shrink-0 mt-0.5" />
                        <span>{clinic.address}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Clock className="h-4.5 w-4.5 text-medical shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-900 dark:text-white block font-semibold">Hours:</strong>
                          <span>{clinic.hours}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Phone className="h-4.5 w-4.5 text-medical shrink-0 mt-0.5" />
                        <span>{clinic.phone}</span>
                      </div>

                      <div className="flex gap-2">
                        <Mail className="h-4.5 w-4.5 text-medical shrink-0 mt-0.5" />
                        <span>{clinic.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-gray-50 dark:border-gray-800 flex items-center justify-end">
                    <a
                      href={clinic.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-medical hover:underline flex items-center gap-1"
                    >
                      Open Google Maps
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Walk-in / Call details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-primary-dark text-white rounded-3xl p-6 shadow space-y-4">
              <h3 className="text-lg font-bold border-b border-white/10 pb-2">
                Kanpur Clinics Info
              </h3>
              <p className="text-xs text-gray-305 leading-relaxed font-sans">
                Consultations for Regency Hospital and Regency Clinic are walk-in based. You can call the desk directly to check current queue timings or request information.
              </p>
              <a
                href="tel:+915123081111"
                className="block text-center py-2.5 bg-medical text-white text-xs font-bold rounded-xl shadow hover:bg-medical-light transition-all font-sans"
              >
                Call Kanpur Desk
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
