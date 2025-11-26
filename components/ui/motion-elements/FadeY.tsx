"use client"
import { motion } from "framer-motion"
export default function FadeY({
  className,
  children,
  dir,
  delay,
  once
}: {
  className?: string
  children: React.ReactNode
  dir: "top" | "bottom"
  delay?:number
  once?:boolean
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: dir === "top" ? 500 : -500,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: delay || 0.2,
        ease: "easeInOut",
        type: "spring",
      }}
      viewport={{once}}
      className={className}
    >
      {children}
    </motion.div>
  )
}
