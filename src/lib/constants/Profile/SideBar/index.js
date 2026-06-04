import {
  User,
  FileText,
  CalendarClock,
  Package,
  Activity,
  CreditCard,
  Receipt,
  ShieldCheck,
  Dumbbell,
} from "lucide-react";

export const menuItems = [
  {
    label: "Personal Info",
    path: "/profile/overview",
    icon: User,
  },
  {
    label: "Profile Information",
    path: "/profile/personal-info",
    icon: FileText,
  },
  {
    label: "Sessions",
    path: "/profile/sessions",
    icon: CalendarClock,
  },
  {
    label: "My Packages",
    path: "/profile/packages",
    icon: Package,
  },
  {
    label: "Progress & Activity",
    path: "/profile/progress",
    icon: Activity,
  },
  {
    label: "Workout History",
    path: "/profile/workout-history",
    icon: Dumbbell,
  },
  {
    label: "Payment Methods",
    path: "/profile/payment",
    icon: CreditCard,
  },
  {
    label: "Billing History",
    path: "/profile/billing",
    icon: Receipt,
  },
  {
    label: "Security & Password",
    path: "/profile/security",
    icon: ShieldCheck,
  },
];
