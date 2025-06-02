import { clsx } from "clsx";
import { Link, useLocation } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";
import React from "react";
import { Mail, Phone } from "lucide-react";
import FlexBox from "../core/FlexBox";
import AnchorLink from "react-anchor-link-smooth-scroll";


export default function NavLinksDesktop() {
  const { currentPage, setCurrentPage } = useMenu();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const NAV_LINKS = [
    { href: "home", text: "Home" },
    { href: "about", text: "About Us" },
    { href: "contact", text: "Contact Us" },
    { href: "services", text: "Our Services" },

  ];

  return (
    <div className="w-full">
      {/* Top Bar with Contact Info */}
      <header className="border border-[#1a1b3a] border-b-blue-300 mb-3 flex flex-row gap-16" >
        <div className="border-b border-indigo-700/30 px-10">
          <div className=" mx-auto px-2 ">
            {/* <div className="flex"> */}

            {/* Logo */}
            {/* <div className="flex-shrink-0 px-2 pd-0"> */}
              {/* <img src="/icon.png" className="w-35" /> */}

            {/* </div> */}
            {/* </div> */}
          </div>
          <img src="/icon.png" alt="" className="size-20 gap" />
        </div>
        {/* Contact Info */}
        <FlexBox className="ml-40 pt-6 pb-2" gap="medium">
          <div className="flex flex-row justify-end items-end mx-20 gap-20 px-20 pt-2">
            <div className="flex items-center text-sm">
              <Phone className="w-4 h-4 mr-2 text-cyan-400" />
              <div>
                <span className="text-white font-medium">+234 123 456 7890</span>
                <div className="text-xs text-gray-300">Toll Free</div>
              </div>
            </div>

            <div className="flex items-center text-sm ml-18">
              <Mail className="w-4 h-4 mr-2 text-cyan-400" />
              <div>
                <span className="text-white font-medium">leanks@gmail.com</span>
                <div className="text-xs text-gray-300">Official email</div>
              </div>
            </div>
          </div>
        </FlexBox>
      </header>


      {/* Main Navigation Bar */}
      <div className="w-full py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">



            {/* Navigation Links - Center */}
            <nav className="absolute left-1/2 transform -translate-x-1/2">
              <div className="flex gap-10 capitalize text-white md:text-sm lg:text-base">
                {NAV_LINKS.map((link) => {
                  const linkClass = clsx(
                    "after:bg-primary after:transition-width relative after:absolute after:bottom-0 after:left-0 after:hidden after:h-1 after:rounded after:duration-300 hover:after:w-full md:after:inline-block",
                    {
                      "after:w-0": currentPage !== link.href,
                      "after:w-full": currentPage === link.href,
                    }
                  );

                  return link.href === "contact" || link.href === "about"? (
          <Link
            // onClick={setCurrentPage.bind(null, link.href)}
            className={linkClass}
            key={link.href}
            to={`/${link.href}`}
            onClick={() => {
              setCurrentPage.bind(null, link.href);
              window.scrollTo(0, 0);
            }}
          >
            {link.text}
          </Link>
        ) : isHomePage ? (
          <AnchorLink
            // className={linkClass}
            className={linkClass}
            key={link.href}
            href={`#${link.href}`}
            offset={100}
            onClick={setCurrentPage.bind(null, link.href)}
          >
            {link.text}
          </AnchorLink>
        ) : (
          <Link
            // onClick={setCurrentPage.bind(null, link.href)}
            className={linkClass}
            onClick={() => {
              setCurrentPage.bind(null, link.href);
              window.scrollTo(0, 0);
            }}
            key={link.href}
            to={`/#${link.href}`}

          >
            {link.text}
          </Link>
        );
      })}
              </div>
            </nav>

            {/* Contact Info - Right */}
            <div className="flex items-center space-x-6">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}