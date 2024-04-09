'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { initGA } from "../../util/analytics";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect((): void => {
    initGA();
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1 viewport-fit=cover"
        />
        <link rel="shortcut icon" href="/images/favicon-16x16.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="apple-icon"
          sizes="180x180"
          href="/images/apple-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
