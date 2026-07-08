export type OverviewTab = "Overview" | "Analytics" | "Performance" | "AI Insights";

export type PerformanceFilter = "6M" | "1Y" | "All";

export interface RecentApplication {
  id: string;
  borrower: string;
  avatarUrl?: string;
  amount: number;
  term: string;
  type: string;
  aiScore: number;
  riskLevel: "Low" | "Medium" | "High";
  status: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  time: string;
  detail: string;
  type: "approval" | "collection" | "risk" | "bnpl";
}
