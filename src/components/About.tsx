import React from "react";

export { About };

const About = () => {
  return (
    <section id="about" className="mt-16">
      <h1 className="font-bold text-white title-font text-3xl">
        Hi, I'm Jonathan!
      </h1>
      <div className="flex justify-between mt-5 space-y-5 xl:space-y-0 flex-col xl:flex-row">
        <p className="basis-2/3">
          I love to build applications and solve interesting problems with code!
          Check out my skills, current and past projects on my page here. I'm
          currently looking for internship opportunities, please contact me on
          LinkedIn or by email if you are interested.
        </p>
        <div className="basis-1/4 flex">
          <p>
            Student at <b>NBI/Handelsakademin</b>, studying{" "}
            <i>Computer Science</i> and <i>Machine Learning.</i>
          </p>
        </div>
      </div>
      <a
        href="mailto:jonathan4635a@gmail.com"
        className="inline-block font-bold rounded-full mt-5 p-4 text-white bg-green-500"
      >
        Send me an email!
      </a>
      <div className="rounded bg-gray-700 mt-10 w-full h-1"></div>
    </section>
  );
}
