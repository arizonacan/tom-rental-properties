import type { Metadata } from "next";
import { DM_Sans, Cardo, Gloock } from "next/font/google";
import "./globals.css";

// 1. Initialize DM Sans for UI
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

// 2. Initialize Cardo (The elegant serif)
const cardo = Cardo({
  weight: ["400", "700"],
  style: ["normal", "italic"], 
  subsets: ["latin"],
  variable: "--font-cardo",
});

// 3. Initialize Gloock (The massive display font)
const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
});

export const metadata: Metadata = {
  title: "Tom's Rentals",
  description: "A cozy and peaceful getaway in the Catskills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // THE FIX: The variables are safely injected into the <html> tag
  return (
    <html lang="en" className={`${dmSans.variable} ${cardo.variable} ${gloock.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}