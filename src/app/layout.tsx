import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kedus Bible',
  description: 'The Kedus Bible is a mobile app that offers the Bible in various languages.',
  metadataBase: new URL('https://kedusbible.com'),
  icons: {
    icon: '/images/favicon-32x32.png',
    shortcut: '/images/favicon-32x32.png',
    apple: '/images/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    title: 'Kedus Bible',
    startupImage: {
      url: '/images/apple-touch-icon.ico',
    },
    statusBarStyle: 'black-translucent',
  },
  twitter: {
    site: 'Kedus Bible',
    description: 'The Kedus Bible is a mobile app that offers the Bible in various languages.',
    title: 'Kedus Bible',
    images: '/images/apple-icon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://kedusbible.com',
    title: 'Kedus Bible',
    description: 'The Kedus Bible is a mobile app that offers the Bible in various languages.',
    siteName: 'Kedus Bible',
    images: [
      {
        url: '/images/apple-icon.ico',
      },
    ],
  },
  keywords: [
    'Kedus Bible',
    'Kidus Bible',
    'KedusBible',
    'KidusBible',
    'Bible App',
    'Bible Search',
    'Theology',
    'Old Testament',
    'New Testament',
    'Bible',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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
