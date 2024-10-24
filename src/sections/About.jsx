import { Container, SectionTitle, Spinner } from "../common";
import useFetchData from "../hooks/useFetchData";
import useAnimate from "../hooks/useAnimate";
import DOMPurify from "dompurify";
import useFetchMedia from "../hooks/useFetchMedia";
import { useTranslation } from "react-i18next";
import useLoadingState from "../hooks/useLoadingState";

const About = () => {
  const { t } = useTranslation();

  const generalInfo = useFetchData("general_info", "ABOUT_ME_TEXT");
  const aboutImage = useFetchMedia("portfolio-images", "me.png");

  const { loading, error } = useLoadingState(generalInfo, aboutImage);

  useAnimate([".anim-about-content"], loading);

  if (error) {
    return null;
  }

  if (loading) {
    return <Spinner />;
  }

  const sanitizedContent = DOMPurify.sanitize(
    generalInfo.data[0]?.ABOUT_ME_TEXT
  );

  return (
    <Container
      id="about"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        <figure className="anim-about-content w-full lg:w-1/2 flex items-center justify-center">
          {aboutImage.imageSrc ? (
            <img
              src={aboutImage.imageSrc}
              loading="lazy"
              alt="Portrait of the developer"
              className="max-w-full h-auto"
            />
          ) : (
            <p>Image unavailable</p>
          )}
        </figure>

        <article className="w-full lg:w-1/2 flex flex-col gap-5">
          <div className="anim-about-content w-full lg:w-max">
            <SectionTitle title={t("section_titles.about_me")} />
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
