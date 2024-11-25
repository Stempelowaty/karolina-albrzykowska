import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/shadPopup";
import Image from "next/image";
import { firstCol, secondCol, thirdCol } from "./utils";

export default async function Photography({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div>
      <Top lang={lang} />
      <Navigation lang={lang} />
      <div className="grid mt-12 gap-4 grid-cols-1 sm:grid-cols-3 p-4">
        <div className="flex flex-col gap-4 items-start">
          {firstCol?.map((src) => (
            <div key={src?.src}>
              <Dialog>
                <DialogTrigger>
                  <Image
                    src={src}
                    alt={src?.src}
                    className="rounded-lg hover:scale-105 transition duration-500"
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="flex items-center justify-center w-full h-full">
                    <DialogTitle>
                      <Image
                        src={src}
                        alt={src?.src}
                        className="rounded-lg max-h-[calc(95vh-12rem)] object-contain"
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
                  <Image
                    src={src}
                    alt={src?.src}
                    className="rounded-lg hover:scale-105 transition duration-500"
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="flex items-center justify-center w-full h-full">
                    <DialogTitle>
                      <Image
                        src={src}
                        alt={src?.src}
                        className="rounded-lg max-h-[calc(95vh-12rem)]  object-contain"
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
                  <Image
                    src={src}
                    alt={src?.src}
                    className="rounded-lg hover:scale-105 transition duration-500"
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="flex items-center justify-center w-full h-full">
                    <DialogTitle>
                      <Image
                        src={src}
                        alt={src?.src}
                        className="rounded-lg max-h-[calc(95vh-12rem)] object-contain "
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
}
