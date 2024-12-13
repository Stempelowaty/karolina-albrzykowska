import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";
import Image from "next/image";
import { thumbnails } from "./utils";
import Link from "next/link";

export default async function Sculpture({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div>
      <Top lang={lang} />
      <Navigation lang={lang} />

      <div className="flex relative flex-wrap justify-center pt-6">
        {thumbnails?.map((item, index) => {
          return (
            <div
              key={index}
              className="font-lexend w-2/3 md:w-1/3 m-4 aspect-square p-4 z-20"
            >
              <div className="w-full h-full">
                <Link href={`/${lang}/sculpture/${index}`}>
                  <Image
                    src={item}
                    alt=""
                    className="rounded-lg hover:scale-105 transition duration-500 h-full w-full"
                  />
                </Link>
              </div>
              {index % 8 == 3 && (
                <div className="absolute w-full aspect-3/8 md:aspect-3/2 mt-4 bg-stone-800 left-0 z-10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
