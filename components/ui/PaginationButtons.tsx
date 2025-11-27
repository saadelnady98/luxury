"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React, { SetStateAction } from "react";

const PaginationButtons = ({
  pages,
  setPage,
  currentPage,
  locale,
}: {
  pages: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  currentPage: number;
  locale: string;
}) => {
  if (pages <= 1) return null;

  const hasNextPage = currentPage < pages;
  const hasPrevPage = currentPage > 1;

  // ----------------------------
  // Generate 4-page window
  // ----------------------------
  let start = currentPage - 1;
  let end = currentPage + 2;

  // لو في بداية الصفحات
  if (start < 1) {
    start = 1;
    end = 4;
  }

  // لو في آخر الصفحات
  if (end > pages) {
    end = pages;
    start = pages - 3;
    if (start < 1) start = 1;
  }

  const pageList = [];
  for (let p = start; p <= end; p++) {
    pageList.push(p);
  }

  return (
    <Pagination className="mt-16" dir="ltr">
      <PaginationContent>
        {/* Previous */}
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious
            locale={locale}
            disabled={!hasPrevPage}
            onClick={() => hasPrevPage && setPage((prev) => prev - 1)}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {pageList.map((p) => (
          <PaginationItem key={p} className="cursor-pointer">
            <PaginationLink
              onClick={() => setPage(p)}
              isActive={currentPage === p}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next */}
        <PaginationItem className="cursor-pointer">
          <PaginationNext
            locale={locale}
            disabled={!hasNextPage}
            onClick={() => hasNextPage && setPage((prev) => prev + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationButtons;
