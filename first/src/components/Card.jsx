import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Card = () => {

const [val,setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className=" relative w-60 h-32 bg-zinc-500 rounded flex overflow-hidden">
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out  ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
          src="https://plus.unsplash.com/premium_photo-1700268374954-f06052915608?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""/>
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1477266190403-a01b87100271?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""/>
          <span  onClick={()=>setVal(() => !val)}  className="w-8 h-8  bg-[#dadada5e] flex items-center justify-center rounded-full  absolute bottom-10 left-1/2 translate-x-[50%] translate-y-[50%]">
          <FaArrowRight size={".7em"}/>
          </span>
          
     
      </div>
    </div>
  );
};

export default Card;
