import type { Metadata } from "next";
import { Bai_Jamjuree, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WeHo Auto Repair | Auto Repair, Roadside Assistance & Towing Service",
  description: "WeHo Auto Repair delivers premier auto repair, 24/7 roadside assistance, and towing services in Los Angeles, CA. Located at 6020 Santa Monica Blvd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baiJamjuree.variable} ${montserrat.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col bg-[#110E10] text-[#DEDEDE]"
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
