import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Award, BookOpen, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const clinicalLinks = [
    { name: "Growth Disorders", href: "/expertise/growth-disorders" },
    { name: "Childhood Diabetes", href: "/expertise/diabetes" },
    { name: "Thyroid & Metabolism", href: "/expertise/thyroid-disorders" },
    { name: "Puberty & PCOS", href: "/expertise/puberty-disorders" },
    { name: "Bone & Calcium Issues", href: "/expertise/bone-mineral-disorders" },
    { name: "Adrenal & Hormone Crises", href: "/expertise/adrenal-disorders" },
  ];

  const quickLinks = [
    { name: "About Dr. Bajpai", href: "/about" },
    { name: "Conditions Library", href: "/conditions" },
    { name: "Research & Publications", href: "/research" },
    { name: "Bookshelf", href: "/books" },
    { name: "Teaching (MedEClasses)", href: "/teaching" },
    { name: "Patient Calculators", href: "/resources" },
    { name: "Medical Blog", href: "/blog" },
    { name: "Bajpai Poly Clinic", href: "/bajpai-polyclinic" },
  ];

  return (
    <footer className="bg-primary-dark text-gray-300 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Doctor Bio & Credentials */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white leading-tight">
              Dr. Anurag Bajpai
            </h3>
            <p className="text-xs tracking-wider text-medical-light font-semibold uppercase">
              Pediatric & Adolescent Endocrinologist
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Dr. Bajpai is a leading Pediatric Endocrinologist in India, trained at AIIMS New Delhi and the Royal Children's Hospital, Melbourne, Australia.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-medical-light shrink-0" />
                <span>FRACP – Australia (Pediatric Endocrinology)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-medical-light shrink-0" />
                <span>MD & MBBS – AIIMS New Delhi</span>
              </div>
            </div>
          </div>

          {/* Column 2: Clinical Expertise */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Expertise & Services
            </h4>
            <ul className="space-y-2 text-sm">
              {clinicalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Directory
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Clinics */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Kanpur Locations & OPD
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <MapPin className="h-5 w-5 text-medical-light shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Regency Hospital (Tower 1)</p>
                  <p className="text-xs text-gray-400">Sarvodaya Nagar, Kanpur</p>
                  <p className="text-xs text-medical-light font-medium mt-1">Mon, Wed, Fri: 10:00 AM - 3:00 PM</p>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2 border-t border-gray-800">
                <MapPin className="h-5 w-5 text-medical-light shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Regency Super Speciality Clinic</p>
                  <p className="text-xs text-gray-400">Kakadeo, Kanpur</p>
                  <p className="text-xs text-medical-light font-medium mt-1">Tue, Thu, Sat: 11:00 AM - 1:00 PM</p>
                  <p className="text-xs text-medical-light font-medium">Mon: 6:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-slate-dark/30 border border-gray-800 rounded-xl p-4 mb-8 text-xs text-gray-500 leading-relaxed">
          <p className="font-bold text-gray-400 uppercase mb-1">Medical Disclaimer:</p>
          The materials and content on this website are provided for informational and educational purposes only. They do not constitute professional medical advice, diagnosis, or treatment. Always consult Dr. Anurag Bajpai or another qualified healthcare provider regarding any questions about a child's medical condition or growth. Never disregard professional medical advice because of something read on this website.
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} Dr. Anurag Bajpai. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Use</Link>
            <a href="https://google.com" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              Google Scholar Profile
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
