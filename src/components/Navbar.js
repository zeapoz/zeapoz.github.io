export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-900 p-1 shadow-md text-2xl flex items-center justify-around">
      {[
        ["About", "/#about"],
        ["Skills", "/#skills"],
        ["Projects", "#projects"],
        ["Contact", "/#contact"],
      ].map(([title, url]) => (
        <a href={url} className="hover:text-white">
          {title}
        </a>
      ))}
    </nav>
  );
}
