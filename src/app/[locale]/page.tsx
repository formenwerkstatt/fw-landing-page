import Services from "@/components/Services";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Formenwerkstatt | Werkzeugmacher aus dem Odenwald`,
  description:
    "Ihr Experte für Werkzeugreparatur, Drahterodieren und Werkzeugherstellung in Reichelsheim. Beste preis und schnellste lieferung aus dem Odenwald.",
  alternates: {
    canonical: "https://formenwerkstatt.de/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
    </>
  );
}
