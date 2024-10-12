import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/app/utils/mdQueries";

export const metadata = {
  title: "ブログ",
  description: "ブログページ",
}

const Blog = async () => {
  const { blogs } = await getAllBlogs();
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>Blog📝</h1>
          <p>エンジニアの日常生活をお届けします。</p>
          {blogs.map((blog, index) => (
            <div key={index}>
              <div className="cardContainer">
                <h2>{blog.frontmatter.title}</h2>
                <p>{blog.frontmatter.excerpt}</p>
                <p>{blog.frontmatter.date}</p>
                <p>debug:{blog.frontmatter.image}</p>
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
      </div>
    </>
  );
};
export default Blog;
