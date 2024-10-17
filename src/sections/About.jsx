import { Container, SectionTitle } from "../common";
import useFetchData from "../hooks/useFetchData";
import useAnimate from "../hooks/useAnimate";
import DOMPurify from "dompurify";

const About = () => {
  const { data: general_info } = useFetchData("general_info", "ABOUT_ME_TEXT");

  useAnimate([".anim-about-content"]);

  const sanitizedContent = DOMPurify.sanitize(general_info[0]?.ABOUT_ME_TEXT);

  return (
    <Container
      id="about"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        <figure className="anim-about-content w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="/me.png"
            alt="Portrait of the developer"
            className="max-w-full h-auto"
          />
        </figure>

        <article className="w-full lg:w-1/2 flex flex-col gap-5">
          <div className="anim-about-content w-full lg:w-max">
            <SectionTitle title="About Me" />
          </div>

          <p
            className="anim-about-content text-zinc-500 text-lg"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
        </article>
      </div>
    </Container>
  );
};

export default About;
