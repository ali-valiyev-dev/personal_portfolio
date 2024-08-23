import { ProjectItem } from "./components";
import { Container, SectionTitle } from "../common";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <Container
      id="projects"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5">
        <SectionTitle title="My Projects" />

        <div className="flex flex-col items-center gap-5 xl:gap-8">
          {projects.map(project => (
            <ProjectItem
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
