import React from "react";

function Header() {
  return (
    <>
      <header>
        <div className="headerArea w-full px-4 py-5 flex justify-between border-b-2 border-gray-400">
          <div className="logo">
            <img
              className="inline-block w-full"
              src="assets/img/logo/logo-test.png"
              alt=""
            />
          </div>
          <div className="menu flex items-center">
            <nav className="flex gap-4 mr-4 font-semibold uppercase text-base text-black">
              <a className="hover:text-blue-700" href={"/"}>
                Theory test
              </a>
              <a className="hover:text-blue-700" href={"/"}>
                Theory test
              </a>
              <a className="hover:text-blue-700" href={"/"}>
                Theory test
              </a>
            </nav>
            <div className="">
              <a
                className="font-semibold px-8 py-4 bg-blue-300 text-white hover:bg-blue-300
                hover:text-black border-2 border-transparent transition duration-500 rounded-md ml-2 uppercase"
                href=""
              >
                Sign In
              </a>
              <a
                className="font-semibold px-8 py-4 bg-transparent
                border-2 border-blue-300 hover:bg-blue-300 transition duration-500 rounded-md ml-2 uppercase"
                href={"/"}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
