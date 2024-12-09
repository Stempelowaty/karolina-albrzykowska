"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/shadCarousel";
import { useEffect, useState } from "react";
import { getDetails } from "../utils";
import Image from "next/image";
import { getDictionary } from "../dictionary";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface DetailsProps {
  lang: string;
  index: number;
}
export const Details = (props: DetailsProps) => {
  const { index, lang } = props;
  const dict = getDictionary(lang);

  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      const result = await getDetails(index);
      setCount(result);
    };

    fetchCount();
  }, [index]);

  return (
    <div className="flex flex-col w-full h-full items-center">
      {count !== null ? (
        <div className="md:flex justify-center w-full hidden">
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-3/4"
          >
            <CarouselContent>
              {Array.from({ length: count }).map((_, i) => (
                <CarouselItem
                  key={i}
                  className="relative w-full h-[80vh] bg-stone-800"
                >
                  <Image
                    src={`/rzezba/${index + 1}_${i + 1}.jpg`}
                    alt={`Image ${i + 1}`}
                    fill
                    className="rounded-lg object-contain"
                    priority={i === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {count > 1 && <CarouselPrevious />}
            {count > 1 && <CarouselNext />}
          </Carousel>
        </div>
      ) : (
        `Loading...`
      )}

      {count !== null && (
        <div className="flex justify-center w-full md:hidden flex-wrap gap-3">
          <PhotoProvider>
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="w-48 h-48 relative">
                <PhotoView src={`/rzezba/${index + 1}_${i + 1}.jpg`}>
                  <Image
                    src={`/rzezba/${index + 1}_${i + 1}.jpg`}
                    alt={`Image ${i + 1}`}
                    fill
                    className="rounded-lg object-cover transition hover:scale-110 duration-500 cursor-pointer"
                  />
                </PhotoView>
              </div>
            ))}
          </PhotoProvider>
        </div>
      )}
      <div className="flex flex-col w-full gap-3 p-6 font-lexend">
        <div className="text-extrabold text-xl">
          {dict[`title${index + 1}` as keyof typeof dict]}
        </div>
        <div>{dict[`materials${index + 1}` as keyof typeof dict]}</div>
        <div>{dict[`dimentions${index + 1}` as keyof typeof dict]}</div>
        <div>{dict[`description${index + 1}` as keyof typeof dict]}</div>
      </div>
    </div>
  );
};
