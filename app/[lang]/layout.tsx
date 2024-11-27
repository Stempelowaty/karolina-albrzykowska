import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { cn } from "../utils";

const lexend = Lexend({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Karolina Albrzykowska",
  description: "My portfolio!",
  icons: [{ rel: "svg", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(`${lexend.variable}`, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
