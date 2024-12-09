import Image from "next/image";
import { threeDimensionalArray } from "./utils";
import Link from "next/link";
interface RenderGalleryProps {
  lang: string;
}
export const RenderGallery = (props: RenderGalleryProps) => {
  const { lang } = props;

  return (
    <div className="flex flex-col items-center">
      <p className="w-full flex justify-end bg-foreground text-background uppercase text-6xl px-12">
        3d
      </p>
      <div className="flex flex-wrap justify-center gap-4 w-3/4">
        {threeDimensionalArray?.map((item, index) => {
          return (
            <div
              key={index}
              className="font-lexend w-full md:w-1/3 aspect-square p-4"
            >
              <Link
                href={`/${lang}/digital/${index}`}
                className="w-full h-full"
              >
                <div className="w-full h-full">
                  <Image
                    src={item}
                    alt=""
                    className="rounded-lg hover:scale-105 transition duration-500 h-full w-full cursor-pointer"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
