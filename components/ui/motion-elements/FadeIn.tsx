"use client"

import { motion } from "framer-motion"

export default function FadeIn({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
  
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 3,
        delay: 0.3,
        ease: "easeInOut",
        type: "spring",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
