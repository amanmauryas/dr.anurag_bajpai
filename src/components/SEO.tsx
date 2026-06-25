import React from "react";

interface SEOProps {
  type: "Physician" | "Person" | "MedicalCondition" | "Article" | "FAQ";
  data: any;
}

export default function SEO({ type, data }: SEOProps) {
  let schema: any = null;

  if (type === "Physician") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Anurag Bajpai",
      "image": "https://dr-anurag-bajpai.vercel.app/dr_anurag_portrait.jpg",
      "description": data.description || "Dr. Anurag Bajpai is a leading Pediatric & Adolescent Endocrinologist with 17+ years of experience in childhood diabetes, short stature, and thyroid disorders.",
      "telephone": "+91-512-3081111",
      "medicalSpecialty": "PediatricEndocrinology",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Regency Hospital, Tower-1, Sarvodaya Nagar",
          "addressLocality": "Kanpur",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "208005",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Regency Super Speciality Clinic, Kakadeo",
          "addressLocality": "Kanpur",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "208025",
          "addressCountry": "IN"
        }
      ],
      "knowsAbout": [
        "Growth Disorders",
        "Short Stature Evaluation",
        "Type 1 Diabetes",
        "Childhood Obesity",
        "Thyroid Disorders",
        "Puberty Disorders",
        "Growth Hormone Therapy"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "All India Institute of Medical Sciences (AIIMS), New Delhi"
      },
      "memberOf": [
        {
          "@type": "MedicalOrganization",
          "name": "Indian Society for Pediatric & Adolescent Endocrinology (ISPAE)"
        },
        {
          "@type": "MedicalOrganization",
          "name": "Royal Australasian College of Physicians (RACP)"
        }
      ]
    };
  } else if (type === "MedicalCondition") {
    schema = {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": data.name,
      "description": data.shortDesc,
      "possibleTreatment": data.treatment?.map((t: string) => ({
        "@type": "MedicalTherapy",
        "name": t
      })),
      "signOrSymptom": data.symptoms?.map((s: string) => ({
        "@type": "MedicalSignOrSymptom",
        "name": s
      })),
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": data.category === "Thyroid Disorders" ? "Thyroid Gland" : data.category === "Adrenal Disorders" ? "Adrenal Glands" : "Endocrine System"
      }
    };
  } else if (type === "Article") {
    schema = {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": data.title,
      "description": data.excerpt,
      "author": {
        "@type": "Person",
        "name": data.author || "Dr. Anurag Bajpai",
        "jobTitle": "Pediatric Endocrinologist"
      },
      "datePublished": data.date,
      "publisher": {
        "@type": "Organization",
        "name": "Dr. Anurag Bajpai - Pediatric Endocrinology"
      }
    };
  } else if (type === "FAQ") {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.map((faq: { question: string; answer: string }) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
