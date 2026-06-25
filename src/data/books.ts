export interface BookItem {
  id: string;
  title: string;
  subtitle?: string;
  authors: string;
  description: string;
  coverColor: string; // Tailored HSL background gradients for CSS cover mockups
  publisher: string;
  year: string;
  amazonLink?: string;
}

export const booksData: BookItem[] = [
  {
    id: "practical-pediatric-endocrinology",
    title: "Practical Pediatric Endocrinology",
    subtitle: "A Handbook for Clinicians",
    authors: "Dr. Anurag Bajpai",
    description: "A comprehensive, pocket-sized handbook designed to guide pediatricians, fellows, and family physicians through the daily management of childhood endocrine disorders. It provides clear, algorithm-based guidelines for diagnosis and treatment.",
    coverColor: "from-blue-700 to-indigo-900",
    publisher: "Jaypee Brothers Medical Publishers",
    year: "2019",
    amazonLink: "https://www.amazon.in/s?k=Practical+Pediatric+Endocrinology+Anurag+Bajpai"
  },
  {
    id: "pediatric-endocrinology-protocols",
    title: "Pediatric Endocrinology Protocols",
    subtitle: "Step-by-Step Clinical Management",
    authors: "Dr. Anurag Bajpai",
    description: "A protocol-heavy reference manual containing ready-to-use flowcharts, diagnostic stimulation test guidelines, insulin dosing charts, and growth hormone monitoring sheets. An essential tool for medical wards and clinics.",
    coverColor: "from-teal-700 to-cyan-900",
    publisher: "Regency Publications",
    year: "2021",
    amazonLink: "https://www.amazon.in/s?k=Pediatric+Endocrinology+Protocols+Anurag+Bajpai"
  },
  {
    id: "iap-textbook-pediatric-endocrinology",
    title: "IAP Textbook of Pediatric Endocrinology",
    authors: "Dr. Anurag Bajpai (Editor & Lead Author)",
    description: "The official textbook of the Indian Academy of Pediatrics (IAP) dedicated to endocrine guidelines. Highly referenced by postgraduate medical students and practicing endocrinologists across India, detailing regional growth charts and local disease patterns.",
    coverColor: "from-emerald-700 to-teal-900",
    publisher: "Indian Academy of Pediatrics",
    year: "2020",
    amazonLink: "https://www.amazon.in/s?k=IAP+Textbook+of+Pediatric+Endocrinology"
  },
  {
    id: "advances-in-pediatric-endocrinology",
    title: "Advances in Pediatric Endocrinology",
    subtitle: "Recent Updates and Evolving Paradigms",
    authors: "Dr. Anurag Bajpai",
    description: "A specialized volume addressing recent scientific breakthroughs in endocrinology, focusing on insulin pump algorithms, continuous glucose monitoring technology, genetic diagnostics in short stature, and novel growth hormone molecules.",
    coverColor: "from-violet-700 to-purple-900",
    publisher: "Jaypee Brothers",
    year: "2023",
    amazonLink: "https://www.amazon.in/s?k=Advances+in+Pediatric+Endocrinology+Anurag+Bajpai"
  },
  {
    id: "medeclasses-basic-pediatric-endocrinology",
    title: "MedEClasses Basic Pediatric Endocrinology",
    subtitle: "Core Curriculum for Postgraduates",
    authors: "Dr. Anurag Bajpai",
    description: "A companion textbook to the MedEClasses online platform. It covers the fundamentals of endocrine physiology, hormone synthesis, normal puberty milestones, and simple thyroid disorders, written in an easy-to-digest format.",
    coverColor: "from-indigo-700 to-blue-900",
    publisher: "MedEClasses Publications",
    year: "2022",
    amazonLink: "https://www.medeclasses.org"
  },
  {
    id: "medeclasses-advanced-pediatric-endocrinology",
    title: "MedEClasses Advanced Pediatric Endocrinology",
    subtitle: "Specialist Training Guide",
    authors: "Dr. Anurag Bajpai",
    description: "Geared towards pediatric endocrinology fellows, this textbook addresses complex endocrine emergencies, neonatal atypical genitalia management, pituitary tumor protocols, and bone mineral genetics.",
    coverColor: "from-rose-700 to-red-900",
    publisher: "MedEClasses Publications",
    year: "2022",
    amazonLink: "https://www.medeclasses.org"
  },
  {
    id: "ijp-practical-pediatric-endocrinology",
    title: "IJP Practical Pediatric Endocrinology",
    authors: "Dr. Anurag Bajpai",
    description: "A joint initiative with the Indian Journal of Pediatrics (IJP), compiling critical consensus guidelines and review articles for clinical practitioners, addressing growth, thyroid, and puberty in Indian children.",
    coverColor: "from-amber-700 to-orange-950",
    publisher: "Indian Journal of Pediatrics",
    year: "2021",
    amazonLink: "https://www.amazon.in/s?k=Practical+Pediatric+Endocrinology"
  }
];
export const bookChaptersCount = 100;
export const scientificPublicationsCount = 50;
export const textbooksCount = 7;
export const yearsOfExperience = 17;
export const patientsTreated = "25,000+";
