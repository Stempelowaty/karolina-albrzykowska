import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";
import { DrawingGallery } from "./drawingGallery";

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
      <DrawingGallery lang={lang} />
    </div>
  );
}
