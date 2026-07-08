"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { mockFetchOverviewStats, mockFetchRecentApplications, mockApproveApplicationApi } from "../services";
import type { RecentApplication } from "../types/overview.types";

export const useOverviewStatsQuery = () => {
  return useQuery({
    queryKey: ["overview-stats"],
    queryFn: mockFetchOverviewStats,
  });
};

export const useRecentApplicationsQuery = () => {
  return useQuery({
    queryKey: ["recent-applications"],
    queryFn: mockFetchRecentApplications,
  });
};

export const useApproveApplicationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: mockApproveApplicationApi,
    onSuccess: (_data, id) => {
      queryClient.setQueryData(
        ["recent-applications"],
        (old: RecentApplication[] | undefined) => {
          if (!old) return old;
          return old.map((app) => (app.id === id ? { ...app, status: "APPROVED" } : app));
        }
      );
    },
  });
};
