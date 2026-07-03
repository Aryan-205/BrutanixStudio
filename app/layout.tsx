import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvisiEdge Marketing",
  description:
    "InvisiEdge Marketing is a marketing agency that creates stunning brands and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${onest.variable} h-full bg-white antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans">{children}</body>
    </html>
  );
}
