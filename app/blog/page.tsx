import Link from "next/link";
import Image from "next/image";
import { getAllBlogs, ITEMS_PER_PAGE } from "@/app/utils/MarkdownQueries";
import Pagination from "@/app/components/Pagination";

export const metadata = {
  title: "ブログ",
  description: "ブログページ",
};

const Blog = async () => {
  const { blogs, pageCount } = await getAllBlogs();
  const limitedBlogs = blogs.slice(0, ITEMS_PER_PAGE);
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>Blog📝</h1>
          <p>エンジニアの日常生活をお届けします。</p>
          {limitedBlogs.map((blog, index) => (
            <div key={index}>
              <div className="cardContainer">
                <h2>{blog.frontmatter.title}</h2>
                <p>{blog.frontmatter.excerpt}</p>
                <p>{blog.frontmatter.date}</p>
                <Link href={`/blog/${blog.slug}`}>Read More</Link>
              </div>
              <div className="blogImg">
                <Image
                  src={blog.frontmatter.image}
                  alt="card-image"
                  height={300}
                  width={1000}
                  quality={90}
                  priority={true}
                />
              </div>
            </div>
          ))}
        </div>
        <Pagination pageCount={pageCount} />
      </div>
    </>
  );
};
export default Blog;

