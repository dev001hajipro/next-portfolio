import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <a href="https://www.google.com/">
        <Image src="/images/github.svg" alt="logo" />
      </a>

      <a href="https://www.google.com/">
        <Image src="/images/linkedin.svg" alt="logo" />
      </a>
      <a href="https://www.google.com/">
        <Image src="/images/twitter.svg" alt="logo" />
      </a>
      <a href="https://www.google.com/">
        <Image src="/images/facebook.svg" alt="logo" />
      </a>
      <hr />
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
      <p>©{new Date().getFullYear()} Abe Hiroki</p>
    </footer>
  );
};

export default Footer;
