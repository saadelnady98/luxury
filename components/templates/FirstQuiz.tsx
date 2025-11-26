"use client"

import { dictionary } from "@/dictionaries/clientContent"
import { images } from "@/utils/exportsImages"
import useCurrentLang from "../hooks/useCurrentLang"
import QuizCard from "./QuizCard"
import { QuizProps_TP } from "./QuizWrapper"

const FirstQuiz = ({ setQuizPhase, setAnswers }: Omit<QuizProps_TP, "questionNumber">) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    return (
        <div className="mt-8">
            <h2 className="text-2xl  text-center mb-8 px-2">{locale?.primary_goal}</h2>
            <div className="grid lg:grid-cols-2 lg:px-8 px-2 gap-x-5 lg:gap-y-0 gap-y-8">
                <QuizCard
                    image={images.quiz1}
                    text={locale?.investment}
                    setQuizPhase={setQuizPhase}
                    setAnswers={setAnswers}
                    questionNumber={1}
                />
                <QuizCard
                    image={images.quiz7}
                    text={locale?.personal_use}
                    setQuizPhase={setQuizPhase}
                    setAnswers={setAnswers}
                    questionNumber={2}
                />
            </div>
        </div>
    )
}

export default FirstQuiz
