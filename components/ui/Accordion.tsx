import {
  AccordionContent,
  AccordionItem,
  Accordion as AccordionShad,
  AccordionTrigger,
} from "@/components/ui/accordionShadcn";
type AccordionProps_TP = {
  header: string;
  content: string;
};
const Accordion = ({ header, content }: AccordionProps_TP) => {
  return (
    <AccordionShad
      type="single"
      collapsible
      className="w-full shadow-sm border focus-within:border-transparent focus-within:bg-subDark border-mainGray border-opacity-40  p-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="lg:text-[28px] text-lg lg:px-4">
          {header}
        </AccordionTrigger>
        <AccordionContent className="text-mainGray lg:leading-[50px] leading-[40px] text-lg lg:text-2xl lg:px-4">
          {content}
        </AccordionContent>
      </AccordionItem>
    </AccordionShad>
  );
};

export default Accordion;
