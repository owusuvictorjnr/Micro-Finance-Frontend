"use client";

import React, { useEffect, useRef, useState } from "react";
import { AlertTriangle, ChevronDown, Star, Target, ThumbsUp, Zap } from "lucide-react";
import { TeamPerformanceSection } from "./team-performance-section";

type ProcessingRange = "This Month" | "Last Month" | "This Quarter";

type PerformanceMetric = {
  title: string;
  value: string;
  trend: string;
  trendTone: "success" | "warning";
  icon: React.ReactNode;
  iconTone: string;
};

const efficiencyData = [
  { month: "Jun", collected: 92, target: 95 },
  { month: "Jul", collected: 94, target: 95 },
  { month: "Aug", collected: 91, target: 95 },
  { month: "Sep", collected: 95, target: 95 },
  { month: "Oct", collected: 93, target: 95 },
  { month: "Nov", collected: 95, target: 95 },
];

const processingDistribution = [
  { label: "< 24h", value: 45, color: "#20C997" },
  { label: "24-48h", value: 28, color: "#3B82F6" },
  { label: "48-72h", value: 17, color: "#F59E0B" },
  { label: "> 72h", value: 10, color: "#EF4444" },
] as const;

const processingOptions: ProcessingRange[] = ["This Month", "Last Month", "This Quarter"];

const performanceMetrics: PerformanceMetric[] = [
  {
    title: "Collection Rate",
    value: "94.7%",
    trend: "Target: 95%",
    trendTone: "success",
    icon: <Target className="h-4 w-4" />,
    iconTone: "bg-emerald-500 text-white",
  },
  {
    title: "Avg. TAT",
    value: "2.4h",
    trend: "-18% faster",
    trendTone: "success",
    icon: <Zap className="h-4 w-4" />,
    iconTone: "bg-cyan-500 text-white",
  },
  {
    title: "Approval Rate",
    value: "87.3%",
    trend: "+3.2% MoM",
    trendTone: "success",
    icon: <ThumbsUp className="h-4 w-4" />,
    iconTone: "bg-indigo-500 text-white",
  },
  {
    title: "Customer Score",
    value: "4.7/5",
    trend: "+0.2 increase",
    trendTone: "success",
    icon: <Star className="h-4 w-4" />,
    iconTone: "bg-amber-500 text-white",
  },
  {
    title: "NPA Ratio",
    value: "3.2%",
    trend: "+0.4% risk",
    trendTone: "warning",
    icon: <AlertTriangle className="h-4 w-4" />,
    iconTone: "bg-red-500 text-white",
  },
];

export const PerformanceContent: React.FC = () => {
  const [range, setRange] = useState<ProcessingRange>("This Month");
  const [isRangeOpen, setIsRangeOpen] = useState(false);
  const rangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (!isRangeOpen) {
        return;
      }

      const target = event.target as Node | null;
      if (target && rangeRef.current && !rangeRef.current.contains(target)) {
        setIsRangeOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsRangeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRangeOpen]);

  const donutSize = 180;
  const donutRadius = 56;
  const donutCircumference = 2 * Math.PI * donutRadius;
  const donutSegments = processingDistribution.reduce<
    Array<{ label: string; color: string; dash: number; offset: number }>
  >((segments, segment, index) => {
    const dash = (segment.value / 100) * donutCircumference;
    const offset = processingDistribution
      .slice(0, index)
      .reduce((sum, previous) => sum + (previous.value / 100) * donutCircumference, 0);

    segments.push({
      label: segment.label,
      color: segment.color,
      dash,
      offset,
    });

    return segments;
  }, []);

  return (
    <div className="space-y-6 text-white">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {performanceMetrics.map((metric) => (
          <section
            key={metric.title}
            className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-7">
                <h3 className="text-[11px] font-semibold text-zinc-400">{metric.title}</h3>
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-white">{metric.value}</p>
                  <p className={`mt-2 text-[11px] font-medium ${metric.trendTone === "success" ? "text-emerald-400" : "text-amber-400"}`}>
                    {metric.trend}
                  </p>
                </div>
              </div>

              <div className={`flex h-9 w-9 items-center justify-center rounded-md ${metric.iconTone}`}>
                {metric.icon}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-colors">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-bold tracking-tight text-white">Collection Efficiency</h3>
              <p className="text-[11px] text-zinc-400">Monthly collection vs target</p>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-medium text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />Collected
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />Target
              </span>
            </div>
          </div>

          <div className="mt-5 h-80 w-full">
            <svg viewBox="0 0 760 320" className="h-full w-full font-sans">
              {[85, 87, 89, 91, 93, 95, 97, 99, 101].map((value) => {
                const y = 280 - ((value - 85) / 16) * 220;
                return (
                  <g key={value}>
                    <line x1="34" y1={y} x2="728" y2={y} stroke="#1F2937" strokeDasharray="4" />
                    <text x="26" y={y + 4} fill="#94A3B8" fontSize="10" textAnchor="end">
                      {value}%
                    </text>
                  </g>
                );
              })}

              {efficiencyData.map((item, index) => {
                const x = 72 + index * 106;
                const collectedHeight = ((item.collected - 85) / 16) * 220;
                const targetHeight = ((item.target - 85) / 16) * 220;
                const collectedY = 280 - collectedHeight;
                const targetY = 280 - targetHeight;

                return (
                  <g key={item.month}>
                    <rect x={x} y={collectedY} width="36" height={collectedHeight} rx="8" className="fill-emerald-500" />
                    <rect x={x + 42} y={targetY} width="36" height={targetHeight} rx="8" className="fill-zinc-500/60" />
                    <text x={x + 38} y="302" fill="#94A3B8" fontSize="10" fontWeight={600} textAnchor="middle">
                      {item.month}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-[#0B1020] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-colors">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-bold tracking-tight text-white">Processing Time Distribution</h3>
              <p className="text-[11px] text-zinc-400">Loan application to disbursement</p>
            </div>

            <div className="relative" ref={rangeRef}>
              <button
                id="processing-time-trigger"
                type="button"
                aria-haspopup="true"
                aria-expanded={isRangeOpen}
                aria-controls="processing-time-menu"
                onClick={() => setIsRangeOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-black px-4 py-2.5 text-xs font-semibold text-white hover:bg-zinc-950 transition-all shadow-sm cursor-pointer active:scale-[0.97] select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1020]"
              >
                <span>{range}</span>
                <ChevronDown className={`h-3.5 w-3.5 text-zinc-400 transition-transform ${isRangeOpen ? "rotate-180" : ""}`} />
              </button>

              {isRangeOpen && (
                <div id="processing-time-menu" aria-labelledby="processing-time-trigger" className="absolute right-0 z-20 mt-2 w-44 rounded-xl border border-zinc-800 bg-[#0A0E1A] p-1 shadow-xl">
                  {processingOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setRange(option);
                        setIsRangeOpen(false);
                      }}
                      className="block w-full rounded-lg px-3.5 py-2.5 text-left text-xs font-semibold text-zinc-300 hover:bg-zinc-900 transition-colors cursor-pointer"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center">
            <svg width={donutSize} height={donutSize} viewBox="0 0 180 180" className="overflow-visible">
              <circle cx="90" cy="90" r={donutRadius} fill="none" stroke="#1F2937" strokeWidth="20" />
              {donutSegments.map((segment) => {
                const circle = (
                  <circle
                    key={segment.label}
                    cx="90"
                    cy="90"
                    r={donutRadius}
                    fill="none"
                    stroke={segment.color}
                    strokeWidth="20"
                    strokeDasharray={`${segment.dash} ${donutCircumference - segment.dash}`}
                    strokeDashoffset={-segment.offset}
                    transform="rotate(-90 90 90)"
                  />
                );
                return circle;
              })}
              <circle cx="90" cy="90" r="42" fill="#0B1020" />
            </svg>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-medium text-zinc-400">
            {processingDistribution.map((item) => (
              <span key={item.label} className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                {item.label}
              </span>
            ))}
          </div>
        </section>
      </div>

      <TeamPerformanceSection />
    </div>
  );
};
