import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const ProjectItem = ({
  id,
  image,
  title,
  description,
  repoLink,
  previewLink,
}) => {
  return (
    <div className="border rounded-xl overflow-hidden border-zinc-800 flex flex-col lg:flex-row gap-10">
      <figure className="border border-zinc-800 w-full lg:w-1/2 flex items-center justify-center">
        <img
          src={image}
          alt={`Project ${id} - ${title}`}
          className="max-w-full h-auto"
        />
      </figure>

      <div className="w-full lg:w-1/2 flex flex-col gap-7 justify-between my-auto">
        <span className="font-bold text-2xl xl:text-5xl">
          {id.toString().padStart(2, "0")}
        </span>
        <h4 className="font-semibold text-xl xl:text-2xl">{title}</h4>
        <p className="text-zinc-500">{description}</p>

        <div className="flex gap-4 items-center">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${title}`}>
            <Icon
              icon="cib:github"
              width="24"
              height="24"
              className="hover:text-zinc-500"
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
              className="hover:text-zinc-500"
            />
          </a>
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
};

export default ProjectItem;
