"use client";

import React, { useMemo, useState } from "react";
import { Star } from "lucide-react";

type TeamFilter = "All Teams" | "Collections" | "Underwriting" | "Support";

type TeamRow = {
  agent: string;
  role: string;
  team: string;
  assigned: number;
  collected: number;
  amount: string;
  successRate: string;
  stars: number;
  active?: boolean;
};

type TargetItem = {
  label: string;
  value: string;
  progress: number;
};

type WeeklyStat = {
  label: string;
  value: string;
  tone: "green" | "blue" | "violet" | "rose";
};

type SlaItem = {
  label: string;
  value: string;
  tone: "green" | "amber";
};

const teamFilters: TeamFilter[] = ["All Teams", "Collections", "Underwriting", "Support"];

const teamRows: TeamRow[] = [
  {
    agent: "Amit Kumar",
    role: "Senior Agent",
    team: "Collections A",
    assigned: 156,
    collected: 148,
    amount: "$89,400",
    successRate: "94.9%",
    stars: 0,
  },
  {
    agent: "Priya Sharma",
    role: "Agent",
    team: "Collections B",
    assigned: 142,
    collected: 131,
    amount: "$76,200",
    successRate: "92.3%",
    stars: 1,
    active: true,
  },
  {
    agent: "Rahul Verma",
    role: "Agent",
    team: "Collections A",
    assigned: 128,
    collected: 112,
    amount: "$64,800",
    successRate: "87.5%",
    stars: 2,
  },
  {
    agent: "Sneha Gupta",
    role: "Junior Agent",
    team: "Collections B",
    assigned: 98,
    collected: 79,
    amount: "$42,100",
    successRate: "80.6%",
    stars: 3,
  },
];

const targetItems: TargetItem[] = [
  { label: "Disbursements", value: "$425K / $500K", progress: 85 },
  { label: "Collections", value: "$287K / $300K", progress: 95 },
  { label: "Applications", value: "47 / 50", progress: 94 },
];

const weeklyStats: WeeklyStat[] = [
  { label: "Loans Disbursed", value: "247", tone: "green" },
  { label: "Total Value", value: "$2.1M", tone: "blue" },
  { label: "EMIs Collected", value: "892", tone: "violet" },
  { label: "Escalations", value: "18", tone: "rose" },
];

const slaItems: SlaItem[] = [
  { label: "Application Review", value: "98.2%", tone: "green" },
  { label: "Document Verification", value: "96.8%", tone: "green" },
  { label: "Disbursement Time", value: "89.4%", tone: "amber" },
  { label: "Query Resolution", value: "94.1%", tone: "green" },
];

const avatarGradients = [
  "from-sky-500 to-cyan-400",
  "from-rose-500 to-orange-300",
  "from-amber-500 to-yellow-300",
  "from-violet-500 to-fuchsia-400",
];

const teamBadgeStyles: Record<string, string> = {
  "Collections A": "border-sky-600/40 bg-sky-950/50 text-sky-400",
  "Collections B": "border-cyan-600/40 bg-cyan-950/50 text-cyan-400",
};

const toneClasses: Record<SlaItem["tone"], string> = {
  green: "border-emerald-600/30 bg-emerald-950/40 text-emerald-400",
  amber: "border-amber-600/30 bg-amber-950/40 text-amber-400",
};

const weeklyToneClasses: Record<WeeklyStat["tone"], string> = {
  green: "bg-emerald-950/40 text-emerald-400",
  blue: "bg-blue-950/40 text-blue-400",
  violet: "bg-violet-950/40 text-violet-400",
  rose: "bg-rose-950/40 text-rose-400",
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const TeamPerformanceSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<TeamFilter>("All Teams");

  const visibleRows = useMemo(() => {
    if (activeFilter === "All Teams") {
      return teamRows;
    }

    return teamRows.filter((row) => row.team.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="space-y-6 text-white">
      <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Team Performance</h2>
            <p className="text-sm text-zinc-300">Collection agent performance metrics</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {teamFilters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#6C63FF] text-white shadow-sm"
                      : "bg-black text-zinc-300 hover:bg-zinc-900"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-[#0A0E1A]">
          <div className="grid grid-cols-[minmax(220px,1.7fr)_minmax(150px,1fr)_repeat(5,minmax(110px,0.9fr))] border-b border-zinc-700/80 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">
            <span>Agent</span>
            <span>Team</span>
            <span className="text-center">Assigned</span>
            <span className="text-center">Collected</span>
            <span className="text-center">Amount</span>
            <span className="text-center">Success Rate</span>
            <span className="text-center">Performance</span>
          </div>

          {visibleRows.length > 0 ? visibleRows.map((row, index) => (
            <div
              key={row.agent}
              className={`grid grid-cols-[minmax(220px,1.7fr)_minmax(150px,1fr)_repeat(5,minmax(110px,0.9fr))] items-center px-5 py-4 text-sm ${
                row.active ? "bg-[#1A1529]" : "border-b border-zinc-800/80 last:border-b-0"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]}`}>
                  <span className="text-xs font-bold text-white">{initials(row.agent)}</span>
                </div>
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold text-white">{row.agent}</p>
                  <p className="text-xs text-zinc-300">{row.role}</p>
                </div>
              </div>

              <div>
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${
                    teamBadgeStyles[row.team] ?? "border-teal-600/40 bg-teal-950/50 text-teal-400"
                  }`}
                >
                  {row.team}
                </span>
              </div>

              <div className="text-center text-lg font-semibold text-zinc-100">{row.assigned}</div>
              <div className="text-center text-lg font-semibold text-zinc-100">{row.collected}</div>
              <div className="text-center text-lg font-semibold text-zinc-100">{row.amount}</div>
              <div
                className={`text-center text-lg font-semibold ${
                  Number.parseFloat(row.successRate) >= 90
                    ? "text-emerald-400"
                    : Number.parseFloat(row.successRate) >= 80
                      ? "text-amber-400"
                      : "text-red-400"
                }`}
              >
                {row.successRate}
              </div>
              <div className="flex items-center justify-center gap-1.5 text-zinc-300">
                {Array.from({ length: 3 }).map((_, starIndex) => (
                  <Star
                    key={`${row.agent}-star-${starIndex}`}
                    className={`h-4 w-4 ${starIndex < row.stars ? "fill-current text-zinc-200" : "text-zinc-500"}`}
                  />
                ))}
              </div>
            </div>
          )) : (
            <div className="px-5 py-10 text-center text-sm text-zinc-400">
              No agents match this team filter.
            </div>
          )}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight text-white">Daily Targets</h3>
            <div className="space-y-4">
              {targetItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="font-medium text-zinc-300">{item.label}</span>
                    <span className="font-semibold text-white">{item.value}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-zinc-800">
                    <div className="h-1.5 rounded-full bg-[#7C6DFF]" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <h3 className="text-xl font-semibold tracking-tight text-white">Weekly Summary</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {weeklyStats.map((item) => (
              <div key={item.label} className={`rounded-2xl px-4 py-5 text-center ${weeklyToneClasses[item.tone]}`}>
                <p className="text-3xl font-semibold tracking-tight">{item.value}</p>
                <p className="mt-1 text-xs font-medium text-white/90">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <h3 className="text-xl font-semibold tracking-tight text-white">SLA Compliance</h3>
          <div className="mt-6 space-y-5">
            {slaItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4">
                <span className="text-sm text-zinc-300">{item.label}</span>
                <span className={`rounded-full border px-3 py-1 text-sm font-semibold ${toneClasses[item.tone]}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
