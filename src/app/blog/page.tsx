"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Filter } from "lucide-react";
import { blogPostsData } from "@/data/blog";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Growth", "Diabetes", "Hormones"];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-20 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-medical-light font-sans">Patient Education</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">
            Endocrine Education Blog
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mt-2">
            Physician-authored insights on child health, hormone science, growth checks, and pediatric diabetes management.
          </p>
        </div>
      </section>

      {/* Main search and grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Search and category filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 p-5 rounded-3xl shadow-sm mb-10">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search blogs or tags (e.g. insulin)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-medical dark:text-white"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <Filter className="h-4 w-4 text-gray-400 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 shrink-0 mr-1">Category:</span>
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
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="text-[10px] font-bold text-medical dark:text-medical-light bg-medical-ultra-light/50 dark:bg-medical-ultra-light/10 px-2.5 py-1 rounded-full uppercase">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 font-semibold">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-medical transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-bold text-gray-450 dark:text-gray-500 bg-slate-50 dark:bg-slate-800/40 px-2 py-0.5 rounded"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 border-t border-gray-50 dark:border-gray-800 flex justify-between items-center text-xs bg-slate-50/20">
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-primary dark:text-white hover:text-medical flex items-center gap-1.5 transition-colors"
                  >
                    Read Post
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-gray-800">
            <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">No articles matched your filter</h3>
            <p className="text-sm text-gray-500 mt-1">Try testing other search queries.</p>
          </div>
        )}

      </section>

    </div>
  );
}
