import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

async function getAllBlogs() {
  const files = fs.readdirSync(path.join("data"));
  const blogs = files.map((fileName) => {
    const fileData = fs.readFileSync(path.join("data", fileName), "utf-8");
    const { data } = matter(fileData);
    return {
      frontmatter: data,
      slug: fileName.replace(".md", ""),
    };
  });

  const orderedBlogs = blogs.sort(
    (a, b) => b.frontmatter.id - a.frontmatter.id
  );

  return {
    blogs: orderedBlogs,
  };
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
