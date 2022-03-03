export default function Footer() {
  return (
    <footer className="py-10 bg-gray-900">
      <div className="flex justify-evenly">
        <div>
          <h1 className="font-bold">Page</h1>
          <a href="/#about" className="hover:text-white">
            Home
          </a>
          <br></br>
          <a href="/#skills" className="hover:text-white">
            Skills
          </a>
          <br></br>
          <a href="/#projects" className="hover:text-white">
            Projects
          </a>
        </div>
        <div>
          <h1 className="font-bold">Opportunities</h1>
          <p>I'm currently open to internships!</p>
          <p>Please contact me on LinkedIn</p>
          <p>or by email if you are interested.</p>
        </div>
        <div>
          <h1 className="font-bold">Connect with me</h1>
          <a
            href="https://www.linkedin.com/in/jonathan-a-57847421b/"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <br></br>
          <a href="https://www.github.com/zeapoz/" className="hover:text-white">
            GitHub
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded bg-gray-700 my-10 w-1/3 h-1"></div>
      </div>
      <p className="text-center">©2022 Jonathan Andersson</p>
    </footer>
  );
}
