import { ShieldAlert, Contact, User, Store, Wallet } from "lucide-react";
import { NavigationItem } from "../types/navigation.types";

export const riskComplianceItems: NavigationItem[] = [
  {
    title: "Risk & Collections",
    icon: ShieldAlert,
    roles: ["admin"],
    children: [
      {
        title: "Risk Dashboard",
        href: "/risk-collections/dashboard",
        roles: ["admin"],
        disabled: true,
      },
      {
        title: "Automated Risk Alerts",
        href: "/risk-collections/alerts",
        roles: ["admin"],
        disabled: true,
      },
      {
        title: "Collection Queue",
        href: "/risk-collections/queue",
        roles: ["admin"],
        disabled: true,
      },
      {
        title: "Promise-to-Pay (PTP)",
        href: "/risk-collections/ptp",
        roles: ["admin"],
        disabled: true,
      },
      {
        title: "Write-Offs",
        href: "/risk-collections/write-offs",
        roles: ["admin"],
        disabled: true,
      },
    ],
  },
  {
    title: "Compliance & KYC",
    icon: Contact,
    roles: ["admin", "employee"],
    children: [
      {
        title: "KYC Verification",
        href: "/compliance-kyc/verification",
        roles: ["admin", "employee"],
        disabled: true,
      },
      {
        title: "Pending KYC",
        href: "/compliance-kyc/pending",
        roles: ["admin", "employee"],
        disabled: true,
      },
      {
        title: "KYC Rejected",
        href: "/compliance-kyc/rejected",
        roles: ["admin", "employee"],
        disabled: true,
      },
      {
        title: "Audit Logs",
        href: "/compliance-kyc/audit-logs",
        roles: ["admin", "employee"],
        disabled: true,
      },
    ],
  },
  {
    title: "Borrowers",
    icon: User,
    roles: ["admin", "employee"],
    children: [
      {
        title: "All Borrowers",
        href: "/borrowers/all",
        roles: ["admin", "employee"],
        disabled: true,
      },
      {
        title: "Borrower Profile",
        href: "/borrowers/profile",
        roles: ["admin", "employee"],
        disabled: true,
      },
      {
        title: "Credit History",
        href: "/borrowers/credit-history",
        roles: ["admin", "employee"],
        disabled: true,
      },
      {
        title: "Communication Logs",
        href: "/borrowers/communications",
        roles: ["admin", "employee"],
        disabled: true,
      },
    ],
  },
  {
    title: "Merchants / Partners",
    icon: Store,
    roles: ["admin"],
    children: [
      {
        title: "All Merchants",
        href: "/merchants-partners/all",
        roles: ["admin"],
        disabled: true,
      },
      {
        title: "Partner Performance",
        href: "/merchants-partners/performance",
        roles: ["admin"],
        disabled: true,
      },
      {
        title: "Commission Reports",
        href: "/merchants-partners/commissions",
        roles: ["admin"],
        disabled: true,
      },
    ],
  },
  {
    title: "Finance",
    icon: Wallet,
    roles: ["admin", "employee"],
    children: [
      {
        title: "Payouts & Settlements",
        href: "/finance/payouts",
        roles: ["admin", "employee"],
        disabled: true,
      },
      {
        title: "Disbursement Logs",
        href: "/finance/disbursements",
        roles: ["admin", "employee"],
        disabled: true,
      },
      {
        title: "Fees & Charges",
        href: "/finance/fees-charges",
        roles: ["admin", "employee"],
        disabled: true,
      },
    ],
  },
];
