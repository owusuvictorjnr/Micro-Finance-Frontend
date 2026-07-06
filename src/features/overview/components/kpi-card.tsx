"use client";

import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trendText: string;
  trendDirection: "up" | "down";
  footerNode?: React.ReactNode;
  progress?: number;
  targetText?: string;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  icon,
  trendText,
  trendDirection,
  footerNode,
  progress,
  targetText,
}) => {
  // Parse trendText to separate the percentage badge from the descriptive text
  const splitTrend = (text: string) => {
    const parts = text.split(" ");
    if (parts[0] && (parts[0].startsWith("+") || parts[0].startsWith("-"))) {
      return {
        badge: parts[0],
        label: parts.slice(1).join(" "),
      };
    }
    return {
      badge: "",
      label: text,
    };
  };

  const { badge, label } = splitTrend(trendText);

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 transition-colors relative overflow-hidden flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            {title}
          </span>
          {icon}
        </div>
        <div className="mt-2.5">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{value}</h2>
          
          <div className="mt-2 flex items-center gap-2 text-xs">
            {badge && (
              <div
                className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  trendDirection === "up"
                    ? "bg-emerald-50 text-emerald-700 dark:bg-[#0D241C] dark:text-[#00E5A3]"
                    : "bg-amber-50 text-amber-700 dark:bg-[#2D1F10] dark:text-[#F59E0B]"
                }`}
              >
                {trendDirection === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span>{badge}</span>
              </div>
            )}
            <span className="text-zinc-500 dark:text-zinc-400 text-[11px] font-medium">{label}</span>
          </div>
        </div>
      </div>

      {progress !== undefined && (
        <div className="mt-4 space-y-1.5">
          <div className="flex justify-between text-[11px] font-semibold text-zinc-550 dark:text-zinc-400">
            <span>{targetText}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800/60">
            <div
              className="h-full rounded-full bg-indigo-600 dark:bg-indigo-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {footerNode && <div className="mt-4">{footerNode}</div>}
    </div>
  );
};
