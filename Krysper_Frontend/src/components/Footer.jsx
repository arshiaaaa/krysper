import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div
    className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer pt-32"
    style={{
      background: "rgb(5,10,48)",
      background:
        "linear-gradient(90deg, rgba(5,10,48,1) 0%, rgba(60,5,65,1) 100%)",
    }}
  >
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-64" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href="https://github.com/arshiaaaa">
          <p
            className="text-white text-center mx-1 lg:mx-4 p-2 cursor-pointer border-2 border-transparent text-md lg:text-xl hover:border-white rounded-full lg:hover:mb-4"
            style={{ transition: "0.3s ease" }}
          >
            GitHub
          </p>
        </a>
        <a href="https://www.linkedin.com/in/arshiasandhu/">
          <p
            className="text-white text-center mx-1 lg:mx-4 p-2 cursor-pointer border-2 border-transparent text-md lg:text-xl hover:border-white rounded-full lg:hover:mb-4"
            style={{ transition: "0.3s ease" }}
          >
            LinkedIn
          </p>
        </a>
        <a href="https://www.instagram.com/arshiaaa._._/">
          <p
            className="text-white text-center mx-1 lg:mx-4 p-2 cursor-pointer border-2 border-transparent text-md lg:text-xl hover:border-white rounded-full lg:hover:mb-4"
            style={{ transition: "0.3s ease" }}
          >
            Instagram
          </p>
        </a>
        <a href="mailto:arshiasandhu07@gmail.com">
          <p
            className="text-white text-center mx-1 lg:mx-4 p-2 cursor-pointer border-2 border-transparent text-md lg:text-xl hover:border-white rounded-full lg:hover:mb-4"
            style={{ transition: "0.3s ease" }}
          >
            E-Mail
          </p>
        </a>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-md lg:text-xl text-center">
        Designed and Developed by{" "}
        <a href="https://www.linkedin.com/in/arshiasandhu/">
          <b>Arshia&nbsp;Sandhu</b>
        </a>
      </p>
      <a href="mailto:arshiasandhu07@gmail.com">
        <p className="text-white text-sm text-center font-medium mt-2">
          arshiasandhu07@gmail.com
        </p>
      </a>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <a href="https://www.linkedin.com/in/arshiasandhu/">
        <b>
          <p className="text-white text-left text-sm lg:text-lg">
            Arshia Sandhu
          </p>
        </b>
      </a>
      <p className="text-white text-right text-sm lg:text-lg">
        &copy;All rights reserved
      </p>
    </div>
  </div>
);

export default Footer;
