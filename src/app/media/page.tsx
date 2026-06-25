"use client";

import React, { useState } from "react";
import { Video, FileText, Image as ImageIcon, ExternalLink, Calendar, Play } from "lucide-react";

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<"video" | "press" | "gallery">("video");

  const videoLectures = [
    {
      title: "Approaching Short Stature in General Pediatrics",
      platform: "YouTube / MedEClasses",
      duration: "42 mins",
      views: "5,400+ views",
      description: "A clinical walkthrough explaining height percentiles, bone age indices, and when to refer children for endocrine evaluations.",
      link: "https://www.youtube.com",
    },
    {
      title: "Understanding Insulin Pumps and CGMs in Type 1 Diabetes",
      platform: "IAP Webinar",
      duration: "30 mins",
      views: "3,200+ views",
      description: "An advanced session showcasing hybrid closed-loop insulin delivery and sensor glucose analytics in pediatric clinics.",
      link: "https://www.youtube.com",
    },
    {
      title: "Childhood Obesity and the Risk of Type 2 Diabetes",
      platform: "Kanpur Endocrine Society Lecture",
      duration: "25 mins",
      views: "1,800+ views",
      description: "Addressing insulin resistance, metabolic markers (Acanthosis Nigricans), and family-centered therapeutic options.",
      link: "https://www.youtube.com",
    },
  ];

  const pressMentions = [
    {
      headline: "Growth Hormone Therapy: Breakthroughs & Myths in Indian Children",
      source: "The Hindu (Health Section)",
      date: "October 14, 2025",
      excerpt: "Dr. Anurag Bajpai emphasizes the role of newborn screening and clarifies that Growth Hormone is only effective prior to growth plate fusion.",
    },
    {
      headline: "Rising Prevalence of Pre-diabetes and PCOS in Teenage Girls in Uttar Pradesh",
      source: "Dainik Jagran",
      date: "March 03, 2026",
      excerpt: "Discussing lifestyle modifications and metformin therapies to combat metabolic syndromes in school-aged children.",
    },
    {
      headline: "MedEClasses Launches Advanced Pediatric Endocrine Course for SAARC Doctors",
      source: "Medical Times India",
      date: "January 22, 2026",
      excerpt: "Bridging the specialist gap: Over 200 pediatricians enroll in a hybrid course to learn pediatric endocrine protocols.",
    },
  ];

  const galleryImages = [
    { title: "ISPAE Executive Meeting", location: "Mumbai", year: "2025" },
    { title: "Keynote Address, Growth Clinic Conference", location: "New Delhi", year: "2026" },
    { title: "Advanced Pediatric Diabetes Workshop", location: "Kanpur", year: "2026" },
    { title: "Mentoring Pediatric Endocrinology Fellows", location: "Regency Hospital", year: "2025" },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-20 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-medical-light font-sans">Media Center</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">
            Media, Press & Lectures
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mt-2">
            Watch lecture videos, read public press columns, and browse conference gallery documentation.
          </p>
        </div>
      </section>

      {/* Tabs Menu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex border-b border-gray-200 dark:border-gray-800 mb-10 max-w-lg mx-auto">
          <button
            onClick={() => setActiveTab("video")}
            className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "video"
                ? "border-medical text-medical dark:text-medical-light"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            <Video className="h-4 w-4" />
            Lectures
          </button>
          <button
            onClick={() => setActiveTab("press")}
            className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "press"
                ? "border-medical text-medical dark:text-medical-light"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            <FileText className="h-4 w-4" />
            Press Mentions
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "gallery"
                ? "border-medical text-medical dark:text-medical-light"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            <ImageIcon className="h-4 w-4" />
            Gallery
          </button>
        </div>

        {/* Tab Panels */}
        <div className="max-w-5xl mx-auto">
          {activeTab === "video" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoLectures.map((vid, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow transition-all flex flex-col justify-between group"
                >
                  <div className="h-44 bg-primary text-white flex items-center justify-center relative group-hover:bg-primary-dark/95 transition-colors">
                    <Play className="h-12 w-12 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    <span className="absolute bottom-2.5 right-2.5 bg-black/60 px-2 py-0.5 rounded text-[10px] font-semibold">
                      {vid.duration}
                    </span>
                  </div>
                  <div className="p-5 space-y-2 flex-grow">
                    <span className="text-[10px] font-bold text-medical uppercase tracking-wider block">
                      {vid.platform}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                      {vid.description}
                    </p>
                  </div>
                  <div className="p-5 border-t border-gray-50 dark:border-gray-800 flex justify-between items-center text-[10px] text-gray-400 font-semibold bg-slate-50/20">
                    <span>{vid.views}</span>
                    <a
                      href={vid.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-medical-light font-bold flex items-center gap-0.5 hover:underline"
                    >
                      Watch Video
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "press" && (
            <div className="space-y-6">
              {pressMentions.map((press, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-6 shadow-sm hover:shadow transition-all space-y-3"
                >
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="text-[10px] font-bold text-medical bg-medical-ultra-light/50 dark:bg-medical-ultra-light/10 px-2.5 py-1 rounded-full uppercase">
                      {press.source}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {press.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-905 dark:text-white leading-tight">
                    {press.headline}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {press.excerpt}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-850 rounded-2xl overflow-hidden shadow-sm hover:shadow transition-all flex flex-col group"
                >
                  {/* Visual placeholder card */}
                  <div className="h-44 bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-850 text-gray-400 dark:text-gray-600 flex flex-col items-center justify-center relative p-4 group-hover:scale-105 transition-transform duration-300">
                    <ImageIcon className="h-10 w-10 opacity-60 mb-2" />
                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">Conference Photo</span>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between space-y-1">
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-tight">
                      {img.title}
                    </h4>
                    <div className="flex justify-between text-[10px] text-gray-400 pt-2 border-t border-gray-50 dark:border-gray-800 mt-2">
                      <span>{img.location}</span>
                      <span>Year: {img.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
