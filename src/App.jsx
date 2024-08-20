import {
  About,
  Experience,
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
        <div className="bg-primary-black">
          <Experience />
        </div>
        <About />
        <div className="bg-primary-black">
          <Projects />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
