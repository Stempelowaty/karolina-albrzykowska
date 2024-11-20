import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/app/_components/shadPopup";
import { threeDimensionalArray } from "./utils";

export const ThreeDimensional = () => {
  const getDialogContent = (index: number) => {
    switch (index) {
      case 1:
        return (
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center justify-center ">
                Tytuł
              </DialogTitle>
              <DialogDescription className="flex flex-col items-center">
                <div>
                  <Image
                    src={"/3d/1.jpg"}
                    alt=""
                    width={1920}
                    height={1080}
                    className="rounded-lg max-h-full max-w-full"
                  />
                </div>
                <div className="p-2 font-lexend">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        );
      case 2:
        return (
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center justify-center ">
                Tytuł
              </DialogTitle>
              <DialogDescription className="flex items-center justify-center">
                <div className="w-1/2 flex flex-col h-full">
                  <div className="p-2">
                    <Image
                      src={"/3d/2_2.jpg"}
                      alt=""
                      width={1920}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="p-2">
                    <Image
                      src={"/3d/2_3.jpg"}
                      alt=""
                      width={1920}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-1/2 flex flex-col h-full">
                  <div className="h-1/2 p-2 font-lexend">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                  <div className="p-2">
                    <Image
                      src={"/3d/2_1.jpg"}
                      alt=""
                      width={1920}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        );
      case 3:
        return (
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center justify-center">
                Tytuł
              </DialogTitle>
              <div className="w-full h-full">
                <div className="w-full h-3/5 flex ">
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
                    <div>sample text</div>
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
                <div className="w-full h-2/5 flex">
                  <div className="w-1/4 h-full p-2">
                    <Image
                      src={"/3d/3_5.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-1/4 h-full p-2">
                    <Image
                      src={"/3d/3_6.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-1/4 h-full p-2">
                    <Image
                      src={"/3d/3_7.png"}
                      width={650}
                      height={800}
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-1/4 h-full p-2">
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
              <DialogTitle className="flex items-center justify-center ">
                Tytuł
              </DialogTitle>
              <DialogDescription className="flex flex-col items-center">
                <div>
                  <Image
                    src={"/3d/4.jpg"}
                    alt=""
                    width={1920}
                    height={1080}
                    className="rounded-lg max-h-full max-w-full"
                  />
                </div>
                <div className="p-2 font-lexend">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        );
      case 5:
        return (
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center justify-center ">
                Tytuł
              </DialogTitle>
              <DialogDescription className="flex items-center justify-center">
                <div className="w-1/2 flex flex-col h-full">
                  <div className="p-2">
                    <Image
                      src={"/3d/5_2.jpg"}
                      alt=""
                      width={1920}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="p-2">
                    <Image
                      src={"/3d/5_3.jpg"}
                      alt=""
                      width={1920}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-1/2 flex flex-col h-full">
                  <div className="h-1/2 p-2 font-lexend">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                  <div className="p-2">
                    <Image
                      src={"/3d/5_1.jpg"}
                      alt=""
                      width={1920}
                      height={1080}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </DialogDescription>
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
                      className="rounded-lg hover:scale-105 transition duration-500 h-full w-full"
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
