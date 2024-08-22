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
} from "./components";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <About />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

export default App;
