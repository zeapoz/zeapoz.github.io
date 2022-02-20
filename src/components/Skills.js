export default function Skills() {
  return (
    <section id="skills" className="mx-16 md:mx-32 lg:mx-48 xl:mx-64 mt-5">
      <h1 className="font-bold text-white text-center text-3xl">Skills</h1>
      <br></br>
      <br></br>
      <div className="flex">
        <div className="basis-1/3">
          <p>
            I love to learn new things and deepen my knowledge in that I already know! At the moment I'm studying Rust, really liking it so far!
          </p>
          <br></br>
          <p>
            I specialize in Python and as of lately a bit of web development, but I do enjoy a fair bit of back-end development as well.
          </p>
          <br></br>
          <p>
            My current languages of choice to tackle a problem are Python, Rust and JavaScript.
          </p>
        </div>
        <div className="grow mx-10">
          <h1 className="font-bold">Programming languages</h1>
          <ul>
            <il>
              Python
              <div className="w-full h-3 rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-full w-2/3"></div>
              </div>
            </il>
            <il>
              JavaScript
              <div className="w-full h-3 rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-full w-2/5"></div>
              </div>
            </il>
            <il>
              .NET
              <div className="rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-3 w-2/5"></div>
              </div>
            </il>
            <il>
              Rust
              <div className="rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-3 w-1/3"></div>
              </div>
            </il>
            <il>
              SQL
              <div className="rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-3 w-1/4"></div>
              </div>
            </il>
          </ul>
          <h1 className="font-bold mt-8">Frameworks & more</h1>
          <ul>
            <il>
              Pandas & NumPy
              <div className="w-full h-3 rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-full w-1/3"></div>
              </div>
            </il>
            <il>
              React
              <div className="w-full h-3 rounded-full bg-gray-700">
                <div className="rounded-full bg-blue-500 h-full w-1/5"></div>
              </div>
            </il>
          </ul>
        </div>
      </div>
      <div className="rounded bg-gray-700 mt-10 w-full h-1"></div>
    </section>
  );
}
