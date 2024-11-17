import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/popup";
import { threeDimensionalArray } from "./utils";

export const ThreeDimensional = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="w-full flex justify-end bg-foreground text-background uppercase text-6xl px-12">
        3d
      </p>
      <div className="flex flex-wrap justify-center gap-4 w-3/4">
        {threeDimensionalArray?.map((item, index) => {
          return (
            <div key={index} className="font-lexend w-1/3 aspect-square p-4">
              <Dialog>
                <DialogTrigger className="w-full h-full">
                  <div className="w-full h-full">
                    <Image
                      src={item}
                      alt=""
                      className="rounded-lg object-none w-full h-full"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center justify-center w-full h-full">
                      Tytuł
                    </DialogTitle>
                    <Image
                      src={item}
                      alt={item?.src}
                      className="rounded-lg max-h-[calc(95vh-3rem)] object-contain"
                    />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          );
        })}
      </div>
    </div>
  );
};
