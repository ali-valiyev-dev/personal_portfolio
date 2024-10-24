import { SkillItem } from "./components";
import { Container, SectionTitle, Spinner } from "../common";
import useFetchData from "../hooks/useFetchData";
import { useTranslation } from "react-i18next";
import useAnimate from "../hooks/useAnimate";

const Skills = () => {
  const { t } = useTranslation();

  const { data, loading, error } = useFetchData("skills", "*", false);

  useAnimate([".anim-skills-title"], loading);

  if (error) {
    return null;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container
      id="skills"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col gap-5 items-center">
        <div className="anim-skills-title">
          <SectionTitle title={t("section_titles.my_skills")} />
        </div>
        <div
          className="flex flex-wrap justify-center lg:py-10
        gap-6 lg:gap-10 xl:gap-x-[70px]">
          {data.map(skill => (
            <SkillItem
              key={skill._id}
              {...skill}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
