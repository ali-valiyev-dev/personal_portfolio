import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import useAnimation from "/utils/hooks/useAnimations";

const ExperienceItem = ({
  companyLogo,
  companyName,
  position,
  workPeriod,
  description,
  techStack,
}) => {
  useAnimation([
    {
      selector: ".experience-item-fade-in",
    },
  ]);

  return (
    <div className="experience-item-fade-in text-zinc-300 rounded-xl border border-zinc-800 px-4 sm:px-6 py-7">
      <div className="experience-item-fade-in relative flex flex-col lg:flex-row gap-7 lg:justify-between lg:items-center">
        <div className="flex flex-col md:flex-row flex-nowrap gap-7 h-max md:items-center">
          <div className="flex justify-between items-center">
            <img
              src={companyLogo}
              alt={`${companyName} logo`}
              height={50}
              width={100}
            />

            <span className="flex text-nowrap md:hidden">{workPeriod} </span>
          </div>
          <h4 className="text-primary-white text-xl xl:text-2xl">{position}</h4>
        </div>
        <span className="hidden md:flex text-nowrap">{workPeriod}</span>
      </div>
      <p className="experience-item-fade-in pt-7 text-zinc-400">
        {description}
      </p>
      {techStack && (
        <div className="flex gap-2 flex-wrap pt-7">
          {techStack?.map(({ icon, name }, index) => (
            <div
              key={index}
              className="experience-item-fade-in w-max h-max flex gap-1 items-center border border-zinc-500 text-zinc-400 rounded px-3 py-2">
              <Icon
                icon={icon}
                width="24"
                height="24"
                className="text-zinc-300"
              />
              <span>{name}</span>
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
