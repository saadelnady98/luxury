import { dictionary } from "@/dictionaries/clientContent";
import { images } from "@/utils/exportsImages";
import { ArrowLeft } from "lucide-react";
import useCurrentLang from "../hooks/useCurrentLang";
import QuizCard from "./QuizCard";
import { QuizProps_TP } from "./QuizWrapper";

const FifthQuizTest = ({
  setQuizPhase,
  setAnswers,
}: Omit<QuizProps_TP, "questionNumber" | "quizPhase">) => {
  const { lang } = useCurrentLang();
  const locale = dictionary[lang!];
  return (
    <div className="mt-8">
      <h2 className="text-2xl  text-center mb-8 px-2">
        {locale?.primary_goal}
      </h2>
      <div className="grid px-2 gap-8 lg:grid-cols-2 lg:px-8 px:2  gap-y-4">
        <QuizCard
          image={images.quiz3}
          text="Capital appreciation and resale potential"
          setQuizPhase={setQuizPhase}
          setAnswers={setAnswers}
          questionNumber={2}
          quizPhase="fifth"
        />
        <QuizCard
          image={images.quiz4}
          text="Seeking long-term rental income"
          setQuizPhase={setQuizPhase}
          setAnswers={setAnswers}
          questionNumber={1}
          quizPhase="fifth"
        />
        <QuizCard
          image={images.quiz6}
          text="Personal use as a vacation home or residence"
          setQuizPhase={setQuizPhase}
          setAnswers={setAnswers}
          questionNumber={3}
          quizPhase="fifth"
        />
        <QuizCard
          image={images.quiz9}
          text="Personal use as a vacation home or residence"
          setQuizPhase={setQuizPhase}
          setAnswers={setAnswers}
          questionNumber={4}
          quizPhase="fifth"
        />
      </div>
      <button
        className="flex gap-x-2 mt-8 ms-8"
        onClick={() => setQuizPhase("fourth")}
      >
        <ArrowLeft /> {locale?.back}
      </button>
    </div>
  );
};

export default FifthQuizTest;
