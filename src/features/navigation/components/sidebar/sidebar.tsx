"use client";

import React, { useState, useMemo } from "react";
import { Search, Landmark } from "lucide-react";
import { useNavigation } from "../../hooks/use-navigation";
import SidebarGroup from "../sidebar-group";
import SidebarFooter from "../sidebar-footer";

interface SidebarProps {
  isCollapsed?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed = false }) => {
  const { navigationGroups, isLoading } = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter groups and items based on the search query
  const filteredGroups = useMemo(() => {
    if (!searchQuery.trim()) return navigationGroups;

    const query = searchQuery.toLowerCase();
    return navigationGroups
      .map((group) => {
        const matchingItems = group.items.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            item.children?.some((child) => child.title.toLowerCase().includes(query))
        );
        return {
          ...group,
          items: matchingItems,
        };
      })
      .filter((group) => group.items.length > 0);
  }, [navigationGroups, searchQuery]);

  return (
    <aside className={`flex h-full flex-col border-r border-zinc-200 bg-white dark:border-zinc-800/60 dark:bg-[#0B0F19] transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
      {/* Sidebar Header / Branding (Matching screenshots) */}
      <div className={`flex h-16 items-center border-b border-zinc-200 dark:border-zinc-800/60 ${isCollapsed ? "justify-center px-0" : "gap-3 px-6"}`}>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
          <Landmark className="h-5 w-5" />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col">
            <span className="text-sm font-bold text-zinc-950 dark:text-zinc-50 tracking-tight leading-tight">
              LoanProX
            </span>
            <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none mt-0.5">
              Micro-Loan & BNPL
            </span>
          </div>
        )}
      </div>

      {/* Mini Navigation Search Bar */}
      {!isCollapsed && (
        <div className="px-4 py-3 bg-white dark:bg-[#0B0F19]">
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-zinc-400 dark:text-zinc-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search menu..."
              aria-label="Search menu"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 py-1.5 pl-9 pr-4 text-xs text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 hover:bg-zinc-50 focus:border-zinc-400 focus:bg-white dark:border-zinc-800/60 dark:bg-[#1E2538]/30 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:hover:bg-zinc-900/50 dark:focus:border-zinc-700 dark:focus:bg-zinc-900"
            />
          </div>
        </div>
      )}

      {/* Navigation Groups List */}
      <nav className={`flex-1 overflow-y-auto no-scrollbar py-3 space-y-4 ${isCollapsed ? "px-1 overflow-x-visible" : "px-2"}`}>
        {isLoading ? (
          /* Skeleton Loader */
          <div className="space-y-6 px-2">
            {[1, 2].map((g) => (
              <div key={g} className="space-y-3">
                {!isCollapsed && <div className="h-3 w-20 rounded bg-zinc-100 dark:bg-zinc-900" />}
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`rounded-lg bg-zinc-50 dark:bg-zinc-900/40 ${isCollapsed ? "h-12 w-12 mx-auto" : "h-10"}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : filteredGroups.length > 0 ? (
          filteredGroups.map((group, index) => (
            <SidebarGroup key={group.title || index} group={group} isCollapsed={isCollapsed} />
          ))
        ) : (
          !isCollapsed && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <span className="text-xs text-zinc-400 dark:text-zinc-500">
                No menu items found
              </span>
            </div>
          )
        )}
      </nav>

      {/* Footer Area */}
      <SidebarFooter isCollapsed={isCollapsed} />
    </aside>
  );
};

export default Sidebar;
