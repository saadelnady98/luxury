import QuizButton from "@/components/templates/QuizButton";
import WhatsAppButton from "@/components/ui/WhatsappButton";
import Footer from "@/components/ui/shared/Footer";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "../components/ui/shared/Navbar";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-Raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "luxurylivinghomes",
  description: "luxurylivinghomes",
  icons: {
    icon: "/app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} bg-darkMode text-textColor !overflow-x-hidden`}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <QuizButton />
        <Footer />
      </body>
    </html>
  );
}
