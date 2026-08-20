"use client";

import PreFooter from "@/components/layout/PreFooter";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { DynamicHero } from "@/components/categories/dynamic-page";
import { getAllCategories } from "@/lib/categoryData";

const Page = () => {
    const categories = ["All", "Fitness", "Metabolism", "Nutrition", "Health", "Performance"];

    const categoryData: CategoryData[] = getAllCategories();
    const blog = categoryData
        .flatMap((item) => item.relatedBlogs)


    return (
        <main className="w-full">
            <DynamicHero title={"Scientific Insights & Training Methodology"} description={"Data-driven guides to optimize your health, performance, and longevity."} image="/about.jpg" />

            <section className="p-10 md:p-14 lg:py-20 lg:px-40">
                <div className="w-full">
                    <div className="w-full p-4">
                        <div className="tabs tabs-boxed overflow-x-auto w-full">
                            {categories.map((label) => (
                                <button
                                    key={label}
                                    className={label === "All" ? "tab tab-active" : "tab"}
                                    type="button"
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <article className="w-full">
                    <div className="w-full p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blog?.map((post) => (
                                <article key={post.title} className="card bg-base-100 border border-accent/10 overflow-hidden">
                                    <figure className="relative h-48 w-full">
                                        <Image
                                            alt={post.title}
                                            className="object-cover"
                                            src={post.image}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <div className="flex items-center justify-between gap-3">
                                            {/* <div className="badge badge-sm badge-success badge-outline">{post.tag}</div> */}
                                            {/* <div className="text-sm text-base-content/60">{post.date}</div> */}
                                        </div>
                                        <h3 className="card-title">{post.title}</h3>
                                        <p className="text-base-content/70 line-clamp-3">{post.excerpt}</p>
                                        <div className="card-actions justify-start">
                                            <a href={`/blogs/${post.id}`} className="flex items-center text-lime-600 font-semibold link link-hover">Read Now <IoIosArrowRoundForward className="size-6" /></a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="flex justify-center mt-10">
                            <button className="btn btn-outline" type="button">
                                Load More Articles
                            </button>
                        </div>
                    </div>
                </article>
            </section>

            <PreFooter />
        </main>
    );
};

export default Page;
