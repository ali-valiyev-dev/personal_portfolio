import { useParams } from "react-router-dom";
import NotFound from "./sections/NotFound";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Contacts from "./sections/Contacts";
import { ScrollToTop } from "./common";

function Layout() {
  const { lang } = useParams();
  const validLanguages = [undefined, "az", "en"];

  if (!validLanguages.includes(lang)) {
    return <NotFound />;
  }

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Experience />
        <Education />
        <Certifications />

        <ScrollToTop />
      </main>

      <footer>
        <Contacts />
      </footer>
    </>
  );
}

export default Layout;
