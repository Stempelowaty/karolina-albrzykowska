import digitalImage from "@/public/home/digital.jpg";
import digitalSub from "@/public/home/tekst/text_digital_PL_ENG-01.svg";

import photographyImage from "@/public/home/photography.jpg";
import photographySubPL from "@/public/home/tekst/text_fotografia_PL-01.svg";
import photographySubEn from "@/public/home/tekst/text_fotografia_ENG-01.svg";

import drawingImage from "@/public/home/drawing.jpg";
import drawingSubPL from "@/public/home/tekst/text_rysunek_PL-01.svg";
import drawingSubEn from "@/public/home/tekst/text_rysunek_ENG-01.svg";

import animationImage from "@/public/home/animation.jpg";
import animationSubPL from "@/public/home/tekst/text_animacja_PL-01.svg";
import animationSubEN from "@/public/home/tekst/text_animacja_ENG-01.svg";

import sculptureImage from "@/public/home/sculpture.jpg";
import sculptureSubPL from "@/public/home/tekst/text_rzezba_PL-01.svg";
import sculptureSubEN from "@/public/home/tekst/text_rzezba_ENG-01.svg";

import Image from "next/image";
import { Navigation } from "../_components/navigation";
import { Top } from "../_components/top";
import Link from "next/link";
import { getDictionary } from "./dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="w-full h-full">
      <Top lang={lang} />
      <Navigation lang={lang} />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src={"/banner.jpg"}
          alt={""}
          width={3300}
          height={1100}
          className="w-full h-64 object-cover bg-fixed"
        />
        <div className="flex w-full flex-wrap justify-center">
          <div className="w-full md:w-1/3 aspect-square flex ">
            <Link
              href={`/${lang}/animation`}
              className="flex items-center justify-center w-full h-full"
            >
              <div className="w-11/12 aspect-square hover:scale-105 transition duration-500 bg-rose-600 relative flex items-center justify-center">
                <p className="text-5xl absolute">{dict.animation}</p>
                <div
                  className={
                    "relative transition-opacity w-full h-full hover:opacity-0 duration-500"
                  }
                >
                  <Image
                    src={animationImage}
                    alt=""
                    className="w-full object-cover w-full h-full bg-fixed absolute"
                  />
                  <Image
                    src={lang == "pl-PL" ? animationSubPL : animationSubEN}
                    alt=""
                    className="object-cover w-3/4 bg-fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-1/3 aspect-square flex ">
            <Link
              href={`/${lang}/digital`}
              className="flex items-center justify-center w-full h-full"
            >
              <div className="w-11/12 aspect-square hover:scale-105 transition duration-500 bg-rose-600 relative flex items-center justify-center">
                <p className="text-5xl absolute">{dict.digital}</p>
                <div
                  className={
                    "relative transition-opacity w-full h-full hover:opacity-0 duration-500"
                  }
                >
                  <Image
                    src={digitalImage}
                    alt=""
                    className="w-full object-cover w-full h-full bg-fixed absolute"
                  />
                  <Image
                    src={digitalSub}
                    alt=""
                    className="object-cover w-3/4 bg-fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-1/3 aspect-square flex ">
            <Link
              href={`/${lang}/photography`}
              className="flex items-center justify-center w-full h-full"
            >
              <div className="w-11/12 aspect-square hover:scale-105 transition duration-500 bg-rose-600 relative flex items-center justify-center">
                <p className="text-5xl absolute">{dict.photography}</p>
                <div
                  className={
                    "relative transition-opacity w-full h-full hover:opacity-0 duration-500"
                  }
                >
                  <Image
                    src={photographyImage}
                    alt=""
                    className="w-full object-cover w-full h-full bg-fixed absolute"
                  />
                  <Image
                    src={lang == "pl-PL" ? photographySubPL : photographySubEn}
                    alt=""
                    className="object-cover w-3/4 bg-fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-1/3 aspect-square flex ">
            <Link
              href={`/${lang}/drawing`}
              className="flex items-center justify-center w-full h-full"
            >
              <div className="w-11/12 aspect-square hover:scale-105 transition duration-500 bg-rose-600 relative flex items-center justify-center">
                <p className="text-5xl absolute">{dict.drawing}</p>
                <div
                  className={
                    "relative transition-opacity w-full h-full hover:opacity-0 duration-500"
                  }
                >
                  <Image
                    src={drawingImage}
                    alt=""
                    className="w-full object-cover w-full h-full bg-fixed absolute"
                  />
                  <Image
                    src={lang == "pl-PL" ? drawingSubPL : drawingSubEn}
                    alt=""
                    className="object-cover w-3/4 bg-fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full md:w-1/3 aspect-square flex ">
            <Link
              href={`/${lang}/sculpture`}
              className="flex items-center justify-center w-full h-full"
            >
              <div className="w-11/12 aspect-square hover:scale-105 transition duration-500 bg-rose-600 relative flex items-center justify-center">
                <p className="text-5xl absolute">{dict.sculpture}</p>
                <div
                  className={
                    "relative transition-opacity w-full h-full hover:opacity-0 duration-500"
                  }
                >
                  <Image
                    src={sculptureImage}
                    alt=""
                    className="w-full object-cover w-full h-full bg-fixed absolute"
                  />
                  <Image
                    src={lang == "pl-PL" ? sculptureSubPL : sculptureSubEN}
                    alt=""
                    className="object-cover w-3/4 bg-fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
