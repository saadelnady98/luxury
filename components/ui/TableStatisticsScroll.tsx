"use client"

import FadeIn from "./motion-elements/FadeIn"

function TableStatisticsScroll({
    tableTitle,
    tableStatistics,
    tableHeader,
}: {
    tableTitle: any
    tableStatistics: any
    tableHeader: any
}) {
   

    return (
        <FadeIn>
            <div className="container table-box1 relative flex items-center pb-[10rem] lg:w-[85%] w-full">
                <table className="w-full md:text-center text-start">
                    <caption className="text-base sm:text-lg md:text-xl lg:text-4xl">
                        {tableTitle?.data?.description}
                    </caption>
                    <thead>
                        <tr className="border-b-[1px] border-mainGray border-opacity-40 [&>th]:text-left">
                            <th>{tableHeader?.data?.first}</th>
                            <th>{tableHeader?.data?.second}</th>
                            <th>{tableHeader?.data?.third}</th>
                            <th>{tableHeader?.data?.fourth}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableStatistics?.data?.map((row: any) => (
                            <tr key={row?.id} className="border-b-[1px] border-mainGray border-opacity-40">
                                <td>{row?.type}</td>
                                <td>{row?.price}</td>
                                <td>{row?.percent}</td>
                                <td>{row?.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </FadeIn>
    )
}

export default TableStatisticsScroll
