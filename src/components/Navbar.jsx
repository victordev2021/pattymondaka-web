export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ARTISTA</h1>

        <ul className="hidden md:flex gap-8 text-sm">
          <li>
            <a href="#music" className="hover:text-pink-400">
              Música
            </a>
          </li>
          <li>
            <a href="#videos" className="hover:text-pink-400">
              Videos
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-pink-400">
              Galería
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-400">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
