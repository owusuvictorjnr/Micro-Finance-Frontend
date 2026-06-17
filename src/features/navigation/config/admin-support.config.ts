import { Sparkles, BarChart3, Puzzle, UserCog, HelpCircle } from "lucide-react";
import { NavigationItem } from "../types/navigation.types";

export const adminSupportItems: NavigationItem[] = [
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
];
