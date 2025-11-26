'use client'
import { Lang } from 'lang';
import { usePathname } from 'next/navigation'
const useCurrentLang = () => {
  const pathname = usePathname()
  const lang: Lang = pathname.split('/')[1] as Lang;
  return { lang }
}

export default useCurrentLang