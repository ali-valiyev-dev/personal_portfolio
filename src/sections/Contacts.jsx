import useAnimation from "/utils/hooks/useAnimations";
import {
  SocialLink,
  ContactsHeadline,
  ResumeLink,
  Container,
  ScrollToTopMobile,
} from "../common";
import { GENERAL_INFO, SOCIAL_LINKS } from "/constants";

const Contacts = () => {
  useAnimation([
    ".contacts-title-fade-in",
    ".contacts-subtitle-fade-in",
    ".contacts-subtitle-fade-in",
    ".contacts-mail-fade-in",
    ".contacts-number-fade-in",
    ".contacts-socials-fade-in",
  ]);

  return (
    <Container
      id="contacts"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-16">
        <div className="w-full xl:w-1/2">
          <div className="contacts-title-fade-in flex justify-between items-start">
            <ContactsHeadline />
            <ScrollToTopMobile />
          </div>

          <p className="contacts-subtitle-fade-in mt-5 text-zinc-500 max-w-[600px]">
            {GENERAL_INFO.CONTACTS_TEXT}
          </p>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col gap-7 xl:gap-14">
          <div className="flex flex-col gap-5 text-xl xl:text-2xl font-semibold w-max">
            <a
              href={`mailto:${GENERAL_INFO.EMAIL}`}
              rel="noopener noreferrer"
              className="contacts-mail-fade-in hover:underline block">
              {GENERAL_INFO.EMAIL}
            </a>
            <a
              href={`tel:${GENERAL_INFO.PHONE}`}
              className="contacts-number-fade-in hover:underline block">
              {GENERAL_INFO.PHONE}
            </a>
          </div>

          <div className="contacts-socials-fade-in flex flex-wrap gap-2 sm:gap-6">
            {SOCIAL_LINKS.map((link, index) => (
              <SocialLink
                key={index}
                {...link}
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
