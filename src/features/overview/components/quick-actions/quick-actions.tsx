"use client";

import React from "react";
import {
  NewLoanIcon,
  BnplPlanIcon,
  CollectEmiIcon,
  AddBorrowerIcon,
  ReportsIcon,
  AiAnalysisIcon,
} from "./icons";

export const QuickActions: React.FC = () => {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 flex flex-col transition-colors h-full">
      <div className="flex-none">
        <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
          Quick Actions
        </h3>
      </div>

      <div className="mt-5 grid grid-cols-3 grid-rows-2 gap-3 flex-1">
        {/* New Loan - Active/Highlighted */}
        <button type="button" className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border border-[#5F63F2]/65 bg-[#0F1424] py-5 px-3 hover:bg-[#131B32] transition-all shadow-[0_0_12px_rgba(95,99,242,0.12)] ring-1 ring-[#5F63F2]/25 cursor-pointer text-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1424]">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#5F63F2] text-white group-hover:scale-105 transition-transform">
            <NewLoanIcon />
          </div>
          <span className="text-xs font-semibold text-zinc-100">New Loan</span>
        </button>

        {/* BNPL Plan */}
        <button type="button" className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border border-transparent bg-zinc-50 dark:bg-[#070B13]/90 py-5 px-3 hover:bg-zinc-100 dark:hover:bg-[#0E1322] hover:border-zinc-200 dark:hover:border-zinc-800 transition-all cursor-pointer text-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0E1322]">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500 text-white group-hover:scale-105 transition-transform">
            <BnplPlanIcon />
          </div>
          <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">BNPL Plan</span>
        </button>

        {/* Collect EMI */}
        <button type="button" className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border border-transparent bg-zinc-50 dark:bg-[#070B13]/90 py-5 px-3 hover:bg-zinc-100 dark:hover:bg-[#0E1322] hover:border-zinc-200 dark:hover:border-zinc-800 transition-all cursor-pointer text-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0E1322]">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-white group-hover:scale-105 transition-transform">
            <CollectEmiIcon />
          </div>
          <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Collect EMI</span>
        </button>

        {/* Add Borrower */}
        <button type="button" className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border border-transparent bg-zinc-50 dark:bg-[#070B13]/90 py-5 px-3 hover:bg-zinc-100 dark:hover:bg-[#0E1322] hover:border-zinc-200 dark:hover:border-zinc-800 transition-all cursor-pointer text-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0E1322]">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500 text-white group-hover:scale-105 transition-transform">
            <AddBorrowerIcon />
          </div>
          <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Add Borrower</span>
        </button>

        {/* Reports */}
        <button type="button" className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border border-transparent bg-zinc-50 dark:bg-[#070B13]/90 py-5 px-3 hover:bg-zinc-100 dark:hover:bg-[#0E1322] hover:border-zinc-200 dark:hover:border-zinc-800 transition-all cursor-pointer text-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0E1322]">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-white group-hover:scale-105 transition-transform">
            <ReportsIcon />
          </div>
          <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Reports</span>
        </button>

        {/* AI Analysis */}
        <button type="button" className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border border-transparent bg-zinc-50 dark:bg-[#070B13]/90 py-5 px-3 hover:bg-zinc-100 dark:hover:bg-[#0E1322] hover:border-zinc-200 dark:hover:border-zinc-800 transition-all cursor-pointer text-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0E1322]">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500 text-white group-hover:scale-105 transition-transform">
            <AiAnalysisIcon />
          </div>
          <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">AI Analysis</span>
        </button>
      </div>
    </div>
  );
};
