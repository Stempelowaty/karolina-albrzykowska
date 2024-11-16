import { type AvailableLocalesType } from "@/app/utils";

const dictionaries = {
  "en-US": {
    leftTitle_1: "Structure",
    left_1: "pencil 30 x 30 cm",
    leftTitle_2: "Structure",
    left_2: "pencil 30 x 30 cm",
    leftTitle_3: "Structure",
    left_3: "pencil 30 x 30 cm",
    leftTitle_4: "Structure",
    left_4: "pencil 30 x 30 cm",
    leftTitle_5: "Drawing",
    left_5: "ink 29.7 x 21 cm",
    leftTitle_6: "Sketch",
    left_6: "pen 21 x 14.8 cm",
    leftTitle_7: "Drawing",
    left_7: "pencil 50 x 35 cm",
    leftTitle_8: "Drawing",
    left_8: "pencil and charcoal 100 x 70 cm",
    leftTitle_9: "Sketch",
    left_9: "pencil 29.7 x 21 cm",
    leftTitle_10: "Inner self-portrait",
    left_10: "cyanotype and gold paint 66 x 52 cm",
    leftTitle_11: "Mold in space",
    left_11: "ink 42 x 29.7 cm",
    leftTitle_12: "Mold in space",
    left_12: "ink 42 x 29.7 cm",
    leftTitle_13: "Mold in space",
    left_13: "ink 42 x 29.7 cm",
    leftTitle_14: "Sketch",
    left_14: "watercolor and markers 21 x 14.8 cm",
    leftTitle_15: "Drawing",
    left_15: "markers 29.7 x 21 cm",
    centerTitle_1: "Structure",
    center_1: "pencil 30 x 30 cm",
    centerTitle_2: "Structure",
    center_2: "pencil 30 x 30 cm",
    centerTitle_3: "Structure",
    center_3: "pencil 30 x 30 cm",
    centerTitle_4: "Structure",
    center_4: "pencil 30 x 30 cm",
    centerTitle_5: "Drawing",
    center_5: "ink 29.7 x 21 cm",
    centerTitle_6: "Sketch",
    center_6: "watercolor and markers 21 x 14.8 cm",
    centerTitle_7: "Drawing",
    center_7: "pencil 21 x 14.8 cm",
    centerTitle_8: "Drawing",
    center_8: "pencil 42 x 29.7 cm",
    centerTitle_9: "Sketch",
    center_9: "pencil 29.7 x 21 cm",
    centerTitle_10: "Inner self-portrait",
    center_10: "cyanotype and gold paint 66 x 52 cm",
    centerTitle_11: "Drawing",
    center_11: "cyanotype and gold paint 34 x 25 cm",
    centerTitle_12: "Mold in space",
    center_12: "ink 42 x 29.7 cm",
    centerTitle_13: "Mold in space",
    center_13: "ink 42 x 29.7 cm",
    centerTitle_14: "Mold in space",
    center_14: "ink 42 x 29.7 cm",
    centerTitle_15: "Sketch",
    center_15: "watercolor and markers 21 x 14.8 cm",
    centerTitle_16: "Sketch",
    center_16: "watercolor and markers 21 x 14.8 cm",
    rightTitle_1: "Structure",
    right_1: "pencil 30 x 30 cm",
    rightTitle_2: "Structure",
    right_2: "pencil 30 x 30 cm",
    rightTitle_3: "Structure",
    right_3: "pencil 30 x 30 cm",
    rightTitle_4: "Drawing",
    right_4: "ink 29.7 x 21 cm",
    rightTitle_5: "Drawing",
    right_5: "ink 50 x 35 cm",
    rightTitle_6: "Drawing",
    right_6: "pen and sticky notes 42 x 29.7 cm",
    rightTitle_7: "Drawing",
    right_7: "pen and sticky notes 42 x 29.7 cm",
    rightTitle_8: "Sketch",
    right_8: "pencil 29.7 x 21 cm",
    rightTitle_9: "Sketch",
    right_9: "pencil 29.7 x 21 cm",
    rightTitle_10: "Inner self-portrait",
    right_10: "cyanotype and gold paint 66 x 52 cm",
    rightTitle_11: "Drawing",
    right_11: "cyanotype and gold paint 34 x 25 cm",
    rightTitle_12: "Mold in space",
    right_12: "ink 42 x 29.7 cm",
    rightTitle_13: "Mold in space",
    right_13: "ink 42 x 29.7 cm",
    rightTitle_14: "Sketch",
    right_14: "watercolor and markers 21 x 14.8 cm",
    rightTitle_15: "Sketch",
    right_15: "watercolor and markers 21 x 14.8 cm",
  },

  "pl-PL": {
    leftTitle_1: "Struktura",
    left_1: "ołówek 30 x 30 cm",
    leftTitle_2: "Struktura",
    left_2: "ołówek 30 x 30 cm",
    leftTitle_3: "Struktura",
    left_3: "ołówek 30 x 30 cm",
    leftTitle_4: "Struktura",
    left_4: "ołówek 30 x 30 cm",
    leftTitle_5: "Rysunek",
    left_5: "atrament 29,7 x 21 cm",
    leftTitle_6: "Szkic",
    left_6: "długopis 21 x 14,8 cm",
    leftTitle_7: "Rysunek",
    left_7: "ołówek 50 x 35 cm",
    leftTitle_8: "Rysunek",
    left_8: "ołówek i węgiel 100 x 70 cm",
    leftTitle_9: "Szkic",
    left_9: "ołówek 29,7 x 21 cm",
    leftTitle_10: "Autoportret wewnętrzny",
    left_10: "cyjanotypia i złota farba 66 x 52 cm",
    leftTitle_11: "Pleśń w kosmosie",
    left_11: "atrament 42 x 29,7 cm",
    leftTitle_12: "Pleśń w kosmosie",
    left_12: "atrament 42 x 29,7 cm",
    leftTitle_13: "Pleśń w kosmosie",
    left_13: "atrament 42 x 29,7 cm",
    leftTitle_14: "Szkic",
    left_14: "akwarela i flamastry 21 x 14,8 cm",
    leftTitle_15: "Rysunek",
    left_15: "flamastry 29,7 x 21 cm",
    centerTitle_1: "Struktura",
    center_1: "ołówek 30 x 30 cm",
    centerTitle_2: "Struktura",
    center_2: "ołówek 30 x 30 cm",
    centerTitle_3: "Struktura",
    center_3: "ołówek 30 x 30 cm",
    centerTitle_4: "Struktura",
    center_4: "ołówek 30 x 30 cm",
    centerTitle_5: "Rysunek",
    center_5: "atrament 29,7 x 21 cm",
    centerTitle_6: "Szkic",
    center_6: "akwarela i flamastry 21 x 14,8 cm",
    centerTitle_7: "Rysunek",
    center_7: "ołówek 21 x 14,8 cm",
    centerTitle_8: "Rysunek",
    center_8: "ołówek 42 x 29,7 cm",
    centerTitle_9: "Szkic",
    center_9: "ołówek 29,7 x 21 cm",
    centerTitle_10: "Autoportret wewnętrzny",
    center_10: "cyjanotypia i złota farba 66 x 52 cm",
    centerTitle_11: "Rysunek",
    center_11: "cyjanotypia i złota farba 34 x 25 cm",
    centerTitle_12: "Pleśń w kosmosie",
    center_12: "atrament 42 x 29,7 cm",
    centerTitle_13: "Pleśń w kosmosie",
    center_13: "atrament 42 x 29,7 cm",
    centerTitle_14: "Pleśń w kosmosie",
    center_14: "atrament 42 x 29,7 cm",
    centerTitle_15: "Szkic",
    center_15: "akwarela i flamastry 21 x 14,8 cm",
    centerTitle_16: "Szkic",
    center_16: "akwarela i flamastry 21 x 14,8 cm",
    rightTitle_1: "Struktura",
    right_1: "ołówek 30 x 30 cm",
    rightTitle_2: "Struktura",
    right_2: "ołówek 30 x 30 cm",
    rightTitle_3: "Struktura",
    right_3: "ołówek 30 x 30 cm",
    rightTitle_4: "Rysunek",
    right_4: "atrament 29,7 x 21 cm",
    rightTitle_5: "Rysunek",
    right_5: "atrament 50 x 35 cm",
    rightTitle_6: "Rysunek",
    right_6: "długopis i karteczki samoprzylepne 42 x 29,7 cm",
    rightTitle_7: "Rysunek",
    right_7: "długopis i karteczki samoprzylepne 42 x 29,7 cm",
    rightTitle_8: "Szkic",
    right_8: "ołówek 29,7 x 21 cm",
    rightTitle_9: "Szkic",
    right_9: "ołówek 29,7 x 21 cm",
    rightTitle_10: "Autoportret wewnętrzny",
    right_10: "cyjanotypia i złota farba 66 x 52 cm",
    rightTitle_11: "Rysunek",
    right_11: "cyjanotypia i złota farba 34 x 25 cm",
    rightTitle_12: "Pleśń w kosmosie",
    right_12: "atrament 42 x 29,7 cm",
    rightTitle_13: "Pleśń w kosmosie",
    right_13: "atrament 42 x 29,7 cm",
    rightTitle_14: "Szkic",
    right_14: "akwarela i flamastry 21 x 14,8 cm",
    rightTitle_15: "Szkic",
    right_15: "akwarela i flamastry 21 x 14,8 cm",
  },
};

export const getDictionary = (locale: string) =>
  dictionaries[locale as AvailableLocalesType];
