import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";
import { DigitalTabs } from "./digitalTabs";

export default async function Digital({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div>
      <Top lang={lang} />
      <Navigation lang={lang} />
      <DigitalTabs lang={lang} />
    </div>
  );
}
