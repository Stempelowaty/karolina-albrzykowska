import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";
import { getDictionary } from "./dictionary";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/popup";
import Image from "next/image";
import { firstCol, secondCol, thirdCol } from "./utils";

export default async function Drawing({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div>
      <Top lang={lang} />
      <Navigation lang={lang} />
      <div className="grid mt-12 gap-4 grid-cols-1 sm:grid-cols-3 p-4">
        <div className="flex flex-col gap-4 items-start">
          {firstCol?.map((src, index) => (
            <div key={src?.src}>
              <Dialog>
                <DialogTrigger>
                  <Image src={src} alt={src?.src} className="rounded-lg" />
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
                    <div className="text-xl max-h-[9rem] font-lexend flex flex-col items-center">
                      <p className="font-bold">
                        {dict[`leftTitle_${index + 1}` as keyof typeof dict]}
                      </p>
                      <p>{dict[`left_${index + 1}` as keyof typeof dict]}</p>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 items-start">
          {secondCol?.map((src, index) => (
            <div key={src?.src}>
              <Dialog>
                <DialogTrigger>
                  <Image src={src} alt={src?.src} className="rounded-lg" />
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
                    <div className="text-xl max-h-[9rem] font-lexend flex flex-col items-center">
                      <p className="font-bold">
                        {dict[`leftTitle_${index + 1}` as keyof typeof dict]}
                      </p>
                      <p>{dict[`left_${index + 1}` as keyof typeof dict]}</p>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 items-start">
          {thirdCol?.map((src, index) => (
            <div key={src?.src}>
              <Dialog>
                <DialogTrigger>
                  <Image src={src} alt={src?.src} className="rounded-lg" />
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
                    <div className="text-xl max-h-[9rem] font-lexend flex flex-col items-center">
                      <p className="font-bold">
                        {dict[`leftTitle_${index + 1}` as keyof typeof dict]}
                      </p>
                      <p>{dict[`left_${index + 1}` as keyof typeof dict]}</p>
                    </div>
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
