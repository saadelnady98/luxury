'use client'
import { dictionary } from "@/dictionaries/clientContent"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import useCurrentLang from "../hooks/useCurrentLang"
import StepperComp from "../ui/StepperComp"
import SixthQuiz from "./FifthQuiz"
import FirstQuiz from "./FirstQuiz"
import FourthQuiz from "./FourthQuiz"
import SecondQuiz from "./SecondQuiz"
import ThirdQuiz from "./ThirdQuiz"
type Question = {
    question: string
    answer: string
}
type Answers_TP = {
    ar: Question,
    en: Question,
    ru: Question,
}[]
type quizPhase_TP = 'first' | 'second' | 'third' | 'fourth' | 'fifth'
export type QuizProps_TP = {
    setQuizPhase: React.Dispatch<React.SetStateAction<quizPhase_TP>>,
    setAnswers: React.Dispatch<React.SetStateAction<Answers_TP>>
    questionNumber: number
    quizPhase?: quizPhase_TP
    answers?: Answers_TP
}
const QuizWrapper = () => {
    const { lang } = useCurrentLang();
    const locale = dictionary[lang!];
    const [quizPhase, setQuizPhase] = useState<quizPhase_TP>('first')
    const [answers, setAnswers] = useState<Answers_TP>([])
    const renderer: Record<quizPhase_TP, JSX.Element> = {
        first: <FirstQuiz setQuizPhase={setQuizPhase} setAnswers={setAnswers} quizPhase={quizPhase} />,
        second: <SecondQuiz setQuizPhase={setQuizPhase} setAnswers={setAnswers} quizPhase={quizPhase} />,
        third: <ThirdQuiz setQuizPhase={setQuizPhase} setAnswers={setAnswers} quizPhase={quizPhase} />,
        fourth: <FourthQuiz setQuizPhase={setQuizPhase} setAnswers={setAnswers} quizPhase={quizPhase} />,
        // fifth: <FifthQuiz setQuizPhase={setQuizPhase} setAnswers={setAnswers} />,
        fifth: <SixthQuiz answers={answers} />,
    }

    const activeStepState: Record<quizPhase_TP, number> = {
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
        fifth: 5,
    }

    const backHandler = () => {
        switch (quizPhase) {
            case 'second':
                setQuizPhase("first")
                break;
            case 'third':
                setQuizPhase("second")
                break;
            case 'fourth':
                setQuizPhase("third")
                break;
            default:
                break;
        }
    }

    return (
        <div className="lg:center !w-full relative">
            <StepperComp stepsCount={4} activeStep={activeStepState[quizPhase]} className={`${quizPhase == 'fifth' ? '!hidden' : 'lg:block'} hidden lg:block absolute -top-16 !w-[1030px]`} />
            <div className={`${quizPhase !== 'fifth' && 'h-[250px]'}`}>
                {renderer[quizPhase]}
            </div>
            {
                (quizPhase !== 'first' && quizPhase !== 'fifth') &&
                <button
                    className="flex gap-x-2 absolute md:-bottom-40 -bottom-20 left-10"
                    onClick={backHandler}
                >
                    <ArrowLeft /> {locale?.back}
                </button>
            }
        </div>
    )
}

export default QuizWrapper