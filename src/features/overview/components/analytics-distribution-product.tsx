"use client";

import React from "react";
import { Download, Ellipsis } from "lucide-react";
import { channelData, loanProductData, regionData } from "./analytics-content.data";

const geoWidth = 900;
const geoHeight = 320;
const geoPaddingLeft = 54;
const geoPaddingRight = 24;
const geoPaddingTop = 16;
const geoPaddingBottom = 42;

const geoInnerWidth = geoWidth - geoPaddingLeft - geoPaddingRight;
const geoInnerHeight = geoHeight - geoPaddingTop - geoPaddingBottom;

const getGeoY = (value: number) => {
  const ratio = value / 4.5;
  return geoHeight - geoPaddingBottom - ratio * geoInnerHeight;
};

const getGeoBarX = (index: number, totalCount: number) => {
  const colWidth = geoInnerWidth / totalCount;
  return geoPaddingLeft + colWidth * index + colWidth / 2;
};

interface AnalyticsDistributionProductProps {
  regionFilter: "All" | "Urban" | "Rural";
  setRegionFilter: React.Dispatch<React.SetStateAction<"All" | "Urban" | "Rural">>;
}

export const AnalyticsDistributionProduct: React.FC<AnalyticsDistributionProductProps> = ({
  regionFilter,
  setRegionFilter,
}) => {
  const filteredRegionData =
    regionFilter === "All" ? regionData : regionData.filter((region) => region.segment === regionFilter);

  return (
    <>
      <div className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-6 xl:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-3xl leading-none font-semibold tracking-tight text-white">
                Geographic Distribution
              </h3>
              <p className="mt-1.5 text-sm text-zinc-300">Loan distribution by region</p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#0A0E1A] p-1">
              {(["All", "Urban", "Rural"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setRegionFilter(option)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                    regionFilter === option
                      ? "bg-[#6366F1] text-white"
                      : "bg-black text-zinc-300 hover:bg-zinc-900"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {filteredRegionData.map((region) => (
              <div
                key={region.region}
                className="rounded-2xl border border-zinc-700/70 bg-[#101731] p-3 text-center"
                style={{ borderColor: `${region.color}99` }}
              >
                <p className="text-3xl font-semibold" style={{ color: region.color }}>
                  ${region.value.toFixed(1)}M
                </p>
                <p className="mt-1 text-sm text-zinc-200">{region.region} Region</p>
                <p className="mt-0.5 text-xs font-medium text-emerald-400">{region.segment}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 h-[280px] w-full">
            <svg viewBox={`0 0 ${geoWidth} ${geoHeight}`} className="h-full w-full select-none">
              {[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5].map((value) => {
                const y = getGeoY(value);
                return (
                  <g key={value}>
                    <line
                      x1={geoPaddingLeft}
                      y1={y}
                      x2={geoWidth - geoPaddingRight}
                      y2={y}
                      stroke="#1F2937"
                      strokeDasharray={value === 0 ? "0" : "3"}
                    />
                    <text x={geoPaddingLeft - 10} y={y + 4} fill="#94A3B8" fontSize="12" textAnchor="end">
                      {value}M
                    </text>
                  </g>
                );
              })}

              {filteredRegionData.map((item, index) => {
                const x = getGeoBarX(index, filteredRegionData.length) - 64;
                const y = getGeoY(item.value);
                const height = geoHeight - geoPaddingBottom - y;

                return (
                  <g key={item.region}>
                    <rect x={x} y={y} width={128} height={height} fill={item.color} rx={7} />
                    <text
                      x={getGeoBarX(index, filteredRegionData.length)}
                      y={geoHeight - geoPaddingBottom + 24}
                      fill="#94A3B8"
                      fontSize="12"
                      textAnchor="middle"
                      fontWeight={500}
                    >
                      {item.region}
                    </text>
                  </g>
                );
              })}

              {filteredRegionData.length === 0 && (
                <text x={geoWidth / 2} y={geoHeight / 2} fill="#94A3B8" fontSize="12" textAnchor="middle">
                  No regions match this filter.
                </text>
              )}

              <circle cx={geoWidth - 86} cy={20} r={8} fill="#3B82F6" />
              <text x={geoWidth - 74} y={25} fill="#9CA3AF" fontSize="12">
                Loan Volume
              </text>
            </svg>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-3xl leading-none font-semibold tracking-tight text-white">Channel Performance</h3>
            </div>
            <button
              type="button"
              aria-label="Channel performance options"
              className="rounded-xl border border-zinc-700 bg-black p-2 text-zinc-300 transition-colors hover:bg-zinc-900"
            >
              <Ellipsis className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {channelData.map((channel) => (
              <div key={channel.name} className="rounded-2xl border border-zinc-700 bg-[#0D1324] p-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#141C34]">
                      {channel.icon}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{channel.name}</p>
                      <p className="text-xs text-zinc-300">{channel.share}% of applications</p>
                    </div>
                  </div>
                  <span
                    className={`text-xl font-semibold ${
                      channel.trend === "up" ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {channel.change}
                  </span>
                </div>

                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-zinc-700/50">
                  <div className="h-full rounded-full bg-[#8B5CF6]" style={{ width: `${channel.share}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-3xl leading-none font-semibold tracking-tight text-white">Loan Product Analysis</h3>
            <p className="mt-1.5 text-sm text-zinc-300">Performance by loan type</p>
          </div>
          <button
            type="button"
            title="Export is not implemented yet"
            disabled
            className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-[#0E1324] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#0E1324]"
          >
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Product
                </th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Total Volume
                </th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Active Loans
                </th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Avg. Amount
                </th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Interest Rate
                </th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Default Rate
                </th>
                <th className="px-4 py-4 text-right text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody>
              {loanProductData.map((row) => (
                <tr key={row.product} className="border-b border-zinc-800/80 last:border-b-0">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                          row.product === "Personal Loan"
                            ? "bg-indigo-500"
                            : row.product === "BNPL"
                              ? "bg-cyan-500"
                              : row.product === "Business Loan"
                                ? "bg-sky-500"
                                : "bg-amber-500"
                        }`}
                      >
                        {row.icon}
                      </div>
                      <span className="text-lg font-semibold text-zinc-100">{row.product}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-xl font-semibold text-zinc-100">{row.totalVolume}</td>
                  <td className="px-4 py-4 text-center text-xl font-medium text-zinc-100">{row.activeLoans}</td>
                  <td className="px-4 py-4 text-center text-xl font-medium text-zinc-100">{row.averageAmount}</td>
                  <td className="px-4 py-4 text-center text-xl font-medium text-zinc-100">{row.interestRate}</td>
                  <td className="px-4 py-4 text-center">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                        row.defaultRateTone === "low"
                          ? "border border-emerald-700/60 bg-emerald-950/40 text-emerald-400"
                          : row.defaultRateTone === "medium"
                            ? "border border-amber-700/60 bg-amber-950/30 text-amber-400"
                            : "border border-rose-700/60 bg-rose-950/30 text-rose-400"
                      }`}
                    >
                      {row.defaultRate}
                    </span>
                  </td>
                  <td
                    className={`px-4 py-4 text-right text-xl font-semibold ${
                      row.growthTone === "up" ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {row.growth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
