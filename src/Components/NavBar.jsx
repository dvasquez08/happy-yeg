import React, { useState } from "react";
import happyLogo from "../assets/happylogo.jpg";
import ContactForm from "./ContactForm";

// Props configured for the search function for the search bar
// Right below, the state variables use for controlling the mobile menu and contact form

function NavBar({ searchTerm, setSearchTerm }) {
  const [isContactFormOpen, setContactFormOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Event handlers to open and close the contact form

  const openContactForm = () => {
    setContactFormOpen(true);
  };

  const closeContactForm = () => {
    setContactFormOpen(false);
  };

  return (
    <>
      {/* Configuration for the styling of the nav bar itself */}

      <nav className="bg-white border-gray-200 dark:bg-sky-900 sticky top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={happyLogo} className="h-8" alt="Happy YEG Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Happy YEG
            </span>
          </a>

          {/* end of navbar section, the following below is the configuration of the items inside the navbar */}

          {/* Configuration for the desktop sized search bar, appears when screen size it atleast medium */}

          <div className="flex md:order-2">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>

              {/* Configuration for desktop search function that searches within the restaurant list */}

              <input
                type="text"
                id="search-mobile"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Beginning Mobile menu button configuration */}

            {/* Configuration for controlling the menu, contains the click event handler to open and close the mobile menu */}

            <button
              data-collapse-toggle="navbar-menu"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {/* The text in this span appears only for screen readers */}

              <span className="sr-only">Open main menu</span>

              {/* Section for hamburger icon for the mobile menu appearance*/}
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* End of mobile menu button configuration  */}
          </div>

          {/* Determines how the mobile menu is going to look when expanded */}

          <div
            className={`flex-col-reverse items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? "flex" : "hidden"
            }`}
            id="navbar-search"
          >
            {/* Beginning of mobile search configuration
            The md:hidden class hides this section for medium screens and anything larger */}

            <div className="relative mt-3 md:hidden">
              {/* Search icon configuration  */}

              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              {/* End of search icon configuration */}

              {/* Search bar functionality for searching items in the list of restaurants */}

              <input
                type="text"
                id="search-mobile"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {/* End of mobile search config */}

              {/* Menu buttons for desktop screen navbar menu */}
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-sky-800 md:dark:bg-sky-900 dark:border-sky-700">
              <li>
                <a
                  href="#top"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Location Select
                </a>
              </li>
              <li>
                <button
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={openContactForm} // Calls the function to open the contact form
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* End of desktop navbar menu list */}
        </div>

        {/* The placement of the contact form with its state configured when it's opened or closed
        This will appear in the bottom of the navbar when opened */}

        <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
      </nav>
    </>
  );
}

export default NavBar;
