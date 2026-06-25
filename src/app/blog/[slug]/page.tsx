import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ChevronRight, User, BookOpen } from "lucide-react";
import { blogPostsData } from "@/data/blog";
import SEO from "@/components/SEO";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Dr. Anurag Bajpai's Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPostsData.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO type="Article" data={post} />

      <div className="bg-slate-50 dark:bg-slate-950 pb-20">
        
        {/* Banner */}
        <section className="bg-primary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.2),transparent)] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs text-medical-light font-bold uppercase tracking-wider mb-3 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <span className="text-xs font-bold text-medical-light block uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-gray-300">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4 text-medical-light" />
                By {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main content body */}
            <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
              
              {/* Injecting content */}
              <article 
                className="prose dark:prose-invert prose-blue max-w-none text-gray-750 dark:text-gray-300 space-y-5 text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="flex flex-wrap gap-1.5 pt-6 border-t border-gray-50 dark:border-gray-800/80">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Author bio card */}
              <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 flex gap-4 items-center mt-8">
                <div className="h-12 w-12 rounded-full bg-medical text-white font-bold flex items-center justify-center shrink-0">
                  AB
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">Written by Dr. Anurag Bajpai</h4>
                  <p className="text-xs text-gray-500">Pediatric Endocrinologist & Director of MedEClasses. Alumnus of AIIMS New Delhi and Australia fellowship training.</p>
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Dynamic Appointment */}
              <div className="bg-primary-dark text-white rounded-3xl p-6 shadow-md space-y-4">
                <h3 className="text-lg font-bold border-b border-white/10 pb-2">
                  Clinical Care
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  If your child experiences growth delays or diabetes symptoms, schedule a diagnostic check.
                </p>
                <div className="space-y-2 pt-2">
                  <Link
                    href="/book"
                    className="block text-center py-2.5 bg-medical text-white text-xs font-bold rounded-xl shadow hover:bg-medical-light transition-all"
                  >
                    Request Consult
                  </Link>
                </div>
              </div>

              {/* Other blog articles */}
              {otherPosts.length > 0 && (
                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-50 dark:border-gray-800 pb-2">
                    Recent Articles
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    {otherPosts.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/blog/${item.slug}`}
                          className="flex items-center justify-between text-gray-650 dark:text-gray-400 hover:text-medical font-medium transition-colors group"
                        >
                          <span className="line-clamp-1">{item.title}</span>
                          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

          </div>
        </section>

      </div>
    </>
  );
}
