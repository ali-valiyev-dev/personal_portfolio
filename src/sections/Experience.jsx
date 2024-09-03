import useAnimation from "/utils/hooks/useAnimations";
import { Container, SectionTitle, SeeMore } from "../common";
import { ExperienceItem } from "./components";
import { EXPERIENCES } from "/constants";

const Experience = () => {
  useAnimation([".exp-title-fade-in"]);

  return (
    <Container
      id="experience"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5 xl:px-6">
        <div className="exp-title-fade-in">
          <SectionTitle title="My Experience" />
        </div>

        <SeeMore>
          {EXPERIENCES.map((experience, index) => (
            <ExperienceItem
              key={index}
              {...experience}
            />
          ))}
        </SeeMore>
      </div>
    </Container>
  );
};

export default Experience;
