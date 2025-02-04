import { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ImageAccordion from "@/components/Common/ImageAccordion";

import SectionTitle from "@/components/Common/SectionTitle";
import { allImages } from "@/data/galleryImages";
import Gallery from "@/components/Common/Gallery";
import ImageSection from "@/components/Common/ImageSection";

export const metadata: Metadata = {
  title: `Über Uns | Erfahren Sie mehr über die Formenwerkstatt`,
  description:
    "Erfahren Sie mehr über das Unternehmen Formenwerkstatt. Erreichen Sie uns fŭr die Beste Preis und schnellste Lieferung aus dem Odenwald.",
  alternates: {
    canonical: "https://www.formenwerkstatt.de/about",
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

export default async function AboutPage() {
  const t = await getScopedI18n("about");

  return (
    <>
      <Breadcrumb pageName={t("title")} description={t("paragraph")} />

      {/* <Video /> */}
      <section className="relative pb-12">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="mx-auto h-[60dvh] max-w-[full] overflow-hidden rounded-md"
                data-wow-delay=".15s"
              >
                <Gallery images={allImages} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-light py-16  dark:bg-bg-color-dark md:pb-20 lg:py-24">
        <div className="container">
          <SectionTitle
            title={t("sectionTitle")}
            paragraph={t("sectionParagraph")}
            center
            width="80%"
          />

          <ImageAccordion />

          <ImageSection
            title="info@formenwerkstatt.de"
            paragraph={t("cta")}
            list={[t("ctaList.0"), t("ctaList.1"), t("ctaList.2")]}
            src=""
            center
          />
        </div>
      </section>
    </>
  );
}
