export default function Projects() {
  return (
    <section id="projects" className="mx-16 md:mx-32 lg:mx-48 xl:mx-64 mt-5">
      <h1 className="font-bold text-center text-3xl text-white mb-5">
        Projects
      </h1>
      <div className="flex justify-around flex-col xl:flex-row">
        <div className="basis-2/5">
          <a
            href="https://github.com/zeapoz/chip8"
            className="hover:text-white"
          >
            <img
              src="https://img.icons8.com/ios-filled/24/969696/link--v1.png"
              className="inline"
            />
            <h1 className="inline font-bold text-xl"> CHIP-8 Emulator</h1>
          </a>
          <img
            src="https://i.ytimg.com/vi/yRBqQalUeVg/maxresdefault.jpg"
            alt="CHIP-8 emulator running Breakout"
            className="my-3 rounded-md w-full h-64 object-cover object-top"
          ></img>
          <p>
            A fully functional emulator for the{" "}
            <a
              href="https://en.wikipedia.org/wiki/CHIP-8"
              className="hover:text-white font-bold"
            >
              CHIP-8 Virtual Machine
            </a>
            , written in Rust.
          </p>
        </div>
        <div className="basis-2/5">
          <a
            href="https://zeapoz.github.io/2048-javascript"
            className="hover:text-white"
          >
            <img
              src="https://img.icons8.com/ios-filled/24/969696/link--v1.png"
              className="inline"
            />
            <h1 className="inline font-bold text-xl"> 2048 Clone</h1>
          </a>
          <img
            src="https://media.salon.com/2014/04/2048-image.png"
            alt="A clone of the game 2048"
            className="my-3 rounded-md w-full h-64 object-cover object-top"
          ></img>
          <p>
            A clone of the popular game{" "}
            <a
              href="https://en.wikipedia.org/wiki/2048_(video_game)"
              className="hover:text-white font-bold"
            >
              2048
            </a>
            , implemented with standard JavaScript.
          </p>
        </div>
      </div>
      <div className="rounded bg-gray-700 mt-10 w-full h-1"></div>
    </section>
  );
}
