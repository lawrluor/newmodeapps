import ThemeRegistry from "@/components/ThemeRegistry";
import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Mode Apps",
  description: "software consulting by Lawrence Luo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
