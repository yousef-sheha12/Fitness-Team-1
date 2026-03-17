import { NAVBAR_LINKS } from "@/lib/constants/navbar/Navbar";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="max-w-360 mx-auto px-10 py-5 flex items-center justify-between">
      <Logo />
      <nav>
        <ul className="flex space-x-6">
          {NAVBAR_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? window.location.pathname === "/"
                : window.location.pathname.startsWith(link.startWith);

            return (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`text-white hover:text-primary ${isActive ? "text-primary" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
