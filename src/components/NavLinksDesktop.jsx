// import { clsx } from "clsx";
// import { Link, useLocation } from "react-router-dom";
// import { useMenu } from "../hooks/useMenu";
// import React from "react";
// import { Mail, Phone } from "lucide-react";
// import FlexBox from "../core/FlexBox";
// import AnchorLink from "react-anchor-link-smooth-scroll";


// export default function NavLinksDesktop() {
//   const { currentPage, setCurrentPage } = useMenu();
//   const location = useLocation();

//   const isHomePage = location.pathname === "/";

//   const NAV_LINKS = [
//     { href: "home", text: "Home" },
//     { href: "about", text: "About Us" },
//     { href: "contact", text: "Contact Us" },
//     // { href: "services", text: "Our Services" },

//   ];

//   return (
//     <div className="w-full">
//       {/* Top Bar with Contact Info */}
//       <header className="border border-[#1a1b3a] border-b-blue-300 mb-3 flex flex-row gap-16" >
//         <div className="border-b border-indigo-700/30 px-10">
//           <div className=" mx-auto px-2 ">
           
//           </div>
//           <img src="/icon.png" alt="" className="size-20 gap" />
//         </div>
//         {/* Contact Info */}
//         <FlexBox className="ml-40 pt-6 pb-2" gap="medium">
//           <div className="flex flex-row justify-end items-end mx-20 gap-20 px-20 pt-2">
//             <div className="flex items-center text-sm">
//               <Phone className="w-4 h-4 mr-2 text-cyan-400" />
//               <div>
//                 <span className="text-white font-medium">+234 123 456 7890</span>
//                 <div className="text-xs text-gray-300">Toll Free</div>
//               </div>
//             </div>

//             <div className="flex items-center text-sm ml-18">
//               <Mail className="w-4 h-4 mr-2 text-cyan-400" />
//               <div>
//                 <span className="text-white font-medium">leanks@gmail.com</span>
//                 <div className="text-xs text-gray-300">Official email</div>
//               </div>
//             </div>
//           </div>
//         </FlexBox>
//       </header>


//       {/* Main Navigation Bar */}
//       <div className="w-full py-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">



//             {/* Navigation Links - Center */}
//             <nav className="absolute left-1/2 transform -translate-x-1/2">
//               <div className="flex gap-10 capitalize text-white md:text-sm lg:text-base">
//                 {NAV_LINKS.map((link) => {
//                   const linkClass = clsx(
//                     "after:bg-primary after:transition-width relative after:absolute after:bottom-0 after:left-0 after:hidden after:h-1 after:rounded after:duration-300 hover:after:w-full md:after:inline-block",
//                     {
//                       "after:w-0": currentPage !== link.href,
//                       "after:w-full": currentPage === link.href,
//                     }
//                   );

//                   return link.href === "contact" || link.href === "about"  ?(
//                     <Link
//                       // onClick={setCurrentPage.bind(null, link.href)}
//                       className={linkClass}
//                       key={link.href}
//                       to={`/${link.href}`}
//                       onClick={() => {
//                         setCurrentPage.bind(null, link.href);
//                         window.scrollTo(0, 0);
//                       }}
//                     >
//                       {link.text}
//                     </Link>

//                   ) : isHomePage ? (
//                     <AnchorLink
//                       // className={linkClass}
//                       className={linkClass}
//                       key={link.href}
//                       href={`#${link.href}`}
//                       offset={100}
//                       onClick={setCurrentPage.bind(null, link.href)}
//                     >
//                       {link.text}
//                     </AnchorLink>
//                   ) : (
//                     <Link
//                       // onClick={setCurrentPage.bind(null, link.href)}
//                       className={linkClass}
//                       onClick={() => {
//                         setCurrentPage.bind(null, link.href);
//                         window.scrollTo(0, 0);
//                       }}
//                       key={link.href}
//                       to={`/#${link.href}`}

//                     >
//                       {link.text}
//                     </Link>
//                   );
//                 })}
//               </div>
//             </nav>

//             {/* Contact Info - Right */}
//             <div className="flex items-center space-x-6">

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { clsx } from "clsx";
import { Link, useLocation } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";
import React, { Fragment } from "react";
import { Mail, Phone } from "lucide-react";
import Container from "../core/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";

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

const NAV_LINKS = [
  { href: "home", text: "Home" },
  { href: "about", text: "About Us" },
  { href: "contact", text: "Contact Us" },
  // { href: "services", text: "Our Services" },
];

export default function NavLinksDesktop() {
  const { currentPage, setCurrentPage } = useMenu();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed z-10 w-full">
      <Container scrollId="hero">
        <div className="text-gray-200">
          {/* Top section with logo and contact info */}
          <div className="flex items-center justify-between border-b border-gray-300/90 py-4">
            <div className="aspect-[3/1] h-10 overflow-hidden">
              <img
                src="/icon.png"
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

          {/* Navigation links section */}
          <nav className="-mt-[.99px] flex justify-center space-x-2">
            {NAV_LINKS.map((link, idx) => {
              const notFirst = idx > 0;
              const linkClass = clsx(
                "border-t-2 p-4 hover:border-sky-500 hover:bg-sky-500/30 hover:text-sky-500",
                {
                  "border-sky-500 bg-sky-500/30 text-sky-500": currentPage === link.href,
                  "border-transparent": currentPage !== link.href,
                }
              );

              return (
                <Fragment key={link.href}>
                  {notFirst && (
                    <div className="h-3 w-0.5 self-center bg-gray-300" />
                  )}
                  
                  {link.href === "contact" || link.href === "about" ? (
                    <Link
                      className={linkClass}
                      to={`/${link.href}`}
                      onClick={() => {
                        setCurrentPage(link.href);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {link.text}
                    </Link>
                  ) : isHomePage ? (
                    <AnchorLink
                      className={linkClass}
                      href={`#${link.href}`}
                      offset={100}
                      onClick={() => setCurrentPage(link.href)}
                    >
                      {link.text}
                    </AnchorLink>
                  ) : (
                    <Link
                      className={linkClass}
                      to={`/#${link.href}`}
                      onClick={() => {
                        setCurrentPage(link.href);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {link.text}
                    </Link>
                  )}
                </Fragment>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}