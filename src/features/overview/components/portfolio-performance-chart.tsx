"use client";

import React from "react";
import { PerformanceFilter } from "../types/overview.types";

interface PortfolioPerformanceChartProps {
  filter: PerformanceFilter;
  setFilter: (filter: PerformanceFilter) => void;
}

export const PortfolioPerformanceChart: React.FC<PortfolioPerformanceChartProps> = ({
  filter,
  setFilter,
}) => {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 lg:col-span-2 flex flex-col justify-between transition-colors">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
              Portfolio Performance
            </h3>
            {/* Legends */}
            <div className="flex items-center gap-3 text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5F63F2]" />
                Disbursements
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                Collections
              </span>
            </div>
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
            Loan disbursements & collections trend
          </p>
        </div>
        
        {/* Time Switcher */}
        <div className="flex items-center rounded-lg bg-zinc-100/80 dark:bg-[#151B2E] p-0.5 border border-zinc-200/50 dark:border-[#2D234D]/20 self-start sm:self-auto">
          {(["6M", "1Y", "All"] as PerformanceFilter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md px-3 py-1 text-[10px] font-semibold transition-all duration-250 cursor-pointer ${
                filter === f
                  ? "bg-[#5F63F2] text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50/40 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-[#1C253B]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Graph Component */}
      <div className="mt-6 h-[250px] w-full">
        <svg viewBox="0 0 900 245" className="h-full w-full font-sans">
          <defs>
            <linearGradient id="disbGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5F63F2" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#5F63F2" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="collGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          <line x1="50" y1="25" x2="850" y2="25" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800/40" strokeDasharray="4" />
          <line x1="50" y1="53" x2="850" y2="53" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800/40" strokeDasharray="4" />
          <line x1="50" y1="81" x2="850" y2="81" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800/40" strokeDasharray="4" />
          <line x1="50" y1="109" x2="850" y2="109" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800/40" strokeDasharray="4" />
          <line x1="50" y1="137" x2="850" y2="137" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800/40" strokeDasharray="4" />
          <line x1="50" y1="165" x2="850" y2="165" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800/40" strokeDasharray="4" />
          <line x1="50" y1="193" x2="850" y2="193" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800/40" strokeDasharray="4" />
          <line x1="50" y1="221" x2="850" y2="221" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/50" />

          {/* Y Axis Values */}
          <text x="35" y="29" fill="currentColor" className="text-[10px] text-zinc-400 dark:text-zinc-400" textAnchor="end">3.2</text>
          <text x="35" y="57" fill="currentColor" className="text-[10px] text-zinc-400 dark:text-zinc-400" textAnchor="end">3</text>
          <text x="35" y="85" fill="currentColor" className="text-[10px] text-zinc-400 dark:text-zinc-400" textAnchor="end">2.8</text>
          <text x="35" y="113" fill="currentColor" className="text-[10px] text-zinc-400 dark:text-zinc-400" textAnchor="end">2.6</text>
          <text x="35" y="141" fill="currentColor" className="text-[10px] text-zinc-400 dark:text-zinc-400" textAnchor="end">2.4</text>
          <text x="35" y="169" fill="currentColor" className="text-[10px] text-zinc-400 dark:text-zinc-400" textAnchor="end">2.2</text>
          <text x="35" y="197" fill="currentColor" className="text-[10px] text-zinc-400 dark:text-zinc-400" textAnchor="end">2</text>
          <text x="35" y="225" fill="currentColor" className="text-[10px] text-zinc-400 dark:text-zinc-400" textAnchor="end">1.8</text>

          {/* Area Under Disbursements */}
          <path
            d="M 50,179 C 130,179 130,137 210,137 C 290,137 290,165 370,165 C 450,165 450,81 530,81 C 610,81 610,53 690,53 C 770,53 770,39 850,39 L 850,221 L 50,221 Z"
            fill="url(#disbGrad)"
          />
          
          {/* Area Under Collections */}
          <path
            d="M 50,221 C 130,221 130,193 210,193 C 290,193 290,179 370,179 C 450,179 450,151 530,151 C 610,151 610,123 690,123 C 770,123 770,81 850,81 L 850,221 L 50,221 Z"
            fill="url(#collGrad)"
          />

          {/* Disbursements Line */}
          <path
            d="M 50,179 C 130,179 130,137 210,137 C 290,137 290,165 370,165 C 450,165 450,81 530,81 C 610,81 610,53 690,53 C 770,53 770,39 850,39"
            fill="none"
            stroke="#5F63F2"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Collections Line */}
          <path
            d="M 50,221 C 130,221 130,193 210,193 C 290,193 290,179 370,179 C 450,179 450,151 530,151 C 610,151 610,123 690,123 C 770,123 770,81 850,81"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Interactive nodes */}
          <circle cx="50" cy="179" r="4.5" fill="#5F63F2" />
          <circle cx="210" cy="137" r="4.5" fill="#5F63F2" />
          <circle cx="370" cy="165" r="4.5" fill="#5F63F2" />
          <circle cx="530" cy="81" r="4.5" fill="#5F63F2" />
          <circle cx="690" cy="53" r="4.5" fill="#5F63F2" />
          <circle cx="850" cy="39" r="4.5" fill="#5F63F2" />

          <circle cx="50" cy="221" r="4.5" fill="#10B981" />
          <circle cx="210" cy="193" r="4.5" fill="#10B981" />
          <circle cx="370" cy="179" r="4.5" fill="#10B981" />
          <circle cx="530" cy="151" r="4.5" fill="#10B981" />
          <circle cx="690" cy="123" r="4.5" fill="#10B981" />
          <circle cx="850" cy="81" r="4.5" fill="#10B981" />

          {/* X Axis Labels */}
          <text x="50" y="238" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Jun</text>
          <text x="210" y="238" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Jul</text>
          <text x="370" y="238" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Aug</text>
          <text x="530" y="238" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Sep</text>
          <text x="690" y="238" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Oct</text>
          <text x="850" y="238" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Nov</text>
        </svg>
      </div>
    </div>
  );
};
