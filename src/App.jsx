import { Hero, Navbar, Skills } from "./components";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Skills />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
