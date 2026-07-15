"use client";

import React, { useState } from "react";
import { AnalyticsDistributionProduct } from "./analytics-distribution-product";
import { AnalyticsStatGrid } from "./analytics-stat-grid";
import { AnalyticsTrendDemographics, type LoanTrendRange } from "./analytics-trend-demographics";

export const AnalyticsContent: React.FC = () => {
  const [loanTrendTime, setLoanTrendTime] = useState<LoanTrendRange>("Last 6 Months");
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [regionFilter, setRegionFilter] = useState<"All" | "Urban" | "Rural">("All");

  return (
    <div className="space-y-6 text-white">
      <AnalyticsStatGrid />

      <AnalyticsTrendDemographics
        loanTrendTime={loanTrendTime}
        isTimeDropdownOpen={isTimeDropdownOpen}
        setIsTimeDropdownOpen={setIsTimeDropdownOpen}
        setLoanTrendTime={setLoanTrendTime}
      />

      <AnalyticsDistributionProduct regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
    </div>
  );
};
