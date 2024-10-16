import Link from "next/link";
import Image from "next/image";
import heroPic from "../public/images/index-hero.jpg";
import profilePic from "../public/images/profile.jpg";

export const metadata = {
  title: "たなかたろう",
  description: "Next.jsアプリ",
}

const Index = () => {
  return (
    <>
      <div className="hero">
        <Image src={heroPic} alt="hero" />
        <div className="textContainer">
          <h1>I am Abe Hiroki</h1>
          <h3>エンジニア</h3>
        </div>
      </div>
      <div className="container">
        <div className="profile">
          <div>
            <h2>JavaScript Nerd</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div>
            <Image src={profilePic} alt="hero" />
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skillsContainer">
            <div>
              <Image
                src="/images/javascript.svg"
                alt="javascript"
                width={100}
                height={100}
              />
              <span>JavaScript / 10 years</span>
            </div>
            <div>
              <Image
                src="/images/react.svg"
                alt="react"
                width={100}
                height={100}
              />
              <span>React / 10 years</span>
            </div>
            <div>
              <Image
                src="/images/gatsby.svg"
                alt="gatsby"
                width={100}
                height={100}
              />
              <span>Gatsby / 10 years</span>
            </div>
            <div>
              <Image
                src="/images/next.svg"
                alt="next"
                width={100}
                height={100}
              />
              <span>Next.JS / 10 years</span>
            </div>
          </div>
        </div>
        <div className="ctaButton">
          <Link href="/contact">Make It Happen!</Link>
        </div>
      </div>
    </>
  );
};

export default Index;
