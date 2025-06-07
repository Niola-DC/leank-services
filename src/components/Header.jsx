import { Mail, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Container from "../core/Container";
import { useEffect, useState, Fragment } from "react";
import { clsx } from "clsx";

const contact_details = [
  {
    icon: Phone,
    title: "hot line",
    text: "+234 123 456 7890",
  },
  {
    icon: Mail,
    title: "official email",
    text: "leanks@gmail.com",
  },
];

const nav_links = [
  { href: "home", text: "Home" },
  { href: "about", text: "About Us" },
  { href: "contact", text: "Contact Us" },
  { href: "services", text: "Our Services" },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    function setScrollValue() {
      setScrollY(window.scrollY);
      console.log(window.scrollY, pathname, hash);
    }

    window.addEventListener("scroll", setScrollValue);

    return () => window.removeEventListener("scroll", setScrollValue);
  }, [scrollY, pathname, hash]);

  return (
    <header
      className={clsx("fixed z-10 w-full", {
        "bg-primary": pathname === "/" && scrollY > 0,
      })}
    >
      <Container scrollId="hero">
        <div className="text-gray-200">
          <div className="flex items-center justify-between border-b border-gray-300/90 py-4">
            <div className="aspect-[3/1] h-10 overflow-hidden">
              <img
                src="/icon2.png"
                alt="icon"
                className="h-full w-full object-contain"
              />
            </div>

            <nav className="flex items-center gap-7">
              {contact_details.map(({ icon, text, title }) => {
                const Icon = icon;
                return (
                  <div
                    className="flex items-center gap-3"
                    key={`${title}-${text}`}
                  >
                    <Icon className="aspect-square w-4 text-cyan-400" />
                    <p className="flex flex-col *:leading-[1.3]">
                      <span className="text-sm font-medium">{text}</span>
                      <small className="text-xs font-light capitalize">
                        {title}
                      </small>
                    </p>
                  </div>
                );
              })}
            </nav>
          </div>
          <nav className="-mt-[.99px] flex justify-center space-x-2">
            {nav_links.map((link, idx) => {
              const notFirst = idx > 0;
              return (
                <Fragment key={link.href}>
                  {notFirst && (
                    <div className="h-3 w-0.5 self-center bg-gray-300" />
                  )}
                  <Link
                    to={`#${link.href}`}
                    className="border-t-2 border-transparent p-4 hover:border-sky-500 hover:bg-sky-500/30 hover:text-sky-500"
                  >
                    {link.text}
                  </Link>
                </Fragment>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
