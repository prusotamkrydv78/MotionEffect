import React from "react";

const Background = () => {
  return (
    <div className="w-full h-screen fixed z-[2] ">
      <div
        className="w-full py-10 flex justify-center text-zinc-700 font-semibold text-xl absolute top-[5%]"
        style={{ color: "rgb(162, 255, 0)" }}
      >
        Documents
      </div>
      <h1
        style={{ color: "rgb(162, 255, 0)" }}
        className="absolute text-[15vh] leading-none tracking-tighter left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] bold"
      >
        Docs
      </h1>
    </div>
  );
};

export default Background;
