import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { TechItem } from "../../common";
import useAnimate from "../../hooks/useAnimate";
import useFetchMedia from "../../hooks/useFetchMedia";

const ProjectItem = ({
  index,
  image,
  title,
  description,
  repoLink,
  previewLink,
  tech,
  loading,
}) => {
  const { imageSrc } = useFetchMedia("portfolio-images", image);

  useAnimate([".anim-project-item"], loading);

  const reverse = index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <div
      className={`anim-project-item w-full flex flex-col ${reverse} gap-7 xl:gap-10`}>
      <figure className="border border-zinc-800 overflow-hidden rounded-xl w-full lg:w-1/2 flex items-center justify-center transition-colors duration-300 hover:border-zinc-700">
        <a
          target="_blank"
          href={previewLink}>
          {imageSrc ? (
            <img
              src={imageSrc}
              loading="lazy"
              alt={`Project ${index} - ${title}`}
              className="object-cover"
            />
          ) : (
            <p>Image unavailable</p>
          )}
        </a>
      </figure>

      <div className="w-full lg:w-1/2 flex flex-col gap-5 relative">
        <div className="anim-project-item flex items-center justify-between">
          <span className="font-bold text-2xl xl:text-5xl">
            {index.toString().padStart(2, "0")}
          </span>

          <div className="flex gap-4">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository of ${title}`}>
              <Icon
                icon="cib:github"
                width="24"
                height="24"
                className="transition-colors duration-300 hover:text-zinc-500"
              />
            </a>
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Preview of ${title}`}>
              <Icon
                icon="quill:link-out"
                width="24"
                height="24"
                className="transition-colors duration-300 hover:text-zinc-500"
              />
            </a>
          </div>
        </div>

        <h3 className="anim-project-item font-semibold text-xl xl:text-3xl">
          {title}
        </h3>

        <p className="anim-project-item text-zinc-500">{description}</p>

        <div className="flex gap-1 items-center flex-wrap xl:absolute xl:bottom-0">
          {tech.map((tech, index) => (
            <div
              key={index}
              className="anim-project-item">
              <TechItem {...tech} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  previewLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool,
};

export default ProjectItem;
