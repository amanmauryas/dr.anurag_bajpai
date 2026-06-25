"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, RefreshCw, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function GrowthCalculator() {
  const [calcType, setCalcType] = useState<"percentile" | "parental">("percentile");
  
  // Percentile States
  const [age, setAge] = useState<number>(8);
  const [gender, setGender] = useState<"boy" | "girl">("boy");
  const [childHeight, setChildHeight] = useState<number>(118); // cm
  
  // Parental Target States
  const [fatherHeight, setFatherHeight] = useState<number>(172); // cm
  const [motherHeight, setMotherHeight] = useState<number>(158); // cm
  
  const [percentileResult, setPercentileResult] = useState<{
    status: "Short Stature / Low Growth" | "Normal Growth Track";
    colorClass: string;
    description: string;
    details: string;
  } | null>(null);

  const [parentalResult, setParentalResult] = useState<{
    targetHeight: number;
    rangeMin: number;
    rangeMax: number;
  } | null>(null);

  // Approximate CDC / WHO 3rd percentile height thresholds for children (boys & girls)
  const thirdPercentileHeights: { [key: number]: { boy: number; girl: number } } = {
    2: { boy: 82, girl: 80 },
    3: { boy: 89, girl: 88 },
    4: { boy: 95, girl: 94 },
    5: { boy: 101, girl: 100 },
    6: { boy: 106, girl: 105 },
    7: { boy: 112, girl: 110 },
    8: { boy: 117, girl: 115 },
    9: { boy: 122, girl: 120 },
    10: { boy: 127, girl: 125 },
    11: { boy: 131, girl: 131 },
    12: { boy: 136, girl: 137 },
    13: { boy: 142, girl: 143 },
    14: { boy: 149, girl: 148 },
    15: { boy: 155, girl: 151 },
    16: { boy: 161, girl: 153 },
    17: { boy: 163, girl: 154 },
    18: { boy: 164, girl: 154 }
  };

  const calculatePercentile = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanAge = Math.min(Math.max(age, 2), 18);
    const thresholds = thirdPercentileHeights[cleanAge] || { boy: 80 + (cleanAge - 2) * 5, girl: 78 + (cleanAge - 2) * 5 };
    
    const limit = gender === "boy" ? thresholds.boy : thresholds.girl;
    
    if (childHeight < limit) {
      setPercentileResult({
        status: "Short Stature / Low Growth",
        colorClass: "bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/20 dark:text-rose-350 dark:border-rose-900",
        description: `Your child's height (${childHeight} cm) is below the 3rd percentile for a ${cleanAge}-year-old ${gender}. This indicates possible short stature or growth delay.`,
        details: "We highly recommend a professional growth evaluation. Common reasons include growth hormone deficiency, early bone plate fusion, or thyroid abnormalities. Starting treatment (like Growth Hormone Therapy) prior to puberty achieves optimal results."
      });
    } else {
      setPercentileResult({
        status: "Normal Growth Track",
        colorClass: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-350 dark:border-emerald-900",
        description: `Your child's height (${childHeight} cm) is within the normal percentile range for a ${cleanAge}-year-old ${gender}.`,
        details: "Continue tracking height annually. Growth is a vital sign of pediatric health; a steady tracking on the same growth line indicates correct developmental progression."
      });
    }
  };

  const calculateParentalTarget = (e: React.FormEvent) => {
    e.preventDefault();
    let target = 0;
    if (gender === "boy") {
      target = (fatherHeight + motherHeight + 13) / 2;
    } else {
      target = (fatherHeight + motherHeight - 13) / 2;
    }
    
    setParentalResult({
      targetHeight: target,
      rangeMin: target - 8,
      rangeMax: target + 8
    });
  };

  const resetCalculator = () => {
    setPercentileResult(null);
    setParentalResult(null);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 md:p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-medical-ultra-light text-medical rounded-xl">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Growth & Target Height Calculator</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Assess child growth metrics and genetic target potential</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        <button
          onClick={() => { setCalcType("percentile"); resetCalculator(); }}
          className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition-all ${
            calcType === "percentile"
              ? "border-medical text-medical dark:text-medical-light"
              : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          Height Percentile Check
        </button>
        <button
          onClick={() => { setCalcType("parental"); resetCalculator(); }}
          className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition-all ${
            calcType === "parental"
              ? "border-medical text-medical dark:text-medical-light"
              : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          Mid-Parental (Target) Height
        </button>
      </div>

      {calcType === "percentile" ? (
        !percentileResult ? (
          <form onSubmit={calculatePercentile} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Age (2 - 18 Years)
                </label>
                <input
                  type="number"
                  min="2"
                  max="18"
                  required
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-medical focus:outline-none dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Biological Sex
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender("boy")}
                    className={`py-2.5 text-sm font-medium rounded-xl border transition-all ${
                      gender === "boy"
                        ? "bg-medical text-white border-medical"
                        : "bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    Boy
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender("girl")}
                    className={`py-2.5 text-sm font-medium rounded-xl border transition-all ${
                      gender === "girl"
                        ? "bg-medical text-white border-medical"
                        : "bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    Girl
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Current Height (cm)
              </label>
              <input
                type="number"
                min="50"
                max="210"
                required
                value={childHeight}
                onChange={(e) => setChildHeight(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-medical focus:outline-none dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-primary dark:bg-primary-light hover:bg-primary-light dark:hover:bg-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all"
            >
              Analyze Growth Status
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className={`p-5 rounded-2xl border ${percentileResult.colorClass}`}>
              <div className="flex items-center gap-2 font-bold text-lg mb-2">
                {percentileResult.status === "Normal Growth Track" ? (
                  <CheckCircle className="h-6 w-6 text-emerald-600 shrink-0" />
                ) : (
                  <AlertTriangle className="h-6 w-6 text-rose-600 shrink-0" />
                )}
                {percentileResult.status}
              </div>
              <p className="text-sm leading-relaxed mb-3">{percentileResult.description}</p>
              <p className="text-xs opacity-90 leading-relaxed font-medium">{percentileResult.details}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={resetCalculator}
                className="flex-1 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Calculate New
              </button>
              {percentileResult.status === "Short Stature / Low Growth" && (
                <Link
                  href="/book"
                  className="flex-1 py-3 bg-medical text-white font-semibold rounded-xl flex items-center justify-center gap-1 shadow hover:bg-medical-light transition-all"
                >
                  Consult Dr. Bajpai
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        )
      ) : (
        /* Mid Parental Height Calc */
        !parentalResult ? (
          <form onSubmit={calculateParentalTarget} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Child's Gender
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender("boy")}
                    className={`py-2.5 text-sm font-medium rounded-xl border transition-all ${
                      gender === "boy"
                        ? "bg-medical text-white border-medical"
                        : "bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    Boy
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender("girl")}
                    className={`py-2.5 text-sm font-medium rounded-xl border transition-all ${
                      gender === "girl"
                        ? "bg-medical text-white border-medical"
                        : "bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    Girl
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Father's Height (cm)
                </label>
                <input
                  type="number"
                  min="100"
                  max="250"
                  required
                  value={fatherHeight}
                  onChange={(e) => setFatherHeight(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-medical focus:outline-none dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Mother's Height (cm)
              </label>
              <input
                type="number"
                min="100"
                max="250"
                required
                value={motherHeight}
                onChange={(e) => setMotherHeight(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-medical focus:outline-none dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-primary dark:bg-primary-light hover:bg-primary-light dark:hover:bg-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all"
            >
              Calculate Genetic Target
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-gray-150 dark:border-gray-800 flex flex-col items-center text-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Mid-Parental Target Height</span>
              <span className="text-4xl font-extrabold text-primary dark:text-white mt-1.5">{parentalResult.targetHeight} cm</span>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-sm">
                Target genetic height for a {gender} child based on parent values is estimated around <strong className="text-gray-800 dark:text-white">{parentalResult.targetHeight} cm</strong>.
              </p>
              
              <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4 pt-3">
                <span className="text-xs font-semibold text-gray-400 uppercase">Target Range (± 8 cm)</span>
                <p className="text-base font-bold text-medical mt-0.5">
                  {parentalResult.rangeMin} cm to {parentalResult.rangeMax} cm
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-slate-800/40 rounded-xl p-4 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              <strong>Clinical Context:</strong> The Mid-Parental Height formula provides a target genetic range representing where 95% of children from these parents will land in height, barring systemic illness, nutritional deficits, or hormone disorders. If your child tracks significantly below this range, a pediatric endocrine consult is recommended.
            </div>

            <div className="flex gap-3">
              <button
                onClick={resetCalculator}
                className="flex-1 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Calculate New
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
