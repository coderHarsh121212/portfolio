import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="bg-[#1f1f1f]  text-white portfolio-container flex flex-col   font-serif min-h-96 md:items-center  md:pt-0 md:flex-row"
      id="about"
    >
      <div className="flex gap-y-5 flex-col " data-aos="fade-right">
        <div className="font-semibold text-5xl sm:text-6xl text-center md:text-left hover-type pt-10">
          About Me
        </div>
        <div className=" text-lg">
          <p>
            I am extremely proficient in Front-End Development using HTML5,
            Cascade Style Sheets (CSS3), Tailwind Css, Advance Javascript &
            React.Js And apart from Front-End, I have Basic Knowledge of
            DSA(Data Structures and Algorithms). I also have Knowledge of using
            various AI tools for coding(clean and Fast), and continuously engage
            in trying to extend my skills with new technology.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-3 md:w-1/2 items-center ">
        <button className="btn-css">
          <a href="#">My Resume</a>
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
