"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NavigationItem } from "../../types/navigation.types";

interface SidebarItemProps {
  item: NavigationItem;
  isCollapsed?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, isCollapsed = false }) => {
  const pathname = usePathname();
  const Icon = item.icon;

  // Check if any child of this item is active
  const hasActiveChild = item.children?.some((child) => {
    if (child.href === "/") {
      return pathname === "/";
    }
    return pathname === child.href || pathname.startsWith(child.href + "/");
  }) ?? false;

  // Keep track of explicit user toggles. If null, it defaults to the derived state of hasActiveChild.
  const [userCollapsed, setUserCollapsed] = useState<boolean | null>(null);

  // If user hasn't explicitly toggled, it's open if it has an active child. Otherwise, it follows user selection.
  const isOpen = userCollapsed !== null ? !userCollapsed : hasActiveChild;

  // A parent without children is active if pathname matches exactly.
  // The parent is also highlighted if any of its child items are active.
  const isActive = item.href ? (
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(item.href + "/")
  ) : hasActiveChild;

  const handleToggle = (e: React.MouseEvent) => {
    if (item.children && !isCollapsed) {
      e.preventDefault();
      setUserCollapsed(isOpen ? true : false);
    }
  };

  // Renders the sub-items underneath
  const renderChildren = () => {
    if (isCollapsed || !item.children || !isOpen) return null;

    return (
      <div className="mt-1.5 flex flex-col gap-1.5 pl-11 pr-2">
        {item.children.map((child) => {
          const isChildActive =
            pathname === child.href || pathname.startsWith(child.href + "/");

          if (child.disabled) {
            return (
              <span
                key={child.href}
                className="cursor-not-allowed px-3 py-1.5 text-xs font-medium text-zinc-400 opacity-60 dark:text-zinc-500"
              >
                {child.title}
              </span>
            );
          }

          return (
            <Link
              key={child.href}
              href={child.href}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 ${
                isChildActive
                  ? "text-indigo-600 font-semibold dark:text-indigo-400"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white"
              }`}
            >
              {child.title}
            </Link>
          );
        })}
      </div>
    );
  };

  // Main Item Header Wrapper (Link or Button)
  const itemContent = (
    <div className={`flex items-center justify-between w-full ${isCollapsed ? "justify-center" : ""}`}>
      <div className="flex items-center gap-3">
        <Icon
          className={`h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-105 ${
            isActive
              ? "text-white"
              : "text-zinc-500 group-hover:text-zinc-900 dark:text-zinc-200 dark:group-hover:text-white"
          }`}
        />
        {!isCollapsed && <span className="truncate">{item.title}</span>}
      </div>

      {/* Renders chevron for parent menu and badge for single items */}
      {!isCollapsed && (
        item.children ? (
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isActive
                ? "text-white"
                : "text-zinc-400 group-hover:text-zinc-700 dark:text-zinc-200 dark:group-hover:text-white"
            } ${isOpen ? "rotate-180" : ""}`}
          />
        ) : (
          item.badge !== undefined && (
            <span
              className={`flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-[10px] font-bold ${
                isActive
                  ? "bg-indigo-500 text-white"
                  : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              }`}
            >
              {item.badge}
            </span>
          )
        )
      )}
    </div>
  );

  return (
    <div className="w-full">
      {item.href ? (
        <Link
          href={item.href}
          title={isCollapsed ? item.title : undefined}
          className={`group flex items-center justify-between rounded-lg transition-all duration-200 ${
            isCollapsed
              ? `h-12 w-12 mx-auto justify-center ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-[#1E2538]/50 dark:hover:text-white"
                }`
              : `px-4 py-3 text-sm font-medium ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-[#1E2538]/50 dark:hover:text-white"
                }`
          }`}
        >
          {itemContent}
        </Link>
      ) : (
        <button
          type="button"
          aria-expanded={item.children ? isOpen : undefined}
          onClick={handleToggle}
          title={isCollapsed ? item.title : undefined}
          className={`group flex items-center justify-between rounded-lg transition-all duration-200 outline-none ${
            isCollapsed
              ? `h-12 w-12 mx-auto justify-center ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-[#1E2538]/50 dark:hover:text-white"
                }`
              : `w-full px-4 py-3 text-sm font-medium ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-[#1E2538]/50 dark:hover:text-white"
                }`
          }`}
        >
          {itemContent}
        </button>
      )}

      {renderChildren()}
    </div>
  );
};

export default SidebarItem;
