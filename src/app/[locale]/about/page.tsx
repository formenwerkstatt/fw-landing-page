import { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Video from "@/components/Video";
import ImageAccordion from "@/components/Common/ImageAccordion";
import Gallery from "@/components/Common/Gallery";
import { galleryImages } from "@/data/galleryImages";

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

      <section
        id="uber-uns"
        className="relative bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title=""
            paragraph={t("description")}
            width="full"
            center
          />
          <ImageAccordion />
        </div>
      </section>
    </>
  );
}
