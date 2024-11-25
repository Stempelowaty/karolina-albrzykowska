import { type AvailableLocalesType } from "@/app/utils";

const dictionaries = {
  "en-US": {
    default: "Render 3d Max",
    testing:
      "Testing 3D scanning technology and performing a three-dimensional scan of an object. Then editing, transforming, and experimenting with modifiers in 3d Max.",
    ibex: "3D model of an ibex, ZBrush",
  },
  "pl-PL": {
    default: "Render 3D, 3d Max",
    testing:
      "Testowanie technologii skanowania 3D, oraz wykonanie trójwymiarowego skanu obiektu. Następnie edytowanie, przekształcanie i eksperymentowanie z modyfikatorami w 3d Max.",
    ibex: "Model 3D koziorożca, ZBrush",
  },
};

export const getDictionary = (locale: string) =>
  dictionaries[locale as AvailableLocalesType];
