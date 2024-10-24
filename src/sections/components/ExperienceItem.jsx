import PropTypes from "prop-types";
import { TechItem } from "../../common";
import useAnimate from "../../hooks/useAnimate";
import useFetchMedia from "../../hooks/useFetchMedia";

const ExperienceItem = ({
  companyLogo,
  companyName,
  position,
  workPeriod,
  description,
  techStack,
}) => {
  const { imageSrc, loading } = useFetchMedia("portfolio-images", companyLogo);

  useAnimate([".anim-exp-item"], loading);

  return (
    <div className="anim-exp-item text-zinc-300 rounded-xl border border-zinc-800 px-4 sm:px-6 py-7">
      <div className="anim-exp-item relative flex flex-col lg:flex-row gap-7 lg:justify-between lg:items-center">
        <div className="flex flex-col md:flex-row flex-nowrap gap-7 h-max md:items-center">
          <div className="flex justify-between items-center">
            {imageSrc ? (
              <img
                src={imageSrc}
                loading="lazy"
                alt={`${companyName} logo`}
                height={50}
                width={100}
              />
            ) : (
              <p>Image unavailable</p>
            )}
            <span className="flex text-nowrap md:hidden">{workPeriod}</span>
          </div>
          <h3 className="text-primary-white text-xl xl:text-2xl">{position}</h3>
        </div>
        <span className="hidden md:flex text-nowrap">{workPeriod}</span>
      </div>

      <p className="anim-exp-item pt-7 text-zinc-400">{description}</p>

      {techStack && (
        <div className="flex gap-2 flex-wrap pt-7">
          {techStack?.map((tech, index) => (
            <div
              key={index}
              className="anim-exp-item">
              <TechItem {...tech} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ExperienceItem.propTypes = {
  companyLogo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  workPeriod: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ExperienceItem;
