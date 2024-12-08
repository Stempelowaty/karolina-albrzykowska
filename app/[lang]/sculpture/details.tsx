"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/shadCarousel";
import { useEffect, useRef, useState } from "react";
import { getDetails } from "./utils";
import Image from "next/image";
import { getDictionary } from "./dictionary";
import { ArrowDownIcon } from "lucide-react";

interface DetailsProps {
  lang: string;
  index: number;
}
export const Details = (props: DetailsProps) => {
  const { index, lang } = props;
  const dict = getDictionary(lang);

  const [count, setCount] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFloatingVisible, setIsFloatingVisible] = useState<boolean>(true);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    setIsFloatingVisible(container.scrollTop === 0);
  };

  const scrollToBottom = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchCount = async () => {
      const result = await getDetails(index);
      setCount(result);
    };

    fetchCount();
  }, [index]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col w-full h-full items-center overflow-y-scroll custom-scrollbar"
    >
      {count !== null ? (
        <div className="flex justify-center w-full">
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
                  className="relative w-full h-[80vh] w-full bg-stone-800"
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
      <div className="flex flex-col w-full gap-3 p-6 font-lexend">
        <div className="text-extrabold text-xl">
          {dict[`title${index + 1}` as keyof typeof dict]}
        </div>
        <div>{dict[`materials${index + 1}` as keyof typeof dict]}</div>
        <div>{dict[`dimentions${index + 1}` as keyof typeof dict]}</div>
        <div>{dict[`description${index + 1}` as keyof typeof dict]}</div>
      </div>
      {isFloatingVisible && (
        <div
          className="absolute bottom-0 rounded-[999px] bg-foreground text-background p-1 m-1 animate-pulse-scale cursor-pointer"
          onClick={scrollToBottom}
        >
          <ArrowDownIcon />
        </div>
      )}
    </div>
  );
};
