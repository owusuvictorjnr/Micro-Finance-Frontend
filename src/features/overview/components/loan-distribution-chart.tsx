"use client";

import React from "react";

export const LoanDistributionChart: React.FC = () => {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 flex flex-col justify-between transition-colors">
      <div className="space-y-0.5">
        <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
          Loan Distribution
        </h3>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
          By loan type
        </p>
      </div>

      {/* SVG Donut Circle */}
      <div className="my-auto flex items-center justify-center h-[190px] relative">
        <svg width="180" height="180" viewBox="0 0 160 160">
          {/* Personal segment (35% - indigo #5F63F2) */}
          <circle
            cx="80"
            cy="80"
            r="52"
            fill="none"
            stroke="#5F63F2"
            strokeWidth="14"
            strokeDasharray="114 326.73"
            transform="rotate(-90 80 80)"
          />
          {/* Business segment (30% - purple) */}
          <circle
            cx="80"
            cy="80"
            r="52"
            fill="none"
            stroke="#a855f7"
            strokeWidth="14"
            strokeDasharray="98 326.73"
            transform="rotate(36 80 80)"
          />
          {/* BNPL segment (20% - cyan/teal #00ADC6) */}
          <circle
            cx="80"
            cy="80"
            r="52"
            fill="none"
            stroke="#00ADC6"
            strokeWidth="14"
            strokeDasharray="65 326.73"
            transform="rotate(144 80 80)"
          />
          {/* Micro segment (15% - amber) */}
          <circle
            cx="80"
            cy="80"
            r="52"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="14"
            strokeDasharray="49 326.73"
            transform="rotate(216 80 80)"
          />
        </svg>
      </div>

      {/* Legend row */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#5F63F2]" />
          Personal
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />
          Business
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#00ADC6]" />
          BNPL
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
          Micro
        </span>
      </div>
    </div>
  );
};
