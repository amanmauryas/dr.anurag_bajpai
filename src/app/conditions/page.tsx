"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronRight, BookOpen, Filter } from "lucide-react";
import { conditionsData } from "@/data/conditions";

export default function ConditionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Growth Disorders", "Diabetes", "Thyroid Disorders", "Obesity", "Reproductive & Hormonal Disorders", "Genetic & Congenital Disorders", "Bone & Mineral Disorders"];

  // Filter conditions
  const filteredConditions = conditionsData.filter((cond) => {
    const matchesSearch = cond.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cond.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || cond.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-20 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-medical-light">Educational Library</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">
            Endocrine Conditions Library
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mt-2">
            A comprehensive, physician-reviewed reference on pediatric hormone disorders, symptoms, diagnosis, and treatments.
          </p>
        </div>
      </section>

      {/* Main Search & Grid layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Search Bar & Category filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 p-5 rounded-3xl shadow-sm mb-10">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search conditions (e.g. short stature)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-medical dark:text-white"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <Filter className="h-4 w-4 text-gray-400 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 shrink-0 mr-1">Filter:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-medical dark:text-white font-medium"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results grid */}
        {filteredConditions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredConditions.map((cond) => (
              <div
                key={cond.slug}
                className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-medical dark:text-medical-light bg-medical-ultra-light/50 dark:bg-medical-ultra-light/10 px-2.5 py-1 rounded-full uppercase">
                      {cond.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3 group-hover:text-medical transition-colors">
                    {cond.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                    {cond.shortDesc}
                  </p>
                </div>
                
                <div className="pt-4 mt-6 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                  <Link
                    href={`/conditions/${cond.slug}`}
                    className="text-xs font-bold text-primary dark:text-white hover:text-medical flex items-center gap-1 transition-colors"
                  >
                    Read Guide Details
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/book"
                    className="text-[11px] font-bold text-gray-500 hover:text-medical transition-colors"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-gray-800">
            <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">No conditions matched your search</h3>
            <p className="text-sm text-gray-500 dark:text-gray-450 mt-1">Try clearing your filters or testing other terms.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="mt-4 px-5 py-2 bg-slate-100 dark:bg-slate-800 text-xs font-bold rounded-full text-gray-650 hover:bg-slate-200"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </section>

    </div>
  );
}
