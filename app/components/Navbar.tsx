import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/meet-the-team", label: "Meet the Team" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-4 px-6 py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/tw_logo.jpg"
            alt="Tateswood Energy Company"
            width={220}
            height={44}
            priority
          />
        </Link>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-brand-purple transition-colors hover:text-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
