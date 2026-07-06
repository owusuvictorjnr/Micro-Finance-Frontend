"use client";
import React from "react";

export const EmiCalendar: React.FC = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const calendarDays = [
    { day: 27, isCurrentMonth: false },
    { day: 28, isCurrentMonth: false },
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true, status: "high" },
    { day: 2, isCurrentMonth: true, status: "normal" },
    { day: 3, isCurrentMonth: true, status: "normal" },
    { day: 4, isCurrentMonth: true, status: "normal" },
    { day: 5, isCurrentMonth: true, status: "normal-highlight" },
    { day: 6, isCurrentMonth: true, status: "normal" },
    { day: 7, isCurrentMonth: true, status: "normal" },
    { day: 8, isCurrentMonth: true, status: "normal" },
    { day: 9, isCurrentMonth: true, status: "normal" },
    { day: 10, isCurrentMonth: true, status: "high" },
    { day: 11, isCurrentMonth: true, status: "normal" },
    { day: 12, isCurrentMonth: true, status: "normal" },
    { day: 13, isCurrentMonth: true, status: "normal" },
    { day: 14, isCurrentMonth: true, status: "normal" },
    { day: 15, isCurrentMonth: true, status: "overdue" },
    { day: 16, isCurrentMonth: true, status: "normal" },
    { day: 17, isCurrentMonth: true, status: "today" },
    { day: 18, isCurrentMonth: true, status: "normal" },
    { day: 19, isCurrentMonth: true, status: "normal" },
    { day: 20, isCurrentMonth: true, status: "overdue" }, // Orange/yellow status
    { day: 21, isCurrentMonth: true, status: "normal" },
    { day: 22, isCurrentMonth: true, status: "normal" },
    { day: 23, isCurrentMonth: true, status: "normal" },
    { day: 24, isCurrentMonth: true, status: "normal" },
    { day: 25, isCurrentMonth: true, status: "high" },
    { day: 26, isCurrentMonth: true, status: "normal" },
    { day: 27, isCurrentMonth: true, status: "normal" },
    { day: 28, isCurrentMonth: true, status: "normal" },
    { day: 29, isCurrentMonth: true, status: "normal" },
    { day: 30, isCurrentMonth: true, status: "normal-highlight" },
  ];

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 flex flex-col justify-between transition-colors h-full">
      {/* Header */}
      <div className="flex items-center justify-between flex-none">
        <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
          EMI Calendar - November 2024
        </h3>
        <button className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/60 transition-all cursor-pointer">
          View Full
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="mt-5 flex-1 flex flex-col justify-center">
        {/* Days of the week */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-zinc-400 dark:text-zinc-500 mb-3">
          {daysOfWeek.map((d, idx) => (
            <div key={idx} className="h-6 flex items-center justify-center">{d}</div>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1.5">
          {calendarDays.map((c, idx) => {
            let itemClass = "h-8 w-10 max-w-full rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200 cursor-pointer ";
            if (!c.isCurrentMonth) {
              itemClass += "text-zinc-300 dark:text-zinc-700/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/20";
            } else if (c.status === "high") {
              itemClass += "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/10 dark:text-[#00E5A3] border border-emerald-500/20";
            } else if (c.status === "overdue") {
              // Highlighted red/orange/yellow
              if (c.day === 15) {
                itemClass += "bg-red-500/10 text-red-500 dark:bg-rose-500/10 dark:text-[#FF2D55] border border-red-500/20 dark:border-rose-500/20";
              } else {
                itemClass += "bg-amber-500/10 text-amber-600 dark:bg-amber-500/10 dark:text-[#FF9100] border border-amber-500/20";
              }
            } else if (c.status === "today") {
              itemClass += "bg-[#5F63F2] text-white shadow-sm hover:bg-[#5054E3]";
            } else if (c.status === "normal-highlight") {
              itemClass += "bg-blue-500/10 text-blue-500 dark:bg-[#5F63F2]/10 dark:text-[#7C80FF] border border-blue-500/20 dark:border-[#5F63F2]/20";
            } else {
              itemClass += "text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/40";
            }

            return (
              <div key={idx} className="flex justify-center">
                <button className={itemClass}>
                  {c.day}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-5 flex items-center justify-start gap-4 flex-none border-t border-zinc-100 pt-4 dark:border-zinc-800/40 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 dark:bg-[#00E5A3]" />
          High Collection
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500 dark:bg-[#FF2D55]" />
          Overdue Due
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#5F63F2]" />
          Normal
        </span>
      </div>
    </div>
  );
};
