import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/app/_components/shadPopup";
import { threeDimensionalArray } from "./utils";
import { getDictionary } from "./dictionary";
interface RenderGalleryProps {
  lang: string;
}
export const RenderGallery = (props: RenderGalleryProps) => {
  const dict = getDictionary(props.lang);
  const getDialogContent = (index: number) => {
    switch (index) {
      case 1:
        return (
          <DialogContent>
            <DialogHeader>
              <DialogTitle />
              <div className="flex flex-col h-full items-center justify-center">
                <div>
                  <Image
                    src={"/3d/1_1.jpg"}
                    alt=""
                    width={1920}
                    height={1080}
                    className="rounded-lg max-h-full max-w-full"
                  />
                </div>
                <div className="p-2 font-lexend">{dict.default}</div>
              </div>
            </DialogHeader>
          </DialogContent>
        );
      case 2:
        return (
          <DialogContent>
            <DialogHeader className="w-full h-full flex justify-center">
              <DialogTitle />
              <div className="flex flex-col">
                <div className="flex md:flex-row flex-col-reverse items-center">
                  <div className="w-1/2 p-0 md:p-2">
                    <Image
                      src={"/3d/2_2.jpg"}
                      alt=""
                      width={1920}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <p>{dict.testing}</p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center">
                  <div className="w-1/2 p-0 md:p-2">
                    <Image
                      src={"/3d/2_3.jpg"}
                      alt=""
                      width={1920}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 p-0 md:p-2">
                    <Image
                      src={"/3d/2_1.jpg"}
                      alt=""
                      width={1920}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        );
      case 3:
        return (
          <DialogContent>
            <DialogHeader>
              <DialogTitle />
              <div className="w-full h-full sm:flex sm:flex-col sm:justify-center">
                <div className="md:hidden flex justify-center">{dict.ibex}</div>
                <div className="w-full h-auto md:h-3/5 flex ">
                  <div className="w-1/3 h-full flex flex-col justify-end p-2">
                    <Image
                      src={"/3d/3_1.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-1/3 h-full flex flex-col justify-end items-center gap-12 p-2">
                    <Image
                      src={"/3d/3_2.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg"
                    />
                    <div className="md:block hidden">{dict.ibex}</div>
                  </div>
                  <div className="w-1/3 h-full flex flex-col justify-end p-2">
                    <Image
                      src={"/3d/3_3.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full h-auto md:h-2/5 flex flex-wrap justify-center">
                  <div className="w-1/3 sm:w-1/4 h-full p-2">
                    <Image
                      src={"/3d/3_5.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-1/3 sm:w-1/4 h-full p-2">
                    <Image
                      src={"/3d/3_6.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 sm:w-1/4 h-full p-2">
                    <Image
                      src={"/3d/3_7.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 sm:w-1/4 h-full p-2">
                    <Image
                      src={"/3d/3_4.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        );
      case 4:
        return (
          <DialogContent>
            <DialogHeader>
              <DialogTitle />
              <div className="flex flex-col h-full items-center justify-center">
                <div>
                  <Image
                    src={"/3d/4_1.jpg"}
                    alt=""
                    width={1920}
                    height={1080}
                    className="rounded-lg max-h-full max-w-full"
                  />
                </div>
                <div className="p-2 font-lexend">{dict.default}</div>
              </div>
            </DialogHeader>
          </DialogContent>
        );
      case 5:
        return (
          <DialogContent>
            <DialogHeader className="w-full h-full flex justify-center">
              <DialogTitle />
              <div className="flex flex-col">
                <div className="flex md:flex-row flex-col-reverse items-center">
                  <div className="w-2/3 p-0 md:p-2">
                    <Image
                      src={"/3d/5_2.jpg"}
                      alt=""
                      width={1920}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-2/3 p-0 md:p-2">
                    <p>{dict.default}</p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center">
                  <div className="w-2/3 p-0 md:p-2">
                    <Image
                      src={"/3d/5_3.jpg"}
                      alt=""
                      width={1920}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-2/3 p-0 md:p-2">
                    <Image
                      src={"/3d/5_1.jpg"}
                      alt=""
                      width={1920}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        );
      default:
        return <div>default</div>;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="w-full flex justify-end bg-foreground text-background uppercase text-6xl px-12">
        3d
      </p>
      <div className="flex flex-wrap justify-center gap-4 w-3/4">
        {threeDimensionalArray?.map((item, index) => {
          return (
            <div
              key={index}
              className="font-lexend w-full md:w-1/3 aspect-square p-4"
            >
              <Dialog>
                <DialogTrigger className="w-full h-full">
                  <div className="w-full h-full">
                    <Image
                      src={item}
                      alt=""
                      className="rounded-lg hover:scale-105 transition duration-500 h-full w-full cursor-pointer"
                    />
                  </div>
                </DialogTrigger>
                {getDialogContent(index + 1)}
              </Dialog>
            </div>
          );
        })}
      </div>
    </div>
  );
};
