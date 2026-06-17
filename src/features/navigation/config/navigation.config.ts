import { LayoutGrid } from "lucide-react";
import { NavigationGroup, NavigationItem } from "../types/navigation.types";
import { loansBnplItems } from "./loans-bnpl.config";
import { riskComplianceItems } from "./risk-compliance.config";
import { adminSupportItems } from "./admin-support.config";

const findItem = (items: NavigationItem[], title: string): NavigationItem => {
  const item = items.find((i) => i.title === title);
  if (!item) {
    throw new Error(`Navigation item with title "${title}" not found in subconfigs`);
  }
  return item;
};

const dashboardItem: NavigationItem = {
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
};

export const navigationConfig: NavigationGroup[] = [
  {
    items: [
      dashboardItem,
      findItem(adminSupportItems, "AI Insights"),
      findItem(loansBnplItems, "Loan Application"),
      findItem(loansBnplItems, "Active Loans"),
      findItem(loansBnplItems, "BNPL Plans"),
      findItem(loansBnplItems, "Repayments"),
      findItem(riskComplianceItems, "Risk & Collections"),
      findItem(riskComplianceItems, "Compliance & KYC"),
      findItem(riskComplianceItems, "Borrowers"),
      findItem(riskComplianceItems, "Merchants / Partners"),
      findItem(riskComplianceItems, "Finance"),
      findItem(adminSupportItems, "Reports"),
      findItem(adminSupportItems, "Integrations & API"),
      findItem(adminSupportItems, "User Management"),
      findItem(adminSupportItems, "Support & Help"),
    ],
  },
];
