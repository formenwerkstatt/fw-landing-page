import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Impressum | Formenwerkstatt`,
  description: "Impressum | Info von Formenwerkstatt",
  alternates: {
    canonical: "https://www.formenwerkstatt.de/impressum",
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

export default function Impressum() {
  return (
    <>
      <Breadcrumb pageName="Impressum" description="Formenwerkstatt" />

      <section id="impressum" className="mb-24">
        <div className="container">
          <p className="text-base !leading-relaxed text-body-color ">
            Sudetenstraße 105
          </p>
          <p className="mb-8 text-base !leading-relaxed text-body-color">
            64385 Reichelsheim
          </p>

          <p className="mb-8 text-base font-bold !leading-relaxed text-body-color">
            info@formenwerkstatt.de
          </p>

          <p className="text-base !leading-relaxed text-body-color ">
            Telefon: +49 (0) 6164 913017
          </p>
          <p className="mb-8 text-base !leading-relaxed text-body-color">
            Fax: +49 (0) 6164 913018
          </p>

          <p className="text-base !leading-relaxed text-body-color ">
            Geschäftsführer: Bektas Isik
          </p>
          <p className="text-base !leading-relaxed text-body-color ">
            Gesellschafter: Hüseyin Isik
          </p>
          <p className="mb-8 text-base !leading-relaxed text-body-color">
            Prokuristin: Belgin Isik
          </p>

          <p className="text-base !leading-relaxed text-body-color ">
            Registergericht: Amtsgericht Darmstadt
          </p>
          <p className="text-base !leading-relaxed text-body-color ">
            Registernummer: HRB 92531
          </p>
          <p className="mb-8 text-base !leading-relaxed text-body-color">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            DE291556852
          </p>

          <p className=" text-base !leading-relaxed text-body-color">
            Inhaltlich Verantwortliche gemäß § 10 Absatz 3 MDStV: Belgin Isik
          </p>
        </div>
      </section>
    </>
  );
}
