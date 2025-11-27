  import type { Locale } from "@/i18n.config"
  import "server-only"

  const dictionaries = {
    en: () => import("@/dictionaries/en.json").then((module) => module.default),
    ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
    ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
  };

  export const getServerDictionary = async (locale: Locale) => {
    return locale == "ar"
      ? dictionaries.ar()
      : locale == "en"
      ? dictionaries.en()
      : locale == "ru" && dictionaries.ru()
  }

