import { useMemo } from "react";
import useFetchData from "../hooks/useFetchData";

const ContactsHeadline = () => {
  const { data: general_info } = useFetchData(
    "general_info",
    "CONTACTS_HEADLINE"
  );

  const headline = general_info?.length
    ? general_info[0].CONTACTS_HEADLINE
    : "";

  const textShadowOutline = "text-primary-white text-shadow-outline";
  const dropShadow = "drop-shadow-heading";
  const dropShadowMediumFont = "font-medium drop-shadow-heading";

  const designClasses = useMemo(
    () => [
      dropShadowMediumFont,
      textShadowOutline,
      dropShadow,
      textShadowOutline,
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
    <h2 className="text-xl leading-snug sm:text-4xl sm:leading-snug md:text-[34px] md:leading-snug text-primary-black font-bold text-pretty">
      {wordsWithClasses.slice(0, 4).map((item, index) => (
        <span
          key={index}
          className={`${item.className} capitalize  sm:text-nowrap`}>
          {item.word}{" "}
        </span>
      ))}
      <br />
      {wordsWithClasses.slice(4).map((item, index) => (
        <span
          key={index}
          className={`${item.className} capitalize`}>
          {item.word}{" "}
        </span>
      ))}
    </h2>
  );
};

export default ContactsHeadline;
