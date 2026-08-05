import { Link } from "react-router";
import { Users, Award, Dumbbell, Activity, ChevronDown, ChevronRight, Gem, MoveRight } from "lucide-react";
import { Button } from "../../ui";
import StatCard from "./StatCard";

interface StatProps {
    icon: React.ElementType;
    value: string;
    label: string;
}

const Hero: React.FC = () => {
    const stats: StatProps[] = [
        { icon: Users, value: "500+", label: "Active Members" },
        { icon: Award, value: "15+", label: "Certified Trainers" },
        { icon: Activity, value: "100%", label: "Personalized Plans" },
        { icon: Dumbbell, value: "24/7", label: "Gym Access" },
    ];

    return (
        <section className="hero" id="hero">
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-canvas/80 via-canvas/60 to-canvas z-0" />

            {/* Content Container */}
            <div className="container relative z-1">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Main Text Content */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left gap-4 animate-float">
                        {/* Headline */}
                        <h1>
                            Transform Your <span className="gradient-text">Body</span>. <br />
                            Elevate Your <span className="gradient-text">Life</span>.
                        </h1>

                        {/* Description */}
                        <p className="max-w-xl">
                            Train smarter, get stronger, and achieve your fitness goals with expert coaching,
                            state-of-the-art equipment, and a high-energy community that keeps you motivated every step of the way.
                        </p>

                        {/* CTAs */}
                        <div className="flex gap-4">
                            <Button variant="primary" size="lg">
                                <Link to="/membership">Get Started <Gem size={16} strokeWidth={2} className="inline-block ml-0.5" /></Link>
                            </Button>
                            <Button variant="secondary" size="lg">
                                <Link to="/contact">Book a Free Trial <MoveRight size={16} strokeWidth={2} className="inline-block ml-0.5" /></Link>
                            </Button>
                        </div>
                    </div>

                    {/* Side Stats Grid */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                        {stats.map((stat, idx) => (
                            <StatCard
                                key={idx}
                                icon={stat.icon}
                                value={stat.value}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="flex flex-col items-center gap-2 text-faint animate-scroll-bounce absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <span className="text-xs tracking-widest uppercase font-light">Scroll Down</span>
                <Link to="#about" className="rounded-full border border-on-primary/10 bg-on-primary/5 p-2 hover:border-primary/50 transition-colors">
                    <ChevronDown size={16} className="text-body" />
                </Link>
            </div>
        </section>
    )
}

export default Hero;