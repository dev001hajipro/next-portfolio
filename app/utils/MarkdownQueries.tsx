import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const ITEMS_PER_PAGE = 5;

export async function getAllBlogs() {
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

  const pageCount = Math.ceil(orderedBlogs.length / ITEMS_PER_PAGE);

  return {
    blogs: orderedBlogs,
    pageCount: pageCount,
  };
}

export async function getSingleBlog(id: string) {
  // fixme: change to fs.readFileSync. It's tradisional way.
  const data = await import(`../../data/${id}.md`);
  const singleDocument = matter(data.default);
  return {
    singleDocument: singleDocument,
  };
}
