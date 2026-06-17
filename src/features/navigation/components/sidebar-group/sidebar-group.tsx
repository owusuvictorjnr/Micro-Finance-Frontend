"use client";

import React from "react";
import SidebarItem from "../sidebar-item";
import { NavigationGroup } from "../../types/navigation.types";

interface SidebarGroupProps {
  group: NavigationGroup;
  isCollapsed?: boolean;
}

const SidebarGroup: React.FC<SidebarGroupProps> = ({ group, isCollapsed = false }) => {
  return (
    <div className="flex flex-col gap-1">
      {group.title && !isCollapsed && (
        <span className="px-3.5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          {group.title}
        </span>
      )}
      <div className={`flex flex-col gap-0.5 ${isCollapsed ? "mt-0" : "mt-1.5"}`}>
        {group.items.map((item) => (
          <SidebarItem key={item.href ?? item.title} item={item} isCollapsed={isCollapsed} />
        ))}
      </div>
    </div>
  );
};

export default SidebarGroup;
