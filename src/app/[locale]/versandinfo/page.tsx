import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Versandinformationen | Formenwerkstatt`,
  description: "Versand- und Lieferinformationen | Formenwerkstatt",
  alternates: {
    canonical: "https://www.formenwerkstatt.de/versand",
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

export default function Versand() {
  return (
    <>
      <Breadcrumb pageName="Versandinformationen" description="" />

      <section id="versand" className="mb-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            VERSANDOPTIONEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Formenwerkstatt bietet folgende Versandmethoden an:
          </p>
          <ul className="list-inside list-disc pl-4">
            <li className="text-base !leading-relaxed text-body-color">
              Standardversand (2-4 Werktage)
            </li>
         
          </ul>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            VERSANDKOSTEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Die Versandkosten werden beim Checkout basierend auf Ihrem Standort,
            dem Gewicht der Bestellung und der gewählten Versandmethode
            berechnet:
          </p>
          <ul className="list-inside list-disc pl-4">
            <li className="text-base !leading-relaxed text-body-color">
              Deutschland: 6,25€ (Standard)
            </li>
            <li className="text-base !leading-relaxed text-body-color">
              EU-Länder: 11,95 € (Standard)
            </li>
          </ul>
          <p className="text-base !leading-relaxed text-body-color">
            Bei Bestellungen über 75 € ist der Standardversand innerhalb
            Deutschlands kostenlos.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            AUFTRAGSBEARBEITUNG
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Bestellungen werden in der Regel innerhalb von 1-2 Werktagen nach
            Zahlungsbestätigung bearbeitet. Sie erhalten eine E-Mail mit Ihrer
            Sendungsverfolgung, sobald Ihre Bestellung versandt wurde. Bitte
            beachten Sie, dass die Auftragsbearbeitung während der Hochsaison
            oder bei Werbeaktionen länger dauern kann.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            LIEFERZEITEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Die geschätzten Lieferzeiten beginnen, sobald Ihre Bestellung
            versandt wurde. Bitte beachten Sie, dass es sich hierbei nur um
            Schätzungen handelt und die tatsächlichen Lieferzeiten je nach
            Faktoren außerhalb unserer Kontrolle variieren können.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            Für Lieferungen innerhalb Deutschlands werden Bestellungen, die an
            Werktagen vor 14:00 Uhr versendet werden, in der Regel innerhalb von
            2-4 Werktagen mit dem Standardversand zugestellt.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            SENDUNGSVERFOLGUNG
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Sobald Ihre Bestellung verschickt wurde, erhalten Sie eine E-Mail
            mit Informationen zur Sendungsverfolgung. Sie können Ihre Bestellung
            auch verfolgen, indem Sie sich in Ihr Konto auf unserer Website
            einloggen oder indem Sie unser Kundendienstteam unter{" "}
            <Link
              href="mailto:kontakt@formenwerkstatt.de"
              className="font-bold text-primary"
            >
              kontakt@formenwerkstatt.de
            </Link>{" "}
            kontaktieren.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            VERSANDBESCHRÄNKUNGEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Wir versenden derzeit nur nach Deutschland und in EU-Länder. Bei
            Fragen zum Versand an Ihren Standort wenden Sie sich bitte an unser
            Kundendienstteam.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            LIEFERPROBLEME
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Wenn Sie Ihre Bestellung nicht innerhalb des erwarteten Zeitrahmens
            erhalten haben oder wenn es Probleme mit Ihrer Lieferung gibt,
            kontaktieren Sie uns bitte innerhalb von 7 Tagen nach dem
            geschätzten Lieferdatum unter{" "}
            <Link
              href="mailto:kontakt@formenwerkstatt.de"
              className="font-bold text-primary"
            >
              kontakt@formenwerkstatt.de
            </Link>
            . Wir werden das Problem mit dem Versanddienstleister untersuchen
            und so schnell wie möglich lösen.
          </p>

          <p className="mt-12 text-base !leading-relaxed text-body-color">
            <strong>Letzte Aktualisierung:</strong> 06.03.2025
          </p>
        </div>
      </section>
    </>
  );
}
