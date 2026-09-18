import { useState } from "react";
import Loader from "./components/Loader.jsx";
import Cursor from "./components/Cursor.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Competitive from "./components/Competitive.jsx";
import Impact from "./components/Impact.jsx";
import BeyondCode from "./components/BeyondCode.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useActiveSection } from "./hooks/useActiveSection.js";
import { useReducedMotion } from "./hooks/useReducedMotion.js";
import { nav } from "./data/content.js";

const sectionIds = nav.map((n) => n.id);

function Site() {
  // Mounted only once the loader is gone, so section elements already
  // exist in the DOM by the time the scroll-tracking effect runs.
  const { active, progress } = useActiveSection(sectionIds);

  return (
    <>
      <Nav active={active} progress={progress} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Competitive />
        <Impact />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Loader onDone={() => setLoaded(true)} skip={reducedMotion} />
      <Cursor />
      <div className="grain" />
      {loaded && <Site />}
    </>
  );
}
