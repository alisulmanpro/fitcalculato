"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { TbActivityHeartbeat, TbBook, TbTools, TbBookmark, TbFolderOff, TbAward } from "react-icons/tb";
import { IoMdArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { getAllCategories } from "@/lib/categoryData";
import { AppIcons } from "@/lib/icons";

interface BlogPost {
  id: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
}

const mockBlogs: BlogPost[] = [
  {
    id: "1",
    tag: "STRENGTH",
    date: "Oct 28, 2024",
    title: "The Science of Hypertrophy: Beyond the Rep Range",
    excerpt: "Explore the physiological mechanisms driving muscle growth, examining tension, metabolic stress, and muscle damage beyond traditional 8-12 repetition paradigms based on recent clinical studies.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    readTime: "6 min read"
  },
  {
    id: "2",
    tag: "NUTRITION",
    date: "Oct 24, 2024",
    title: "Optimal Protein Timing for Muscle Recovery",
    excerpt: "Learn why the total daily intake matters more than the narrow anabolic window, supported by recent meta-analyses on protein synthesis.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop",
    readTime: "5 min read"
  },
  {
    id: "3",
    tag: "METABOLISM",
    date: "Oct 22, 2024",
    title: "Hydration Status and Resting Metabolic Rate",
    excerpt: "How mild dehydration can mask metabolic efficiency and stall your fat loss goals, exploring the thermodynamic impact of water on cellular function.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
    readTime: "4 min read"
  }
];

export default function AuthorProfile() {
  const [activeTab, setActiveTab] = useState<"calculators" | "blogs">("calculators");
  const [blogs, setBlogs] = useState<BlogPost[]>(mockBlogs);

  // Fetching categories and flattening their calculators
  const categories = getAllCategories();
  const allCalculators = categories.flatMap(cat => 
    cat.calculators.map(calc => ({
      ...calc,
      categoryName: cat.heroTitle.replace(" Calculators", "")
    }))
  );

  const totalCalculatorsCount = allCalculators.length;
  const articlesCount = blogs.length;

  return (
    <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      {/* ================= HEADER SECTION ================= */}
      <section className="bg-base-200 rounded-[24px] border border-base-300 p-6 md:p-10 shadow-sm relative overflow-hidden">
        {/* Subtle background glow decoration */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
          {/* Avatar Container */}
          <div className="relative group shrink-0">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center text-primary-content text-4xl md:text-5xl font-extrabold tracking-wider border-2 border-primary shadow-xl select-none">
              AS
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary text-secondary p-1.5 rounded-full border-2 border-base-200 shadow-md">
              <TbAward className="size-5" />
            </div>
          </div>

          {/* Details Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-secondary">
                  Ali Sulman
                </h1>
                <div className="tooltip tooltip-right" data-tip="Verified Developer">
                  <RiVerifiedBadgeFill className="text-primary size-6.5 self-center" />
                </div>
              </div>
              <p className="text-sm font-semibold tracking-wide uppercase text-accent">
                Health & Fitness Data Specialist & Lead Developer at FitCalculators
              </p>
            </div>

            <p className="text-neutral max-w-3xl leading-relaxed text-sm md:text-base">
              Ali Sulman is a software engineer and fitness data specialist dedicated to bridging the gap between exercise physiology research and clean digital interfaces. With a focus on metabolic and cardiovascular calculators, he designs evidence-based tools that translate complex health markers into clear, actionable baselines for athletes, trainers, and health-conscious individuals.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm btn-ghost hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="size-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm btn-ghost hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <FaXTwitter className="size-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm btn-ghost hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub className="size-5" />
              </a>
            </div>
          </div>

          {/* Stats Badges Section */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 w-full md:w-auto shrink-0 self-center md:self-start">
            <div className="bg-base-100 border border-base-300 rounded-[16px] px-5 py-4 flex items-center gap-4 shadow-xs">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <TbTools className="size-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">{totalCalculatorsCount}</div>
                <div className="text-xs text-neutral/70 font-semibold tracking-wider uppercase">Calculators</div>
              </div>
            </div>

            <div className="bg-base-100 border border-base-300 rounded-[16px] px-5 py-4 flex items-center gap-4 shadow-xs">
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                <TbBook className="size-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">{articlesCount}</div>
                <div className="text-xs text-neutral/70 font-semibold tracking-wider uppercase">Articles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NAVIGATION TABS ================= */}
      <section className="space-y-6">
        <div className="border-b border-base-300 flex items-center justify-between">
          <div className="flex gap-8" role="tablist">
            <button
              onClick={() => setActiveTab("calculators")}
              className={`pb-4 text-sm md:text-base font-bold tracking-wide transition-all relative ${
                activeTab === "calculators"
                  ? "text-primary border-b-2 border-primary"
                  : "text-neutral hover:text-secondary border-b-2 border-transparent"
              }`}
              role="tab"
              aria-selected={activeTab === "calculators"}
            >
              Calculators ({totalCalculatorsCount})
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`pb-4 text-sm md:text-base font-bold tracking-wide transition-all relative ${
                activeTab === "blogs"
                  ? "text-primary border-b-2 border-primary"
                  : "text-neutral hover:text-secondary border-b-2 border-transparent"
              }`}
              role="tab"
              aria-selected={activeTab === "blogs"}
            >
              Blogs ({articlesCount})
            </button>
          </div>

          {/* Interactive State Helper for Blogs Tab */}
          {activeTab === "blogs" && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral/60 hidden sm:inline font-medium">Demo empty state:</span>
              <button
                onClick={() => setBlogs(prev => (prev.length > 0 ? [] : mockBlogs))}
                className="btn btn-xs btn-outline btn-accent rounded-full text-xs font-semibold px-3 py-1"
              >
                {blogs.length > 0 ? "Clear Blogs" : "Restore Blogs"}
              </button>
            </div>
          )}
        </div>

        {/* ================= TAB CONTENT ================= */}
        <div className="transition-all duration-300">
          {activeTab === "calculators" ? (
            /* CALCULATORS GRID */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCalculators.map(calc => {
                const IconComponent = AppIcons[calc.icon] || TbActivityHeartbeat;
                return (
                  <div
                    key={calc.id}
                    className="card bg-base-200 border border-base-300 rounded-[20px] p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-base-100 flex items-center justify-center shadow-xs p-3 border border-base-300/50">
                        <IconComponent className="size-full text-secondary" />
                      </div>
                      {/* Category Badge */}
                      <div className="badge badge-sm badge-success badge-outline font-bold tracking-wider text-[10px] uppercase">
                        {calc.categoryName}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {calc.title}
                    </h3>
                    <p className="text-sm text-neutral/80 mb-6 grow leading-relaxed">
                      {calc.description}
                    </p>

                    <div className="card-actions justify-start">
                      <Link
                        href={`/calculators/${calc.slug}`}
                        className="flex items-center font-bold text-sm text-secondary group-hover:text-primary transition-colors gap-1"
                      >
                        Open Calculator
                        <IoMdArrowForward className="text-lg group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* BLOGS GRID WITH CONDITIONAL RENDERING */
            <div>
              {blogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogs.map(post => (
                    <article
                      key={post.id}
                      className="card bg-base-200 border border-base-300 rounded-[20px] overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                    >
                      {/* Thumbnail Container */}
                      <div className="relative h-48 w-full overflow-hidden bg-base-300 shrink-0">
                        {/* Fallback pattern to ensure visuals exist without real images */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-10 flex items-center justify-center">
                          <TbBookmark className="size-12 text-neutral" />
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={post.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out relative z-10"
                          src={post.image}
                          onError={(e) => {
                            // If Unsplash block or missing network occurs, hide img and show fallback
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute top-3 left-3 z-20">
                          <div className="badge badge-sm badge-success badge-outline font-bold tracking-wider text-[10px] uppercase bg-base-200/90 backdrop-blur-xs">
                            {post.tag}
                          </div>
                        </div>
                      </div>

                      {/* Content Card Body */}
                      <div className="p-6 flex flex-col grow justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs text-neutral/70 font-semibold">
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-base font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-sm text-neutral/80 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="card-actions justify-start pt-2">
                          <Link
                            href="/blogs"
                            className="flex items-center font-bold text-sm text-secondary group-hover:text-primary transition-colors gap-1"
                          >
                            Read Article
                            <IoIosArrowRoundForward className="size-6 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                /* EMPTY STATE UI */
                <div className="flex flex-col items-center justify-center text-center p-12 md:p-20 rounded-[24px] border-2 border-dashed border-base-300 bg-base-200/50 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-base-200 border border-base-300 flex items-center justify-center text-neutral/60 shadow-xs">
                    <TbFolderOff className="size-8" />
                  </div>
                  <div className="space-y-2 max-w-md">
                    <h3 className="text-lg font-bold text-secondary">
                      No blogs available yet
                    </h3>
                    <p className="text-sm text-neutral/80">
                      Ali Sulman hasn&apos;t published any blog posts on this site. Please check back later for research updates.
                    </p>
                  </div>
                  <button
                    onClick={() => setBlogs(mockBlogs)}
                    className="btn btn-sm btn-primary rounded-xl font-bold px-4"
                  >
                    Load Sample Articles
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
