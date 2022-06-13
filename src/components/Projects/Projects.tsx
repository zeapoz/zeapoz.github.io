import React from "react";
import { Project } from "./Project";

export { Projects };

const Projects = () => {
  return (
    <section id="projects" className="mt-5">
      <h1 className="font-bold text-center text-3xl text-white mb-5">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Project
          title="CHIP-8 Emulator"
          link="https://github.com/zeapoz/chip8"
          desc="A fully functional emulator for the CHIP-8 Virtual Machine, written in Rust."
          image="https://i.ytimg.com/vi/yRBqQalUeVg/maxresdefault.jpg"
        />
        <Project
          title="Scientific Calculator"
          link="https://zeapoz.github.io/calculator"
          desc="Basic scientific calculator that tokenizes and parses a mathematical expression."
          image="/images/calculator.png"
        />
        <Project
          title="2048 Clone"
          link="https://zeapoz.github.io/2048-javascript"
          desc="A clone of the popular game 2048, implemented with standard JavaScript."
          image="https://media.salon.com/2014/04/2048-image.png"
        />
      </div>
      <div className="rounded bg-gray-700 mt-10 w-full h-1"></div>
    </section>
  );
}
