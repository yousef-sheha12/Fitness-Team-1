import {
  User,
  FileText,
  CalendarClock,
  Package,
  Activity,
  CreditCard,
  Receipt,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type MenuItem = {
  label: string;
  path: string;
  icon: LucideIcon;
};
export const menuItems: MenuItem[] = [
  {
    label: "Profile Overview",
    path: "/profile/ProfileOverview",
    icon: User,
  },
  {
    label: "Profile Header",
    path: "/profile/ProfileHeader",
    icon: User,
  },

  {
    label: "Profile Information",
    path: "/profile/PersonalInfoForm",
    icon: FileText,
  },
  {
    label: "Sessions",
    path: "/profile/UpcomingSessions",
    icon: CalendarClock,
  },
  {
    label: "My Packages",
    path: "/profile/MyPackages",
    icon: Package,
  },
  {
    label: "Progress & Activity",
    path: "/profile/ProgressActivity",
    icon: Activity,
  },
  {
    label: "Payment Methods",
    path: "/profile/PaymentMethods",
    icon: CreditCard,
  },
  {
    label: "Billing History",
    path: "/profile/BillingHistory",
    icon: Receipt,
  },
  {
    label: "Security & Password",
    path: "/profile/SecurityPassword",
    icon: ShieldCheck,
  },
];
