import { RecentApplication } from "../types/overview.types";
import { DEFAULT_AVATARS } from "../constants/avatars";
import { approveApplicationSchema } from "../schemas/overview.schema";

// Clearly isolate mock functions for development and demo purposes.
// Once production backend endpoints are ready, replace these with real fetch/axios API calls.

export const mockFetchOverviewStats = async () => {
  if (process.env.NODE_ENV === "production") {
    console.warn("Using mockFetchOverviewStats in production environment.");
  }
  await new Promise((resolve) => setTimeout(resolve, 200));
  return {
    kpis: {
      totalPortfolio: 8400000,
      activeLoans: 1240,
      bnplVolume: 840000,
      collectionRate: 98.4,
    },
    indicators: {
      expectedEmis: 84300,
      activeBorrowers: 1420,
      collectionsToday: 42100,
      overdueLoans: 8,
    },
  };
};

export const mockFetchRecentApplications = async (): Promise<RecentApplication[]> => {
  if (process.env.NODE_ENV === "production") {
    console.warn("Using mockFetchRecentApplications in production environment.");
  }
  await new Promise((resolve) => setTimeout(resolve, 200));
  return [
    {
      id: "LN-2024-8847",
      borrower: "Sarah Johnson",
      avatarUrl: DEFAULT_AVATARS.sarah,
      amount: 15000,
      term: "24 months",
      type: "PERSONAL",
      aiScore: 780,
      riskLevel: "Low",
      status: "PENDING",
    },
    {
      id: "LN-2024-8846",
      borrower: "Michael Chen",
      avatarUrl: DEFAULT_AVATARS.michael,
      amount: 8500,
      term: "12 months",
      type: "BNPL",
      aiScore: 820,
      riskLevel: "Low",
      status: "APPROVED",
    },
    {
      id: "LN-2024-8845",
      borrower: "Emily Davis",
      avatarUrl: DEFAULT_AVATARS.emily,
      amount: 25000,
      term: "36 months",
      type: "BUSINESS",
      aiScore: 680,
      riskLevel: "Medium",
      status: "UNDER REVIEW",
    },
    {
      id: "LN-2024-8844",
      borrower: "James Wilson",
      avatarUrl: DEFAULT_AVATARS.james,
      amount: 5000,
      term: "6 months",
      type: "BNPL",
      aiScore: 580,
      riskLevel: "High",
      status: "REJECTED",
    },
    {
      id: "LN-2024-8843",
      borrower: "Sarah Johnson",
      avatarUrl: DEFAULT_AVATARS.sarah,
      amount: 15000,
      term: "24 months",
      type: "PERSONAL",
      aiScore: 780,
      riskLevel: "Low",
      status: "PENDING",
    },
    {
      id: "LN-2024-8842",
      borrower: "Michael Chen",
      avatarUrl: DEFAULT_AVATARS.michael,
      amount: 8500,
      term: "12 months",
      type: "BNPL",
      aiScore: 820,
      riskLevel: "Low",
      status: "APPROVED",
    },
    {
      id: "LN-2024-8841",
      borrower: "Emily Davis",
      avatarUrl: DEFAULT_AVATARS.emily,
      amount: 25000,
      term: "36 months",
      type: "BUSINESS",
      aiScore: 680,
      riskLevel: "Medium",
      status: "UNDER REVIEW",
    },
  ];
};

export const mockApproveApplicationApi = async (id: string): Promise<{ success: boolean; id: string }> => {
  if (process.env.NODE_ENV === "production") {
    console.warn("Using mockApproveApplicationApi in production environment.");
  }
  const result = approveApplicationSchema.safeParse(id);
  if (!result.success) {
    throw new Error(result.error.issues[0]?.message || "Invalid application ID format");
  }
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { success: true, id };
};
