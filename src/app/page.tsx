import { IoIosSearch, IoIosBody, IoMdArrowForward, IoMdStarOutline } from "react-icons/io";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { MdOutlineScale, MdOutlinePieChart } from "react-icons/md";
import { LuFlame, LuMail } from "react-icons/lu";
import { BiDumbbell } from "react-icons/bi";
import Link from "next/link";
import { FaPersonRunning } from "react-icons/fa6";


export default function Home() {
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
            <a className="kbd rounded-full"
              href="#">BMI</a>
            <a className="kbd rounded-full"
              href="#">TDEE</a>
            <a className="kbd rounded-full"
              href="#">Macros</a>
            <a className="kbd rounded-full"
              href="#">1RM</a>
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
        <div className="mb-16">
          <h3
            className="text-[#1C2333] mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-primary rounded-full block"></span> Weight
            Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link className="bg-base-200 rounded-[20px] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              href="#">
              <div
                className="w-12 h-12 rounded-xl bg-base-100 flex items-center justify-center mb-4 shadow-sm p-3.5">
                <MdOutlineScale className="size-full" />
              </div>
              <h4 className="text-xl text-[#1C2333] mb-2">BMI
                Calculator</h4>
              <p className="text-sm text-slate-500 mb-6 grow">
                Calculate your Body Mass Index to assess if you're in a healthy
                weight range based on WHO data.</p>
              <div
                className="flex items-center font-bold group-hover:text-primary transition-colors">
                Calculate Now
                <IoMdArrowForward className="ml-1 text-lg group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link className="bg-base-200 rounded-[20px] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              href="#">
              <div
                className="w-12 h-12 rounded-xl bg-base-100 flex items-center justify-center mb-4 shadow-sm p-3.5">
                <LuFlame className="size-full" />
              </div>
              <h4 className="text-xl text-[#1C2333] mb-2">
                TDEE Calculator</h4>
              <p className="text-sm text-slate-500 mb-6 grow">
                Find your Total Daily Energy Expenditure to precisely calibrate
                your caloric deficit or surplus.</p>
              <div
                className="flex items-center font-bold group-hover:text-primary transition-colors">
                Calculate Now
                <IoMdArrowForward className="ml-1 text-lg group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link className="bg-base-200 rounded-[20px] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              href="#">
              <div
                className="w-12 h-12 rounded-xl bg-base-100 flex items-center justify-center mb-4 shadow-sm p-3.5">
                <MdOutlinePieChart className="size-full" />
              </div>
              <h4 className="text-xl text-[#1C2333] mb-2">
                Macro Nutrients</h4>
              <p className="text-sm text-slate-500 mb-6 grow">
                Optimize your protein, fat, and carbohydrate ratios for muscle
                gain, fat loss, or endurance.</p>
              <div
                className="flex items-center font-bold group-hover:text-primary transition-colors">
                Calculate Now
                <IoMdArrowForward className="ml-1 text-lg group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <h3
            className="text-[#1C2333] mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-primary rounded-full block"></span> Fitness
            Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link className="bg-base-200 rounded-[20px] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              href="#">
              <div
                className="w-12 h-12 rounded-xl bg-base-100 flex items-center justify-center mb-4 shadow-sm p-3.5">
                <BiDumbbell className="size-full rotate-45" />
              </div>
              <h4 className="text-xl text-[#1C2333] mb-2">1RM
                Strength</h4>
              <p className="text-sm text-slate-500 mb-6 grow">
                Accurately project your One Rep Max for major compound lifts
                safely and effectively.</p>
              <div
                className="flex items-center font-bold group-hover:text-primary transition-colors">
                Calculate Now
                <IoMdArrowForward className="ml-1 text-lg group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link className="bg-base-200 rounded-[20px] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              href="#">
              <div
                className="w-12 h-12 rounded-xl bg-base-100 flex items-center justify-center mb-4 shadow-sm p-3.5">
                <FaPersonRunning className="size-full" />
              </div>
              <h4 className="text-xl text-[#1C2333] mb-2">
                Calories Burned</h4>
              <p className="text-sm text-slate-500 mb-6 grow">
                Estimate energy expenditure across 50+ different sports,
                exercises, and daily activities.</p>
              <div
                className="flex items-center font-bold group-hover:text-primary transition-colors">
                Calculate Now
                <IoMdArrowForward className="ml-1 text-lg group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link className="bg-base-200 rounded-[20px] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              href="#">
              <div
                className="w-12 h-12 rounded-xl bg-base-100 flex items-center justify-center mb-4 shadow-sm p-3.5">
                <IoIosBody className="size-full" />
              </div>
              <h4 className="text-xl text-[#1C2333] mb-2">
                Body Fat %</h4>
              <p className="text-sm text-slate-500 mb-6 grow">
                Use U.S. Navy or skinfold methods to reliably estimate your
                current body composition.</p>
              <div
                className="flex items-center font-bold group-hover:text-primary transition-colors">
                Calculate Now
                <IoMdArrowForward className="ml-1 text-lg group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <button type="button" className="btn btn-primary btn-wide">Browse all calculators</button>
        </div>
      </section>

      {/* ==== Testimonials ================================================ */}
      <section className="w-full bg-base-200 py-24">
        <div className="max-w-12xl mx-auto px-4 lg:px-10">
          <h2 className="text-3xl text-[#1C2333] text-center mb-12">
            Trusted by High Performers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="bg-base-100 rounded-[20px] p-8 shadow-sm flex flex-col">
              <div className="flex gap-1 text-lime-400 mb-6">
                <IoMdStarOutline className="text-xl" />
                <IoMdStarOutline className="text-xl" />
                <IoMdStarOutline className="text-xl" />
                <IoMdStarOutline className="text-xl" />
                <IoMdStarOutline className="text-xl" />
              </div>
              <p
                className="text-md text-slate-500 italic mb-8 grow">
                "The TDEE precision here is unmatched. I use these tools
                exclusively to map out nutrition plans for my elite athletes."</p>
              <p className="font-bold text-[#1C2333]">— Dr. Sarah
                M., Performance Coach</p>
            </div >
            <div className="bg-base-100 rounded-[20px] p-8 shadow-sm flex flex-col">
              <div className="flex gap-1 text-lime-400 mb-6">
                <IoMdStarOutline className="text-xl" />
                <IoMdStarOutline className="text-xl" />
                <IoMdStarOutline className="text-xl" />
                <IoMdStarOutline className="text-xl" />
                <IoMdStarOutline className="text-xl" />
              </div >
              <p
                className="text-md text-slate-500 italic mb-8 grow">
                "Finally, a site that ditches the fluff and focuses entirely on
                accurate, clinically-backed mathematical models for fitness."</p>
              <p className="font-bold text-[#1C2333]">— Marcus
                T., Registered Dietitian</p>
            </div >
            <div className="bg-base-100 rounded-[20px] p-8 shadow-sm flex flex-col">
              <div className="flex gap-1 text-lime-400 mb-6">
                <IoMdStarOutline className="text-xl" />
                <IoMdStarOutline className="text-xl" />
                <IoMdStarOutline className="text-xl" />
                <IoMdStarOutline className="text-xl" />
                <IoMdStarOutline className="text-xl" />
              </div >
              <p
                className="text-md text-slate-500 italic mb-8 grow">
                "I broke through a 6-month plateau using the macro calculator. The
                algorithms are spot on for my specific body type."</p>
              <p className="font-bold text-[#1C2333]">— Elena J.,
                Powerlifter</p>
            </div >
          </div >
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
          <a className="text-[#466800] hover:text-primary transition-colors flex items-center space-x-1"
            href="#">
            <span>View All Articles</span>
            <IoMdArrowForward className="text-sm" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link className="group flex flex-col" href="#">
            <div className="h-56 w-full rounded-[20px] bg-cover bg-center overflow-hidden mb-6 shadow-sm"
              data-alt="Close up of a wooden bowl filled with high protein quinoa salad, bright clean natural lighting, minimalist editorial culinary aesthetic, fresh green herbs, soft muted background."
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsfe2M6j86Hc3Fpgyjm16NdaykutffUtvibalSFRHFMA7WpryiNGXQaK8mWXk7_8zN0LbXj7AwADErESfdQxNYyKTMeaBrJFFOnraH0ug3LvyeVJ_t3jnJlU9-S7vm96sqKfRl2G_Z4leIbwRgzhJq94NmV2cwGYxiv8DVHAqtlx-XH5XSb2w4ytc-sfu_cY4OzmYGMaUX7hp19W9LWUL_lUI5zWY4uEQjcEu6BSw7tp-Kr2YlTvL7JHmCBcG6Hr8zdapz_6iVreY')" }}>
              <div
                className="w-full h-full bg-text-primary/10 group-hover:bg-transparent transition-colors duration-300">
              </div>
            </div>
            <span
              className="bg-[#F4FBE9] text-[#1C2333] font-bold px-3 py-1.5 rounded-full w-fit mb-3">Nutrition</span>
            <h3 className="text-lg text-[#1C2333] mb-2 group-hover:text-primary transition-colors">The Truth About Protein Synthesis</h3>
            <p className="text-sm text-slate-500 mb-4 grow">Discover how timing and amino acid profiles actually impact muscle hypertrophy according to recent clinical studies.</p>
            <span
              className="font-bold text-[#1C2333] flex items-center group-hover:text-primary transition-colors">Read
              More
              <IoMdArrowForward className="text-sm" />
            </span>
          </Link>
          <Link className="group flex flex-col" href="#">
            <div className="h-56 w-full rounded-[20px] bg-cover bg-center overflow-hidden mb-6 shadow-sm"
              data-alt="Detail shot of heavy Olympic barbell plates loaded onto a bar in a bright, modern, minimalist gym with stark white walls and clean lines. Highly professional fitness environment."
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcYP-tbrOY7ANulIAJU5UmvQRcR-SKtSUTjzXCEy-123-VMlqdt56xkAMyxsYNw-i5f4aD3D_pl8dwKiTecSslp3gU1gOGp0xavwImyKMHeRN4DYWqF-AyDzjmxsm8gIF4t9NlGr4yt6ZpsIKD9jIEDxlfM-426bE-6jywZWWsP69_UEEp4v5qohpVlkc5rPUhiX7Y42M3IarcyD76MMXh9aNOzmvClxCBCUTt3HGJHmeAL5qliH4sRnvTuNc2zEqLpO8cOX6LjN8')" }}>
              <div
                className="w-full h-full bg-text-primary/10 group-hover:bg-transparent transition-colors duration-300">
              </div>
            </div>
            <span
              className="bg-[#F4FBE9] text-[#1C2333] font-bold px-3 py-1.5 rounded-full w-fit mb-3">Strength</span>
            <h3
              className="text-lg text-[#1C2333] mb-2 group-hover:text-primary transition-colors">
              Optimizing Your 1RM Testing Protocol</h3>
            <p className="text-sm text-slate-500 mb-4 grow">A
              step-by-step guide to safely preparing your central nervous system for
              maximum output during strength testing.</p>
            <span
              className="font-bold text-[#1C2333] flex items-center group-hover:text-primary transition-colors">Read
              More
              <IoMdArrowForward className="text-sm" />
            </span>
          </Link>
          <Link className="group flex flex-col" href="#">
            <div className="h-56 w-full rounded-[20px] bg-cover bg-center overflow-hidden mb-6 shadow-sm"
              data-alt="Close up on a smartwatch displaying metabolic rate and heart data on a wrist, sharp focus, medical grade lighting, professional fitness tracking aesthetic in soft focus surroundings."
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDERkCuYWKedrg-7M0g9G26655xEL4CLkuOJ5sNLIEWBUOT-SOC4lafqtKZs49RmtAKg6krfMKqEmSGbRa_1cD4pngPfUf40K--TPngQR5VdN82_z1Ix5olgZXihQfm6CLNzzMarfgUi-kpV4mgz806K-LQq5HBV6h_15GrefhWia7Oiu79OdkGu3ljNYUYIt9nQLsk3hhmm-RARckEeuP0iWH1BW36e2tfeJCFy82eIs-1A-Ki3RSHIBIwHix4JqHB0lxHhykR3j4')" }}>
              <div
                className="w-full h-full bg-text-primary/10 group-hover:bg-transparent transition-colors duration-300">
              </div>
            </div>
            <span
              className="bg-[#F4FBE9] text-[#1C2333] font-bold px-3 py-1.5 rounded-full w-fit mb-3">Metabolism</span>
            <h3
              className="text-lg text-[#1C2333] mb-2 group-hover:text-primary transition-colors">
              Understanding Adaptive Thermogenesis</h3>
            <p className="text-sm text-slate-500 mb-4 grow">Why
              your metabolic rate slows during a diet and how to adjust your macros to
              sustainably break through plateaus.</p>
            <span
              className="font-bold text-[#1C2333] flex items-center group-hover:text-primary transition-colors">Read
              More
              <IoMdArrowForward className="text-sm" />
            </span>
          </Link>
        </div>
      </section>

      {/* ==== Pre-Footer CTA ================================================ */}
      <section className="w-full pb-24 max-w-12xl mx-auto px-4 lg:px-10">
        <div
          className="bg-base-200 rounded-[20px] p-12 md:p-20 text-center flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px]">
          </div>
          <div
            className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px]">
          </div>
          <div className="relative z-10 flex flex-col items-center max-w-2xl">
            <h2
              className="text-2xl text-[#1C2333] mb-4 tracking-tight">
              Have a Question or Need a Custom Tool?</h2>
            <p className="text-slate-600 mb-8">
              Our team of clinical experts and data scientists is here to help you
              navigate your fitness journey with absolute precision.
            </p>
            <button
              className="bg-[#1C2333] text-base-100 h-12 px-8 rounded-full hover:bg-slate-500 transition-colors shadow-md flex items-center gap-2">
              Contact Us
                <LuMail className="text-[20px]" />
            </button>
          </div>
        </div>
      </section>

    </main >
  );
}
