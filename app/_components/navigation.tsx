"use client";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../utils";
import { HomeIcon, PaletteIcon, BookOpenIcon, PhoneIcon } from "lucide-react";

export const Navigation = () => {
  const [isPortfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[99] flex justify-space-between text-background bg-foreground font-lexend text-lg">
      <p className="w-full flex items-center uppercase px-4">
        Karolina Albrzykowska
      </p>
      <nav className="flex flex-row items-center gap-4 px-4 w-full justify-end">
        <Link aria-label="home" href={"/"}>
          <div
            className={cn(
              "rounded-lg p-2 uppercase transition duration-300 group"
            )}
          >
            <p className="hidden md:block">Główna</p>
            <div className="md:hidden block">
              <HomeIcon className="h-5 w-5" />
            </div>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
          </div>
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setPortfolioOpen(true)}
          onMouseLeave={() => setPortfolioOpen(false)}
        >
          <Link aria-label="home" href={"/"}>
            <div
              className={cn(
                "rounded-lg p-2 uppercase transition duration-300 group"
              )}
            >
              <p className="hidden md:block">Portfolio</p>
              <div className="md:hidden block">
                <PaletteIcon className="h-5 w-5" />
              </div>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
            </div>
          </Link>
          {isPortfolioOpen && (
            <div className="absolute top-full w-48 bg-foreground text-background rounded-sm shadow-lg flex flex-col">
              <Link aria-label="home" href={"/"}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  Sztuka 1
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
                </p>
              </Link>
              <Link aria-label="home" href={"/"}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  Sztuka 2
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
                </p>
              </Link>
              <Link aria-label="home" href={"/"}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  Sztuka 3
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
                </p>
              </Link>
            </div>
          )}
        </div>
        <Link aria-label="home" href={"/"}>
          <div
            className={cn(
              "rounded-lg p-2 uppercase transition duration-300 group"
            )}
          >
            <p className="hidden md:block">Bio</p>
            <div className="md:hidden block">
              <BookOpenIcon className="h-5 w-5" />
            </div>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
          </div>
        </Link>
        <Link aria-label="home" href={"/"}>
          <div
            className={cn(
              "rounded-lg p-2 uppercase transition duration-300 group"
            )}
          >
            <p className="hidden md:block">Kontakt</p>
            <div className="md:hidden block">
              <PhoneIcon className="h-5 w-5" />
            </div>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
          </div>
        </Link>
      </nav>
    </div>
  );
};
