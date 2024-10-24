import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav_links: {
          skills: "Skills",
          projects: "Projects",
          about: "About Me",
          experience: "Experience",
          education: "Education",
          contacts: "Contacts",
        },

        section_titles: {
          my_skills: "My Skills",
          my_projects: "My Projects",
          about_me: "About Me",
          my_experience: "My Experience",
          my_education: "My Education",
          my_certifications: "My Certifications",
        },

        common: {
          resume: "Resume",
          see_less: "See Less",
          see_more: "See All Experiences",
          more: "More",
          relevant_coursework: "Relevant Coursework:",
        },
      },
    },
    az: {
      translation: {
        nav_links: {
          skills: "Bacarıqlarım",
          projects: "Layihələrim",
          about: "Haqqımda",
          experience: "İş Təcrübəm",
          education: "Təhsilim",
          contacts: "Əlaqə",
        },

        section_titles: {
          my_skills: "Bacarıqlarım",
          my_projects: "Layihələrim",
          about_me: "Haqqımda",
          my_experience: "Təcrübələrim",
          my_education: "Təhsilim",
          my_certifications: "Sertifikatlarım",
        },

        common: {
          resume: "CV",
          see_less: "Daha az göstər",
          see_more: "Hamısını göstər",
          more: "Daha ətraflı",
          relevant_coursework: "Əlaqəli fənlər:",
        },
      },
    },
  },
  lng: window.location.pathname.slice(1) || "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
