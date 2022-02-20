export default function About() {
  return (
    <section id="about" className="mx-16 md:mx-32 lg:mx-48 xl:mx-64 mt-5">
      <h1 className="font-bold text-white title-font text-3xl">
        Hi, I'm Jonathan!
      </h1>
      <div className="flex mt-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum
          quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum,
          voluptas natus?
        </p>
      </div>
      <button className="font-bold rounded-full mt-5 p-4 text-white bg-green-500">
        Send me an email!
      </button>
      <div className="rounded bg-gray-700 mt-10 w-full h-1"></div>
    </section>
  );
}
