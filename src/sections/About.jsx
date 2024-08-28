import useAnimation from "/utils/hooks/useAnimations";
import { Container, SectionTitle } from "../common";

const About = () => {
  useAnimation([
    {
      selector: ".about-fade-in",
    },
  ]);

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

          <p className="about-fade-in text-zinc-500 text-base">
            I&apos;m a passionate, self-proclaimed designer who specializes in
            full stack development (React.js & Node.js). I am very enthusiastic
            about bringing the technical and visual aspects of digital products
            to life. User experience, pixel-perfect design, and writing clear,
            readable, highly performant code matter to me.
            <br />
            <br />I began my journey as a web developer in 2015, and since then,
            I&apos;ve continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I&apos;m building cutting-edge web applications using
            modern technologies such as Next.js, TypeScript, Nest.js, Tailwind
            CSS, Supabase, and much more.
          </p>
        </article>
      </div>
    </Container>
  );
};

export default About;
