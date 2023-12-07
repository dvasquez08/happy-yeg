import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-sky-900">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="https://davtek.ca"
              target="_blank"
              className="hover:underline"
            >
              Davtek
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
