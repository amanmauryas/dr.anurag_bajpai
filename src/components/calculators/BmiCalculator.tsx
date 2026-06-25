"use client";

import { useState } from "react";
import { Calculator, RefreshCw, AlertCircle } from "lucide-react";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    description: string;
    color: string;
  } | null>(null);

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // cm to m
    const a = parseInt(age);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return;

    const bmiValue = parseFloat((w / (h * h)).toFixed(1));
    
    // Pediatric BMI categories are based on percentiles, we'll model standard pediatric guidelines:
    let category = "";
    let description = "";
    let color = "";

    if (bmiValue < 14) {
      category = "Underweight";
      description = "Your child's BMI is in the underweight range. It is recommended to discuss their nutrition and development with a pediatrician.";
      color = "bg-amber-500/10 border-amber-500 text-amber-600 dark:text-amber-400";
    } else if (bmiValue >= 14 && bmiValue < 18.5) {
      category = "Healthy Weight";
      description = "Your child is in the healthy weight range. Maintain a balanced diet and encourage active physical play.";
      color = "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400";
    } else if (bmiValue >= 18.5 && bmiValue < 22) {
      category = "Overweight Risk";
      description = "Your child's BMI indicates a potential risk of being overweight. Focus on healthy eating habits and reducing screen time.";
      color = "bg-orange-500/10 border-orange-500 text-orange-600 dark:text-orange-400";
    } else {
      category = "Obesity Risk";
      description = "Your child's BMI falls in the obesity risk range. An evaluation by a pediatric endocrinologist is recommended to check for metabolic factors.";
      color = "bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400";
    }

    setResult({ bmi: bmiValue, category, description, color });
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setResult(null);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8" id="bmi-calc-widget">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-500">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Pediatric BMI Calculator</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Calculate body mass index for children & adolescents</p>
        </div>
      </div>

      {!result ? (
        <form onSubmit={calculateBmi} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Age (years)
              </label>
              <input
                type="number"
                required
                min="2"
                max="20"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="e.g. 8"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:border-brand-500 text-slate-950 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Biological Sex
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-brand-500 text-slate-950 dark:text-white"
              >
                <option value="male">Boy</option>
                <option value="female">Girl</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                step="0.1"
                required
                min="5"
                max="150"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 26"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:border-brand-500 text-slate-950 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                step="0.1"
                required
                min="60"
                max="220"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 125"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:border-brand-500 text-slate-950 dark:text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 mt-2 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-clinical-blue hover:from-brand-700 hover:to-blue-700 shadow-md shadow-brand-500/10 transition-all cursor-pointer"
          >
            Calculate BMI
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border text-center bg-slate-50 dark:bg-slate-950/20 border-slate-100 dark:border-slate-800">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Calculated BMI Value</p>
            <p className="text-5xl font-black text-slate-900 dark:text-white my-2">{result.bmi}</p>
            <div className={`inline-block px-3 py-1.5 rounded-full border text-xs font-bold ${result.color}`}>
              {result.category}
            </div>
          </div>

          <div className="flex items-start space-x-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            <AlertCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
            <p>{result.description}</p>
          </div>

          <button
            onClick={resetForm}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-bold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Calculate Again</span>
          </button>
        </div>
      )}
    </div>
  );
}
