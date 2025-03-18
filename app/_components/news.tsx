import Image from "next/image";
import { getDictionary } from "./dictionary";
import Link from "next/link";

interface NewsProps {
  lang: string;
}
export const News = (props: NewsProps) => {
  const dict = getDictionary(props.lang);

  return (
    <Link
      aria-label="contact"
      href={`/${props.lang}/animation`}
      className="w-full h-96 bg-red-400 relative hover:scale-105 transition duration-500"
    >
      <Image
        src={"/news.png"}
        alt={""}
        width={3300}
        height={1100}
        className="w-full h-96 object-cover blur-md absolute"
      />
      <div className="absolute pt-24 px-8 font-lexend">
        <h3 className="text-2xl">{dict.newsTitle}</h3>
        <h2 className="text-4xl text-green-500">{dict.newsLabel}</h2>

        <h3 className="text-xl">{dict.newsLink}</h3>
      </div>
    </Link>
  );
};
