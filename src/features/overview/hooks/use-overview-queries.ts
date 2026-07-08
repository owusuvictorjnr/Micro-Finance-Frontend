"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchOverviewStats, fetchRecentApplications, approveApplicationApi } from "../services";
import type { RecentApplication } from "../types/overview.types";

export const useOverviewStatsQuery = () => {
  return useQuery({
    queryKey: ["overview-stats"],
    queryFn: fetchOverviewStats,
  });
};

export const useRecentApplicationsQuery = () => {
  return useQuery({
    queryKey: ["recent-applications"],
    queryFn: fetchRecentApplications,
  });
};

export const useApproveApplicationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: approveApplicationApi,
    onSuccess: (_data, id) => {
      queryClient.setQueryData(
        ["recent-applications"],
        (old: RecentApplication[] | undefined) =>
          old?.map((app) => (app.id === id ? { ...app, status: "APPROVED" } : app))
      );
    },
  });
};
