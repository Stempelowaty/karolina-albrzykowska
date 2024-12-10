import { Top } from "@/app/_components/top";
import { Navigation } from "@/app/_components/navigation";
import { getDictionary } from "./dictionary";
import { ContactForm } from "./contactForm";
import { MailIcon } from "lucide-react";
import Link from "next/link";

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
          <div className="w-full md:w-1/3 h-full flex flex-col items-center text-center md:text-start md:items-start text-foreground pb-6">
            <p className="text-2xl">{dict.find}</p>
            <div className="flex items-center gap-2 pt-3">
              <MailIcon className="w-6 h-6" />
              <p className="font-bold text-lg ">Email</p>
            </div>
            <p className="text-red-500">kalbrzykowska@onet.pl</p>
            <Link
              href={"https://www.instagram.com/quspny"}
              className="hover:scale-105 transition duration-500"
            >
              <div className="flex items-center gap-2 pt-3">
                <div className="relative w-6 h-6 bg-foreground rounded-md flex items-center justify-center">
                  <div className="w-4 h-4 bg-background rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-foreground rounded-md"></div>
                  </div>
                  <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-background rounded-md"></div>
                </div>
                <p className="font-bold text-lg">Instagram</p>
              </div>
              <p className="text-red-500">@quspny</p>
            </Link>
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
