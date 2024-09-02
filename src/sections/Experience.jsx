import useAnimation from "/utils/hooks/useAnimations";
import { Container, ItemsWrapper, SectionTitle, SeeMore } from "../common";
import { ExperienceItem } from "./components";
import { EXPERIENCES } from "/constants";

const Experience = () => {
  useAnimation([
    {
      selector: ".experience-fade-in",
    },
  ]);

  return (
    <Container
      id="experience"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5 xl:px-6">
        <div className="experience-fade-in">
          <SectionTitle title="My Experience" />
        </div>

        <ItemsWrapper>
          <SeeMore initialCount={1}>
            {EXPERIENCES.map((experience, index) => (
              <ExperienceItem
                key={index}
                {...experience}
              />
            ))}
          </SeeMore>
        </ItemsWrapper>
      </div>
    </Container>
  );
};

export default Experience;
