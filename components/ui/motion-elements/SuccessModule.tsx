"use client"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import useCurrentLang from "../../hooks/useCurrentLang"
import { dictionary } from "@/dictionaries/clientContent"
export default function SuccessModule({ show }: { show: boolean }) {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={show ? { scale: 1 } : { scale: 0 }}
            className={`bg-mainColor flex justify-center items-center gap-2 text-textColor text-sm p-4 mt-2 duration-75 ${
                show ? "h-14" : "h-0 !p-0 !m-0"
            }`}
        >
            <Download /> {locale?.formSubmitted}
        </motion.div>
    )
}

// "use client"
// import { motion } from "framer-motion"
// import { Download } from "lucide-react"
// import useCurrentLang from "../../hooks/useCurrentLang"
// import { dictionary } from "@/dictionaries/clientContent"
// export default function SuccessModule({ show }: { show: boolean }) {
//     const { lang } = useCurrentLang()
//     const locale = dictionary[lang!]
//     return (
//         <motion.div
//             initial={{ scale: 0 }}
//             animate={show ? { scale: 1 } : { scale: 0 }}
//             className={`bg-mainColor flex justify-center items-center gap-2 text-textColor text-sm p-4 mt-2 duration-75 ${
//                 show ? "h-14" : "h-0 !p-0 !m-0"
//             }`}
//         >
//             <Download /> {locale?.formSubmitted}
//         </motion.div>
//     )
// }
