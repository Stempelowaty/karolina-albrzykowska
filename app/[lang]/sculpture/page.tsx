import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";

export default async function Sculpture({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <div>
      <Top lang={lang} />
      <Navigation lang={lang} />
      Prezentacja rzeźby w trakcie pracy
    </div>
  );
}
