"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

export default function Pagination({
  totalPage,
  currentPage =1,
  pageLimit = 5,
  onPageChange,
}) {
  const [pageStart, setPageStart] = useState(1);

  useEffect(() => {
    const newStart = Math.floor((currentPage - 1) / pageLimit) * pageLimit + 1;
    setPageStart(newStart);
  }, [currentPage, pageLimit]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPage) return;
    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-end border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div>
        <nav
          aria-label="Pagination"
          className="isolate inline-flex -space-x-px rounded-md shadow-xs"
        >
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
              currentPage <= 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon aria-hidden="true" className="size-5" />
          </button>

          {/* Page Numbers */}
          {Array.from(
            { length: Math.min(pageLimit, totalPage - pageStart + 1) },
            (_, i) => pageStart + i
          ).map((page) => {
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 ${
                  currentPage === page
                    ? "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPage}
            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
              currentPage >= totalPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon aria-hidden="true" className="size-5" />
          </button>
        </nav>
      </div>
    </div>
  );
}
