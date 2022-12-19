import React from "react";
import plantShop from "../assets/portfolio/Final-logo-plant-shop.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import GamingProject from "../assets/portfolio/gamingProject.png";
import textUtils from "../assets/portfolio/TextUtils-latpop-and-mobile.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: plantShop,
      link:"https://aniket-plant-shop.netlify.app/",
      glink:"https://github.com/createaniket/Plant-Shop-Frontend"
    },
    {
      id: 2,
      src: GamingProject,
      link:"https://aniket-gaming-site.netlify.app/",
      glink:"https://github.com/createaniket/gaming-site-project"


    },
    {
      id: 3,
      src: navbar,
      link:"https://aniket-plant-shop.netlify.app/",
      glink:"https://github.com/createaniket/gaming-site-project"

    },
    {
      id: 4,
      src: textUtils,
      link:"https://aniket-text-utilities.netlify.app/",
      glink:"https://github.com/createaniket/TextUtils"

    },
    {
      id: 5,
      src: installNode,
      link:"https://aniket-plant-shop.netlify.app/",
      glink:"https://github.com/createaniket/gaming-site-project"

    },
    {
      id: 6,
      src: reactWeather,
      llink:"https://aniket-plant-shop.netlify.app/",
      glink:"https://github.com/createaniket/gaming-site-project"

    },
  ];

  return (
    <div
      name="works"
      className="bg-gradient-to-b to-white from-slate-400 w-full text-white md:h-screen lg:h-auto "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-19 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Works
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , llink , glink}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

                <a href={llink} rel="noreferrer" target="_blank">


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