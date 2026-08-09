import { AppIcons } from "@/lib/icons"
import Image from "next/image"
import Link from "next/link"
import { IconType } from "react-icons"
import { IoIosArrowRoundForward, IoMdArrowForward } from "react-icons/io"
import { LuFlaskConical } from "react-icons/lu"
import { MdOutlineFactCheck } from "react-icons/md"
import { TbActivityHeartbeat, TbLungs } from "react-icons/tb"
import { VscVerified } from "react-icons/vsc"
import { titleCase } from "title-case"

const DynamicHero = ({ title, description, image }: { title: string, description: string, image: string }) => {
    return (
        <section className="relative hero bg-base-200 min-h-[50vh]" style={{
            backgroundImage:
                `url(${image})`,
        }}>
            <div className="hero-content text-center">
                <div className="max-w-3xl w-full space-y-5">
                    <div className="badge text-lime-800 bg-lime-50 font-bold shadow">
                        <LuFlaskConical />
                        Evidence-Based Methodology
                    </div>
                    <h1 className="text-5xl text-white font-bold font-times">{titleCase(title.split("-").join(" "))}</h1>
                    <p className="text-white">
                        {description}
                    </p>
                    <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-5 text-slate-300 ">
                        <div className="flex items-center gap-1">
                            <VscVerified />
                            <span className="tracking-widest text-xs font-medium">NIH GUIDLINES</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <MdOutlineFactCheck />
                            <span className="tracking-widest text-xs font-medium">WHO STANDARDS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const DynamicCalculatorHub = ({ calculators }: { calculators: Calculator[] }) => {
    return (
        <section className="bg-base-100 p-10">
            <div className="mx-auto">
                <div className="flex items-center gap-3">
                    <span className="w-2 h-14 bg-primary rounded-full block"></span>
                    <div className="space-y-2">
                        <h2 className="text-2xl text-base-content mb-px" > Precision Calculators</h2>
                        <p className="text-sm text-slate-600">Clinical-grade tools to quantify your baseline metrics.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
                    {calculators.slice(-3).map(calc => {
                        const Icon = AppIcons[calc.icon];
                        return (
                            <Link className="bg-base-200 rounded-[20px] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                                href={calc.slug} key={calc.id}>
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
        </section>
    )
}

const StaticTopic = () => {
    return (
        <section className="w-full p-16 bg-base-100">
            <div className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    <div className="flex flex-col gap-4">
                        <div className="badge badge-sm badge-primary badge-outline uppercase tracking-wider">
                            Metabolic Science
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-base-content">
                            The Caloric Deficit Myth
                        </h3>
                        <p className="text-slate-600">
                            While thermodynamics dictates that weight loss requires an energy
                            deficit, all calories do not elicit identical physiological
                            responses. Protein requires significantly more energy to metabolize
                            (thermic effect of food) and preserves lean muscle mass during
                            reduction phases, which in turn sustains basal metabolic rate.
                        </p>
                        <button className="btn btn-primary w-fit">Read Clinical Review</button>
                    </div>

                    <div className="relative">
                        <div className="card bg-base-200 shadow-sm overflow-hidden">
                            <div className="h-96">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1HK9FRXcVsP61t_fK0rmvu08fyvSOeTtQjjDZzW3NWmKWO4bLDvAFwqztAgJPF6VHERJTEg0PdqBjD2emjo5VrWV5e-TnWhqsDFt9BMLNuKq5ma_oQjYw2JKjUETJMkXvPsojFclXTMcVfVkmcAqof7n8WouEXOs1gI2NUQ7rtYrm6CVGb4ChXavInV1amup1wAcsFpPhlqF0gbJBTl7xa0-c0Ch84h_Qx9inFH0B1RlAxIRYdcDy"
                                    alt="Banner Background"
                                    fill
                                    className="object-cover brightness-95"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <div className="card bg-base-100/90 backdrop-blur shadow-sm">
                                <div className="card-body p-4 gap-3">
                                    <div className="font-semibold text-sm text-base-content">
                                        Thermic Effect (TEF)
                                    </div>
                                    <div className="flex items-end gap-2">
                                        <div className="w-8 h-12 bg-primary rounded-t-sm" />
                                        <div className="w-8 h-6 bg-base-300 rounded-t-sm" />
                                        <div className="w-8 h-4 bg-base-300 rounded-t-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { DynamicHero, DynamicCalculatorHub, StaticTopic }
