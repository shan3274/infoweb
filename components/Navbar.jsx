import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
  const headerData = [
    { name: "About", pathName: "#about" },
    { name: "Service", pathName: "#service" },
    { name: "Facilities", pathName: "#facilities" },
    { name: "Contact", pathName: "#contact" },
  ];
  return (
    <nav className="w-full h-[5rem] flex items-center justify-around fixed top-0 z-[999999] bg-white">
      <h1 className="font-Comfortaa text-[20px] w-[20%] flex items-center justify-center">
        Logo
      </h1>
      <ul className="text-[15px] font-poppins font-[200] flex items-center w-[30%] justify-around">
        {headerData.map((item) => {
          return (
            <li className="relative after:absolute after:w-[0%] after:h-[1px] after:bg-black after:left-0 after:top-[100%] after:hover:w-[100%] after:duration-300">
              <Link href={item.pathName}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="w-[20%] flex items-center justify-center">
        {" "}
        <button className="flex items-center justify-center font-Comfortaa text-[13px] w-[150px] h-[40px] bg-orange-500 text-white rounded-full">
          Know more{" "}
          <IoIosArrowRoundForward className="rotate-[-45deg]" size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
