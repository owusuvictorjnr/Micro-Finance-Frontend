import React from "react";
import { Bell } from "lucide-react";

export interface NotificationButtonProps {
  hasNotifications?: boolean;
  onClick?: () => void;
}

export const NotificationButton: React.FC<NotificationButtonProps> = ({
  hasNotifications = true,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Notifications"
      className="relative rounded-full border border-zinc-200 p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 transition-colors outline-none"
    >
      <Bell className="h-5 w-5" />
      {hasNotifications && (
        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600 ring-2 ring-white dark:ring-[#0B0F19]" />
      )}
    </button>
  );
};
