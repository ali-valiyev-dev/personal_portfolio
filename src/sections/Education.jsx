import { SectionTitle } from "../common";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-primary-black">
      <div className="text-primary-white mx-auto max-w-screen-2xl px-4 md:px-14 xl:px-28 py-10 xl:py-20 flex flex-col gap-12 items-center">
        <SectionTitle title="My Education" />

        <div className="max-w-[1050px]">
          <div className="text-zinc-300 rounded-xl border border-zinc-800 px-6 py-7">
            <div className="relative flex flex-col lg:flex-row gap-7 lg:justify-between lg:items-center">
              <div className="flex flex-col md:flex-row flex-nowrap gap-7 h-max md:items-center">
                <div className="flex justify-between items-center">
                  <img
                    src="/khazar_university_logo.png"
                    alt="Khazar University logo"
                    className="w-auto h-10"
                  />
                  <span className="flex text-nowrap md:hidden">
                    Sep 2016 - Jan 2022
                  </span>
                </div>
                <h4 className="text-primary-white text-xl xl:text-2xl">
                  BSc in Business Management at Khazar University
                </h4>
              </div>
              <span className="hidden md:flex text-nowrap">
                Sep 2016 - Jan 2022
              </span>
            </div>
            <p className="mt-7">
              My academic journey at Khazar University honed my strategic
              thinking, project management, and analytical skills. These
              experiences, combined with my passion for technology, have
              provided a solid foundation to excel in frontend development.
            </p>
            <p className="mt-7">
              <span className="font-semibold text-primary-white">
                Relevant Coursework:{" "}
              </span>
              Digital Marketing, Entrepreneurship, Project Management,
              Organizational Behavior, Business Analytics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
