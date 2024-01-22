import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white "
    >
      <div className="flex flex-col p-4 justify-center items-center mx-auto  ">
        <div className="pb-8">
          <p className="text-4xl font-bold  hover:border-b-4 rounded-r-lg rounded-l-lg duration-200 border-gray-500 flex justify-center">
            Contact
          </p>
          <p className="pt-8 text-6xl flex justify-center">Say Hello!</p>
          <p className="py-6">
            Submit the form below so I can get back to you as soon as possible
          </p>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-96 ">
          <div className="m-auto  ">
            <form
              action="https://getform.io/f/65f9a337-eaae-4c1c-ba79-bb0d9328ee3e"
              method="POST"
              className=" flex flex-col"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name here"
                className="p-2 m-auto bg-transparent border-b-2 rounded-md w-80 text-white focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email here"
                className="p-2 my-4 bg-transparent border-b-4 rounded-md text-white focus:outline-none"
              />

              <textarea
                name="message"
                rows="10"
                placeholder="Message"
                className="p-2 bg-transparent border-b-2 rounded-md text-white focus:outline-none"
              ></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-3  flex justify-center items-center rounded-md hover:scale-110 duration-300 ">
                {" "}
                Let's Talk
              </button>
            </form>
          </div>
          <div className="m-auto grid  grid-cols-1 ">
            <a
              href="https://www.linkedin.com/in/aniket-pratap-singh-28669b193"
              rel="noreferrer"
              target="_blank"
              className="border-4 hover:border-indigo-300 hover:scale-105 duration-300 px-8 py-4 text-4xl my-2 inline-block"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/createaniket"
              rel="noreferrer"
              target="_blank"
              className="border-4 px-8 py-4 text-4xl hover:border-indigo-300 hover:scale-105 duration-300 my-2 inline-block"
            >
              GITHUB
            </a>

            <p className="mt-9 text-2xl font-bold">Phone</p>
            <p className="m-2">+91 6392347125</p>

            <p className="mt-9 text-2xl font-bold">E-mail</p>
            <p>aniketpratapsingh7310@gmail.com</p>

            <p className="mt-9 text-2xl font-bold">ADDRESS</p>
            <p className="">NOIDA</p>
            <p className="">UTTAR PRADESH, INDIA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
