"use client";
import React, { useState, useRef, useEffect } from "react";
import { Calendar as CalendarIcon, SlidersHorizontal, ChevronDown, Check, Download, FileSpreadsheet, FileText } from "lucide-react";
import { OverviewTab } from "../types/overview.types";

interface OverviewHeaderProps {
  activeTab: OverviewTab;
  setActiveTab: (tab: OverviewTab) => void;
}

export const OverviewHeader: React.FC<OverviewHeaderProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs: OverviewTab[] = ["Overview", "Analytics", "Performance", "AI Insights"];
  
  // Interactive States
  const [timeRange, setTimeRange] = useState("Last 30 Days");
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  
  const timeRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (timeRef.current && !timeRef.current.contains(event.target as Node)) {
        setIsTimeDropdownOpen(false);
      }
      if (exportRef.current && !exportRef.current.contains(event.target as Node)) {
        setIsExportDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const timeRangeOptions = ["Today", "Last 7 Days", "Last 30 Days", "Last 90 Days", "YTD"];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-4 py-2.5 text-xs font-semibold tracking-wide transition-all duration-200 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0B0F19] ${
              activeTab === tab
                ? "bg-[#5F63F2] text-white shadow-md shadow-indigo-600/10"
                : "bg-zinc-100/80 hover:bg-zinc-200/80 border border-zinc-200/30 text-zinc-500 dark:bg-[#0E1322]/80 dark:hover:bg-[#161D30]/80 dark:border-zinc-800/30 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Action Filters Group */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Date Selector Dropdown */}
        <div className="relative" ref={timeRef}>
          <button
            id="time-range-trigger"
            type="button"
            aria-haspopup="true"
            aria-expanded={isTimeDropdownOpen}
            aria-controls="time-range-menu"
            onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
            className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-[#0E1322]/80 dark:text-zinc-200 dark:hover:bg-zinc-900/60 transition-all shadow-sm cursor-pointer active:scale-[0.97] select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0B0F19]"
          >
            <CalendarIcon className="h-4 w-4 text-zinc-400" />
            <span>{timeRange}</span>
            <ChevronDown className={`h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ${isTimeDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {isTimeDropdownOpen && (
            <div
              id="time-range-menu"
              aria-labelledby="time-range-trigger"
              className="absolute right-0 mt-1.5 w-44 rounded-xl border border-zinc-200/80 bg-white p-1 shadow-lg dark:border-zinc-800 dark:bg-[#0E1322] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            >
              {timeRangeOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setTimeRange(option);
                    setIsTimeDropdownOpen(false);
                  }}
                  className="flex items-center justify-between w-full text-left rounded-lg px-3.5 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/70 transition-colors cursor-pointer"
                >
                  <span>{option}</span>
                  {timeRange === option && <Check className="h-3.5 w-3.5 text-indigo-500" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Filter Button */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-[#0E1322]/80 dark:text-zinc-200 dark:hover:bg-zinc-900/60 transition-all shadow-sm cursor-pointer active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0B0F19]"
        >
          <SlidersHorizontal className="h-4 w-4 text-zinc-400" />
          <span>Filters</span>
        </button>

        {/* Export Dropdown */}
        <div className="relative" ref={exportRef}>
          <button
            id="export-trigger"
            type="button"
            aria-haspopup="true"
            aria-expanded={isExportDropdownOpen}
            aria-controls="export-menu"
            onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
            className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-[#0E1322]/80 dark:text-zinc-200 dark:hover:bg-zinc-900/60 transition-all shadow-sm cursor-pointer active:scale-[0.97] select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0B0F19]"
          >
            <Download className="h-4 w-4 text-zinc-400" />
            <span>Export</span>
          </button>

          {isExportDropdownOpen && (
            <div
              id="export-menu"
              aria-labelledby="export-trigger"
              className="absolute right-0 mt-1.5 w-48 rounded-xl border border-zinc-200/80 bg-white p-1 shadow-lg dark:border-zinc-800 dark:bg-[#0E1322] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            >
              <button
                type="button"
                onClick={() => setIsExportDropdownOpen(false)}
                className="flex items-center gap-2.5 w-full text-left rounded-lg px-3.5 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/70 transition-colors cursor-pointer"
              >
                <FileSpreadsheet className="h-4 w-4 text-emerald-500" />
                <span>Export to CSV (.csv)</span>
              </button>
              <button
                type="button"
                onClick={() => setIsExportDropdownOpen(false)}
                className="flex items-center gap-2.5 w-full text-left rounded-lg px-3.5 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/70 transition-colors cursor-pointer"
              >
                <FileText className="h-4 w-4 text-red-500" />
                <span>Export to PDF (.pdf)</span>
              </button>
              <button
                type="button"
                onClick={() => setIsExportDropdownOpen(false)}
                className="flex items-center gap-2.5 w-full text-left rounded-lg px-3.5 py-2.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900/70 transition-colors cursor-pointer"
              >
                <Download className="h-4 w-4 text-indigo-500" />
                <span>Save Report Layout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
