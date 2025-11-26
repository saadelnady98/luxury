"use client"
import { dictionary } from "@/dictionaries/clientContent"
import { images } from "@/utils/exportsImages"
import { postData } from "@/utils/fetchData"
import Image from "next/image"
import { useState } from "react"
import { useForm } from "react-hook-form"
import useCurrentLang from "../hooks/useCurrentLang"
import SubButton from "../ui/button/SubButton"
import { Form } from "../ui/form"
import { Input } from "../ui/input"
import { QuizProps_TP } from "./QuizWrapper"
import { IMAGE_BLUR } from "../constant/image-blure"
import Link from "next/link"
type values_TP = {
    name: string
    email: string
    phone: string
    privacy_policy: boolean
}
const SixthQuiz = ({ answers }: Omit<QuizProps_TP, "questionNumber" | "setQuizPhase" | "setAnswers" | "quizPhase">) => {
    const [reset, setReset] = useState(false)
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    const form = useForm<values_TP>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            privacy_policy: false,
        },
    })
    const sendDataHandler = async (values: any) => {
        const data = await postData({
            endpoint: "api/quiz",
            values,
        }).then((res) => !res.errors && setReset(true))
        setTimeout(() => {
            setReset(false)
        }, 3000)
    }
    const submitHandler = (values: values_TP) => {
        sendDataHandler({ ...values, questions_answers: answers })
    }
    return (
        <div className="lg:flex flex-col lg:flex-row min-h-[95vh] gap-x-8">
            <div className="lg:bg-mainColor flex flex-col justify-center items-center lg:w-1/2">
                <Image
                    src={images.rocket}
                    width={50}
                    height={50}
                    placeholder="blur"
                   blurDataURL={IMAGE_BLUR}
                    alt="rocket"
                    className="scale-[1.7] relative xl:bottom-20 ltr:xl:right-36 rtl:xl:left-40"
                />
                <p className="xl:text-4xl w-[80%] lg:!leading-[3.5rem] leading-[2.5rem] lg:ms-0 my-8 lg:my-0 text-start">
                    Where should we send your personalized offer?
                </p>
            </div>
            <div className="lg:w-1/2 me-8 my-auto ms-8 lg:ms-0">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitHandler)} className="flex flex-col gap-y-4">
                        <Input form={form} name="name" required placeholder="Name" reset={reset} />
                        <Input form={form} name="email" type="email" required placeholder="Email" reset={reset} />
                        <Input form={form} name="phone" required type="number" placeholder="Phone" reset={reset} />
                        <div className="flex flex-col justify-between gap-4">
                            <SubButton className="!w-full !md:w-auto">{locale?.get_offer}</SubButton>
                            {reset ? (
                                <p className="text-mainColor  py-2 px-8 bg-white max-h-12 text-center leading-7">
                                    {locale?.sent_success}
                                </p>
                            ) : null}
                        </div>
                        <div className="flex gap-x-2 mt-4 lg:mt-0">
                            <input type="checkbox" id="privacy" {...form.register("privacy_policy")} required />
                            <label htmlFor="privacy">{locale?.agree_privacy}</label>
                            <Link href="/privacy" target="_blank">
                                ( {locale?.Privacy_policy} ){" "}
                            </Link>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default SixthQuiz
