import { Container, ItemsWrapper, SectionTitle } from "../common";
import { ProjectItem } from "./components";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <Container
      id="projects"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5">
        <SectionTitle title="My Projects" />

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
