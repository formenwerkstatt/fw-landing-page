import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Datenschutz | Formenwerkstatt`,
  description: "Datenschutzerklärung | Formenwerkstatt",
  alternates: {
    canonical: "https://www.formenwerkstatt.de/datenschutz",
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

export default function Datenschutz() {
  return (
    <>
      <Breadcrumb pageName="Datenschutz" description="" />

      <section id="impressum" className="mb-24">
        <div className="container">
          <h3 className=" mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Allgemeines
          </h3>
          <p className="mb-8 text-base !leading-relaxed text-body-color">
            Diese Datenschutzerklärung soll die Nutzer dieser Website über die
            Art, den Umfang und den Zweck der Erhebung und Verwendung
            personenbezogener Daten durch den Websitebetreiber, die
            Formenwerkstatt GmbH, informieren.
          </p>
          <h3 className=" mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Zugriffsdaten
          </h3>
          <p className="mb-8 text-base !leading-relaxed text-body-color">
            Bei Besuch der Seiten werden automatisch Informationen in
            sogenannten Server-Log-Files erhoben und ggf. verarbeitet.
          </p>
          <h3 className=" mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Diese Informationen umfassen:
          </h3>
          <ul>
            <li className="text-base !leading-relaxed text-body-color">
              IP-Adresse, Browsertyp-/version sowie Betriebssystem des
              zugreifenden Rechners
            </li>
            <li className="text-base !leading-relaxed text-body-color">
              Ggf. Referrer URL (Quelle/Verweis, von welcher Sie auf diese Seite
              gelangten)
            </li>
            <li className="text-base !leading-relaxed text-body-color">
              Uhrzeit der Anfrage
            </li>
            <li className="mb-8 text-base !leading-relaxed text-body-color">
              Welche Daten in welchem Umfang abgerufen wurden
            </li>
          </ul>
          <p className="mb-8 text-base !leading-relaxed text-body-color">
            Diese Daten können von uns nicht bestimmten Personen zugeordnet
            werden. Eine Zusammenführung dieser Daten mit anderen Quellen
            erfolgt nicht. Die Speicherung der Daten erfolgt auf Servern unseres
            Webhosters, Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
            USA (vercel.com).
          </p>
          <h3 className=" mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Auskunftsrecht, Widerruf, Löschung
          </h3>
          <p className=" text-base !leading-relaxed text-body-color">
            Als Nutzer haben Sie das recht, die von uns über Sie gespeicherten
            Informationen einzuholen, sowie die weitere Nutzung zu bestimmen.
            Wünschen Sie eine Korrektur, Sperrung, Löschung oder Auskunft Ihrer
            Daten, oder den Widerruf einer erteilten Einwilligung zur
            Datenverarbeitung, wenden Sie sich bitte an
            <span className="font-bold"> info@formenwerkstatt.de</span>
          </p>
        </div>
      </section>
    </>
  );
}
