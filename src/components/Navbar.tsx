"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Calendar, Award } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavLink {
  label: string;
  href: string;
}

const mainLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Books", href: "/books" },
  { label: "Teaching", href: "/teaching" },
  { label: "Patient Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);

  const expertiseLinks = [
    { label: "Growth Disorders", href: "/expertise/growth-disorders" },
    { label: "Diabetes & Technology", href: "/expertise/diabetes" },
    { label: "Thyroid Disorders", href: "/expertise/thyroid-disorders" },
    { label: "Puberty Disorders", href: "/expertise/puberty-disorders" },
    { label: "Bone & Mineral Disorders", href: "/expertise/bone-mineral-disorders" },
    { label: "Adrenal Disorders", href: "/expertise/adrenal-disorders" },
    { label: "Reproductive Disorders", href: "/expertise/reproductive-hormonal-disorders" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full glass shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center space-x-3 group" id="nav-logo">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-clinical-blue text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                Dr. Anurag Bajpai
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wider uppercase">
                Pediatric Endocrinologist
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Home, About */}
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive("/")
                  ? "text-brand-600 dark:text-brand-500 bg-brand-50/50 dark:bg-brand-900/20"
                  : "text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-50 dark:hover:bg-slate-800/40"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive("/about")
                  ? "text-brand-600 dark:text-brand-500 bg-brand-50/50 dark:bg-brand-900/20"
                  : "text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-50 dark:hover:bg-slate-800/40"
              }`}
            >
              About
            </Link>

            {/* Expertise Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsExpertiseOpen(!isExpertiseOpen)}
                onMouseEnter={() => setIsExpertiseOpen(true)}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  pathname.startsWith("/expertise")
                    ? "text-brand-600 dark:text-brand-500 bg-brand-50/50 dark:bg-brand-900/20"
                    : "text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                }`}
                aria-expanded={isExpertiseOpen}
              >
                <span>Expertise</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpertiseOpen ? "rotate-180" : ""}`} />
              </button>

              {isExpertiseOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 focus:outline-none"
                  onMouseLeave={() => setIsExpertiseOpen(false)}
                >
                  <p className="px-3 py-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Specialties
                  </p>
                  {expertiseLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-xs font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800/80 hover:text-brand-600 dark:hover:text-brand-500 transition-colors"
                      onClick={() => setIsExpertiseOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>
                  <Link
                    href="/conditions"
                    className="block px-3 py-2 text-xs font-bold text-center text-slate-500 dark:text-slate-400 hover:text-brand-500 transition-colors"
                    onClick={() => setIsExpertiseOpen(false)}
                  >
                    View Conditions Library
                  </Link>
                </div>
              )}
            </div>

            {/* Other links */}
            {mainLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-brand-600 dark:text-brand-500 bg-brand-50/50 dark:bg-brand-900/20"
                    : "text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action buttons & Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/book-appointment"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-clinical-blue hover:from-brand-700 hover:to-blue-700 shadow-md shadow-brand-500/10 hover:shadow-brand-500/20 active:scale-98 transition-all duration-200"
              id="nav-book-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="flex items-center space-x-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                isActive("/")
                  ? "bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-500"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40"
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                isActive("/about")
                  ? "bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-500"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40"
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>

            {/* Mobile Expertise Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setIsExpertiseOpen(!isExpertiseOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-left"
              >
                <span>Expertise</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpertiseOpen ? "rotate-180" : ""}`} />
              </button>

              {isExpertiseOpen && (
                <div className="pl-4 space-y-1 bg-slate-50 dark:bg-slate-950/30 rounded-lg p-2">
                  {expertiseLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-500"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/conditions"
                    className="block px-3 py-2 text-sm font-bold text-brand-500"
                    onClick={toggleMenu}
                  >
                    View All Conditions
                  </Link>
                </div>
              )}
            </div>

            {/* Other links */}
            {mainLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                  isActive(link.href)
                    ? "bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-500"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40"
              }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 px-3">
              <Link
                href="/book-appointment"
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-600 to-clinical-blue hover:from-brand-700 hover:to-blue-700"
                onClick={toggleMenu}
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
