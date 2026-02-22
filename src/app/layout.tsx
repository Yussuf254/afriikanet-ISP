import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

const font = Montserrat({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"], 
});

export const metadata: Metadata = {
  metadataBase: new URL('https://afriikanet.co.ke'),
  title: {
    default: "Afriikanet - ISP Billing Solutions by Pioneer Afriikanet Technologies Ltd",
    template: "%s | Afriikanet"
  },
  description: "Next-Gen ISP Billing System for African Internet Service Providers. Automated billing, real-time analytics, and 24/7 support. A product of Pioneer Afriikanet Technologies Ltd.",
  keywords: ["ISP billing", "billing software", "Internet Service Provider", "Africa ISP solutions", "Afriikanet", "Pioneer Afriikanet Technologies", "ISP management", "billing automation"],
  authors: [{ name: "Pioneer Afriikanet Technologies Ltd" }],
  creator: "Pioneer Afriikanet Technologies Ltd",
  publisher: "Pioneer Afriikanet Technologies Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://afriikanet.co.ke',
    siteName: 'Afriikanet',
    title: 'Afriikanet - ISP Billing Solutions for African Internet Service Providers',
    description: 'Next-Gen ISP Billing System with automated billing, real-time analytics, and 24/7 support. Empowering ISPs across Africa.',
    images: [
      {
        url: '/images/logo/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Afriikanet - ISP Billing Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afriikanet - ISP Billing Solutions for African ISPs',
    description: 'Next-Gen ISP Billing System with automated billing, real-time analytics, and 24/7 support.',
    creator: '@afriikanet',
    images: ['/images/logo/logo.jpeg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: "/images/logo/logo.jpeg",
    shortcut: "/images/logo/logo.jpeg",
    apple: "/images/logo/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body className={`${font.className} scroll-smooth antialiased`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="light"
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <Script src="https://code.iconify.design/3/3.1.0/iconify.min.js" />
        </ThemeProvider>
      </body>
    </html>
  );
}
