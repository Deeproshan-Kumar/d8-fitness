import { TrainerCard } from "../../ui";

interface TrainerData {
    name: string;
    role: string;
    image: string;
    specialties: string[];
    bio: string;
    socials: {
        instagram: string;
        twitter: string;
        linkedin: string;
    };
}

const Trainers: React.FC = () => {
    const trainers: TrainerData[] = [
        {
            name: "Marcus Vance",
            role: "Head Strength Coach",
            image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600",
            specialties: ["Powerlifting", "Strength Conditioning", "Olympic Lifting"],
            bio: "Former competitive powerlifter with 10+ years of coaching experience helping clients build raw strength and durability.",
            socials: {
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                linkedin: "https://linkedin.com",
            },
        },
        {
            name: "Sarah Jenkins",
            role: "HIIT & Pilates Lead",
            image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600",
            specialties: ["Pilates", "High-Intensity Interval Training", "Fat Loss"],
            bio: "Specializes in high-energy metabolic training and core alignment to help you burn fat and build lean muscle.",
            socials: {
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                linkedin: "https://linkedin.com",
            },
        },
        {
            name: "Elena Rostova",
            role: "Yoga & Mobility Specialist",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
            specialties: ["Vinyasa Yoga", "Mobility Drills", "Posture Correction"],
            bio: "Focuses on mindful movement, breathwork, and joint stability to improve overall athletic performance and recovery.",
            socials: {
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                linkedin: "https://linkedin.com",
            },
        },
    ];

    return (
        <section className="section trainer bg-canvas" id="trainers">
            <div className="container">
                <div className="text-center mb-10">
                    <p className="font-semibold text-primary-hover uppercase tracking-wider mb-2">Expert Team</p>
                    <h2>Meet Our Trainers</h2>
                    <p className="text-quaternary max-w-lg mx-auto mt-2">
                        Train with certified industry professionals dedicated to helping you unlock your ultimate physical potential.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {trainers.map((trainer, index) => (
                        <div key={index}>
                            <TrainerCard
                                name={trainer.name}
                                role={trainer.role}
                                image={trainer.image}
                                specialties={trainer.specialties}
                                bio={trainer.bio}
                                socials={trainer.socials}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;