import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kedus Bible',
  description:
    'Read the Bible in Amharic, Afaan Oromo, Tigrigna. Daily Devotionals.',
  metadataBase: new URL('https://kedusbible.com'),
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      url: '/images/favicon/apple-icon-57x57.png',
      href: '/images/favicon/apple-icon-57x57.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      url: '/images/favicon/apple-icon-60x60.png',
      href: '/images/favicon/apple-icon-60x60.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      url: '/images/favicon/apple-icon-72x72.png',
      href: '/images/favicon/apple-icon-72x72.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      url: '/images/favicon/apple-icon-76x76.png',
      href: '/images/favicon/apple-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      url: '/images/favicon/apple-icon-114x114.png',
      href: '/images/favicon/apple-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      url: '/images/favicon/apple-icon-120x120.png',
      href: '/images/favicon/apple-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      url: '/images/favicon/apple-icon-144x144.png',
      href: '/images/favicon/apple-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      url: '/images/favicon/apple-icon-152x152.png',
      href: '/images/favicon/apple-icon-152x152.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/images/favicon/apple-icon-180x180.png',
      href: '/images/favicon/apple-icon-180x180.png',
    },
    {
      rel: 'icon',
      sizes: '192x192',
      url: '/images/favicon/android-icon-192x192.png',
      href: '/images/favicon/android-icon-192x192.png',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      url: '/images/favicon/favicon-32x32.png',
      href: '/images/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      sizes: '96x96',
      url: '/images/favicon/favicon-96x96.png',
      href: '/images/favicon/favicon-96x96.png',
    },
    {
      rel: 'icon',
      sizes: '16x16',
      url: '/images/favicon/favicon-16x16.png',
      href: '/images/favicon/favicon-16x16.png',
    },
  ],
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
    description:
      'The Kedus Bible is a mobile app that offers the Bible in various languages.',
    title: 'Kedus Bible',
    images: '/images/apple-icon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://kedusbible.com',
    title: 'Kedus Bible',
    description:
      'The Kedus Bible is a mobile app that offers the Bible in various languages.',
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
    'amharic bible',
    'oromo bible',
    'afaan oromoo bible',
    'tigrigna bible',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1 viewport-fit=cover'
        />
        <link rel='shortcut icon' href='/images/favicon-16x16.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/apple-touch-icon.ico'
        />
        <link rel='apple-icon' sizes='180x180' href='/images/apple-icon.ico' />
        <link
          rel='icon'
          type='image/ico'
          sizes='32x32'
          href='/images/favicon-32x32.ico'
        />
        <link
          rel='icon'
          type='image/ico'
          sizes='16x16'
          href='/images/favicon-16x16.ico'
        />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='favicon/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='favicon/apple-icon-60x60.png/'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='favicon/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='favicon/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='favicon/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='favicon/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='favicon/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='favicon/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='favicon/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='favicon/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='favicon/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta
          name='msapplication-TileImage'
          content='favicon/ms-icon-144x144.png'
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
