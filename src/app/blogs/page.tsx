"use client";

import PreFooter from "@/components/layout/PreFooter";
import { IoIosArrowRoundForward } from "react-icons/io";

const Page = () => {
    const categories = ["All", "Fitness", "Metabolism", "Nutrition", "Health", "Performance"];

    const posts = [
        {
            tag: "NUTRITION",
            date: "Oct 24, 2024",
            title: "Optimal Protein Timing for Muscle Recovery",
            excerpt:
                "Learn why the total daily intake matters more than the narrow anabolic window, supported by recent meta-analyses on protein synthesis.",
            image:
                "https://lh3.googleusercontent.com/aida/AP1WRLsDLmFsFGoEefpjf0QQZ2kEDEELIgoFHGDmuLeDJbnp6C4jhEpngPWheVVA0Na5gJM7UvLFRgcnlCe9vs6rQ2lcKynDntY3FOQrA_hpWsLnTYm10NI5bO2fwAbRL0-ZbXSqIjEe8o_gcdEzT4l4kK4T80Q__FfTfyugV_FIORFIAwWE3LUaLXjrbiT7soxHIjcXA3_LJhElU8Dc5-fiVcyDaxtQKt3EkzxW6nG1urO4NNdmVyEfIs2LahQ",
            imageAlt: "Nutrition article image",
        },
        {
            tag: "METABOLISM",
            date: "Oct 22, 2024",
            title: "Hydration Status and Resting Metabolic Rate",
            excerpt:
                "How mild dehydration can mask metabolic efficiency and stall your fat loss goals, exploring the thermodynamic impact of water on cellular function.",
            image:
                "https://lh3.googleusercontent.com/aida/AP1WRLtOpwcOAW6HWRFQEPqC-YZ9DFzqJbF7AoBVlJYclvhQybyH3VGrPV4CPUhy8RlINka8GtqS_tphEhf3D9FKFAQ0U7H-6ZdLFhrL1b776-soCjQoRmCV4n2qxvsLpQjI72euFVpezs66JSpxqD7yL7BnW8cKTOZgj9yHMvKDdNYFUyT0UIkuTPyMcKtg3bfgzc_qc6jDqxTGl81R18vhXuF0gnihwopta1Fxz9T6NYvIrS85h_VSSD8r9Co",
            imageAlt: "Metabolism article image",
        },
        {
            tag: "HEALTH",
            date: "Oct 20, 2024",
            title: "Accuracy of Wearables in Caloric Tracking",
            excerpt:
                "A clinical review of common wrist-worn devices and their error margins in energy expenditure estimation across various activity modalities.",
            image:
                "https://lh3.googleusercontent.com/aida/AP1WRLuXcJWkqwx8SlJYPVNk-03HIKri5wyTNiOOmSLSzFV5AHSKH7dF4WHsksjJxHo3Y8PffmH8ID2h3Oo0D6PxLQjeD1z0H5dtoAIl1HEX4QqvtffD-gYUtSJz_bcBH9oPCuf_sXHlor9qjTeaOUJrTnlsC2uBYxuiks1X9u2U0bCWCNOrS7qKkANRZyrv6ZPChPrilvEedX8EgMyaeBRO-62GcELODBUUY6pTmS6t50uzreNd5R8fQEPMnwU",
            imageAlt: "Health tech article image",
        },
    ];

    return (
        <main className="w-full p-16">
            <section className="hero bg-base-100 place-items-start">
                <div className="hero-content justify-start w-full">
                    <div className="max-w-3xl text-center lg:text-left space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-base-content">
                            Scientific Insights & Training Methodology
                        </h1>
                        <p className="text-lg text-base-content/70">
                            Data-driven guides to optimize your health, performance, and longevity.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <div className="w-full p-4">
                    <article className="card bg-base-100 overflow-hidden lg:card-side border border-accent/10">
                        <figure className="lg:w-1/2">
                            <img
                                alt="The Science of Hypertrophy"
                                className="h-80 lg:h-full w-full object-cover"
                                src="https://lh3.googleusercontent.com/aida/AP1WRLtlwM885MnwrgU_-dTvLGCjr1z0i8BYj2JwhnrgADRlr3t9m0xGfoJWGqJR0UT3Cehk4JQQhV9O97R4fnm1txJdweRgFVVVYUv3Hz5NjdPYNJEddUuuHIy2djTPKFXJpYLStpF4Eg5yrATyY0w5xDgEI64oVHJktYT2j2E6jnV1qReREWpZwY9SGUJrXzEREyR--yq84g9xwfV0bOvDCHgSILAPK4MGPV5nJUBFxJE2DHnnB1zif9Toh-Q"
                            />
                        </figure>
                        <div className="card-body lg:w-1/2">
                            <div className="flex items-center gap-3">
                                <div className="badge badge-sm badge-success badge-outline">STRENGTH</div>
                                <div className="text-sm text-base-content/60 ml-auto lg:ml-0">Oct 28, 2024</div>
                            </div>
                            <h2 className="card-title text-2xl md:text-3xl">
                                The Science of Hypertrophy: Beyond the Rep Range
                            </h2>
                            <p className="text-base-content/70">
                                Explore the physiological mechanisms driving muscle growth, examining tension,
                                metabolic stress, and muscle damage beyond traditional 8-12 repetition paradigms
                                based on recent clinical studies.
                            </p>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-outline">
                                    Read Article
                                    <IoIosArrowRoundForward className="size-6.5" />
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="w-full">
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
            </section>

            <section className="w-full">
                <div className="w-full p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <article key={post.title} className="card bg-base-100 border border-accent/10 overflow-hidden">
                                <figure>
                                    <img alt={post.imageAlt} className="h-48 w-full object-cover" src={post.image} />
                                </figure>
                                <div className="card-body">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="badge badge-sm badge-success badge-outline">{post.tag}</div>
                                        <div className="text-sm text-base-content/60">{post.date}</div>
                                    </div>
                                    <h3 className="card-title">{post.title}</h3>
                                    <p className="text-base-content/70 line-clamp-3">{post.excerpt}</p>
                                    <div className="card-actions justify-start">
                                        <a href={`/calculators`} className="flex items-center text-lime-600 font-semibold link link-hover">Calculate Now <IoIosArrowRoundForward className="size-6" /></a>
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
            </section>

            <PreFooter />
        </main>
    );
};

export default Page;
