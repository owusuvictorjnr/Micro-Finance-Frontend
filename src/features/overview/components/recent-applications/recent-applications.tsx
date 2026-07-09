"use client";

import React from "react";
import { useRecentApplicationsQuery } from "../../hooks/use-overview-queries";
import { RecentApplicationsTable } from "./recent-applications-table";

interface RecentApplicationsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const RecentApplications: React.FC<RecentApplicationsProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const { data: applications = [], isLoading } = useRecentApplicationsQuery();

  // Handle Search Filter
  const filteredApplications = applications.filter(
    (app) =>
      app.borrower.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-[#0E1322]/80 lg:col-span-2 flex flex-col transition-colors">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-0.5">
          <h3 className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
            Recent Loan Applications
          </h3>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
            Latest applications requiring review
          </p>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search recent loan applications"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-1.5 text-xs text-zinc-800 outline-none focus:border-[#5F63F2] focus:bg-white dark:border-zinc-800 dark:bg-[#0B0F19] dark:text-zinc-200 dark:focus:border-[#5F63F2] dark:focus:bg-[#0B0F19] transition-colors shadow-inner w-44"
          />
          <button type="button" className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-[#0B0F19] dark:text-zinc-300 dark:hover:bg-zinc-800/60 transition-colors shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0E1322]">
            <span>View All</span>
          </button>
        </div>
      </div>

      {/* Table Component */}
      <RecentApplicationsTable
        applications={filteredApplications}
        isLoading={isLoading}
        isFiltered={searchQuery !== ""}
      />
    </div>
  );
};
