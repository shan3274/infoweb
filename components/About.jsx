import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
  const data = [
    {
      h1: " This is heading you have to put heading here",
      p1: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quam fugit accusamus iste, exercitationem id quisquam voluptatum minima officiis excepturi in similique soluta alias minus molestias  inventore vero cupiditate reprehenderit?",
      href: "/",
    },
  ];

  let img =
    "https://images.pexels.com/photos/19598115/pexels-photo-19598115/free-photo-of-women-painting-on-easels.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load";
  return (
    <div
      id="about"
      className="w-full h-[80vh] relative flex items-center justify-center"
    >
      {data.map((item) => {
        return (
          <div className="w-[80%] h-full flex items-center justify-between flex-wrap">
            <div className="w-[50%] h-full flex items-start justify-center pt-10 flex-col gap-10">
              <h1 className="text-[60px] font-titlefont">{item.h1}</h1>
              <p className="text-[15px] font-Comfortaa text-gray-500">
                {item.p1}
              </p>
              <Link
                href={item.href}
                className="w-[150px] h-[40px] bg-blue-500 text-white flex items-center justify-center gap-2 rounded-full duration-300 hover:scale-110"
              >
                Get more <IoIosArrowRoundForward />
              </Link>
            </div>
            <div className="w-[50%] h-full flex flex-col items-center justify-center">
              <Image
                loader={() => (img = img)}
                src={img}
                width={0}
                height={0}
                className="w-[50%] relative top-[100px] rounded-lg drop-shadow-xl duration-300 hover:scale-110"
              />
              <div className="w-[60%] h-[150px] bg-[#303030] rounded-lg"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
