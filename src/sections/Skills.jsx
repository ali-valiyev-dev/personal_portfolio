import { SKILLS } from "/constants";
import { SkillItem } from "./components";
import { Container, SectionTitle } from "../common";
import useAnimation from "/utils/hooks/useAnimations";

const Skills = () => {
  useAnimation([
    {
      selector: ".skills-fade-in",
    },
  ]);

  return (
    <Container
      id="skills"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col gap-5 items-center">
        <div className="skills-fade-in ">
          <SectionTitle title="My Skills" />
        </div>
        <div
          className="flex flex-wrap justify-center lg:py-10
        gap-5 lg:gap-10 xl:gap-x-[70px]">
          {SKILLS.map((skill, index) => (
            <SkillItem
              key={index}
              {...skill}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
