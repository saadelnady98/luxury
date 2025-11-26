"use client"

import { dictionary } from "@/dictionaries/clientContent"
import { Blog_TP } from "blog"
import Image from "next/image"
import Link from "next/link"
import useCurrentLang from "../hooks/useCurrentLang"
import { IMAGE_BLUR } from "../constant/image-blure"

type BlogCardProps_TP = {
    blogData: Blog_TP
}
const BlogCard = ({ blogData }: BlogCardProps_TP) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]

    return (
        <div className="mb-4">
            <div className="relative">
                <Image
                    src={blogData?.image}
                    alt={blogData?.name}
                    placeholder="blur"
                     blurDataURL={IMAGE_BLUR}
                    width={1200}
                    height={1200}
                    className="w-full object-cover  aspect-[550/510] mb-3"
                />
                <p className="bg-black text-textColor absolute bottom-0 left-0 p-4 text-xs text-center">
                    {blogData.date}
                </p>
            </div>
            <p className="font-[600] leading-loose text-xl tracking-wider max-w-[350px] mb-2 line-clamp-2">
                {blogData?.name}
            </p>
            <Link href={`blogs/${blogData.slug}`} className="text-mainColor text-xxs underline">
                {locale.readMore}
            </Link>
        </div>
    )
}

export default BlogCard
