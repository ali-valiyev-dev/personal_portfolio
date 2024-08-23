import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const ProjectItem = ({
  id,
  image,
  title,
  description,
  repoLink,
  previewLink,
  tech,
}) => {
  const reverse = id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <div className={`w-full flex flex-col ${reverse} gap-7 xl:gap-10`}>
      <figure className="border border-zinc-800 overflow-hidden rounded-xl w-full lg:w-1/2 flex items-center justify-center transition-colors duration-300 hover:border-zinc-700">
        <a
          target="_blank"
          href={previewLink}>
          <img
            src={image}
            alt={`Project ${id} - ${title}`}
            className="max-w-full h-auto"
          />
        </a>
      </figure>

      <div className="w-full lg:w-1/2 flex flex-col gap-5 relative">
        <div className="flex items-center justify-between">
          <span className="font-bold text-2xl xl:text-5xl">
            {id.toString().padStart(2, "0")}
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

        <h4 className="font-semibold text-xl xl:text-3xl">{title}</h4>
        <p className="text-zinc-500">{description}</p>

        <div className="flex gap-1 items-center flex-wrap xl:absolute xl:bottom-0">
          {tech.map((tech, index) => (
            <div
              key={index}
              className="w-max flex gap-1 items-center border border-zinc-800 rounded px-2 py-1.5">
              <Icon
                icon={tech.icon}
                className="w-5 h-5 xl:w-6 xl:h-6 text-zinc-400"
              />
              <span className="text-zinc-400">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  id: PropTypes.number.isRequired,
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
};

export default ProjectItem;
