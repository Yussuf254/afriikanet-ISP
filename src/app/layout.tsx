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
  title: {
    default: "Afriikanet - ISP Billing Solutions by Pioneer Afriikanet Technologies Ltd",
    template: "%s | Afriikanet"
  },
  description: "Next-Gen ISP Billing System for African Internet Service Providers. A product of Pioneer Afriikanet Technologies Ltd.",
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
