import { clsx } from "clsx";
import { Link, useLocation } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";
import React from "react";
import { Mail, Phone } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import logo from '../assets/icon.png';


export default function NavLinksMobile() {
  const { isNavOpen, closeMenu } = useMenu();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const NAV_LINKS = [
    { href: "home", text: "Home" },
    { href: "about", text: "About Us" },
    { href: "contact", text: "Contact Us" },
  ];



  return (
    <>

      <figure
        className={clsx(
          "fixed inset-0 z-10 backdrop-blur-[3px] backdrop-brightness-75 md:hidden",
          { hidden: !isNavOpen }
        )}
        onClick={closeMenu}
      >
        <div
          className={clsx(
            "fixed inset-0 z-10 backdrop-blur-[3px] backdrop-brightness-75 md:hidden",
            { 'w-50 flex-shrink-0 px-8': isNavOpen }
          )}>
          {/* <img src="/icon.png" className="w-50" /> */}

        </div>
      </figure>

      <nav
        className={clsx(
          "transition-right fixed top-0 bottom-0 z-20 w-2/3 space-y-8 bg-primary px-3 py-6 duration-500 sm:w-1/2 lg:hidden",
          { "-right-[100dvw]": !isNavOpen, "right-0": isNavOpen }
        )}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={closeMenu}
        >
          &times;
        </button>
        <ul className="py-10 grid gap-3 text-center capitalize *:px-3 *:py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="text-white text-left">
              {link.href === "contact" || link.href === "about-us" ? (
              <Link
                to={`/${link.href}`}
                onClick={() => {
                  closeMenu();
                  window.scrollTo(0, 0);
                }}
              >
                {link.text}
              </Link>
              ) : isHomePage ? (
                <AnchorLink
                  href={`#${link.href}`}
                  offset={110}
                  onClick={closeMenu}
                >
                  {link.text}
                </AnchorLink>
              ) : (
                <Link to={`/#${link.href}`} onClick={closeMenu}>
                  {link.text}
              </Link>
             )}
            </li>

          ))}
        </ul>
        <div className="mt-10">
          <div className="max-w-7xl mx-auto px-2 pt-4">
            <div className="flex flex-col items-start pt-20 space-x-2">
              {/* Phone */}
              <div className="flex items-center text-sm py-2 mb-4">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <div>
                  <span className="text-white font-medium">+234 123 456 7890</span>
                  <div className="text-xs text-gray-300">Toll Free</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <div>
                  <span className="text-white font-medium">leanks@gmail.com</span>
                  <div className="text-xs text-gray-300">Official email</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
