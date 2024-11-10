"use client";
import Image from "next/image";
import { redirect, usePathname } from "next/navigation";

interface TopProps {
  lang: string;
}

export const Top = (props: TopProps) => {
  const { lang } = props;
  const pathname = usePathname();
  return (
    <div className="relative w-full bg-foreground text-background font-lexend flex flex-col items-center py-5">
      <div className="flex flex-col items-center text-foreground w-36 h-24 justify-center rounded-xl">
        <Image
          src={"/logo.svg"}
          alt={""}
          width={300}
          height={300}
          className="w-full h-64 object-cover bg-fixed"
        />
      </div>
      <button
        className="absolute top-4 right-4"
        onClick={() => {
          if (lang === "pl-PL") redirect(`/en-US/${pathname.substring(6)}`);
          else redirect(`/pl-PL/${pathname.substring(6)}`);
        }}
      >
        {props.lang}
      </button>
    </div>
  );
};
