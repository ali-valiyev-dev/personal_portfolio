import ProjectItem from "./ProjectItem";
import SectionTitle from "./SectionTitle";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-primary-black">
      <div className="text-primary-white mx-auto max-w-screen-2xl px-4 md:px-14 xl:px-28 py-10 xl:py-14">
        <div className="flex flex-col gap-10">
          <SectionTitle title="My Projects" />

          <div className="flex flex-col gap-7 xl:gap-14">
            {projects.map(
              ({
                id,
                image,
                title,
                description,
                repoLink,
                previewLink,
                tech,
              }) => (
                <ProjectItem
                  key={id}
                  id={id}
                  image={image}
                  title={title}
                  description={description}
                  tech={tech}
                  repoLink={repoLink}
                  previewLink={previewLink}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
