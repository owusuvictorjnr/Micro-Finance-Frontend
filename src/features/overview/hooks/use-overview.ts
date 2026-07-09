"use client";

import { useState } from "react";
import { OverviewTab, PerformanceFilter } from "../types/overview.types";

export const useOverview = () => {
  const [activeTab, setActiveTab] = useState<OverviewTab>("Overview");
  const [isAlertDismissed, setIsAlertDismissed] = useState(false);
  const [performanceFilter, setPerformanceFilter] = useState<PerformanceFilter>("6M");
  const [searchQuery, setSearchQuery] = useState("");

  return {
    activeTab,
    setActiveTab,
    isAlertDismissed,
    setIsAlertDismissed,
    performanceFilter,
    setPerformanceFilter,
    searchQuery,
    setSearchQuery,
  };
};
