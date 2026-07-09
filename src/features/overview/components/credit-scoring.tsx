"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const CreditScoring: React.FC = () => {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 flex flex-col justify-between transition-colors">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-[#A855F7]" />
        <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
          AI Credit Scoring
        </h3>
      </div>

      <div className="mt-4 flex items-center justify-between gap-6">
        {/* Left Side: Circular Gauge */}
        <div className="relative flex h-[100px] w-[100px] shrink-0 items-center justify-center">
          <svg width="100" height="100" viewBox="0 0 100 100" className="transform -rotate-90">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              className="text-zinc-100 dark:text-[#1E2538]"
              strokeWidth="7"
            />
            {/* Active arc: ~75% coverage */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#00E5A3"
              strokeWidth="7"
              strokeDasharray="251.3"
              strokeDashoffset="62.8"
              strokeLinecap="round"
            />
          </svg>
          {/* Centered Score */}
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">742</span>
          </div>
        </div>

        {/* Right Side: Range progress bars */}
        <div className="flex-1 space-y-3">
          {/* Excellent */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">
              <span>Excellent (750+)</span>
              <span className="text-emerald-500 dark:text-[#00E5A3]">42%</span>
            </div>
            <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden">
              <div className="h-full bg-[#5F63F2] rounded-full" style={{ width: "42%" }} />
            </div>
          </div>

          {/* Good */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">
              <span>Good (700-749)</span>
              <span className="text-sky-500 dark:text-sky-400">35%</span>
            </div>
            <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden">
              <div className="h-full bg-sky-500 rounded-full" style={{ width: "35%" }} />
            </div>
          </div>

          {/* Fair */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">
              <span>Fair (650-699)</span>
              <span className="text-amber-500 dark:text-[#F2994A]">18%</span>
            </div>
            <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden">
              <div className="h-full bg-[#F2994A] rounded-full" style={{ width: "18%" }} />
            </div>
          </div>

          {/* Poor */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">
              <span>Poor (&lt;650)</span>
              <span className="text-rose-500 dark:text-[#EF4444]">5%</span>
            </div>
            <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden">
              <div className="h-full bg-[#EF4444] rounded-full" style={{ width: "5%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
