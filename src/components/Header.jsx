import Container from "../core/Container";
import React from "react";
// import Logo from "./Logo";
import NavLinksDesktop from "./NavLinksDesktop";
import NavLinksMobile from "./NavLinksMobile";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useMenu } from "../hooks/useMenu";
            // import logo from '../assets/icon.png';
import { Hamburger } from "lucide-react";


export default function Header() {
  const { openMenu } = useMenu();

  return (
    <React.Fragment>
      <header className="sticky top-0 left-0 z-10 w-full bg-primary px-14 py-0 lg:pb-6">
        <Container>
          <div className="flex items-center justify-between">
            {/* <Logo /> */}
            <div className="flex-shrink-0 px-2 pd-0 lg:hidden">
              <img src="/icon.png" className="w-30" />

            </div>
{/* <div className="flex-shrink-0 px-0 pt=9">
                <img className="w-50 object-contain" src={logo} />
              </div> */}

            {/* Show desktop nav only on large screens */}
            <div className="hidden lg:flex md:hidden">
              <NavLinksDesktop />
            </div>
            {/* Show hamburger menu on mobile & tablets */}
            {/* <Bars3BottomRightIcon
              onClick={openMenu}
              className="relative z-20 ml-auto size-8 cursor-pointer text-white md:flex lg:hidden"
            /> */}
            <button onClick={openMenu}
              className="relative z-20 ml-auto size-8 cursor-pointer text-white md:flex lg:hidden"
            ><Hamburger /> </button>
          </div>
        </Container>
      </header>
      <NavLinksMobile />
    </React.Fragment>
  );
}
