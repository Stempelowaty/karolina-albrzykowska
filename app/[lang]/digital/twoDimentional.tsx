"use client";
import Image from "next/image";
import p1 from "@/public/2d/1.jpg";
import p2 from "@/public/2d/2.jpg";
import p3 from "@/public/2d/3.jpg";
import p4 from "@/public/2d/4.jpg";
import p5 from "@/public/2d/5.jpg";
import p6 from "@/public/2d/6.jpg";
import p7 from "@/public/2d/7.jpg";
import p8 from "@/public/2d/8.jpg";
import p9 from "@/public/2d/9.jpg";
import p10 from "@/public/2d/10.jpg";
import p11 from "@/public/2d/11.jpg";
import p12 from "@/public/2d/12.jpg";
import p13 from "@/public/2d/13.jpg";
import p14 from "@/public/2d/14.jpg";
import p15 from "@/public/2d/15.jpg";
import p16 from "@/public/2d/16.jpg";
import p17 from "@/public/2d/17.jpg";
import p18 from "@/public/2d/18.jpg";
import p19 from "@/public/2d/19.jpg";

export const TwoDimensional = () => {
  const firstCol = [p1, p2, p3, p4, p5];
  const secondCol = [p6, p7, p8, p9, p10, p11, p12];
  const thirdCol = [p13, p14, p15, p16, p17, p18, p19];
  return (
    <div>
      <p className="w-full flex justify-end bg-foreground text-background uppercase text-6xl px-12">
        2d
      </p>
      <div className="grid mt-12 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
        <div className="grid gap-4">
          {firstCol?.map((src) => (
            <div key={src?.src}>
              <Image src={src} alt={`1${src}`} className="rounded-lg" />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {secondCol?.map((src) => (
            <div key={src?.src}>
              <Image src={src} alt={`2${src}`} className="rounded-lg" />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {thirdCol?.map((src) => (
            <div key={src?.src}>
              <Image src={src} alt={`3${src}`} className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
