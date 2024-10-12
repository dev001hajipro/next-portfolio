import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <a href="https://www.google.com/">
        <Image
          src="/images/github.svg"
          alt="github"
          width={72}
          height={72}
        />
      </a>

      <a href="https://www.google.com/">
        <Image
          src="/images/linkedin.svg"
          alt="linkedin"
          width={72}
          height={72}
        />
      </a>
      <a href="https://www.google.com/">
        <Image
          src="/images/twitter.svg"
          alt="x"
          width={72}
          height={72}
        />
      </a>
      <a href="https://www.google.com/">
        <Image
          src="/images/facebook.svg"
          alt="facebook"
          width={72}
          height={72}
        />
      </a>
      <hr />
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
      <p>©{new Date().getFullYear()} Abe Hiroki</p>
    </footer>
  );
};

export default Footer;
