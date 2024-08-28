import useAnimation from "/utils/hooks/useAnimations";
import {
  SocialLink,
  Headline,
  ResumeLink,
  Container,
  ScrollToTopMobile,
} from "../common";
import { socialLinks } from "/constants";

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
            Seeking a frontend developer to elevate your team? Let’s connect and
            explore how I can bring innovative, high-quality web solutions to
            your projects.
          </p>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col gap-7 xl:gap-14">
          <div className="flex flex-col gap-5 text-xl xl:text-2xl font-semibold w-max">
            <a
              href="mailto:ali.valiyev.dev@gmail.com"
              rel="noopener noreferrer"
              className="contacts-fade-in hover:underline block">
              ali.valiyev.dev@gmail.com
            </a>
            <a
              href="tel:+994708452035"
              className="contacts-fade-in hover:underline block">
              +994708452035
            </a>
          </div>

          <div className="contacts-fade-in flex gap-6">
            {socialLinks.map((link, index) => (
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
