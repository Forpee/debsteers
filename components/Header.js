import { Transition } from "@headlessui/react";
import { useState, useRef } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  return (
    <div ref={navRef} className="w-screen nav z-50 relative ">
      <div className="absolute bg-yellow-400 w-screen h-2 right-0 left-0 bottom-0 "></div>
      <nav className="bg-black text-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-32">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a>
                    <img className="w-60" src="logo.webp" alt="Logo" />
                  </a>
                </Link>
              </div>
              <div className="hidden lg:block ">
                <div className="ml-10 flex items-baseline text-black space-x-4">
                  <a
                    href="/"
                    className=" hover:bg-yellow-400 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    HOME
                  </a>

                  <a
                    href="/"
                    className=" hover:bg-yellow-400 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    MENU
                  </a>

                  <a
                    href="/"
                    className=" hover:bg-yellow-400 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    DOWNLOAD MENU
                  </a>

                  <a
                    href="tel:(258)855585551"
                    className="hover:bg-yellow-400 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    CALL US (258) 85 558 5551
                  </a>
                  <a
                    href="/"
                    className=" hover:bg-white  text-yellow-400 px-3 py-2 w-44 rounded-md text-xs font-medium"
                  >
                    <LocationOnIcon /> AV. MARGINAL, NO 30, BAIA MALL, G73 & 74
                  </a>
                </div>
                
                <div className=' absolute top-1/2 transform  -translate-y-1/2 right-32 '>
                  <a
                    href="/"
                    className=" hover:bg-yellow-400 bg-purple-900 text-white px-3 py-2 rounded-md text-xs font-medium"
                  >
                    GO TO STEERS
                  </a>
                </div>
              </div>
            </div>
            <div className="mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="hidden h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="project-principles"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  HOME
                </a>

                <a
                  href="gallery"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  MENU
                </a>

                <a
                  href="cv"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  DOWNLOAD MENU
                </a>

                <a
                  href="tel:(258)855585551"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  CALL US (258) 85 558 5551
                </a>
                <a
                  href="about"
                  className="text-gray-300 hover:bg-purple-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  GO TO STEERS
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
