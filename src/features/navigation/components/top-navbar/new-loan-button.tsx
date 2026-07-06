"use client";

import React from "react";

export interface NewLoanButtonProps {
  onClick?: () => void;
}

export const NewLoanButton: React.FC<NewLoanButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={!onClick}
      aria-disabled={!onClick}
      className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 active:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0B0F19]"
    >
      New Loan
    </button>
  );
};
