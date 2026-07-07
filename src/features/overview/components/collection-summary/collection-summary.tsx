"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

export const CollectionSummary: React.FC = () => {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 flex flex-col justify-between transition-colors h-full">
      {/* Header */}
      <div className="flex items-center justify-between flex-none">
        <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
          Collection Summary
        </h3>
        <button className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-[#070B13]/90 dark:text-zinc-300 dark:hover:bg-[#0E1322] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0B0F19]">
          This Week
          <ChevronDown className="h-3.5 w-3.5 text-zinc-500" />
        </button>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-start gap-4 flex-none text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 dark:bg-[#00E5A3]" />
          Collected
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500 dark:bg-[#FF9100]" />
          Pending
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500 dark:bg-[#FF2D55]" />
          Failed
        </span>
      </div>

      {/* Chart */}
      <div className="mt-5 flex-1 flex items-center justify-center h-[180px] w-full">
        <svg viewBox="0 0 420 190" className="h-full w-full overflow-visible font-sans" preserveAspectRatio="none">
          {/* Grid lines (from 70 down to 0) */}
          <line x1="35" y1="20" x2="395" y2="20" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/40" strokeWidth="1" />
          <line x1="35" y1="40" x2="395" y2="40" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/40" strokeWidth="1" />
          <line x1="35" y1="60" x2="395" y2="60" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/40" strokeWidth="1" />
          <line x1="35" y1="80" x2="395" y2="80" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/40" strokeWidth="1" />
          <line x1="35" y1="100" x2="395" y2="100" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/40" strokeWidth="1" />
          <line x1="35" y1="120" x2="395" y2="120" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/40" strokeWidth="1" />
          <line x1="35" y1="140" x2="395" y2="140" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/40" strokeWidth="1" />
          <line x1="35" y1="160" x2="395" y2="160" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/40" strokeWidth="1" />
 
          {/* Y Axis labels */}
          <text x="25" y="24" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="end">70</text>
          <text x="25" y="44" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="end">60</text>
          <text x="25" y="64" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="end">50</text>
          <text x="25" y="84" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="end">40</text>
          <text x="25" y="104" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="end">30</text>
          <text x="25" y="124" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="end">20</text>
          <text x="25" y="144" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="end">10</text>
          <text x="25" y="164" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="end">0</text>

          {/* Day Group 1: Mon (x_center = 55) */}
          {/* Collected: value=45, y=70, h=90 */}
          <rect x="39" y="70" width="9" height="90" rx="2" className="fill-emerald-500 dark:fill-[#00E5A3]" />
          {/* Pending: value=12, y=136, h=24 */}
          <rect x="49.5" y="136" width="9" height="24" rx="2" className="fill-amber-500 dark:fill-[#FF9100]" />
          {/* Failed: value=3, y=154, h=6 */}
          <rect x="60" y="154" width="9" height="6" rx="2" className="fill-red-500 dark:fill-[#FF2D55]" />
          <text x="54" y="178" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Mon</text>

          {/* Day Group 2: Tue (x_center = 110) */}
          {/* Collected: value=52, y=56, h=104 */}
          <rect x="94" y="56" width="9" height="104" rx="2" className="fill-emerald-500 dark:fill-[#00E5A3]" />
          {/* Pending: value=8, y=144, h=16 */}
          <rect x="104.5" y="144" width="9" height="16" rx="2" className="fill-amber-500 dark:fill-[#FF9100]" />
          {/* Failed: value=5, y=150, h=10 */}
          <rect x="115" y="150" width="9" height="10" rx="2" className="fill-red-500 dark:fill-[#FF2D55]" />
          <text x="109" y="178" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Tue</text>

          {/* Day Group 3: Wed (x_center = 165) */}
          {/* Collected: value=38, y=84, h=76 */}
          <rect x="149" y="84" width="9" height="76" rx="2" className="fill-emerald-500 dark:fill-[#00E5A3]" />
          {/* Pending: value=15, y=130, h=30 */}
          <rect x="159.5" y="130" width="9" height="30" rx="2" className="fill-amber-500 dark:fill-[#FF9100]" />
          {/* Failed: value=2, y=156, h=4 */}
          <rect x="170" y="156" width="9" height="4" rx="2" className="fill-red-500 dark:fill-[#FF2D55]" />
          <text x="164" y="178" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Wed</text>

          {/* Day Group 4: Thu (x_center = 220) */}
          {/* Collected: value=63, y=34, h=126 */}
          <rect x="204" y="34" width="9" height="126" rx="2" className="fill-emerald-500 dark:fill-[#00E5A3]" />
          {/* Pending: value=10, y=140, h=20 */}
          <rect x="214.5" y="140" width="9" height="20" rx="2" className="fill-amber-500 dark:fill-[#FF9100]" />
          {/* Failed: value=4, y=152, h=8 */}
          <rect x="225" y="152" width="9" height="8" rx="2" className="fill-red-500 dark:fill-[#FF2D55]" />
          <text x="219" y="178" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Thu</text>

          {/* Day Group 5: Fri (x_center = 275) */}
          {/* Collected: value=48, y=64, h=96 */}
          <rect x="259" y="64" width="9" height="96" rx="2" className="fill-emerald-500 dark:fill-[#00E5A3]" />
          {/* Pending: value=18, y=124, h=36 */}
          <rect x="269.5" y="124" width="9" height="36" rx="2" className="fill-amber-500 dark:fill-[#FF9100]" />
          {/* Failed: value=6, y=148, h=12 */}
          <rect x="280" y="148" width="9" height="12" rx="2" className="fill-red-500 dark:fill-[#FF2D55]" />
          <text x="274" y="178" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Fri</text>

          {/* Day Group 6: Sat (x_center = 330) */}
          {/* Collected: value=22, y=116, h=44 */}
          <rect x="314" y="116" width="9" height="44" rx="2" className="fill-emerald-500 dark:fill-[#00E5A3]" />
          {/* Pending: value=8, y=144, h=16 */}
          <rect x="324.5" y="144" width="9" height="16" rx="2" className="fill-amber-500 dark:fill-[#FF9100]" />
          {/* Failed: value=1, y=158, h=2 */}
          <rect x="335" y="158" width="9" height="2" rx="2" className="fill-red-500 dark:fill-[#FF2D55]" />
          <text x="329" y="178" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Sat</text>

          {/* Day Group 7: Sun (x_center = 385) */}
          {/* Collected: value=15, y=130, h=30 */}
          <rect x="369" y="130" width="9" height="30" rx="2" className="fill-emerald-500 dark:fill-[#00E5A3]" />
          {/* Pending: value=5, y=150, h=10 */}
          <rect x="379.5" y="150" width="9" height="10" rx="2" className="fill-amber-500 dark:fill-[#FF9100]" />
          {/* Failed: value=1, y=158, h=2 */}
          <rect x="390" y="158" width="9" height="2" rx="2" className="fill-red-500 dark:fill-[#FF2D55]" />
          <text x="384" y="178" fill="currentColor" className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-400" textAnchor="middle">Sun</text>
        </svg>
      </div>
    </div>
  );
};
