import useAnimation from "/utils/hooks/useAnimations";
import { Container, ItemsWrapper, SectionTitle } from "../common";
import { ProjectItem } from "./components";
import { PROJECTS } from "/constants";

const Projects = () => {
  useAnimation([".projects-title-fade-in"]);

  return (
    <Container
      id="projects"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5">
        <div className="projects-title-fade-in">
          <SectionTitle title="My Projects" />
        </div>

        <ItemsWrapper>
          {PROJECTS.map(project => (
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
