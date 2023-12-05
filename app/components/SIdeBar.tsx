import React from "react";
import { FaHouse } from "react-icons/fa6";
import Image from "next/image";
import odisseia_src from "../../../public/Odisseia_logo3.svg";
const SideBar = () => {
  return (
    <div className="bg-sky-800 w-[20%] h-full rounded-r-xl flex flex-col items-center py-5 gap-4 z-10 overflow-visible">
      <Image
        src={odisseia_src}
        alt="Odisseia logo"
        className=" w-52 m-2"
      ></Image>
      <div className="flex text-white text-center text-[24px] font-medium justify-center items-center bg-sky-700 w-[106%] h-14 p-2 gap-3 border-r-8 border-white rounded-r-md">
        <FaHouse />
        Painel Principal
      </div>
    </div>
  );
};

export default SideBar;
