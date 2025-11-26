import BlogCard from "@/components/templates/BlogCard";
import Header from "@/components/templates/Header";
import { getServerDictionary } from "@/lib/dictionary";
import { images } from "@/utils/exportsImages";
import { getData } from "@/utils/fetchData";
import { formatDate } from "@/utils/functions";
import { Blog_TP } from "blog";
import { Metadata } from "next";
type BlogsProps_TP = {
  params: {
    lang: "ar" | "en" | "ru";
  };
};
export const metadata: Metadata = {
  title: 'Blogs | Luxurylivinhomes',
  description: `Unlock the secrets of the real estate world with our insightful blog. Dive into expert tips on buying, selling, and investing in properties. Stay updated on market trends, neighborhood spotlights, and renovation inspiration. Whether you're a first-time buyer or a seasoned investor, our blog offers valuable insights to help you navigate the ever-evolving real estate landscape and make informed decisions`,
}
const Blogs = async ({ params: { lang } }: BlogsProps_TP) => {
  const locale: any = await getServerDictionary(lang);
  const blogsData = await getData({
    endpoint: "api/blog",
    lang,
  });
  return (
    <div className="mb-8">
      <Header image={images.header} title={locale?.home} subTitle={"blog"} />
      <div className="lg:px-16 px-4 grid xl:grid-cols-3 md:grid-cols-2 gap-8 justify-center -translate-y-16">
        {blogsData?.data?.map((blog: Blog_TP) => (
          <BlogCard
            key={blog?.slug}
            blogData={{
              date: formatDate(blog?.date as any),
              image: blog?.image?.original_url,
              name: blog?.title!,
              description: blog?.description,
              slug: blog?.slug,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
