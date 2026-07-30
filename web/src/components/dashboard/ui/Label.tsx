const Label: React.FC<LabelProps> = ({ labelFor, label }) => {
    return (
        <label htmlFor={labelFor} className="block text-xs font-medium tracking-wide text-quaternary mb-1.5">{label}</label>
    )
}

export default Label;