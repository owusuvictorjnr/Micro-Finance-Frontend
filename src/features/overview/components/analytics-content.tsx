"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Clock3,
  Download,
  Ellipsis,
  Globe,
  Handshake,
  Smartphone,
  UserRound,
  RefreshCw,
  Wallet,
  Zap,
} from "lucide-react";

type TrendPoint = {
  month: string;
  applications: number;
  approvals: number;
  disbursements: number;
};

type DemographicPoint = {
  age: string;
  male: number;
  female: number;
};

type RegionPoint = {
  region: string;
  value: number;
  color: string;
};

type ChannelPoint = {
  name: string;
  share: number;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
};

type LoanProductPoint = {
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

const trendData: TrendPoint[] = [
  { month: "Jun", applications: 320, approvals: 280, disbursements: 260 },
  { month: "Jul", applications: 380, approvals: 340, disbursements: 320 },
  { month: "Aug", applications: 350, approvals: 310, disbursements: 290 },
  { month: "Sep", applications: 420, approvals: 380, disbursements: 360 },
  { month: "Oct", applications: 480, approvals: 430, disbursements: 410 },
  { month: "Nov", applications: 520, approvals: 470, disbursements: 450 },
];

const demographicsData: DemographicPoint[] = [
  { age: "18-25", male: 15, female: 12 },
  { age: "26-35", male: 25, female: 22 },
  { age: "36-45", male: 20, female: 18 },
  { age: "46-55", male: 15, female: 12 },
  { age: "55+", male: 10, female: 8 },
];

const regionData: RegionPoint[] = [
  { region: "North", value: 4.2, color: "#3B82F6" },
  { region: "South", value: 3.8, color: "#10B981" },
  { region: "East", value: 2.9, color: "#8B5CF6" },
  { region: "West", value: 1.9, color: "#EF4444" },
  { region: "Central", value: 3.2, color: "#F59E0B" },
];

const channelData: ChannelPoint[] = [
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

const loanProductData: LoanProductPoint[] = [
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

const statCardClassName =
  "rounded-2xl border border-zinc-800 bg-[#0B1020] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, change }) => {
  return (
    <div className={statCardClassName}>
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-[#101937]">
          {icon}
        </div>
        <div className="space-y-0.5">
          <p className="text-xs text-zinc-300">{title}</p>
          <h3 className="text-2xl leading-none font-semibold tracking-tight text-white">{value}</h3>
          <p className="text-xs font-medium text-emerald-400">{change}</p>
        </div>
      </div>
    </div>
  );
};

export const AnalyticsContent: React.FC = () => {
  const [loanTrendTime, setLoanTrendTime] = useState("Last 6 Months");
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [regionFilter, setRegionFilter] = useState<"All" | "Urban" | "Rural">("All");

  const [hoveredTrendIndex, setHoveredTrendIndex] = useState<number | null>(null);

  const trendWidth = 700;
  const trendHeight = 320;
  const trendPaddingLeft = 35;
  const trendPaddingRight = 15;
  const trendPaddingTop = 16;
  const trendPaddingBottom = 34;

  const chartInnerWidth = trendWidth - trendPaddingLeft - trendPaddingRight;
  const chartInnerHeight = trendHeight - trendPaddingTop - trendPaddingBottom;

  const yMax = 550;
  const yMin = 250;
  const yRange = yMax - yMin;

  const getTrendX = (index: number) => trendPaddingLeft + (index * chartInnerWidth) / (trendData.length - 1);

  const getTrendY = (value: number) => {
    const ratio = (value - yMin) / yRange;
    return trendHeight - trendPaddingBottom - ratio * chartInnerHeight;
  };

  const createPath = (key: keyof Omit<TrendPoint, "month">) => {
    const points = trendData.map((point, index) => ({
      x: getTrendX(index),
      y: getTrendY(point[key]),
    }));

    const slopes = points.map((point, index) => {
      if (index === 0) {
        return (points[1]!.y - point.y) / (points[1]!.x - point.x);
      }

      if (index === points.length - 1) {
        return (point.y - points[index - 1]!.y) / (point.x - points[index - 1]!.x);
      }

      const previous = points[index - 1]!;
      const next = points[index + 1]!;
      return (next.y - previous.y) / (next.x - previous.x);
    });

    let path = `M ${points[0]!.x},${points[0]!.y}`;

    for (let index = 0; index < points.length - 1; index += 1) {
      const p0 = points[index]!;
      const p1 = points[index + 1]!;
      const m0 = slopes[index]!;
      const m1 = slopes[index + 1]!;
      const dx = p1.x - p0.x;

      const cpX1 = p0.x + dx / 3;
      const cpY1 = p0.y + (m0 * dx) / 3;
      const cpX2 = p1.x - dx / 3;
      const cpY2 = p1.y - (m1 * dx) / 3;

      path += ` C ${cpX1},${cpY1} ${cpX2},${cpY2} ${p1.x},${p1.y}`;
    }

    return path;
  };

  const applicationsPath = createPath("applications");
  const approvalsPath = createPath("approvals");
  const disbursementsPath = createPath("disbursements");

  const demoWidth = 600;
  const demoHeight = 320;
  const demoPaddingLeft = 30;
  const demoPaddingRight = 14;
  const demoPaddingTop = 16;
  const demoPaddingBottom = 34;

  const demoInnerWidth = demoWidth - demoPaddingLeft - demoPaddingRight;
  const demoInnerHeight = demoHeight - demoPaddingTop - demoPaddingBottom;

  const getDemoBarX = (index: number) => {
    const columnWidth = demoInnerWidth / demographicsData.length;
    return demoPaddingLeft + index * columnWidth + columnWidth / 2;
  };

  const getDemoBarHeight = (value: number) => (value / 50) * demoInnerHeight;

  const geoWidth = 900;
  const geoHeight = 320;
  const geoPaddingLeft = 54;
  const geoPaddingRight = 24;
  const geoPaddingTop = 16;
  const geoPaddingBottom = 42;

  const geoInnerWidth = geoWidth - geoPaddingLeft - geoPaddingRight;
  const geoInnerHeight = geoHeight - geoPaddingTop - geoPaddingBottom;

  const getGeoY = (value: number) => {
    const ratio = value / 4.5;
    return geoHeight - geoPaddingBottom - ratio * geoInnerHeight;
  };

  const getGeoBarX = (index: number) => {
    const colWidth = geoInnerWidth / regionData.length;
    return geoPaddingLeft + colWidth * index + colWidth / 2;
  };

  return (
    <div className="space-y-6 text-white">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<ArrowUpRight className="h-5 w-5 text-blue-400" />}
          title="Disbursement Rate"
          value="92.4%"
          change="+5.2% vs last month"
        />
        <StatCard
          icon={<Wallet className="h-5 w-5 text-emerald-400" />}
          title="Avg. Loan Size"
          value="$8,450"
          change="+$340 growth"
        />
        <StatCard
          icon={<Clock3 className="h-5 w-5 text-violet-400" />}
          title="Avg. Processing Time"
          value="2.4 hrs"
          change="-18 min faster"
        />
        <StatCard
          icon={<RefreshCw className="h-5 w-5 text-rose-400" />}
          title="Repeat Borrowers"
          value="38.7%"
          change="+4.1% increase"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-3xl leading-none font-semibold tracking-tight text-white">Loan Volume Trend</h3>
              <p className="mt-2 text-base text-zinc-300">Applications vs Approvals vs Disbursements</p>
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsTimeDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-black px-4 py-2 text-xs font-medium text-white"
              >
                {loanTrendTime}
                <ChevronDown className="h-4 w-4 text-zinc-400" />
              </button>

              {isTimeDropdownOpen && (
                <div className="absolute right-0 z-20 mt-2 w-40 rounded-xl border border-zinc-700 bg-[#080d1a] p-1 shadow-xl">
                  {["Last 3 Months", "Last 6 Months", "Last 12 Months"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setLoanTrendTime(option);
                        setIsTimeDropdownOpen(false);
                      }}
                      className="block w-full rounded-lg px-3 py-2 text-left text-xs font-medium text-zinc-200 hover:bg-zinc-800"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 h-[300px] w-full">
            <svg viewBox={`0 0 ${trendWidth} ${trendHeight}`} className="h-full w-full select-none">
              <defs>
                <linearGradient id="analytics-app-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="analytics-approval-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="analytics-disbursement-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {[250, 300, 350, 400, 450, 500, 550].map((value) => {
                const y = getTrendY(value);
                return (
                  <g key={value}>
                    <line
                      x1={trendPaddingLeft}
                      y1={y}
                      x2={trendWidth - trendPaddingRight}
                      y2={y}
                      stroke="#1F2937"
                      strokeDasharray="3"
                    />
                    <text x={trendPaddingLeft - 8} y={y + 4} fill="#9CA3AF" fontSize="11" textAnchor="end">
                      {value}
                    </text>
                  </g>
                );
              })}

              <path
                d={`${applicationsPath} L ${getTrendX(trendData.length - 1)},${trendHeight - trendPaddingBottom} L ${getTrendX(0)},${trendHeight - trendPaddingBottom} Z`}
                fill="url(#analytics-app-gradient)"
              />
              <path
                d={`${approvalsPath} L ${getTrendX(trendData.length - 1)},${trendHeight - trendPaddingBottom} L ${getTrendX(0)},${trendHeight - trendPaddingBottom} Z`}
                fill="url(#analytics-approval-gradient)"
              />
              <path
                d={`${disbursementsPath} L ${getTrendX(trendData.length - 1)},${trendHeight - trendPaddingBottom} L ${getTrendX(0)},${trendHeight - trendPaddingBottom} Z`}
                fill="url(#analytics-disbursement-gradient)"
              />

              <path d={applicationsPath} fill="none" stroke="#6366F1" strokeWidth="2.5" />
              <path d={approvalsPath} fill="none" stroke="#14B8A6" strokeWidth="2.5" />
              <path d={disbursementsPath} fill="none" stroke="#F59E0B" strokeWidth="2.5" />

              {trendData.map((point, index) => (
                <g key={point.month}>
                  <circle cx={getTrendX(index)} cy={getTrendY(point.applications)} r="4" fill="#0B1020" stroke="#6366F1" strokeWidth="2" />
                  <circle cx={getTrendX(index)} cy={getTrendY(point.approvals)} r="4" fill="#0B1020" stroke="#14B8A6" strokeWidth="2" />
                  <circle cx={getTrendX(index)} cy={getTrendY(point.disbursements)} r="4" fill="#0B1020" stroke="#F59E0B" strokeWidth="2" />
                </g>
              ))}

              {trendData.map((point, index) => (
                <text
                  key={`${point.month}-label`}
                  x={getTrendX(index)}
                  y={trendHeight - trendPaddingBottom + 20}
                  fill="#94A3B8"
                  fontSize="12"
                  textAnchor="middle"
                  fontWeight={600}
                >
                  {point.month}
                </text>
              ))}

              {trendData.map((point, index) => {
                const widthSegment = chartInnerWidth / (trendData.length - 1);
                const x = getTrendX(index) - widthSegment / 2;

                return (
                  <rect
                    key={`${point.month}-hover`}
                    x={x}
                    y={trendPaddingTop}
                    width={widthSegment}
                    height={chartInnerHeight}
                    fill="transparent"
                    onMouseEnter={() => setHoveredTrendIndex(index)}
                    onMouseLeave={() => setHoveredTrendIndex(null)}
                  />
                );
              })}
            </svg>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-end gap-4 text-xs text-zinc-300">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full border-2 border-[#6366F1]" />Applications
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full border-2 border-[#14B8A6]" />Approvals
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full border-2 border-[#F59E0B]" />Disbursements
            </span>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-3xl leading-none font-semibold tracking-tight text-white">Borrower Demographics</h3>
              <p className="mt-2 text-base text-zinc-300">Age distribution of borrowers</p>
            </div>
            <button
              type="button"
              className="rounded-xl border border-zinc-700 bg-black p-2 text-zinc-200 transition-colors hover:bg-zinc-900"
            >
              <Download className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 h-[300px] w-full">
            <svg viewBox={`0 0 ${demoWidth} ${demoHeight}`} className="h-full w-full select-none">
              {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((value) => {
                const y = demoHeight - demoPaddingBottom - (value / 50) * demoInnerHeight;

                return (
                  <g key={value}>
                    <line
                      x1={demoPaddingLeft}
                      y1={y}
                      x2={demoWidth - demoPaddingRight}
                      y2={y}
                      stroke="#1F2937"
                      strokeDasharray={value === 0 ? "0" : "3"}
                    />
                    <text x={demoPaddingLeft - 8} y={y + 4} fill="#9CA3AF" fontSize="11" textAnchor="end">
                      {value}
                    </text>
                  </g>
                );
              })}

              {demographicsData.map((item, index) => {
                const x = getDemoBarX(index) - 28;
                const maleHeight = getDemoBarHeight(item.male);
                const femaleHeight = getDemoBarHeight(item.female);
                const bottom = demoHeight - demoPaddingBottom;

                return (
                  <g key={item.age}>
                    <rect x={x} y={bottom - maleHeight} width={56} height={maleHeight} fill="#6366F1" rx={4} />
                    <rect x={x} y={bottom - maleHeight - femaleHeight} width={56} height={femaleHeight} fill="#EC4899" rx={4} />
                    <text
                      x={getDemoBarX(index)}
                      y={demoHeight - demoPaddingBottom + 20}
                      fill="#94A3B8"
                      fontSize="12"
                      textAnchor="middle"
                      fontWeight={600}
                    >
                      {item.age}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-3 flex items-center justify-end gap-4 text-xs text-zinc-300">
            <span className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-full bg-[#6366F1]" />Male
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-full bg-[#EC4899]" />Female
            </span>
          </div>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-6 xl:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-3xl leading-none font-semibold tracking-tight text-white">Geographic Distribution</h3>
              <p className="mt-1.5 text-sm text-zinc-300">Loan distribution by region</p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#0A0E1A] p-1">
              {(["All", "Urban", "Rural"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setRegionFilter(option)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                    regionFilter === option
                      ? "bg-[#6366F1] text-white"
                      : "bg-black text-zinc-300 hover:bg-zinc-900"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-blue-900/60 bg-blue-950/30 p-3 text-center">
              <p className="text-3xl font-semibold text-blue-400">$4.2M</p>
              <p className="mt-1 text-sm text-zinc-200">North Region</p>
              <p className="mt-0.5 text-xs font-medium text-emerald-400">+12%</p>
            </div>
            <div className="rounded-2xl border border-emerald-900/60 bg-emerald-950/30 p-3 text-center">
              <p className="text-3xl font-semibold text-emerald-400">$3.8M</p>
              <p className="mt-1 text-sm text-zinc-200">South Region</p>
              <p className="mt-0.5 text-xs font-medium text-emerald-400">+8%</p>
            </div>
            <div className="rounded-2xl border border-violet-900/60 bg-violet-950/20 p-3 text-center">
              <p className="text-3xl font-semibold text-fuchsia-400">$2.9M</p>
              <p className="mt-1 text-sm text-zinc-200">East Region</p>
              <p className="mt-0.5 text-xs font-medium text-rose-400">-3%</p>
            </div>
            <div className="rounded-2xl border border-rose-900/60 bg-rose-950/20 p-3 text-center">
              <p className="text-3xl font-semibold text-rose-400">$1.9M</p>
              <p className="mt-1 text-sm text-zinc-200">West Region</p>
              <p className="mt-0.5 text-xs font-medium text-emerald-400">+15%</p>
            </div>
          </div>

          <div className="mt-6 h-[280px] w-full">
            <svg viewBox={`0 0 ${geoWidth} ${geoHeight}`} className="h-full w-full select-none">
              {[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5].map((value) => {
                const y = getGeoY(value);
                return (
                  <g key={value}>
                    <line
                      x1={geoPaddingLeft}
                      y1={y}
                      x2={geoWidth - geoPaddingRight}
                      y2={y}
                      stroke="#1F2937"
                      strokeDasharray={value === 0 ? "0" : "3"}
                    />
                    <text x={geoPaddingLeft - 10} y={y + 4} fill="#94A3B8" fontSize="12" textAnchor="end">
                      {value}M
                    </text>
                  </g>
                );
              })}

              {regionData.map((item, index) => {
                const x = getGeoBarX(index) - 64;
                const y = getGeoY(item.value);
                const height = geoHeight - geoPaddingBottom - y;

                return (
                  <g key={item.region}>
                    <rect x={x} y={y} width={128} height={height} fill={item.color} rx={7} />
                    <text
                      x={getGeoBarX(index)}
                      y={geoHeight - geoPaddingBottom + 24}
                      fill="#94A3B8"
                      fontSize="12"
                      textAnchor="middle"
                      fontWeight={500}
                    >
                      {item.region}
                    </text>
                  </g>
                );
              })}

              <circle cx={geoWidth - 86} cy={20} r={8} fill="#3B82F6" />
              <text x={geoWidth - 74} y={25} fill="#9CA3AF" fontSize="12">Loan Volume</text>
            </svg>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-3xl leading-none font-semibold tracking-tight text-white">Channel Performance</h3>
            </div>
            <button
              type="button"
              className="rounded-xl border border-zinc-700 bg-black p-2 text-zinc-300 transition-colors hover:bg-zinc-900"
            >
              <Ellipsis className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {channelData.map((channel) => (
              <div key={channel.name} className="rounded-2xl border border-zinc-700 bg-[#0D1324] p-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#141C34]">
                      {channel.icon}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{channel.name}</p>
                      <p className="text-xs text-zinc-300">{channel.share}% of applications</p>
                    </div>
                  </div>
                  <span
                    className={`text-xl font-semibold ${
                      channel.trend === "up" ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {channel.change}
                  </span>
                </div>

                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-zinc-700/50">
                  <div
                    className="h-full rounded-full bg-[#8B5CF6]"
                    style={{ width: `${channel.share}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-3xl leading-none font-semibold tracking-tight text-white">Loan Product Analysis</h3>
            <p className="mt-1.5 text-sm text-zinc-300">Performance by loan type</p>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-[#0E1324] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-900"
          >
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide text-zinc-300">Product</th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-300">Total Volume</th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-300">Active Loans</th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-300">Avg. Amount</th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-300">Interest Rate</th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-300">Default Rate</th>
                <th className="px-4 py-4 text-right text-xs font-semibold uppercase tracking-wide text-zinc-300">Growth</th>
              </tr>
            </thead>
            <tbody>
              {loanProductData.map((row) => (
                <tr key={row.product} className="border-b border-zinc-800/80 last:border-b-0">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                          row.product === "Personal Loan"
                            ? "bg-indigo-500"
                            : row.product === "BNPL"
                              ? "bg-cyan-500"
                              : row.product === "Business Loan"
                                ? "bg-sky-500"
                                : "bg-amber-500"
                        }`}
                      >
                        {row.icon}
                      </div>
                      <span className="text-lg font-semibold text-zinc-100">{row.product}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-xl font-semibold text-zinc-100">{row.totalVolume}</td>
                  <td className="px-4 py-4 text-center text-xl font-medium text-zinc-100">{row.activeLoans}</td>
                  <td className="px-4 py-4 text-center text-xl font-medium text-zinc-100">{row.averageAmount}</td>
                  <td className="px-4 py-4 text-center text-xl font-medium text-zinc-100">{row.interestRate}</td>
                  <td className="px-4 py-4 text-center">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                        row.defaultRateTone === "low"
                          ? "border border-emerald-700/60 bg-emerald-950/40 text-emerald-400"
                          : row.defaultRateTone === "medium"
                            ? "border border-amber-700/60 bg-amber-950/30 text-amber-400"
                            : "border border-rose-700/60 bg-rose-950/30 text-rose-400"
                      }`}
                    >
                      {row.defaultRate}
                    </span>
                  </td>
                  <td
                    className={`px-4 py-4 text-right text-xl font-semibold ${
                      row.growthTone === "up" ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {row.growth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {hoveredTrendIndex !== null && (
        <div className="hidden" aria-hidden="true">
          {hoveredTrendIndex}
        </div>
      )}
    </div>
  );
};
