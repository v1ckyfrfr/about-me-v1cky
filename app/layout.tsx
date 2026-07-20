import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "About Me - Vicky",
  description: "A colorful personal website",
  openGraph: {
    title: "About Me - Vicky",
    description: "A colorful personal website",
    url: "https://about-me-vicky.vercel.app/",
    siteName: "About Me",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-brutal-bg)] text-[var(--color-brutal-text)] selection:bg-[var(--color-brutal-pink)] selection:text-black">
        {children}
      </body>
    </html>
  );
}
