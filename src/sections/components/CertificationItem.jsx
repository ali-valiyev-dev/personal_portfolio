import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import useAnimate from "../../hooks/useAnimate";

const CertificationItem = ({
  icon,
  date,
  title,
  link,
  description,
  details,
}) => {
  useAnimate([".cert-item-content"]);

  return (
    <div className="cert-item-content text-primary-white w-full rounded-xl border border-zinc-800 px-4 sm:px-6 py-7">
      <div className="cert-item-content flex flex-col lg:flex-row gap-7 lg:justify-between lg:items-center">
        <div className="flex flex-col md:flex-row gap-7 h-max md:items-center">
          <div className="flex items-center justify-between">
            <Icon
              icon={icon}
              width={32}
              height={32}
            />
            <span className="md:hidden text-nowrap">{date}</span>
          </div>
          <h3 className="text-xl xl:text-2xl">{title}</h3>
        </div>
        <span className="hidden md:flex text-nowrap">{date}</span>
      </div>

      <p className="cert-item-content mt-7 text-zinc-400">{description}</p>

      <div className="cert-item-content flex items-center justify-between mt-7">
        <div className="flex items-center gap-2 sm:gap-5 text-zinc-400">
          {details &&
            details?.map(({ icon, text }, index) => (
              <div
                key={index}
                className="flex flex-wrap justify-center items-center gap-1">
                <Icon
                  icon={icon}
                  width={24}
                  height={24}
                />
                <span className="text-zinc-300 text-nowrap">{text}</span>
              </div>
            ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-1 text-base text-nowrap hover:underline text-zinc-300 hover:text-zinc-400 transition-all duration-300"
          aria-label={`View ${title} certification details (opens in a new tab)`}>
          More{" "}
          <Icon
            icon="quill:link-out"
            width={16}
            height={16}
          />
        </a>
      </div>
    </div>
  );
};

CertificationItem.propTypes = {
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default CertificationItem;
