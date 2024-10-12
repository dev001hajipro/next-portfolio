import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

async function getSingleBlog(id: string) {
  const data = await import(`../../../data/${id}.md`);
  const singleDocument = matter(data.default);
  return {
    singleDocument: singleDocument,
  };
}

export default async function SingleBlog({
  params,
}: {
  params: { slug: string };
}) {
  const { singleDocument } = await getSingleBlog(params.slug);
  return (
    <>
      <div className="img-container">
        <Image
          src={singleDocument.data.image}
          alt="card-image"
          height={500}
          width={1000}
          quality={90}
          priority={true}
        />
      </div>
      <div className="wrapper">
        <div className="container">
          <h1>{singleDocument.data.title}</h1>
          <p>{singleDocument.data.date}</p>
          <ReactMarkdown>{singleDocument.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

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
  return {
    blogs: blogs,
  };
}
// call by build time.
export async function generateStaticParams() {
  const { blogs } = await getAllBlogs();
  return blogs.map((blog) => `/${blog.slug}`);
}
