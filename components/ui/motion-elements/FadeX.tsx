"use client"

import { motion } from "framer-motion"

export default function FadeX({
  className,
  dir = "left",
  children,
}: {
  className?: string
  dir: "left" | "right"
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: dir === "left" ? 500 : -500,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 2,
        delay: 0.2,
        ease: "easeInOut",
        type: "spring",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
