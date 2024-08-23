import { SectionTitle } from "../common";
import { ExperienceItem } from "./components";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-primary-black">
      <div className="text-primary-white mx-auto max-w-screen-2xl px-4 md:px-14 xl:px-28 py-10 xl:py-20 flex flex-col gap-12 items-center">
        <SectionTitle title="My Experience" />

        <div className="flex flex-wrap md:gap-x-[40px] xl:gap-x-[71px] gap-y-5 xl:gap-y-8 max-w-[1050px]">
          {experiences.map(
            (
              {
                companyLogo,
                companyName,
                position,
                workPeriod,
                description,
                techStack,
              },
              index
            ) => (
              <ExperienceItem
                key={index}
                companyLogo={companyLogo}
                companyName={companyName}
                position={position}
                workPeriod={workPeriod}
                description={description}
                techStack={techStack}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
