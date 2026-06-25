import React from "react";
import { Award, GraduationCap, MapPin, ShieldCheck, Heart, Star, Quote, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { testimonialsData, googleReviewsSummary } from "@/data/testimonials";

export const metadata = {
  title: "Biography & Credentials | Dr. Anurag Bajpai",
  description: "Learn about Dr. Anurag Bajpai's education at AIIMS, fellowship at Royal Children's Hospital Melbourne, clinical credentials, and care philosophy.",
};

export default function AboutPage() {
  const qualifications = [
    {
      degree: "FRACP – Pediatric Endocrinology",
      institution: "Royal Australasian College of Physicians, Australia",
      details: "Highest clinical accreditation for pediatric endocrinologists in Australia and New Zealand. Extensive fellowship training in advanced hormone disorders.",
    },
    {
      degree: "Clinical Fellowship in Pediatric Endocrinology",
      institution: "The Royal Children's Hospital, Melbourne, Australia",
      details: "Received advanced clinical training, specializing in growth plate physiology, neonatal hypoglycemia, and childhood diabetes technologies.",
    },
    {
      degree: "MD – Pediatrics",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      details: "Postgraduate residency at India's premier medical research university. Awarded the prestigious Dr. S.T. Achar Gold Medal.",
    },
    {
      degree: "MBBS",
      institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      details: "Undergraduate medical training at AIIMS, graduating with clinical distinction.",
    },
  ];

  const timeline = [
    {
      year: "2012 - Present",
      title: "Director & Founder, MedEClasses",
      description: "Launched an internationally recognized digital medical education platform dedicated to Pediatric Endocrinology. Trained over 1,000 physicians across hybrid courses, published 100+ training videos, and curated clinical masterclasses.",
    },
    {
      year: "2009 - Present",
      title: "Consultant / Associate Director, Regency Healthcare",
      description: "Established the largest specialized Pediatric Endocrinology service in Uttar Pradesh. Set up advanced growth clinics and type 1 diabetes support programs, treating 15,000+ children from various regions.",
    },
    {
      year: "2005 - 2008",
      title: "Pediatric Endocrinology Fellowship, Melbourne",
      description: "Advanced specialist training at The Royal Children's Hospital, Melbourne. Conducted key research on estrogen biology and bone growth plates. Honored with the Career Development Award from RCH Melbourne.",
    },
    {
      year: "1999 - 2005",
      title: "Medical Training, AIIMS New Delhi",
      description: "Completed undergraduate and postgraduate education at AIIMS New Delhi. Excelled in clinical research and pediatric medicine, establishing a foundation in academic and research leadership.",
    },
  ];

  const memberships = [
    "Indian Society for Pediatric & Adolescent Endocrinology (ISPAE) - General Secretary / Leadership",
    "Royal Australasian College of Physicians (RACP) - Fellow",
    "Indian Academy of Pediatrics (IAP) - Life Member",
    "GROW India Initiative - Founding General Secretary",
    "European Society for Paediatric Endocrinology (ESPE) - Associate Fellow",
  ];

  return (
    <>
      <SEO
        type="Person"
        data={{
          description: "Dr. Anurag Bajpai, Associate Director of Endocrinology at Regency Healthcare and Director of MedEClasses. Alumnus of AIIMS New Delhi and FRACP Australia.",
        }}
      />

      <div className="bg-slate-50 dark:bg-slate-950 pb-20">
        {/* Banner */}
        <section className="bg-primary text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
              Dr. Anurag Bajpai
            </h1>
            <p className="text-lg lg:text-xl text-medical-light font-bold uppercase tracking-wider mt-2">
              FRACP (Australia) | MD (AIIMS) | Pediatric Endocrinologist & Researcher
            </p>
          </div>
        </section>

        {/* Detailed Biography */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Bio text */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-3xl font-extrabold text-primary dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Professional Profile
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Dr. Anurag Bajpai is a distinguished Pediatric & Adolescent Endocrinologist, clinician-scientist, author, and academic leader. He has spent more than 17 years developing pediatric endocrine services, conducting clinical research, and educating healthcare practitioners on hormonal dynamics in children.
                </p>
                <p>
                  Dr. Bajpai currently serves as <strong>Associate Director in Endocrinology</strong> at Regency Healthcare, Kanpur, where he operates state-of-the-art clinics for childhood diabetes, growth hormone deficiencies, metabolic bone diseases, and complex pubertal development.
                </p>
                <p>
                  His clinical journey began at the prestigious <strong>All India Institute of Medical Sciences (AIIMS), New Delhi</strong>, where he graduated with honors and completed his post-graduation (MD) in Pediatrics. Seeking to specialize further, he completed a clinical fellowship in Pediatric Endocrinology at the internationally famous <strong>Royal Children's Hospital, Melbourne, Australia</strong>. During this time, he qualified as a Fellow of the Royal Australasian College of Physicians (FRACP).
                </p>
                <p>
                  Recognizing the gap in specialized pediatric endocrine training, Dr. Bajpai founded <strong>MedEClasses</strong>, an advanced educational platform that runs hybrid fellowship programs, masterclasses, and online training courses for pediatricians and general practitioners across India, SAARC nations, and beyond.
                </p>
              </div>

              {/* Core Values */}
              <div id="philosophy" className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-2">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-950/30 text-medical rounded-xl w-fit">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base">Evidence-Based</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Treatment protocols strictly guided by peer-reviewed research and international guidelines.</p>
                </div>

                <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-2">
                  <div className="p-2.5 bg-rose-50 dark:bg-rose-950/30 text-rose-500 rounded-xl w-fit">
                    <Heart className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base">Family-Centered</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Partnering closely with parents and school networks to manage chronic care like diabetes.</p>
                </div>

                <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-2">
                  <div className="p-2.5 bg-amber-50 dark:bg-amber-950/30 text-amber-600 rounded-xl w-fit">
                    <Award className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base">Growth Advocacy</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Promoting standardized height charts and access to growth hormone assessments.</p>
                </div>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-4 space-y-8">
              {/* Membership box */}
              <div className="bg-primary-dark text-white rounded-3xl p-6 shadow-lg space-y-6">
                <h3 className="text-lg font-bold border-b border-white/10 pb-3">
                  Memberships & Leadership
                </h3>
                <ul className="space-y-3 text-xs leading-relaxed text-gray-300">
                  {memberships.map((member, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <CheckCircle className="h-4 w-4 text-medical-light shrink-0 mt-0.5" />
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Award Recognition Box */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-850 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-primary dark:text-white border-b border-gray-50 dark:border-gray-800 pb-3">
                  Awards & Recognition
                </h3>
                <ul className="space-y-4 text-xs">
                  <li className="flex items-start gap-2.5">
                    <Award className="h-5 w-5 text-amber-500 shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white block font-semibold">Dr. S.T. Achar Gold Medal</strong>
                      <span className="text-gray-500">For outstanding clinical excellence in Pediatric Medicine at AIIMS New Delhi.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Award className="h-5 w-5 text-amber-500 shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white block font-semibold">Career Development Award</strong>
                      <span className="text-gray-500">Royal Children's Hospital, Melbourne, for research on bone growth plate physiology.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Award className="h-5 w-5 text-amber-500 shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white block font-semibold">ESPE Fellowship</strong>
                      <span className="text-gray-500">Granted by the European Society for Paediatric Endocrinology.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Qualifications Section */}
        <section className="bg-white dark:bg-slate-900 py-16 border-y border-gray-100 dark:border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-primary dark:text-white">
                Academic Qualifications
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                Certified by premium national and international board structures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {qualifications.map((q, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-gray-100 dark:border-gray-800">
                  <div className="p-3 bg-medical-ultra-light dark:bg-medical-ultra-light/20 text-medical rounded-xl shrink-0 h-fit">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-900 dark:text-white text-base">{q.degree}</h4>
                    <p className="text-xs font-semibold text-medical">{q.institution}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 pt-1 leading-relaxed">{q.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive TIMELINE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-primary dark:text-white">
              Professional Journey
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Dr. Bajpai's career path in building clinical systems, academic models, and training fellowships.
            </p>
          </div>

          <div className="relative border-l-2 border-gray-250 dark:border-gray-800 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node dot */}
                <div className="absolute -left-10 sm:-left-14 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-medical group-hover:bg-medical transition-colors duration-300" />
                
                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm hover:shadow transition-all duration-300">
                  <span className="text-xs font-extrabold text-medical tracking-wider uppercase">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials and Reviews Section */}
        <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 dark:border-gray-900">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-primary dark:text-white">
              Patient Stories & Reviews
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Real success stories from parents whose children were evaluated and treated by Dr. Bajpai.
            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 font-semibold">
              <Star className="h-4.5 w-4.5 fill-amber-500 text-amber-500" />
              <span>
                Average Google Rating is <strong>{googleReviewsSummary.rating} stars</strong> based on {googleReviewsSummary.totalReviews} reviews.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-0.5 text-amber-500 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-500/10 mb-2 shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300 italic text-sm leading-relaxed mb-6">
                    "{test.text}"
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-50 dark:border-gray-800">
                  <div>
                    <span className="font-bold text-gray-800 dark:text-white block">{test.parentName}</span>
                    <span>Parent of {test.childAgeSex} - {test.location}</span>
                  </div>
                  <span className="font-bold text-medical bg-medical-ultra-light/50 dark:bg-medical-ultra-light/10 px-2 py-1 rounded-md">
                    {test.condition}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
