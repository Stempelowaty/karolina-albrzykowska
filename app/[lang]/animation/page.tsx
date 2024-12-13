import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";
import { thumbnails } from "./utils";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/shadPopup";

export default async function Animation({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <div>
      <Top lang={lang} />
      <Navigation lang={lang} />
      <div className="relative flex flex-wrap justify-center h-full w-full pt-6">
        {thumbnails?.map((item, index) => {
          return (
            <div
              key={index}
              className="font-lexend w-2/3 md:w-1/3 m-4 aspect-square p-4 z-20"
            >
              <Dialog>
                <DialogTrigger className="w-full h-full">
                  <div className="w-full h-full">
                    <Image
                      src={item}
                      alt=""
                      className="rounded-lg hover:scale-105 transition duration-500 w-full aspect-square"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center justify-center w-full h-full">
                      <video
                        controls
                        preload="none"
                        className="rounded-lg h-[calc(95vh-3rem)] object-contain"
                        autoPlay
                        loop
                        muted
                      >
                        <source
                          src={`/animation/${index + 1}.mp4`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              {index == 3 && (
                <div className="absolute w-full aspect-3/8 md:aspect-3/2 mt-4 bg-stone-800 left-0 z-10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
