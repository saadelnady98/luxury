import Header from "@/components/templates/Header";
import AgentCard from "@/components/ui/AgentCard";
import { getServerDictionary } from "@/lib/dictionary";
import { images } from "@/utils/exportsImages";
import { getData } from "@/utils/fetchData";
import { Agent_TP } from "agent";
import { Metadata } from "next";
import { Fragment } from "react";

type AgentsProps_TP = {
  params: {
    lang: "ar" | "en" | "ru";
  };
};

export const metadata: Metadata = {
  title: "Agents | Luxurylivinhomes",
  description: `Meet our team of experienced real estate agents at 7 Continents. Our dedicated agents possess in-depth knowledge of the UAE property market and are committed to helping you find your ideal property or maximize the value of your investment. Whether you're buying, selling, or leasing, trust our skilled agents to guide you through every step of the process with professionalism and integrityt`,
};

const Agents = async ({ params: { lang } }: AgentsProps_TP) => {
  const agentsData: { data: Agent_TP[] } = await getData({
    endpoint: "api/agent",
    lang,
  });
  const locale: any = await getServerDictionary(lang);

  if (!agentsData) return null;

  return (
    <Fragment>
      <Header
        image={images.header}
        subTitle="agents"
        title={locale.home}
        mainTitle={locale.all_agents}
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 lg:px-16 -translate-y-16">
        {agentsData?.data?.map((agent) => (
          <AgentCard
            key={agent?.slug}
            isAgent={false}
            isOpened
            agentData={agent}
            wrapperClassName="border border-[#d9d9d9] border-opacity-20"
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Agents;
