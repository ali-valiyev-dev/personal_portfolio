import { skills } from "../../constants";
import { SkillItem } from "./components";
import { Container, SectionTitle } from "../common";

const Skills = () => {
  return (
    <Container
      id="skills"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col gap-5 items-center">
        <SectionTitle title="My Skills" />
        <div className="flex justify-center flex-wrap py-10 gap-5 xl:gap-x-16 xl:gap-y-10">
          {skills.map(({ iconDark, iconLight, label, alt }) => (
            <SkillItem
              key={label}
              iconDark={iconDark}
              iconLight={iconLight}
              label={label}
              alt={alt}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
