// import { Mail, Phone } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import Container from "../core/Container";
// import { useEffect, useState, Fragment } from "react";
// import { clsx } from "clsx";

// const contact_details = [
//   {
//     icon: Phone,
//     title: "hot line",
//     text: "+234 123 456 7890",
//   },
//   {
//     icon: Mail,
//     title: "official email",
//     text: "leanks@gmail.com",
//   },
// ];

// const nav_links = [
//   { href: "home", text: "Home" },
//   { href: "about", text: "About Us" },
//   { href: "contact", text: "Contact Us" },
//   // { href: "services", text: "Our Services" },
// ];

// export default function Header() {
//   const [scrollY, setScrollY] = useState(0);
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     function setScrollValue() {
//       setScrollY(window.scrollY);
//       console.log(window.scrollY, pathname, hash);
//     }

//     window.addEventListener("scroll", setScrollValue);

//     return () => window.removeEventListener("scroll", setScrollValue);
//   }, [scrollY, pathname, hash]);

//   return (
//     <header
//       className={clsx("fixed z-10 w-full mb-20", {
//         "bg-primary": pathname === "/" && scrollY > 0,
//       })}
//     >
//       <Container scrollId="hero">
//         <div className="text-gray-200">
//           <div className="flex items-center justify-between border-b border-gray-300/90 py-4 px-6">
//             <div className="aspect-[3/1] h-10 overflow-hidden">
//               <img
//                 src="/icon2.png"
//                 alt="icon"
//                 className="h-full w-full object-contain"
//               />
//             </div>

//             <nav className="flex items-center gap-7 pr-4">
//               {contact_details.map(({ icon, text, title }) => {
//                 const Icon = icon;
//                 return (
//                   <div
//                     className="flex items-center gap-3"
//                     key={`${title}-${text}`}
//                   >
//                     <Icon className="aspect-square w-4 text-cyan-400" />
//                     <p className="flex flex-col *:leading-[1.3]">
//                       <span className="text-sm font-medium">{text}</span>
//                       <small className="text-xs font-light capitalize">
//                         {title}
//                       </small>
//                     </p>
//                   </div>
//                 );
//               })}
//             </nav>
//           </div>
//           <nav className="-mt-[.99px] flex justify-center space-x-2">
//             {nav_links.map((link, idx) => {
//               const notFirst = idx > 0;
//               return (
//                 <Fragment key={link.href}>
//                   {notFirst && (
//                     <div className="h-3 w-0.5 self-center bg-gray-300" />
//                   )}
//                   <Link
//                     to={`${link.href}`}
//                     className="border-t-2 border-transparent p-4 hover:border-sky-500 hover:bg-sky-500/30 hover:text-sky-500"
//                   >
//                     {link.text}
//                   </Link>
//                 </Fragment>
//               );
//             })}
//           </nav>
//         </div>
//       </Container>
//     </header>
//   );
// }


import { Mail, Phone, Menu, X } from "lucide-react";
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
  // { href: "services", text: "Our Services" },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding header
      }

      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={clsx(
        "fixed z-50 w-full transition-transform duration-300 ease-in-out",
        {
          "bg-primary": pathname === "/" && scrollY > 0,
          "bg-primary/95": pathname !== "/",
          "-translate-y-full": !isVisible,
          "translate-y-0": isVisible,
        }
      )}
    >
      <Container scrollId="hero">
        <div className="text-gray-200">
          {/* Desktop Header */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between border-b border-gray-300/90 py-4 px-6">
              <div className="aspect-[3/1] h-10 overflow-hidden">
                <img
                  src="/icon2.png"
                  alt="icon"
                  className="h-full w-full object-contain"
                />
              </div>

              <nav className="flex items-center gap-7 pr-4">
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
                      to={`${link.href}`}
                      className="border-t-2 border-transparent p-4 hover:border-sky-500 hover:bg-sky-500/30 hover:text-sky-500 transition-colors duration-200"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}>
                      {link.text}
                    </Link>
                  </Fragment>
                );
              })}
            </nav>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between py-4 px-4">
              <div className="aspect-[3/1] h-8 overflow-hidden">
                <img
                  src="/icon2.png"
                  alt="icon"
                  className="h-full w-full object-contain"
                />
              </div>

              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md hover:bg-gray-700/50 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-200" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-200" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out",
                {
                  "max-h-screen opacity-100": isMobileMenuOpen,
                  "max-h-0 opacity-0": !isMobileMenuOpen,
                }
              )}
            >
              <div className="border-t border-gray-300/30 bg-primary/95 backdrop-blur-sm">
                {/* Mobile Contact Info */}
                <div className="px-4 py-4 border-b border-gray-300/30">
                  <div className="space-y-3">
                    {contact_details.map(({ icon, text, title }) => {
                      const Icon = icon;
                      return (
                        <div
                          className="flex items-center gap-3"
                          key={`mobile-${title}-${text}`}
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
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="px-4 py-2">
                  {nav_links.map((link) => (
                    <Link
                      key={`mobile-${link.href}`}
                      to={`${link.href}`}
                      className="block py-3 px-2 text-gray-200 hover:text-sky-500 hover:bg-sky-500/10 rounded-md transition-colors duration-200"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo(0, 0);

                      }}
                    >
                      {link.text}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}