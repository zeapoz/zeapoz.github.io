import React from "react";

export { Navbar };

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-gray-900 p-1 shadow-xl text-2xl flex items-center justify-around z-10">
      <a href="/#about" className="hover:text-white transition hover:scale-105">About</a>
      <a href="/#skills" className="hover:text-white transition hover:scale-105">Skills</a>
      <a href="/#projects" className="hover:text-white transition hover:scale-105">Projects</a>
      <a href="https://www.linkedin.com/in/jonathan-a-57847421b/" className="transition hover:scale-105">
        <img src="https://img.icons8.com/ios-glyphs/56/969696/linkedin.png" alt="LinkedIn" />
      </a>
      <a href="https://www.github.com/zeapoz" className="transition hover:scale-105">
        <img src="https://img.icons8.com/material-outlined/48/969696/github.png" alt="GitHub" />
      </a>
    </nav>
  );
}
