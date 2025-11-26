"use client"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import React, { SetStateAction, useState } from "react"
const PaginationButtons = ({
    pages,
    setPage,
    currentPage,
    locale,
}: {
    pages: number
    setPage: React.Dispatch<SetStateAction<number>>
    currentPage: number
    locale: string
}) => {
    const [ellipse, setEllipse] = useState(3)
    let pageNumbers: number[] = []
    for (let c = 1; c <= pages; c++) {
        pageNumbers.push(c)
    }
    return (
        <Pagination className="mt-16" dir="ltr">
            <PaginationContent>
                <PaginationItem className="cursor-pointer">
                    <PaginationPrevious locale={locale} onClick={() => setPage((prev) => prev - 1)} />
                </PaginationItem>
                {pageNumbers
                    ?.map((page) => (
                        <>
                            <PaginationItem className="cursor-pointer">
                                <PaginationLink onClick={() => setPage(page)} isActive={page === currentPage}>
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        </>
                    ))
                    .slice(0, ellipse)}
                <PaginationItem className="cursor-pointer">
                    <PaginationEllipsis onClick={() => setEllipse((prev) => prev + 3)} />
                </PaginationItem>
                <PaginationItem className="cursor-pointer">
                    <PaginationNext locale={locale} onClick={() => setPage((prev) => prev + 1)} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationButtons
