import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tinashe Tagarisa",
  description: "Welcome to Tinashe Tagarisa's development website. Find out more about my skills as a programmer or kick back and enjoy learning about my journey in the wonderful world of software engineering. Feel free to get in touch!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className={`${montserrat.variable} antialiased`}>

        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
