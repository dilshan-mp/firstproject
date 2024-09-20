import React from "react";
import Laptop from "./assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1248px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYSTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analystics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            suscipit reprehenderit excepturi illum neque natus ab veniam, cumque
            obcaecati quia quo enim sunt dolorem! Ut nulla ex sapiente deleniti
            natus?
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 text-white">
            Get Stared
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
