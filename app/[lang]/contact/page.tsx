import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";
import { getDictionary } from "./dictionary";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return (
    <div>
      <Top lang={lang} />
      <Navigation lang={lang} />
      <div className="w-full h-full flex flex-col items-center pt-12 font-lexend">
        <p className="text-xl">{dict.contact}</p>
        <p>kalbrzykowska@onet.pl</p>
      </div>
    </div>
  );
}
