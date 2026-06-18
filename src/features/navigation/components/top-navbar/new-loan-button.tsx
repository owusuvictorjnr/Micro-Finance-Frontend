import React from "react";

export interface NewLoanButtonProps {
  onClick?: () => void;
}

export const NewLoanButton: React.FC<NewLoanButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 active:bg-indigo-800 transition-colors"
    >
      New Loan
    </button>
  );
};
