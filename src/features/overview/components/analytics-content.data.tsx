import React from "react";
import {
  BriefcaseBusiness,
  Building2,
  Globe,
  Handshake,
  Smartphone,
  UserRound,
  Wallet,
  Zap,
} from "lucide-react";

export type TrendPoint = {
  month: string;
  applications: number;
  approvals: number;
  disbursements: number;
};

export type DemographicPoint = {
  age: string;
  male: number;
  female: number;
};

export type RegionPoint = {
  region: string;
  value: number;
  color: string;
  segment: "Urban" | "Rural";
};

export type ChannelPoint = {
  name: string;
  share: number;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
};

export type LoanProductPoint = {
  product: string;
  icon: React.ReactNode;
  totalVolume: string;
  activeLoans: string;
  averageAmount: string;
  interestRate: string;
  defaultRate: string;
  defaultRateTone: "low" | "medium" | "high";
  growth: string;
  growthTone: "up" | "down";
};

export const trendData: TrendPoint[] = [
  { month: "Dec", applications: 300, approvals: 260, disbursements: 240 },
  { month: "Jan", applications: 310, approvals: 270, disbursements: 250 },
  { month: "Feb", applications: 330, approvals: 290, disbursements: 270 },
  { month: "Mar", applications: 340, approvals: 300, disbursements: 280 },
  { month: "Apr", applications: 360, approvals: 320, disbursements: 300 },
  { month: "May", applications: 370, approvals: 330, disbursements: 310 },
  { month: "Jun", applications: 390, approvals: 350, disbursements: 330 },
  { month: "Jul", applications: 410, approvals: 370, disbursements: 350 },
  { month: "Aug", applications: 430, approvals: 390, disbursements: 370 },
  { month: "Sep", applications: 450, approvals: 410, disbursements: 390 },
  { month: "Oct", applications: 490, approvals: 440, disbursements: 420 },
  { month: "Nov", applications: 520, approvals: 470, disbursements: 450 },
];

export const demographicsData: DemographicPoint[] = [
  { age: "18-25", male: 15, female: 12 },
  { age: "26-35", male: 25, female: 22 },
  { age: "36-45", male: 20, female: 18 },
  { age: "46-55", male: 15, female: 12 },
  { age: "55+", male: 10, female: 8 },
];

export const regionData: RegionPoint[] = [
  { region: "North", value: 4.2, color: "#3B82F6", segment: "Urban" },
  { region: "South", value: 3.8, color: "#10B981", segment: "Rural" },
  { region: "East", value: 2.9, color: "#8B5CF6", segment: "Urban" },
  { region: "West", value: 1.9, color: "#EF4444", segment: "Rural" },
  { region: "Central", value: 3.2, color: "#F59E0B", segment: "Urban" },
];

export const channelData: ChannelPoint[] = [
  {
    name: "Mobile App",
    share: 45,
    change: "+18%",
    trend: "up",
    icon: <Smartphone className="h-4 w-4 text-blue-400" />,
  },
  {
    name: "Web Portal",
    share: 32,
    change: "+5%",
    trend: "up",
    icon: <Globe className="h-4 w-4 text-violet-400" />,
  },
  {
    name: "Partner Network",
    share: 18,
    change: "+22%",
    trend: "up",
    icon: <Handshake className="h-4 w-4 text-emerald-400" />,
  },
  {
    name: "Branch",
    share: 5,
    change: "-8%",
    trend: "down",
    icon: <Building2 className="h-4 w-4 text-rose-400" />,
  },
];

export const loanProductData: LoanProductPoint[] = [
  {
    product: "Personal Loan",
    icon: <UserRound className="h-4 w-4 text-white" />,
    totalVolume: "$5.8M",
    activeLoans: "1,247",
    averageAmount: "$12,500",
    interestRate: "14.5%",
    defaultRate: "2.1%",
    defaultRateTone: "low",
    growth: "+12.4%",
    growthTone: "up",
  },
  {
    product: "BNPL",
    icon: <Wallet className="h-4 w-4 text-white" />,
    totalVolume: "$3.2M",
    activeLoans: "2,156",
    averageAmount: "$1,480",
    interestRate: "0%",
    defaultRate: "1.8%",
    defaultRateTone: "low",
    growth: "+28.7%",
    growthTone: "up",
  },
  {
    product: "Business Loan",
    icon: <BriefcaseBusiness className="h-4 w-4 text-white" />,
    totalVolume: "$2.9M",
    activeLoans: "312",
    averageAmount: "$28,400",
    interestRate: "16.2%",
    defaultRate: "4.2%",
    defaultRateTone: "medium",
    growth: "+8.1%",
    growthTone: "up",
  },
  {
    product: "Micro Loan",
    icon: <Zap className="h-4 w-4 text-white" />,
    totalVolume: "$0.9M",
    activeLoans: "892",
    averageAmount: "$850",
    interestRate: "18.5%",
    defaultRate: "6.8%",
    defaultRateTone: "high",
    growth: "-2.3%",
    growthTone: "down",
  },
];
