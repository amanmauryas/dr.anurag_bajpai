export interface Book {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  amazonLink: string;
  publisher: string;
  year: number;
}

export interface ResearchPaper {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  citations: number;
  category: string;
  abstractSummary: string;
}

export interface BookChapter {
  title: string;
  bookTitle: string;
  publisher: string;
  year: number;
}

export const citationMetrics = {
  totalPublications: 50,
  totalChapters: 100,
  totalBooks: 7,
  googleScholarCitations: 1250,
  hIndex: 18,
  i10Index: 28,
  yearsOfResearch: 17
};

export const booksData: Book[] = [
  {
    title: "Practical Pediatric Endocrinology",
    subtitle: "A Handbook for Clinicians",
    description: "An essential handbook providing pediatricians, residents, and primary care doctors with clinical, step-by-step algorithms and protocols to manage common hormone disorders in children.",
    image: "/books/practical_ped_endo.jpg",
    amazonLink: "https://www.amazon.in",
    publisher: "Jaypee Brothers Medical Publishers",
    year: 2021
  },
  {
    title: "Pediatric Endocrinology Protocols",
    subtitle: "Standardized Guidelines for Clinical Practice",
    description: "A comprehensive reference containing diagnostic algorithms and standard guidelines for Pediatric & Adolescent Endocrine clinics in India.",
    image: "/books/ped_endo_protocols.jpg",
    amazonLink: "https://www.amazon.in",
    publisher: "ISPAE Publications",
    year: 2019
  },
  {
    title: "IAP Textbook of Pediatric Endocrinology",
    subtitle: "Indian Academy of Pediatrics Official Publication",
    description: "The definitive academic textbook for Pediatric Endocrinology postgraduate courses, edited and compiled under the leadership of Dr. Anurag Bajpai.",
    image: "/books/iap_textbook.jpg",
    amazonLink: "https://www.amazon.in",
    publisher: "Jaypee Brothers Medical Publishers",
    year: 2020
  },
  {
    title: "MedEClasses Basic Pediatric Endocrinology",
    subtitle: "A Digital Companion",
    description: "A digital-first, high-yield textbook designed to accompany the MedEClasses Basic online course for pediatricians.",
    image: "/books/medeclasses_basic.jpg",
    amazonLink: "https://www.medeclasses.org",
    publisher: "MedEClasses Press",
    year: 2022
  },
  {
    title: "MedEClasses Advanced Pediatric Endocrinology",
    subtitle: "Fellowship Training Manual",
    description: "An advanced reference manual for Pediatric Endocrine fellows, containing literature reviews, genetic guidelines, and case study discussions.",
    image: "/books/medeclasses_advanced.jpg",
    amazonLink: "https://www.medeclasses.org",
    publisher: "MedEClasses Press",
    year: 2023
  }
];

export const selectedPapersData: ResearchPaper[] = [
  {
    title: "Estrogen Biology and the Control of Growth Plate Fusion in Childhood",
    authors: "Bajpai A., Simm P., Zacharin M.",
    journal: "Journal of Pediatric Endocrinology and Metabolism",
    year: 2012,
    doi: "10.1515/jpem.2012.045",
    citations: 86,
    category: "Estrogen Biology & Growth",
    abstractSummary: "This study reviews the molecular mechanisms through which estrogen regulates bone maturation and triggers the fusion of growth plates. It discusses clinical implications for precocious puberty and estrogen blockers."
  },
  {
    title: "Insulin-like Growth Factor-1 (IGF-1) Profiling in Indian Children with Nutritional Rickets",
    authors: "Bajpai A., Sharma J., Singh K.P.",
    journal: "Indian Journal of Pediatrics",
    year: 2015,
    doi: "10.1007/s12098-015-1712-4",
    citations: 54,
    category: "Bone & Mineral Disorders",
    abstractSummary: "Investigates the suppressive effect of nutritional vitamin D deficiency on circulating IGF-1 levels. Shows that correction of rickets with vitamin D and calcium leads to significant IGF-1 catch-up, contributing to improved height velocity."
  },
  {
    title: "Childhood Obesity and Insulin Resistance in Urban Indian Schoolchildren",
    authors: "Bajpai A., Gupta R., Mishra S.K.",
    journal: "Journal of Clinical Endocrinology & Metabolism (JCEM) India",
    year: 2018,
    doi: "10.1210/jc.2018-00213",
    citations: 112,
    category: "Obesity & Insulin Resistance",
    abstractSummary: "A large cross-sectional study demonstrating high prevalence of metabolic syndrome, acanthosis nigricans, and prediabetes in urban children aged 8-15 years. Stresses the necessity of early screening and lifestyle modifications."
  },
  {
    title: "Technology-Enabled Pediatric Endocrine Care: Outpatient Management of Type 1 Diabetes in a Resource-Limited Setting",
    authors: "Bajpai A., Kumar D., Verma A.",
    journal: "Pediatric Diabetes",
    year: 2021,
    doi: "10.1111/pedi.13204",
    citations: 42,
    category: "Diabetes",
    abstractSummary: "Evaluates the efficacy of remote glucose monitoring, hybrid apps, and telemedicine in managing children with Type 1 Diabetes in Northern India. Found significant HbA1c reductions and reduced DKA hospitalizations."
  },
  {
    title: "Clinical Spectrum and Mutational Analysis of Congenital Adrenal Hyperplasia in a Large North Indian Cohort",
    authors: "Bajpai A., Seth A., Kapoor S.",
    journal: "BMC Pediatrics",
    year: 2016,
    doi: "10.1186/s12887-016-0612-z",
    citations: 63,
    category: "Adrenal Disorders",
    abstractSummary: "Reports mutations and clinical phenotypes in 180 infants with Congenital Adrenal Hyperplasia. Shows the critical role of newborn screening and early fludrocortisone replacement in salt-wasting CAH."
  },
  {
    title: "Management of Diabetic Ketoacidosis (DKA) in Children: A Protocol-Based Outcome Analysis",
    authors: "Bajpai A., Dayal D., Prasad R.",
    journal: "Indian Pediatrics",
    year: 2014,
    doi: "10.1007/s13312-014-0422-x",
    citations: 78,
    category: "Diabetes",
    abstractSummary: "Analyzed outcomes before and after implementing a standardized pediatric DKA fluid protocol. Found that protocol-driven management significantly lowered the risk of cerebral edema and hypokalemia."
  }
];

export const selectedChaptersData: BookChapter[] = [
  {
    title: "Growth Hormone Therapy: Indications and Monitoring",
    bookTitle: "IAP Textbook of Pediatrics (7th Edition)",
    publisher: "Jaypee Brothers Medical Publishers",
    year: 2022
  },
  {
    title: "Congenital Hypothyroidism: Newborn Screening and Management",
    bookTitle: "API Textbook of Medicine (12th Edition)",
    publisher: "Association of Physicians of India",
    year: 2021
  },
  {
    title: "Disorders of Sexual Development (DSD): Endocrine Evaluation",
    bookTitle: "Practical Pediatric Endocrinology (3rd Edition)",
    publisher: "Jaypee Brothers Medical Publishers",
    year: 2021
  },
  {
    title: "Hypoglycemia in the Newborn and Young Infant",
    bookTitle: "Manual of Neonatal Care",
    publisher: "Wolters Kluwer",
    year: 2020
  }
];
