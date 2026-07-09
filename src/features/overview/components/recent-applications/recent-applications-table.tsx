"use client";

import React from "react";
import Image from "next/image";
import { RecentApplication } from "../../types/overview.types";
import { useApproveApplicationMutation } from "../../hooks/use-overview-queries";
import { formatCurrency } from "../../utils/formatters";
import {
  PendingIcon,
  ApprovedIcon,
  RejectedIcon,
  UnderReviewIcon,
} from "./icons";

interface RecentApplicationsTableProps {
  applications: RecentApplication[];
  isLoading: boolean;
  isFiltered?: boolean;
}

export const RecentApplicationsTable: React.FC<RecentApplicationsTableProps> = ({
  applications,
  isLoading,
  isFiltered = false,
}) => {
  const approveMutation = useApproveApplicationMutation();

  const getAiRating = (score: number) => {
    if (score >= 800) {
      return {
        letter: "A+",
        color:
          "bg-emerald-500/15 text-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-500/20",
      };
    }
    if (score >= 700) {
      return {
        letter: "A",
        color:
          "bg-emerald-500/15 text-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-500/20",
      };
    }
    if (score >= 600) {
      return {
        letter: "B",
        color:
          "bg-amber-500/15 text-amber-500 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-500/20",
      };
    }
    return {
      letter: "C",
      color:
        "bg-rose-500/15 text-rose-500 dark:bg-rose-500/10 dark:text-rose-400 border border-rose-500/20",
    };
  };

  const getTypeBadgeStyles = (type: string) => {
    const t = type.toUpperCase();
    if (t === "PERSONAL") {
      return "bg-sky-500/10 text-sky-600 border border-sky-500/20 dark:text-sky-400";
    }
    if (t === "BUSINESS") {
      return "bg-teal-500/10 text-teal-600 border border-teal-500/20 dark:text-teal-400";
    }
    return "bg-cyan-500/10 text-cyan-600 border border-cyan-500/20 dark:text-cyan-400";
  };

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider bg-zinc-500/5 dark:bg-black/35">
            <th className="py-4 pl-4 rounded-l-lg pr-2">BORROWER</th>
            <th className="py-4 px-2">AMOUNT</th>
            <th className="py-4 px-2">TYPE</th>
            <th className="py-4 px-2">AI SCORE</th>
            <th className="py-4 px-2">STATUS</th>
            <th className="py-4 pr-4 pl-2 rounded-r-lg text-right">ACTION</th>
          </tr>
        </thead>
        <tbody className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {isLoading ? (
            <tr>
              <td colSpan={6} className="py-12 text-center text-zinc-400 font-bold">
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-700 dark:border-zinc-800 dark:border-t-zinc-400" />
                  <span>Loading applications...</span>
                </div>
              </td>
            </tr>
          ) : applications.length > 0 ? (
            applications.map((app) => {
              const isMutating =
                approveMutation.isPending && approveMutation.variables === app.id;
              const aiRating = getAiRating(app.aiScore);
              const statusUpper = app.status.toUpperCase();

              return (
                <tr
                  key={app.id}
                  className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-800/10 transition-colors"
                >
                  {/* Borrower Profile */}
                  <td className="py-4 pl-4 pr-2">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-zinc-200 dark:ring-zinc-800/80">
                        {app.avatarUrl ? (
                          <Image
                            src={app.avatarUrl}
                            alt={app.borrower}
                            width={36}
                            height={36}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-sm font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                            {app.borrower.charAt(0)}
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                          {app.borrower}
                        </div>
                        <div className="text-xs text-zinc-400 dark:text-zinc-500 font-medium mt-0.5">
                          {app.id}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Amount & Term */}
                  <td className="py-4 px-2">
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                      {formatCurrency(app.amount)}
                    </div>
                    <div className="text-xs text-zinc-400 dark:text-zinc-500 font-medium mt-0.5">
                      {app.term}
                    </div>
                  </td>

                  {/* Type badge */}
                  <td className="py-4 px-2">
                    <span
                      className={`inline-block rounded px-2.5 py-1 text-xs font-bold tracking-wide ${getTypeBadgeStyles(
                        app.type
                      )}`}
                    >
                      {app.type.toUpperCase()}
                    </span>
                  </td>

                  {/* AI Score */}
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${aiRating.color}`}
                      >
                        {aiRating.letter}
                      </span>
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                        {app.aiScore}
                      </span>
                    </div>
                  </td>

                  {/* Status badge with mini-icon */}
                  <td className="py-4 px-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold border ${
                        statusUpper === "APPROVED"
                          ? "bg-emerald-500/5 text-emerald-600 border-emerald-500/20 dark:text-[#00E5A3]"
                          : statusUpper === "REJECTED"
                          ? "bg-rose-500/5 text-rose-600 border-rose-500/20 dark:text-[#EF4444]"
                          : statusUpper === "UNDER REVIEW"
                          ? "bg-amber-500/5 text-amber-600 border-amber-500/20 dark:text-[#F2994A]"
                          : "bg-amber-500/5 text-amber-600 border-amber-500/20 dark:text-[#F2994A]"
                      }`}
                    >
                      {statusUpper === "APPROVED" ? (
                        <ApprovedIcon />
                      ) : statusUpper === "REJECTED" ? (
                        <RejectedIcon />
                      ) : statusUpper === "UNDER REVIEW" ? (
                        <UnderReviewIcon />
                      ) : (
                        <PendingIcon />
                      )}
                      <span>{statusUpper}</span>
                    </span>
                  </td>

                  {/* Action button */}
                  <td className="py-4 pr-4 pl-2 text-right">
                    {statusUpper === "APPROVED" ? (
                      <button
                        type="button"
                        disabled
                        title="Disbursement is not implemented yet"
                        className="rounded-lg bg-emerald-500 px-4 py-1.5 text-xs font-bold text-white transition-colors shadow-sm border border-transparent opacity-50 cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0E1322]"
                      >
                        Disburse
                      </button>
                    ) : statusUpper === "REJECTED" ? (
                      <button
                        type="button"
                        disabled
                        title="Details view is not implemented yet"
                        className="rounded-lg border border-zinc-200/60 bg-zinc-800 px-4 py-1.5 text-xs font-bold text-white dark:border-zinc-800 dark:bg-[#1A2035] transition-colors shadow-sm border border-transparent opacity-50 cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0E1322]"
                      >
                        Details
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => approveMutation.mutate(app.id)}
                        disabled={isMutating}
                        className="rounded-lg border border-zinc-200/60 bg-zinc-800 px-4 py-1.5 text-xs font-bold text-white hover:bg-zinc-700 dark:border-zinc-800 dark:bg-[#1A2035] dark:hover:bg-[#252C48] transition-colors shadow-sm cursor-pointer disabled:opacity-50 flex items-center justify-center gap-1 ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0E1322]"
                      >
                        {isMutating ? (
                          <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        ) : (
                          "Review"
                        )}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6} className="py-8 text-center text-zinc-400 font-bold">
                {isFiltered
                  ? "No applications match your search."
                  : "No applications to display."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
