export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-900 p-1 shadow-xl text-2xl flex items-center justify-around">
      {[
        ["About", "/#about"],
        ["Skills", "/#skills"],
        ["Projects", "#projects"],
        ["Contact", "/#contact"],
        [<img src="https://img.icons8.com/ios-glyphs/56/969696/linkedin.png" alt="LinkedIn" />, "https://www.linkedin.com/in/jonathan-a-57847421b/"],
        [<img src="https://img.icons8.com/material-outlined/48/969696/github.png" alt="GitHub" />, "https://www.github.com/zeapoz"],
      ].map(([title, url]) => (
        <a href={url} className="hover:text-white">
          {title}
        </a>
      ))}
    </nav>
  );
}
