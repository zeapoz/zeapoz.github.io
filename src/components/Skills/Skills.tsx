import React from "react";
import Separator from "../Misc/Separator";
import { Bar } from "./Bar";

export { Skills };

const Skills = () => {
  return (
    <section id="skills" className="mt-5">
      <h1 className="font-bold text-white text-center text-3xl">Skills</h1>
      <br></br>
      <br></br>
      <div className="flex justify-between">
        <div className="basis-1/2 xl:basis-1/3">
          <p>
            I love to learn new things and deepen my knowledge in that I already
            know! At the moment I'm studying Rust, really liking it so far!
          </p>
          <br></br>
          <p>
            I specialize in Python and as of lately a bit of web development,
            but I do enjoy a fair bit of back-end development as well. This very
            website was written using React and the Tailwind CSS framework.
          </p>
          <br></br>
          <p>
            Though, my current languages of choice to tackle a problem are
            Python, Rust and JavaScript/TypeScript.
          </p>
        </div>
        <div className="basis-1/3 sm:basis-4/6 md:basis-9/12 xl:basis-4/6 ml-10">
          <h1 className="font-bold">Programming languages</h1>
          <ul className="space-y-5 mb-5 xl:space-y-2 xl:mb-2">
            <Bar title="Python" percentage={90} />
            <Bar title="Rust" percentage={85} />
            <Bar title="JavaScript/TypeScript" percentage={65} />
            <Bar title=".NET" percentage={60} />
          </ul>
          <h1 className="font-bold mt-8">Frameworks & more</h1>
          <ul className="space-y-5 mb-5 xl:space-y-2 xl:mb-2">
            <Bar title="SQL" percentage={55} />
            <Bar title="React" percentage={35} />
            <Bar title="Pandas & NumPy" percentage={25} />
          </ul>
        </div>
      </div>
      <Separator />
    </section>
  );
}
