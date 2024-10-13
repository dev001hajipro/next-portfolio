import Link from "next/link";

export default function Pagination({ pageCount }: { pageCount: number }) {
  return (
    <h2 className="paginationWrapper">
      {Array.from({ length: pageCount }, (_, i) => (
        <Link key={i} href={i === 0 ? "/blog" : `/blog/page/${i + 1}`}>
          {i + 1}
        </Link>
      ))}
    </h2>
  );
}
