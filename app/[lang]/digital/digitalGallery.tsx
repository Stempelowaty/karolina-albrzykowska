import Image from "next/image";
import { firstCol, secondCol, thirdCol } from "./utils";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export const DigitalGallery = () => {
  return (
    <div>
      <p className="w-full flex justify-end bg-foreground text-background uppercase text-6xl px-12">
        2d
      </p>
      <div className="grid mt-12 gap-4 grid-cols-1 sm:grid-cols-3 p-4">
        <div className="flex flex-col gap-4 items-start">
          {firstCol?.map((src, index) => (
            <div key={`${src?.src}${index}`}>
              <PhotoProvider>
                <PhotoView src={`/2d/1_${index + 1}.jpg`}>
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
              <PhotoProvider>
                <PhotoView src={`/2d/2_${index + 1}.jpg`}>
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
              <PhotoProvider>
                <PhotoView src={`/2d/3_${index + 1}.jpg`}>
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
    </div>
  );
};
