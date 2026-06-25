"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Calendar, ShieldAlert } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About & Team",
      dropdown: [
        { name: "Biography & Education", href: "/about" },
        { name: "Awards & Credentials", href: "/about#credentials" },
        { name: "Care Philosophy", href: "/about#philosophy" },
      ],
    },
    {
      name: "Clinical Services",
      dropdown: [
        { name: "Clinical Expertise", href: "/expertise" },
        { name: "Conditions Library", href: "/conditions" },
        { name: "Patient Resources", href: "/resources" },
      ],
    },
    { name: "Patient Calculator", href: "/resources" },
    {
      name: "Academic & Research",
      dropdown: [
        { name: "Publications & Citations", href: "/research" },
        { name: "Bookshelf & Previews", href: "/books" },
        { name: "Teaching & Workshops", href: "/teaching" },
      ],
    },
    { name: "Media & Press", href: "/media" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel shadow-md py-3"
          : "bg-white/90 border-b border-gray-100 dark:bg-slate-dark/90 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-bold text-primary dark:text-white leading-tight tracking-tight">
              Dr. Anurag Bajpai
            </span>
            <span className="text-[10px] font-semibold text-medical dark:text-medical-light tracking-widest uppercase">
              Pediatric & Adolescent Endocrinologist
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white rounded-md transition-colors">
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="absolute left-0 mt-0 w-64 bg-white dark:bg-slate-dark rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 py-2 z-50">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href!}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-medical dark:text-medical-light font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-dark border-b border-gray-200 dark:border-gray-800 max-h-[85vh] overflow-y-auto px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.name} className="space-y-1">
                  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 pt-2">
                    {link.name}
                  </div>
                  {link.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white rounded-md"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href!}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive
                    ? "bg-medical/10 text-medical dark:text-medical-light font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
