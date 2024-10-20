import PropTypes from "prop-types";
import useAnimate from "../../hooks/useAnimate";
import useFetchMedia from "../../hooks/useFetchMedia";

const EducationItem = ({
  universityLogo,
  university,
  studyYears,
  major,
  description,
  relevantCoursework,
}) => {
  const { imageSrc } = useFetchMedia("portfolio-images", universityLogo);

  useAnimate([".edu-item"]);

  return (
    <div className="edu-item rounded-xl border border-zinc-800 px-4 sm:px-6 py-7">
      <div className="edu-item relative flex flex-col lg:flex-row gap-7 lg:justify-between lg:items-center">
        <div className="flex flex-col md:flex-row flex-nowrap gap-7 h-max md:items-center">
          <div className="flex justify-between items-center">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={`${university} logo`}
                className="w-auto h-10"
              />
            ) : (
              <p>Image unavailable</p>
            )}
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

      <p className="edu-item mt-7 text-zinc-400">{description}</p>
      <p className="edu-item mt-7 text-zinc-400">
        <span className="font-semibold text-zinc-300">
          Relevant Coursework:
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
