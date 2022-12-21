import React from "react";
import plantShop from "../assets/portfolio/Final-logo-plant-shop.png";
import inotebook from "../assets/portfolio/portfolio latpop and mobile.png";
import navbar from "../assets/portfolio/navbarresp.png";
import GamingProject from "../assets/portfolio/gamingProject.png";
import textUtils from "../assets/portfolio/TextUtils-latpop-and-mobile.png";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: plantShop,
      live:"https://aniket-plant-shop.netlify.app/",
      glink:"https://github.com/createaniket/Plant-Shop-Frontend"
    },
    {
      id: 2,
      src: GamingProject,
      live:"https://aniket-gaming-site.netlify.app/",
      glink:"https://github.com/createaniket/gaming-site-project"


    },
    {
      id: 3,
      src: navbar,
      live:"https://astonishing-basbousa-7fca4a.netlify.app/",
      glink:"https://github.com/createaniket/Responsive-Navbar-React"

    },
    {
      id: 4,
      src: textUtils,
      live:"https://aniket-text-utilities.netlify.app/",
      glink:"https://github.com/createaniket/TextUtils"

    },
    {
      id: 5,
      src: inotebook,
      live:"https://aniket-inotebook.netlify.app/",
      glink:"https://github.com/createaniket/INoteBook"

    }
  ];

  return (
    <div
      name="works"
      className="bg-gradient-to-b to-white from-slate-400 w-full text-black md:h-screen lg:h-auto "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-19 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Works
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , live , glink}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

                <a href={live} rel="noreferrer" target="_blank">


                <button className=" px-6 py-3 m-2 duration-200 hover:scale-105" >
                  See Live
                </button>
                </a>
              


                <a href={glink} rel="noreferrer" target="_blank">


                  <button className=" px-6 py-3 m-2 duration-200 hover:scale-105" >
                    Code
                  </button>
                  </a>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;