import Button from "./Button";
import { Image } from 'lucide-react';

export const Input: React.FC<InputProps> = ({ type, placeholder, id, value, classes, required, readonly, onChange }) => {
    const inputClasses = `input-border h-9 w-full bg-surface-3/60 text-xs text-body font-normal rounded-sm outline-none p-2 transition-colors duration-200 placeholder:text-xs placeholder:font-normal placeholder:text-faint hover:border-border-strong/80 focus:border-primary focus:bg-surface-3 focus:ring-2 focus:ring-primary/25 read-only:opacity-70 ${classes}`;
    return (
        <input type={type} placeholder={placeholder} id={id} value={value} className={inputClasses} required={required} readOnly={readonly} onChange={onChange} />
    )
}

export const FileInput: React.FC<FileInputProps> = ({
    id,
    required = false,
    multiple = false,
    accept = "image/*",
    filename,
    onChange,
}) => {
    return (
        <>
            <label
                htmlFor={id}
                className="group h-auto flex flex-col items-center justify-center w-full border input-border border-dashed rounded-sm bg-surface-3/40 text-center p-4 cursor-pointer transition-colors duration-200 hover:border-primary/60 hover:bg-primary-softer"
            >
                <Image className="text-quaternary transition-colors duration-200 mb-2 group-hover:text-primary" size={28} />
                <p className="text-sm font-semibold text-heading mb-1">Choose a Profile Picture, or drag &amp; drop here.</p>
                <p className="text-xs text-faint font-light mb-1">JPEG, PNG, JPG, or SVG</p>
                <Button variant="ghost" size="xs" className="pointer-events-none">Browse File</Button>
            </label>

            <span className="text-xs text-faint">{filename || "No file choosen"}</span>

            <input
                type="file"
                id={id}
                required={required}
                hidden
                multiple={multiple}
                accept={accept}
                onChange={onChange}
            />
        </>
    );
};
