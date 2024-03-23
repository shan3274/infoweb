import React from "react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
  let Google =
    "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png";
  let img =
    "https://images.unsplash.com/photo-1597871040916-4b4c20ba08dd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      id="contact"
      className="w-full h-screen flex items-center justify-center "
    >
      <div className="w-[50%] h-full flex items-center justify-center">
        <Image
          loader={() => (img = img)}
          src={img}
          width={0}
          height={0}
          className=" w-[60%] duration-700 border"
          alt="img"
        />
      </div>
      <div className="w-[50%] h-full flex items-center justify-center flex-col gap-10 ">
        <div className="w-[80%] font-Comfortaa text-[30px]">
          <p className="w-[60%]">Welcome to Company, Contact us</p>
        </div>

        <div className="w-[80%] flex flex-col gap-3">
          <p className="w-[80%] font-Comfortaa text-[10px]">Name</p>
          <input
            placeholder="Name"
            type="text"
            className="w-[60%] h-[35px] pl-5 border outline-none border-black font-Comfortaa text-[10px]"
          />
        </div>
        <div className="w-[80%] flex flex-col gap-3">
          <p className="w-[80%] font-Comfortaa text-[10px]">Email</p>
          <input
            placeholder="email"
            type="email"
            className="w-[60%] h-[35px] pl-5 border outline-none border-black font-Comfortaa text-[10px]"
          />
        </div>
        <div className="w-[80%] flex flex-col gap-3">
          <p className="w-[80%] font-Comfortaa text-[10px]">Query</p>
          <textarea
            placeholder="Your query"
            className="w-[60%] h-[60px] pt-5 resize-none pl-5 border outline-none border-black font-Comfortaa text-[10px]"
          />
          <div className="w-[60%] flex items-center justify-center">
            <button className="w-[20%] border-b font-Comfortaa text-[10px] border-b-black cursor-pointer">
              Accept terms
            </button>
          </div>
        </div>

        <div className="w-[80%] flex flex-col gap-3">
          <button className="w-[60%]  h-[35px] pl-5 border outline-none bg-black text-white font-Comfortaa text-[10px]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
