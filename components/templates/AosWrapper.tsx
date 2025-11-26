'use client'

import Aos from "aos"
import { useEffect } from "react"

const AosWrapper = ({children}:{children: React.ReactNode}) => {
    useEffect(() => {
        Aos.init()
    },[])
  return (
    {children}
  )
}

export default AosWrapper
