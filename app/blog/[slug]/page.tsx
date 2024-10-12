import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { getAllBlogs, getSingleBlog } from "@/app/utils/mdQueries";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { singleDocument } = await getSingleBlog(params.slug);
  return {
    title: singleDocument.data.title,
    description: singleDocument.data.excerpt,
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

// call by build time.
export async function generateStaticParams() {
  const { blogs } = await getAllBlogs();
  return blogs.map((blog) => `/${blog.slug}`);
}
