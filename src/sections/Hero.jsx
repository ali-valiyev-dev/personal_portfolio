import useAnimation from "/utils/hooks/useAnimations";
import { SocialLink, HeroHeadline, ResumeLink, Container } from "../common";
import { SOCIAL_LINKS, GENERAL_INFO } from "/constants";

const Hero = () => {
  useAnimation([
    ".hero-fade-in",
    ".hero-headline-fade-in",
    ".hero-text-fade-in",
    ".hero-socials-fade-in",
    ".hero-img-fade-in",
  ]);

  return (
    <Container
      id="hero"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row">
        <div className="lg:w-1/2 flex flex-col justify-end gap-10">
          <div className="hero-headline-fade-in">
            <HeroHeadline />
          </div>

          <p className="hero-text-fade-in text-zinc-500">
            {GENERAL_INFO.HERO_TEXT}
          </p>

          <div className="hero-socials-fade-in flex flex-wrap gap-2 sm:gap-6">
            {SOCIAL_LINKS.map((link, index) => (
              <SocialLink
                key={index}
                {...link}
              />
            ))}
            <ResumeLink />
          </div>
        </div>

        <div className="hero-img-fade-in lg:w-1/2 flex justify-center lg:mb-7">
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
