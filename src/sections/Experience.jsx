import { Container, SectionTitle, SeeMore } from "../common";
import { ExperienceItem } from "./components";
import useFetchData from "../hooks/useFetchData";
import useAnimate from "../hooks/useAnimate";

const Experience = () => {
  const { data: experience } = useFetchData("experience", "*");

  useAnimate([".exp-title"]);

  return (
    <Container
      id="experience"
      bgColor="bg-primary-black"
      textColor="text-primary-white">
      <div className="flex flex-col gap-5 xl:px-6">
        <div className="exp-title">
          <SectionTitle title="My Experience" />
        </div>

        <SeeMore>
          {experience.map(experience => (
            <ExperienceItem
              key={experience.id}
              {...experience}
            />
          ))}
        </SeeMore>
      </div>
    </Container>
  );
};

export default Experience;
