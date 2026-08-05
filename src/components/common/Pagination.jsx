"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

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
        <span className="font-semibold">
          {start}-{end}
        </span>{" "}
        of{" "}
        <span className="font-semibold">
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
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
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
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition
                  ${
                    page === pageNumber
                      ? "bg-primary-700 text-white"
                      : "border border-neutral-300 hover:bg-neutral-100"
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
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
}