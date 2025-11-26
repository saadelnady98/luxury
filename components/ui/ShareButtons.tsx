"use client"
import { dictionary } from "@/dictionaries/clientContent"
import { images } from "@/utils/exportsImages"
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "next-share"
import Image from "next/image"
import { useRef, useState } from "react"
import useCurrentLang from "../hooks/useCurrentLang"
import { IMAGE_BLUR } from "../constant/image-blure"
type ShareButtonsProps_TP = {
    endpoint: string
}
export const ShareButtons = ({ endpoint }: ShareButtonsProps_TP) => {
    const textRef = useRef<HTMLInputElement>(null)
    const [copyStatus, setCopyStatus] = useState("")
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]

    const handleCopyClick = () => {
        if (typeof navigator.clipboard !== "undefined") {
            navigator.clipboard
                .writeText(`https://luxurylivin.ae/${endpoint}`)
                .then(() => {
                    setCopyStatus("copied")
                })
                .catch((error) => {
                    console.error("Unable to copy text to clipboard", error)
                })
        } else {
            textRef?.current?.select()
            document.execCommand("copy")
            setCopyStatus("copied")
        }
    }

    return (
        <div className="flex items-center gap-x-3 w-full mt-8">
            <p className="me-4">{locale?.shareTo}</p>
            <FacebookShareButton url={`https://luxurylivin.ae/${endpoint}`}>
                <Image
                    src={images.facebook}
                    width={50}
                    height={50}
                    placeholder="blur"
                   blurDataURL={IMAGE_BLUR}
                    alt="copy"
                    className="w-7 lg:w-12 h-7 lg:h-12"
                />
            </FacebookShareButton>
            <TwitterShareButton url={`https://luxurylivin.ae/${endpoint}`}>
                <Image
                    src={images.twitter}
                    width={50}
                    height={50}
                    placeholder="blur"
                   blurDataURL={IMAGE_BLUR}
                    alt="copy"
                    className="w-3 lg:w-5 h-3 lg:h-5"
                />
            </TwitterShareButton>
            <WhatsappShareButton url={`https://luxurylivin.ae/${endpoint}`}>
                <div className="bg-darkMode p-2 rounded-full">
                    <Image
                        src={images.whatsWhite}
                        width={50}
                        height={50}
                        placeholder="blur"
                       blurDataURL={IMAGE_BLUR}
                        alt="copy"
                        className="w-3 lg:w-5 h-3 lg:h-5"
                    />
                </div>
            </WhatsappShareButton>
            <button onClick={handleCopyClick}>
                {copyStatus === "copied" ? (
                    copyStatus
                ) : (
                    <div className="bg-darkMode p-2 rounded-full">
                        <Image
                            src={images.linkIcon}
                            width={20}
                            height={20}
                         placeholder="blur"
                             blurDataURL={IMAGE_BLUR}
                            alt="copy"
                            className="w-3 lg:w-5 h-3 lg:h-5"
                        />
                    </div>
                )}
            </button>
        </div>
    )
}
