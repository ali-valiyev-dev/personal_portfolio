import {
  SocialLink,
  HeroHeadline,
  ResumeLink,
  Container,
  Spinner,
} from "../common";
import useFetchData from "../hooks/useFetchData";
import useFetchMedia from "../hooks/useFetchMedia";
import useLoadingState from "../hooks/useLoadingState";
import useAnimate from "../hooks/useAnimate";

const Hero = () => {
  const socialLinks = useFetchData("social_links", "*", false);
  const generalInfo = useFetchData("general_info", "HERO_HEADLINE, HERO_TEXT");
  const heroImage = useFetchMedia("portfolio-images", "hero.png");

  const { loading, error } = useLoadingState(
    socialLinks,
    generalInfo,
    heroImage
  );

  useAnimate([".anim-hero-content"], loading);

  if (error) {
    return null;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container
      id="hero"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 ">
        <div className="lg:w-1/2 flex flex-col justify-end gap-5">
          <div className="anim-hero-content">
            <HeroHeadline headline={generalInfo.data[0]?.HERO_HEADLINE} />
          </div>

          <p className="anim-hero-content text-zinc-500">
            {generalInfo.data[0]?.HERO_TEXT}
          </p>

          <div className="anim-hero-content flex flex-wrap gap-2 sm:gap-6 mt-20 lg:0">
            {socialLinks.data.map(social_link => (
              <SocialLink
                key={social_link._id}
                {...social_link}
              />
            ))}
            <ResumeLink />
          </div>
        </div>

        <div className="anim-hero-content flex lg:w-1/2 justify-center ">
          {heroImage.imageSrc ? (
            <img
              src={heroImage.imageSrc}
              alt="Hero"
              loading="eager"
              className="aspect-auto h-max"
            />
          ) : (
            <p>Image unavailable</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Hero;
