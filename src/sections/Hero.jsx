import { SocialLink, HeroHeadline, ResumeLink, Container } from "../common";
import useFetchData from "../hooks/useFetchData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { data: social_links } = useFetchData("social_links", "*");
  const { data: general_info } = useFetchData("general_info", "HERO_TEXT");

  useGSAP(() => {
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".hero-content",
          start: "top 100%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, []);

  return (
    <Container
      id="hero"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex pt-20 lg:pt-0">
        <div className="lg:w-1/2 flex flex-col justify-end gap-12 lg:gap-10">
          <div className="hero-content">
            <HeroHeadline />
          </div>

          <p className="hero-content text-zinc-500">
            {general_info[0]?.HERO_TEXT}
          </p>

          <div className="hero-content flex flex-wrap gap-2 sm:gap-6 mt-20 lg:0">
            {social_links.map(social_link => (
              <SocialLink
                key={social_link.id}
                {...social_link}
              />
            ))}
            <ResumeLink />
          </div>
        </div>

        <div className="hero-content hidden lg:flex lg:w-1/2 justify-center lg:mb-7">
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
