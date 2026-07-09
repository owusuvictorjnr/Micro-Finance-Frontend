export const formatCurrency = (val: number): string => {
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    maximumFractionDigits: 0,
  }).format(val);
};

export const formatPercentage = (val: number): string => {
  return `${val.toFixed(1)}%`;
};

export const formatNumber = (val: number): string => {
  return new Intl.NumberFormat("en-US").format(val);
};
