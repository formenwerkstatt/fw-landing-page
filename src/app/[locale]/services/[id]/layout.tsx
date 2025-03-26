import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;

  let str = id.replace(/-/g, " ");
  str = str.charAt(0).toUpperCase() + str.slice(1);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " && str[i + 1] !== "u") {
      str = str.slice(0, i + 1) + str[i + 1].toUpperCase() + str.slice(i + 2);
    }
  }

  return {
    title: `${str} | Dienstleitung von Formenwerkstatt`,
    description: `${str} | Dienstleitung von Formenwerkstatt. Erreichen Sie uns fŭr die Beste Preis und schnellste Lieferung aus dem Odenwald.`,
    alternates: {
      canonical: `https://formenwerkstatt.de/services/${str}`,
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
