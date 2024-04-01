import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "@/components/Home";
import HowitWorks from "@/components/HowitWorks";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <Home />
      <HowitWorks />
      <Services />
      <Footer />
    </>
  );
}
