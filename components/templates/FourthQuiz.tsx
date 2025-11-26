import { dictionary } from "@/dictionaries/clientContent"
import { images } from "@/utils/exportsImages"
import useCurrentLang from "../hooks/useCurrentLang"
import QuizCard from "./QuizCard"
import { QuizProps_TP } from "./QuizWrapper"

const FourthQuiz = ({ setQuizPhase, setAnswers, quizPhase }: Omit<QuizProps_TP, "questionNumber">) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    return (
        <div className="mt-8">
            <h2 className="text-center mb-8 text-xl font-semibold">{locale?.budget}</h2>
            <div className="lg:grid-cols-2 px-8 grid lg:px-8 px:2 gap-4">
                <QuizCard
                    image={images.coins}
                    text="1.5M - 3M"
                    setQuizPhase={setQuizPhase}
                    setAnswers={setAnswers}
                    questionNumber={1}
                    quizPhase="fourth"
                />
                <QuizCard
                    image={images.coins}
                    text="3M - 5M"
                    setQuizPhase={setQuizPhase}
                    setAnswers={setAnswers}
                    questionNumber={2}
                    quizPhase="fourth"
                />
                <QuizCard
                    image={images.coins}
                    text="5M - 8M"
                    setQuizPhase={setQuizPhase}
                    setAnswers={setAnswers}
                    questionNumber={3}
                    quizPhase="fourth"
                />
                <QuizCard
                    image={images.coins}
                    text={`${locale?.above} 8M`}
                    setQuizPhase={setQuizPhase}
                    setAnswers={setAnswers}
                    questionNumber={4}
                    quizPhase="fourth"
                />
            </div>
        </div>
    )
}

export default FourthQuiz
