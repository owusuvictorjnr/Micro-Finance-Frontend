"use client";

import React from "react";
import { Wallet, Layers, CreditCard, Percent } from "lucide-react";
import Image from "next/image";
import { KpiCard } from "./kpi-card";
import { useOverviewStatsQuery } from "../hooks/use-overview-queries";
import { formatCurrency, formatNumber, formatPercentage } from "../utils/formatters";

export const KpiGrid: React.FC = () => {
  const { data, isLoading } = useOverviewStatsQuery();

  // If loading, display loading placeholders matching the mockup
  const totalPortfolio = isLoading || !data ? "GH₵12.8M" : formatCurrency(data.kpis.totalPortfolio);
  const activeLoans = isLoading || !data ? "2,847" : formatNumber(data.kpis.activeLoans);
  const bnplVolume = isLoading || !data ? "GH₵3.2M" : formatCurrency(data.kpis.bnplVolume);
  const collectionRate = isLoading || !data ? "94.7%" : formatPercentage(data.kpis.collectionRate);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Card 1: Total Portfolio */}
      <KpiCard
        title="Total Portfolio"
        value={totalPortfolio}
        icon={
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00ADC6] text-white shadow-sm">
            <Wallet className="h-4.5 w-4.5" />
          </div>
        }
        trendText="+12.5% vs last month"
        trendDirection="up"
        progress={85}
        targetText="Target: GH₵15M"
      />

      {/* Card 2: Active Loans */}
      <KpiCard
        title="Active Loans"
        value={activeLoans}
        icon={
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#10B981] text-white shadow-sm">
            <Layers className="h-4.5 w-4.5" />
          </div>
        }
        trendText="+8.2% 156 new this month"
        trendDirection="up"
        footerNode={
          <div className="flex items-center gap-2 pt-2">
            <div className="flex -space-x-1.5 overflow-hidden">
              <Image
                className="inline-block h-6 w-6 rounded-full object-cover ring-2 ring-white dark:ring-[#0E1322]"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Avatar 1"
                width={24}
                height={24}
                unoptimized
              />
              <Image
                className="inline-block h-6 w-6 rounded-full object-cover ring-2 ring-white dark:ring-[#0E1322]"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Avatar 2"
                width={24}
                height={24}
                unoptimized
              />
              <Image
                className="inline-block h-6 w-6 rounded-full object-cover ring-2 ring-white dark:ring-[#0E1322]"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Avatar 3"
                width={24}
                height={24}
                unoptimized
              />
            </div>
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
              +24 pending approval
            </span>
          </div>
        }
      />

      {/* Card 3: BNPL Volume */}
      <KpiCard
        title="BNPL Volume"
        value={bnplVolume}
        icon={
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00ADC6] text-white shadow-sm">
            <CreditCard className="h-4.5 w-4.5" />
          </div>
        }
        trendText="+28.4% trending up"
        trendDirection="up"
        footerNode={
          <div className="flex items-center gap-3 pt-2 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span>Active Plans: <strong className="font-bold text-zinc-900 dark:text-white">1,234</strong></span>
            <span>Merchants: <strong className="font-bold text-zinc-900 dark:text-white">89</strong></span>
          </div>
        }
      />

      {/* Card 4: Collection Rate */}
      <KpiCard
        title="Collection Rate"
        value={collectionRate}
        icon={
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F59E0B] text-white shadow-sm">
            <Percent className="h-4.5 w-4.5" />
          </div>
        }
        trendText="-0.3% needs attention"
        trendDirection="down"
        footerNode={
          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
            <div className="rounded-lg bg-emerald-50/50 dark:bg-[#0B211A] p-2 border border-emerald-500/10 dark:border-emerald-500/5">
              <div className="text-[10px] font-semibold text-emerald-600 dark:text-[#00E5A3]">On-time</div>
              <div className="text-xs font-bold text-zinc-900 dark:text-white mt-0.5">87.2%</div>
            </div>
            <div className="rounded-lg bg-amber-50/50 dark:bg-[#201A12] p-2 border border-amber-500/10 dark:border-amber-500/5">
              <div className="text-[10px] font-semibold text-amber-600 dark:text-[#F2994A]">Late</div>
              <div className="text-xs font-bold text-zinc-900 dark:text-white mt-0.5">7.5%</div>
            </div>
            <div className="rounded-lg bg-red-50/50 dark:bg-[#221318] p-2 border border-red-500/10 dark:border-red-500/5">
              <div className="text-[10px] font-semibold text-red-600 dark:text-[#EF4444]">Default</div>
              <div className="text-xs font-bold text-zinc-900 dark:text-white mt-0.5">5.3%</div>
            </div>
          </div>
        }
      />
    </div>
  );
};
