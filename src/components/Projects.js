export default function Projects() {
  return (
    <section id="projects" className="mx-16 md:mx-32 lg:mx-48 xl:mx-64 mt-5">
      <h1 className="font-bold text-center text-3xl text-white mb-5">Projects</h1>
      <div className="flex items-center justify-around">
        <div className="basis-2/5">
          <a href="https://github.com/zeapoz/chip8">
            <img src="https://img.icons8.com/ios-filled/24/969696/link--v1.png" className="inline" />
            <h1 className="inline font-bold text-xl"> CHIP-8 Emulator</h1>
          </a>
          <p>
            A fully functional emulator for the{" "}
            <a href="https://en.wikipedia.org/wiki/CHIP-8" className="font-bold">
              CHIP-8 Virtual Machine
            </a>
            , written in Rust.
          </p>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.49stpaSyfrQu7D4HGVpCbwHaFj%26pid%3DApi&f=1">
          </img>
        </div>
        <div className="basis-2/5">
          <a href="https://zeapoz.github.io/">
            <img src="https://img.icons8.com/ios-filled/24/969696/link--v1.png" className="inline" />
            <h1 className="inline font-bold text-xl"> 2048 Clone</h1>
          </a>
          <p>
            A clone of the popular game{" "}
            <a href="https://en.wikipedia.org/wiki/2048_(video_game)" className="font-bold">
              2048
            </a>
            , implemented with standard JavaScript.
          </p>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.49stpaSyfrQu7D4HGVpCbwHaFj%26pid%3DApi&f=1">
          </img>
        </div>
      </div>
      <div className="rounded bg-gray-700 mt-10 w-full h-1"></div>
    </section>
  );
}
