import { lazy, Suspense } from "react";
import { Spinner } from "./common";

const Navbar = lazy(() => import("./sections/Navbar"));
const Hero = lazy(() => import("./sections/Hero"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const About = lazy(() => import("./sections/About"));
const Experience = lazy(() => import("./sections/Experience"));
const Education = lazy(() => import("./sections/Education"));
const Certifications = lazy(() => import("./sections/Certifications"));
const Contacts = lazy(() => import("./sections/Contacts"));

function Layout() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <header>
          <Navbar />
        </header>
      </Suspense>

      <main>
        <Suspense fallback={<Spinner />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Education />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Certifications />
        </Suspense>
      </main>

      <footer>
        <Suspense fallback={<Spinner />}>
          <Contacts />
        </Suspense>
      </footer>
    </>
  );
}

export default Layout;
