"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

const pageBtnClasses =
  "flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600";

export default function Pagination({
  page,
  totalPages,
  totalRecords,
  limit,
  onPageChange,
}) {
  const start = totalRecords === 0 ? 0 : (page - 1) * limit + 1;
  const end = Math.min(page * limit, totalRecords);

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <p className="text-sm text-neutral-600">
        Showing{" "}
        <span className="font-semibold text-neutral-900">
          {start}-{end}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-neutral-900">
          {totalRecords}
        </span>{" "}
        records
      </p>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
          className={`${pageBtnClasses} border border-neutral-300 text-neutral-600 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50`}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Pages */}
        {Array.from(
          { length: Math.max(totalPages, 1) },
          (_, index) => {
            const pageNumber = index + 1;

            return (
              <button
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
                aria-current={page === pageNumber ? "page" : undefined}
                aria-label={`Page ${pageNumber}`}
                className={`${pageBtnClasses} ${
                  page === pageNumber
                    ? "bg-primary-700 text-white shadow-sm"
                    : "border border-neutral-300 text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                {pageNumber}
              </button>
            );
          }
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
          className={`${pageBtnClasses} border border-neutral-300 text-neutral-600 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50`}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
