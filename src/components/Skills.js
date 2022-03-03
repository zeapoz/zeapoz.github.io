export default function Skills() {
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
            <li>
              Python
              <div className="w-full h-3 rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-full w-2/3"></div>
              </div>
            </li>
            <li>
              Rust
              <div className="rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-3 w-7/12"></div>
              </div>
            </li>
            <li>
              JavaScript
              <div className="w-full h-3 rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-full w-2/5"></div>
              </div>
            </li>
            <li>
              .NET
              <div className="rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-3 w-2/5"></div>
              </div>
            </li>
            <li>
              SQL
              <div className="rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-3 w-1/4"></div>
              </div>
            </li>
          </ul>
          <h1 className="font-bold mt-8">Frameworks & more</h1>
          <ul className="space-y-5 mb-5 xl:space-y-2 xl:mb-2">
            <li>
              Pandas & NumPy
              <div className="w-full h-3 rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-full w-1/3"></div>
              </div>
            </li>
            <li>
              React
              <div className="w-full h-3 rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-full w-1/5"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded bg-gray-700 mt-10 w-full h-1"></div>
    </section>
  );
}
