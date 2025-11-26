"use client"
import { dictionary } from "@/dictionaries/clientContent"
import { postData } from "@/utils/fetchData"
import { ArrowRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import useCurrentLang from "../hooks/useCurrentLang"
import Map from "../ui/Map"
import SubButton from "../ui/button/SubButton"
import { Form } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import SelectPreferLang from "./SelectPreferLang"
import { Contacts_TP } from "contacts"
import SelectComp from "../ui/Select"
import SuccessModule from "../ui/motion-elements/SuccessModule"
type FormValues_TP = {
    name: string
    phone: string
    email: string
    language: { value: string }
    message: string
}
const ContactUsForm = ({ contacts }: { contacts: Contacts_TP }) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    const [renderState, setRenderState] = useState(1)
    const [reset, setReset] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const form = useForm<FormValues_TP>()
    const submitHandler = async (values: FormValues_TP) => {
        const finalValues = {
            ...values,
            type: "contact",
            language: values.language.value,
        }
        await postData({
            endpoint: "api/form/contact",
            values: finalValues,
        }).then((res) => {
            if (!res.errors) {
                setShowSuccess(true)
                setReset(true)
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
    const FormRender = useCallback(
        () => (
            <>
                <h3 className="font-[600] text-2xl lg:text-4xl">{locale?.send_message}</h3>
                <div className="lg:w-[17%] md:w-[30%] w-[70%] bg-mainColor h-[1px] my-8"></div>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(submitHandler)}>
                            <div className="grid lg:grid-cols-2 gap-6 mb-8">
                                <Input form={form} name="name" required placeholder={locale?.full_name} reset={reset} />
                                <Input
                                    form={form}
                                    name="phone"
                                    type="number"
                                    required
                                    placeholder={locale?.phone}
                                    reset={reset}
                                />
                                <Input
                                    form={form}
                                    name="email"
                                    type="email"
                                    required
                                    placeholder={locale?.email}
                                    reset={reset}
                                />
                                <div className="h-[58px] ">
                                    <SelectComp
                                        name="language"
                                        placeholder={locale?.prefer_lang}
                                        form={form}
                                        options={preferOptions[lang]}
                                        reset={reset}
                                    />
                                </div>
                            </div>
                            <Textarea
                                form={form}
                                name="message"
                                placeholder={locale?.message}
                                className="min-h-[264px] mb-8 placeholder:text-subGray placeholder:text-opacity-50"
                                reset={reset}
                            />

                            <SuccessModule show={showSuccess} />

                            <div className="flex flex-col lg:flex-row justify-between">
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
                <button className="flex gap-x-2 absolute bottom-0" onClick={() => setRenderState(2)}>
                    <ArrowRight />
                    <span>{locale?.open_map}</span>
                </button>
            </>
        ),
        [reset]
    )
    const MapRender = () => (
        <>
            <h3 className="font-[600] text-2xl lg:text-4xl">{locale?.view_location}</h3>
            <div className="lg:w-[17%] md:w-[30%] w-[70%] bg-mainColor h-[1px] my-8"></div>
            <div className="max-w-[1080px] max-h-[530px] min-w-[328px] min-h-[358px]">
                <Map
                    markerPositions={[contacts?.data?.location]}
                    center={{
                        lat: contacts?.data?.location?.lat,
                        lng: contacts?.data?.location?.long,
                    }}
                    zoom={15}
                />
            </div>
            <button className="flex gap-x-2 absolute bottom-0" onClick={() => setRenderState(1)}>
                <ArrowRight />
                <span>{locale?.back_to_send}</span>
            </button>
        </>
    )
    return <div className="col-span-8 py-16 relative">{renderState === 1 ? <FormRender /> : <MapRender />}</div>
}

export default ContactUsForm
