interface BadgeProps {
    label: string;
    variant?: "success" | "warning" | "danger" | "info";
}

const Badge: React.FC<BadgeProps> = ({ label, variant = 'success' }) => {
    const variantClass = {
        success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
        warning: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
        danger: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
        info: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    };
    return (
        <span className={`inline-flex items-center rounded-full ${variantClass[variant]} text-xs font-semibold px-2.5 py-0.5`}>
            {label}
        </span>
    )
}

export default Badge;