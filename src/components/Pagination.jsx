import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Pagination({ totalPage, currentPage, onPageChange }) {
  return (
    <div className="flex items-center justify-end border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div>
        <nav
          aria-label="Pagination"
          className="isolate inline-flex -space-x-px rounded-md shadow-xs"
        >
          <Link
            href={`?page=${currentPage - 1}`}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            aria-disabled={currentPage <= 1}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon aria-hidden="true" className="size-5" />
          </Link>
          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
          {[...Array(totalPage)].map((e, i) => (
            <Link
              key={i}
              href={`?page=${i}`}
              onClick={() => {
                onPageChange(i);
              }}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 ${
                currentPage == i
                  ? "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
              }`}
            >
              {i}
            </Link>
          ))}

          <Link
            href={`?page=${currentPage + 1}`}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            aria-disabled={currentPage >= totalPage}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon aria-hidden="true" className="size-5" />
          </Link >
        </nav>
      </div>
    </div>
  );
}
