"use client";

import React from "react";
import { ChevronDown, Download } from "lucide-react";
import {
  createTrendPath,
  getTrendX,
  getTrendY,
  type TrendChartMetrics,
} from "./analytics-chart-utils";
import { demographicsData, trendData } from "./analytics-content.data";

export type LoanTrendRange = "Last 3 Months" | "Last 6 Months" | "Last 12 Months";

const loanTrendOptions: LoanTrendRange[] = ["Last 3 Months", "Last 6 Months", "Last 12 Months"];

const trendMetrics: TrendChartMetrics = {
  width: 700,
  height: 320,
  paddingLeft: 35,
  paddingRight: 15,
  paddingTop: 16,
  paddingBottom: 34,
};

const demoWidth = 600;
const demoHeight = 320;
const demoPaddingLeft = 30;
const demoPaddingRight = 14;
const demoPaddingTop = 16;
const demoPaddingBottom = 34;

interface AnalyticsTrendDemographicsProps {
  loanTrendTime: LoanTrendRange;
  isTimeDropdownOpen: boolean;
  setIsTimeDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLoanTrendTime: React.Dispatch<React.SetStateAction<LoanTrendRange>>;
}

export const AnalyticsTrendDemographics: React.FC<AnalyticsTrendDemographicsProps> = ({
  loanTrendTime,
  isTimeDropdownOpen,
  setIsTimeDropdownOpen,
  setLoanTrendTime,
}) => {
  const selectedTrendData =
    loanTrendTime === "Last 3 Months"
      ? trendData.slice(-3)
      : loanTrendTime === "Last 6 Months"
        ? trendData.slice(-6)
        : trendData;

  const chartInnerWidth = trendMetrics.width - trendMetrics.paddingLeft - trendMetrics.paddingRight;
  const chartInnerHeight = trendMetrics.height - trendMetrics.paddingTop - trendMetrics.paddingBottom;
  const yMax = 550;
  const yMin = 250;
  const yRange = yMax - yMin;

  const applicationsPath = createTrendPath(selectedTrendData, "applications", trendMetrics, yMin, yMax);
  const approvalsPath = createTrendPath(selectedTrendData, "approvals", trendMetrics, yMin, yMax);
  const disbursementsPath = createTrendPath(selectedTrendData, "disbursements", trendMetrics, yMin, yMax);

  const getDemoBarX = (index: number) => {
    const columnWidth = (demoWidth - demoPaddingLeft - demoPaddingRight) / demographicsData.length;
    return demoPaddingLeft + index * columnWidth + columnWidth / 2;
  };

  const getDemoBarHeight = (value: number) => (value / 50) * (demoHeight - demoPaddingTop - demoPaddingBottom);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-3xl leading-none font-semibold tracking-tight text-white">Loan Volume Trend</h3>
            <p className="mt-2 text-base text-zinc-300">Applications vs Approvals vs Disbursements</p>
          </div>
          <div className="relative">
            <button
              id="loan-trend-time-trigger"
              type="button"
              aria-haspopup="menu"
              aria-expanded={isTimeDropdownOpen}
              aria-controls="loan-trend-time-menu"
              onClick={() => setIsTimeDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-black px-4 py-2 text-xs font-medium text-white"
            >
              {loanTrendTime}
              <ChevronDown className="h-4 w-4 text-zinc-400" />
            </button>

            {isTimeDropdownOpen && (
              <div
                id="loan-trend-time-menu"
                role="menu"
                aria-labelledby="loan-trend-time-trigger"
                className="absolute right-0 z-20 mt-2 w-40 rounded-xl border border-zinc-700 bg-[#080d1a] p-1 shadow-xl"
              >
                {loanTrendOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setLoanTrendTime(option);
                      setIsTimeDropdownOpen(false);
                    }}
                    className="block w-full rounded-lg px-3 py-2 text-left text-xs font-medium text-zinc-200 hover:bg-zinc-800"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 h-[300px] w-full">
          <svg viewBox={`0 0 ${trendMetrics.width} ${trendMetrics.height}`} className="h-full w-full select-none">
            <defs>
              <linearGradient id="analytics-app-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="analytics-approval-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="analytics-disbursement-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {[250, 300, 350, 400, 450, 500, 550].map((value) => {
              const y = getTrendY(
                value,
                trendMetrics.height,
                trendMetrics.paddingBottom,
                chartInnerHeight,
                yMin,
                yRange,
              );

              return (
                <g key={value}>
                  <line
                    x1={trendMetrics.paddingLeft}
                    y1={y}
                    x2={trendMetrics.width - trendMetrics.paddingRight}
                    y2={y}
                    stroke="#1F2937"
                    strokeDasharray="3"
                  />
                  <text x={trendMetrics.paddingLeft - 8} y={y + 4} fill="#9CA3AF" fontSize="11" textAnchor="end">
                    {value}
                  </text>
                </g>
              );
            })}

            <path
              d={`${applicationsPath} L ${getTrendX(selectedTrendData.length - 1, chartInnerWidth, trendMetrics.paddingLeft, selectedTrendData.length)},${trendMetrics.height - trendMetrics.paddingBottom} L ${getTrendX(0, chartInnerWidth, trendMetrics.paddingLeft, selectedTrendData.length)},${trendMetrics.height - trendMetrics.paddingBottom} Z`}
              fill="url(#analytics-app-gradient)"
            />
            <path
              d={`${approvalsPath} L ${getTrendX(selectedTrendData.length - 1, chartInnerWidth, trendMetrics.paddingLeft, selectedTrendData.length)},${trendMetrics.height - trendMetrics.paddingBottom} L ${getTrendX(0, chartInnerWidth, trendMetrics.paddingLeft, selectedTrendData.length)},${trendMetrics.height - trendMetrics.paddingBottom} Z`}
              fill="url(#analytics-approval-gradient)"
            />
            <path
              d={`${disbursementsPath} L ${getTrendX(selectedTrendData.length - 1, chartInnerWidth, trendMetrics.paddingLeft, selectedTrendData.length)},${trendMetrics.height - trendMetrics.paddingBottom} L ${getTrendX(0, chartInnerWidth, trendMetrics.paddingLeft, selectedTrendData.length)},${trendMetrics.height - trendMetrics.paddingBottom} Z`}
              fill="url(#analytics-disbursement-gradient)"
            />

            <path d={applicationsPath} fill="none" stroke="#6366F1" strokeWidth="2.5" />
            <path d={approvalsPath} fill="none" stroke="#14B8A6" strokeWidth="2.5" />
            <path d={disbursementsPath} fill="none" stroke="#F59E0B" strokeWidth="2.5" />

              {selectedTrendData.map((point, index) => (
              <g key={point.month}>
                <circle
                  cx={getTrendX(index, chartInnerWidth, trendMetrics.paddingLeft, selectedTrendData.length)}
                  cy={getTrendY(
                    point.applications,
                    trendMetrics.height,
                    trendMetrics.paddingBottom,
                    chartInnerHeight,
                    yMin,
                    yRange,
                  )}
                  r="4"
                  fill="#0B1020"
                  stroke="#6366F1"
                  strokeWidth="2"
                />
                <circle
                  cx={getTrendX(index, chartInnerWidth, trendMetrics.paddingLeft, selectedTrendData.length)}
                  cy={getTrendY(
                    point.approvals,
                    trendMetrics.height,
                    trendMetrics.paddingBottom,
                    chartInnerHeight,
                    yMin,
                    yRange,
                  )}
                  r="4"
                  fill="#0B1020"
                  stroke="#14B8A6"
                  strokeWidth="2"
                />
                <circle
                  cx={getTrendX(index, chartInnerWidth, trendMetrics.paddingLeft, selectedTrendData.length)}
                  cy={getTrendY(
                    point.disbursements,
                    trendMetrics.height,
                    trendMetrics.paddingBottom,
                    chartInnerHeight,
                    yMin,
                    yRange,
                  )}
                  r="4"
                  fill="#0B1020"
                  stroke="#F59E0B"
                  strokeWidth="2"
                />
              </g>
            ))}

            {selectedTrendData.map((point, index) => (
              <text
                key={`${point.month}-label`}
                x={getTrendX(index, chartInnerWidth, trendMetrics.paddingLeft, selectedTrendData.length)}
                y={trendMetrics.height - trendMetrics.paddingBottom + 20}
                fill="#94A3B8"
                fontSize="12"
                textAnchor="middle"
                fontWeight={600}
              >
                {point.month}
              </text>
            ))}

          </svg>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-end gap-4 text-xs text-zinc-300">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full border-2 border-[#6366F1]" />Applications
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full border-2 border-[#14B8A6]" />Approvals
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full border-2 border-[#F59E0B]" />Disbursements
          </span>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-3xl leading-none font-semibold tracking-tight text-white">Borrower Demographics</h3>
            <p className="mt-2 text-base text-zinc-300">Age distribution of borrowers</p>
          </div>
          <button
            type="button"
            aria-label="Download borrower demographics data"
            className="rounded-xl border border-zinc-700 bg-black p-2 text-zinc-200 transition-colors hover:bg-zinc-900"
          >
            <Download className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 h-[300px] w-full">
          <svg viewBox={`0 0 ${demoWidth} ${demoHeight}`} className="h-full w-full select-none">
            {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((value) => {
              const y = demoHeight - demoPaddingBottom - (value / 50) * (demoHeight - demoPaddingTop - demoPaddingBottom);

              return (
                <g key={value}>
                  <line
                    x1={demoPaddingLeft}
                    y1={y}
                    x2={demoWidth - demoPaddingRight}
                    y2={y}
                    stroke="#1F2937"
                    strokeDasharray={value === 0 ? "0" : "3"}
                  />
                  <text x={demoPaddingLeft - 8} y={y + 4} fill="#9CA3AF" fontSize="11" textAnchor="end">
                    {value}
                  </text>
                </g>
              );
            })}

            {demographicsData.map((item, index) => {
              const x = getDemoBarX(index) - 28;
              const maleHeight = getDemoBarHeight(item.male);
              const femaleHeight = getDemoBarHeight(item.female);
              const bottom = demoHeight - demoPaddingBottom;

              return (
                <g key={item.age}>
                  <rect x={x} y={bottom - maleHeight} width={56} height={maleHeight} fill="#6366F1" rx={4} />
                  <rect x={x} y={bottom - maleHeight - femaleHeight} width={56} height={femaleHeight} fill="#EC4899" rx={4} />
                  <text
                    x={getDemoBarX(index)}
                    y={demoHeight - demoPaddingBottom + 20}
                    fill="#94A3B8"
                    fontSize="12"
                    textAnchor="middle"
                    fontWeight={600}
                  >
                    {item.age}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-3 flex items-center justify-end gap-4 text-xs text-zinc-300">
          <span className="flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-[#6366F1]" />Male
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-[#EC4899]" />Female
          </span>
        </div>
      </section>

    </div>
  );
};
