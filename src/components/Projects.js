export default function Projects() {
  return (
    <section id="projects" className="m-5">
      <h1 className="font-bold text-center text-3xl text-white">Projects</h1>
      <div>
        <h1 className="font-bold text-xl">CHIP-8 Emulator</h1>
        <p>
          A fully functional emulator for the{" "}
          <a href="https://en.wikipedia.org/wiki/CHIP-8" className="font-bold">
            CHIP-8 Virtual Machine
          </a>
          , written in Rust.
        </p>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.49stpaSyfrQu7D4HGVpCbwHaFj%26pid%3DApi&f=1"></img>
      </div>
      <div className="rounded bg-gray-700 mt-10 w-full h-1"></div>
    </section>
  );
}
