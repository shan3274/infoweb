import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const footlinks = [
    "LANGUAGE",
    "COMPANY PARTNERS",
    "LEGEAL TERMS",
    "PRIVACY POLICY",
    "HOW TO USE",
    "GET ASSISTANCE",
  ];
  return (
    <div className="w-full h-[60vh] bg-white duration-300 dark:bg-black fex items-center justify-center gap-5 flex-col">
      <div className="w-full h-[25%] flex items-end pb-5 justify-center relative after:absolute after:w-[90%] after:h-[.5px] after:bottom-0 after:bg-gray-300 ">
        <h1 className="text-[17px] font-Comfortaa font-[200] text-gray-500 dark:text-gray-300">
          AVAILABLE ANYTIME ANYWHERE
        </h1>
      </div>
      <div className="w-full h-[50%] flex items-center justify-center text-black dark:text-white">
        <div className="w-full h-[70%] dark:bg-gray-600 bg-gray-100 flex items-center justify-around px-5">
          <div className="w-[30%] h-full flex flex-col items-center justify-center gap-5 pl-10">
            <h1 className="text-[35px] duration-300 font-Caveat dark:text-gray-400 text-gray-500 w-full">
              FOLLOW <span className="text-black dark:text-white">#ALDENO</span>
            </h1>
            <div className="w-full flex items-center gap-5">
              <FaFacebook />
              <FaInstagram />
              <FaGithub />
              <FaTwitter />
            </div>
          </div>
          <div className="w-[30%] h-full flex flex-col items-start justify-center gap-5 pl-10">
            <h1 className="text-[35px] font-Comfortaa text-black dark:text-white font-[200] w-full">
              NEWSLETTER
            </h1>
            <div className="w-full flex gap-5 items-center">
              <input
                placeholder="PLEASE ENTER YOUR EMAIL"
                className="w-[80%] h-[40px] bg-transparent outline-none  border-b border-b-black text-[12px]"
              />
              <button>OK</button>
            </div>
            <p className="text-[8px] font-poppins font-[200] border-b border-b-black">
              Read Legal Terms
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[25%] flex items-start pt-5 gap-5 justify-center relative after:absolute after:w-[90%] after:h-[.5px] after:top-0 after:bg-gray-300 ">
        {footlinks.map((item) => {
          return (
            <Link
              href=""
              className="text-[10px] text-gray-500 dark:text-gray-300 font-poppins"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
