"use client"
import useCurrentLang from "@/components/hooks/useCurrentLang"
import { dictionary } from "@/dictionaries/clientContent"
import { images } from "@/utils/exportsImages"
import { getData } from "@/utils/fetchData"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import LanguageSwitcher from "../LanguageSwitcher"
import { default as AddListButton, default as Button } from "../button/Button"
import { IMAGE_BLUR } from "@/components/constant/image-blure"
type navCategories = {
    name: string
    slug: string
    id: number
}[]
const Navbar = () => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    const [toggle, setToggle] = useState(false)
    const [navCategories, setNavCategories] = useState<navCategories>([])
    const pathname = usePathname()
    const handleToggle = () => {
        setToggle(!toggle)
    }

    // get categories
    const getPropertyType = async () => {
        const res = await getData({
            endpoint: "api/category",
            lang,
        })
        setNavCategories(res.data)
    }
    useEffect(() => {
        getPropertyType()
    }, [lang])

    return (
        <div className="bg-transparent text-mainColor relative top-0 left-0 right-0 z-40">
            <nav
                className={`container flex justify-between items-center ${
                    pathname.endsWith(`/${lang}`) ? "bg-darkMode" : "bg-transparent"
                } py-4`}
            >
                <div className="h-14 md:w-[255px] flex justify-center items-center  text-xl ">
                    <Link href={`/${lang}`}>
                        <Image
                            className="h-14 w-14"
                            src={images.Logo}
                            alt={images.Logo}
                            quality={90}
                            //  placeholder="blur"
                            // blurDataURL={IMAGE_BLUR}
                            width={400}
                            height={400}
                        />
                    </Link>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-6 translate-x-4 lg:text-lg">
                        <li
                            className={`hover:text-textColor transition text-sm xl:text-base ${
                                pathname.endsWith(`/${lang}`) && "text-textColor"
                            }`}
                        >
                            <Link href={`/${lang}`}>{locale?.home}</Link>
                        </li>
                        {navCategories?.map((category) =>
                            category.slug !== "sell" && category.slug !== "rent" ? (
                                <li
                                    key={category?.id}
                                    className={`hover:text-textColor transition text-sm xl:text-base ${
                                        pathname.endsWith(`/communities/${category.slug}`) && "text-textColor"
                                    }`}
                                >
                                    <Link href={`/${lang}/communities/${category.slug}`}>{category.name}</Link>
                                </li>
                            ) : null
                        )}

                        {/* <li
              className={`hover:text-textColor transition text-sm xl:text-base ${
                pathname.endsWith("/blogs") && "text-textColor"
              }`}>
              <Link href={`/${lang}/blogs`}>{locale?.blogs}</Link>
            </li> */}
                        <li
                            className={`hover:text-textColor transition text-sm xl:text-base ${
                                pathname.endsWith("/about") && "text-textColor"
                            }`}
                        >
                            <Link href={`/${lang}/about`}>{locale?.about}</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:flex items-center">
                    <Link href={`/${lang}/add-list`} className="overflow-hidden w-full">
                        <AddListButton />
                    </Link>
                    <LanguageSwitcher />
                </div>
                <div className="block lg:hidden">
                    <Image
                        onClick={handleToggle}
                        className="cursor-pointer block lg:hidden"
                        src={images.NavIcon}
                        placeholder="blur"
                       blurDataURL={IMAGE_BLUR}
                        alt="navbar icon"
                        width={24}
                        height={24}
                    />
                </div>
            </nav>
            <div
                className={`container block lg:hidden fixed left-0 top-0 ${
                    toggle ? "translate-y-0" : "-translate-y-[140%]"
                } duration-500 z-50 bg-darkMode h-screen py-2`}
            >
                <div className="flex justify-between items-center">
                    <div className="h-20 w-20 flex justify-center items-center  text-xl">
                        <Image src={images.Logo} alt={images.Logo} width={600} height={600} />
                    </div>
                    <div className="block lg:hidden">
                        <Image
                            onClick={handleToggle}
                            className="cursor-pointer block lg:hidden"
                            src={images.NavIcon}
                             placeholder="blur"
                             blurDataURL={IMAGE_BLUR}
                            alt="navbar icon"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
                <p className="text-mainGray text-sm py-4 border-b-[1px] border-subDark">Main Categories</p>
                <ul className="text-lg py-4 font-light flex flex-col gap-4">
                    <li
                        className={`hover:text-textColor transition ${
                            pathname.endsWith(`/${lang}`) && "text-textColor"
                        }`}
                    >
                        <Link onClick={() => setToggle(false)} href={`/${lang}`}>
                            {locale?.home}
                        </Link>
                    </li>
                    {navCategories?.map((category) => (
                        <li
                            key={category?.id}
                            onClick={handleToggle}
                            className={`hover:text-textColor transition ${
                                pathname.endsWith(`/communities/${category.slug}`) && "text-textColor"
                            }`}
                        >
                            <Link href={`/${lang}/communities/${category.slug}`}>{category.name}</Link>
                        </li>
                    ))}

                    <li
                        className={`hover:text-textColor transition ${pathname.endsWith("/blogs") && "text-textColor"}`}
                    >
                        <Link onClick={() => setToggle(false)} href={`/${lang}/blogs`}>
                            {locale?.blogs}
                        </Link>
                    </li>
                    <li
                        className={`hover:text-textColor transition ${pathname.endsWith("/about") && "text-textColor"}`}
                    >
                        <Link onClick={() => setToggle(false)} href={`/${lang}/about`}>
                            {locale?.about}
                        </Link>
                    </li>
                </ul>
                <div>
                    <p className="text-mainGray text-sm py-4 border-b-[1px] border-subDark">Change Language</p>
                    <div className="py-4">
                        <LanguageSwitcher />
                    </div>
                </div>
                <div>
                    <p className="text-mainGray text-sm py-4 border-b-[1px] border-subDark">Adding list</p>
                    <div className="p-4 w-full">
                        <Link onClick={() => setToggle(false)} href={`/${lang}/add-list`}>
                            <Button />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
