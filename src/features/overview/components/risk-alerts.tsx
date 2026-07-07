"use client";

import React from "react";
import { AlertOctagon, Clock, UserCheck, AlertTriangle } from "lucide-react";

export const RiskAlerts: React.FC = () => {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 flex flex-col justify-between transition-colors">
      <div className="space-y-0.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4.5 w-4.5 text-rose-500" />
            <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
              Risk Alerts
            </h3>
          </div>
          <span className="rounded-full bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 text-[9px] font-bold text-rose-500 uppercase tracking-wider">
            3 New
          </span>
        </div>
      </div>

      {/* Alerts list */}
      <div className="mt-4 space-y-3">
        {/* High Default Risk Card */}
        <div className="flex gap-3 text-xs bg-rose-500/5 dark:bg-[#1E1218] border border-rose-500/10 dark:border-rose-950/30 rounded-xl p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500">
            <AlertOctagon className="h-4.5 w-4.5" />
          </div>
          <div>
            <div className="font-bold text-zinc-900 dark:text-zinc-100">High Default Risk</div>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">3 borrowers flagged by AI model</p>
          </div>
        </div>

        {/* Overdue EMIs Card */}
        <div className="flex gap-3 text-xs bg-amber-500/5 dark:bg-[#1E1712] border border-amber-500/10 dark:border-amber-950/30 rounded-xl p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
            <Clock className="h-4.5 w-4.5" />
          </div>
          <div>
            <div className="font-bold text-zinc-900 dark:text-zinc-100">Overdue EMIs</div>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">12 payments pending &gt;7 days</p>
          </div>
        </div>

        {/* KYC Expiring Card */}
        <div className="flex gap-3 text-xs bg-rose-500/5 dark:bg-[#1E1218] border border-rose-500/10 dark:border-rose-950/30 rounded-xl p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500">
            <UserCheck className="h-4.5 w-4.5" />
          </div>
          <div>
            <div className="font-bold text-zinc-900 dark:text-zinc-100">KYC Expiring</div>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">8 borrowers need re-verification</p>
          </div>
        </div>
      </div>

      {/* View All button */}
      <button className="mt-4 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 text-center text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-[#0B0F19] dark:text-zinc-300 dark:hover:bg-zinc-800/60 transition-colors shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0B0F19]">
        View All Alerts
      </button>
    </div>
  );
};
