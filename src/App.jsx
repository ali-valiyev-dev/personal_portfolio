import {
  About,
  Experience,
  Contacts,
  Hero,
  Navbar,
  Projects,
  Skills,
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
        <About />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

export default App;
