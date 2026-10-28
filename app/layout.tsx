import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { constructMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#fbfbf9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fbfbf9] text-[#151927] font-sans antialiased selection:bg-[#c94a2f]/15 selection:text-[#151927]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#151927] focus:text-white focus:text-sm focus:font-medium focus:rounded-md focus:shadow-md focus:outline-none focus:ring-2 focus:ring-[#c94a2f]"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="relative focus:outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
