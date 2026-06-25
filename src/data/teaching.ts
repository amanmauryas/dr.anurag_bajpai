export interface TeachingCourse {
  id: string;
  title: string;
  type: "Fellowship" | "Symposium" | "Workshop" | "Masterclass" | "CME";
  description: string;
  duration: string;
  targetAudience: string;
  highlights: string[];
  linkText?: string;
  linkUrl?: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string; // ISO date string or formatted date
  time: string;
  location: string;
  type: string;
  registrationOpen: boolean;
}

export const coursesData: TeachingCourse[] = [
  {
    id: "medeclasses-pediatric-endocrine",
    title: "MedEClasses Pediatric Endocrinology Courses",
    type: "CME",
    description: "An internationally recognized educational platform dedicated to Pediatric Endocrinology. It provides structured e-learning modules, clinical case reviews, and interactive discussions for pediatricians and fellows worldwide.",
    duration: "Self-paced / Hybrid modules",
    targetAudience: "Postgraduate Pediatricians, Endocrinology Fellows, and General Practitioners",
    highlights: [
      "100+ educational video modules covering core endocrine physiology",
      "Interactive clinical masterclasses with case-based simulations",
      "Over 1000+ physicians trained across multiple countries",
      "Accredited certifications upon module completion"
    ],
    linkText: "Visit MedEClasses Platform",
    linkUrl: "https://www.medeclasses.org"
  },
  {
    id: "pediatric-endocrine-fellowship",
    title: "Pediatric Endocrinology Fellowship Program",
    type: "Fellowship",
    description: "A prestigious, hands-on clinical fellowship program designed to train future pediatric endocrinologists in advanced diagnostic procedures, research methods, and child-centric care management.",
    duration: "1 Year / 2 Years (Advanced)",
    targetAudience: "MD/DNB Pediatrics Graduates interested in super-specialization",
    highlights: [
      "Mentored clinical rotations in inpatient, outpatient, and specialized OPDs",
      "Active involvement in clinical trials, journal clubs, and guideline development",
      "Training in advanced endocrinological technologies (insulin pumps, CGMs, bone DEXA)",
      "Thesis and publication advisory support"
    ]
  },
  {
    id: "advanced-ped-endo-symposium",
    title: "Advanced Pediatric Endocrinology Symposium",
    type: "Symposium",
    description: "An annual scientific event compiling leading national and international experts to debate emerging guidelines, pediatric genetics, and technology-enabled medical workflows.",
    duration: "3 Days Annual Conference",
    targetAudience: "Consultant Pediatricians, Pediatric Endocrinologists, and Researchers",
    highlights: [
      "Keynote speeches from global clinical leaders",
      "Hands-on workshops on growth hormone stimulation testing and pump configuration",
      "Abstract presentations and young investigator awards",
      "Panel discussions on complex cases and medical ethics"
    ]
  },
  {
    id: "national-pediatric-cme-workshops",
    title: "National Pediatric Endocrinology Workshops",
    type: "Workshop",
    description: "Interactive regional workshops conducted under the aegis of ISPAE and Regency Healthcare, aimed at improving basic endocrine screening capabilities among general pediatricians.",
    duration: "1 Day Intensive",
    targetAudience: "Primary Care Pediatricians and Postgraduate Students",
    highlights: [
      "How to accurately chart growth and spot early deviations",
      "First-line management of Type 1 Diabetes and DKA prevention in clinics",
      "Basic thyroid evaluation: when to treat, when to refer",
      "More than 200+ workshops successfully conducted nationwide"
    ]
  }
];

export const upcomingEventsData: UpcomingEvent[] = [
  {
    id: "evt-1",
    title: "MedEClasses Hybrid Masterclass: Pediatric Growth Disorders & GH Therapy",
    date: "2026-07-15",
    time: "07:30 PM - 09:30 PM IST",
    location: "Online (Zoom Webinar)",
    type: "Webinar / Masterclass",
    registrationOpen: true
  },
  {
    id: "evt-2",
    title: "Hands-on Workshop: Advanced Insulin Pump & CGM Optimization",
    date: "2026-08-08",
    time: "10:00 AM - 04:00 PM IST",
    location: "Regency Healthcare Auditorium, Kanpur",
    type: "Clinical Workshop",
    registrationOpen: true
  },
  {
    id: "evt-3",
    title: "Annual Pediatric Endocrine Update & Case Discussions",
    date: "2026-09-20",
    time: "09:00 AM - 05:00 PM IST",
    location: "Hotel Landmark, Kanpur / Hybrid",
    type: "Symposium",
    registrationOpen: false
  }
];

export const teachingStats = {
  workshopsConducted: "200+",
  physiciansTrained: "1000+",
  videoModules: "100+",
  fellowshipMentored: "15+"
};
