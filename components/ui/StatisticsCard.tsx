// @ts-nocheck
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import StatisticsCardScroll from "./StatisticsCardScroll"
import StatisticsForm from "./StatisticsForm"

const StatisticsCard = ({ cardsData }: any) => {
    const ref = useRef(null)
    const inView = useInView(ref)
    const [togglerForm, setTogglerForm] = useState(false)
    useEffect(() => {
        const img = document.querySelector(".city_image")!
        if (inView) {
            img.classList.add("city_image_scale")
        } else {
            img.classList.remove("city_image_scale")
            setTogglerForm(false)
        }
    }, [inView])
    return (
        <motion.div
            initial={{
                y: 0,
                transition: {
                    delay: 0.3,
                    duration: 0.5,
                },
            }}
            whileInView={{
                y: -150,
                transition: {
                    delay: 0.3,
                    duration: 0.5,
                },
            }}
        >
            <div
                ref={ref}
                className="relative h-[50vh] capitalize sm:mx-16 lg:mx-20 xl:mx-72 flex flex-col lg:flex-row gap-10"
            >
                <StatisticsCardScroll cardsData={cardsData} />
            </div>
            <StatisticsForm setTogglerForm={setTogglerForm} togglerForm={togglerForm} />
        </motion.div>
    )
}

export default StatisticsCard
