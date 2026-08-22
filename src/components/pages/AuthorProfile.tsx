"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import {
  TbActivityHeartbeat,
  TbBook,
  TbTools,
  TbFolderOff,
  TbAward,
} from "react-icons/tb";
import { IoMdArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { getAllCalculators, getAllBlogs } from "@/lib/categoryData";
import { AppIcons } from "@/lib/icons";

export default function AuthorProfile() {
  const [activeTab, setActiveTab] = useState<"calculators" | "blogs">("calculators");

  const allCalculators = getAllCalculators();
  const allBlogs = getAllBlogs();

  const totalCalculatorsCount = allCalculators.length;
  const articlesCount = allBlogs.length;

  return (
    <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      {/* Author Hero Card */}
      <section className="card bg-base-200 border border-base-300 shadow-sm overflow-hidden">
        <div className="card-body p-6 md:p-10 relative">
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10">
            {/* Avatar */}
            <div className="avatar shrink-0">
              <div className="w-32 md:w-36 rounded-full ring ring-primary ring-offset-2 ring-offset-base-200 relative">
                <Image
                  src="/author.jpeg"
                  alt="Muhammad Noman Akram"
                  width={144}
                  height={144}
                  className="object-cover rounded-full"
                  priority
                />
                <div className="absolute -bottom-1 -right-1 bg-primary text-secondary p-1.5 rounded-full border-2 border-base-200 shadow-md">
                  <TbAward className="size-5" />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-secondary">
                    Muhammad Noman Akram
                  </h1>
                  <div className="tooltip tooltip-right" data-tip="Verified Developer">
                    <RiVerifiedBadgeFill className="text-primary size-6.5" />
                  </div>
                </div>
                <p className="text-sm font-semibold tracking-wide uppercase text-accent">
                  Health &amp; Fitness Data Specialist &amp; Lead Developer at FitCalculators
                </p>
              </div>

              <p className="text-neutral max-w-3xl leading-relaxed text-sm md:text-base">
                Muhammad Noman Akram is a Medical and Fitness Writer & Researcher with 5+ years
                of experience in cardiovascular training and health technology. He is a certified
                endurance coach dedicated to simplifying complex fitness science into clear,
                evidence-based tools for athletes, trainers, and health-conscious individuals.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2">
                <a
                  href="https://www.linkedin.com/in/muhammad-noman-akram-39b248167/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm btn-ghost hover:bg-primary/20 hover:text-primary"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="size-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm btn-ghost hover:bg-primary/20 hover:text-primary"
                  aria-label="Twitter Profile"
                >
                  <FaXTwitter className="size-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm btn-ghost hover:bg-primary/20 hover:text-primary"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="size-5" />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="stats stats-vertical lg:stats-horizontal shadow-sm bg-base-100 border border-base-300 shrink-0 w-full lg:w-auto">
              <div className="stat place-items-center lg:place-items-start px-6 py-4">
                <div className="stat-figure text-primary">
                  <TbTools className="size-7" />
                </div>
                <div className="stat-title text-xs uppercase tracking-wider">Calculators</div>
                <div className="stat-value text-secondary text-3xl">{totalCalculatorsCount}</div>
              </div>
              <div className="stat place-items-center lg:place-items-start px-6 py-4">
                <div className="stat-figure text-accent">
                  <TbBook className="size-7" />
                </div>
                <div className="stat-title text-xs uppercase tracking-wider">Articles</div>
                <div className="stat-value text-secondary text-3xl">{articlesCount}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="space-y-6">
        <div role="tablist" className="tabs tabs-boxed bg-base-200 rounded-full p-1.5 w-full sm:w-fit gap-1">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "calculators"}
            onClick={() => setActiveTab("calculators")}
            className={`tab h-11 min-h-11 px-5 font-bold inline-flex items-center gap-2 whitespace-nowrap ${activeTab === "calculators" ? "tab-active" : ""}`}
          >
            <TbTools className="size-4 shrink-0" />
            <span>Calculators ({totalCalculatorsCount})</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "blogs"}
            onClick={() => setActiveTab("blogs")}
            className={`tab h-11 min-h-11 px-5 font-bold inline-flex items-center gap-2 whitespace-nowrap ${activeTab === "blogs" ? "tab-active" : ""}`}
          >
            <TbBook className="size-4 shrink-0" />
            <span>Blogs ({articlesCount})</span>
          </button>
        </div>

        {activeTab === "calculators" ? (
          allCalculators.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCalculators.map((calc) => {
                const IconComponent = AppIcons[calc.icon] || TbActivityHeartbeat;
                return (
                  <article
                    key={calc.id}
                    className="card bg-base-200 border border-base-300 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="card-body gap-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="w-12 h-12 rounded-xl bg-base-100 border border-base-300 flex items-center justify-center">
                          <IconComponent className="size-6 text-secondary" />
                        </div>
                        <span className="badge badge-success badge-outline badge-sm font-bold uppercase">
                          {calc.categoryName}
                        </span>
                      </div>

                      <div>
                        <h3 className="card-title text-secondary group-hover:text-primary transition-colors">
                          {calc.title}
                        </h3>
                        <p className="text-sm text-neutral/80 mt-2 leading-relaxed line-clamp-3">
                          {calc.description}
                        </p>
                      </div>

                      <div className="card-actions justify-start mt-auto">
                        <Link
                          href={`/calculators/${calc.slug}`}
                          className="btn btn-ghost btn-sm px-0 text-secondary group-hover:text-primary font-bold gap-1"
                        >
                          Open Calculator
                          <IoMdArrowForward className="size-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <EmptyState
              title="No calculators yet"
              description="Calculators from categoryData will appear here once added."
            />
          )
        ) : allBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBlogs.map((post) => (
              <article
                key={post.id}
                className="card bg-base-200 border border-base-300 hover:border-primary/40 hover:shadow-md transition-all duration-300 group overflow-hidden"
              >
                <figure className="relative h-48 w-full bg-base-300">
                  <Image
                    alt={post.title}
                    src={post.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge badge-success badge-sm font-bold uppercase">
                      {post.categoryName}
                    </span>
                  </div>
                </figure>

                <div className="card-body gap-3">
                  <h3 className="card-title text-secondary line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral/80 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="card-actions justify-start mt-auto">
                    <Link
                      href={`/blogs/${post.id}`}
                      className="btn btn-ghost btn-sm px-0 text-secondary group-hover:text-primary font-bold gap-1"
                    >
                      Read Article
                      <IoIosArrowRoundForward className="size-5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No articles yet"
            description="Blog posts from categoryData will appear here once added."
          />
        )}
      </section>
    </main>
  );
}

function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="hero bg-base-200 border border-dashed border-base-300 rounded-2xl min-h-64">
      <div className="hero-content text-center py-12">
        <div className="space-y-4 max-w-md">
          <div className="mx-auto w-16 h-16 rounded-full bg-base-100 border border-base-300 flex items-center justify-center">
            <TbFolderOff className="size-8 text-neutral/60" />
          </div>
          <h3 className="text-lg font-bold text-secondary">{title}</h3>
          <p className="text-sm text-neutral/80">{description}</p>
        </div>
      </div>
    </div>
  );
}
