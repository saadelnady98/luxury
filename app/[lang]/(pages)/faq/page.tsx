import Header from "@/components/templates/Header";
import Accordion from "@/components/ui/Accordion";
import { getServerDictionary } from "@/lib/dictionary";
import { images } from "@/utils/exportsImages";
import { getData } from "@/utils/fetchData";
import { Metadata } from "next";

type FaqProps_TP = {
  params: {
    lang: "ar" | "en" | "ru";
  };
};
type Faq_TP = {
  data: {
    id: number;
    question: string;
    answer: string;
  }[];
};
export const metadata: Metadata = {
  title: 'Faqs | Luxurylivinhomes',
  description: `Get answers to your most pressing real estate questions with our comprehensive FAQs. Whether you're curious about the home buying process, understanding mortgage options, or navigating property investment strategies, our FAQs provide clear and concise information to guide you. Explore common queries addressed by industry experts and empower yourself to make informed decisions in your real estate journey`,
}
const Faq = async ({ params: { lang } }: FaqProps_TP) => {
  const locale: any = await getServerDictionary(lang);
  const faqData: Faq_TP = await getData({
    endpoint: "api/faq",
    lang,
  });
  if (!faqData) return null;
  return (
    <div className="-translate-y-28">
      <Header image={images.header} title={locale?.home} subTitle="fAQs" />
      <main className="container flex flex-col gap-y-8 my-10">
        {faqData?.data?.map((faq) => (
          <Accordion
            key={faq?.id}
            content={faq?.answer}
            header={faq?.question}
          />
        ))}
      </main>
    </div>
  );
};

export default Faq;
