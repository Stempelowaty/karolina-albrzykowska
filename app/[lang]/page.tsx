import Image from "next/image";
import { Navigation } from "../_components/navigation";
import { Top } from "../_components/top";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <div className="w-full h-full">
      <Top lang={lang} />
      <Navigation lang={lang} />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src={"/banner.JPG"}
          alt={""}
          width={3300}
          height={1100}
          className="w-full h-64 object-cover bg-fixed"
        />
        <div className="flex w-full flex-wrap justify-center">
          <div className="w-full md:w-1/3 aspect-square flex items-center justify-center">
            <div className="w-11/12 aspect-square hover:scale-105 transition duration-500 bg-rose-600">
              <Image
                src={"/Test_Image.png"}
                alt={""}
                width={960}
                height={960}
                className="w-full object-cover bg-fixed transition-opacity hover:opacity-0 duration-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square flex items-center justify-center">
            <div className="w-11/12 aspect-square hover:scale-105 transition duration-500 bg-rose-600">
              <Image
                src={"/Test_Image.png"}
                alt={""}
                width={960}
                height={960}
                className="w-full object-cover bg-fixed transition-opacity hover:opacity-0 duration-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square flex items-center justify-center">
            <div className="w-11/12 aspect-square hover:scale-105 transition duration-500 bg-rose-600">
              <Image
                src={"/Test_Image.png"}
                alt={""}
                width={960}
                height={960}
                className="w-full object-cover bg-fixed transition-opacity hover:opacity-0 duration-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square flex items-center justify-center">
            <div className="w-11/12 aspect-square hover:scale-105 transition duration-500 bg-rose-600">
              <Image
                src={"/Test_Image.png"}
                alt={""}
                width={960}
                height={960}
                className="w-full object-cover bg-fixed transition-opacity hover:opacity-0 duration-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square flex items-center justify-center">
            <div className="w-11/12 aspect-square hover:scale-105 transition duration-500 bg-rose-600">
              <Image
                src={"/Test_Image.png"}
                alt={""}
                width={960}
                height={960}
                className="w-full object-cover bg-fixed transition-opacity hover:opacity-0 duration-500"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
