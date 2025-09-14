import type { Metadata } from "next";
import { geistMono, geistSans } from "@/config/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "Tienda de ropa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
