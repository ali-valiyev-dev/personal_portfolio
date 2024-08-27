import { SocialLink, Headline, ResumeLink, Container } from "../common";
import { socialLinks } from "/constants";

const Hero = () => {
  return (
    <Container
      id="hero"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row">
        <div className="lg:w-1/2 flex flex-col justify-end gap-8">
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

          <p className="text-zinc-500">
            I&apos;m a Frontend Developer passionate about creating intuitive
            and visually appealing web experiences. With a focus on detail and a
            drive to exceed expectations, I&apos;m committed to delivering
            impactful solutions and staying ahead in emerging technologies.
          </p>

          <div className="flex gap-6 xl:gap-8">
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
            loading="eager"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
