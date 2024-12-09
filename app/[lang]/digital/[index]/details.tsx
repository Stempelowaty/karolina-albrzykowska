"use client";

import Image from "next/image";
import { getDictionary } from "../dictionary";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface DetailsProps {
  lang: string;
  index: number;
}
export const Details = (props: DetailsProps) => {
  const { index, lang } = props;
  const dict = getDictionary(lang);

  const getDialogContent = (index: number) => {
    switch (index) {
      case 1:
        return (
          <div className="flex flex-col h-full items-center justify-center p-12">
            <PhotoProvider>
              <PhotoView src={"/3d/1_1.jpg"}>
                <Image
                  src={"/3d/1_1.jpg"}
                  alt=""
                  width={1920}
                  height={1080}
                  className="rounded-lg max-h-full max-w-full cursor-pointer transition hover:scale-105 duration-500"
                />
              </PhotoView>
            </PhotoProvider>
            <div className="p-2 font-lexend">{dict.default}</div>
          </div>
        );
      case 2:
        return (
          <PhotoProvider>
            <div className="w-full h-full flex justify-center p-12">
              <div className="flex flex-col">
                <div className="flex md:flex-row flex-col-reverse items-center">
                  <div className="w-1/2 p-2">
                    <PhotoView src={"/3d/2_2.jpg"}>
                      <Image
                        src={"/3d/2_2.jpg"}
                        alt=""
                        width={1920}
                        height={1080}
                        className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                      />
                    </PhotoView>
                  </div>
                  <div className="w-full md:w-1/2 font-lexend">
                    <p>{dict.testing}</p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center">
                  <div className="w-1/2 p-2">
                    <PhotoView src={"/3d/2_3.jpg"}>
                      <Image
                        src={"/3d/2_3.jpg"}
                        alt=""
                        width={1920}
                        height={1080}
                        className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                      />
                    </PhotoView>
                  </div>
                  <div className="w-1/2 p-2">
                    <PhotoView src={"/3d/2_1.jpg"}>
                      <Image
                        src={"/3d/2_1.jpg"}
                        alt=""
                        width={1920}
                        height={1080}
                        className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                      />
                    </PhotoView>
                  </div>
                </div>
              </div>
            </div>
          </PhotoProvider>
        );
      case 3:
        return (
          <PhotoProvider>
            <div className="w-full h-full sm:flex sm:flex-col sm:justify-center p-12">
              <div className="md:hidden flex justify-center">{dict.ibex}</div>
              <div className="w-full h-auto md:h-3/5 flex flex-col md:flex-row items-end">
                <div className="w-full md:w-1/3 h-full flex flex-col justify-end p-2">
                  <PhotoView src={"/3d/3_1.png"}>
                    <Image
                      src={"/3d/3_1.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                    />
                  </PhotoView>
                </div>
                <div className="w-full md:w-1/3 h-full flex flex-col justify-end items-center p-2 gap-12">
                  <PhotoView src={"/3d/3_2.png"}>
                    <Image
                      src={"/3d/3_2.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                    />
                  </PhotoView>
                  <div className="md:block hidden">{dict.ibex}</div>
                </div>
                <div className="w-full md:w-1/3 h-full flex flex-col justify-end p-2">
                  <PhotoView src={"/3d/3_3.png"}>
                    <Image
                      src={"/3d/3_3.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                    />
                  </PhotoView>
                </div>
              </div>
              <div className="w-full h-auto md:h-2/5 flex md:flex-row flex-col justify-center">
                <div className="w-full md:w-1/4 h-full flex flex-col justify-end p-2">
                  <PhotoView src={"/3d/3_5.png"}>
                    <Image
                      src={"/3d/3_5.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                    />
                  </PhotoView>
                </div>
                <div className="w-full md:w-1/4 h-full flex flex-col justify-end p-2">
                  <PhotoView src={"/3d/3_6.png"}>
                    <Image
                      src={"/3d/3_6.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                    />
                  </PhotoView>
                </div>
                <div className="w-full md:w-1/4 h-full flex flex-col justify-end p-2">
                  <PhotoView src={"/3d/3_7.png"}>
                    <Image
                      src={"/3d/3_7.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                    />
                  </PhotoView>
                </div>
                <div className="w-full md:w-1/4 h-full flex flex-col justify-end p-2">
                  <PhotoView src={"/3d/3_4.png"}>
                    <Image
                      src={"/3d/3_4.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                    />
                  </PhotoView>
                </div>
              </div>
            </div>
          </PhotoProvider>
        );
      case 4:
        return (
          <div className="flex flex-col h-full items-center justify-center p-12">
            <PhotoProvider>
              <PhotoView src={"/3d/4_1.jpg"}>
                <Image
                  src={"/3d/4_1.jpg"}
                  alt=""
                  width={1920}
                  height={1080}
                  className="rounded-lg max-h-full max-w-full cursor-pointer transition hover:scale-105 duration-500"
                />
              </PhotoView>
            </PhotoProvider>
            <div className="p-2 font-lexend">{dict.default}</div>
          </div>
        );
      case 5:
        return (
          <PhotoProvider>
            <div className="w-full h-full flex justify-center p-12">
              <div className="flex flex-col">
                <div className="flex md:flex-row flex-col-reverse items-center">
                  <div className="w-1/2 p-2">
                    <PhotoView src={"/3d/5_2.jpg"}>
                      <Image
                        src={"/3d/5_2.jpg"}
                        alt=""
                        width={1920}
                        height={1080}
                        className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                      />
                    </PhotoView>
                  </div>
                  <div className="w-full md:w-1/2 font-lexend">
                    <p className="text-center md:text-start">{dict.default}</p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center">
                  <div className="w-1/2 p-2">
                    <PhotoView src={"/3d/5_3.jpg"}>
                      <Image
                        src={"/3d/5_3.jpg"}
                        alt=""
                        width={1920}
                        height={1080}
                        className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                      />
                    </PhotoView>
                  </div>
                  <div className="w-1/2 p-2">
                    <PhotoView src={"/3d/5_1.jpg"}>
                      <Image
                        src={"/3d/5_1.jpg"}
                        alt=""
                        width={1920}
                        height={1080}
                        className="rounded-lg cursor-pointer transition hover:scale-105 duration-500"
                      />
                    </PhotoView>
                  </div>
                </div>
              </div>
            </div>
          </PhotoProvider>
        );
      default:
        return <div>default</div>;
    }
  };

  return <div>{getDialogContent(index + 1)}</div>;
};
