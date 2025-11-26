// @ts-nocheck
"use client"
import { images } from "@/utils/exportsImages"
import { getData } from "@/utils/fetchData"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import useCurrentLang from "../hooks/useCurrentLang"
import { dictionary } from "@/dictionaries/clientContent"
import Link from "next/link"
import { Product_TP } from "product"

type Categories_TP = {
    data: {
        slug: string
        name: string
    }[]
}
type Categorie_TP = {
    slug: string
    name: string
}

type Products_TP = Product_TP[]

type Hero_TP = {
    className: string
    backgroundImage: {
        id: number
        file_name: string
        original_url: string
        extension: string
        size: number
    }
}

const SearchForProject = ({ className, backgroundImage }: Hero_TP) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    const [activeCategory, setActiveCategory] = useState(0)
    const [searchText, setSearchText] = useState("")
    const [categories, setCategories] = useState<Categories_TP | null>(null)
    const [products, setProducts] = useState<Products_TP | null>(null)
    const [viewProducts, setViewProducts] = useState<Products_TP | null>(null)

    const fetchCategories = async () => {
        try {
            const categories: Categories_TP = await getData({
                endpoint: "api/category",
                lang,
            })

            setCategories(categories)
        } catch (error) {
            console.error("Error fetching trends:", error)
        }
    }

    const handleCategory = async (category: Categorie_TP, index: number) => {
        setActiveCategory(index)
        const products = await getData({
            endpoint: `api/product?category_slug=${category.slug}`,
            lang,
        })
        setProducts(products)
    }

    const handleSearch = () => {
        const finalProducts = products?.data?.filter((product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase())
        )
        setViewProducts(finalProducts)
    }

    // useEffect(() => {
    //     handleSearch()
    // }, [])

    useEffect(() => {
        fetchCategories()
        handleCategory({ slug: "new-project" }, 0)
    }, [])

    // TODO: hide (Commercial and Rent) after edit dashboard remove this and replace (dataWithoutCommercialAndRent?.map with categories?.data?.map)
    // const dataWithoutCommercialAndRent = categories?.data?.filter((category) => {
    //     return category.name !== "Commercial" && category.name !== "Rent"
    // })

    return (
        <div clas sName="relative">
            {/* <Image
        className="w-full h-[100vh]"
        src={backgroundImage?.data[0]?.image?.original_url}
        alt={backgroundImage?.data[0]?.image?.file_name}
        width={1200}
        height={900}
      /> */}
            <div
                className={`${className} absolute w-full xl:w-2/3 lg:px-10 px-[15px] md:px-40 mx-auto z-30 text-xs sm:text-sm lg:text-base`}
            >
                <p className="lg:text-2xl text-center uppercase mb-2 md:mb-4 md:px-2 gradient_text">
                    {backgroundImage?.data?.filter_title}
                </p>
                <div className="bg-darkMode max-w-[655px] mx-auto">
                    <div className="flex justify-evenly text-center text-subGray rounded-t-lg overflow-hidden bg-black">
                        {/* {dataWithoutCommercialAndRent?.map((category, index) => ( */}
                        {categories?.data?.map((category, index) => (
                            <button
                                onClick={() => handleCategory(category, index)}
                                key={index}
                                className={` ${
                                    activeCategory == index ? "border-b-mainColor" : "border-b-transparent"
                                }  text-[10px] sm:text-sm md:text-base border-b-[1px] hover:border-b-mainColor duration-200 w-full py-4 lg:py-5 whitespace-nowrap`}
                            >
                                {category.name}
                            </button>
                        ))}
                        {/* {categories?.data?.map((category, index) => (
                            <button
                                onClick={() => handleCategory(category, index)}
                                key={index}
                                className={` ${
                                    activeCategory == index ? "border-b-mainColor" : "border-b-transparent"
                                }  text-[10px] sm:text-sm md:text-base border-b-[1px] hover:border-b-mainColor duration-200 w-full py-4 lg:py-5 whitespace-nowrap`}
                            >
                                {category.name}
                            </button>
                        ))} */}
                    </div>
                    <div dir="ltr" className="w-full relative">
                        <input
                            className="w-full px-12 md:px-16 py-4 placeholder:capitalize placeholder:text-md placeholder:text-mainGray text-subGray  outline-none bg-black"
                            type="text"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value)
                            }}
                            placeholder={locale?.searchFor}
                        />
                        <SearchIcon className="text-mainGray w-5 h-5 absolute top-0 left-0 translate-y-1/2 translate-x-1/2 ml-2 md:ml-4 mt-1 lg:mt-2" />
                        <button
                            onClick={handleSearch}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-md text-mainColor  bg-subDark mr-4 px-6 py-2 "
                        >
                            {locale.search}
                        </button>
                    </div>

                    <div
                        className={`text-mainGray
                         px-8 text-left max-h-[15vh] md:max-h-[30vh] overflow-y-auto bg-black`}
                    >
                        {viewProducts?.length == 0 ? (
                            <div className="py-3">
                                <p>no data found</p>
                            </div>
                        ) : (
                            viewProducts !== undefined &&
                            viewProducts?.map((product, index) => (
                                <div className="py-3">
                                    <Link
                                        href={`/properties/${product?.slug}`}
                                        className="py-2 uppercase block"
                                        key={index}
                                    >
                                        {product?.title}
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchForProject
