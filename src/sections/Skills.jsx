import { SkillItem } from "./components";
import { Container, SectionTitle } from "../common";
import useFetchData from "../hooks/useFetchData";
import useAnimate from "../hooks/useAnimate";

const Skills = () => {
  const { data: skills } = useFetchData("skills", "*");

  useAnimate([".skills-title"]);

  return (
    <Container
      id="skills"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col gap-5 items-center">
        <div className="skills-title ">
          <SectionTitle title="My Skills" />
        </div>
        <div
          className="flex flex-wrap justify-center lg:py-10
        gap-6 lg:gap-10 xl:gap-x-[70px]">
          {skills.map(skill => (
            <SkillItem
              key={skill.id}
              {...skill}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
