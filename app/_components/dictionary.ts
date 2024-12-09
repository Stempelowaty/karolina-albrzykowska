import { type AvailableLocalesType } from "@/app/utils";

const dictionaries = {
  "en-US": {
    photography: "Photography",
    digital: "Digital",
    drawing: "Drawing",
    animation: "Animation",
    sculpture: "Sculpture",
    portfolio: "Portfolio",
    contact: "Contact",
    bio: "Bio",
  },
  "pl-PL": {
    photography: "Fotografia",
    digital: "Digital",
    drawing: "Rysunek",
    animation: "Animacja",
    sculpture: "Rzeźba",
    portfolio: "Portfolio",
    contact: "Kontakt",
    bio: "Bio",
  },
};

export const getDictionary = (locale: string) =>
  dictionaries[locale as AvailableLocalesType];
