import Image from "next/image";
import Link from "next/link";

// todo: the getAllBlogs function make the return type. define type of props.
export default function PreviousNextButton(props: {
  prev: { frontmatter: { [key: string]: string; }; slug: string }[];
  next: { frontmatter: { [key: string]: string; }; slug: string }[];
}) {
  return (
    <div className="pnWrapper">
      {0 < props.prev.length && (
        <Link href={`/blog/${props.prev[0].slug}`}>
          <Image
            src="/images/arrow-left.svg"
            alt="arrow-left"
            width={24}
            height={24}
          />
          <h3>{props.prev[0].frontmatter.title}</h3>
        </Link>
      )}
      {0 < props.next.length && (
        <Link href={`/blog/${props.next[0].slug}`}>
          <h3>{props.next[0].frontmatter.title}</h3>
          <Image
            src="/images/arrow-right.svg"
            alt="arrow-right"
            width={24}
            height={24}
          />
        </Link>
      )}
    </div>
  );
}
