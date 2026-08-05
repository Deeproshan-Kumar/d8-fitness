interface StatCardProps {
    icon: React.ElementType;
    value: string;
    label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => {
    return (
        <article
            className="glass-card flex flex-col items-start gap-2 p-6 hover:border-primary/45 transition-all duration-300 hover:-translate-y-1"
        >
            <div className="bg-primary-soft p-4 rounded-sm text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <Icon size={32} />
            </div>

            <div className="text-2xl font-bold text-heading font-heading">
                {value}
            </div>
            <div className="text-xs text-quaternary font-light tracking-wide">
                {label}
            </div>
        </article>
    );
};

export default StatCard;