import digitalImage from "@/public/home/digital.jpg";
import digitalSub from "@/public/home/tekst/text_digital_PL_ENG-01.svg";

import photographyImage from "@/public/home/photography.jpg";
import photographySubPL from "@/public/home/tekst/text_fotografia_PL-01.svg";
import photographySubEn from "@/public/home/tekst/text_fotografia_ENG-01.svg";

import drawingImage from "@/public/home/drawing.jpg";
import drawingSubPL from "@/public/home/tekst/text_rysunek_PL-01.svg";
import drawingSubEn from "@/public/home/tekst/text_rysunek_ENG-01.svg";

import animationImage from "@/public/home/animation.jpg";
import animationSubPL from "@/public/home/tekst/text_animacja_PL-01.svg";
import animationSubEN from "@/public/home/tekst/text_animacja_ENG-01.svg";

import sculptureImage from "@/public/home/sculpture.jpg";
import sculptureSubPL from "@/public/home/tekst/text_rzezba_PL-01.svg";
import sculptureSubEN from "@/public/home/tekst/text_rzezba_ENG-01.svg";

import { Navigation } from "../_components/navigation";
import { Top } from "../_components/top";
import { getDictionary } from "./dictionary";
import { Banner } from "../_components/banner";
import { HomeNavigation } from "../_components/homeNavigation";
import { News } from "../_components/news";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="w-full h-full">
      <Top lang={lang} />
      <Navigation lang={lang} />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Banner />
        <News lang={lang} />
        <div className="flex w-full flex-wrap justify-center">
          <HomeNavigation
            navLink={"animation"}
            label={dict.animation}
            lang={lang}
            src={animationImage}
            labelImagePl={animationSubPL}
            labelImageEn={animationSubEN}
          />
          <HomeNavigation
            navLink={"digital"}
            label={dict.digital}
            lang={lang}
            src={digitalImage}
            labelImagePl={digitalSub}
            labelImageEn={digitalSub}
          />
          <HomeNavigation
            navLink={"photos"}
            label={dict.photography}
            lang={lang}
            src={photographyImage}
            labelImagePl={photographySubPL}
            labelImageEn={photographySubEn}
          />
          <HomeNavigation
            navLink={"drawing"}
            label={dict.drawing}
            lang={lang}
            src={drawingImage}
            labelImagePl={drawingSubPL}
            labelImageEn={drawingSubEn}
          />
          <HomeNavigation
            navLink={"sculpture"}
            label={dict.sculpture}
            lang={lang}
            src={sculptureImage}
            labelImagePl={sculptureSubPL}
            labelImageEn={sculptureSubEN}
          />
        </div>
      </main>
    </div>
  );
}
