import { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ImageAccordion from "@/components/Common/ImageAccordion";

import SectionTitle from "@/components/Common/SectionTitle";
import { galleryImages } from "@/data/galleryImages";
import Gallery from "@/components/Common/Gallery";

export const metadata: Metadata = {
  title: `Über Uns | Formen Werkstatt`,
  description: "",
  // other metadata
};

export default async function AboutPage() {
  const t = await getScopedI18n("about");

  return (
    <>
      <Breadcrumb pageName={t("title")} description={t("paragraph")} />

      {/* <Video /> */}

      <Gallery images={galleryImages} />

      <section className="relative py-16 md:pb-20 lg:py-24">
        <div className="container">
          <SectionTitle
            title={t("sectionTitle")}
            paragraph={t("sectionParagraph")}
            center
            width="80%"
          />

          <div className="relative  mb-24 items-center justify-center">
            <ImageAccordion />
          </div>

          <p className="text-center text-base !leading-relaxed text-body-color md:text-lg">
            {t("cta")}
          </p>
          <p className="mt-8 text-center text-base font-bold !leading-relaxed text-body-color md:text-lg">
            info@formenwerkstatt.de
          </p>
        </div>
      </section>
    </>
  );
}
