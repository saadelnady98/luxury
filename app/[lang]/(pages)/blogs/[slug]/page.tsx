import { IMAGE_BLUR } from "@/components/constant/image-blure"
import { ShareButtons } from "@/components/ui/ShareButtons"
import { getServerDictionary } from "@/lib/dictionary"
import { images } from "@/utils/exportsImages"
import { getData } from "@/utils/fetchData"
import { formatDate } from "@/utils/functions"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
type BlogProps_TP = {
    params: {
        slug: string
        lang: "ar" | "en" | "ru"
    }
}

export async function generateMetadata({ params: { lang, slug } }: BlogProps_TP): Promise<Metadata> {
    const blogData = await getData({
        endpoint: `api/blog/${slug}`,
        lang,
    })
    return {
        title: ` ${blogData?.data?.title}| Luxurylivinhomes`,
        description: blogData?.data?.description,
    }
}
const Blog = async ({ params: { slug, lang } }: BlogProps_TP) => {
    const locale: any = await getServerDictionary(lang)
    const blogData = await getData({
        endpoint: `api/blog/${slug}`,
        lang,
    })

    return (
        <>
            <section className="lg:px-16 px-2 grid grid-cols-12 gap-8 mt-8 lg:mt-16 mb-5">
                <main
                    className={`${
                        blogData?.data?.similarBlogs.length ? "lg:cols-span-12" : "lg:cols-span-9"
                    } col-span-full h-fit shadow-lg border_padding bg-[#171717] `}
                >
                    <div className="relative">
                        <Image
                            src={blogData?.data?.image?.original_url}
                            width={1200}
                            height={900}
                            alt={blogData?.data?.title}
                            className="w-full  object-cover max-h-[453px]"
                            placeholder="blur"
                            blurDataURL={IMAGE_BLUR}
                        />
                        <div className="backdrop-blur-lg absolute bottom-4 right-4 w-16 flex justify-center p-4 text-textColor gap-x-1">
                            <Image
                                src={images.eyeIcon}
                                height={20}
                                width={20}
                               placeholder="blur"
                                blurDataURL={IMAGE_BLUR}
                                alt="eye icon"
                                className="w-4"
                            />
                            <span className="text-sm">{blogData?.data?.views}</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-[600] text-2xl lg:text-[52px] lg:[word-spacing:5px] lg:mt-8 mt-2 w-[90%] lg:leading-loose grey-[50]">
                            {blogData?.data?.title}
                        </h2>
                        <p className="mb-4 text-xxs">{formatDate(blogData?.data?.date)}</p>
                        <p className="text-subGray lg:leading-loose">{blogData?.data?.description}</p>
                    </div>
                    <ShareButtons endpoint={`${lang}/blogs/${slug}`} />
                </main>
                {blogData?.data?.similarBlogs.length ? (
                    <aside className="lg:col-span-3 col-span-full h-fit shadow-lg border_padding overflow-y-scroll scroll-smooth blog_aside bg-[#171717] ">
                        <h3 className="text-lg xl:text-3xl  mb-2 lg:mb-4">{locale?.related_blogs}</h3>
                        {blogData?.data?.similarBlogs?.map((blog: any) => (
                            <div className="mb-4" key={blog?.slug}>
                                <div className="relative">
                                    <Image
                                        src={blog?.image?.original_url}
                                        alt={blog?.title}
                                        width={1200}
                                        height={1200}
                                        placeholder="blur"
                                        blurDataURL={IMAGE_BLUR}
                                        className="w-full object-cover  aspect-[410/187]	mb-3"
                                    />
                                    <p className="bg-black text-textColor absolute bottom-0 left-0 p-4 text-xs text-center">
                                        {formatDate(blog?.date)}
                                    </p>
                                </div>
                                <p className="font-[600] leading-loose text-xl tracking-wider max-w-[350px] mb-2 line-clamp-2">
                                    {blog?.title}
                                </p>
                                <Link href={`blogs/${2}`} className="text-mainColor text-xxs underline ">
                                    Read more
                                </Link>
                            </div>
                        ))}
                    </aside>
                ) : null}
            </section>
        </>
    )
}

export default Blog
