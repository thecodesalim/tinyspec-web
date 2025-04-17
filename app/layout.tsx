import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "tiny spec",
  description: "tiny spec design studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="b90169ea-3ea7-485b-8b4c-567d5c6dbc5a"
        />
      </head>
      <body className={`${inter.className}  antialiased`}>{children}</body>
    </html>
  );
}
