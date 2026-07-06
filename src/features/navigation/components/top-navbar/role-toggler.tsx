"use client";

import React from "react";
import { Shield, User as UserIcon } from "lucide-react";
import { User } from "@/providers/auth-provider";

export interface RoleTogglerProps {
  user: User;
  onToggleRole: () => void;
}

export const RoleToggler: React.FC<RoleTogglerProps> = ({ user, onToggleRole }) => {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <button
      onClick={onToggleRole}
      type="button"
      title="Click to toggle user role for testing"
      className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 shadow-sm"
    >
      {user.role === "admin" ? (
        <Shield className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
      ) : (
        <UserIcon className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
      )}
      <span>Role: {user.role === "admin" ? "Administrator" : "Employee"}</span>
    </button>
  );
};
