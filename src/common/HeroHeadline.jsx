import { useMemo } from "react";
import useFetchData from "../hooks/useFetchData";

const HeroHeading = () => {
  const { data: general_info } = useFetchData("general_info", "HERO_HEADLINE");

  const headline = general_info?.length ? general_info[0].HERO_HEADLINE : "";

  const textShadowOutline = "text-primary-white text-shadow-outline";
  const dropShadow = "drop-shadow-heading";
  const dropShadowMediumFont = "font-medium drop-shadow-heading";

  const designClasses = useMemo(
    () => [
      textShadowOutline,
      dropShadowMediumFont,
      dropShadow,
      dropShadowMediumFont,
    ],
    []
  );

  const words = headline.split(" ");

  const wordsWithClasses = useMemo(() => {
    return words.map((word, index) => ({
      word,
      className: designClasses[index % designClasses.length],
    }));
  }, [words, designClasses]);

  return (
    <h1 className="text-xl leading-snug sm:text-4xl sm:leading-snug md:text-[34px] md:leading-snug text-primary-black font-bold text-pretty">
      {wordsWithClasses.map((item, index) => (
        <span
          key={index}
          className={`${item.className} capitalize`}>
          {item.word}{" "}
        </span>
      ))}
    </h1>
  );
};

export default HeroHeading;
