"use client";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../utils";
import { PaletteIcon, BookOpenIcon, PhoneIcon } from "lucide-react";
import { getDictionary } from "./dictionary";
interface NavigationProps {
  lang: string;
}
export const Navigation = (props: NavigationProps) => {
  const { lang } = props;
  const dict = getDictionary(lang);

  const [isPortfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[40] flex justify-space-between text-background bg-foreground font-lexend text-lg border-red-500 border-b-8">
      <div className="w-full flex items-center uppercase px-4">
        <Link
          aria-label="home"
          href={`/${lang}`}
          className="transition duration-300 group"
        >
          Karolina Albrzykowska
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-500" />
        </Link>
      </div>
      <nav className="flex flex-row items-center gap-4 px-4 w-full justify-end">
        <div
          className="relative"
          onMouseEnter={() => setPortfolioOpen(true)}
          onMouseLeave={() => setPortfolioOpen(false)}
          onClick={() => setPortfolioOpen(true)}
        >
          <div
            className={cn(
              "rounded-lg p-2 uppercase transition duration-300 group cursor-default"
            )}
          >
            <p className="hidden md:block">{dict.portfolio}</p>
            <div className="md:hidden block">
              <PaletteIcon className="h-5 w-5" />
            </div>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-500" />
          </div>
          {isPortfolioOpen && (
            <div className="absolute right-0 top-full w-48 bg-foreground text-background rounded-sm shadow-lg flex flex-col">
              <Link aria-label="home" href={`/${lang}/animation`}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  {dict.animation}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-500" />
                </p>
              </Link>
              <Link aria-label="home" href={`/${lang}/digital`}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  {dict.digital}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-500" />
                </p>
              </Link>
              <Link aria-label="home" href={`/${lang}/photos`}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  {dict.photography}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-500" />
                </p>
              </Link>
              <Link aria-label="home" href={`/${lang}/drawing`}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  {dict.drawing}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-500" />
                </p>
              </Link>
              <Link aria-label="home" href={`/${lang}/sculpture`}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  {dict.sculpture}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-500" />
                </p>
              </Link>
            </div>
          )}
        </div>
        <Link aria-label="contact" href={`/${lang}/bio`}>
          <div
            className={cn(
              "rounded-lg p-2 uppercase transition duration-300 group"
            )}
          >
            <p className="hidden md:block">{dict.bio}</p>
            <div className="md:hidden block">
              <BookOpenIcon className="h-5 w-5" />
            </div>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-500" />
          </div>
        </Link>
        <Link aria-label="contact" href={`/${lang}/contact`}>
          <div
            className={cn(
              "rounded-lg p-2 uppercase transition duration-300 group"
            )}
          >
            <p className="hidden md:block">{dict.contact}</p>
            <div className="md:hidden block">
              <PhoneIcon className="h-5 w-5" />
            </div>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-500" />
          </div>
        </Link>
      </nav>
    </div>
  );
};
