import CertificationItem from "./CertificationItem";
import SectionTitle from "./SectionTitle";
import { certifications } from "../constants";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-primary-black">
      <div className="text-primary-white mx-auto max-w-screen-2xl px-4 md:px-14 xl:px-28 py-10 xl:py-20 flex flex-col gap-12 items-center">
        <SectionTitle title="My Certifications" />

        <div className="flex flex-col gap-y-5 xl:gap-y-8">
          {certifications.map(certification => (
            <CertificationItem
              key={certification.id}
              {...certification}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
