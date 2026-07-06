"use client";

import React from "react";
import { Calendar as CalendarIcon, Users, CircleCheck, AlertTriangle } from "lucide-react";
import { useOverviewStatsQuery } from "../hooks/use-overview-queries";
import { formatCurrency, formatNumber } from "../utils/formatters";

export const QuickIndicators: React.FC = () => {
  const { data, isLoading } = useOverviewStatsQuery();

  const expectedEmis = isLoading || !data ? "GH₵84.3K" : formatCurrency(data.indicators.expectedEmis);
  const activeBorrowers = isLoading || !data ? "1,420" : formatNumber(data.indicators.activeBorrowers);
  const collectionsToday = isLoading || !data ? "GH₵42.1K" : formatCurrency(data.indicators.collectionsToday);
  const overdueLoans = isLoading || !data ? "8" : formatNumber(data.indicators.overdueLoans);

  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      {/* Today's EMIs */}
      <div className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 transition-colors">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#5F63F2] text-white shadow-sm">
          <CalendarIcon className="h-4.5 w-4.5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">{"Today's EMIs"}</div>
          <div className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white mt-0.5">{expectedEmis}</div>
        </div>
      </div>

      {/* New Borrowers */}
      <div className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 transition-colors">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00ADC6] text-white shadow-sm">
          <Users className="h-4.5 w-4.5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Active Borrowers</div>
          <div className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white mt-0.5">{activeBorrowers}</div>
        </div>
      </div>

      {/* Collected */}
      <div className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 transition-colors">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#10B981] text-white shadow-sm">
          <CircleCheck className="h-4.5 w-4.5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Collected Today</div>
          <div className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white mt-0.5">{collectionsToday}</div>
        </div>
      </div>

      {/* Overdue */}
      <div className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 transition-colors">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EF4444] text-white shadow-sm">
          <AlertTriangle className="h-4.5 w-4.5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Overdue Loans</div>
          <div className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white mt-0.5">{overdueLoans}</div>
        </div>
      </div>
    </div>
  );
};
