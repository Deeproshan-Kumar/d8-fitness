import { variantClass } from "../../../constants/dashboard";


const Badge: React.FC<BadgeProps> = ({ label, variant = 'success' }) => {
    return (
        <span className={`inline-flex items-center rounded-full ${variantClass[variant]} text-xs font-semibold px-2.5 py-0.5`}>
            {label}
        </span>
    )
}

export default Badge;