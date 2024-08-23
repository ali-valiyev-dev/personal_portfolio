import {
  About,
  Experience,
  Contacts,
  Hero,
  Navbar,
  Projects,
  Skills,
  Education,
  Certifications,
} from "./sections";

function App() {
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
      </main>

      <footer>
        <Contacts />
      </footer>
    </>
  );
}

export default App;
