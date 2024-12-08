"use client";

import Image from "next/image";
import { firstCol, secondCol, thirdCol } from "./utils";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { getDictionary } from "./dictionary";

interface DrawingGalleryProps {
  lang: string;
}
export const DrawingGallery = (props: DrawingGalleryProps) => {
  const dict = getDictionary(props.lang);
  return (
    <div className="grid mt-12 gap-4 grid-cols-1 sm:grid-cols-3 p-4">
      <div className="flex flex-col gap-4 items-start">
        {firstCol?.map((src, index) => (
          <div key={`${src?.src}${index}`}>
            <PhotoProvider
              toolbarRender={() => (
                <div className="text-xl font-lexend flex flex-col items-end">
                  <p className="font-bold">
                    {dict[`leftTitle_${index + 1}` as keyof typeof dict]}
                  </p>
                  <p>{dict[`left_${index + 1}` as keyof typeof dict]}</p>
                </div>
              )}
            >
              <PhotoView src={`/drawing/left${index + 1}.jpg`}>
                <Image
                  src={src}
                  alt={src?.src}
                  className="rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 items-start">
        {secondCol?.map((src, index) => (
          <div key={`${src?.src}${index}`}>
            <PhotoProvider
              toolbarRender={() => (
                <div className="text-xl font-lexend flex flex-col items-end">
                  <p className="font-bold">
                    {dict[`centerTitle_${index + 1}` as keyof typeof dict]}
                  </p>
                  <p>{dict[`center_${index + 1}` as keyof typeof dict]}</p>
                </div>
              )}
            >
              <PhotoView src={`/drawing/center${index + 1}.jpg`}>
                <Image
                  src={src}
                  alt={src?.src}
                  className="rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 items-start">
        {thirdCol?.map((src, index) => (
          <div key={`${src?.src}${index}`}>
            <PhotoProvider
              toolbarRender={() => (
                <div className="text-xl font-lexend flex flex-col items-end">
                  <p className="font-bold">
                    {dict[`rightTitle_${index + 1}` as keyof typeof dict]}
                  </p>
                  <p>{dict[`right_${index + 1}` as keyof typeof dict]}</p>
                </div>
              )}
            >
              <PhotoView src={`/drawing/right${index + 1}.jpg`}>
                <Image
                  src={src}
                  alt={src?.src}
                  className="rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        ))}
      </div>
    </div>
  );
};
