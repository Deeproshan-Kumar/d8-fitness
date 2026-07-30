interface DasbhoardCardProps {
    bgColor?: string;
    label?: string;
    value?: string;
    accent?: string;
}

export const DasbhoardCard = ({
    bgColor = 'bg-secondary',
    label = 'Total members',
    value = '0',
    accent = 'text-primary'
}: DasbhoardCardProps) => {
    return (
        <article className={`${bgColor} border border-border rounded-sm p-4 transition-colors duration-200 hover:border-primary/40`}>
            <div>
                <p className="text-xs text-quaternary font-semibold uppercase tracking-wide">{label}</p>
                <h4 className={`tabular-nums mt-1.5 ${accent}`}>{value}</h4>
            </div>
        </article>
    )
}
