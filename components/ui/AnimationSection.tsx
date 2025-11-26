"use client"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import SubpropertySection from "../templates/SubpropertySection"
import PropertySectionScroll from "./PropertySectionScroll"
import StatisticsCard from "./StatisticsCard"
type Props = {
    statisticsTitle: any
    cardsData: any
    tableTitle: any
    tableHeader: any
    tableStatistics: any
}
const AnimationSection = ({ cardsData, statisticsTitle, tableHeader, tableStatistics, tableTitle }: Props) => {
    const ref: any = useRef(null)
    useEffect(() => {
        const div = document.getElementById("cursor-circle")!
        div.classList.add("circle-cursor")
    }, [])

    return (
        <div ref={ref} id="cursor-circle">
            <PropertySectionScroll statisticsTitle={statisticsTitle} cardsData={cardsData} />
            <StatisticsCard cardsData={cardsData} />
            <SubpropertySection tableHeader={tableHeader} tableStatistics={tableStatistics} tableTitle={tableTitle} />
        </div>
    )
}

export default AnimationSection
