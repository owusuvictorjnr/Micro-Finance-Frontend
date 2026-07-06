"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchOverviewStats, fetchRecentApplications, approveApplicationApi } from "../api";

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
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["recent-applications"] });
    },
  });
};
