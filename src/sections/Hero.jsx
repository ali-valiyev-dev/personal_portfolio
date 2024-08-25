import { SocialLink, Headline, ResumeLink, Container } from "../common";
import { socialLinks } from "/constants";

const Hero = () => {
  return (
    <Container
      id="hero"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col-reverse gap-12 lg:gap-20 xl:gap-0  lg:flex-row">
        <div className="lg:w-1/2">
          <Headline
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
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                {...link}
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
    </Container>
  );
};

export default Hero;
