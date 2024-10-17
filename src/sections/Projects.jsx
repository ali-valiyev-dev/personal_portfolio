import { Container, ItemsWrapper, SectionTitle } from "../common";
import { ProjectItem } from "./components";
import useFetchData from "../hooks/useFetchData";
import useAnimate from "../hooks/useAnimate";

const Projects = () => {
  const { data: projects } = useFetchData("projects", "*");

  useAnimate([".projects-title"]);

  return (
    <Container
      id="projects"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5">
        <div className="projects-title">
          <SectionTitle title="My Projects" />
        </div>

        <ItemsWrapper>
          {projects.map(project => (
            <ProjectItem
              key={project.id}
              {...project}
            />
          ))}
        </ItemsWrapper>
      </div>
    </Container>
  );
};

export default Projects;
