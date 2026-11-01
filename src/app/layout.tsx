import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { IntroLoader } from "@/components/layout/IntroLoader";
import { PageTransition } from "@/components/layout/PageTransition";
import { SiteFooter, SiteHeader } from "@/components/layout/SiteChrome";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "JT Allen | Real Estate Experts in Sydney’s Eastern Suburbs",
    template: "%s | JT Allen",
  },
  description:
    "Boutique real estate agency specialising in residential sales and property management across Sydney’s Eastern Suburbs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${display.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-[#001629]">
        {/* Instant navy paint before JS — matches live reload flash */}
        <IntroLoader />
        <PageTransition>
          <div className="bg-white flex-1 flex flex-col min-h-screen">
            <SiteHeader transparent />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
