"use client";

import { useState } from "react";
import { Sparkles, RefreshCw, AlertTriangle, CheckSquare, Square } from "lucide-react";

export default function PubertyChecklist() {
  const [gender, setGender] = useState<"male" | "female">("female");
  const [age, setAge] = useState("");
  const [selectedSigns, setSelectedSigns] = useState<string[]>([]);
  const [result, setResult] = useState<{
    status: "normal" | "early" | "delayed" | "evaluate";
    title: string;
    description: string;
    color: string;
  } | null>(null);

  const girlSigns = [
    { id: "breasts", label: "Breast development / breast buds" },
    { id: "pubic", label: "Pubic hair growth" },
    { id: "axillary", label: "Underarm hair / body odor" },
    { id: "acne", label: "Acne or skin changes" },
    { id: "period", label: "Menstrual cycle / period started" },
    { id: "spurt", label: "Rapid height growth spurt" },
  ];

  const boySigns = [
    { id: "testes", label: "Testicular enlargement (primary sign)" },
    { id: "pubic", label: "Pubic hair growth" },
    { id: "axillary", label: "Underarm hair / body odor" },
    { id: "voice", label: "Voice breaking or deepening" },
    { id: "acne", label: "Acne or skin changes" },
    { id: "facial", label: "Facial hair growth" },
    { id: "spurt", label: "Rapid height growth spurt" },
  ];

  const toggleSign = (id: string) => {
    if (selectedSigns.includes(id)) {
      setSelectedSigns(selectedSigns.filter((s) => s !== id));
    } else {
      setSelectedSigns([...selectedSigns, id]);
    }
  };

  const handleGenderChange = (selectedGender: "male" | "female") => {
    setGender(selectedGender);
    setSelectedSigns([]);
    setResult(null);
  };

  const checkPubertyStatus = (e: React.FormEvent) => {
    e.preventDefault();
    const a = parseFloat(age);
    if (isNaN(a) || a <= 0) return;

    let status: "normal" | "early" | "delayed" | "evaluate" = "normal";
    let title = "Normal Growth Progression";
    let description = "Based on the details provided, your child's physical development appears to be within normal age boundaries. Continue regular pediatric growth monitoring.";
    let color = "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400";

    const hasBreasts = selectedSigns.includes("breasts");
    const hasPeriod = selectedSigns.includes("period");
    const hasTestes = selectedSigns.includes("testes");
    const hasPubic = selectedSigns.includes("pubic");

    if (gender === "female") {
      // Early Puberty (Precocious): breast development before age 8, period before age 9/10
      if (a < 8 && (hasBreasts || hasPubic)) {
        status = "early";
        title = "Early (Precocious) Puberty Flag";
        description = "Physical development (breasts or pubic hair) before age 8 in girls is considered early. We recommend consulting a pediatric endocrinologist for bone age and hormonal evaluations.";
        color = "bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400";
      } else if (a < 9 && hasPeriod) {
        status = "early";
        title = "Early Menstruation Flag";
        description = "Onset of periods before age 9 is early and can affect child's emotional comfort and final adult height. Consulting a specialist is advised.";
        color = "bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400";
      }
      // Delayed Puberty: no breasts by age 13
      else if (a >= 13 && !hasBreasts) {
        status = "delayed";
        title = "Delayed Puberty Flag";
        description = "Lack of breast development by age 13 in girls warrants a clinical assessment to check hormone levels and rule out ovarian or chromosomal concerns (e.g. Turner syndrome).";
        color = "bg-amber-500/10 border-amber-500 text-amber-600 dark:text-amber-400";
      }
    } else {
      // Boys: early is testes/pubic before age 9
      if (a < 9 && (hasTestes || hasPubic)) {
        status = "early";
        title = "Early Puberty Flag";
        description = "Physical development (testicular growth or pubic hair) before age 9 in boys is early. We recommend a hormone panel and bone age check with a pediatric endocrinologist.";
        color = "bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400";
      }
      // Delayed: no testicular growth by age 14
      else if (a >= 14 && !hasTestes) {
        status = "delayed";
        title = "Delayed Puberty Flag";
        description = "Lack of testicular enlargement (the first physical sign of puberty) by age 14 in boys is delayed. A pediatric endocrine evaluation is recommended to check pituitary and testicular function.";
        color = "bg-amber-500/10 border-amber-500 text-amber-600 dark:text-amber-400";
      }
    }

    setResult({ status, title, description, color });
  };

  const resetForm = () => {
    setAge("");
    setSelectedSigns([]);
    setResult(null);
  };

  const currentSigns = gender === "female" ? girlSigns : boySigns;

  return (
    <div className="w-full max-w-lg mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8" id="puberty-checklist-widget">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-500">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Puberty Milestones Assessment</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Assess if your child's physical development is on track</p>
        </div>
      </div>

      {!result ? (
        <form onSubmit={checkPubertyStatus} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Child's Biological Sex
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleGenderChange("female")}
                  className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                    gender === "female"
                      ? "bg-brand-500 text-white border-brand-500"
                      : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  Girl
                </button>
                <button
                  type="button"
                  onClick={() => handleGenderChange("male")}
                  className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                    gender === "male"
                      ? "bg-brand-500 text-white border-brand-500"
                      : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  Boy
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Child's Age (years)
              </label>
              <input
                type="number"
                required
                min="3"
                max="18"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="e.g. 11"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:border-brand-500 text-slate-950 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Select visible physical signs:
            </label>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {currentSigns.map((sign) => {
                const isChecked = selectedSigns.includes(sign.id);
                return (
                  <button
                    key={sign.id}
                    type="button"
                    onClick={() => toggleSign(sign.id)}
                    className="w-full flex items-center space-x-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 text-left transition-colors cursor-pointer"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-brand-500 shrink-0" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-300 dark:text-slate-700 shrink-0" />
                    )}
                    <span className="text-xs font-medium text-slate-750 dark:text-slate-200">{sign.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 mt-2 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-clinical-blue hover:from-brand-700 hover:to-blue-700 shadow-md shadow-brand-500/10 transition-all cursor-pointer"
          >
            Check Puberty Status
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className={`p-6 rounded-2xl border text-center ${result.color}`}>
            <p className="text-xs font-bold uppercase tracking-wider">Evaluation Result</p>
            <h4 className="text-2xl font-black my-2">{result.title}</h4>
            <p className="text-xs leading-relaxed mt-2 text-slate-700 dark:text-slate-300">
              {result.description}
            </p>
          </div>

          {result.status !== "normal" && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800 flex items-start space-x-3 text-xs leading-relaxed text-slate-650 dark:text-slate-355">
              <AlertTriangle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
              <p>
                <strong>Please Note:</strong> This assessment is not a substitute for a professional medical evaluation. It is designed to alert parents to potential early or delayed pubertal milestones. If you have any concerns, please schedule a clinical consultation.
              </p>
            </div>
          )}

          <button
            onClick={resetForm}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-bold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset Assessment</span>
          </button>
        </div>
      )}
    </div>
  );
}
