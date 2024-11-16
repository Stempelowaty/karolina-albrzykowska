import { type AvailableLocalesType } from "@/app/utils";

const dictionaries = {
  "en-US": {
    photography: "Photography",
    digital: "Digital",
    drawing: "Drawing",
    animation: "Animation",
    sculpture: "Sculpture",
  },
  "pl-PL": {
    photography: "Fotografia",
    digital: "Digital",
    drawing: "Rysunek",
    animation: "Animacja",
    sculpture: "Rzeźba",
  },
};

export const getDictionary = (locale: string) =>
  dictionaries[locale as AvailableLocalesType];
