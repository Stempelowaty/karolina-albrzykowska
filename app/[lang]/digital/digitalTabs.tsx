"use client";
import Image from "next/image";
import { useState } from "react";
import { TwoDimensional } from "./twoDimensional";
import { ThreeDimensional } from "./threeDimensional";

export const DigitalTabs = () => {
  const [tab, setTab] = useState<string>("");

  return (
    <div className="font-lexend flex flex-col">
      <div className="flex justify-center">
        <div className="w-full md:w-1/3 aspect-square flex items-center justify-center">
          <div
            className="relative w-11/12 aspect-square hover:scale-105 transition duration-500 hover:bg-rose-600 flex justify-center items-center rounded-lg"
            onClick={() => setTab("2d")}
          >
            <p className="z-10 text-9xl pointer-events-none">2D</p>
            <Image
              src={"/Test_Image.png"}
              alt={""}
              width={960}
              height={960}
              className="absolute w-full object-cover bg-fixed transition-opacity hover:opacity-20 duration-500 cursor-pointer rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 aspect-square flex items-center justify-center">
          <div
            className="relative w-11/12 aspect-square hover:scale-105 transition duration-500 hover:bg-rose-600 flex justify-center items-center rounded-lg"
            onClick={() => setTab("3d")}
          >
            <p className="z-10 text-9xl pointer-events-none">3D</p>
            <Image
              src={"/Test_Image.png"}
              alt={""}
              width={960}
              height={960}
              className="absolute w-full object-cover bg-fixed transition-opacity hover:opacity-20 duration-500 cursor-pointer rounded-lg"
            />
          </div>
        </div>
      </div>
      {tab === "2d" && <TwoDimensional />}
      {tab === "3d" && <ThreeDimensional />}
    </div>
  );
};
