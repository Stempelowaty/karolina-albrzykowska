import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";

export default async function Bio({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  return (
    <div>
      <Top lang={lang} />
      <Navigation lang={lang} />
      Bio
    </div>
  );
}
