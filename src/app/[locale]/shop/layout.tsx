import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Shop | Products for daily life etc.`,
    description:
      "Finden Sie Ihren Traumjob bei Formenwerkstatt. Erreichen Sie uns fŭr die Beste Preis und schnellste Lieferung aus dem Odenwald.",
    alternates: {
      canonical: "https://www.formenwerkstatt.de/shop",
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
}

export default function Shop({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
