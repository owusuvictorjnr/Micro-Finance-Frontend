import { FileText, Layers, CreditCard, CalendarCheck } from "lucide-react";
import { NavigationItem } from "../types/navigation.types";

export const loanApplicationItem: NavigationItem = {
  title: "Loan Application",
  icon: FileText,
  roles: ["admin", "employee"],
  children: [
    {
      title: "All Applications",
      href: "/loans/applications",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "New Applications",
      href: "/loans/applications/new",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "Pending Applications",
      href: "/loans/applications/pending",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "Approved",
      href: "/loans/applications/approved",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "Rejected",
      href: "/loans/applications/rejected",
      roles: ["admin", "employee"],
      disabled: true,
    },
  ],
};

export const activeLoansItem: NavigationItem = {
  title: "Active Loans",
  icon: Layers,
  roles: ["admin", "employee"],
  children: [
    {
      title: "All Active Loans",
      href: "/loans/active",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "EMI Schedule",
      href: "/loans/emi-schedule",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "Overdue Loans",
      href: "/loans/overdue",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "Restructured Loans",
      href: "/loans/restructured",
      roles: ["admin", "employee"],
      disabled: true,
    },
  ],
};

export const bnplPlansItem: NavigationItem = {
  title: "BNPL Plans",
  icon: CreditCard,
  roles: ["admin", "employee"],
  children: [
    {
      title: "All BNPL Plans",
      href: "/bnpl/plans",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "Configure Installments",
      href: "/bnpl/configure",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "Merchants & Partners",
      href: "/bnpl/merchants",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "Plan Performance",
      href: "/bnpl/performance",
      roles: ["admin", "employee"],
      disabled: true,
    },
  ],
};

export const repaymentsItem: NavigationItem = {
  title: "Repayments",
  icon: CalendarCheck,
  roles: ["admin", "employee"],
  children: [
    {
      title: "Repayment Calendar",
      href: "/repayments/calendar",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "Upcoming EMIs",
      href: "/repayments/upcoming",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "Collected Today",
      href: "/repayments/today",
      roles: ["admin", "employee"],
      disabled: true,
    },
    {
      title: "Failed / Retries",
      href: "/repayments/failed",
      roles: ["admin", "employee"],
      disabled: true,
    },
  ],
};
