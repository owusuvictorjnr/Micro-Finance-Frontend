"use client";

import { useMemo } from "react";
import { useAuth } from "@/providers/auth-provider";
import { navigationConfig } from "../config/navigation.config";
import { NavigationGroup } from "../types/navigation.types";
import { hasPermission } from "@/lib/permissions/rbac";

export const useNavigation = (): {
  navigationGroups: NavigationGroup[];
  isLoading: boolean;
} => {
  const { user, isLoading } = useAuth();

  const navigationGroups = useMemo(() => {
    if (!user) return [];

    return navigationConfig
      .map((group) => {
        // Filter items in the group that the user is authorized to see
        const authorizedItems = group.items
          .filter((item) => hasPermission(user.role, item.roles))
          .map((item) => {
            // Filter children if present
            if (item.children) {
              const authorizedChildren = item.children.filter((child) =>
                hasPermission(user.role, child.roles)
              );
              const rest = { ...item };
              delete rest.children;
              return {
                ...rest,
                ...(authorizedChildren.length > 0 ? { children: authorizedChildren } : {}),
              };
            }
            return item;
          });

        return {
          ...group,
          items: authorizedItems,
        };
      })
      // Remove any groups that are empty after filtering
      .filter((group) => group.items.length > 0);
  }, [user]);

  return {
    navigationGroups,
    isLoading,
  };
};
