"use client"
import { useRouter } from "next/navigation"
import { LuMail } from "react-icons/lu"

const PreFooter = () => {
    const router = useRouter()
    return (
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
                        className="bg-[#1C2333] text-base-100 h-12 px-8 rounded-full hover:bg-slate-500 transition-colors shadow-md flex items-center gap-2 cursor-pointer"
                        onClick={() => router.push('/contact')}>
                        Contact Us
                        <LuMail className="text-[20px]" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PreFooter