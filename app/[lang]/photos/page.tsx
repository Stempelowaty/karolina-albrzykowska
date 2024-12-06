import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";
import { PhotoGallery } from "./photoGallery";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div>
      <Top lang={lang} />
      <Navigation lang={lang} />
      <PhotoGallery />
    </div>
  );
}
