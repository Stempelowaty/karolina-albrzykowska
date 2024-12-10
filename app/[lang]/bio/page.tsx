import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";
import { getDictionary } from "./dictionary";
import { cn } from "@/app/utils";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const padding: number[] = [0, 2, 7, 18];
  const bold: number[] = [3, 5];
  return (
    <div>
      <Top lang={lang} />
      <Navigation lang={lang} />
      <div className="flex flex-col p-12 font-lexend gap-3">
        {Array.from({ length: 21 }).map((_, i) => (
          <div key={i}>
            <div
              className={cn(
                padding.includes(i) ? "pt-9 text-2xl" : "text-md",
                bold.includes(i) ? "font-bold" : "font-normal"
              )}
            >
              {dict[`text${i + 1}` as keyof typeof dict]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
