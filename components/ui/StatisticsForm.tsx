// @ts-nocheck
"use client"
import { dictionary } from "@/dictionaries/clientContent"
import { images } from "@/utils/exportsImages"
import { postData } from "@/utils/fetchData"
import { X } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import useCurrentLang from "../hooks/useCurrentLang"
import SelectComp from "../ui/Select"
import { Form } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "./textarea"
import FadeY from "./motion-elements/FadeY"
import { IMAGE_BLUR } from "../constant/image-blure"

const StatisticsForm = ({ setTogglerForm, togglerForm }) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]

    const form = useForm()
    const formRef = useRef(null)
    const [reset, setReset] = useState(false)

    const submitHandler = async (values) => {
        await postData({
            endpoint: "api/form/expert",
            values: { ...values, language: values.language.value, type: "expert" },
        }).then((res) => !res?.errors && setReset((prev) => !prev))
    }

    // useEffect(() => {
    //   if (togglerForm) {
    //     document.body.style.overflow = "hidden";
    //   } else {
    //     document.body.style.overflow = "unset";
    //   }
    // }, [togglerForm]);

    return (
        <>
            <FadeY dir="top" className="text-center pt-[13.5rem]">
                <p className="text-base sm:text-lg md:text-xl lg:text-4xl">
                    {locale.needMore}?{/* <span className="text-mainColor ">{locale.knowledge} </span>? */}
                </p>
                <button
                    onClick={() => {
                        setTogglerForm(true)
                        formRef?.current?.scrollIntoView({ behavior: "smooth" })
                        window.scrollTo({
                            // top: window.pageYOffset + window.innerHeight / 2,
                            behavior: "smooth",
                        })
                    }}
                    className="border-[1px] border-mainGray border-opacity-40  font-light text-xs  sm:text-sm lg:text-base px-5 lg:px-12 py-4 lg:py-4 my-5 lg:my-10 z-50"
                >
                    {locale.talkTo}
                    <span className="text-mainColor "> {locale.expert}</span>
                </button>

                {togglerForm ? (
                    <>
                        <div className="bg-black justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-6xl px-8">
                                {/*content*/}
                                <div className={`w-full ${togglerForm ? "block" : "hidden"}`} ref={formRef}>
                                    <p className="text-center lg:text-2xl mb-10 lg:mb-20">
                                        <span className="text-mainColor ">{locale.h}</span>
                                        {locale.ServicesFor} <span className="text-mainColor ">{locale.now}.</span>
                                    </p>
                                    <div
                                        className={`relative ${
                                            togglerForm ? "opacity-100" : "opacity-0"
                                        } justify-between flex items-center duration-500 border-r-mainColor border-r-[1px] borde`}
                                    >
                                        <X
                                            onClick={() => {
                                                setTogglerForm(false)
                                                window.scrollTo({
                                                    // top: window.pageYOffset - window.innerHeight / 2,
                                                    behavior: "smooth",
                                                })
                                            }}
                                            className="z-30 cursor-pointer absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 bg-red-500 text-textColor rounded-full w-6 lg:w-10 h-6 lg:h-10 p-1"
                                        />
                                        <span className="absolute rounded-full right-0 -top-[1px] h-[1px] w-full opacity-80  bg-gradient-to-r from-transparent to-mainColor"></span>
                                        <span className="absolute rounded-full right-0 -bottom-[1px] h-[1px] w-1/2 opacity-80  bg-gradient-to-r from-transparent to-mainColor"></span>
                                        <div className="hidden lg:block relative w-1/2 h-full">
                                            <div className="object-cover relative">
                                                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black via-mainColor via-[20%] to-transparent opacity-60" />
                                                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-[70%] to-transparent" />
                                                <Image
                                                    className="object-cover w-full min-h-[500px]"
                                                    src={images.form}
                                                    alt={images.form}
                                                    placeholder="blur"
                                                   blurDataURL={IMAGE_BLUR}
                                                    width={300}
                                                    height={900}
                                                />
                                            </div>
                                        </div>
                                        <Form {...form}>
                                            <form
                                                className="z-20 relative w-full bg-black pt-8 lg:pb-20 px-5 lg:px-10"
                                                onSubmit={form.handleSubmit(submitHandler)}
                                            >
                                                <div className="flex flex-col lg:flex-row gap-2">
                                                    <Input
                                                        className="text-subGray w-full outline-none bg-transparent placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-lg lg:placeholder:text-base  placeholder:text-subGray placeholder:text-opacity-50  my-20 px-2 sm:px-4 lg:px-8 py-3 lg:py-4"
                                                        name="name"
                                                        required
                                                        form={form}
                                                        type="text"
                                                        placeholder={locale.full_name}
                                                        reset={reset}
                                                    />
                                                    <Input
                                                        className="text-subGray w-full outline-none bg-transparent placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-lg lg:placeholder:text-base  placeholder:text-subGray placeholder:text-opacity-50  my-20 px-2 sm:px-4 lg:px-8 py-3 lg:py-4"
                                                        name="email"
                                                        required
                                                        form={form}
                                                        type="text"
                                                        placeholder={locale.email}
                                                        reset={reset}
                                                    />
                                                </div>
                                                <div className="flex gap-2 py-2">
                                                    <Input
                                                        className="text-subGray w-full outline-none bg-transparent placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-lg lg:placeholder:text-base  placeholder:text-subGray placeholder:text-opacity-50  my-20 px-2 sm:px-4 lg:px-8 py-3 lg:py-4"
                                                        name="phone"
                                                        required
                                                        form={form}
                                                        type="text"
                                                        placeholder={locale.phone}
                                                        reset={reset}
                                                    />
                                                    <div className="h-[58px]">
                                                        <SelectComp
                                                            bgInput={false}
                                                            options={[
                                                                {
                                                                    label: "English",
                                                                    id: "english",
                                                                    value: "EN",
                                                                },
                                                                {
                                                                    label: "العربية",
                                                                    id: "arabic",
                                                                    value: "AR",
                                                                },
                                                                {
                                                                    label: "Русский язык",
                                                                    id: "russian",
                                                                    value: "RU",
                                                                },
                                                            ]}
                                                            className="h-full w-full my-2"
                                                            name="language"
                                                            required
                                                            form={form}
                                                            placeholder={locale.prefer_lang}
                                                            reset={reset}
                                                        />
                                                    </div>
                                                </div>
                                                <Textarea
                                                    className="text-subGray w-full outline-none bg-transparent placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-lg lg:placeholder:text-base  placeholder:text-subGray placeholder:text-opacity-50  px-2 sm:px-4 lg:px-8 py-4"
                                                    name="message"
                                                    placeholder={locale.message}
                                                    id="message"
                                                    cols={30}
                                                    rows={6}
                                                    form={form}
                                                    reset={reset}
                                                ></Textarea>
                                                <button className="text-mainColor text-sm md:text-lg lg:text-xl block ml-auto pl-10 py-4 border-none outline-none">
                                                    {locale.send}
                                                </button>
                                            </form>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </FadeY>
        </>
    )
}

export default StatisticsForm
