import { MembershipCard } from "../../ui";

interface Plan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
}

const Memberships: React.FC = () => {
    const plans: Plan[] = [
        {
            name: "Basic",
            price: "$29",
            period: "month",
            description: "Essential access for individual workout sessions and fitness enthusiasts.",
            features: [
                "Standard Gym floor access",
                "1 Free trainer consultation",
                "Locker room & shower access",
                "Free high-speed WiFi",
            ],
            popular: false,
        },
        {
            name: "Standard",
            price: "$59",
            period: "month",
            description: "The most popular plan, offering group classes and expert support.",
            features: [
                "24/7 Gym floor access",
                "Unlimited group classes",
                "4 Personal training sessions /mo",
                "Personalized nutrition advice",
                "Free dedicated locker",
            ],
            popular: true,
        },
        {
            name: "Elite",
            price: "$99",
            period: "month",
            description: "Comprehensive package for maximum results with premium perks.",
            features: [
                "All-hours Gym & Spa access",
                "Dedicated personal trainer",
                "Customized diet & meal plans",
                "Weekly massage & recovery room",
                "2 Guest passes per month",
            ],
            popular: false,
        },
    ];

    return (
        <section className="section membership bg-canvas" id="memberships">
            <div className="container">
                <div className="text-center mb-10">
                    <p className="font-semibold text-primary-hover uppercase tracking-wider mb-2">Pricing Plans</p>
                    <h2>Membership Plans</h2>
                    <p className="text-quaternary max-w-lg mx-auto mt-2">
                        Choose the plan that fits your lifestyle. No hidden fees. Cancel or pause anytime.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                    {plans.map((plan, index) => (
                        <div key={index}>
                            <MembershipCard
                                name={plan.name}
                                price={plan.price}
                                period={plan.period}
                                description={plan.description}
                                features={plan.features}
                                popular={plan.popular}
                                buttonText={plan.popular ? "Get Started" : "Choose Plan"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Memberships;