"use client";
import { LanguagesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

interface TopProps {
  lang: string;
}

export const Top = (props: TopProps) => {
  const { lang } = props;
  const pathname = usePathname();
  return (
    <div className="relative w-full bg-foreground text-background font-lexend flex flex-col items-center py-12 pb-4">
      <Link
        href={`/${lang}`}
        className="flex flex-col items-center text-foreground w-36 h-24 justify-center rounded-xl"
      >
        <Image
          src={"/logo.svg"}
          alt={""}
          width={300}
          height={300}
          className="w-full h-64 object-cover bg-fixed hover:scale-105 transition duration-500"
        />
      </Link>
      <button
        className="absolute top-5 right-5 flex items-center hover:scale-110 duration-500 transition"
        onClick={() => {
          if (lang === "pl-PL") redirect(`/en-US/${pathname.substring(6)}`);
          else redirect(`/pl-PL/${pathname.substring(6)}`);
        }}
      >
        <LanguagesIcon className="w-5 h-5" />
        {props.lang === "pl-PL" ? "PL" : "EN"}
      </button>
    </div>
  );
};
