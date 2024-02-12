import React, { useEffect } from "react";
import myimg from "./profile.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className=" min-h-screen h-screen text-white flex flex-col items-center bg-[rgba(0.13,0.13,0.13,1)] gap-y-10  md:flex-row-reverse font-serif justify-between pt-0 sm:pt-10"
      id="home"
    >
      <div
        className="w-auto h-96 p-5 md:mx-auto md:w-1/3 max-w-96"
        data-aos="zoom-in"
      >
        <img
          src={myimg}
          className="w-full h-full md:w-[400px] animate-wiggle  bg-cover pt-20 md:pt-0"
        />
      </div>
      <div className="md:mx-auto md:w-1/3 flex flex-col gap-9 text-center relative ">
        <h1
          className="font-bold text-3xl hover-type sm:text-5xl p-3 "
          data-aos="fade-right"
        >
          Front End React <span>Developer</span>
        </h1>
        <p className="font-normal text-xl p-3 " data-aos="fade-right">
          Hi i'm Harsh Pandey .A passionate frontend React Developer based in
          Delhi, India
        </p>
        <h1 className="text-[#f06d55] px-3">Tech Stack:</h1>
        <div
          className=" flex gap-5 mx-auto flex-wrap justify-center p-3"
          data-aos="flip-left"
        >
          <img
            src="https://www.w3.org/html/logo/downloads/HTML5_Badge.svg"
            className="w-10 h-10"
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png"
            className="w-10 h-10"
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            className="w-10 h-10"
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            className="w-10 h-10"
          ></img>
          <img
            src="https://www.svgrepo.com/show/452093/redux.svg"
            className="w-10 h-10"
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            className="w-10 h-10"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
