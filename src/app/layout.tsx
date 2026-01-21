import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cybercade | The Future of Security Awareness Training",
  description: "Stop clicking next. Start leveling up. Cybercade transforms security training into an engaging, habit-forming experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${pressStart2P.variable} antialiased font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
