import { SectionTitle } from "../common";

const About = () => {
  return (
    <section
      id="about"
      className="borders text-primary-black mx-auto max-w-screen-2xl px-4 md:px-14 xl:px-28 py-10 xl:py-14">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <figure className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="/me.png"
            alt="Portrait of the developer"
            className="max-w-full h-auto"
          />
        </figure>

        <article className="w-full lg:w-1/2 flex flex-col justify-between">
          <div className="w-full lg:w-max">
            <SectionTitle title="About Me" />
          </div>

          <p className="mt-10 text-zinc-500 text-base">
            I&apos;m a passionate, self-proclaimed designer who specializes in
            full stack development (React.js & Node.js). I am very enthusiastic
            about bringing the technical and visual aspects of digital products
            to life. User experience, pixel-perfect design, and writing clear,
            readable, highly performant code matter to me.
            <br />
            <br />
            I began my journey as a web developer in 2015, and since then,
            I&apos;ve continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I&apos;m building cutting-edge web applications using
            modern technologies such as Next.js, TypeScript, Nest.js, Tailwind
            CSS, Supabase, and much more.
            <br />
            <br />
            When I&apos;m not in full-on developer mode, you can find me
            hovering around on Twitter or Indie Hackers, witnessing the journey
            of early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related insights and build in public, or
            follow me on GitHub.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
