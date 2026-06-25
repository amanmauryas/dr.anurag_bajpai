export interface ConditionDetail {
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  diagnosis: string[];
  treatment: string[];
  lifestyleAdvice: string[];
  faqs: { question: string; answer: string }[];
  whenToConsult: string;
}

export const conditionsData: ConditionDetail[] = [
  {
    slug: "short-stature",
    name: "Short Stature & Growth Failure",
    category: "Growth Disorders",
    shortDesc: "Comprehensive evaluation and treatment for children whose height is significantly below the average for their age.",
    overview: "Short stature is defined as height that is below the 3rd percentile on standard growth charts or more than two standard deviations below the mean for age and sex. While many children with short stature have normal variations like Constitutional Delay of Growth and Puberty (late blooming) or Familial Short Stature (genetics), others may have underlying medical conditions such as Growth Hormone Deficiency, hypothyroidism, celiac disease, or genetic syndromes. Early detection is critical, as treatment is only effective before bone growth plates fuse.",
    symptoms: [
      "Height below the 3rd percentile on standardized growth curves.",
      "Growth velocity (speed of growth) of less than 4 cm (1.6 inches) per year in children aged 4 to puberty.",
      "Child fits into clothes that are sized for much younger children for several years.",
      "A downward trend on the growth chart, crossing one or more major percentile lines.",
      "Younger-looking face and body proportions relative to chronological age."
    ],
    causes: [
      "Familial (Genetic) Short Stature: Children who inherit short stature genes from short parents.",
      "Constitutional Delay of Growth and Puberty (CDGP): Late bloomers who grow slowly but keep growing after peers stop, reaching normal adult height.",
      "Growth Hormone Deficiency (GHD): Inadequate production of growth hormone by the pituitary gland.",
      "Nutritional & Chronic Systemic Illnesses: Malabsorption (e.g., Celiac disease), chronic kidney disease, inflammatory bowel disease.",
      "Endocrine disorders: Untreated Hypothyroidism, Cushing's syndrome.",
      "Genetic Conditions: Turner Syndrome (in girls), Noonan Syndrome, Down Syndrome."
    ],
    diagnosis: [
      "Detailed serial growth chart reviews to establish growth velocity.",
      "Bone Age Assessment: X-ray of the left hand and wrist to evaluate skeletal maturity.",
      "Blood screening: Complete Blood Count, kidney and liver function tests, Celiac disease serology.",
      "Hormonal assays: Thyroid function test (TSH, Free T4) and growth-related factors (IGF-1, IGFBP-3).",
      "Growth Hormone Stimulation test: Checking pituitary GH output under controlled pharmacologic stimulation.",
      "Karyotype: Recommended for all girls with unexplained short stature to rule out Turner Syndrome."
    ],
    treatment: [
      "Growth Hormone Therapy: Daily subcutaneous injections of recombinant human growth hormone for approved indications (GHD, Turner syndrome, small for gestational age, chronic kidney disease).",
      "Thyroid Hormone Replacement: Daily levothyroxine for children with hypothyroidism.",
      "Gluten-free diet for children diagnosed with Celiac disease.",
      "Observation and counseling for constitutional delay, explaining that puberty will trigger catch-up growth."
    ],
    lifestyleAdvice: [
      "Ensure the child receives 9 to 11 hours of sleep, as growth hormone is primarily secreted during deep sleep.",
      "Provide a balanced diet rich in protein, calcium, and vitamin D.",
      "Encourage regular physical activity, which naturally stimulates growth hormone release.",
      "Help the child build self-esteem, ensuring they do not equate self-worth with physical height."
    ],
    faqs: [
      {
        question: "Does my child need growth hormone injections if they are just short?",
        answer: "No. Growth hormone is only prescribed after a detailed evaluation confirms a medical indication, such as Growth Hormone Deficiency, Turner Syndrome, or being Small for Gestational Age (SGA) without catch-up growth. It is not recommended for children with normal genetic short stature."
      },
      {
        question: "Can growth plates fuse early?",
        answer: "Yes, growth plates fuse in response to sex hormones (estrogen and testosterone). If a child has early puberty (precocious puberty), the growth plates fuse early, leading to short adult height. pause treatments can prevent this."
      }
    ],
    whenToConsult: "Consult a specialist if your child's height is below the 3rd percentile, if they are growing less than 4 cm per year, or if they are significantly shorter than their biological target height based on parents' heights."
  },
  {
    slug: "childhood-diabetes",
    name: "Type 1 & Type 2 Diabetes in Children",
    category: "Diabetes",
    shortDesc: "Professional care and guidance for juvenile diabetes, focusing on glycemic control and quality of life.",
    overview: "Childhood diabetes primarily manifests as Type 1 Diabetes, an autoimmune condition where the body's immune system mistakenly attacks and destroys the insulin-producing beta cells in the pancreas. Without insulin, the body cannot process glucose, leading to high blood sugar levels. Type 2 Diabetes, characterized by insulin resistance, is also rising in teenagers due to childhood obesity and sedentary lifestyles. Active management involves insulin therapy, glucose monitoring, and custom education.",
    symptoms: [
      "Polydipsia: Unquenchable, intense thirst.",
      "Polyuria: Frequent urination, including new-onset bedwetting in toilet-trained children.",
      "Polyphagia: Severe hunger, despite losing weight.",
      "Lethargy: Extreme fatigue, irritability, or sudden behavior changes.",
      "Diabetic Ketoacidosis (DKA) symptoms: Fruity breath, vomiting, stomach pain, rapid deep breathing, confusion (medical emergency)."
    ],
    causes: [
      "Type 1 Diabetes: Autoimmune response triggered by a combination of genetic predisposition and environmental factors (like viral infections) that destroys pancreatic beta cells.",
      "Type 2 Diabetes: Muscle, fat, and liver cells become resistant to insulin, combined with inadequate compensatory insulin secretion. Highly linked to excess weight and family history."
    ],
    diagnosis: [
      "Fasting Plasma Glucose >= 126 mg/dL or Random Glucose >= 200 mg/dL with classic symptoms.",
      "HbA1c level of 6.5% or higher.",
      "Urine ketones: Checking for ketones, which indicate fat breakdown due to lack of insulin.",
      "Diabetes Autoantibody Panel (anti-GAD65, ICA, IA-2, ZnT8) to confirm Type 1 autoimmune diabetes.",
      "C-peptide level: Low levels confirm Type 1, whereas high/normal levels indicate Type 2."
    ],
    treatment: [
      "Insulin Therapy: Multiple daily injections (MDI) of basal and rapid-acting insulin or an Insulin Pump.",
      "Continuous Glucose Monitor (CGM) usage to track glucose levels in real-time without fingerpricks.",
      "Carbohydrate counting to match insulin doses to food intake.",
      "Emergency Glucagon kits for severe low blood sugars (hypoglycemia)."
    ],
    lifestyleAdvice: [
      "Establish structured meal times while allowing flexibility using insulin-to-carb ratios.",
      "Encourage active participation in sports; plan insulin adjustments and snacks for exercise.",
      "Collaborate with the child's school to create a safe Diabetes Care Plan (providing snack breaks, testing times).",
      "Schedule routine checks for eye, kidney, and thyroid health."
    ],
    faqs: [
      {
        question: "Can children outgrow Type 1 diabetes?",
        answer: "No, Type 1 diabetes is a lifelong autoimmune condition. The pancreas cannot regenerate insulin-producing cells. However, children can manage it perfectly using advanced devices and lead normal lives."
      },
      {
        question: "What is an insulin pump?",
        answer: "An insulin pump is a small computerized device worn on the body that delivers continuous doses of rapid-acting insulin through a tiny cannula under the skin, mimicking a healthy pancreas."
      }
    ],
    whenToConsult: "Immediately seek medical care if your child shows signs of excessive thirst, frequent urination, weight loss, or rapid breathing, as delay can lead to life-threatening Diabetic Ketoacidosis (DKA)."
  },
  {
    slug: "thyroid-disorders",
    name: "Childhood Thyroid Disorders",
    category: "Thyroid Disorders",
    shortDesc: "Specialized care for underactive (hypothyroidism) or overactive (hyperthyroidism) thyroid glands in kids.",
    overview: "The thyroid gland produces hormones that control growth, brain development, and metabolism. In children, thyroid disorders are split into hypothyroidism (underactive thyroid) and hyperthyroidism (overactive thyroid). Congenital Hypothyroidism is present at birth and can lead to severe developmental delays if not treated instantly. Acquired hypothyroidism is usually an autoimmune condition called Hashimoto's thyroiditis, commonly developing in school-aged children and teens. Hyperthyroidism, mostly Graves' disease, is less common but requires careful medical suppression.",
    symptoms: [
      "Slowed physical growth and delayed bone age.",
      "Fatigue, sleepiness, and muscle weakness.",
      "Dry skin, cold intolerance, constipation, and brittle hair.",
      "Difficulty concentrating in school or sudden drop in academic performance.",
      "For hyperthyroidism: Tremors, rapid heartbeat, heat intolerance, weight loss, prominent bulging eyes."
    ],
    causes: [
      "Congenital Hypothyroidism: Underdeveloped, misplaced, or absent thyroid gland at birth.",
      "Hashimoto's Thyroiditis: Autoimmune destruction of the thyroid gland, leading to low hormone levels.",
      "Graves' Disease: Autoimmune stimulation of the thyroid gland, producing excessive thyroid hormones."
    ],
    diagnosis: [
      "Newborn Screening: TSH check from a heel-prick blood spot on day 3 of life.",
      "Blood tests: Free T4 (thyroxine) and TSH (Thyroid Stimulating Hormone).",
      "Thyroid Autoantibodies (Anti-TPO, Anti-Tg) to confirm autoimmune causes.",
      "Thyroid Ultrasound: To evaluate structure, size, or nodules.",
      "Thyroid Scintigraphy (Scan): To see functional tissue distribution in congenital cases."
    ],
    treatment: [
      "Thyroid Hormone Replacement: Oral Levothyroxine (synthetic T4) once daily on an empty stomach.",
      "Anti-Thyroid Medications: Methimazole to block excess thyroid production in Graves' disease.",
      "Beta-blockers: For short-term symptom relief in hyperthyroid children (heart racing, tremors).",
      "Regular clinical monitoring to adjust hormone doses as the child grows."
    ],
    lifestyleAdvice: [
      "Administer thyroid medication at the same time every morning, 30-60 minutes before breakfast.",
      "Avoid giving calcium, iron, or soy supplements close to the thyroid pill, as they block absorption.",
      "Inform teachers if the child experiences fatigue or behavior changes due to thyroid fluctuations."
    ],
    faqs: [
      {
        question: "Will my child's intellectual development be affected by hypothyroidism?",
        answer: "If a child has congenital hypothyroidism and treatment starts within the first 2 weeks of life, brain development is completely normal. In older children with acquired hypothyroidism, any learning difficulties or fatigue are fully reversible once treatment begins."
      },
      {
        question: "Does my child have to take a thyroid pill forever?",
        answer: "In most cases of congenital and autoimmune (Hashimoto's) hypothyroidism, treatment is lifelong. For hyperthyroidism, medication may be stopped if the child achieves long-term remission."
      }
    ],
    whenToConsult: "Seek consultation if your child shows unexplained growth deceleration, chronic fatigue, cold sensitivity, swelling in the front of the neck, or signs of hyperactivity coupled with weight loss."
  },
  {
    slug: "obesity",
    name: "Childhood Obesity & Insulin Resistance",
    category: "Obesity",
    shortDesc: "Evidence-based, family-centered programs to treat childhood obesity and prevent early metabolic syndrome.",
    overview: "Childhood obesity is a complex metabolic disease where excess body fat negatively impacts a child's health. It is not simply a matter of willpower. It is driven by genetic, endocrine, environmental, and behavioral factors. Obesity can lead to severe endocrine complications in children, including insulin resistance, prediabetes, Type 2 diabetes, early puberty, fatty liver disease, and Polycystic Ovary Syndrome (PCOS). Comprehensive pediatric endocrine management targets metabolic abnormalities and builds sustainable lifestyle solutions.",
    symptoms: [
      "Body Mass Index (BMI) at or above the 95th percentile for age and sex.",
      "Acanthosis Nigricans: Dark, velvety hyperpigmentation around the neck folds, armpits, or knuckles (a key sign of insulin resistance).",
      "Shortness of breath, joint pain, or fatigue during mild physical activity.",
      "Snoring or pauses in breathing during sleep (obstructive sleep apnea).",
      "Irregular periods in girls or breast enlargement in boys (gynecomastia)."
    ],
    causes: [
      "Genetic factors influencing appetite, satiety, and energy expenditure.",
      "Dietary patterns high in ultra-processed foods, sugary beverages, and large portions.",
      "Sedentary behavior (excessive screen time) and lack of daily active play.",
      "Endocrine conditions (rare but important): Hypothyroidism, Cushing's syndrome, Leptin deficiency.",
      "Poor sleep habits, which alter appetite-regulating hormones."
    ],
    diagnosis: [
      "BMI calculation and growth trajectory mapping.",
      "Fasting Lipid Profile (Cholesterol, Triglycerides) and Liver Function tests (SGPT/SGOT).",
      "Fasting Blood Glucose and Insulin levels (calculating HOMA-IR to assess insulin resistance).",
      "Oral Glucose Tolerance Test (OGTT) if prediabetes or Type 2 diabetes is suspected.",
      "Hormonal screening (TSH, Cortisol) to exclude rare endocrine causes."
    ],
    treatment: [
      "Structured Family-Based Lifestyle Modification: Collaborative goal setting for diet and activity.",
      "Metformin therapy: Prescribed for adolescents with documented insulin resistance, prediabetes, or severe PCOS.",
      "Treatment of associated co-morbidities (hypertension, fatty liver, sleep apnea).",
      "Multidisciplinary support: Psychological counseling, nutrition planning, and continuous medical monitoring."
    ],
    lifestyleAdvice: [
      "Implement the '5-2-1-0' rule: 5 servings of fruits/veggies, 2 hours or less of screen time, 1 hour of active play, and 0 sugary drinks daily.",
      "Avoid eating in front of screens; make family meals a device-free routine.",
      "Prioritize consistent bedtime schedules; aim for 9-10 hours of sleep for school-aged kids.",
      "Focus on health and functional fitness rather than weight numbers to protect the child's self-image."
    ],
    faqs: [
      {
        question: "Is obesity in kids just a cosmetic issue?",
        answer: "No, childhood obesity can cause severe medical problems including early-onset heart disease, fatty liver, joint damage, sleep apnea, insulin resistance, and a high risk of developing Type 2 diabetes as a teenager."
      },
      {
        question: "What is Acanthosis Nigricans?",
        answer: "It is a dark, velvety skin discoloration in body folds, especially the back of the neck. It is a visible sign of insulin resistance, indicating the body has to make excessive insulin to keep blood sugar normal."
      }
    ],
    whenToConsult: "Schedule an evaluation if your child's weight is rising rapidly, if they have dark patches on the neck/armpits, or if obesity is accompanied by fatigue or joint pain."
  },
  {
    slug: "pcos",
    name: "Polycystic Ovary Syndrome (PCOS) in Teens",
    category: "Reproductive & Hormonal Disorders",
    shortDesc: "Specialized hormonal and metabolic care for adolescent girls with irregular periods and androgen excess.",
    overview: "Polycystic Ovary Syndrome (PCOS) is a common hormone imbalance affecting adolescent girls and women. In teens, PCOS is characterized by irregular or absent menstrual periods, signs of excess androgens (male hormones)—such as excessive facial/body hair, acne, or male-pattern hair thinning—and polycystic ovaries on ultrasound. PCOS is highly linked to insulin resistance, making early diagnosis and metabolic management critical to protect cardiovascular and reproductive health.",
    symptoms: [
      "Irregular periods: Menstrual cycles that occur less than 21 days or more than 45 days apart, or periods that stop completely (amenorrhea).",
      "Hirsutism: Excess dark hair growth on the face, chest, abdomen, or back.",
      "Severe, treatment-resistant acne, especially on the jawline and chest.",
      "Acanthosis Nigricans (dark skin folds) and rapid weight gain.",
      "Thinning hair on the scalp."
    ],
    causes: [
      "Complex interplay of genetic factors and insulin resistance.",
      "High insulin levels stimulate the ovaries to produce excess testosterone, disrupting normal ovulation and egg development.",
      "Family history of PCOS, Type 2 diabetes, or metabolic syndrome."
    ],
    diagnosis: [
      "Detailed menstrual history (at least 2 years post-menarche for reliable diagnosis).",
      "Hormone blood tests: Total & Free Testosterone, DHEAS, LH, FSH, and SHBG.",
      "Metabolic profile: OGTT, fasting insulin, lipids.",
      "Pelvic Ultrasound: To assess ovarian volume and search for multiple tiny follicles (though ultrasound findings are interpreted cautiously in young teens)."
    ],
    treatment: [
      "Lifestyle and Nutrition Management: Targeted dietary changes and physical activity to improve insulin sensitivity.",
      "Metformin: To improve insulin resistance, regularize cycles, and support weight management.",
      "Combined Oral Contraceptive Pills (OCPs): Low-dose hormonal pills to regulate periods, protect the uterine lining, and lower androgen levels.",
      "Anti-androgen medications (like Spironolactone) for persistent hirsutism or severe acne after 6 months of OCP therapy."
    ],
    lifestyleAdvice: [
      "Focus on low-glycemic index foods (whole grains, fiber, lean proteins) to minimize insulin spikes.",
      "Engage in strength training and aerobic exercises to help cells absorb glucose, reducing insulin demand.",
      "Manage stress levels, as stress hormones can worsen androgen production."
    ],
    faqs: [
      {
        question: "Can teenagers be diagnosed with PCOS right after their first period?",
        answer: "It is not recommended. Irregular periods are normal in the first 1-2 years after menstruation starts as the brain-ovary connection matures. Premature diagnosis is avoided; teens are evaluated if cycles remain highly irregular after 2 years or if severe androgen excess is present."
      },
      {
        question: "Will PCOS affect my daughter's ability to have children later?",
        answer: "While PCOS causes irregular ovulation, it is a highly treatable cause of infertility. With weight control, metabolic therapy, and simple medications to trigger ovulation when she is ready, most women with PCOS successfully become pregnant."
      }
    ],
    whenToConsult: "Consult if your teenager has not started her period by age 15, has highly irregular periods two years after they started, or displays severe acne and excessive facial hair."
  },
  {
    slug: "growth-hormone-deficiency",
    name: "Growth Hormone Deficiency (GHD)",
    category: "Growth Disorders",
    shortDesc: "Precise diagnostic testing and replacement therapy for children lacking pituitary growth hormone.",
    overview: "Growth Hormone Deficiency (GHD) occurs when the pituitary gland at the base of the brain fails to produce enough growth hormone (somatotropin). GHD can be congenital (present from birth, often due to structural brain anomalies) or acquired later in childhood due to trauma, infection, tumors, or radiation. Children with GHD grow very slowly and, if untreated, will be significantly shorter than their peers as adults. Daily injections of growth hormone can stimulate normal growth.",
    symptoms: [
      "Severe growth deceleration (growth velocity below 4 cm/year).",
      "Short stature (below the 3rd percentile for age and gender).",
      "Cherubic or doll-like face, with a prominent forehead and baby fat around the stomach.",
      "High-pitched voice and slow dental development.",
      "Hypoglycemia (low blood sugar) in newborns or infants, sometimes accompanied by a micro-penis."
    ],
    causes: [
      "Congenital GHD: Genetic mutations or structural defects in the pituitary gland or hypothalamus (e.g., septo-optic dysplasia).",
      "Acquired GHD: Pituitary damage from brain tumors (like craniopharyngioma), surgery, head trauma, or cranial radiation therapy."
    ],
    diagnosis: [
      "Accurate height and growth velocity charting.",
      "Bone Age X-ray showing significant skeletal delay (e.g., bone age is 2+ years behind chronological age).",
      "Blood tests for IGF-1 and IGFBP-3 (surrogate markers for growth hormone activity).",
      "Growth Hormone Stimulation Tests: Serial blood draws after administering stimuli like clonidine or insulin to verify if the pituitary gland fails to release GH.",
      "Brain MRI: Focused on the pituitary gland and hypothalamus to rule out structural anomalies or tumors."
    ],
    treatment: [
      "Recombinant Human Growth Hormone (rhGH): Daily subcutaneous injections given at bedtime.",
      "Replacement of other pituitary hormones (thyroid, adrenal, sex hormones) if the child has Multiple Pituitary Hormone Deficiencies (MPHD).",
      "Regular clinical evaluation every 3-6 months to monitor height gain, adjust dosage, and screen for side effects."
    ],
    lifestyleAdvice: [
      "Involve the child in administering their daily injections (using user-friendly pen devices) to encourage independence.",
      "Focus on healthy nutrition to support rapid bone and tissue growth.",
      "Explain the condition clearly to the child, emphasizing that the medication helps their body grow naturally."
    ],
    faqs: [
      {
        question: "How long does growth hormone treatment last?",
        answer: "Treatment continues as long as the child's bones are still growing. Once the growth plates fuse (usually in mid-to-late teens), growth hormone therapy is discontinued or re-evaluated to see if adult replacement is required."
      },
      {
        question: "Do growth hormone injections hurt?",
        answer: "Modern injection devices use extremely thin, tiny needles (similar to insulin pens). Most children describe the pain as a minor pinch, and many learn to inject themselves easily."
      }
    ],
    whenToConsult: "Schedule a visit if your child is growing very slowly, has a delayed bone age, or exhibits growth failure combined with a history of brain surgery, head trauma, or radiation."
  },
  {
    slug: "turner-syndrome",
    name: "Turner Syndrome",
    category: "Genetic & Congenital Disorders",
    shortDesc: "Comprehensive endocrine care for girls with Turner Syndrome, optimizing growth and pubertal development.",
    overview: "Turner Syndrome is a genetic condition that affects females, occurring when one of the X chromosomes is completely or partially missing (45,X karyotype). One of the most common features of Turner Syndrome is short stature, which becomes apparent early in childhood. Other endocrine challenges include ovarian failure (leading to lack of pubertal development), thyroid disease, and cardiovascular anomalies. Recombinant growth hormone therapy and estrogen replacement are central to pediatric management.",
    symptoms: [
      "Short stature (virtually all girls with untreated Turner syndrome are short).",
      "Webbed neck (extra folds of skin) and low-set ears.",
      "Broad chest with widely spaced nipples.",
      "Swelling (lymphedema) of the hands and feet, especially at birth.",
      "Failure to start puberty (no breast development by age 13) due to premature ovarian failure."
    ],
    causes: [
      "Random loss or modification of an X chromosome in the egg or sperm, or during early cell division in the embryo (not inherited)."
    ],
    diagnosis: [
      "Karyotyping: A blood test that analyzes chromosomes to confirm the missing or altered X chromosome.",
      "Prenatal diagnosis via amniocentesis or cell-free DNA screening.",
      "Echocardiogram and Renal Ultrasound: Done at diagnosis to check for heart (e.g., coarctation of the aorta) and kidney abnormalities."
    ],
    treatment: [
      "Growth Hormone Therapy: Started early (often by age 2-4) at higher doses than standard GHD to maximize adult height.",
      "Estrogen Replacement Therapy: Initiated around age 11-12 to induce breast development, feminine body shape, and healthy bone structure, followed by progesterone to start regular cycles.",
      "Monitoring for autoimmune conditions: Annual TSH and celiac screenings."
    ],
    lifestyleAdvice: [
      "Prioritize heart checks, as girls with Turner syndrome require lifelong cardiovascular follow-ups.",
      "Ensure adequate intake of calcium and Vitamin D to combat osteoporosis risks.",
      "Connect with Turner Syndrome support groups to help girls build social confidence and self-esteem."
    ],
    faqs: [
      {
        question: "Can girls with Turner Syndrome have children?",
        answer: "Because of ovarian failure, most girls with Turner Syndrome are infertile. However, with modern reproductive technologies, including egg donation and IVF, many women with Turner Syndrome can carry pregnancies, provided their heart health is cleared by a cardiologist."
      },
      {
        question: "How tall will a girl with Turner Syndrome grow?",
        answer: "Without treatment, average adult height is about 4'7\" (140 cm). With early and consistent growth hormone therapy, girls can gain an additional 2 to 4 inches, often reaching their mid-parental target range."
      }
    ],
    whenToConsult: "Karyotype screening should be performed for any girl with unexplained short stature or delayed puberty."
  },
  {
    slug: "delayed-puberty",
    name: "Delayed Puberty",
    category: "Puberty Disorders",
    shortDesc: "Assessment and hormone therapy for teens who show no signs of puberty by the expected age.",
    overview: "Delayed puberty is defined as the absence of secondary sexual characteristics (breast development in girls, testicular enlargement in boys) by an age that is 2.5 standard deviations above the average. This means age 13 in girls and age 14 in boys. The most common cause is Constitutional Delay of Growth and Puberty (CDGP), which is a normal developmental variant. However, it can also be caused by permanent hormone deficiencies (Hypogonadotropic Hypogonadism) or primary ovarian/testicular failure.",
    symptoms: [
      "In girls: No breast bud development by age 13, or no menstruation by age 15-16.",
      "In boys: Testicular size remains less than 4 mL (the size of a marble) by age 14.",
      "Lack of pubertal growth spurt, leading the teenager to appear much shorter and younger than peers.",
      "Emotional distress and social isolation due to lagging behind peers."
    ],
    causes: [
      "Constitutional Delay (CDGP): 'Late bloomers' with delayed bone age but normal eventual development.",
      "Hypogonadotropic Hypogonadism: Pituitary or hypothalamic failure to release LH and FSH (e.g., Kallmann syndrome, brain tumors, chronic illness, severe stress, eating disorders).",
      "Hypergonadotropic Hypogonadism: Primary testicular/ovarian failure (e.g., Turner syndrome in girls, Klinefelter syndrome in boys, autoimmune destruction, chemotherapy)."
    ],
    diagnosis: [
      "Thorough physical evaluation and Tanner Staging.",
      "Bone Age X-ray to check skeletal maturity (usually delayed in CDGP).",
      "Hormone blood panels: LH, FSH, Estradiol (girls), Testosterone (boys).",
      "GnRH Stimulation test to assess pituitary response.",
      "Brain MRI if central hormone deficiency is suspected."
    ],
    treatment: [
      "Reassurance and monitoring for constitutional delay cases (puberty will start naturally).",
      "Short-term low-dose hormone therapy: Low-dose Testosterone for boys or Estrogen for girls for 3-6 months to jumpstart puberty and boost growth.",
      "Long-term hormone replacement therapy for permanent hypogonadism."
    ],
    lifestyleAdvice: [
      "Provide strong psychological support; reassure the teen that they will grow and mature.",
      "Ensure proper nutrition; eating disorders or excessive athletic training can shut down puberty.",
      "Communicate with school staff if physical differences are causing self-esteem or bullying issues."
    ],
    faqs: [
      {
        question: "Is delayed puberty hereditary?",
        answer: "Yes, Constitutional Delay (CDGP) is highly hereditary. In about 50-75% of cases, there is a family history of 'late blooming' (e.g., father had a late growth spurt or mother started her periods late)."
      },
      {
        question: "Will hormone treatment stop natural growth?",
        answer: "No, when monitored by a pediatric endocrinologist, short-term low-dose hormones accelerate growth velocity and bone maturation safely, without causing premature growth plate fusion."
      }
    ],
    whenToConsult: "Schedule an evaluation if a girl has no breast development by age 13 or has not menstruated by 15-16, or if a boy has no testicular growth by age 14."
  },
  {
    slug: "early-puberty",
    name: "Early Puberty (Precocious Puberty)",
    category: "Puberty Disorders",
    shortDesc: "Accurate diagnosis and treatment to manage early onset puberty and preserve final height.",
    overview: "Precocious puberty refers to the appearance of secondary sexual characteristics before age 8 in girls and before age 9 in boys. Central Precocious Puberty (CPP) is caused by the premature activation of the brain's hypothalamic-pituitary-gonadal axis, leading the body to secrete sex hormones too early. This leads to early breast or testicular development, rapid height gain, and early fusion of growth plates, which ultimately leads to short stature in adulthood. Treatment involves pausing puberty with GnRH analogues.",
    symptoms: [
      "Breast development or pubic hair in girls before age 8.",
      "Testicular or penile enlargement, pubic hair, or cracking voice in boys before age 9.",
      "Rapid growth spurt in early childhood (being the tallest in class, then stopping early).",
      "Acne, body odor, and mood swings typical of teenagers in a young child.",
      "Early onset of menstruation (menarche) in young girls."
    ],
    causes: [
      "Central Precocious Puberty (CPP): Idiopathic (no known cause, common in girls), or organic brain lesions (tumors, cysts, head trauma, meningitis).",
      "Peripheral Precocious Puberty (PPP): Independent of brain triggers; caused by estrogen/testosterone from ovarian cysts, adrenal tumors, Leydig cell tumors, or exposure to external hormone creams."
    ],
    diagnosis: [
      "Tanner Staging and clinical history.",
      "Bone Age X-ray showing advanced bone age relative to chronological age.",
      "Hormone blood profile: LH, FSH, Estradiol, Testosterone.",
      "GnRH Stimulation test showing a pubertal hormone response.",
      "Brain MRI: Recommended for all boys with CPP and young girls to rule out hypothalamic lesions."
    ],
    treatment: [
      "GnRH Analogue Therapy: Regular injections (monthly or 3-monthly depot injections) that desensitize the pituitary gland, reversing and pausing pubertal development.",
      "Surgical or medical treatment for peripheral causes (ovarian or adrenal cysts/tumors)."
    ],
    lifestyleAdvice: [
      "Help the child cope with physical changes that make them look older than they behave.",
      "Instruct teachers and peers to treat the child according to their chronological age, not their physical appearance.",
      "Provide age-appropriate sex education, as the child may experience early physical drives."
    ],
    faqs: [
      {
        question: "Why do we treat precocious puberty?",
        answer: "Treatment is done for two main reasons: first, to prevent early growth plate fusion so the child can reach a normal adult height; second, to delay menstruation and sexual development until the child is emotionally ready."
      },
      {
        question: "What happens when we stop GnRH analogue treatment?",
        answer: "When the medication is stopped (usually around age 11 in girls and 12 in boys), the puberty process resumes naturally, leading to normal menstruation, voice changes, and reproductive development."
      }
    ],
    whenToConsult: "Consult immediately if you notice breast development or pubic hair in a girl under 8, or testicular growth in a boy under 9."
  },
  {
    slug: "rickets",
    name: "Rickets & Vitamin D Disorders",
    category: "Bone & Mineral Disorders",
    shortDesc: "Treatment for bone softening, limb deformities, and calcium problems in children.",
    overview: "Rickets is a bone-softening disease that affects growing children, resulting from impaired mineralization of bone tissue at the growth plates. It is characterized by skeletal deformities, bone pain, and developmental delays. The most common cause is Nutritional Rickets due to vitamin D and calcium deficiency. However, genetic forms like X-Linked Hypophosphatemic Rickets (XLH) are caused by renal phosphate wasting. Prompt metabolic treatment fixes bone mineralization and prevents permanent leg deformities.",
    symptoms: [
      "Bowed legs or knock-knees in toddlers when they start walking.",
      "Swellings at the wrists and ankles.",
      "Rachitic Rosary: Bumpy swellings where ribs join the breastbone.",
      "Delayed walking, waddling gait, or bone pain.",
      "Delayed closure of the soft spot (fontanelle) on the skull.",
      "Hypocalcemic seizures or muscle spasms (tetany) in severe deficiency."
    ],
    causes: [
      "Nutritional Deficiency: Lack of sunlight exposure and inadequate dietary vitamin D and calcium.",
      "Malabsorption: Celiac disease, cystic fibrosis, or biliary tract disease.",
      "Renal Phosphate Wasting: Genetic mutations (like XLH) causing excessive loss of phosphate in urine.",
      "Vitamin D Dependency: Rare genetic disorders affecting vitamin D activation or receptor function."
    ],
    diagnosis: [
      "Blood biochemistry: Low or normal Calcium, low Phosphorus, and high Alkaline Phosphatase (ALP).",
      "Vitamin D levels: 25-hydroxyvitamin D (low in nutritional rickets).",
      "Parathyroid Hormone (PTH): Usually elevated in nutritional rickets.",
      "X-rays of wrists and knees showing widening, fraying, and cupping of the metaphysis."
    ],
    treatment: [
      "Nutritional Rickets: High-dose oral Vitamin D (Cholecalciferol) followed by daily maintenance doses, alongside oral calcium.",
      "Hypophosphatemic Rickets: Oral phosphate supplements (multiple times a day) combined with active Vitamin D (Calcitriol) or newer biological therapies (Burosumab).",
      "Orthopedic monitoring: Splinting or surgery is rarely needed once medical therapy corrects bone strength."
    ],
    lifestyleAdvice: [
      "Ensure daily, safe sun exposure (15-20 minutes of midday sun on bare skin without sunscreen).",
      "Incorporate calcium-rich foods like milk, yogurt, cheese, and fortified cereals into the daily diet.",
      "Attend regular follow-up clinics to monitor bone healing through ALP levels and repeat X-rays."
    ],
    faqs: [
      {
        question: "Can bowed legs from rickets straighten on their own?",
        answer: "Yes, in nutritional rickets, once Vitamin D and calcium levels are normalized, the bones rebuild and the legs gradually straighten out naturally within 1-2 years of starting treatment."
      },
      {
        question: "What is XLH?",
        answer: "X-Linked Hypophosphatemic Rickets (XLH) is a genetic disease where the body produces too much FGF23, a hormone that causes the kidneys to waste phosphate, leading to rickets that does not respond to standard Vitamin D."
      }
    ],
    whenToConsult: "Schedule a visit if your walking child has bowed legs, swollen wrists, or delayed growth, or if an infant has muscle twitches or seizures."
  }
];
