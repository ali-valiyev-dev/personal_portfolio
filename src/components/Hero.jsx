import Heading from "./Heading";
import ResumeLink from "./ResumeLink.jsx";
import SocialLink from "./SocialLink.jsx";
import { socialLinks } from "../constants";

const Hero = () => {
  return (
    <section>
      <div className=" mx-auto max-w-screen-2xl xl:items-end px-4 md:px-14 xl:px-28 py-10 xl:py-14 flex flex-col-reverse gap-12 lg:gap-20 xl:gap-0  lg:flex-row">
        <div className="lg:w-1/2">
          <Heading
            text={[
              `Hello I'm`,
              "Ali Valiyev.",
              "Frontend",
              "Developer",
              "Based In",
              "Azerbaijan.",
            ]}
          />

          <p className="mt-8 text-zinc-500">
            Lorem ipsum dolor sit amet amet, consectetur adipiscing elit.
            Quisque interdum, odio eget volutpat aliquet, neque ante hendrerit
            libero, ac facilisis turpis metus sed nulla. Ut sit amet orci at
            odio semper luctus.
          </p>

          <div className="mt-8 xl:mt-24 flex gap-6 xl:gap-8">
            {socialLinks.map(({ href, icon, alt }, index) => (
              <SocialLink
                key={index}
                href={href}
                icon={icon}
                alt={alt}
              />
            ))}

            <ResumeLink />
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/hero.png"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
