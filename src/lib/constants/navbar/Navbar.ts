type NavbarLinks = {
  name: string;
  href: string;
  startWith: string;
}[];

export const NAVBAR_LINKS: NavbarLinks = [
  { name: "Home", href: "/", startWith: "/" },
  { name: "Trainers", href: "/trainers", startWith: "/trainers" },
  { name: "Packages", href: "/packages", startWith: "/packages" },
  { name: "Contact", href: "/contact-us", startWith: "/contact-us" },
];
