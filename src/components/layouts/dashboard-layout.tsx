"use client";

import React, { useState } from "react";
import { Bell, Shield, User, Menu } from "lucide-react";
import Sidebar from "@/features/navigation/components/sidebar";
import { useAuth } from "@/providers/auth-provider";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, login } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Helper to toggle role for testing (since auth is mock)
  const toggleRole = () => {
    if (!user) return;
    const nextRole = user.role === "admin" ? "employee" : "admin";
    login(nextRole);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans">
      {/* Sidebar navigation column */}
      <Sidebar isCollapsed={isCollapsed} />

      {/* Main content workspace column */}
      <div className="flex flex-1 flex-col overflow-hidden min-w-0">
        
        {/* Workspace Top Bar Header */}
        <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-black">
          <div className="flex items-center gap-4 text-sm font-medium">
            {/* Sidebar toggle button (matching three horizontal lines) */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 transition-colors outline-none"
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 dark:text-zinc-400">Portal</span>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                Dashboard Overview
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Premium Role Toggler (Dev/Admin Tool) */}
            {process.env.NODE_ENV === "development" && user && (
              <button
                onClick={toggleRole}
                title="Click to toggle user role for testing"
                className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 shadow-sm"
              >
                {user.role === "admin" ? (
                  <Shield className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                ) : (
                  <User className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                )}
                <span>Role: {user.role === "admin" ? "Administrator" : "Employee"}</span>
              </button>
            )}

            {/* Notification Badge Icon */}
            <button
              aria-label="Notifications"
              className="relative rounded-full p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 transition-colors"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-600 ring-2 ring-white dark:ring-black" />
            </button>
          </div>
        </header>

        {/* Dynamic page content */}
        <main className="flex-1 overflow-y-auto bg-zinc-50/50 p-6 md:p-8 dark:bg-zinc-950/30">
          <div className="mx-auto max-w-5xl space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
