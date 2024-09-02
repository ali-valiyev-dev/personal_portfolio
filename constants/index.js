export const NAV_LINKS = [
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "about", label: "About Me" },
  { href: "experience", label: "Experience" },
  { href: "education", label: "Education" },
  { href: "contacts", label: "Contacts" },
];

export const SKILLS = [
  {
    skill: "Javascript",
    icon: "simple-icons:javascript",
  },
  {
    skill: "Typescript",
    icon: "simple-icons:typescript",
  },
  {
    skill: "React.js",
    icon: "simple-icons:react",
  },
  {
    skill: "Next.js",
    icon: "simple-icons:nextdotjs",
  },
  {
    skill: "Redux",
    icon: "simple-icons:redux",
  },
  {
    skill: "React Query",
    icon: "simple-icons:reactquery",
  },
  {
    skill: "Vue.js",
    icon: "simple-icons:vuedotjs",
  },
  {
    skill: "Tailwindcss",
    icon: "simple-icons:tailwindcss",
  },
  {
    skill: "Vuetify",
    icon: "simple-icons:vuetify",
  },
  {
    skill: "Material-UI",
    icon: "simple-icons:mui",
  },
  {
    skill: "Sass/Scss",
    icon: "simple-icons:sass",
  },
  {
    skill: "Supabase",
    icon: "simple-icons:supabase",
  },
  {
    skill: "Payload",
    icon: "simple-icons:payloadcms",
  },
  {
    skill: "GSAP",
    icon: "simple-icons:greensock",
  },
  {
    skill: "Figma",
    icon: "simple-icons:figma",
  },
];

export const EXPERIENCES = [
  {
    companyLogo: "/atl-logo-light.svg",
    companyName: "Atl Tech",
    position: "Intern Software Engineer (Frontend Developer) at Atl Tech",
    workPeriod: "Feb 2024 - May 2024",
    description:
      "Collaborated with senior developers to create a Vue.js, TypeScript, TailwindCSS, and Vuetify-based web application for AzerEnergy JSC, Ensuring high code quality through best practices, and implementing CRUD operations.",
    techStack: [
      {
        icon: "mdi:vuejs",
        name: "Vue",
      },
      {
        icon: "simple-icons:typescript",
        name: "TypeScript",
      },
      {
        icon: "cib:vue-js",
        name: "Vue-Query",
      },
      {
        icon: "simple-icons:tailwindcss",
        name: "TailwindCSS",
      },
      {
        icon: "simple-icons:vuetify",
        name: "Vuetify",
      },
      {
        icon: "simple-icons:jira",
        name: "Jira",
      },
    ],
  },
  {
    companyLogo: "/improtex_logo.svg",
    companyName: "Improtex Trucks & Buses LLC",
    position: "Jr. Procurement Specialist at Improtex Trucks & Buses",
    workPeriod: "Aug 2021 - Nov 2022",
    description:
      "Managed spare parts orders, negotiated with manufacturers for optimal supply terms, and prepared comprehensive reports on supplier base, delivery, and performance metrics.",
  },
  {
    companyLogo: "/general_supply_logo.png",
    companyName: "General Supply",
    position: "Jr. Cost Control Specialist at General Supply",
    workPeriod: "Apr 2021 - Jun 2021",
    description:
      "Collaborated with departments to boost profitability, evaluated product and service costs, and analyzed invoices for accurate pricing and allocation.",
  },
];

export const EDUCATION = [
  {
    universityLogo: "/khazar_university_logo.png",
    university: "Khazar University",
    major: "BSc in Business Management at Khazar University",
    studyYears: "Sep 2016 - Jan 2022",
    description:
      "My academic journey at Khazar University honed my strategic thinking, project management, and analytical skills. These experiences, combined with my passion for technology, have provided a solid foundation to excel in frontend development.",
    relevantCoursework:
      "Digital Marketing, Entrepreneurship, Project Management, Organizational Behavior, Business Analytics",
  },
];

export const PROJECTS = [
  {
    id: 1,
    image: "/caffina_cover.png",
    title: "Caffina (Coffee Shop)",
    description:
      "A visually appealing cafe website showcasing a modern, responsive design. Built with React.js for a dynamic, component-based structure and styled using TailwindCSS for a clean, elegant look. Features interactive animations with GSAP.",
    previewLink: "https://caffina-cafe.netlify.app",
    repoLink: "https://github.com/ali-valiyev-dev/caffina",
    tech: [
      {
        icon: "simple-icons:react",
        name: "React.js",
      },
      {
        icon: "simple-icons:tailwindcss",
        name: "TailwindCSS",
      },
      {
        icon: "cib:greensock",
        name: "GSAP",
      },
    ],
  },
  {
    id: 2,
    image: "/portfolio_cover.png",
    title: "Portfolio Website",
    description:
      "Developed to showcase my work, this portfolio features responsive layout with dynamic GSAP animations. Built with React.js for a modern, component-based structure and styled with TailwindCSS for a clean, efficient design.",
    previewLink: "https://ali-personal-portfolio.netlify.app",
    repoLink: "https://github.com/ali-valiyev-dev/personal_portfolio",
    tech: [
      {
        icon: "simple-icons:react",
        name: "React.js",
      },
      {
        icon: "simple-icons:tailwindcss",
        name: "TailwindCSS",
      },
      {
        icon: "cib:greensock",
        name: "GSAP",
      },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/ali-valiyev-dev",
    icon: "simple-icons:linkedin",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/ali-valiyev-dev",
    icon: "simple-icons:github",
    alt: "GitHub",
  },
  {
    href: "https://www.coursera.org/user/61874ad3b8bc9170e20ecc6a46609b2e",
    icon: "simple-icons:coursera",
    alt: "Coursera",
  },
];

export const CERTIFICATIONS = [
  {
    icon: "simple-icons:udemy",
    date: "Jul 2024",
    title: "The Ultimate React (Next.js) Course 2024 by Jonas Schmedtmann",
    link: "https://www.udemy.com/certificate/UC-01438731-a72c-43a3-a434-969b7b50e46c",
    description:
      "Acquired in-depth knowledge of modern React development, mastering advanced state management, performance tuning, and Tailwind CSS for styling. Developed real-world applications, delving into React’s internal mechanisms, Redux for state management, and cutting-edge features like React Server Components, enhancing both front-end and back-end capabilities.",
    details: [
      {
        icon: "solar:clock-circle-outline",
        text: "84 hours",
      },
      {
        icon: "solar:medal-ribbons-star-outline",
        text: "Bestseller",
      },
    ],
  },
  {
    icon: "simple-icons:coursera",
    date: "May 2023",
    title: "Advanced React Course by Meta",
    link: "https:www.coursera.org/account/accomplishments/certificate/ZRE92VAN2F56",
    description:
      "Specialized in building robust, reusable React components using advanced design patterns and techniques. Developed skills in API interaction for data fetching and posting, and integrated popular React libraries to streamline and optimize application development, making applications more scalable and maintainable.",
    details: [
      {
        icon: "solar:clock-circle-outline",
        text: "26 hours",
      },
      {
        icon: "mdi:achievement",
        text: "98.80%",
      },
    ],
  },
  {
    icon: "simple-icons:udemy",
    date: "Feb 2023",
    title: "The Complete JavaScript Course 2023 by Jonas Schmedtmann",
    link: "https://www.udemy.com/certificate/UC-a6c7edb5-6b85-46f8-944d-16494df0020e",
    description:
      "Enhanced JavaScript expertise by mastering ES6+ features, modern object-oriented programming, and asynchronous coding patterns. Gained a deep understanding of JavaScript internals and honed problem-solving skills through 50+ coding challenges, while utilizing essential tools like NPM, Parcel, and Babel for efficient development workflows.",
    details: [
      {
        icon: "solar:clock-circle-outline",
        text: "69 hours",
      },
      {
        icon: "solar:medal-ribbons-star-outline",
        text: "Bestseller",
      },
    ],
  },
];

export const GENERAL_INFO = {
  HERO_TEXT: `I'm a Frontend Developer passionate about creating intuitive and visually appealing web experiences. With a keen focus on detail and a drive to exceed expectations, I am committed to delivering impactful solutions and staying ahead of emerging technologies.`,

  ABOUT_ME_TEXT: `I’m a passionate, self-taught frontend developer specializing in React.js and Tailwind CSS. My enthusiasm lies in bringing the technical and visual aspects of digital products to life. I prioritize user experience, pixel-perfect design, and writing clean, readable, and highly performant code.
  <br/>
  <br/>
  I began my journey as a web developer in 2023 and have continually evolved, embracing new challenges and mastering the latest technologies. Now, I’m building cutting-edge web applications using modern tools like Next.js, TypeScript, Tailwind CSS, Supabase, and more.`,

  CONTACTS_TEXT: `Looking for a frontend developer to elevate your team? Let’s connect and explore how I can deliver innovative, high-quality web solutions for your projects.`,
  EMAIL: "ali.valiyev.dev@gmail.com",
  PHONE: "+994708452035",
  RESUME_LINK:
    "https://app.enhancv.com/share/e391e6bd/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic",
};
