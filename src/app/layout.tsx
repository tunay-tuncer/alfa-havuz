import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alfa Havuz",
  description: "Alfa Havuz ve İklimlendirme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      style={{ overflowX: "hidden", overflowY: "auto" }}
    >
      <body
        className={montserrat.className}
        style={{ overflowX: "hidden", overflowY: "hidden", margin: 0 }}
      >
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}