import React from "react";
import { BookOpen, ExternalLink, ShoppingCart, Award } from "lucide-react";
import { booksData } from "@/data/publications";

export const metadata = {
  title: "Books & Manuals | Dr. Anurag Bajpai",
  description: "Browse the authored and edited textbooks and clinical protocols by Dr. Anurag Bajpai, including Practical Pediatric Endocrinology.",
};

export default function BooksPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-20 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-medical-light font-sans">Academic Library</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">
            Authored Books & Manuals
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mt-2">
            Explore textbooks, handbook manuals, and clinical guidelines written for pediatricians, fellows, and endocrine clinicians.
          </p>
        </div>
      </section>

      {/* Bookshelf list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10 max-w-5xl mx-auto">
          {booksData.map((book, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
            >
              {/* Cover placeholder graphic */}
              <div className="w-full md:w-44 h-60 bg-gradient-to-tr from-primary to-primary-light dark:from-slate-800 dark:to-slate-750 text-white rounded-2xl flex flex-col justify-between p-4 shadow-md shrink-0 relative border-l-8 border-yellow-500">
                <div className="space-y-1">
                  <div className="text-[9px] font-bold tracking-widest text-yellow-400 uppercase">Textbook</div>
                  <h3 className="text-sm font-extrabold leading-tight tracking-tight line-clamp-4">
                    {book.title}
                  </h3>
                </div>
                
                <div className="space-y-1 pt-4 border-t border-white/10 text-[9px] opacity-75">
                  <p>Dr. Anurag Bajpai</p>
                  <p className="font-semibold text-yellow-400">{book.publisher}</p>
                </div>
              </div>

              {/* Book Details */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="text-[10px] font-bold text-medical dark:text-medical-light bg-medical-ultra-light/50 dark:bg-medical-ultra-light/10 px-2.5 py-1 rounded-full uppercase">
                    Published Year: {book.year}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold">{book.publisher}</span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {book.title}
                  </h2>
                  {book.subtitle && (
                    <p className="text-sm text-medical font-semibold mt-1">
                      {book.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {book.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary dark:bg-primary-light hover:bg-primary-light dark:hover:bg-blue-600 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Buy on Amazon
                  </a>
                  {book.title.includes("MedEClasses") && (
                    <a
                      href="https://www.medeclasses.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-gray-250 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-xl transition-all"
                    >
                      <BookOpen className="h-4 w-4 text-medical" />
                      MedEClasses Portal
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Protocol Alert CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary dark:bg-primary-dark text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-4 items-start text-center sm:text-left">
            <Award className="h-10 w-10 text-yellow-400 shrink-0 hidden sm:block mt-1" />
            <div className="space-y-1">
              <h3 className="text-lg font-bold">IAP & ISPAE Consensus Guidelines</h3>
              <p className="text-xs text-gray-300 leading-relaxed max-w-xl">
                Dr. Bajpai has contributed heavily to pediatric endocrine guidelines in India, covering Growth Hormone audits, DKA protocols, and congenital hypothyroidism guidelines.
              </p>
            </div>
          </div>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-medical hover:bg-medical-light text-white text-xs font-bold rounded-xl shadow transition-all whitespace-nowrap"
          >
            Explore Guidelines
          </a>
        </div>
      </section>

    </div>
  );
}
