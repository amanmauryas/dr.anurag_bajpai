export interface FAQ {
  question: string;
  answer: string;
}

export interface Specialty {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  conditions: string[];
  symptoms: string[];
  diagnosis: string[];
  treatments: string[];
  faqs: FAQ[];
}

export const specialtiesData: Specialty[] = [
  {
    slug: "growth-disorders",
    title: "Growth Disorders & Short Stature",
    shortDesc: "Comprehensive evaluation and advanced growth hormone therapy for children with short stature and growth delay.",
    description: "Growth is a sensitive indicator of a child's overall health. A growth disorder means a child has abnormal growth metrics—either growing too slowly or too fast. Early evaluation by a pediatric endocrinologist is essential to identify correctable causes, such as Growth Hormone Deficiency, Constitutional Delay, or Turner Syndrome, and initiate treatment like Growth Hormone Therapy during active growth phases.",
    conditions: [
      "Short Stature",
      "Growth Hormone Deficiency (GHD)",
      "Constitutional Delay of Growth and Puberty",
      "Turner Syndrome",
      "Small for Gestational Age (SGA) with failure to catch up",
      "Idiopathic Short Stature (ISS)"
    ],
    symptoms: [
      "Growth rate less than 4-5 cm (about 2 inches) per year",
      "Child is significantly shorter than classmates or siblings at the same age",
      "Crossing percentile lines downward on standard growth charts",
      "Immature face or looking much younger than actual age",
      "Delayed dental development or delayed puberty"
    ],
    diagnosis: [
      "Precise auxological profiling (serial height, weight, growth velocity measurements)",
      "Bone Age assessment via hand and wrist X-ray",
      "Growth Hormone Stimulation tests (clonidine, insulin, or glucagon induced)",
      "IGF-1 (Insulin-like Growth Factor-1) and IGFBP-3 blood tests",
      "Karyotyping (specifically for girls to rule out Turner syndrome)",
      "Brain MRI to evaluate the pituitary gland if growth hormone deficiency is confirmed"
    ],
    treatments: [
      "Recombinant Human Growth Hormone (rhGH) therapy (daily subcutaneous injections)",
      "Treatment of underlying systemic illnesses or nutritional deficiencies",
      "Thyroid hormone replacement (if hypothyroidism is the cause of growth failure)",
      "Reassurance and monitoring for constitutional delay cases",
      "Regular follow-up checks (typically every 3 to 6 months) for dosage adjustment based on weight and growth velocity"
    ],
    faqs: [
      {
        question: "When is the best time to check a child for short stature?",
        answer: "The earlier, the better. Evaluation should ideally start if a child's height falls below the 3rd percentile or if their growth velocity slows down significantly (less than 4 cm per year after age 4). Starting treatment before puberty yields the best final height outcomes."
      },
      {
        question: "Is growth hormone therapy safe?",
        answer: "Yes, modern recombinant human growth hormone is highly purified and has a strong safety profile. Side effects are rare when managed and monitored closely by an experienced pediatric endocrinologist. Regular blood tests and bone age checks ensure safety."
      },
      {
        question: "Will my child keep growing after puberty?",
        answer: "Once the growth plates (epiphyses) in the bones fuse, which happens toward the end of puberty (typically age 14-15 in girls and 16-17 in boys), further height gain is not possible. This is why early intervention is critical."
      }
    ]
  },
  {
    slug: "diabetes",
    title: "Childhood & Adolescent Diabetes",
    shortDesc: "Specialized care for Type 1 and Type 2 Diabetes utilizing continuous glucose monitoring (CGM) and insulin pumps.",
    description: "Diabetes in children requires a highly specialized, family-centered approach. Type 1 diabetes is the most common form in childhood, resulting from an autoimmune destruction of insulin-producing pancreatic cells. Managing pediatric diabetes involves balancing insulin doses, nutrition, physical activity, and utilizing cutting-edge diabetes technologies like Continuous Glucose Monitors (CGM) and smart Insulin Pumps to prevent complications and allow children to lead active, unrestricted lives.",
    conditions: [
      "Type 1 Diabetes (T1D)",
      "Type 2 Diabetes in youth",
      "Monogenic Diabetes (MODY & Neonatal Diabetes)",
      "Diabetic Ketoacidosis (DKA) management and prevention",
      "Hypoglycemia (low blood sugar) management"
    ],
    symptoms: [
      "Frequent urination (polyuria), including bedwetting in a previously toilet-trained child",
      "Extreme thirst (polydipsia) and drinking large amounts of water",
      "Increased appetite (polyphagia) accompanied by unexplained weight loss",
      "Extreme fatigue, weakness, or lethargy",
      "Blurry vision or frequent skin/yeast infections",
      "Fruity-smelling breath, rapid breathing, nausea, or vomiting (signs of DKA)"
    ],
    diagnosis: [
      "Random or Fasting Blood Glucose levels",
      "HbA1c test (average blood sugar over the past 2-3 months)",
      "Urine analysis to check for ketones and glucose",
      "Autoantibody testing (GAD65, ICA, IA-2, ZnT8) to confirm Type 1 autoimmune diabetes",
      "C-peptide levels to assess remaining insulin production"
    ],
    treatments: [
      "Individualized Insulin regimens (Multiple Daily Injections or Insulin Pump Therapy)",
      "Continuous Glucose Monitoring (CGM) configuration and training",
      "Comprehensive diabetes self-management education for the child, parents, and school staff",
      "Nutritional therapy and carbohydrate counting guidance",
      "Screening for associated autoimmune conditions (e.g., Celiac disease, Thyroid disorders)"
    ],
    faqs: [
      {
        question: "Can childhood Type 1 diabetes be cured or outgrown?",
        answer: "Currently, Type 1 diabetes is a lifelong condition with no cure. It is an autoimmune condition where the body cannot make insulin. However, with modern technologies like insulin pumps and CGMs, children can live a full, active life and excel in sports, academics, and all activities."
      },
      {
        question: "What is the difference between Type 1 and Type 2 diabetes in kids?",
        answer: "Type 1 diabetes is an autoimmune condition where the body stops producing insulin. Type 2 diabetes is associated with insulin resistance and lifestyle factors (like obesity) and is becoming more common in adolescents. Type 1 requires lifetime insulin; Type 2 is managed with diet, activity, oral medications, and sometimes insulin."
      },
      {
        question: "What should schools know about a child with diabetes?",
        answer: "Schools must have a clear diabetes care plan detailing how to monitor glucose, when to check for ketones, when to give insulin, and how to treat low blood sugars (hypoglycemia) with fast-acting sugar. School staff must be aware that the child should have unrestricted access to water, restrooms, and snacks."
      }
    ]
  },
  {
    slug: "thyroid-disorders",
    title: "Thyroid & Metabolic Disorders",
    shortDesc: "Expert management of congenital hypothyroidism, acquired thyroid disorders, and metabolic issues in children.",
    description: "Thyroid hormones are crucial for brain development in early infancy and physical growth and energy regulation throughout childhood. Disorders can range from Congenital Hypothyroidism (underactive thyroid at birth, requiring immediate treatment to prevent intellectual disability) to acquired autoimmune conditions like Hashimoto's Thyroiditis (hypothyroidism) and Graves' Disease (hyperthyroidism).",
    conditions: [
      "Congenital Hypothyroidism",
      "Acquired Hypothyroidism (Hashimoto's Thyroiditis)",
      "Hyperthyroidism (Graves' Disease)",
      "Thyroid Nodules and Goiter",
      "Subclinical Hypothyroidism"
    ],
    symptoms: [
      "Slow growth or short stature in acquired hypothyroidism",
      "Unexplained fatigue, sluggishness, and increased sleep needs",
      "Weight gain without increased appetite, or inability to lose weight",
      "Cold intolerance, dry skin, brittle hair, and constipation",
      "Hyperactivity, heat intolerance, weight loss despite increased appetite, and tremors (in hyperthyroidism)",
      "Swelling in the neck (Goiter)"
    ],
    diagnosis: [
      "Newborn screening (TSH or T4 assessment in the first 72 hours of life)",
      "Serum Thyroid Profile (Free T3, Free T4, and TSH)",
      "Thyroid Autoantibodies (Anti-TPO, Anti-Thyroglobulin, TSH Receptor Antibodies)",
      "Thyroid Ultrasound to evaluate gland structure and nodules",
      "Thyroid Scan (Technetium or Iodine) if congenital thyroid dysgenesis is suspected"
    ],
    treatments: [
      "Levothyroxine (T4) replacement therapy (once-daily oral tablet)",
      "Anti-thyroid medications (e.g., Methimazole) for hyperthyroidism",
      "Regular monitoring of TSH and Free T4 levels (crucial for adjusting pediatric doses)",
      "Beta-blockers for temporary symptom control in hyperthyroidism",
      "Close follow-ups during pregnancy and growth spurts"
    ],
    faqs: [
      {
        question: "Why is newborn screening for thyroid disorders so critical?",
        answer: "Congenital hypothyroidism affects about 1 in 2,500 newborns. If left untreated in the first few weeks of life, it causes permanent intellectual disability and developmental delay. Immediate treatment within the first two weeks of life completely prevents these complications."
      },
      {
        question: "How long does a child need thyroid medication?",
        answer: "For congenital hypothyroidism, treatment is usually lifelong. For acquired hypothyroidism (Hashimoto's), it is also typically lifelong, though periodic re-evaluations are done. In hyperthyroidism (Graves'), anti-thyroid medication may be given for 2-3 years, with a chance of remission."
      }
    ]
  },
  {
    slug: "puberty-disorders",
    title: "Pubertal & Reproductive Disorders",
    shortDesc: "Specialized care for early or delayed puberty, PCOS, and teenage menstrual abnormalities.",
    description: "Puberty is the transition from childhood to physical and reproductive maturity. Disruption of this process can cause significant physical and emotional distress. Early puberty (Precocious Puberty) can stunt final height, while Delayed Puberty can indicate hormonal deficits or constitutional delays. Polycystic Ovary Syndrome (PCOS) is also a highly prevalent pubertal condition in teenage girls, causing irregular cycles, weight gain, and acne.",
    conditions: [
      "Precocious Puberty (early onset before age 8 in girls, age 9 in boys)",
      "Delayed Puberty (no signs by age 13 in girls, age 14 in boys)",
      "Polycystic Ovary Syndrome (PCOS) in adolescents",
      "Hypogonadotropic Hypogonadism (Kallmann syndrome, etc.)",
      "Gynecomastia (breast development in boys)"
    ],
    symptoms: [
      "Breast development, pubic hair, or growth spurt before age 8 in girls",
      "Testicular enlargement, pubic hair, or voice deepening before age 9 in boys",
      "Absence of breast development by age 13 or absence of menstruation by age 15-16 in girls",
      "Absence of testicular growth by age 14 in boys",
      "Irregular, heavy, or missed periods in teenage girls, coupled with excessive facial hair or acne"
    ],
    diagnosis: [
      "Detailed clinical staging (Tanner Staging) of secondary sexual characteristics",
      "Bone Age X-ray to see if skeletal development is advanced or delayed",
      "Hormonal profile (LH, FSH, Estradiol, Testosterone, Prolactin, DHEAS)",
      "GnRH Stimulation test to differentiate central precocious puberty from other causes",
      "Pelvic Ultrasound to assess uterine and ovarian volume, or rule out ovarian cysts"
    ],
    treatments: [
      "GnRH Analogue therapy (monthly or 3-monthly injections) to halt early puberty",
      "Hormone replacement therapy (Estrogen for girls, Testosterone for boys) to induce puberty",
      "Lifestyle modifications, metformin, and cyclic progesterone or low-dose oral contraceptives for adolescent PCOS",
      "Reassurance and observation for physiological delayed puberty or pubertal gynecomastia"
    ],
    faqs: [
      {
        question: "Can early puberty affect my child's final height?",
        answer: "Yes. Early puberty causes rapid bone growth and early fusion of the growth plates. While the child is tall for their age initially, they stop growing too early, which often results in short stature in adulthood. GnRH analogues can pause puberty, allowing more time for growth."
      },
      {
        question: "Is PCOS common in teenage girls?",
        answer: "Yes, PCOS is highly common and usually manifests during puberty. In teens, it requires careful diagnosis because irregular periods and mild acne are common in the first few years of menstruation. Expert pediatric endocrine evaluation is needed to avoid over-diagnosis."
      }
    ]
  },
  {
    slug: "bone-mineral-disorders",
    title: "Bone & Mineral Disorders",
    shortDesc: "Diagnosis and therapy for rickets, calcium imbalances, vitamin D deficiencies, and pediatric osteoporosis.",
    description: "Healthy bone accumulation during childhood and adolescence is the key foundation for lifelong bone strength. Pediatric bone disorders include Rickets (softening of bones due to vitamin D or phosphate deficiencies), Hypocalcemia (low calcium, leading to seizures or muscle spasms), Hypercalcemia (high calcium), and juvenile osteoporosis. Managing these disorders requires precise metabolic evaluation.",
    conditions: [
      "Nutritional Rickets",
      "Hypophosphatemic Rickets (genetic bone disorders)",
      "Vitamin D Deficiency & Resistance",
      "Hypocalcemia and Hypercalcemia",
      "Osteogenesis Imperfecta (brittle bone disease)",
      "Juvenile Osteoporosis"
    ],
    symptoms: [
      "Bowed legs, knock-knees, or swollen wrists/ankles in toddlers",
      "Delayed walking or waddling gait",
      "Frequent, unexplained fractures from minor impacts",
      "Muscle spasms, cramping, or unexplained seizures (signs of severe low calcium)",
      "Bone pain or muscle weakness"
    ],
    diagnosis: [
      "Serum Biochemistry (Calcium, Phosphorus, Alkaline Phosphatase, Magnesium)",
      "Vitamin D levels (25-hydroxyvitamin D and 1,25-dihydroxyvitamin D)",
      "Parathyroid Hormone (PTH) blood levels",
      "Urine calcium-to-creatinine ratio and tubular reabsorption of phosphate",
      "Skeletal survey (X-rays of long bones, wrists, and knees)",
      "DEXA Bone Density Scan (with pediatric reference software)"
    ],
    treatments: [
      "Therapeutic Vitamin D (Cholecalciferol) and Calcium supplementation",
      "Active Vitamin D metabolites (Calcitriol) and oral phosphate mixtures for renal/hypophosphatemic rickets",
      "Bisphosphonate therapy (e.g., intravenous Pamidronate or Zoledronic acid) for severe Osteogenesis Imperfecta",
      "Dietary modifications and optimizing physical exercise patterns"
    ],
    faqs: [
      {
        question: "Can rickets be completely cured?",
        answer: "Yes. Nutritional rickets, which is caused by vitamin D and calcium deficiency, can be completely cured with correct doses of Vitamin D and calcium. Deformities in the legs usually straighten out over time as the child grows. Genetic types of rickets (like Hypophosphatemic Rickets) require long-term management but can be well-controlled."
      },
      {
        question: "Does my child need a bone density (DEXA) scan?",
        answer: "DEXA scans are recommended for children who have recurrent fractures, chronic conditions that weaken bones (like long-term steroid use or inflammatory diseases), or suspected juvenile osteoporosis. Pediatric scans must be interpreted using specialized age-matched database standards."
      }
    ]
  },
  {
    slug: "adrenal-disorders",
    title: "Adrenal & Hormone Secretion Disorders",
    shortDesc: "Advanced treatment of congenital adrenal hyperplasia (CAH), adrenal insufficiency, and Cushing's syndrome.",
    description: "The adrenal glands, located on top of the kidneys, produce life-sustaining hormones including cortisol (stress response), aldosterone (salt balance), and androgens. Disorders such as Congenital Adrenal Hyperplasia (CAH) are life-threatening genetic conditions where cortisol production is blocked, leading to salt-wasting crises and atypical genitalia. Expert, precise replacement therapy is critical to prevent crises and ensure normal growth.",
    conditions: [
      "Congenital Adrenal Hyperplasia (CAH)",
      "Addison's Disease (Adrenal Insufficiency)",
      "Cushing's Syndrome (Cortisol excess)",
      "Adrenal masses/tumors",
      "Pheochromocytoma"
    ],
    symptoms: [
      "Salt wasting crises in infants: poor feeding, vomiting, dehydration, lethargy, low blood pressure",
      "Atypical genitalia in newborn girls (sign of CAH)",
      "Rapidly developing pubic hair, acne, or advanced height in early childhood",
      "Severe fatigue, dizziness upon standing, hyperpigmentation of skin/gums",
      "Rapid weight gain, round face (moon face), purple stretch marks, and poor growth (Cushing's)"
    ],
    diagnosis: [
      "Newborn screening (17-hydroxyprogesterone test)",
      "17-OHP, Cortisol, ACTH, and Aldosterone hormone panels",
      "Renin levels and serum electrolytes (Sodium, Potassium)",
      "ACTH Stimulation test to diagnose adrenal insufficiency",
      "High-dose/Low-dose Dexamethasone suppression tests for Cushing's",
      "Adrenal CT or MRI scans"
    ],
    treatments: [
      "Glucocorticoid (Hydrocortisone, Prednisolone) replacement therapy",
      "Mineralocorticoid (Fludrocortisone) replacement therapy for salt-wasting",
      "Emergency stress-dosing education for parents (injectable Hydrocortisone for illness/surgery)",
      "Surgical removal of hormone-producing adrenal tumors",
      "Multidisciplinary management for DSD/atypical genitalia cases"
    ],
    faqs: [
      {
        question: "What is a 'stress dose' of hydrocortisone?",
        answer: "Children with adrenal insufficiency cannot make extra cortisol during physical stress. When they have a high fever, severe illness, vomiting, or undergo surgery, they need 2 to 3 times their normal dose of hydrocortisone (stress dosing) or an emergency injection to prevent an adrenal crisis."
      },
      {
        question: "Can a child lead a normal life with Congenital Adrenal Hyperplasia (CAH)?",
        answer: "Yes, definitely. With early diagnosis, daily oral hormone replacement, and careful monitoring by a pediatric endocrinologist, children with CAH grow up to have normal lives, participate in sports, and have their own families."
      }
    ]
  }
];
