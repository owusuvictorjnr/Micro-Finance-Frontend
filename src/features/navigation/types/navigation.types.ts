import { LucideIcon } from "lucide-react";
import { UserRole } from "@/providers/auth-provider";

export interface NavigationSubItem {
  title: string;
  href: string;
  roles: UserRole[];
  disabled?: boolean | undefined;
}

export interface NavigationItem {
  title: string;
  href?: string | undefined;
  icon: LucideIcon;
  roles: UserRole[];
  badge?: string | number | undefined;
  disabled?: boolean | undefined;
  children?: NavigationSubItem[] | undefined;
}

export interface NavigationGroup {
  title?: string | undefined;
  items: NavigationItem[];
}
