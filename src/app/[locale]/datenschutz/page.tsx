import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Datenschutz | Formenwerkstatt`,
  description: "Datenschutzerklärung | Formenwerkstatt",
  alternates: {
    canonical: "https://formenwerkstatt.de/datenschutz",
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

export default function Datenschutz() {
  return (
    <>
      <Breadcrumb pageName="Datenschutz" description="" />

      <section id="datenschutz" className="mb-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className=" my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl ">
            Allgemeines
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Diese Datenschutzerklärung informiert Sie über die Art, den Umfang
            und den Zweck der Erhebung und Verwendung personenbezogener Daten
            durch den Websitebetreiber, die{" "}
            <strong className="font-bold ">Formenwerkstatt GmbH.</strong>
          </p>
          <p className="text-base leading-relaxed! text-body-color">
            Wir nehmen den Schutz Ihrer Daten sehr ernst und behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>

          <h2 className=" my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl ">
            1. Zugriffsdaten
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Beim Besuch unserer Website werden automatisch Informationen in
            sogenannten Server-Log-Files erhoben und verarbeitet. Diese
            umfassen:
          </p>
          <ul className="list-inside list-disc pl-4">
            <li className="text-base leading-relaxed! text-body-color">
              IP-Adresse (anonymisiert)
            </li>
            <li className="text-base leading-relaxed! text-body-color">
              Browsertyp und -version
            </li>
            <li className="text-base leading-relaxed! text-body-color">
              Betriebssystem des zugreifenden Rechners
            </li>
            <li className="text-base leading-relaxed! text-body-color">
              Referrer-URL (die zuvor besuchte Seite)
            </li>
            <li className="text-base leading-relaxed! text-body-color">
              Uhrzeit der Serveranfrage
            </li>
            <li className="text-base leading-relaxed! text-body-color">
              Besuchte Seiten und Interaktionen
            </li>
          </ul>
          <p className="text-base leading-relaxed! text-body-color">
            Die Speicherung der Daten erfolgt auf Servern unseres Webhosters{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              className="font-bold text-primary"
            >
              Vercel Inc.
            </Link>
            .
          </p>

          <h2 className=" my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl ">
            2. Cookies & Einwilligungsmanagement
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Unsere Website verwendet Cookies, um die Nutzererfahrung zu
            verbessern und statistische Daten zu erfassen. Sie können Ihre
            Cookie-Einstellungen jederzeit über unser Consent-Tool anpassen.
          </p>

          <h2 className=" my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl ">
            3. Google Analytics
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Diese Website nutzt Google Analytics, einen Webanalysedienst von{" "}
            <strong>Google Ireland Limited</strong>. Mehr Informationen zur
            Datenverarbeitung durch Google finden Sie hier:{" "}
            <Link
              href="https://policies.google.com/privacy"
              target="_blank"
              className="font-bold text-primary"
            >
              Google Datenschutzerklärung
            </Link>
            .
          </p>

          <h2 className=" my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl ">
            4. Google Ads & Remarketing
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Unsere Website nutzt Google Ads und das Google Remarketing-Feature
            von <strong>Google Ireland Limited</strong>. Falls Sie
            personalisierte Werbung deaktivieren möchten, klicken Sie hier:{" "}
            <Link
              href="https://adssettings.google.com"
              target="_blank"
              className="font-bold text-primary"
            >
              Google Ads Einstellungen
            </Link>
            .
          </p>

          {/* <h2 className=" my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl ">
            5. Shopify & Zahlungsabwicklung
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Unser Online-Shop wird über{" "}
            <strong>Shopify International Ltd.</strong> betrieben. Weitere
            Details finden Sie in der Datenschutzerklärung von Shopify:{" "}
            <Link
              href="https://www.shopify.com/legal/privacy"
              target="_blank"
              className="font-bold text-primary"
            >
              Shopify Datenschutz
            </Link>
            .
          </p>
          <p className="mt-2 text-base leading-relaxed! text-body-color">
            Bei einer Bestellung werden folgende personenbezogene Daten erhoben:
          </p>
          <ul className="list-inside list-disc pl-4">
            <li className="text-base leading-relaxed! text-body-color">
              Name, Anschrift, E-Mail-Adresse, Telefonnummer
            </li>
            <li className="text-base leading-relaxed! text-body-color">
              Bestellte Produkte und Zahlungsinformationen
            </li>
            <li className="text-base leading-relaxed! text-body-color">
              IP-Adresse und Zeitpunkt der Bestellung
            </li>
          </ul>

          <p className="mt-2 text-base leading-relaxed! text-body-color">
            Die Zahlungsabwicklung erfolgt durch spezialisierte
            Zahlungsdienstleister. Je nach gewählter Zahlungsart werden
            entsprechende Daten an diese übermittelt.
          </p>

          <p className="mt-2 text-base leading-relaxed! text-body-color">
            <strong>Datenübermittlung in Drittländer:</strong> Mit der Nutzung
            von Shopify werden Ihre Daten auch auf Servern in Drittländern
            (insbesondere USA und Kanada) verarbeitet. Die Übermittlung erfolgt
            auf Grundlage von Standardvertragsklauseln gemäß Art. 46 DSGVO.
          </p>

          <p className="mt-2 text-base leading-relaxed! text-body-color">
            <strong>Speicherdauer:</strong> Die für die Bestellabwicklung
            erforderlichen Daten werden entsprechend der gesetzlichen
            Aufbewahrungsfristen (in der Regel 10 Jahre für steuerrelevante
            Unterlagen) gespeichert.
          </p> */}

          <h2 className=" my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl ">
            5. Ihre Rechte nach DSGVO
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Sie haben das Recht auf:
          </p>
          <ul className="list-inside list-disc pl-4">
            <li className="text-base leading-relaxed! text-body-color">
              Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)
            </li>
            <li className="text-base leading-relaxed! text-body-color">
              Berichtigung unrichtiger oder unvollständiger Daten (Art. 16
              DSGVO)
            </li>
            <li className="text-base leading-relaxed! text-body-color">
              Löschung Ihrer Daten (Art. 17 DSGVO)
            </li>
            <li className="text-base leading-relaxed! text-body-color">
              Einschränkung der Verarbeitung (Art. 18 DSGVO)
            </li>
            <li className="text-base leading-relaxed! text-body-color">
              Datenübertragbarkeit (Art. 20 DSGVO)
            </li>
            <li className="text-base leading-relaxed! text-body-color">
              Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)
            </li>
          </ul>
          <p className="text-base leading-relaxed! text-body-color">
            Bitte wenden Sie sich dazu an:{" "}
            <Link
              href="mailto:info@formenwerkstatt.de"
              className="font-bold text-primary"
            >
              info@formenwerkstatt.de
            </Link>
          </p>

          <h2 className=" my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl ">
            6. Kontakt & Verantwortliche Stelle
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            <strong>Formenwerkstatt GmbH</strong>
            <br />
            Sudetenstraße 105 64385 Reichelsheim
            <br />
            E-Mail:{" "}
            <Link
              href="mailto:info@formenwerkstatt.de"
              className="font-bold text-primary"
            >
              info@formenwerkstatt.de
            </Link>
          </p>

          <p className="mt-12 text-base leading-relaxed! text-body-color">
            <strong>Letzte Aktualisierung:</strong> 12.05.2025
          </p>
        </div>
      </section>
    </>
  );
}
