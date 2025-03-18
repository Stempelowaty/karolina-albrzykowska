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
    newsTitle: "My latest work...",
    newsLabel: "Animation for Skill & Chill",
    newsLink: "Check it out!",
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
    newsTitle: "Moja najnowsza praca...",
    newsLabel: "Animacja dla firmy Skill & Chill",
    newsLink: "Sprawdź!",
  },
};

export const getDictionary = (locale: string) =>
  dictionaries[locale as AvailableLocalesType];
