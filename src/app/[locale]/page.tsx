import Services from "@/components/Services";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formenwerkstatt GmbH | Startseite",
  description: "Wir bringen Ihre Ideen in Form",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      {/* <Brands /> */}
    </>
  );
}
