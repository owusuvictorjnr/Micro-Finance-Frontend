"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogOut, ChevronDown, Settings, Sliders } from "lucide-react";
import { useAuth } from "@/providers/auth-provider";

interface SidebarFooterProps {
  isCollapsed?: boolean;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ isCollapsed = false }) => {
  const { user, logout, isLoading } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);

  if (isLoading || !user) {
    return (
      <div className={`flex animate-pulse items-center gap-3 border-t border-zinc-200 p-4 dark:border-zinc-800/60 ${isCollapsed ? "justify-center" : ""}`}>
        <div className="h-10 w-10 shrink-0 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        {!isCollapsed && (
          <div className="flex-1 space-y-2 py-1">
            <div className="h-3 rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-2 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800" />
          </div>
        )}
      </div>
    );
  }

  // Get initials for profile fallback
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const menuOptions = (
    <>
      <Link
        href="/profile"
        className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900/50 dark:hover:text-zinc-50 transition-colors"
      >
        <Settings className="h-4 w-4 text-zinc-400" />
        <span>My Profile</span>
      </Link>
      
      <Link
        href="/settings"
        className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900/50 dark:hover:text-zinc-50 transition-colors"
      >
        <Sliders className="h-4 w-4 text-zinc-400" />
        <span>Preferences</span>
      </Link>

      <div className="my-1 border-t border-zinc-200/50 dark:border-zinc-800/50" />

      <button
        onClick={() => logout()}
        className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-950/20 dark:hover:text-red-300 transition-colors"
      >
        <LogOut className="h-4 w-4" />
        <span>Logout</span>
      </button>
    </>
  );

  return (
    <div className={`relative border-t border-zinc-200 p-4 dark:border-zinc-800/60 bg-white dark:bg-[#0B0F19] flex flex-col gap-1 transition-all duration-300 ${isCollapsed ? "items-center" : ""}`}>
      {/* Expanded menu options list */}
      {isExpanded && (
        isCollapsed ? (
          /* Floating popover wrapper for collapsed state */
          <div className="absolute bottom-16 left-4 z-50 w-48 rounded-lg border border-zinc-200 bg-white p-1.5 shadow-lg dark:border-zinc-800/80 dark:bg-[#0B0F19] animate-in fade-in slide-in-from-bottom-2 duration-200 flex flex-col gap-1">
            {menuOptions}
          </div>
        ) : (
          /* Inline wrapper for expanded state */
          <div className="flex flex-col gap-1 mb-2 bg-zinc-50/50 rounded-lg p-1.5 dark:bg-[#1E2538]/20 border border-zinc-100 dark:border-zinc-800/60 animate-in fade-in slide-in-from-bottom-2 duration-200">
            {menuOptions}
          </div>
        )
      )}

      {/* Trigger block */}
      <button
        type="button"
        onClick={handleToggle}
        aria-haspopup="menu"
        aria-expanded={isExpanded}
        className={`flex items-center justify-between w-full hover:bg-zinc-50 dark:hover:bg-[#1E2538]/50 p-1 rounded-lg transition-colors text-left outline-none ${isCollapsed ? "justify-center p-0.5 rounded-full" : ""}`}
        title={isCollapsed ? `${user.name} (Click for Menu)` : undefined}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-900 dark:bg-zinc-900 dark:text-white shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            {user.avatarUrl ? (
              <Image
                src={user.avatarUrl}
                alt={user.name}
                width={40}
                height={40}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              initials
            )}
          </div>
          {!isCollapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="truncate text-sm font-semibold text-zinc-900 dark:text-white leading-tight">
                {user.name}
              </span>
              <span className="truncate text-xs text-zinc-400 dark:text-zinc-400 leading-none mt-0.5">
                {user.role === "admin" ? "Admin" : "Collector"}
              </span>
            </div>
          )}
        </div>

        {!isCollapsed && (
          <ChevronDown
            className={`h-4 w-4 text-zinc-400 dark:text-zinc-200 transition-transform duration-200 shrink-0 ${
              isExpanded ? "rotate-180 text-zinc-700 dark:text-white" : ""
            }`}
          />
        )}
      </button>
    </div>
  );
};

export default SidebarFooter;
