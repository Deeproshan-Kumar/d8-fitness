// Sidebar Nav Items 
declare interface NavItem {
    name: string;
    path: string;
    icon: React.ElementType;
    badge?: number;
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