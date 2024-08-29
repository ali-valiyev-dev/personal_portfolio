import useAnimation from "/utils/hooks/useAnimations";
import {
  SocialLink,
  Headline,
  ResumeLink,
  Container,
  ScrollToTopMobile,
} from "../common";
import { GENERAL_INFO, SOCIAL_LINKS } from "/constants";

const Contacts = () => {
  useAnimation([
    {
      selector: ".contacts-fade-in",
    },
  ]);

  return (
    <Container
      id="contacts"
      bgColor="bg-primary-white"
      textColor="text-primary-black">
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-16">
        <div className="contacts-fade-in w-full xl:w-1/2">
          <Headline text={[`Let's`, "Talk for", "Something", "Special"]} />
          <p className="contacts-fade-in mt-5 text-zinc-500 max-w-[600px]">
            {GENERAL_INFO.CONTACTS_TEXT}
          </p>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col gap-7 xl:gap-14">
          <div className="flex flex-col gap-5 text-xl xl:text-2xl font-semibold w-max">
            <a
              href={`mailto:${GENERAL_INFO.EMAIL}`}
              rel="noopener noreferrer"
              className="contacts-fade-in hover:underline block">
              {GENERAL_INFO.EMAIL}
            </a>
            <a
              href={`tel:${GENERAL_INFO.PHONE}`}
              className="contacts-fade-in hover:underline block">
              {GENERAL_INFO.PHONE}
            </a>
          </div>

          <div className="contacts-fade-in flex gap-6">
            {SOCIAL_LINKS.map((link, index) => (
              <SocialLink
                key={index}
                {...link}
              />
            ))}
            <ResumeLink />

            <ScrollToTopMobile />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
