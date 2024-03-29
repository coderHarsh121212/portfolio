import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const PortfolioProject = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-[rgba(0.13,0.13,0.13,1)]  text-white" id="projects">
      <div className="pt-24">
        <h1 className="font-serif text-6xl text-center hover-type">Projects</h1>
        <div className="portfolio-container h-full bg-black">
          <div
            className="w-full p-5 font-serif my-5 md:grid md:grid-cols-2 md:gap-x-10 md:items-center"
            data-aos="fade-right"
          >
            <div className="w-full md:1/2">
              <img
                src="https://www.cryptoryancy.com/wp-content/uploads/2020/12/load-image-2.jpeg"
                className="w-full"
                alt="1"
              ></img>
            </div>
            <div className="mt-2 md:w-4/5">
              <h1 className="font-medium text-2xl text-center">Crypto Wiki</h1>
              <p className="my-4">
                This is a Advance Crypto Responsive website.Rather than just
                Normal websites it has additional features like change in
                currency type,change in past-days Update on History Chart of A
                Particulkar Coin and it has all the current news and feeds about
                all cryptoCurrency.
              </p>
              <p>
                <div className="flex flex-wrap gap-3 items-center md:mb-3">
                  <span> Tech Used:</span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    className="w-8 h-8"
                  ></img>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    className="w-8 h-8"
                  ></img>
                  <img
                    src="https://www.chartjs.org/docs/latest/favicon.ico"
                    className="w-8 h-8"
                  ></img>
                </div>
              </p>
              <div className="flex gap-7 px-10 py-3  justify-center md:justify-start md:text-sm md:py-0">
                <a
                  className="btn-css md:p-5"
                  href="https://github.com/coderHarsh121212/Coin-dash.git"
                >
                  Source Code
                </a>
                <a
                  className="btn-css md:p-5"
                  href="https://cyrpto-dasher.netlify.app/"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div
            className="w-full p-5 font-serif my-5 md:grid md:grid-cols-2 md:gap-x-10 md:items-center  flex flex-col-reverse"
            data-aos="fade-right"
          >
            <div className="mt-2 md:w-4/5">
              <h1 className="font-medium text-2xl text-center">Blood Dev</h1>
              <p className="my-4">
                This is a website which is based on a real-life based problem.It
                has feature like to donate as well as to take blood groups
                easily just by personal calling on your behalf . It has a maps
                feature which basically tell about the nearest or the other
                blood banks or camps address.
              </p>
              <p>
                <div className="flex flex-wrap gap-3 items-center md:mb-3">
                  <span> Tech Used:</span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    className="w-8 h-8"
                  ></img>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    className="w-8 h-8"
                  ></img>
                  <img
                    src="https://swyger.agglomy.com/images-ee/press/square-logo-pink.svg"
                    className="w-8 h-8"
                  ></img>
                  <img
                    src="https://e7.pngegg.com/pngimages/172/480/png-clipart-google-maps-apple-maps-location-summer-jam-logo-sign.png"
                    className="w-8 h-8"
                  ></img>
                </div>
              </p>
              <div className="flex gap-7 px-10 py-3  justify-center md:justify-start md:text-sm md:py-0">
                <a
                  className="btn-css md:p-5"
                  href="https://github.com/coderHarsh121212/blood-bank.git"
                >
                  Source Code
                </a>
                <a
                  className="btn-css md:p-5"
                  href="https://bloodbank-cloud.netlify.app/"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="w-full md:1/2">
              <img
                src="https://wallpapercave.com/wp/wp7898131.jpg"
                className="w-full"
                alt="1"
              ></img>
            </div>
          </div>
          <div
            className="w-full p-5 font-serif my-5 md:grid md:grid-cols-2 md:gap-x-10 md:items-center flex flex-col"
            data-aos="fade-right"
          >
            <div className="w-full md:p-[1.5rem]">
              <img
                src="https://th.bing.com/th/id/OIP.dTjMc-Pb3pQvwrhU359jnwHaE8?rs=1&pid=ImgDetMain"
                className="w-full"
                alt="1"
              ></img>
            </div>
            <div className="mt-2 md:w-4/5 ">
              <h1 className="font-medium text-2xl text-center">
                Frontend Hints
              </h1>
              <p className="my-4">
                It is basically a eductaion-website which which not only gives
                you education or learning content .but also it has the blog
                section which contains the feedback of students of various
                colleges and it containes the roadMap of frontdev with a feature
                of links to be followed for study(Free OR Paid).In this website
                you can basically publish or also veiw different projects with
                source code and can Easily make a network(like teams ).
              </p>
              <p>
                <div className="flex flex-wrap gap-3 items-center md:mb-3">
                  <span> Tech Used:</span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    className="w-8 h-8"
                  ></img>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    className="w-8 h-8"
                  ></img>
                  <img
                    src="https://swyger.agglomy.com/images-ee/press/square-logo-pink.svg"
                    className="w-8 h-8"
                  ></img>
                  <img
                    src="https://i.pngimg.me/thumb/f/720/comseeklogo433994.jpg"
                    className="w-8 h-8"
                  ></img>
                </div>
              </p>
              <div className="flex gap-7 px-10 py-3  justify-center md:justify-start md:text-sm md:py-0">
                <a
                  className="btn-css md:p-5"
                  href="https://codesource.netlify.app/"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProject;
