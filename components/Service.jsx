import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Service = () => {
  return (
    <div
      id="service"
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="w-[80%] h-full flex items-center justify-center">
        <div className="w-[50%] h-[70%] bg-[url(https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=800)] bg-no-repeat bg-cover rounded-l-xl"></div>
        <div className="w-[50%] h-[70%] flex flex-col pl-20 justify-center gap-10 relative">
          <h1 className="text-[40px] font-titlefont">
            This is service heading you can change by your own need so don't you
            worry
          </h1>
          <p className="text-[15px] font-poppins text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            unde, mollitia, perspiciatis neque, voluptates molestias iste
            tenetur dolor dignissimos illum cum incidunt minima fuga nisi nulla
            dolorem aperiam culpa laudantium.
          </p>
          <Link
            href="#"
            className="w-[150px] h-[40px] bg-blue-500 text-white flex items-center justify-center gap-2 rounded-full duration-300 hover:scale-110"
          >
            Get more <IoIosArrowRoundForward />
          </Link>
          <div className="absolute w-[200px] h-[150px] bg-white bottom-[20%] rounded-lg border drop-shadow-2xl left-[-150px] z-[1] flex flex-col p-5 justify-around duration-300 hover:scale-110">
            <div className="">
              {" "}
              <p className="text-[12px] font-Comfortaa text-gray-500">title1</p>
              <div className="w-[70%] h-[2px] bg-orange-600"></div>
            </div>
            <div className="">
              {" "}
              <p className="text-[12px] font-Comfortaa text-gray-500">title2</p>
              <div className="w-[40%] h-[2px] bg-green-600"></div>
            </div>
            <div className="">
              {" "}
              <p className="text-[12px] font-Comfortaa text-gray-500">title3</p>
              <div className="w-[90%] h-[2px] bg-blue-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
