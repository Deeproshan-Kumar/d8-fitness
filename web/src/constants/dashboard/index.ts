import {
    Flame,
    Activity,
    Zap,
    Heart,
} from "lucide-react";

import {
    LayoutDashboard,
    Users,
    CreditCard,
    ClipboardCheck,
    Dumbbell,
    CalendarDays,
    Utensils,
    DollarSign,
    Receipt,
    BarChart3,
    MessageSquare,
    Bell,
    Settings,
    UserCheck,
    FileCode2,
} from "lucide-react";

// Nav Links
export const navLinks: NavItem[] = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Members", path: "/dashboard/members", icon: Users },
    { name: "Membership Plans", path: "/dashboard/memberships", icon: CreditCard },
    { name: "Attendance", path: "/dashboard/attendance", icon: ClipboardCheck },
    { name: "Workouts", path: "/dashboard/workouts", icon: Dumbbell },
    { name: "Trainers", path: "/dashboard/trainers", icon: Dumbbell },
    { name: "Classes", path: "/dashboard/classes", icon: CalendarDays },
    { name: "Diet Plans", path: "/dashboard/diet-plans", icon: Utensils },
    { name: "Payments", path: "/dashboard/payments", icon: DollarSign },
    { name: "Expenses", path: "/dashboard/expenses", icon: Receipt },
    { name: "Reports", path: "/dashboard/reports", icon: BarChart3 },
    { name: "Messages", path: "/dashboard/messages", icon: MessageSquare, badge: 3 },
    { name: "Notifications", path: "/dashboard/notifications", icon: Bell, badge: 6 },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
    { name: "Staff Management", path: "/dashboard/staff", icon: UserCheck },
    { name: "System Logs", path: "/dashboard/logs", icon: FileCode2 },
];

// Recent Check-ins
export const recentCheckIns: RecentCheckIn[] = [
    {
        id: "1",
        name: "James Anderson",
        time: "8:45 AM",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    {
        id: "2",
        name: "Sarah Wilson",
        time: "8:35 AM",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
        id: "3",
        name: "Michael Brown",
        time: "8:20 AM",
        avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    },
    {
        id: "4",
        name: "Emily Davis",
        time: "8:15 AM",
        avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    },
    {
        id: "5",
        name: "David Martinez",
        time: "8:05 AM",
        avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
];

// Expiring Memberships
export const expiringMemberships: ExpiringMembership[] = [
    {
        id: "1",
        name: "Alex Johnson",
        plan: "Premium Plan",
        expiryDate: "25 May 2024",
        daysLeft: 5,
        avatar:
            "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80",
    },
    {
        id: "2",
        name: "Lisa White",
        plan: "Standard Plan",
        expiryDate: "28 May 2024",
        daysLeft: 8,
        avatar:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    },
    {
        id: "3",
        name: "Robert Taylor",
        plan: "Basic Plan",
        expiryDate: "30 May 2024",
        daysLeft: 10,
        avatar:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
    },
    {
        id: "4",
        name: "Jessica Lee",
        plan: "Premium Plan",
        expiryDate: "02 Jun 2024",
        daysLeft: 13,
        avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    },
    {
        id: "5",
        name: "Daniel Harris",
        plan: "Standard Plan",
        expiryDate: "05 Jun 2024",
        daysLeft: 16,
        avatar:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    },
];

// Recent Payments
export const recentPayments: RecentPayment[] = [
    {
        id: "1",
        name: "James Anderson",
        plan: "Premium Plan",
        amount: "$120.00",
        date: "20 May 2024",
        status: "Paid",
    },
    {
        id: "2",
        name: "Maria Garcia",
        plan: "Standard Plan",
        amount: "$80.00",
        date: "20 May 2024",
        status: "Paid",
    },
    {
        id: "3",
        name: "Robert Brown",
        plan: "Personal Training",
        amount: "$150.00",
        date: "19 May 2024",
        status: "Paid",
    },
    {
        id: "4",
        name: "Emily Davis",
        plan: "Premium Plan",
        amount: "$120.00",
        date: "19 May 2024",
        status: "Paid",
    },
    {
        id: "5",
        name: "William Wilson",
        plan: "Standard Plan",
        amount: "$80.00",
        date: "18 May 2024",
        status: "Paid",
    },
];

// Popular Classes
export const popularClasses: PopularClass[] = [
    {
        id: "1",
        title: "Yoga",
        schedule: "Today 7:00 AM",
        enrolled: 25,
        capacity: 30,
        icon: Activity,
        iconBg: "bg-primary-soft text-primary",
    },
    {
        id: "2",
        title: "HIIT Training",
        schedule: "Today 6:00 PM",
        enrolled: 18,
        capacity: 25,
        icon: Flame,
        iconBg: "bg-blue-500/15 text-blue-400",
    },
    {
        id: "3",
        title: "Strength Training",
        schedule: "Today 8:00 AM",
        enrolled: 22,
        capacity: 30,
        icon: Dumbbell,
        iconBg: "bg-emerald-500/15 text-emerald-400",
    },
    {
        id: "4",
        title: "Zumba",
        schedule: "Today 5:00 PM",
        enrolled: 15,
        capacity: 20,
        icon: Zap,
        iconBg: "bg-amber-500/15 text-amber-400",
    },
    {
        id: "5",
        title: "Cardio Blast",
        schedule: "Today 7:00 PM",
        enrolled: 20,
        capacity: 25,
        icon: Heart,
        iconBg: "bg-rose-500/15 text-rose-400",
    },
];

// Badge Variant Class (use it in dashboard pages)
export const variantClass = {
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    danger: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
    info: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
};

// Member Category
export const categories: MemberCategory[] = [
    { name: "Active", count: 934, percentage: 75, color: "#22c55e", dotBg: "bg-emerald-500" },
    { name: "Inactive", count: 180, percentage: 14, color: "#eab308", dotBg: "bg-amber-500" },
    { name: "Expired", count: 132, percentage: 11, color: "#ef4444", dotBg: "bg-rose-500" },
];

// Weekly Data
export const weeklyData: DataPoint[] = [
    { date: "14 May", fullDate: "14 May 2024", value: 5200, displayValue: "$5,200" },
    { date: "15 May", fullDate: "15 May 2024", value: 12400, displayValue: "$12,400" },
    { date: "16 May", fullDate: "16 May 2024", value: 12800, displayValue: "$12,800" },
    { date: "17 May", fullDate: "17 May 2024", value: 18750, displayValue: "$18,750" },
    { date: "18 May", fullDate: "18 May 2024", value: 16200, displayValue: "$16,200" },
    { date: "19 May", fullDate: "19 May 2024", value: 18400, displayValue: "$18,400" },
    { date: "20 May", fullDate: "20 May 2024", value: 21500, displayValue: "$21,500" },
];