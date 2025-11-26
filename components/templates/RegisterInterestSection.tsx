"use client"
import { dictionary } from "@/dictionaries/clientContent"
import { images } from "@/utils/exportsImages"
import { postData } from "@/utils/fetchData"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useForm } from "react-hook-form"
import useCurrentLang from "../hooks/useCurrentLang"
import { Form } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import SelectPreferLang from "./SelectPreferLang"
import FadeIn from "../ui/motion-elements/FadeIn"
import { IMAGE_BLUR } from "../constant/image-blure"
import SuccessModule from "../ui/motion-elements/SuccessModule"

const RegisterInterestSection = () => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    const form = useForm()
    const [reset, setReset] = useState(false)
    const [formSubmit, setFormSubmit] = useState(false)

    const submitHandler = async (values: any) => {
        await postData({
            endpoint: "api/form/interest",
            values: { ...values, language: values.language.value, type: "interest" },
        }).then(async (res) => {
            if (!res?.errors) {
                setReset((prev) => !prev)
                setFormSubmit(true)
                setTimeout(() => {
                    setFormSubmit(false)
                }, 5000)
            }
        })
    }

    return (
        <FadeIn className="relative bg-darkMode overflow-hidden">
            <div className="container capitalize lg:flex justify-between items-center my-0 sm:my-8 lg:my-20">
                <div className="lg:w-1/3 max-w-[540px] lg:my-10 lg:ml-10 text-textColor">
                    <p className="text-2xl lg:text-4xl text-mainColor ">{locale.registerYour}</p>
                    <p className="lg:text-2xl font-light my-4 lg:my-8 text-mainGray lg:leading-10">
                        {locale.whetherYou}
                    </p>
                </div>
                <Form {...form}>
                    <form
                        className=" relative lg:w-1/2 z-30 lg:shadow-[1px_0px_1px_0px_#AF6F57] bg-darkMode lg: lg:px-8 py-4"
                        onSubmit={form.handleSubmit(submitHandler)}
                    >
                        <span className="absolute hidden lg:block rounded-full right-0 -top-[1px] h-[1px] w-full opacity-80  bg-gradient-to-r from-transparent to-mainColor"></span>
                        <span className="absolute hidden lg:block rounded-full right-0 -bottom-[1px] h-[1px] w-1/2 opacity-80  bg-gradient-to-r from-transparent to-mainColor"></span>
                        <p className="text-xl hidden lg:block my-2  text-darkText">{locale.submitYour}</p>
                        <div className="lg:flex gap-2">
                            <Input
                                className="text-textColor w-full outline-none bg-transparent text-md border-[1px] border-mainGray placeholder:text-sm lg:placeholder: placeholder:text-mainGray border-opacity-50 placeholder:text-opacity-80  !px-6 !py-4"
                                name="name"
                                required
                                form={form}
                                type="text"
                                placeholder={locale?.full_name}
                                reset={reset}
                            />
                            <Input
                                className="text-textColor w-full outline-none bg-transparent text-md border-[1px] border-mainGray placeholder:text-sm lg:placeholder: placeholder:text-mainGray border-opacity-50 placeholder:text-opacity-80  !px-6 !py-4"
                                name="email"
                                required
                                form={form}
                                type="email"
                                placeholder={locale?.email}
                                reset={reset}
                            />
                        </div>
                        <div className="lg:flex gap-2 pb-2">
                            <Input
                                className="text-textColor w-full outline-none bg-transparent text-md border-[1px] border-mainGray placeholder:text-sm lg:placeholder: placeholder:text-mainGray border-opacity-50 placeholder:text-opacity-80  !px-6 !py-4"
                                name="phone"
                                required
                                form={form}
                                type="number"
                                placeholder={locale?.phone}
                                reset={reset}
                            />
                            <div className="w-full">
                                <SelectPreferLang form={form} reset={reset} />
                            </div>
                        </div>
                        <Textarea
                            className="text-textColor w-full outline-none bg-transparent text-md border-[1px] border-mainGray placeholder:text-sm lg:placeholder: placeholder:text-mainGray border-opacity-50 placeholder:text-opacity-80  !px-6 !py-4"
                            name="message"
                            placeholder={locale?.message}
                            id="message"
                            cols={30}
                            rows={6}
                            form={form}
                            reset={reset}
                        ></Textarea>

                        <div className="my-1">
                            <SuccessModule show={formSubmit} />
                            <button className="text-mainColor block ml-auto text-sm md:text-xl mt-3  border-none outline-none">
                                {locale?.send}
                            </button>
                        </div>
                    </form>
                </Form>
            </div>
            <Image
                className="lg:absolute relative ml-auto lg:ml-0 w-3/4 lg:w-[58%] rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 bottom-0 mt-0 md:mt-10"
                src={images.City}
                alt={images.City}
                 placeholder="blur"
                 blurDataURL={IMAGE_BLUR}
                width={1024}
                height={1080}
            />
        </FadeIn>
    )
}

export default RegisterInterestSection
