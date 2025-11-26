"use client"

import { dictionary } from "@/dictionaries/clientContent"
import { images } from "@/utils/exportsImages"
import Image from "next/image"
import useCurrentLang from "../hooks/useCurrentLang"
import { getData, postData } from "@/utils/fetchData"
import { useEffect, useState } from "react"
import { Contacts_TP } from "contacts"
import { IMAGE_BLUR } from "../constant/image-blure"

const WhatsAppButton = () => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]

    const [links, setLinks] = useState<Contacts_TP>()

    const getLinks = async () => {
        const res = await getData({
            endpoint: "api/setting/social",
            lang,
        })
        setLinks(res)
    }

    useEffect(() => {
        getLinks()
    }, [])

    const handleWhatsAppClick = async () => {
        const x = await postData({
            endpoint: "api/whatsapp/click",
            values: null,
        })

        const phoneNumber = links?.data?.contacts?.whatsapp?.replace(/\s+/g, "")

        const message = "Hello from luxurylivin"

        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

        // Open WhatsApp in a new tab
        window.open(whatsappLink, "_blank")
    }
    return (
        <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-28 right-10 bg-black bg-opacity-80 z-40 p-4  flex gap-x-2"
        >
            <Image
                src={images.whatsappBtn}
                width={18}
                height={18}
                placeholder="blur"
               blurDataURL={IMAGE_BLUR}
                alt="whatsapp icon"
            />
            {/* {locale?.contact_with_us} */}
        </button>
    )
}

export default WhatsAppButton
