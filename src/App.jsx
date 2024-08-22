import {
  About,
  Experience,
  Contacts,
  Hero,
  Navbar,
  Projects,
  Skills,
  Education,
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
        <About />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

export default App;
