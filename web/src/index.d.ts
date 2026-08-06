/* ============ PUBLIC WEBSITE ============ */

// Button 
declare interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    ariaLabel?: string;
    variant?: "primary" | "secondary" | "tertiary" | "danger" | "ghost" | "icon";
    size?: "xs" | "sm" | "md" | "lg" | "fit";
    onClick?: () => void;
}

// Nav Link
declare interface NavLinkProps {
    id: string;
    title: string;
    href: string;
    children?: NavLinkProps[];
}

/* ============ ADMIN DASHBOARD ============ */

declare interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    ariaLabel?: string;
    variant?: "primary" | "secondary" | "tertiary" | "danger" | "ghost" | "icon";
    size?: "xs" | "sm" | "md" | "lg" | "fit";
    onClick?: () => void;
}

// Sidebar Nav Items 
declare interface NavItem {
    name: string;
    path: string;
    icon: React.ElementType;
    badge?: number;
}

// Dasbhoard Card
declare interface DasbhoardCardProps {
    bgColor?: string;
    label?: string;
    value?: string;
    accent?: string;
}

// Stat Card 
declare interface StatCardProps {
    label: string;
    value: string;
    change: string;
    isPositive: boolean;
    period: string;
    icon: React.ElementType;
    iconBg: string;
    iconColor: string;
}

// Recent Check-In 
declare interface RecentCheckIn {
    id: string;
    name: string;
    time: string;
    avatar: string;
}

// Expiring Membership
declare interface ExpiringMembership {
    id: string;
    name: string;
    plan: string;
    expiryDate: string;
    daysLeft: number;
    avatar: string;
}

// Recent Payment
declare interface RecentPayment {
    id: string;
    name: string;
    plan: string;
    amount: string;
    date: string;
    status: string;
}

// Popular Class
declare interface PopularClass {
    id: string;
    title: string;
    schedule: string;
    enrolled: number;
    capacity: number;
    icon: React.ElementType;
    iconBg: string;
}

// Member Category
declare interface MemberCategory {
    name: string;
    count: number;
    percentage: number;
    color: string;
    dotBg: string;
}

// Badge
declare interface BadgeProps {
    label: string;
    variant?: "success" | "warning" | "danger" | "info";
}

// Label
declare interface LabelProps {
    labelFor: string;
    label: string;
}

// Input
declare interface InputProps {
    type: string;
    placeholder: string;
    id: string;
    value?: number | string;
    classes?: string;
    required?: boolean;
    readonly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// File Input
declare interface FileInputProps {
    id: string;
    required?: boolean;
    multiple?: boolean;
    accept?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filename?: string | null;
}

// Modal
declare interface ModalProps {
    show: boolean;
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    onClose: () => void;
}

// Data Point
declare interface DataPoint {
    date: string;
    fullDate: string;
    value: number;
    displayValue: string;
}

// Membership Card
declare interface MembershipCardProps {
    name: string;
    price: string;
    period?: string;
    description?: string;
    features: string[];
    popular?: boolean;
    buttonText?: string;
    onSelect?: () => void;
}

// Trainer Card
declare interface TrainerCardProps {
    name: string;
    role: string;
    image: string;
    specialties: string[];
    bio?: string;
    socials?: {
        instagram?: string;
        twitter?: string;
        linkedin?: string;
    };
}

// FAQs
declare interface FAQProps {
    question: string;
    answer: string;
}