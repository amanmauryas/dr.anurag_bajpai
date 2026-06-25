"use client";

import { useState } from "react";
import { TrendingUp, RefreshCw, Info } from "lucide-react";

export default function GrowthCalculator() {
  const [fatherHeight, setFatherHeight] = useState("");
  const [motherHeight, setMotherHeight] = useState("");
  const [childGender, setChildGender] = useState("male");
  const [result, setResult] = useState<{
    targetHeight: number;
    targetHeightFt: string;
    rangeLower: number;
    rangeLowerFt: string;
    rangeUpper: number;
    rangeUpperFt: string;
  } | null>(null);

  const cmToFtIn = (cm: number) => {
    const inches = cm / 2.54;
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.round(inches % 12);
    return `${feet}'${remainingInches}"`;
  };

  const calculateTargetHeight = (e: React.FormEvent) => {
    e.preventDefault();
    const f = parseFloat(fatherHeight);
    const m = parseFloat(motherHeight);

    if (isNaN(f) || isNaN(m) || f <= 0 || m <= 0) return;

    let target = 0;
    if (childGender === "male") {
      target = (f + m + 13) / 2;
    } else {
      target = (f + m - 13) / 2;
    }

    const lower = target - 8.5; // Target range is typically +/- 8.5 cm
    const upper = target + 8.5;

    setResult({
      targetHeight: parseFloat(target.toFixed(1)),
      targetHeightFt: cmToFtIn(target),
      rangeLower: parseFloat(lower.toFixed(1)),
      rangeLowerFt: cmToFtIn(lower),
      rangeUpper: parseFloat(upper.toFixed(1)),
      rangeUpperFt: cmToFtIn(upper),
    });
  };

  const resetForm = () => {
    setFatherHeight("");
    setMotherHeight("");
    setChildGender("male");
    setResult(null);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8" id="growth-calc-widget">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-500">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Growth & Target Height Calculator</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Calculate child's genetic mid-parental target height</p>
        </div>
      </div>

      {!result ? (
        <form onSubmit={calculateTargetHeight} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Child's Biological Sex
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setChildGender("male")}
                className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                  childGender === "male"
                    ? "bg-brand-500 text-white border-brand-500"
                    : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-200"
                }`}
              >
                Boy
              </button>
              <button
                type="button"
                onClick={() => setChildGender("female")}
                className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                  childGender === "female"
                    ? "bg-brand-500 text-white border-brand-500"
                    : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-200"
                }`}
              >
                Girl
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Father's Height (cm)
              </label>
              <input
                type="number"
                step="0.1"
                required
                min="100"
                max="250"
                value={fatherHeight}
                onChange={(e) => setFatherHeight(e.target.value)}
                placeholder="e.g. 175"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:border-brand-500 text-slate-950 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Mother's Height (cm)
              </label>
              <input
                type="number"
                step="0.1"
                required
                min="100"
                max="250"
                value={motherHeight}
                onChange={(e) => setMotherHeight(e.target.value)}
                placeholder="e.g. 160"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:border-brand-500 text-slate-950 dark:text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 mt-2 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-clinical-blue hover:from-brand-700 hover:to-blue-700 shadow-md shadow-brand-500/10 transition-all cursor-pointer"
          >
            Calculate Target Height
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border text-center bg-slate-50 dark:bg-slate-950/20 border-slate-100 dark:border-slate-800">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Mid-Parental Target Height</p>
            <p className="text-5xl font-black text-slate-900 dark:text-white my-2">{result.targetHeight} cm</p>
            <p className="text-lg font-bold text-brand-600 dark:text-brand-400">Approx. {result.targetHeightFt}</p>
          </div>

          <div className="border border-slate-100 dark:border-slate-800 rounded-2xl p-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Genetic Range (+/- 8.5 cm)</h4>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Lower Bound:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{result.rangeLower} cm ({result.rangeLowerFt})</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Upper Bound:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{result.rangeUpper} cm ({result.rangeUpperFt})</span>
            </div>
          </div>

          <div className="flex items-start space-x-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            <Info className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
            <p>
              The Mid-Parental Height is a genetic estimation of a child's final adult height. Note that nutritional status, chronic illnesses, and hormonal deficiencies can cause a child to deviate from this target.
            </p>
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
