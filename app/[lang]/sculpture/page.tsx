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

      <div className="flex flex-wrap justify-center gap-4">
        {thumbnails?.map((item, index) => {
          return (
            <div
              key={index}
              className="font-lexend w-full md:w-1/3 aspect-square p-4"
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
