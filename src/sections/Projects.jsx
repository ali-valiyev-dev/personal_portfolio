import useAnimation from "/utils/hooks/useAnimations";
import { Container, ItemsWrapper, SectionTitle } from "../common";
import { ProjectItem } from "./components";
import { projects } from "/constants";

const Projects = () => {
  useAnimation([
    {
      selector: ".projects-fade-in",
    },
  ]);

  return (
    <Container
      id="projects"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5">
        <div className="projects-fade-in">
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
