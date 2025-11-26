"use client";
import useCurrentLang from "@/components/hooks/useCurrentLang";
import { dictionary } from "@/dictionaries/clientContent";

export default function AddListButton() {
  const { lang } = useCurrentLang();
  const locale = dictionary[lang!];
  return (
    <button
      className={`group relative  w-full text-sm xl:text-sm uppercase border-[1px] border-mainColor text-mainColor px-5 xl:px-10 py-3 xl:py-4`}
    >
      <span className="absolute -top-[1px] -left-[1px] w-8 group-hover:-translate-x-8 h-[1px] bg-subDark opacity-70 duration-200"></span>
      <span className="absolute -bottom-[1px] -right-[1px] w-8 group-hover:translate-x-8 h-[1px] bg-subDark opacity-70 duration-200"></span>
      <span className="absolute -left-[1px] -top-[1px] h-8 w-[1px] group-hover:-translate-y-8 bg-subDark opacity-70 duration-200"></span>
      <span className="absolute -right-[1px] -bottom-[1px] h-8 w-[1px] group-hover:translate-y-8 bg-subDark opacity-70 duration-200"></span>
      {locale?.listyourProperty}
    </button>
  );
}
