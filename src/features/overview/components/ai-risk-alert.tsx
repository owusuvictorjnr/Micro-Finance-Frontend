"use client";

import React from "react";
import { Sparkles, Eye } from "lucide-react";

interface AiRiskAlertProps {
  isDismissed: boolean;
  onDismiss: () => void;
}

export const AiRiskAlert: React.FC<AiRiskAlertProps> = ({
  isDismissed,
}) => {
  if (isDismissed) return null;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-purple-50/40 p-4 dark:border-[#2D234D]/40 dark:bg-[#181424] md:flex-row md:items-center md:justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#5F63F2] text-white shadow-inner">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
              AI Risk Alert
            </h3>
            <span className="rounded bg-amber-100 dark:bg-[#2A1D0F] border border-amber-500/10 dark:border-amber-500/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-500">
              High Priority
            </span>
          </div>
          <p className="text-xs text-zinc-650 dark:text-zinc-300">
            3 borrowers show increased default probability. 12 EMIs due today with collection risk. Review recommended.
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="flex items-center gap-2 rounded-lg bg-[#5F63F2] hover:bg-[#4F52D9] px-4 py-2.5 text-xs font-semibold text-white transition-all shadow-sm cursor-pointer whitespace-nowrap active:scale-97">
          <Eye className="h-4 w-4" />
          <span>View Details</span>
        </button>
      </div>
    </div>
  );
};
