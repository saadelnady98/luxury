import AboutUsFirstSection from "@/components/templates/AboutUsFirstSection";
import AboutUsSecondSection from "@/components/templates/AboutUsSecondSection";
import AboutUsThirdSection from "@/components/templates/AboutUsThirdSection";
import Header from "@/components/templates/Header";
import { getServerDictionary } from "@/lib/dictionary";
import { images } from "@/utils/exportsImages";
import { getData } from "@/utils/fetchData";
import { Metadata } from "next";
import { Fragment } from "react";
type Lang_TP = {
  params: {
    lang: "ar" | "en" | "ru";
  };
};
export async function generateMetadata({
  params: { lang },
}: Lang_TP): Promise<Metadata> {
  const aboutUsData = await getData({
    endpoint: "api/about_us/about",
    lang,
  });
  return {
    title: `${aboutUsData?.data?.title} | Luxurylivinhomes`,
    description: aboutUsData?.data?.description,
  };
}
const About = async ({ params: { lang } }: Lang_TP) => {
  const locale: any = await getServerDictionary(lang);
  const aboutUsData = await getData({
    endpoint: "api/about_us/about",
    lang,
  });
  return (
    <Fragment>
      <Header image={images.header} title={locale?.home} subTitle={"about"} />
      <div className="bg-subDark lg:bg-transparent">
        <AboutUsFirstSection lang={lang} aboutUsData={aboutUsData?.data} />
        <AboutUsSecondSection lang={lang} />
        <AboutUsThirdSection lang={lang} />
      </div>
    </Fragment>
  );
};

export default About;
