import type { Metadata } from "next";
import "./globals.css";

import { Inter } from 'next/font/google'

const geist = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Criptoday - Crypto Dashboard",
  description: "Your daily crypto insights and technical analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
