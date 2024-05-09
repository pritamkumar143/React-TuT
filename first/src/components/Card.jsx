import React from "react";
const Card = () => {
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="w-60 h-32 bg-zinc-500 rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1700268374954-f06052915608?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""/>
     
      </div>
    </div>
  );
};

export default Card;
