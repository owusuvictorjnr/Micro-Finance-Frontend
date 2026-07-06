"use client";

import React from "react";
import { Menu } from "lucide-react";
import { User } from "@/providers/auth-provider";
import { ThemeToggle } from "./theme-toggle";
import { NotificationButton } from "./notification-button";
import { NewLoanButton } from "./new-loan-button";
import { RoleToggler } from "./role-toggler";

export interface TopNavbarProps {
  user: User;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
  onToggleRole: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  user,
  isCollapsed,
  onToggleCollapse,
  theme,
  onToggleTheme,
  onToggleRole,
}) => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-[#0B0F19] transition-colors duration-300">
      <div className="flex items-center gap-4 text-sm font-medium">
        {/* Sidebar toggle button (matching three horizontal lines) */}
        <button
          onClick={onToggleCollapse}
          type="button"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!isCollapsed}
          className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-50 transition-colors outline-none"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center gap-3.5">
        {/* Premium Role Toggler (Dev/Admin Tool) */}
        <RoleToggler user={user} onToggleRole={onToggleRole} />

        {/* Theme Toggle Button */}
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />

        {/* Notification Badge Icon */}
        <NotificationButton />

        {/* New Loan Action Button */}
        <NewLoanButton />
      </div>
    </header>
  );
};
