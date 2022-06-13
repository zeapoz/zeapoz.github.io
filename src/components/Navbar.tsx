import React, { useState } from "react";

export { Navbar };

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <nav className="sticky top-0 bg-gray-900 p-1 shadow-xl text-2xl z-10 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="md:hidden">
          <button onClick={toggleNav} className="transition hover:scale-105">
            <img src="https://img.icons8.com/material-outlined/56/969696/menu--v1.png" alt="Menu" />
          </button>
        </div>
        <div className="hidden md:visible w-full md:flex md:items-center md:justify-around md:flex-grow">
          <a href="/#about" className="hover:text-white transition hover:scale-105">About</a>
          <a href="/#skills" className="hover:text-white transition hover:scale-105">Skills</a>
          <a href="/#projects" className="hover:text-white transition hover:scale-105">Projects</a>
          <a href="/#contact" className="hover:text-white transition hover:scale-105">Contact</a>
        </div>
        <div className="flex items-center justify-end">
          <a href="https://www.linkedin.com/in/jonathan-a-57847421b/" className="transition hover:scale-105">
            <img src="https://img.icons8.com/ios-glyphs/56/969696/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.github.com/zeapoz" className="transition hover:scale-105">
            <img src="https://img.icons8.com/material-outlined/48/969696/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
      <div>
        {toggleMenu && <div className="flex flex-col md:hidden">
          <a href="/#about" className="hover:text-white">About</a>
          <a href="/#skills" className="hover:text-white">Skills</a>
          <a href="/#projects" className="hover:text-white">Projects</a>
          <a href="/#contact" className="hover:text-white">Contact</a>
        </div>}
      </div>
    </nav>
  );
}
