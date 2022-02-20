export default function Skills() {
  return (
    <section id="skills" className="m-5">
      <h1 className="font-bold text-white text-center text-3xl">Skills</h1>
      <br></br>
      <p>I always love to learn new things and improve those I already know!</p>
      <br></br>
      <div className="mx-10">
        <h1 className="font-bold">Programming languages</h1>
        <ul>
          <il>
            Python
            <div className="w-full h-3 rounded-full bg-gray-700">
              <div className="rounded-full bg-blue-500 h-full w-3/5"></div>
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
      <div className="rounded bg-gray-700 mt-10 w-full h-1"></div>
    </section>
  );
}
