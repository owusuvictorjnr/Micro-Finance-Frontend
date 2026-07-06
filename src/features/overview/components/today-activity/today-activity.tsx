"use client";

import React from "react";

export const TodayActivity: React.FC = () => {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 flex flex-col transition-colors h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
          Today&apos;s Activity
        </h3>
        <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </span>
      </div>

      {/* Timeline */}
      <div className="mt-6 relative border-l border-zinc-150 pl-5.5 dark:border-zinc-800 space-y-6">
        {/* Event 1 */}
        <div className="relative">
          <div className="absolute -left-[29px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#5F63F2]/40 bg-[#5F63F2]/10">
            <div className="h-1.5 w-1.5 rounded-full bg-[#5F63F2]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">New loan approved</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">GH₵15,000 for Michael Chen {" • "} 2m ago</div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="relative">
          <div className="absolute -left-[29px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#5F63F2]/40 bg-[#5F63F2]/10">
            <div className="h-1.5 w-1.5 rounded-full bg-[#5F63F2]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">EMI collected</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">GH₵450 from Sarah Johnson {" • "} 15m ago</div>
          </div>
        </div>

        {/* Event 3 */}
        <div className="relative">
          <div className="absolute -left-[29px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#F2994A]/40 bg-[#F2994A]/10">
            <div className="h-1.5 w-1.5 rounded-full bg-[#F2994A]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Risk alert triggered</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Payment behavior anomaly {" • "} 32m ago</div>
          </div>
        </div>

        {/* Event 4 */}
        <div className="relative">
          <div className="absolute -left-[29px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#5F63F2]/40 bg-[#5F63F2]/10">
            <div className="h-1.5 w-1.5 rounded-full bg-[#5F63F2]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">BNPL plan created</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">GH₵2,400 at TechMart {" • "} 1h ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};
