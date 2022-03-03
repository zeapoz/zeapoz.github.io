import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Body() {
  return (
    <div className="mx-0 md:mx-5 xl:mx-15 2xl:mx-20">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
