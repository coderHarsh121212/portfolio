import React, { useState } from "react";
import { Github, Hamburger, LinkedIN } from "../icons/icons";
const Navbar = () => {
  const [showham, setshowham] = useState(false);
  return (
    <>
      <div className="portfolio-container text-white flex-col  gap-y-2 sm:justify-between sm:flex-row bg-transparent items-center  p-3 fixed hidden sm:flex z-40">
        <div className="flex gap-6">
          <a href="#" className="hover:bg-[#f06d55] rounded-full">
            <Github />
          </a>
          <a href="" className=" hover:bg-blue-600 rounded-full">
            <LinkedIN />
          </a>
        </div>
        <div className="flex gap-10">
          <a href="#home" className="navlinks">
            Home
          </a>
          <a href="#about" className="navlinks">
            About
          </a>
          <a href="#projects" className="navlinks">
            Projects
          </a>
          <a href="#contact" className="navlinks">
            Contact
          </a>
        </div>
      </div>
      <div
        onClick={() => setshowham(!showham)}
        className="absolute text-white sm:hidden hover:text-red-200 right-5 top-5"
      >
        <Hamburger />
      </div>
      {showham && (
        <div className="fixed text-white bg-orange-500 z-40 h-screen w-96 p-5 sm:hidden transition-all duration-500">
          <div>
            <div
              className="absolute left-15"
              onClick={() => setshowham(!showham)}
            >
              X
            </div>
            <div className="flex gap-2 justify-center">
              <a href="" className="hover:bg-red-500 rounded-md">
                <Github />
              </a>
              <a href="" className=" hover:bg-blue-600 ">
                <LinkedIN />
              </a>
            </div>
            <div className="flex gap-10 flex-col items-center mt-20">
              <a
                href="#home"
                className="navlinks hover:text-black hover:border-b-2 hover:border-black"
                onClick={() => setshowham(!showham)}
              >
                Home
              </a>
              <a
                href="#about"
                className="navlinks hover:text-black hover:border-b-2 hover:border-black"
                onClick={() => setshowham(!showham)}
              >
                About
              </a>
              <a
                href="#projects"
                className="navlinks hover:text-black hover:border-b-2 hover:border-black"
                onClick={() => setshowham(!showham)}
              >
                Project
              </a>
              <a
                href="#contact"
                className="navlinks hover:text-black hover:border-b-2 hover:border-black"
                onClick={() => setshowham(!showham)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
