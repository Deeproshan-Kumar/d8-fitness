import React from "react";
import Button from "../Button";
import { Check } from "lucide-react";

const MembershipCard: React.FC<MembershipCardProps> = ({
    name,
    price,
    period = "month",
    description,
    features,
    popular = false,
    buttonText = "Choose Plan",
    onSelect,
}) => {
    return (
        <article
            className={`group relative flex flex-col h-full rounded-sm p-6 md:p-8 transition-all duration-300 ${
                popular
                    ? "bg-secondary border-2 border-primary shadow-[0_12px_40px_rgba(147, 51, 234, 0.25)]"
                    : "bg-secondary/40 border border-on-primary/10 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(147, 51, 234, 0.1)]"
            }`}
        >
            {popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-indigo-500 to-pink-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-on-primary shadow-md">
                    Most Popular
                </span>
            )}

            {/* Plan Header */}
            <div className="mb-6">
                <h3>{name}</h3>
                {description && (
                    <p className="mt-2">
                        {description}
                    </p>
                )}
                <div className="mt-5 flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight text-heading">
                        {price}
                    </span>
                    <span className="ml-2 text-sm text-faint font-medium">
                        / {period}
                    </span>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-on-primary/10 mb-6" />

            {/* Features List */}
            <ul className="flex-grow space-y-4 mb-8">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-body">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary-hover">
                            <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <Button
                variant={popular ? "primary" : "secondary"}
                className="w-full"
                onClick={onSelect}
            >
                {buttonText}
            </Button>
        </article>
    );
};

export default MembershipCard;