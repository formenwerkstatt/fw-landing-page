import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Shop | Produkte von Formenwerkstatt`,
    description:
      "Entdecken Sie hochwertige Produkte im Formenwerkstatt Online-Shop. Handgefertigte Designobjekte, Wohnaccessoires und Formgebungslösungen mit besonderer Qualität und einzigartigem Stil.",
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
