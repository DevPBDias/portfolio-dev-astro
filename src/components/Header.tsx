import { iconsHeader } from "../constants/iconsData";
import { navLinks } from "../constants/navData";

export function Header() {
  return (
    <header className="p-4">
      <section className="flex flex-row justify-between items-center">
        <nav className="flex flex-row justify-between items-center space-x-4">
          {navLinks.map((item) => (
            <a className="text-xl" key={item.id} href={`/${item.path}`}>
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-row justify-between items-center">
          {iconsHeader.map((item) => (
            <a className="w-6 h-6" key={item.id} href={`${item.url}`}>
              <img
                className="w-full h-full"
                src={item.icon.src}
                alt={item.url}
              />
            </a>
          ))}
        </div>
      </section>
    </header>
  );
}
