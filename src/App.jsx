import { About, Experience, Hero, Navbar, Skills } from "./components";

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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
