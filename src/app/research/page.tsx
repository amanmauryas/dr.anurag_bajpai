"use client";

import React, { useState } from "react";
import { Search, Award, TrendingUp, BookOpen, FileText, Filter, Calendar, ExternalLink } from "lucide-react";
import { selectedPapersData, selectedChaptersData, citationMetrics } from "@/data/publications";

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Estrogen Biology & Growth", "Bone & Mineral Disorders", "Obesity & Insulin Resistance", "Diabetes", "Adrenal Disorders"];

  const filteredPapers = selectedPapersData.filter((paper) => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          paper.journal.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-20 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-medical-light font-sans">Academic Portfolio</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">
            Research & Publications
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mt-2">
            Explore indexed journal articles, book chapters, and citation metrics reflecting Dr. Bajpai's contributions to pediatric endocrinology.
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-6 shadow-lg grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 text-medical rounded-xl">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 dark:text-gray-500 block uppercase">Publications</span>
              <strong className="text-2xl font-extrabold text-gray-900 dark:text-white">{citationMetrics.totalPublications}+</strong>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-500 rounded-xl">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 dark:text-gray-500 block uppercase">Book Chapters</span>
              <strong className="text-2xl font-extrabold text-gray-900 dark:text-white">{citationMetrics.totalChapters}+</strong>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-50 dark:bg-amber-950/30 text-amber-600 rounded-xl">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 dark:text-gray-500 block uppercase">Scholar Citations</span>
              <strong className="text-2xl font-extrabold text-gray-900 dark:text-white">{citationMetrics.googleScholarCitations}+</strong>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 rounded-xl">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 dark:text-gray-500 block uppercase">h-index / i10</span>
              <strong className="text-2xl font-extrabold text-gray-900 dark:text-white">{citationMetrics.hIndex} / {citationMetrics.i10Index}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main content grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Papers Listing Column */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl font-extrabold text-primary dark:text-white mb-2">
              Selected Journal Publications
            </h2>

            {/* Filter bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 p-4 rounded-2xl shadow-sm">
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search papers or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-medical dark:text-white"
                />
              </div>

              <div className="flex items-center gap-1 w-full sm:w-auto">
                <Filter className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full sm:w-auto px-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-medical dark:text-white font-medium"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* List cards */}
            {filteredPapers.length > 0 ? (
              <div className="space-y-4">
                {filteredPapers.map((paper, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow transition-all space-y-3"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <span className="text-[10px] font-bold text-medical bg-medical-ultra-light/50 dark:bg-medical-ultra-light/10 px-2 py-0.5 rounded">
                        {paper.category}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        Year: {paper.year}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {paper.title}
                    </h3>
                    
                    <p className="text-xs text-gray-500 font-medium">
                      Authors: <span className="text-gray-700 dark:text-gray-300">{paper.authors}</span>
                    </p>

                    <div className="text-xs text-gray-400 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl leading-relaxed">
                      <strong>Abstract Summary:</strong> {paper.abstractSummary}
                    </div>

                    <div className="flex justify-between items-center text-[11px] pt-1">
                      <span className="font-semibold text-gray-400">
                        Citations: <strong className="text-medical">{paper.citations}</strong>
                      </span>
                      {paper.doi && (
                        <a
                          href={`https://doi.org/${paper.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary dark:text-medical-light font-bold flex items-center gap-0.5 hover:underline"
                        >
                          DOI link
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                <p className="text-gray-500 text-sm">No research papers matched your filters.</p>
              </div>
            )}
          </div>

          {/* Book Chapters Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-xl font-bold text-primary dark:text-white border-b border-gray-100 dark:border-gray-850 pb-2">
              Selected Textbook Chapters
            </h2>
            <div className="space-y-4">
              {selectedChaptersData.map((chap, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-sm space-y-2"
                >
                  <h4 className="text-sm font-bold text-gray-950 dark:text-white leading-tight">
                    {chap.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    Book: <strong className="text-gray-700 dark:text-gray-300">{chap.bookTitle}</strong>
                  </p>
                  <div className="flex justify-between text-[10px] text-gray-400 pt-1">
                    <span>{chap.publisher}</span>
                    <span>{chap.year}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Scholar Citation alert card */}
            <div className="bg-primary-dark text-white rounded-3xl p-5 shadow space-y-3">
              <h4 className="font-bold text-sm">Google Scholar</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                For a complete, real-time list of all citation indexes, co-authors, and peer reviews, explore the Google Scholar profile.
              </p>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-medical text-white text-xs font-bold rounded-xl shadow hover:bg-medical-light transition-all"
              >
                Open Google Scholar
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
