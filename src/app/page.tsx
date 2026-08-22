import { IoIosSearch, IoMdArrowForward } from "react-icons/io";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import PreFooter from "@/components/layout/PreFooter";
import { getAllCategories } from "@/lib/categoryData";
import { AppIcons } from "@/lib/icons";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";


export default function Home() {

  const data = getAllCategories();
  const blogs = data.flatMap((cat) => cat.relatedBlogs).slice(0, 3);

  return (
    <main className="pt-18 space-y-20">
      {/* ==== Hero section ================================================ */}
      <section className="w-full relative flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
          <h1
            className="text-5xl font-bold tracking-tight">
            Scientifically Precise Health &amp; Fitness Tools
          </h1>
          <p className="max-w-2xl">
            Join 1M+ users optimizing their transformation with data-backed calculators.
            Uncover your precise metabolic requirements, strength potential, and body
            composition.
          </p>
          <div
            className="w-full max-w-2xl relative rounded-[14px] shadow-sm flex items-center focus-within:shadow-md transition-shadow group bg-[#f2f4f6] p-1">
            <IoIosSearch className='text-3xl ml-2 text-slate-500' />
            <input className="w-full bg-transparent border-none outline-none px-2 py-4 text-lg text-[#1C2333] placeholder:text-base"
              placeholder="Search calculators (e.g., TDEE, 1RM, Macro)..."
              type="text" />
            <button
              className="btn btn-primary h-12 px-6 rounded-xl transition-colors mx-1">
              Calculate
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
            <span
              className="text-xs mr-2 uppercase tracking-wider">Trending
              Now:</span>
            <Link className="kbd rounded-full"
              href="/calculators/bmi-calculator">BMI</Link>
            <Link className="kbd rounded-full"
              href="/calculators/tdee-calculator">TDEE</Link>
            <Link className="kbd rounded-full"
              href="/calculators/macro-calculator">Macros</Link>
            <Link className="kbd rounded-full"
              href="/calculators/1rm-calculator">1RM</Link>
          </div>
        </div>
      </section>

      {/* ==== Trust & Science Strip ================================================ */}
      <section className="w-full bg-base-200 py-4 shadow-sm relative z-10">
        <div
          className="max-w-12xl mx-auto px-4 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center p-2">
              <RiVerifiedBadgeLine className="text-[#3d5b00] size-full" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-[#1C2333]">Scientifically
                Reviewed</span>
              <span className="text-sm text-slate-500">Algorithms
                based on 500+ Peer-Reviewed Citations</span>
            </div>
          </div>
          <div className="flex items-center gap-4 opacity-60 mix-blend-multiply">
            <span
              className="text-slate-500 tracking-widest font-bold">NIH</span>
            <span
              className="text-slate-500 tracking-widest font-bold">WHO</span>
            <span
              className="text-slate-500 tracking-widest font-bold">ACSM</span>
          </div>
        </div>
      </section>

      {/* ==== Popular Calculators ================================================ */}
      <section className="w-full max-w-12xl mx-auto px-4 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-[#1C2333] mb-2">Explore
            Our Top Calculators</h2>
          <p className="text-md text-slate-500">Precision tools built for
            performance athletes and health-conscious individuals.</p>
        </div>
        {data?.map(item => (
          <div className="mb-16" key={item.id}>
            <h3
              className="text-[#1C2333] mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary rounded-full block"></span> {item.heroTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {item.calculators.slice(-3).map(calc => {
                const Icon = AppIcons[calc.icon];
                return (
                  <Link className="bg-base-200 rounded-[20px] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                    href={`calculators/${calc.slug}`} key={calc.id}>
                    <div
                      className="w-12 h-12 rounded-xl bg-base-100 flex items-center justify-center mb-4 shadow-sm p-3.5">
                      <Icon className="size-full" />
                    </div>
                    <h4 className="text-xl text-[#1C2333] mb-2">{calc.title}</h4>
                    <p className="text-sm text-slate-500 mb-6 grow">{calc.description}</p>
                    <div
                      className="flex items-center font-bold group-hover:text-primary transition-colors">
                      Calculate Now
                      <IoMdArrowForward className="ml-1 text-lg group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

        ))}
      </section>

      {/* ==== Testimonials ================================================ */}
      <section className="w-full bg-base-200 py-24">
        <div className="max-w-12xl mx-auto px-4 lg:px-10">
          <h2 className="text-3xl text-[#1C2333] text-center mb-12">
            Trusted by High Performers</h2>
          <TestimonialsCarousel />
        </div >
      </section >

      {/* ==== Blog Section ================================================ */}
      <section className="w-full py-24 max-w-12xl mx-auto px-4 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl text-[#1C2333] mb-2">Latest
              from the Blog</h2>
            <p className="text-slate-500">Science-backed
              insights on metabolic health and training methodology.</p>
          </div>
          <Link className="text-[#466800] hover:text-primary transition-colors flex items-center space-x-1"
            href="/blogs">
            <span>View All Articles</span>
            <IoMdArrowForward className="text-sm" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((post) => (
            <article
              key={post.id}
              className="bg-base-200 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-lg font-bold text-[#1C2333] mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 grow line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blogs/${post.id}`}
                  className="flex items-center text-primary font-semibold text-sm hover:gap-2 gap-1 transition-all"
                >
                  Read Article
                  <IoMdArrowForward className="text-base group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==== Pre-Footer CTA ================================================ */}
      <PreFooter />

    </main >
  );
}

