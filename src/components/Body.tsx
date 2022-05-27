import { About } from "./About";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact";
import React from "react";

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
