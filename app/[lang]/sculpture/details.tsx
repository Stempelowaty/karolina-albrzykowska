"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/shadCarousel";
import { useEffect, useState } from "react";
import { getDetails } from "./utils";
import Image from "next/image";
import { getDictionary } from "./dictionary";

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
    <div className="flex flex-col w-full h-full items-center overflow-scroll">
      {count !== null ? (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-3/4"
        >
          <CarouselContent>
            {Array.from({ length: count }).map((_, i) => (
              <CarouselItem key={i} className="relative w-full h-[80vh]">
                <Image
                  src={`/rzezba/${index + 1}_${i + 1}.jpg`}
                  alt={`Image ${i + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                  priority={i === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        `Loading...`
      )}
      <div className="flex flex-col gap-3 pt-6 font-lexend">
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
