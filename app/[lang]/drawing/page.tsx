import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";

export default async function Drawing({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div>
      <Top lang={lang} />
      <Navigation lang={lang} />
      <p>Drawing</p>
    </div>
  );
}
