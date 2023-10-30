import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./_common/Navigation/Navigation";
import Script from "next/script";
import Footer from "./_common/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alice West",
  description: "Frontend Software Engineer Portfolio",
  // manifest: "app/Favicon/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-900">
      <body className={inter.className}>
        <main className="lg:ml-16">{children}</main>
        <Navigation />
        <Footer />
        <Script
          src="https://kit.fontawesome.com/333a269518.js"
          crossOrigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
