import "./globals.css";
import type { Metadata } from "next";
import { Barriecito, Barrio, Special_Elite } from "next/font/google";
import { styled } from "@/styled-system/jsx";

const barrio = Barrio({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barrio",
});
const barriecito = Barriecito({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barriecito",
});
const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-special-elite",
});

export const metadata: Metadata = {
  title: "Monochrome",
  description: "Be the detective you've always wanted to be",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barriecito.variable} ${barrio.variable} ${specialElite.variable}`}
    >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <styled.body>{children}</styled.body>
    </html>
  );
}
