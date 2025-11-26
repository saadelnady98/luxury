"use client"
import { dictionary } from "@/dictionaries/clientContent"
import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"
import useCurrentLang from "../hooks/useCurrentLang"
import { QuizProps_TP } from "./QuizWrapper"
import { IMAGE_BLUR } from "../constant/image-blure"

type QuizCard_TP = {
    image: any
    text: string
} & QuizProps_TP
const QuizCard = ({ image, text, setQuizPhase, setAnswers, questionNumber, quizPhase = "first" }: QuizCard_TP) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    const [selectedAnswer, setSelectedAnswer] = useState(0)
    const [radioBtnAnswer, setRadioBtnAnswer] = useState(0)
    const cardClasses = clsx({
        "bg-[#2a2a2a]  p-5 cursor-pointer fade_out": true,
        "lg:h-[250px] relative": quizPhase === "first",
        "lg:w-full lg:h-[250px] flex flex-col mx-auto justify-end relative": quizPhase === "second",
        "flex gap-x-4 p-8 lg:w-[100%] w-[98%] justify-center items-center mx-auto border-l-mainColor border-l-[1px] relative":
            quizPhase === "fourth",
        "": quizPhase === "fifth",
    })
    const selectAnswerHandler = (e: any) => {
        const answer = +e?.target?.id
        const radioAnswer = e?.target?.value
        setSelectedAnswer(answer)
        setRadioBtnAnswer(radioAnswer)
        // answer logic
        if (quizPhase === "first") {
            if (questionNumber === 1) {
                const result = {
                    en: {
                        question: "What is your primary goal for this property",
                        answer: "Investment",
                    },
                    ar: { question: "ما هو هدفك الأساسي لهذا العقار", answer: "استثمار" },
                    ru: {
                        question: "Какова ваша основная цель в отношении этого объекта недвижимости",
                        answer: "Инвестиции",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[0] = result
                    return newAnswers
                })
            }
            if (questionNumber === 2) {
                const result = {
                    en: {
                        question: "What is your primary goal for this property",
                        answer: "Personal use",
                    },
                    ar: {
                        question: "ما هو هدفك الأساسي لهذا العقار",
                        answer: "استخدام شخصي",
                    },
                    ru: {
                        question: "Какова ваша основная цель в отношении этого объекта недвижимости",
                        answer: "Персональное использование",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[0] = result
                    return newAnswers
                })
            }
            if (questionNumber === 3) {
                const result = {
                    en: {
                        question: "What is your primary goal for this property",
                        answer: "Personal use as a vacation home or residence",
                    },
                    ar: {
                        question: "ما هو هدفك الأساسي لهذا العقار",
                        answer: "الاستخدام الشخصي كمنزل لقضاء العطلات أو الإقامة",
                    },
                    ru: {
                        question: "Какова ваша основная цель в отношении этого объекта недвижимости",
                        answer: "Личное использование в качестве дома для отдыха или проживания",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[0] = result
                    return newAnswers
                })
            }
        }
        if (quizPhase === "second") {
            if (questionNumber === 1) {
                const result = {
                    en: {
                        question: "Choose your preferred property type",
                        answer: "Apartment",
                    },
                    ar: { question: "اختر نوع العقار المفضل لديك", answer: "شقة" },
                    ru: {
                        question: "Какова ваша ос новная цель в отношении этого объекта недвижимости",
                        answer: "Квартира",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[1] = result
                    return newAnswers
                })
            }
            if (questionNumber === 2) {
                const result = {
                    en: {
                        question: "Choose your preferred property type",
                        answer: "Townhouse",
                    },
                    ar: { question: "اختر نوع العقار المفضل لديك", answer: "تاون هاوس" },
                    ru: {
                        question: "Выберите предпочитаемый тип недвижимости",
                        answer: "Таунхаус",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[1] = result
                    return newAnswers
                })
            }
            if (questionNumber === 3) {
                const result = {
                    en: {
                        question: "Choose your preferred property type",
                        answer: "Квартира",
                    },
                    ar: { question: "اختر نوع العقار المفضل لديك", answer: "فيلا" },
                    ru: {
                        question: "Выберите предпочитаемый тип недвижимости",
                        answer: "вилла",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[1] = result
                    return newAnswers
                })
            }
            if (questionNumber === 4) {
                const result = {
                    en: {
                        question: "Choose your preferred property type",
                        answer: "penthouse",
                    },
                    ar: { question: "اختر نوع العقار المفضل لديك", answer: "روف" },
                    ru: {
                        question: "Выберите предпочитаемый тип недвижимости",
                        answer: "Пентхаус",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[1] = result
                    return newAnswers
                })
            }
        }
        if (quizPhase === "third") {
            if (e.target.value == 1) {
                const result = {
                    en: {
                        question: "Choose a number of bedrooms you are looking for",
                        answer: "1 Bedroom",
                    },
                    ar: {
                        question: "اختر عدد غرف النوم التي تبحث عنها",
                        answer: "1 غرفة",
                    },
                    ru: {
                        question: "Выберите количество спален, которое вы ищете",
                        answer: "1 спальня",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[2] = result
                    return newAnswers
                })
            }
            if (e.target.value == 2) {
                const result = {
                    en: {
                        question: "Choose a number of bedrooms you are looking for",
                        answer: "2-4 Bedroom",
                    },
                    ar: {
                        question: "اختر عدد غرف النوم التي تبحث عنها",
                        answer: "2-4 غرفة",
                    },
                    ru: {
                        question: "Выберите количество спален, которое вы ищете",
                        answer: "2-4 спальня",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[2] = result
                    return newAnswers
                })
            }
            if (e.target.value == 3) {
                const result = {
                    en: {
                        question: "Choose a number of bedrooms you are looking for",
                        answer: "5+ Bedroom",
                    },
                    ar: {
                        question: "اختر عدد غرف النوم التي تبحث عنها",
                        answer: "5+ غرفة ",
                    },
                    ru: {
                        question: "Выберите количество спален, которое вы ищете",
                        answer: "5+ спальня",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[2] = result
                    return newAnswers
                })
            }
        }
        if (quizPhase === "fourth") {
            if (questionNumber === 1) {
                const result = {
                    en: { question: "cost", answer: "1.5M - 3M" },
                    ar: { question: "التكلفة", answer: "1.5M - 3M" },
                    ru: { question: "расходы", answer: "1.5M - 3M" },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[3] = result
                    return newAnswers
                })
            }
            if (questionNumber === 2) {
                const result = {
                    en: { question: "cost", answer: "3M - 5M" },
                    ar: { question: "التكلفة", answer: "3M - 5M" },
                    ru: { question: "расходы", answer: "3M - 5M" },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[3] = result
                    return newAnswers
                })
            }
            if (questionNumber === 3) {
                const result = {
                    en: { question: "cost", answer: "5M - 8M" },
                    ar: { question: "التكلفة", answer: "5M - 8M" },
                    ru: { question: "расходы", answer: "5M - 8M" },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[3] = result
                    return newAnswers
                })
            }
            if (questionNumber === 4) {
                const result = {
                    en: { question: "cost", answer: "Above 8M" },
                    ar: { question: "التكلفة", answer: "Above 8M" },
                    ru: { question: "расходы", answer: "Above 8M" },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[3] = result
                    return newAnswers
                })
            }
        }
        if (quizPhase === "fifth") {
            if (questionNumber === 1) {
                const result = {
                    en: {
                        question: "Choose a lifestyle that best suits you",
                        answer: "Urban & Downtown Living",
                    },
                    ar: {
                        question: "اختر نمط الحياة الذي يناسبك",
                        answer: "الحياة في المناطق الحضرية ووسط المدينة",
                    },
                    ru: {
                        question: "Выберите образ жизни, который лучше всего подходит вам",
                        answer: "Городская жизнь и жизнь в центре города",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[4] = result
                    return newAnswers
                })
            }
            if (questionNumber === 2) {
                const result = {
                    en: {
                        question: "Choose a lifestyle that best suits you",
                        answer: "Beachfront and Waterfront Living",
                    },
                    ar: {
                        question: "اختر نمط الحياة الذي يناسبك",
                        answer: "المعيشة على شاطئ البحر والواجهة البحرية",
                    },
                    ru: {
                        question: "Выберите образ жизни, который лучше всего подходит вам",
                        answer: "3Жизнь на берегу и на набережной",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[4] = result
                    return newAnswers
                })
            }
            if (questionNumber === 3) {
                const result = {
                    en: {
                        question: "Choose a lifestyle that best suits you",
                        answer: "Beachfront and Waterfront Living",
                    },
                    ar: {
                        question: "اختر نمط الحياة الذي يناسبك",
                        answer: "المعيشة على شاطئ البحر والواجهة البحرية",
                    },
                    ru: {
                        question: "Выберите образ жизни, который лучше всего подходит вам",
                        answer: "Жизнь на берегу и на набережной",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[4] = result
                    return newAnswers
                })
            }
            if (questionNumber === 4) {
                const result = {
                    en: {
                        question: "Choose a lifestyle that best suits you",
                        answer: "Island Living",
                    },
                    ar: {
                        question: "اختر نمط الحياة الذي يناسبك",
                        answer: "حياة الجزيرة",
                    },
                    ru: {
                        question: "Выберите образ жизни, который лучше всего подходит вам",
                        answer: "Жизнь на острове",
                    },
                }
                setAnswers((prev) => {
                    const newAnswers = [...prev]
                    newAnswers[4] = result
                    return newAnswers
                })
            }
        }
        setTimeout(() => {
            switch (quizPhase) {
                case "first":
                    setQuizPhase("second")
                    break
                case "second":
                    setQuizPhase("third")
                    break
                case "third":
                    setQuizPhase("fourth")
                    break
                case "fourth":
                    setQuizPhase("fifth")
                    break
                default:
                    setQuizPhase("first")
            }
        }, 500)
    }

    if (quizPhase === "first")
        return (
            <div id={String(questionNumber)} className={clsx(cardClasses)} onClick={selectAnswerHandler}>
                <Image
                    id={String(questionNumber)}
                    alt="quiz image"
                    src={image}
                     placeholder="blur"
                    blurDataURL={IMAGE_BLUR}
                    width={50}
                    height={50}
                    className="object-cover w-full mb-4"
                />
                <p className="text-lg text-center">{text}</p>
                {/* <button className="absolute top-3 right-2 scale-75">
          <CheckIcon
            className={`${
              questionNumber == selectedAnswer
                ? "bg-blue-500"
                : "opacity-0 invisible"
            } rounded-full duration-200`}
          />
        </button> */}
            </div>
        )
    if (quizPhase === "second")
        return (
            <div id={String(questionNumber)} className={clsx(cardClasses)} onClick={selectAnswerHandler}>
                <Image
                    id={String(questionNumber)}
                    alt="quiz image"
                    src={image}
                     placeholder="blur"
                     blurDataURL={IMAGE_BLUR}
                    width={50}
                    height={50}
                    className="object-cover w-[250px] h-full mb-4 overflow-hidden"
                />
                <p className="text-lg text-center">{text}</p>
                {/* <button className="absolute -top-2 -right-2 scale-75">
          <CheckIcon
            className={`${
              questionNumber == selectedAnswer
                ? "bg-blue-500"
                : "opacity-0 invisible"
            } duration-200 rounded-full`}
          />
        </button> */}
            </div>
        )
    if (quizPhase === "third")
        return (
            <div className="lg:flex justify-between lg:flex-row flex-col fade_out gap-4">
                <div>
                    <div className="flex items-center gap-x-2 bg-[#2a2a2a] p-6  lg:w-56 w-full relative">
                        <input value="1" type="radio" id="accent1" onChange={selectAnswerHandler} name="bedrooms" />
                        <label htmlFor="accent1">1 {locale?.bedroom}</label>

                        {/* <button className="absolute -top-2 -right-2 scale-75">
              <CheckIcon
                className={`${
                  1 == radioBtnAnswer ? "bg-blue-500" : "opacity-0 invisible"
                } duration-200 rounded-full`}
              />
            </button> */}
                    </div>
                    <div className="flex items-center gap-x-2 bg-[#2a2a2a] p-6  lg:w-56 w-full my-4 relative">
                        <input value="2" type="radio" id="accent2" onChange={selectAnswerHandler} />
                        <label htmlFor="accent2">2-4 {locale?.bedroom}</label>

                        {/* <button className="absolute -top-2 -right-2 scale-75">
              <CheckIcon
                className={`${
                  2 == radioBtnAnswer ? "bg-blue-500" : "opacity-0 invisible"
                } duration-200 rounded-full`}
              />
            </button> */}
                    </div>
                    <div className="flex items-center gap-x-2 bg-[#2a2a2a] p-6  lg:w-56 w-full relative">
                        <input value="3" type="radio" id="accent3" onChange={selectAnswerHandler} />
                        <label htmlFor="accent3">5+ {locale?.bedroom}</label>

                        {/* <button className="absolute -top-2 -right-2 scale-75">
              <CheckIcon
                className={`${
                  3 == radioBtnAnswer ? "bg-blue-500" : "opacity-0 invisible"
                } duration-200 rounded-full`}
              />
            </button> */}
                    </div>
                </div>
                <Image
                    alt="quiz image"
                    src={image}
                     placeholder="blur"
                     blurDataURL={IMAGE_BLUR}
                    width={300}
                    height={100}
                    className="object-cover lg:w-[100%] h-[300px] lg:mt-0 mt-8"
                />
            </div>
        )
    if (quizPhase === "fourth")
        return (
            <div id={String(questionNumber)} className={clsx(cardClasses)} onClick={selectAnswerHandler}>
                <Image
                    id={String(questionNumber)}
                    alt="quiz image"
                    src={image}
                     placeholder="blur"
                     blurDataURL={IMAGE_BLUR}
                    width={20}
                    height={20}
                    className="object-cover"
                />
                <p>{text}</p>
                <span className="absolute top-0 left-0 bg-gradient-to-r from-mainColor to-transparent h-[1px] w-full block"></span>
                <span className="absolute bottom-0 left-0 bg-gradient-to-r from-mainColor to-transparent h-[1px] w-full block"></span>
                {/* <button className="absolute -top-2 -right-2 scale-75">
          <CheckIcon
            className={`${
              questionNumber == selectedAnswer
                ? "bg-blue-500"
                : "opacity-0 invisible"
            } duration-200 rounded-full`}
          />
        </button> */}
            </div>
        )
    if (quizPhase === "fifth")
        return (
            <>
                <div className={clsx(cardClasses)} onClick={selectAnswerHandler}>
                    <div className="flex gap-x-4 justify-between items-center">
                        <Image
                            alt="quiz image"
                            src={image}
                            width={100}
                            height={100}
                            placeholder="blur"
                             blurDataURL={IMAGE_BLUR}
                            className="object-cover"
                        />
                        <p className="text-lg text-center">{text}</p>
                    </div>
                </div>
            </>
        )
}

export default QuizCard
