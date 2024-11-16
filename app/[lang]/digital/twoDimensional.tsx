import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/popup";
import { firstCol, secondCol, thirdCol } from "./utils";

export const TwoDimensional = () => {
  return (
    <div>
      <p className="w-full flex justify-end bg-foreground text-background uppercase text-6xl px-12">
        2d
      </p>
      <div className="grid mt-12 gap-4 grid-cols-1 sm:grid-cols-3 p-4">
        <div className="flex flex-col gap-4 items-start">
          {firstCol?.map((src) => (
            <div key={src?.src}>
              <Dialog>
                <DialogTrigger>
                  <Image src={src} alt={src?.src} className="rounded-lg" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center justify-center w-full h-full">
                      <Image
                        src={src}
                        alt={src?.src}
                        className="rounded-lg max-h-[calc(95vh-3rem)] object-contain"
                      />
                    </DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 items-start">
          {secondCol?.map((src) => (
            <div key={src?.src}>
              <Dialog>
                <DialogTrigger>
                  <Image src={src} alt={src?.src} className="rounded-lg" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center justify-center w-full h-full">
                      <Image
                        src={src}
                        alt={src?.src}
                        className="rounded-lg max-h-[calc(95vh-3rem)] object-contain"
                      />
                    </DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 items-start">
          {thirdCol?.map((src) => (
            <div key={src?.src}>
              <Dialog>
                <DialogTrigger>
                  <Image src={src} alt={src?.src} className="rounded-lg" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center justify-center w-full h-full">
                      <Image
                        src={src}
                        alt={src?.src}
                        className="rounded-lg max-h-[calc(95vh-3rem)] object-contain"
                      />
                    </DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};