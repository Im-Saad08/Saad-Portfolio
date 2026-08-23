import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { Now } from "./components/Now";
import { Notes } from "./components/Notes";
import { Life } from "./components/Life";
import { Timeline } from "./components/Timeline";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Story />
        <Skills />
        <Work />
        <Now />
        <Notes />
        <Life />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;