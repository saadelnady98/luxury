import Header from "@/components/templates/Header";
import { getServerDictionary } from "@/lib/dictionary";
import { images } from "@/utils/exportsImages";
import { getData } from "@/utils/fetchData";
import { Lang } from "lang";
import { Metadata } from "next";

type TermsProps_TP = {
  params: {
    lang: "ar" | "en" | "ru";
  };
};

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const termsData = await getData({
    endpoint: "api/setting/terms",
    lang,
  });
  return {
    title: "Terms and conditions | 7 continents",
    description: termsData?.data?.description,
  };
}

const Terms = async ({ params: { lang } }: TermsProps_TP) => {
  const locale: any = await getServerDictionary(lang);
  const termsData = await getData({
    endpoint: "api/setting/terms",
    lang,
  });

  return (
    <div>
      <Header image={images.header} title={locale?.home} subTitle={"terms"} />
      <main className="lg:px-24 px-2">
        <p
          className="text-subGray mb-40 text-center lg:leading-[55px] leading-[35px] text-md lg:text-2xl font-[500]"
          dangerouslySetInnerHTML={{
            __html: termsData?.data?.description?.replace(/\n/g, "<br>") || "",
          }}
        />
      </main>
    </div>
  );
};

export default Terms;
