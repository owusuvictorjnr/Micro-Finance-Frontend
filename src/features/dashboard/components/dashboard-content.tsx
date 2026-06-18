"use client";

import { useAuth } from "@/providers/auth-provider";
import {
  Users,
  PiggyBank,
  TrendingUp,
  HandCoins,
  ArrowUpRight,
  ArrowDownLeft,
  CircleCheck,
  PlusCircle,
  Clock,
  Lock,
} from "lucide-react";

export default function DashboardContent() {
  const { user, isLoading, login } = useAuth();

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
        <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-xl dark:border-zinc-800 dark:bg-[#0B0F19] transition-colors duration-300">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400">
            <Lock className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Sign In to LoanProX
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Please authenticate to access the microfinance management portal.
          </p>

          {process.env.NODE_ENV === "development" ? (
            <div className="mt-8 space-y-3">
              <button
                onClick={() => void login("admin")}
                className="flex w-full items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-700 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 group text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400 font-bold">
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
                className="flex w-full items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-700 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 group text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 font-bold">
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
            <div className="mt-8 rounded-xl bg-zinc-50 p-4 text-left dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800">
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

  const isAdmin = user.role === "admin";

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Welcome back, {user.name}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Here is an overview of the microfinance activities for today.
        </p>
      </div>

      {/* Dynamic Statistics Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Stat Card 1 */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-black">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Total Customers
            </span>
            <Users className="h-5 w-5 text-zinc-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-semibold tracking-tight">
              {isAdmin ? "1,248" : "84"}
            </span>
            <span className="text-xs font-medium text-green-600 flex items-center gap-0.5">
              <TrendingUp className="h-3 w-3" /> +12%
            </span>
          </div>
          <p className="mt-1 text-[11px] text-zinc-400">
            {isAdmin ? "Across all active branches" : "Assigned directly to you"}
          </p>
        </div>

        {/* Stat Card 2 */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-black">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Total Savings Deposits
            </span>
            <PiggyBank className="h-5 w-5 text-zinc-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-semibold tracking-tight">
              {isAdmin ? "GH₵ 342,850" : "GH₵ 12,450"}
            </span>
            <span className="text-xs font-medium text-green-600 flex items-center gap-0.5">
              <TrendingUp className="h-3 w-3" /> +8.4%
            </span>
          </div>
          <p className="mt-1 text-[11px] text-zinc-400">
            {isAdmin ? "System wide balance" : "Your current client holdings"}
          </p>
        </div>

        {/* Stat Card 3 */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-black">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Collections Today
            </span>
            <CircleCheck className="h-5 w-5 text-green-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-semibold tracking-tight">
              {isAdmin ? "GH₵ 18,240" : "GH₵ 1,840"}
            </span>
            <span className="text-xs font-semibold text-zinc-400">Daily goal</span>
          </div>
          <p className="mt-1 text-[11px] text-zinc-400">
            {isAdmin ? "Aggregated daily transactions" : "92% of target collection"}
          </p>
        </div>

        {/* Stat Card 4 */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-black">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Active Loans
            </span>
            <HandCoins className="h-5 w-5 text-zinc-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-semibold tracking-tight">
              {isAdmin ? "74 (GH₵ 124K)" : "8 (GH₵ 14.5K)"}
            </span>
          </div>
          <p className="mt-1 text-[11px] text-zinc-400">
            {isAdmin ? "9 outstanding defaults" : "No defaulted client accounts"}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Section: Recent Transactions */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-black lg:col-span-2">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Recent Collections & Deposits
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Real-time feed of institutional funds movements.
          </p>
          <div className="mt-6 divide-y divide-zinc-100 dark:divide-zinc-800">
            {/* Transaction item 1 */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400">
                  <ArrowDownLeft className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    Emmanuel Boateng
                  </p>
                  <p className="text-xs text-zinc-500">Daily Susu Collection</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-green-600">+ GH₵ 50.00</p>
                <p className="text-[10px] text-zinc-400">2 mins ago</p>
              </div>
            </div>

            {/* Transaction item 2 */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    Amma Serwaa
                  </p>
                  <p className="text-xs text-zinc-500">Savings Account Withdrawal</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-red-600">- GH₵ 250.00</p>
                <p className="text-[10px] text-zinc-400">14 mins ago</p>
              </div>
            </div>

            {/* Transaction item 3 */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400">
                  <ArrowDownLeft className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    Kojo Antwi
                  </p>
                  <p className="text-xs text-zinc-500">Loan Repayment</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-green-600">+ GH₵ 1,200.00</p>
                <p className="text-[10px] text-zinc-400">45 mins ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Side Section: Actions & Metrics depending on role */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-black flex flex-col justify-between">
          <div>
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {isAdmin ? "Admin Controls" : "Quick Actions"}
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {isAdmin
                ? "Oversee critical pending requests."
                : "Submit registers or payments."}
            </p>

            {isAdmin ? (
              /* Admin Tasks List */
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-yellow-200 bg-yellow-50/50 p-3 dark:border-yellow-900/40 dark:bg-yellow-950/10">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-yellow-600" />
                    <span className="text-xs font-semibold text-yellow-800 dark:text-yellow-400">
                      4 Pending Loans
                    </span>
                  </div>
                  <button className="text-[10px] font-bold text-yellow-950 underline dark:text-yellow-300">
                    Review
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-zinc-500" />
                    <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      3 Collector Submissions
                    </span>
                  </div>
                  <button className="text-[10px] font-bold text-zinc-900 underline dark:text-zinc-300">
                    Approve
                  </button>
                </div>
              </div>
            ) : (
              /* Employee Quick Action Buttons */
              <div className="mt-6 space-y-2">
                <button className="flex w-full items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-sm">
                  <PlusCircle className="h-4 w-4" />
                  <span>Register New Customer</span>
                </button>
                <button className="flex w-full items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-900 transition-all duration-200 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800">
                  <HandCoins className="h-4 w-4" />
                  <span>New Loan Application</span>
                </button>
              </div>
            )}
          </div>

          <div className="mt-6 border-t border-zinc-200 pt-4 dark:border-zinc-800">
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span>System Health</span>
              <span className="font-semibold text-green-600">Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
