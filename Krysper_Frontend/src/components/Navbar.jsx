import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => {
  var link = "/";
  switch (title) {
    case "GitHub":
      link = "https://github.com/arshiaaaa";
      break;
    case "LinkedIn":
      link = "https://www.linkedin.com/in/arshiasandhu/";
      break;
    case "Instagram":
      link = "https://www.instagram.com/arshiaaa._._/";
      break;
    case "E-Mail":
      link = "mailto:arshiasandhu07@gmail.com";
      break;
    default:
      console.log("shehhhhhhhhhhh");
      break;
  }
  return (
    <li
      className={`mx-4 p-2 cursor-pointer border-2 border-transparent text-lg hover:border-white rounded-full hover:mb-4 ${classprops}`}
      style={{ transition: "0.3s ease" }}
      onClick={() => {
        window.location.href = link;
      }}
    >
      {title}
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav
      className="w-full flex md:justify-between justify-between items-center p-4 pl-4 pt-8 md:pl-16 xl:pl-24 relative"
      style={{
        background: "rgb(5,10,48)",
        background:
          "linear-gradient(90deg, rgba(5,10,48,1) 0%, rgba(60,5,65,1) 100%)",
      }}
    >
      <div className="flex flex-initial justify-center items-center pt-10 xl:pt-0">
        <a href={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-48 md:w-56 xl:w-72 cursor-pointer"
          />
        </a>
      </div>
      <ul className="text-white xl:flex hidden list-none flex-row justify-between items-center absolute right-32">
        {["GitHub", "LinkedIn", "Instagram", "E-Mail"].map((item, index) => (
          <NavBarItem key={item + index} title={item} className="text-lg" />
        ))}
        <li
          className={`mx-4 p-2 cursor-pointer border-2 border-transparent text-lg font-semibold rounded-full  hover:mb-4`}
          style={{ color: "rgb(5,10,48)", transition: "0.3s ease" }}
          onClick={() => {
            window.location.href = "https://www.linkedin.com/in/arshiasandhu/";
          }}
        >
          <p className="priyanshu">Made By Arshia Sandhu</p>
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={32}
            className="text-white xl:hidden cursor-pointer absolute right-4 md:right-20"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white xl:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl xl:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["GitHub", "LinkedIn", "Instagram", "E-Mail"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
            <li
              className="p-2 rounded-full absolute bottom-32 right-4 bg-white priyanshu2"
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/arshiasandhu/";
              }}
            >
              <p className="text-white">Made by Arshia Sandhu</p>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
