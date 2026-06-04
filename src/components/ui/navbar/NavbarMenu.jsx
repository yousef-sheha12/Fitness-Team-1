import { Link } from "react-router-dom";
import { NAVBAR_LINKS } from "@/lib/constants/navbar/navbar.constants";

export default function NavbarMenu({ pathname, isMobile = false }) {
  return (
    <nav>
      <ul className={`flex ${isMobile ? "flex-col gap-4 items-start w-full" : "items-center gap-2"}`}>
        {NAVBAR_LINKS.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.startWith);

          return (
            <li key={link.name} className={isMobile ? "w-full" : ""}>
              <Link
                className={`type-body-m weight-semibold rounded-lg px-4 py-2 transition-colors block ${isMobile ? "w-full" : ""} ${
                  isActive
                    ? "bg-[#2a1517] text-cta-primary"
                    : "text-text-primary hover:text-cta-primary"
                }`}
                to={link.href}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
