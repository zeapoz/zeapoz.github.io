import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Body() {
  return (
    <div className="mx-7 sm:mx-10 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
