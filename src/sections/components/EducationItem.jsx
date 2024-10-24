import PropTypes from "prop-types";
import useFetchMedia from "../../hooks/useFetchMedia";
import { useTranslation } from "react-i18next";
import useAnimate from "../../hooks/useAnimate";

const EducationItem = ({
  universityLogo,
  university,
  studyYears,
  major,
  description,
  relevantCoursework,
}) => {
  const { t } = useTranslation();

  const { imageSrc, loading } = useFetchMedia(
    "portfolio-images",
    universityLogo
  );

  useAnimate([".anim-edu-item"], loading);

  return (
    <div className="anim-edu-item rounded-xl border border-zinc-800 px-4 sm:px-6 py-7">
      <div className="anim-edu-item relative flex flex-col lg:flex-row gap-7 lg:justify-between lg:items-center">
        <div className="flex flex-col md:flex-row flex-nowrap gap-7 h-max md:items-center">
          <div className="flex justify-between items-center">
            <img
              src={imageSrc}
              loading="lazy"
              alt={`${university} logo`}
              className="w-auto h-10"
            />
            <span className="flex text-nowrap md:hidden text-zinc-300">
              {studyYears}
            </span>
          </div>
          <h3 className="text-primary-white text-xl xl:text-2xl">{major}</h3>
        </div>
        <span className="hidden md:flex text-nowrap text-zinc-300">
          {studyYears}
        </span>
      </div>

      <p className="anim-edu-item mt-7 text-zinc-400">{description}</p>
      <p className="anim-edu-item mt-7 text-zinc-400">
        <span className="font-semibold text-zinc-300">
          {t("common.relevant_coursework")}
        </span>{" "}
        {relevantCoursework}
      </p>
    </div>
  );
};

EducationItem.propTypes = {
  universityLogo: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  studyYears: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  relevantCoursework: PropTypes.string.isRequired,
};

export default EducationItem;
