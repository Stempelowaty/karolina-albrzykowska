"use client";
import Image from "next/image";
import { useState } from "react";
import { TwoDimensional } from "./twoDimentional";
import { ThreeDimentional } from "./threeDimentional";

export const DigitalTabs = () => {
  const [tab, setTab] = useState<string>("");

  return (
    <div className="font-lexend flex flex-col">
      <div className="flex justify-center">
        <div className="w-full md:w-1/3 aspect-square flex items-center justify-center">
          <div
            className="relative w-11/12 aspect-square hover:scale-105 transition duration-500 bg-rose-600 flex justify-center items-center cursor-pointer"
            onClick={() => setTab("2d")}
          >
            <Image
              src={"/Test_Image.png"}
              alt={""}
              width={960}
              height={960}
              className="absolute w-full object-cover bg-fixed transition-opacity hover:opacity-20 duration-500"
            />
            <p className="z-10 text-9xl">2D</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 aspect-square flex items-center justify-center">
          <div
            className="relative w-11/12 aspect-square hover:scale-105 transition duration-500 bg-rose-600 flex justify-center items-center cursor-pointer"
            onClick={() => setTab("3d")}
          >
            <Image
              src={"/Test_Image.png"}
              alt={""}
              width={960}
              height={960}
              className="absolute w-full object-cover bg-fixed transition-opacity hover:opacity-20 duration-500"
            />
            <p className="z-10 text-9xl">3D</p>
          </div>
        </div>
      </div>
      {tab == "2d" && <TwoDimensional />}
      {tab == "3d" && <ThreeDimentional />}
    </div>
  );
};
