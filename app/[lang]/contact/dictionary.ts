import { type AvailableLocalesType } from "@/app/utils";

const dictionaries = {
  "en-US": {
    contact: "Contact me!",
  },
  "pl-PL": {
    contact: "Skontaktuj się!",
  },
};

export const getDictionary = (locale: string) =>
  dictionaries[locale as AvailableLocalesType];
