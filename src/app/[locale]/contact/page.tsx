import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";

export const metadata: Metadata = {
  title: "Kontakt | Formenwerkstatt",
  description: "Kontakt Formenwerkstatt",
  // other metadata
};

const ContactPage = async () => {
  const t = await getScopedI18n("contact");

  return (
    <>
      <Breadcrumb pageName={t("title")} description={t("paragraph")} />

      <section className="relative pb-12 bg-gray-light py-16 dark:bg-bg-color-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="mx-auto  max-w-[full] overflow-hidden rounded-md"
                data-wow-delay=".15s"
              >
                <Contact />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      </section>

    </>
  );
};

export default ContactPage;
