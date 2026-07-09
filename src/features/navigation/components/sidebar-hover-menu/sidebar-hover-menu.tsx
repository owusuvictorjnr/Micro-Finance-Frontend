"use client";

import React from "react";
import Link from "next/link";
import { NavigationItem } from "../../types/navigation.types";

interface SidebarHoverMenuProps {
  item: NavigationItem;
  isCollapsed: boolean;
  isHovered: boolean;
  onClose: () => void;
  pathname: string;
}

export const SidebarHoverMenu: React.FC<SidebarHoverMenuProps> = ({
  item,
  isCollapsed,
  isHovered,
  onClose,
  pathname,
}) => {
  if (!isCollapsed || !item.children || !isHovered) return null;

  const exactActiveChildHref = item.children.find(
    (c) => c.href === pathname,
  )?.href;

  return (
    <div className="absolute left-full ml-2 top-0 z-50 w-52 rounded-lg border border-zinc-200 bg-white p-1.5 shadow-lg dark:border-zinc-800/80 dark:bg-[#0B0F19] animate-in fade-in slide-in-from-left-2 duration-200 flex flex-col gap-1">
      {item.children.map((child) => {
        const isChildActive = exactActiveChildHref
          ? child.href === exactActiveChildHref
          : pathname === child.href || pathname.startsWith(child.href + "/");

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
            onClick={onClose}
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

export default SidebarHoverMenu;
