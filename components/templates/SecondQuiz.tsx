"use client"
import { dictionary } from "@/dictionaries/clientContent"
import { images } from "@/utils/exportsImages"
import useCurrentLang from "../hooks/useCurrentLang"
import QuizCard from "./QuizCard"
import { QuizProps_TP } from "./QuizWrapper"

const SecondQuiz = ({ setQuizPhase, setAnswers, quizPhase }: Omit<QuizProps_TP, "questionNumber">) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    return (
        <div className="mt-8">
            <h2 className="text-2xl  text-center mb-8 px-2">{locale?.property_type}</h2>
            <div className="grid lg:grid-cols-4 items-end lg:px-8 px:2 gap-x-5 lg:gap-y-0 gap-y-4">
                <QuizCard
                    image={images.quiz2}
                    text={locale?.apartment}
                    setQuizPhase={setQuizPhase}
                    setAnswers={setAnswers}
                    questionNumber={1}
                    quizPhase={quizPhase}
                />
                <QuizCard
                    image={images.quiz8}
                    text={locale?.townhouse}
                    setQuizPhase={setQuizPhase}
                    setAnswers={setAnswers}
                    questionNumber={2}
                    quizPhase={quizPhase}
                />
                <QuizCard
                    image={images.quiz10}
                    text={locale?.villa}
                    setQuizPhase={setQuizPhase}
                    setAnswers={setAnswers}
                    questionNumber={3}
                    quizPhase={quizPhase}
                />
                <QuizCard
                    image={images.quiz11}
                    text={locale?.penthouse}
                    setQuizPhase={setQuizPhase}
                    setAnswers={setAnswers}
                    questionNumber={4}
                    quizPhase={quizPhase}
                />
            </div>
        </div>
    )
}

export default SecondQuiz
