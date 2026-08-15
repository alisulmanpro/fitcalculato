import { FC } from "react";

interface CalculatorHeroProps {
    title: string;
    image: string;
}

const CalculatorHero: FC<CalculatorHeroProps> = ({ title, image }) => {
    return (
        <div
            className="hero h-[40vh] sm:h-[50vh] md:h-[60vh]"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className="hero-overlay bg-black/50"></div>
            <div className="hero-content w-full justify-start px-6 sm:px-12 md:px-20 text-neutral-content">
                <div className="max-w-4xl">
                    <h1 className="mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-slate-100 tracking-wide leading-15">
                        {title}
                    </h1>
                    <p className="text-slate-300 text-sm sm:text-lg font-bold">
                            By FitCalculato
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CalculatorHero