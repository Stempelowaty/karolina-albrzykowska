"use client";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../utils";
import {
  HomeIcon,
  // BookOpenIcon,
  PhoneIcon,
} from "lucide-react";
import { getDictionary } from "./dictionary";
interface NavigationProps {
  lang: string;
}
export const Navigation = (props: NavigationProps) => {
  const { lang } = props;
  const dict = getDictionary(lang);

  const [isPortfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[40] flex justify-space-between text-background bg-foreground font-lexend text-lg">
      <p className="w-full flex items-center uppercase px-4">
        Karolina Albrzykowska
      </p>
      <nav className="flex flex-row items-center gap-4 px-4 w-full justify-end">
        <div
          className="relative"
          onMouseEnter={() => setPortfolioOpen(true)}
          onMouseLeave={() => setPortfolioOpen(false)}
        >
          <Link aria-label="home" href={`/${lang}`}>
            <div
              className={cn(
                "rounded-lg p-2 uppercase transition duration-300 group"
              )}
            >
              <p className="hidden md:block">{dict.portfolio}</p>
              <div className="md:hidden block">
                <HomeIcon className="h-5 w-5" />
              </div>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
            </div>
          </Link>
          {isPortfolioOpen && (
            <div className="absolute top-full w-48 bg-foreground text-background rounded-sm shadow-lg flex flex-col">
              <Link aria-label="home" href={`/${lang}/digital`}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  {dict.digital}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
                </p>
              </Link>
              <Link aria-label="home" href={`/${lang}/photos`}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  {dict.photography}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
                </p>
              </Link>
              <Link aria-label="home" href={`/${lang}/drawing`}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  {dict.drawing}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
                </p>
              </Link>
              <Link aria-label="home" href={`/${lang}/animation`}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  {dict.animation}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
                </p>
              </Link>
              <Link aria-label="home" href={`/${lang}/sculpture`}>
                <p
                  className={cn(
                    "rounded-lg p-2 uppercase transition duration-300 group"
                  )}
                >
                  {dict.sculpture}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
                </p>
              </Link>
            </div>
          )}
        </div>
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
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background" />
          </div>
        </Link>
      </nav>
    </div>
  );
};
