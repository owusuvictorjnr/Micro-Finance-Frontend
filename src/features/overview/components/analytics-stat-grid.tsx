"use client";

import React from "react";
import { ArrowUpRight, Clock3, RefreshCw, Wallet } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
}

const statCardClassName =
  "rounded-2xl border border-zinc-800 bg-[#0B1020] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]";

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, change }) => {
  return (
    <div className={statCardClassName}>
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-[#101937]">
          {icon}
        </div>
        <div className="space-y-0.5">
          <p className="text-xs text-zinc-300">{title}</p>
          <h3 className="text-2xl leading-none font-semibold tracking-tight text-white">{value}</h3>
          <p className="text-xs font-medium text-emerald-400">{change}</p>
        </div>
      </div>
    </div>
  );
};

export const AnalyticsStatGrid: React.FC = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        icon={<ArrowUpRight className="h-5 w-5 text-blue-400" />}
        title="Disbursement Rate"
        value="92.4%"
        change="+5.2% vs last month"
      />
      <StatCard
        icon={<Wallet className="h-5 w-5 text-emerald-400" />}
        title="Avg. Loan Size"
        value="$8,450"
        change="+$340 growth"
      />
      <StatCard
        icon={<Clock3 className="h-5 w-5 text-violet-400" />}
        title="Avg. Processing Time"
        value="2.4 hrs"
        change="-18 min faster"
      />
      <StatCard
        icon={<RefreshCw className="h-5 w-5 text-rose-400" />}
        title="Repeat Borrowers"
        value="38.7%"
        change="+4.1% increase"
      />
    </div>
  );
};
