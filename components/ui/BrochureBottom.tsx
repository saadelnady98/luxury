// @ts-nocheck
"use client"
import { dictionary } from "@/dictionaries/clientContent"
import { getData, postData } from "@/utils/fetchData"
import { motion } from "framer-motion"
import { Download, X } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import useCurrentLang from "../hooks/useCurrentLang"
import { Form } from "../ui/form"
import { Input } from "../ui/input"
import SuccessModule from "./motion-elements/SuccessModule"

const BrochureBottom = () => {
    const form = useForm()
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    const [reset, setReset] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [formToggle, setFormToggle] = useState(false)
    const [pdfDownload, setPdfDownload] = useState(false)
    const formVariant = {
        visible: { opacity: 1, scale: 0.95, display: "block" },
        hidden: { opacity: 0, scale: 0, display: "none" },
    }
    const pVariant = {
        initial: { x: "-50%", y: -45 },
        animate: { x: "-50%", y: 25 },
    }
    const submitHandler = async (values) => {
        await postData({
            endpoint: "api/form/brochure",
            values: { ...values, type: "brochure" },
        }).then(async (res) => {
            if (!res?.errors) {
                setReset((prev) => !prev)
                setShowSuccess(true)
                const url = await getData({
                    endpoint: "api/setting/brochure",
                })
                window.open(url?.data?.pdf?.original_url, "_blank")
                setFormToggle(false)
                setPdfDownload(true)
                setTimeout(() => {
                    setShowSuccess(false)
                    setPdfDownload(false)
                }, 5000)
            }
        })
    }

    return (
        <div className="relative">
            <motion.p
                variants={pVariant}
                initial="initial"
                animate={formToggle ? "animate" : "initial"}
                className="absolute z-30 uppercase font-light text-textColor left-1/2 -translate-y-10 lg:-translate-y-20 -translate-x-1/2 text-xs sm:text-sm md:text-base lg:text-3xl"
            >
                {locale?.downloadOur} <span className="font-semibold">{locale?.brochure}</span>
            </motion.p>
            <motion.div
                variants={formVariant}
                initial="visible"
                animate={formToggle ? "hidden" : "visible"}
                className="bg-darkMode overflow-hidden text-mainColor text-center uppercase py-4 lg:py-8"
            >
                <p className="text-xl lg:text-5xl font-light py-4">
                    <span className="">{locale?.forYour} </span>
                    {locale?.investement}
                </p>
                <button
                    onClick={() => setFormToggle(true)}
                    className=" text-xs sm:text-sm font-semibold lg:text-base  md: uppercase border-[1px] border-mainColor text-mainColor mt-3 lg:mt-6 px-12 py-2 lg:py-4"
                >
                    {locale?.download}
                </button>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={pdfDownload ? { scale: 1 } : { scale: 0 }}
                    className="bg-mainColor flex justify-center items-center gap-2 text-textColor absolute left-0 top-1/2 text-sm p-4 rounded-full"
                >
                    <Download /> {locale?.formSubmitted}
                </motion.div>
            </motion.div>
            <motion.div
                variants={formVariant}
                initial="hidden"
                animate={formToggle ? "visible" : "hidden"}
                className="container w-full bg-darkMode"
            >
                <Form {...form}>
                    <form
                        className="bg-darkMode relative py-8 sm:py-12 md:py-20 lg:mx-32 lg:px-16"
                        onSubmit={form.handleSubmit(submitHandler)}
                    >
                        <X
                            onClick={() => setFormToggle(false)}
                            className="z-30 cursor-pointer absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 bg-red-500 text-textColor rounded-full w-6 lg:w-8 h-6 lg:h-8 p-1"
                        />
                        <div className="flex flex-col lg:flex-row gap-2">
                            <Input
                                className="text-textColor w-full outline-none bg-transparent text-md border-[1px] border-mainGray border-opacity-50 placeholder:text-sm placeholder:text-mainGray  !px-6 !py-4"
                                name="name"
                                required
                                form={form}
                                type="text"
                                placeholder={locale?.full_name}
                                reset={reset}
                            />
                            <Input
                                className="text-textColor w-full outline-none bg-transparent text-md border-[1px] border-mainGray border-opacity-50 placeholder:text-sm placeholder:text-mainGray  !px-6 !py-4"
                                name="email"
                                required
                                form={form}
                                type="email"
                                placeholder={locale?.email}
                                reset={reset}
                            />
                            <Input
                                className="text-textColor w-full outline-none bg-transparent text-md border-[1px] border-mainGray border-opacity-50 placeholder:text-sm placeholder:text-mainGray  !px-6 !py-4"
                                name="phone"
                                required
                                form={form}
                                type="number"
                                placeholder={locale?.phone}
                                reset={reset}
                            />
                        </div>

                        <SuccessModule show={showSuccess} />
                        <div className="flex flex-row-reverse">
                            <button className="text-subColor uppercase block text-sm md:text-base lg:text-xl sm:text-xl pl-6 pt-3 border-none outline-none">
                                {locale?.send}
                            </button>
                        </div>
                    </form>
                </Form>
            </motion.div>
            <span className=" absolute w-1/2 lg:w-1/3 h-[1px] -bottom-[1px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subColor to-transparent"></span>
        </div>
    )
}

export default BrochureBottom
