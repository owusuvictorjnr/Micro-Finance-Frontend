import {
  LayoutGrid,
  Sparkles,
  FileText,
  Layers,
  CreditCard,
  CalendarCheck,
  ShieldAlert,
  Contact,
  User,
  Store,
  Wallet,
  BarChart3,
  Puzzle,
  UserCog,
  HelpCircle,
} from "lucide-react";
import { NavigationGroup } from "../types/navigation.types";

export const navigationConfig: NavigationGroup[] = [
  {
    items: [
      {
        title: "Dashboard",
        icon: LayoutGrid,
        roles: ["admin", "employee"],
        children: [
          {
            title: "Overview",
            href: "/",
            roles: ["admin", "employee"],
          },
          {
            title: "Key Metrics",
            href: "/dashboard/metrics",
            roles: ["admin", "employee"],
          
            disabled: true,
          },
          {
            title: "Today's Activity",
            href: "/dashboard/activity",
            roles: ["admin", "employee"],
          
            disabled: true,
          },
        ],
      },
      {
        title: "AI Insights",
        icon: Sparkles,
        roles: ["admin"],
        children: [
          {
            title: "AI Credit Scoring",
            href: "/ai-insights/credit-scoring",
            roles: ["admin"],
          
            disabled: true,
          },
          {
            title: "Risk Alerts & Anomalies",
            href: "/ai-insights/risk-alerts",
            roles: ["admin"],
          
            disabled: true,
          },
          {
            title: "Churn & Default Prediction",
            href: "/ai-insights/churn-prediction",
            roles: ["admin"],
          
            disabled: true,
          },
          {
            title: "Smart Recommendations",
            href: "/ai-insights/smart-recommendations",
            roles: ["admin"],
          
            disabled: true,
          },
        ],
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
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
      {
        title: "Reports",
        icon: BarChart3,
        roles: ["admin", "employee"],
        children: [
          {
            title: "Portfolio Summary",
            href: "/reports/portfolio",
            roles: ["admin", "employee"],
          
            disabled: true,
          },
          {
            title: "EMI Breakdown",
            href: "/reports/emi-breakdown",
            roles: ["admin", "employee"],
          
            disabled: true,
          },
          {
            title: "Aging Report",
            href: "/reports/aging",
            roles: ["admin", "employee"],
          
            disabled: true,
          },
          {
            title: "Revenue & Profitability",
            href: "/reports/revenue-profitability",
            roles: ["admin", "employee"],
          
            disabled: true,
          },
          {
            title: "Export CSV / PDF",
            href: "/reports/export",
            roles: ["admin", "employee"],
          
            disabled: true,
          },
        ],
      },
      {
        title: "Integrations & API",
        icon: Puzzle,
        roles: ["admin"],
        children: [
          {
            title: "Payment Gateways",
            href: "/integrations/payment-gateways",
            roles: ["admin"],
          
            disabled: true,
          },
          {
            title: "Scoring APIs",
            href: "/integrations/scoring-apis",
            roles: ["admin"],
          
            disabled: true,
          },
          {
            title: "Webhooks",
            href: "/integrations/webhooks",
            roles: ["admin"],
          
            disabled: true,
          },
        ],
      },
      {
        title: "User Management",
        icon: UserCog,
        roles: ["admin"],
        children: [
          {
            title: "All Users",
            href: "/users/all",
            roles: ["admin"],
          
            disabled: true,
          },
          {
            title: "Roles & Permissions",
            href: "/users/roles",
            roles: ["admin"],
          
            disabled: true,
          },
          {
            title: "Teams",
            href: "/users/teams",
            roles: ["admin"],
          
            disabled: true,
          },
        ],
      },
      {
        title: "Support & Help",
        icon: HelpCircle,
        roles: ["admin", "employee"],
        children: [
          {
            title: "Help Center",
            href: "/support/help-center",
            roles: ["admin", "employee"],
          
            disabled: true,
          },
          {
            title: "Documentation",
            href: "/support/documentation",
            roles: ["admin", "employee"],
          
            disabled: true,
          },
          {
            title: "Contact Support",
            href: "/support/contact",
            roles: ["admin", "employee"],
          
            disabled: true,
          },
        ],
      },
    ],
  },
];
