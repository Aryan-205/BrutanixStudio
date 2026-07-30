import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

// Body / UI face.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Display face: tighter apertures and narrower widths hold together at the
// enormous wordmark sizes this page leans on.
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boulevard™ — Design studio that creates products and experiences",
  description:
    "Boulevard is a design studio shaping brand identity, UI/UX and development for teams that would rather stand out than blend in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
