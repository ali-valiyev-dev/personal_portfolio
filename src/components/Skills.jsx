import { skills } from "../constants";
import SkillItem from "./SkillItem";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <section id="skills">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-14 xl:px-28 py-10 xl:py-28 flex flex-col gap-12 lg:gap-20 xl:items-center">
        <SectionTitle title="My Skills" />

        <div className="flex justify-center flex-wrap gap-5 md:gap-x-[40px] xl:gap-x-[71px] md:gap-y-10">
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
    </section>
  );
};

export default Skills;
