import React from "react";

export const HomePage = () => {
  return (
    <div className=" max-w-[1440px] max-h-[1024px] mx-auto border border-red-600">
      <div className="w-[300px] h-screen border">
        <div className="flex items-center gap-2 mx-auto w-fit py-1">
          <div className="flex items-center gap-1">
            <div className="w-3 h-[23px] border rounded-md  bg-violet-200 "></div>
            <div className="w-3 h-[23px] border rounded-md bg-violet-100 "></div>
            <div className="w-3 h-[23px] border rounded-md bg-violet-300"></div>
          </div>
          <h1 className="font-bold text-[25px]">TaskFlow</h1>
        </div>
      </div>
    </div>
  );
};
