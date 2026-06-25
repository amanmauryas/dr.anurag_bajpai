import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Anurag Bajpai | Pediatric & Adolescent Endocrinologist India",
    template: "%s | Dr. Anurag Bajpai"
  },
  description: "Dr. Anurag Bajpai is a leading Pediatric & Adolescent Endocrinologist with 17+ years of clinical experience. Specializing in Growth Disorders, short stature, Childhood Diabetes (Type 1), thyroid disorders, and adolescent hormone issues.",
  keywords: [
    "Pediatric Endocrinologist India",
    "Best Pediatric Endocrinologist Kanpur",
    "Child Diabetes Specialist",
    "Growth Hormone Specialist",
    "Short Stature Expert",
    "Child Thyroid Specialist",
    "Pediatric Hormone Specialist",
    "Growth Clinic India",
    "Child Obesity Specialist"
  ],
  metadataBase: new URL("https://dr-anurag-bajpai.vercel.app"),
  openGraph: {
    title: "Dr. Anurag Bajpai | Pediatric & Adolescent Endocrinologist",
    description: "Expert pediatric endocrine care combining world-class clinical expertise, advanced research, and compassion.",
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-light dark:bg-slate-dark text-foreground">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
