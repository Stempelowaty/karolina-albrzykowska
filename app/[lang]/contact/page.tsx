import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";
import { getDictionary } from "./dictionary";
import { ContactForm } from "./contactForm";

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
      <div className="flex items-center flex-col px-12  font-lexend">
        <p className="text-3xl py-12 uppercase">{dict.contact}</p>
        <div className="flex md:flex-row flex-col w-full items-center md:items-start justify-center">
          <div className="w-full md:w-1/3 h-full flex flex-col items-center md:items-start text-foreground pb-6">
            <p className="text-2xl">{dict.find}</p>
            <p className="font-bold text-lg pt-3">Email</p>
            <p>kalbrzykowska@onet.pl</p>
          </div>
          <div className="md:border-l border-foreground md:pl-4">
            <p className="text-2xl">{dict.formLabel}</p>
            <ContactForm lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
