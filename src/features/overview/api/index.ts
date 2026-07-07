import { RecentApplication } from "../types/overview.types";

export const fetchOverviewStats = async () => {
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

export const fetchRecentApplications = async (): Promise<RecentApplication[]> => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return [
    {
      id: "LN-2024-8847",
      borrower: "Sarah Johnson",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
      amount: "GH₵15,000",
      term: "24 months",
      type: "PERSONAL",
      aiScore: 780,
      riskLevel: "Low",
      status: "PENDING",
    },
    {
      id: "LN-2024-8846",
      borrower: "Michael Chen",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
      amount: "GH₵8,500",
      term: "12 months",
      type: "BNPL",
      aiScore: 820,
      riskLevel: "Low",
      status: "APPROVED",
    },
    {
      id: "LN-2024-8845",
      borrower: "Emily Davis",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
      amount: "GH₵25,000",
      term: "36 months",
      type: "BUSINESS",
      aiScore: 680,
      riskLevel: "Medium",
      status: "UNDER REVIEW",
    },
    {
      id: "LN-2024-8844",
      borrower: "James Wilson",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
      amount: "GH₵5,000",
      term: "6 months",
      type: "BNPL",
      aiScore: 580,
      riskLevel: "High",
      status: "REJECTED",
    },
    {
      id: "LN-2024-8843",
      borrower: "Sarah Johnson",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
      amount: "GH₵15,000",
      term: "24 months",
      type: "PERSONAL",
      aiScore: 780,
      riskLevel: "Low",
      status: "PENDING",
    },
    {
      id: "LN-2024-8842",
      borrower: "Michael Chen",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
      amount: "GH₵8,500",
      term: "12 months",
      type: "BNPL",
      aiScore: 820,
      riskLevel: "Low",
      status: "APPROVED",
    },
    {
      id: "LN-2024-8841",
      borrower: "Emily Davis",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
      amount: "GH₵25,000",
      term: "36 months",
      type: "BUSINESS",
      aiScore: 680,
      riskLevel: "Medium",
      status: "UNDER REVIEW",
    },
  ];
};

export const approveApplicationApi = async (id: string): Promise<{ success: boolean; id: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { success: true, id };
};
