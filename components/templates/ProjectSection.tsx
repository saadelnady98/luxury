import { getServerDictionary } from "@/lib/dictionary";
import SectionHeader from "../ui/SectionHeader";
import ProjectBarFilter from "../ui/ProjectBarFilter";
import ProjectsSection from "../ui/ProjectsSection";
type DesignSectionProps_TP = {
  lang: "ar" | "en" | "ru";
};
async function ProjectSection({ lang }: DesignSectionProps_TP) {
  const locale: any = await getServerDictionary(lang);

  return ( 
    <ProjectsSection locale={locale} />
  );
}

export default ProjectSection;
