import Image from "next/image";
import { getDictionary } from "./dictionary";
import Link from "next/link";
import { cn } from "../utils";

interface NewsProps {
  lang: string;
}
export const News = (props: NewsProps) => {
  const dict = getDictionary(props.lang);

  return (
    <div className="w-full h-96 bg-red-500 relative ">
      <Image
        src={"/news.png"}
        alt={""}
        width={3300}
        height={1100}
        className="w-full h-96 object-cover blur-md absolute"
      />
      <div className="absolute pt-24 px-8 font-lexend">
        <h3 className="text-2xl">{dict.newsTitle}</h3>
        <Link aria-label="news" href={`/${props.lang}/animation`}>
          <div className={cn("rounded-lg transition duration-300 group")}>
            <h2 className="text-4xl text-green-500">{dict.newsLabel}</h2>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500" />
          </div>
          <h3 className="text-xl">{dict.newsLink}</h3>
        </Link>
      </div>
    </div>
  );
};
