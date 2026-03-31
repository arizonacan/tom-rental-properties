import type { Metadata } from "next";
import { DM_Sans, Cardo, Gloock } from "next/font/google";
import "./globals.css";

// 1. Initialize DM Sans for UI
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

// 2. Initialize Cardo (requires a weight specification)
const cardo = Cardo({
  weight: ["400", "700"],
  style: ["normal", "italic"], // <-- This is the magic fix!
  subsets: ["latin"],
  variable: "--font-cardo",
});

// 3. Initialize Gloock (requires a weight specification)
const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
});

export const metadata: Metadata = {
  title: "Tom's Rentals | The Woodhouse Lodge",
  description: "A cozy and peaceful getaway in the Catskills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* THE FIX: We are injecting all 3 font variables directly into the HTML body */}
      <body className={`${dmSans.variable} ${cardo.variable} ${gloock.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}