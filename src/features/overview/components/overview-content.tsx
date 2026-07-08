"use client";

import React from "react";
import { useAuth } from "@/providers/auth-provider";
import { Lock } from "lucide-react";
import { useOverview } from "../hooks/use-overview";
import {
  OverviewHeader,
  AiRiskAlert,
  KpiGrid,
  QuickIndicators,
  PortfolioPerformanceChart,
  LoanDistributionChart,
  RecentApplications,
  CreditScoring,
  RiskAlerts,
  QuickActions,
  TodayActivity,
  EmiCalendar,
  CollectionSummary,
} from ".";

export const OverviewContent = () => {
  const { user, isLoading, login } = useAuth();
  const {
    activeTab,
    setActiveTab,
    isAlertDismissed,
    setIsAlertDismissed,
    performanceFilter,
    setPerformanceFilter,
    searchQuery,
    setSearchQuery,
  } = useOverview();

  if (isLoading) {
    return (
      <div key="loading" className="flex h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900 dark:border-zinc-800 dark:border-t-zinc-400" />
      </div>
    );
  }

  if (!user) {
    return (
      <div key="login-card" className="flex min-h-[60vh] flex-col items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-8 text-center shadow-lg dark:border-zinc-800/80 dark:bg-[#0E1322]/80 transition-colors">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-[#5F63F2] text-white shadow-sm">
            <Lock className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Sign In to LoanProX
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Please authenticate to access the microfinance management portal.
          </p>

          {process.env.NODE_ENV === "development" ? (
            <div className="mt-8 space-y-3">
              <button
                onClick={() => void login("admin")}
                className="flex w-full items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm font-semibold text-zinc-700 transition-all duration-200 hover:bg-zinc-100/80 hover:text-zinc-950 dark:border-zinc-800 dark:bg-[#151B2E] dark:text-zinc-300 dark:hover:bg-[#1C253B] dark:hover:text-white group text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#5F63F2] text-white font-bold">
                    A
                  </span>
                  <span>Sign In as Administrator</span>
                </div>
                <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </button>

              <button
                onClick={() => void login("employee")}
                className="flex w-full items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm font-semibold text-zinc-700 transition-all duration-200 hover:bg-zinc-100/80 hover:text-zinc-950 dark:border-zinc-800 dark:bg-[#151B2E] dark:text-zinc-300 dark:hover:bg-[#1C253B] dark:hover:text-white group text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#10B981] text-white font-bold">
                    E
                  </span>
                  <span>Sign In as Employee / Collector</span>
                </div>
                <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </button>
            </div>
          ) : (
            <div className="mt-8 rounded-lg bg-zinc-50/50 p-4 text-left dark:bg-[#151B2E] border border-zinc-100 dark:border-zinc-800">
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
                Security Policy
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Direct client-side authentication is disabled in production. Authentication must be performed via server-side session provider or SSO integration.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Controls: Tabs and Filters */}
      <OverviewHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* AI Risk Alert Banner */}
      <AiRiskAlert isDismissed={isAlertDismissed} onDismiss={() => setIsAlertDismissed(true)} />

      {/* Row 1: KPI Stats Grid */}
      <KpiGrid />

      {/* Secondary Quick Indicators Grid */}
      <QuickIndicators />

      {/* Row 2: Charts Area */}
      <div className="grid gap-6 lg:grid-cols-3">
        <PortfolioPerformanceChart filter={performanceFilter} setFilter={setPerformanceFilter} />
        <LoanDistributionChart />
      </div>

      {/* Row 3: Admin Review Table & Credit Metrics */}
      <div className="grid gap-6 lg:grid-cols-3">
        <RecentApplications searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="space-y-6">
          <CreditScoring />
          <RiskAlerts />
        </div>
      </div>

      {/* Row 4: Quick Actions & Today's Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 h-full">
          <QuickActions />
        </div>
        <div className="lg:col-span-1 h-full">
          <TodayActivity />
        </div>
      </div>

      {/* Row 5: EMI Calendar & Collection Summary */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="h-full">
          <EmiCalendar />
        </div>
        <div className="h-full">
          <CollectionSummary />
        </div>
      </div>
    </div>
  );
};
