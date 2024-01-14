import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "watchguru",
  description: "Find your next favorite watch",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-black text-white select-none ${font.className}`}>
        <header className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
