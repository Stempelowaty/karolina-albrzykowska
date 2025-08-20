"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export const Banner = () => {
  const slides = [
    "https://res.cloudinary.com/dvq0rydw8/image/upload/v1755711627/banner1_rgwghv.jpg",
    "https://res.cloudinary.com/dvq0rydw8/image/upload/v1755711625/baner2_o0j3m8.jpg",
    "https://res.cloudinary.com/dvq0rydw8/image/upload/v1755711622/baner3_bdsbba.jpg",
    "https://res.cloudinary.com/dvq0rydw8/image/upload/v1755711624/baner4_d8hujb.jpg",
    "https://res.cloudinary.com/dvq0rydw8/image/upload/v1755711576/baner5_i21m7o.jpg",
    "https://res.cloudinary.com/dvq0rydw8/image/upload/v1755711627/baner6_lnnj4q.jpg",
    "https://res.cloudinary.com/dvq0rydw8/image/upload/v1755711624/baner7_fqclza.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <Image
              key={index}
              src={slide}
              alt={""}
              width={3300}
              height={1100}
              className="w-full h-128 object-fill bg-fixed"
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full hover:scale-125 transition duration-500 border-gray-600 border ${
              index === currentSlide ? "bg-red-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
