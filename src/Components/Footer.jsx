import React from "react";

function Footer() {
  return (
    <>
      <footer class="bg-white rounded-lg shadow m-4 dark:bg-sky-900">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
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
