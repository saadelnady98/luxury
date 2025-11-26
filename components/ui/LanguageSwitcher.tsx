"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Dropdown from "@/components/ui/Dropdown";
import { i18n } from "@/i18n.config";
import { Lang } from "lang";
import { useEffect } from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  type changeWindowDirection_TP = {
    lang: "en" | "ar" | "ru";
    dir: "rtl" | "ltr";
  };
  const changeWindowDirection = ({ lang, dir }: changeWindowDirection_TP) => {
    const htmlTag = document.querySelector("html");
    htmlTag?.setAttribute("dir", dir);
    htmlTag?.setAttribute("lang", lang);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const htmlTag = document.querySelector("html");
      const lang: Lang = pathname.split("/")[1] as Lang;
      htmlTag?.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
      htmlTag?.setAttribute("lang", lang);
    }
  }, [pathname]);

  return (
    <>
      <Dropdown>
        <div className="flex flex-col justify-center items-center text-mainColor">
          <Link
            className="hover:text-textColor duration-200"
            href={redirectedPathName(i18n.locales[0])}
            onClick={() => changeWindowDirection({ dir: "ltr", lang: "en" })}
          >
            EN
          </Link>
          <Link
            className="hover:text-textColor duration-200"
            href={redirectedPathName(i18n.locales[1])}
            onClick={() => changeWindowDirection({ dir: "rtl", lang: "ar" })}
          >
            AR
          </Link>
          <Link
            className="hover:text-textColor duration-200"
            href={redirectedPathName(i18n.locales[2])}
            onClick={() => changeWindowDirection({ dir: "ltr", lang: "ru" })}
          >
            RU
          </Link>
        </div>
      </Dropdown>
    </>
  );
}
