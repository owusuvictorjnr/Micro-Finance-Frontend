import { LucideIcon } from "lucide-react";
import { UserRole } from "@/providers/auth-provider";

export interface NavigationSubItem {
  title: string;
  href: string;
  roles: UserRole[];
  disabled?: boolean;
}

export interface NavigationItem {
  title: string;
  href?: string;
  icon: LucideIcon;
  roles: UserRole[];
  badge?: string | number;
  disabled?: boolean;
  children?: NavigationSubItem[];
}

export interface NavigationGroup {
  title?: string;
  items: NavigationItem[];
}
