import {
  SocialLink,
  ContactsHeadline,
  ResumeLink,
  Container,
  ScrollToTopMobile,
} from "../common";
import useFetchData from "../hooks/useFetchData";
import useAnimate from "../hooks/useAnimate";

const Contacts = () => {
  const { data: general_info } = useFetchData(
    "general_info",
    "CONTACTS_TEXT, EMAIL, PHONE"
  );

  const { data: social_links } = useFetchData("social_links", "*");

  useAnimate([".anim-contacts-content"]);

  return (
    <Container
      id="contacts"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-16">
        <div className="w-full xl:w-1/2">
          <div className="anim-contacts-content flex justify-between items-start">
            <ContactsHeadline />
            <ScrollToTopMobile />
          </div>

          <p className="anim-contacts-content mt-5 text-zinc-500 max-w-[600px]">
            {general_info[0]?.CONTACTS_TEXT}
          </p>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col gap-7 xl:gap-14">
          <div className="flex flex-col gap-5 text-xl xl:text-2xl font-semibold w-max">
            <a
              href={`mailto:${general_info[0]?.EMAIL}`}
              rel="noopener noreferrer"
              className="anim-contacts-content hover:underline block">
              {general_info[0]?.EMAIL}
            </a>
            <a
              href={`tel:${general_info[0]?.PHONE}`}
              className="anim-contacts-content hover:underline block">
              {general_info[0]?.PHONE}
            </a>
          </div>

          <div className="anim-contacts-content flex flex-wrap gap-2 sm:gap-6">
            {social_links.map(social_link => (
              <SocialLink
                key={social_link.id}
                {...social_link}
              />
            ))}
            <ResumeLink />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
