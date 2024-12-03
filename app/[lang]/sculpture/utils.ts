import p1 from "@/public/rzezba/1.jpg";
import p2 from "@/public/rzezba/2.jpg";
import p3 from "@/public/rzezba/3.jpg";
import p4 from "@/public/rzezba/4.jpg";
import p5 from "@/public/rzezba/5.jpg";
import p6 from "@/public/rzezba/6.jpg";
import p7 from "@/public/rzezba/7.jpg";
import p8 from "@/public/rzezba/8.jpg";
import p9 from "@/public/rzezba/9.jpg";
import p10 from "@/public/rzezba/10.jpg";
import p11 from "@/public/rzezba/11.jpg";
import p12 from "@/public/rzezba/12.jpg";
import p13 from "@/public/rzezba/13.jpg";
import p14 from "@/public/rzezba/14.jpg";
import p15 from "@/public/rzezba/15.jpg";
import p16 from "@/public/rzezba/16.jpg";
import p17 from "@/public/rzezba/17.jpg";

export const thumbnails = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
];

export const getDetails = async (index: number): Promise<number> => {
  let count = 0;

  while (true) {
    const imagePath = `/rzezba/${index + 1}_${count + 1}.jpg`; // Adjust path as needed
    try {
      const response = await fetch(imagePath, { method: "HEAD" });
      if (response.ok) {
        count++;
      } else {
        break;
      }
    } catch {
      break;
    }
  }

  return count;
};
