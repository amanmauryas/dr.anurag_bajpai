"use client";

import { useEffect, useState, useRef } from "react";
import { Award, Users, FileText, BookOpen, Star } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: any;
}

const stats: StatItem[] = [
  { value: 17, suffix: "+", label: "Years of Experience", sublabel: "At AIIMS & internationally", icon: Award },
  { value: 25000, suffix: "+", label: "Patients Treated", sublabel: "With compassionate care", icon: Users },
  { value: 50, suffix: "+", label: "Indexed Research Papers", sublabel: "In peer-reviewed journals", icon: FileText },
  { value: 7, suffix: "", label: "Textbooks Published", sublabel: "And over 100+ book chapters", icon: BookOpen },
  { value: 1800, suffix: "+", label: "Google Scholar Citations", sublabel: "Driving academic research", icon: Star },
];

export default function StatsSection() {
  const [animatedValues, setAnimatedValues] = useState<number[]>(stats.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // 2 seconds
          const steps = 50;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep += 1;
            setAnimatedValues(
              stats.map((stat) => {
                const target = stat.value;
                const value = Math.floor((target / steps) * currentStep);
                return value > target ? target : value;
              })
            );

            if (currentStep >= steps) {
              clearInterval(timer);
              setAnimatedValues(stats.map((stat) => stat.value));
            }
          }, stepTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm text-center hover-premium"
          >
            <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-500 mb-4">
              <Icon className="w-5 h-5" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {formatNumber(animatedValues[index])}
              {stat.suffix}
            </p>
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-2 mb-1">
              {stat.label}
            </h4>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
              {stat.sublabel}
            </p>
          </div>
        );
      })}
    </div>
  );
}
