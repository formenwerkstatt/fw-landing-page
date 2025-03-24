import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";
import MapComponent from "@/components/Google/MapComponent";
import Script from "next/script";

export const metadata: Metadata = {
  title: `Kontakt | Erreichen Sie uns bei Fragen oder Anregungen`,
  description: "Wie kann man Formenwerkstatt erreichen? Erreichen Sie uns fŭr die Beste Preis und schnellste Lieferung aus dem Odenwald.",
  alternates: {
    canonical: "https://www.formenwerkstatt.de/contact",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
const ContactPage = async () => {
  const t = await getScopedI18n("contact");

  return (
    <>
      <Script id="contact-conversion-tracking" strategy="afterInteractive">
        {`
          gtag('event', 'ads_conversion_Request_quote_1', {
            // <event_parameters>
          });
        `}
      </Script>
      <Breadcrumb pageName={t("title")} description={t("paragraph")} />

      <section className="relative bg-gray-light py-16 pb-12 dark:bg-bg-color-dark">
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
