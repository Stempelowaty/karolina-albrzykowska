"use client";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../utils";

export const Navigation = () => {
  const [isPortfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[99] text-background bg-foreground font-lexend text-lg flex flex-row items-center gap-16 px-16 w-full justify-end bg-foreground">
      <Link aria-label="home" href={"/"}>
        <p
          className={cn(
            "rounded-lg p-2 uppercase transition duration-300 group"
          )}
        >
          Główna
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
        </p>
      </Link>
      {/* Portfolio dropdown wrapper */}
      <div
        className="relative"
        onMouseEnter={() => setPortfolioOpen(true)}
        onMouseLeave={() => setPortfolioOpen(false)}
      >
        <p
          className={cn(
            "rounded-lg p-2 uppercase transition duration-300 group cursor-pointer"
          )}
        >
          Portfolio
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
        </p>

        {/* Dropdown Menu */}
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
        <p
          className={cn(
            "rounded-lg p-2 uppercase transition duration-300 group"
          )}
        >
          Bio
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
        </p>
      </Link>
      <Link aria-label="home" href={"/"}>
        <p
          className={cn(
            "rounded-lg p-2 uppercase transition duration-300 group"
          )}
        >
          Kontakt
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
        </p>
      </Link>
    </nav>
  );
};
