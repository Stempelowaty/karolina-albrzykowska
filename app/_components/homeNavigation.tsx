import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface TopProps {
  lang: string;
  src: StaticImageData;
  labelImagePl: StaticImageData;
  labelImageEn: StaticImageData;
  navLink: string;
  label: string;
}

export const HomeNavigation = (props: TopProps) => {
  const { lang, label, src, labelImageEn, labelImagePl, navLink } = props;
  return (
    <div className="flex items-center justify-center w-full md:w-1/3 aspect-square">
      <Link
        href={`/${lang}/${navLink}`}
        className="w-11/12 aspect-square hover:scale-110 hover:bg-rose-600 transition duration-500 relative flex items-center justify-center rounded-lg"
      >
        <p className="text-5xl absolute">{label}</p>
        <div className="relative transition-opacity w-full h-full hover:opacity-0 duration-500">
          <Image
            src={src}
            alt=""
            className="w-full object-cover w-full h-full bg-fixed absolute rounded-lg"
          />
          <Image
            src={lang == "pl-PL" ? labelImagePl : labelImageEn}
            alt=""
            className="object-cover w-3/4 bg-fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </Link>
    </div>
  );
};
