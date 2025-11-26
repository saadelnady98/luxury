"use client"
import { dictionary } from "@/dictionaries/clientContent"
import { postData } from "@/utils/fetchData"
import { useState } from "react"
import { useForm } from "react-hook-form"
import useCurrentLang from "../hooks/useCurrentLang"
import SelectComp from "../ui/Select"
import SelectAvailability from "../ui/SelectAvailability"
import SubButton from "../ui/button/SubButton"
import { Form } from "../ui/form"
import { Input } from "../ui/input"
import InputFile from "../ui/input-file/InputFile"
import { Textarea } from "../ui/textarea"
import SelectCommunity from "./SelectCommunity"
import SelectPropertyType from "./SelectPropertyType"
import SuccessModule from "../ui/motion-elements/SuccessModule"

const ListForm = () => {
    const [reset, setReset] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    const form = useForm({
        defaultValues: {
            media: [],
        },
    })

    const submitHandler = async (values: any) => {
        const availability_id = values?.availability?.id
        const finalValues = {
            ...values,
            language: values.language.value,
            type_id: values.type.id,
            availability_id,
            address: values.address?.label,
        }
        await postData({
            endpoint: "api/form/list",
            values: finalValues,
            formData: true,
        }).then((res) => {
            if (!res.errors) {
                setReset(true)
                setShowSuccess(true)
            }
        })

        setTimeout(() => {
            setReset(false)
            setShowSuccess(false)
        }, 3000)
    }
    const preferOptions: any = {
        ar: [
            {
                value: "عربي",
                label: "عربي",
            },
            {
                value: "انجليزي",
                label: "انجليزي",
            },
            {
                value: "روسي",
                label: "روسي",
            },
        ],
        en: [
            {
                value: "arabic",
                label: "arabic",
            },
            {
                value: "english",
                label: "english",
            },
            {
                value: "russian",
                label: "russian",
            },
        ],
        ru: [
            {
                value: "арабский",
                label: "арабский",
            },
            {
                value: "английский",
                label: "английский",
            },
            {
                value: "русский",
                label: "русский",
            },
        ],
    }
    return (
        <div className="mt-4 lg:mt-16 mb-8">
            <Form {...form}>
                <form
                    className=" lg:bg-black lg:p-16 w-[90%] md:w-[80%] md:max-w-[920px] xl:max-w-[1112px] mx-auto lg:mx-0"
                    onSubmit={form.handleSubmit(submitHandler)}
                >
                    <h3 className="text-textColor lg:relative bottom-8 text-4xl  mb-4 lg:mb-0">{locale?.fill_list}</h3>
                    <p className="text-subGray opacity-40 text-mg mb-4 text-xl">
                        {locale?.fill_data} <br className={`${lang === "ar" && "hidden"}`} /> {locale?.everyone}
                    </p>
                    <div className="grid lg:grid-cols-2 gap-x-2 gap-y-1">
                        <Input reset={reset} form={form} name="name" placeholder={locale?.full_name} required />
                        <Input reset={reset} form={form} name="phone" required placeholder={locale?.phone} />
                        <Input reset={reset} form={form} name="email" required placeholder={locale?.email} />
                        <div className="h-[58px]">
                            <SelectComp
                                name="language"
                                placeholder={locale?.prefer_lang}
                                form={form}
                                options={preferOptions[lang]}
                                reset={reset}
                            />
                        </div>
                        <div className="h-[58px]">
                            <SelectAvailability form={form} reset={reset} placeholder={locale?.status} />
                        </div>
                        <div className="h-[58px]">
                            <SelectPropertyType reset={reset} form={form} placeholder={locale?.property_type} />
                        </div>
                    </div>
                    <div className="mt-4">
                        {/* <Input
              reset={reset}
              form={form}
              name="address"
              className="!my-6"
              required
              placeholder={locale?.address}
            /> */}
                        <div>
                            <SelectCommunity
                                styles={{
                                    minHeight: 80,
                                }}
                                placeholder={locale?.location}
                                form={form}
                                reset={reset}
                                name="address"
                            />
                        </div>

                        <InputFile reset={reset} form={form} name="media" />

                        <Textarea
                            reset={reset}
                            form={form}
                            name="message"
                            placeholder={locale?.message}
                            className="min-h-[191px] mb-8 placeholder:text-subGray placeholder:text-opacity-50"
                        />
                    </div>
                    <SuccessModule show={showSuccess} />

                    <div className="flex flex-col gap-4 lg:flex-row justify-between">
                        <SubButton className="w-full md:w-auto">{locale?.send}</SubButton>
                        {reset ? (
                            <p className="text-mainColor  py-2 px-8 bg-white max-h-12 text-center leading-7">
                                {locale?.sent_success}
                            </p>
                        ) : null}
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default ListForm
