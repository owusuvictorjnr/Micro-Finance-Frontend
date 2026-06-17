import { LayoutGrid } from "lucide-react";
import { NavigationGroup, NavigationItem } from "../types/navigation.types";
import {
  loanApplicationItem,
  activeLoansItem,
  bnplPlansItem,
  repaymentsItem,
} from "./loans-bnpl.config";
import {
  riskCollectionsItem,
  complianceKycItem,
  borrowersItem,
  merchantsPartnersItem,
  financeItem,
} from "./risk-compliance.config";
import {
  aiInsightsItem,
  reportsItem,
  integrationsApiItem,
  userManagementItem,
  supportHelpItem,
} from "./admin-support.config";

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
      aiInsightsItem,
      loanApplicationItem,
      activeLoansItem,
      bnplPlansItem,
      repaymentsItem,
      riskCollectionsItem,
      complianceKycItem,
      borrowersItem,
      merchantsPartnersItem,
      financeItem,
      reportsItem,
      integrationsApiItem,
      userManagementItem,
      supportHelpItem,
    ],
  },
];
