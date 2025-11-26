import Header from "@/components/templates/Header";
import { getServerDictionary } from "@/lib/dictionary";
import { images } from "@/utils/exportsImages";
import { getData } from "@/utils/fetchData";
import { Lang } from "lang";
import { Metadata } from "next";

type PrivacyProps_TP = {
  params: {
    lang: "ar" | "en" | "ru";
  };
};

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const privacyData = await getData({
    endpoint: "api/setting/privacy",
    lang,
  });
  return {
    title: "Privacy policy | 7 continents",
    description: privacyData?.data?.description,
  };
}

const Privacy = async ({ params: { lang } }: PrivacyProps_TP) => {
  const locale: any = await getServerDictionary(lang);
  const privacyData = await getData({
    endpoint: "api/setting/privacy",
    lang,
  });

  return (
    <div>
      <Header image={images.header} title={locale?.home} subTitle={"privacy"} />
      <main className="lg:px-24 px-2 text-center">
        <p
          className="text-subGray lg:leading-[55px] leading-[35px] text-md lg:text-2xl font-[500]"
          dangerouslySetInnerHTML={{
            __html:
              privacyData?.data?.description?.replace(/\n/g, "<br>") || "",
          }}
        />
      </main>
    </div>
  );
};

export default Privacy;
