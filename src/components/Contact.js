import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-[#1f1f1f] text-white w-full">
    <div
      className="  flex flex-col justify-center text-center h-96 text-white gap-5 "
      id="contact"
      data-aos="zoom-in"
    >
      <h1
        className="font-serif text-3xl font-semibold sm:text-5xl hover-type"
        
      >
        STAY CONNECTED
      </h1>
      <div
        className="flex flex-col text-lg font-normal sm:text-xl"
       
      >
        <h1>New Delhi, India</h1>
        <h1>harsh_229165@flip.org</h1>
        <h1>(+91) 96232 28733</h1>
      </div>
    </div>
    </div>
  );
};

export default Contact;
