import React from "react";
import { IoLibraryOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";

const Facilities = () => {
  return (
    <div
      id="facilities"
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="bg-[#131313] w-[80%] min-h-[80vh] rounded-xl text-white flex flex-col items-center justify-center gap-10 p-10">
        <h1 className="text-[50px] font-Comfortaa font-[700]">Facilities</h1>
        <div className="w-[90%] min-h-[60vh] flex items-center justify-around flex-wrap gap-y-10">
          <div className="w-[300px] h-[400px] bg-white rounded-lg drop-shadow-xl border flex flex-col items-start justify-center gap-5 text-black pl-10">
            <div className="w-[70px] h-[70px] bg-green-400 rounded-full flex items-center justify-center">
              <IoLibraryOutline size={40} color="white" />
            </div>
            <h1 className="text-[20px] font-Comfortaa">this is facilities 1</h1>
            <p className="text-[12px] w-[80%] font-poppins text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aut
              aspernatur veniam perferendis harum. Nisi dolore earum modi qui
              aliquid commodi unde obcaecati reiciendis cum mollitia voluptatem,
              expedita aperiam similique.
            </p>
          </div>
          <div className="w-[300px] h-[400px] bg-white rounded-lg drop-shadow-xl border flex flex-col items-start justify-center gap-5 text-black pl-10">
            <div className="w-[70px] h-[70px] bg-orange-400 rounded-full flex items-center justify-center">
              <RiComputerFill size={40} color="white" />
            </div>
            <h1 className="text-[20px] font-Comfortaa">this is facilities 1</h1>
            <p className="text-[12px] w-[80%] font-poppins text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aut
              aspernatur veniam perferendis harum. Nisi dolore earum modi qui
              aliquid commodi unde obcaecati reiciendis cum mollitia voluptatem,
              expedita aperiam similique.
            </p>
          </div>
          <div className="w-[300px] h-[400px] bg-white rounded-lg drop-shadow-xl border flex flex-col items-start justify-center gap-5 text-black pl-10">
            <div className="w-[70px] h-[70px] bg-red-400 rounded-full flex items-center justify-center">
              <AiOutlineHome size={40} color="white" />
            </div>
            <h1 className="text-[20px] font-Comfortaa">this is facilities 1</h1>
            <p className="text-[12px] w-[80%] font-poppins text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aut
              aspernatur veniam perferendis harum. Nisi dolore earum modi qui
              aliquid commodi unde obcaecati reiciendis cum mollitia voluptatem,
              expedita aperiam similique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
