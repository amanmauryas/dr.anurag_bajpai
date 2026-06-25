"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, RefreshCw, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function BMICalculator() {
  const [age, setAge] = useState<number>(8);
  const [gender, setGender] = useState<"boy" | "girl">("boy");
  const [height, setHeight] = useState<number>(128); // in cm
  const [weight, setWeight] = useState<number>(27); // in kg
  const [result, setResult] = useState<{
    bmi: number;
    category: "Underweight" | "Normal weight" | "Overweight" | "Obese";
    colorClass: string;
    advice: string;
  } | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!height || !weight || !age) return;

    const heightInMeters = height / 100;
    const bmi = parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1));

    let category: "Underweight" | "Normal weight" | "Overweight" | "Obese" = "Normal weight";
    let colorClass = "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900";
    let advice = "";

    if (age >= 20) {
      // Adult BMI categories
      if (bmi < 18.5) {
        category = "Underweight";
        colorClass = "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900";
        advice = "Your BMI is below the healthy weight range. We recommend evaluating your nutritional habits or discussing with a healthcare professional to identify potential underlying causes.";
      } else if (bmi >= 30) {
        category = "Obese";
        colorClass = "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900";
        advice = "Your BMI falls in the obese range. Obesity is linked to increased risks of metabolic conditions (such as diabetes and thyroid issues) and cardiovascular disease. We advise consulting a physician or specialist for a comprehensive assessment.";
      } else if (bmi >= 25) {
        category = "Overweight";
        colorClass = "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900";
        advice = "Your BMI is in the overweight range. Focus on a balanced diet, portion control, and regular physical activity to help manage your weight.";
      } else {
        category = "Normal weight";
        colorClass = "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900";
        advice = "Your BMI is in the healthy range. Continue maintaining a balanced diet and regular physical activity.";
      }
    } else {
      // Pediatric BMI categories based on age and sex (CDC percentiles simplified)
      const ageFactor = (age - 2) * 0.45; // BMI threshold increases with age
      const baseUnderweight = 13.5 + ageFactor * 0.5;
      const baseOverweight = 17.5 + ageFactor * 0.7;
      const baseObese = 19.5 + ageFactor * 0.9;

      if (bmi < baseUnderweight) {
        category = "Underweight";
        colorClass = "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900";
        advice = "Your child is below the healthy weight range. Consider evaluating their nutritional habits. We recommend checking for growth delay or systemic disorders. Consult Dr. Anurag Bajpai for a detailed auxological assessment.";
      } else if (bmi >= baseObese) {
        category = "Obese";
        colorClass = "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900";
        advice = "Your child's BMI is in the obese range. Pediatric obesity is strongly linked with insulin resistance, thyroid disorders, and early puberty. We advise scheduling a pediatric endocrine evaluation to check for metabolic symptoms.";
      } else if (bmi >= baseOverweight) {
        category = "Overweight";
        colorClass = "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900";
        advice = "Your child is above the healthy weight range. Focus on reducing sugary beverages and processed foods, and limiting screen time to under 2 hours daily. Schedule a consultation if you notice dark skin folds around the neck.";
      } else {
        category = "Normal weight";
        colorClass = "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900";
        advice = "Your child's BMI is in the healthy range. Continue to provide a balanced diet, encourage 60 minutes of active play daily, and ensure regular sleep patterns.";
      }
    }

    setResult({ bmi, category, colorClass, advice });
  };

  const resetCalculator = () => {
    setAge(8);
    setGender("boy");
    setHeight(128);
    setWeight(27);
    setResult(null);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 md:p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-medical-ultra-light text-medical rounded-xl">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">BMI Calculator</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">For children, adolescents, and adults (ages 2+)</p>
        </div>
      </div>

      {!result ? (
        <form onSubmit={calculateBMI} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            {/* Age */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Age (Years)
              </label>
              <input
                type="number"
                min="2"
                max="120"
                required
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-medical focus:outline-none dark:text-white"
              />
            </div>

            {/* Gender */}
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

          <div className="grid grid-cols-2 gap-4">
            {/* Height */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Height (cm)
              </label>
              <input
                type="number"
                min="60"
                max="220"
                required
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-medical focus:outline-none dark:text-white"
              />
            </div>

            {/* Weight */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Weight (kg)
              </label>
              <input
                type="number"
                min="5"
                max="150"
                required
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-medical focus:outline-none dark:text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-primary dark:bg-primary-light hover:bg-primary-light dark:hover:bg-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all"
          >
            Calculate BMI {age < 20 && "Percentile"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className={`p-5 rounded-2xl border ${result.colorClass} flex flex-col items-center text-center`}>
            <span className="text-xs font-bold uppercase tracking-widest opacity-85">BMI Index</span>
            <span className="text-5xl font-extrabold tracking-tight mt-1">{result.bmi}</span>
            <div className="mt-3 px-4 py-1.5 bg-white/40 dark:bg-slate-900/40 rounded-full text-base font-bold shadow-sm">
              Category: {result.category}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <AlertCircle className="h-5 w-5 text-medical shrink-0 mt-0.5" />
              <p>{result.advice}</p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-800/40 rounded-xl p-4 text-xs text-gray-500 dark:text-gray-400">
              {age >= 20 ? (
                <span>
                  <strong>Note on Adult BMI:</strong> Adult BMI is evaluated using standard fixed categories (Underweight &lt; 18.5, Normal 18.5–24.9, Overweight 25–29.9, Obese &ge; 30). Unlike children, it does not depend on percentiles, age, or biological sex.
                </span>
              ) : (
                <span>
                  <strong>Note on Pediatric BMI:</strong> Unlike adults, child BMI is evaluated relative to peers of the same age and sex. A child's weight status is determined by percentiles, where normal weight lies between the 5th and 84th percentiles.
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={resetCalculator}
                className="flex-1 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Calculate New
              </button>
              {(result.category === "Obese" || result.category === "Underweight" || result.category === "Overweight") && (
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
        </div>
      )}
    </div>
  );
}
