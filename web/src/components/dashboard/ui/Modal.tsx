import { X } from "lucide-react";
import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

// --- Sub-components ---
// --- Modal header ---
const ModalHeader: React.FC<{
    title?: string;
    onClose: () => void;
}> = ({ title, onClose }) => {
    return (
        <div className="flex justify-between items-center border-b border-border p-4">
            <h4>{title || "Modal Title"}</h4>
            <button
                type="button"
                className="focus-ring cursor-pointer rounded-md p-1 text-quaternary transition-colors duration-200 hover:bg-surface-3 hover:text-primary"
                onClick={onClose}
                aria-label="Close modal"
            >
                <X size={18} />
            </button>
        </div>
    );
};

// --- Modal body ---
const ModalBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="p-4">{children}</div>;
};

// --- Modal footer ---
const ModalFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="border-t border-border p-4">{children}</div>;
};

const Modal: React.FC<ModalProps> = ({ show, onClose, title, children, footer }) => {
    const handleEscape = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    // Lock body scroll & listen for Escape when open
    useEffect(() => {
        if (!show) return;

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleEscape);
        };
    }, [show, handleEscape]);

    if (!show) return null;

    const modalRoot = document.getElementById("modal-root");

    if (!modalRoot) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-canvas/80 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Panel */}
            <div className="relative z-10 w-full max-w-lg bg-surface-2 rounded-sm shadow-[0_1px_0_0_rgb(255_255_255/0.04)_inset,0_28px_60px_-24px_rgb(0_0_0/0.85)] border border-border-strong mx-4">
                <ModalHeader title={title} onClose={onClose} />
                <ModalBody>{children}</ModalBody>
                {footer && <ModalFooter>{footer}</ModalFooter>}
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;