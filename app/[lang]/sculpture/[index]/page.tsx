import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";
import { Details } from "./details";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { getDictionary } from "../dictionary";

export default async function SculptureDetails({
  params,
}: {
  params: Promise<{ lang: string; index: string }>;
}) {
  const { lang, index } = await params;
  const dict = getDictionary(lang);

  return (
    <div>
      <Top lang={lang} />
      <Navigation lang={lang} />
      <div className="w-32">
        <Link
          href={`/${lang}/sculpture`}
          className="font-lexend cursor-pointer text-xl"
        >
          <div className="flex items-center pt-2 px-4 hover:scale-110 transition duration-500">
            <ArrowLeftIcon className="w-4 h-4" />
            <div>{dict.back}</div>
          </div>
        </Link>
      </div>
      <Details lang={lang} index={parseInt(index)} />
    </div>
  );
}
