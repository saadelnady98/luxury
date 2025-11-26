import { dictionary } from "@/dictionaries/clientContent";
import { images } from "@/utils/exportsImages";
import useCurrentLang from "../hooks/useCurrentLang";
import QuizCard from "./QuizCard";
import { QuizProps_TP } from "./QuizWrapper";

const ThirdQuiz = ({
  setQuizPhase,
  setAnswers,
  quizPhase,
}: Omit<QuizProps_TP, "questionNumber">) => {
  const { lang } = useCurrentLang();
  const locale = dictionary[lang!];
  return (
    <div className="mt-8">
      <h2 className="text-2xl  text-center mb-8 px-2">
        {locale?.bedroom_numbers}
      </h2>
      <div className="px-8 gap-x-8">
        <QuizCard
          image={images.quiz12}
          text=""
          setQuizPhase={setQuizPhase}
          setAnswers={setAnswers}
          questionNumber={1}
          quizPhase={quizPhase}
        />
      </div>
    </div>
  );
};

export default ThirdQuiz;
