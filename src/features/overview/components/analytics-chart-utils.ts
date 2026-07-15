import type { TrendPoint } from "./analytics-content.data";

export type TrendChartMetrics = {
  width: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
};

export const getTrendX = (
  index: number,
  chartWidth: number,
  paddingLeft: number,
  dataLength: number,
) => paddingLeft + (index * chartWidth) / (dataLength - 1);

export const getTrendY = (
  value: number,
  height: number,
  paddingBottom: number,
  innerHeight: number,
  minValue: number,
  valueRange: number,
) => {
  const ratio = (value - minValue) / valueRange;
  return height - paddingBottom - ratio * innerHeight;
};

export const createTrendPath = (
  data: TrendPoint[],
  key: keyof Omit<TrendPoint, "month">,
  metrics: TrendChartMetrics,
  minValue: number,
  maxValue: number,
) => {
  const chartInnerWidth = metrics.width - metrics.paddingLeft - metrics.paddingRight;
  const chartInnerHeight = metrics.height - metrics.paddingTop - metrics.paddingBottom;
  const valueRange = maxValue - minValue;

  const points = data.map((point, index) => ({
    x: getTrendX(index, chartInnerWidth, metrics.paddingLeft, data.length),
    y: getTrendY(point[key], metrics.height, metrics.paddingBottom, chartInnerHeight, minValue, valueRange),
  }));

  const slopes = points.map((point, index) => {
    if (index === 0) {
      return (points[1]!.y - point.y) / (points[1]!.x - point.x);
    }

    if (index === points.length - 1) {
      return (point.y - points[index - 1]!.y) / (point.x - points[index - 1]!.x);
    }

    const previous = points[index - 1]!;
    const next = points[index + 1]!;
    return (next.y - previous.y) / (next.x - previous.x);
  });

  let path = `M ${points[0]!.x},${points[0]!.y}`;

  for (let index = 0; index < points.length - 1; index += 1) {
    const p0 = points[index]!;
    const p1 = points[index + 1]!;
    const m0 = slopes[index]!;
    const m1 = slopes[index + 1]!;
    const dx = p1.x - p0.x;

    const cpX1 = p0.x + dx / 3;
    const cpY1 = p0.y + (m0 * dx) / 3;
    const cpX2 = p1.x - dx / 3;
    const cpY2 = p1.y - (m1 * dx) / 3;

    path += ` C ${cpX1},${cpY1} ${cpX2},${cpY2} ${p1.x},${p1.y}`;
  }

  return path;
};
