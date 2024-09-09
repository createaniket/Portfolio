import React from "react";

const About = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },

    {
      id: 3,
      name: "TAILWIND CSS",
    },
    {
      id: 4,
      name: "JAVASCRIPT",
    },
    { id: 5, name: "NODE" },
    {
      id: 6,
      name: "MONGODB",
    },
    {
      id: 7,
      name: "REST API",
    },
    {
      id: 8,
      name: "REACT",
    },
    {
      id: 9,
      name: "REDUX",
    },
    {
      id: 10,
      name: "GIT",
    },
    {
      id: 11,
      name: "AZURE",
    },
    {
      id: 12,
      name: "AWS",
    },
    {
      id: 14,
      name: "WORDPRESS",
    },
    {
      id: 14,
      name: "SHOPIFY",
    },
    {
      id: 15,
      name: "HOSTINGER",
    },
  ];
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b  from-white to-slate-400 text-black lg:mt-10 lg:pt-10 "
    >
      <div className="max-w-screen-lg  p-4 mx-auto w-full h-full">
        <div className="pb-8 flex justify-center">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:p-5">
          <div className="fleft m-auto">
            <p>
              Welcome to my portfolio! I'm Aniket Pratap Singh, a dedicated
              software developer skilled in the MERN stack (MongoDB, Express.js,
              React, Node.js), building dynamic web applications. I'm also
              proficient in React Native, creating high-performance mobile apps
              for both iOS and Android. With hands-on experience in industrial
              projects, I apply my skills to solve real-world challenges and
              deliver impactful solutions. Additionally, I'm adept at WordPress
              and Shopify, allowing me to design, customize, and optimize
              websites and e-commerce stores. My passion for learning keeps me
              updated and drives success in every project.{" "}
            </p>

            {/* <p>I will love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me.</p> */}
          </div>

          <div className="grid  grid-cols-2 lg:grid-cols-3 gap-3 mx-auto mt-8  ">
            {skills.map(({ id, name }) => (
              <div
                key={id}
                className="bg-zinc-300 rounded-md   flex justify-center p-3"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
