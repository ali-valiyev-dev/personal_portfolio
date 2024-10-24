import { Container, ItemsWrapper, SectionTitle, Spinner } from "../common";
import { ProjectItem } from "./components";
import useFetchData from "../hooks/useFetchData";
import { useTranslation } from "react-i18next";
import useAnimate from "../hooks/useAnimate";

const Projects = () => {
  const { t } = useTranslation();

  const { data, loading, error } = useFetchData("projects", "*");

  useAnimate([".anim-projects-title"], loading);

  if (error) {
    return null;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container
      id="projects"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5">
        <div className="anim-projects-title">
          <SectionTitle title={t("section_titles.my_projects")} />
        </div>

        <ItemsWrapper>
          {data.map((project, index) => (
            <ProjectItem
              key={project._id}
              {...project}
              index={index + 1}
            />
          ))}
        </ItemsWrapper>
      </div>
    </Container>
  );
};

export default Projects;
