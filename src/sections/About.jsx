import useAnimation from "/utils/hooks/useAnimations";
import { Container, SectionTitle } from "../common";
import { GENERAL_INFO } from "/constants";
import DOMPurify from "dompurify";

const About = () => {
  useAnimation([
    {
      selector: ".about-fade-in",
    },
  ]);

  const sanitizedContent = DOMPurify.sanitize(GENERAL_INFO.ABOUT_ME_TEXT);

  return (
    <Container
      id="about"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        <figure className="about-fade-in w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="/me.png"
            alt="Portrait of the developer"
            className="max-w-full h-auto"
          />
        </figure>

        <article className="about-fade-in w-full lg:w-1/2 flex flex-col gap-5">
          <div className="about-fade-in w-full lg:w-max">
            <SectionTitle title="About Me" />
          </div>

          <p
            className="about-fade-in text-zinc-500 text-lg"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
        </article>
      </div>
    </Container>
  );
};

export default About;
