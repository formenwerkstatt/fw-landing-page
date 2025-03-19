import Breadcrumb from "@/components/Common/Breadcrumb";
import ImageSection from "@/components/Common/ImageSection";
import HomeArticle from "@/components/HomeArticle";
import { getScopedI18n } from "@/locales/server";
import { cn } from "@/utils/cn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Sustainability | Our Environmental Commitment | Formenwerkstatt`,
  description:
    "Learn about Formenwerkstatt's commitment to sustainability and environmental responsibility. Discover our eco-friendly practices, green initiatives, and how we're working toward a more sustainable future.",
  alternates: {
    canonical: "https://www.formenwerkstatt.de/sustainability",
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

const IMAGES = [
  "/images/earth.svg",
  "/images/factory.svg",
  "/images/recycle.svg",
];

export default async function Sustainability() {
  const t = await getScopedI18n("sustain");

  return (
    <>
      <Breadcrumb pageName={t("title")} description={t("description")} />
      <section
        id="jobs"
        className="relative bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div
          className={cn(
            "absolute left-0 right-0 top-0 z-[1] h-[90dvh] w-full opacity-25",
            "bg-[url(/video/shape.svg)] bg-cover bg-center bg-no-repeat",
          )}
        ></div>
        <div className="container relative">
          <ImageSection
            title={t("hero.title")}
            paragraph={t("hero.description")}
            list={[t("hero.list.0"), t("hero.list.1"), t("hero.list.2")]}
            src="/images/green-factory.png"
            sustain
          />
        </div>
      </section>

      <section className="container mt-16 md:mt-20 lg:mt-24">
        <HomeArticle images={IMAGES} scope="sustainArticle" />
      </section>
    </>
  );
}
