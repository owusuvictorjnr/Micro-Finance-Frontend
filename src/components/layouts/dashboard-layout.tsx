"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/features/navigation/components/sidebar";
import { TopNavbar } from "@/features/navigation/components/top-navbar";
import { useAuth } from "@/providers/auth-provider";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, login } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Sync theme with document class list
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark") || 
                   (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  };

  // Helper to toggle role for testing (since auth is mock)
  const toggleRole = () => {
    if (!user) return;
    const nextRole = user.role === "admin" ? "employee" : "admin";
    void login(nextRole);
  };

  if (!user) {
    return (
      <div className="min-h-screen w-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans">
        {children}
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans">
      {/* Sidebar navigation column */}
      <Sidebar isCollapsed={isCollapsed} />

      {/* Main content workspace column */}
      <div className="flex flex-1 flex-col overflow-hidden min-w-0">
        
        {/* Workspace Top Bar Header */}
        <TopNavbar
          user={user}
          isCollapsed={isCollapsed}
          onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
          theme={theme}
          onToggleTheme={toggleTheme}
          onToggleRole={toggleRole}
        />

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
