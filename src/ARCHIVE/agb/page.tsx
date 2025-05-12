import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Allgemeine Geschäftsbedingungen | Formenwerkstatt`,
  description: "Allgemeine Geschäftsbedingungen | Formenwerkstatt",
  alternates: {
    canonical: "https://formenwerkstatt.de/agb",
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

export default function Agb() {
  return (
    <>
      <Breadcrumb pageName="Allgemeine Geschäftsbedingungen" description="" />

      <section id="agb" className="mb-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            ÜBERBLICK
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            {` Diese Website wird betrieben von FW-Shop. Auf der gesamten Website
            beziehen sich die Begriffe "wir", "uns" und "unser" auf FW-Shop.
            FW-Shop bietet Ihnen, dem Benutzer, diese Website einschließlich
            aller auf dieser Website verfügbaren Informationen, Tools und
            Dienste unter der Bedingung an, dass Sie alle hier aufgeführten
            Bedingungen, Richtlinien und Hinweise akzeptieren.`}
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            {`Indem Sie unsere Site besuchen und/oder etwas von uns kaufen, nehmen
            Sie an unserem "Service" teil und erklären sich mit den folgenden
            Geschäftsbedingungen ("allgemeinen Geschäftsbedingungen",
            "Bedingungen") einverstanden, einschließlich der zusätzlichen
            Geschäftsbedingungen und Richtlinien, auf die hierin verwiesen wird
            und/oder die per Hyperlink verfügbar sind.`}
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            1. ONLINE-SHOP-BEDINGUNGEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Indem Sie diesen allgemeinen Geschäftsbedingungen zustimmen,
            erklären Sie, dass Sie in Ihrem Wohnsitzstaat oder -provinz
            mindestens volljährig sind oder dass Sie in Ihrem Wohnsitzstaat oder
            -provinz volljährig sind und uns Ihr Einverständnis gegeben haben,
            dass Ihre minderjährigen Angehörigen diese Website nutzen dürfen.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            Sie dürfen unsere Produkte nicht für illegale oder nicht
            autorisierte Zwecke verwenden, noch dürfen Sie bei der Nutzung des
            Dienstes gegen die Gesetze Ihrer Gerichtsbarkeit (einschließlich,
            aber nicht beschränkt auf Urheberrechtsgesetze) verstoßen.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            Sie dürfen keine Würmer oder Viren oder sonstigen Code
            zerstörerischer Natur übertragen.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            Ein Verstoß oder eine Nichteinhaltung einer der Bedingungen führt
            zur sofortigen Kündigung Ihrer Dienste.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            2. ALLGEMEINE BEDINGUNGEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Wir behalten uns das Recht vor, den Service jederzeit und aus
            beliebigem Grund zu verweigern.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            Sie verstehen, dass Ihre Inhalte (ohne Kreditkarteninformationen)
            unverschlüsselt übertragen werden können und (a) Übertragungen über
            verschiedene Netzwerke und (b) Änderungen zur Anpassung an die
            technischen Anforderungen der Verbindungsnetzwerke oder -geräte
            erforderlich sein können. Kreditkarteninformationen werden bei der
            Übertragung über Netzwerke immer verschlüsselt.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            3. GENAUIGKEIT, VOLLSTÄNDIGKEIT UND AKTUALITÄT DER INFORMATIONEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Wir sind nicht verantwortlich für die Richtigkeit, Vollständigkeit
            oder Aktualität der auf dieser Site bereitgestellten Informationen.
            Die Materialien auf dieser Site dienen ausschließlich der
            allgemeinen Information und sollten nicht als alleinige Grundlage
            für Entscheidungen verwendet werden, ohne primäre, genauere,
            vollständigere oder aktuellere Informationsquellen zu konsultieren.
            Das Vertrauen auf die Materialien dieser Site erfolgt auf eigene
            Gefahr.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            4. ÄNDERUNGEN DES DIENSTES UND DER PREISE
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Die Preise unserer Produkte können ohne Vorankündigung geändert
            werden.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            Wir behalten uns das Recht vor, den Dienst (oder Teile bzw. Inhalte
            davon) jederzeit und ohne Vorankündigung zu ändern oder
            einzustellen.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            5. PRODUKTE ODER DIENSTLEISTUNGEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Bestimmte Produkte oder Dienstleistungen sind möglicherweise
            ausschließlich online über die Website verfügbar. Diese Produkte
            oder Dienstleistungen sind möglicherweise nur in begrenzten Mengen
            verfügbar und können nur gemäß unserer Rückerstattungsrichtlinie
            zurückgegeben oder umgetauscht werden:{" "}
            <Link href="/widerrufsrecht" className="font-bold text-primary">
              Rückerstattungsrichtlinie
            </Link>
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            6. GENAUIGKEIT DER RECHNUNGS- UND KONTOINFORMATIONEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Wir behalten uns das Recht vor, jede von Ihnen bei uns aufgegebene
            Bestellung abzulehnen. Wir können nach eigenem Ermessen die pro
            Person, pro Haushalt oder pro Bestellung gekauften Mengen begrenzen
            oder stornieren.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            7. OPTIONALE TOOLS
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Wir gewähren Ihnen möglicherweise Zugriff auf Tools von
            Drittanbietern, die wir weder überwachen noch kontrollieren oder auf
            die wir Einfluss haben.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            8. LINKS VON DRITTANBIETERN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Bestimmte Inhalte, Produkte und Dienste, die über unseren Dienst
            verfügbar sind, können Materialien von Drittanbietern enthalten.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            9. BENUTZERKOMMENTARE, FEEDBACK UND ANDERE EINREICHUNGEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Wenn Sie auf unsere Aufforderung hin bestimmte Einsendungen
            (beispielsweise Wettbewerbsbeiträge) oder ohne eine solche
            Aufforderung kreative Ideen, Anregungen, Vorschläge, Pläne oder
            andere Materialien einsenden, erklären Sie sich damit einverstanden,
            dass wir Kommentare, die Sie uns übermitteln, jederzeit ohne
            Einschränkung bearbeiten, kopieren, veröffentlichen, verteilen,
            übersetzen und anderweitig in jedem Medium verwenden können.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            10. PERSONENBEZOGENE DATEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Ihre Übermittlung personenbezogener Daten über den Shop unterliegt
            unserer Datenschutzrichtlinie, die Sie hier einsehen können:{" "}
            <Link href="/datenschutz" className="font-bold text-primary">
              Datenschutzrichtlinie
            </Link>
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            11. FEHLER, UNGENAUIGKEITEN UND AUSLASSUNGEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Gelegentlich kann es vorkommen, dass Informationen auf unserer Site
            oder im Service Tippfehler, Ungenauigkeiten oder Auslassungen
            enthalten, die sich auf Produktbeschreibungen, Preise,
            Werbeaktionen, Angebote, Produktversandkosten, Transportzeiten und
            Verfügbarkeit beziehen können.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            12. VERBOTENE VERWENDUNGEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Zusätzlich zu anderen Verboten, die in den allgemeinen
            Geschäftsbedingungen dargelegt sind, ist Ihnen die Nutzung der Site
            oder ihrer Inhalte untersagt für:
          </p>
          <ul className="list-inside list-disc pl-4">
            <li className="text-base !leading-relaxed text-body-color">
              Rechtswidrige Zwecke
            </li>
            <li className="text-base !leading-relaxed text-body-color">
              Andere zur Durchführung oder Teilnahme an rechtswidrigen
              Handlungen aufzufordern
            </li>
            <li className="text-base !leading-relaxed text-body-color">
              Um gegen internationale, bundesstaatliche, provinzielle oder
              staatliche Bestimmungen zu verstoßen
            </li>
          </ul>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            13. HAFTUNGSAUSSCHLUSS; HAFTUNGSBESCHRÄNKUNG
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Wir übernehmen keine Garantie oder Gewährleistung dafür, dass Ihre
            Nutzung unseres Dienstes ohne Unterbrechungen, rechtzeitig, sicher
            oder fehlerfrei erfolgt.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            14. SCHADENSERSATZ
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Sie verpflichten sich, FW-Shop und unsere Muttergesellschaften,
            Tochtergesellschaften, Partner, leitenden Angestellten,
            Geschäftsführer, Vertreter, Auftragnehmer, Lizenzgeber,
            Dienstleister, Subunternehmer, Lieferanten, Praktikanten und
            Mitarbeiter schadlos zu halten von allen Ansprüchen und Forderungen
            Dritter.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            15. SALVATORISCHE KLAUSEL
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Sollte eine Bestimmung dieser allgemeinen Geschäftsbedingungen für
            gesetzeswidrig, ungültig oder nicht durchsetzbar befunden werden, so
            ist diese Bestimmung dennoch im größtmöglichen, nach geltendem Recht
            zulässigen Umfang durchsetzbar.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            16. KÜNDIGUNG
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Die vor dem Kündigungstermin entstandenen Verpflichtungen und
            Haftungen der Parteien bleiben für alle Zwecke auch nach der
            Kündigung dieser Vereinbarung bestehen.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            17. GESAMTE VEREINBARUNG
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Das Versäumnis unsererseits, ein Recht oder eine Bestimmung dieser
            allgemeinen Geschäftsbedingungen auszuüben oder durchzusetzen,
            stellt keinen Verzicht auf das entsprechende Recht oder die
            Bestimmung dar.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            18. GELTENDES RECHT
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Diese Servicebedingungen und alle separaten Vereinbarungen, durch
            die wir Ihnen Dienste bereitstellen, unterliegen den Gesetzen von
            Germany.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            19. ÄNDERUNGEN DER ALLGEMEINEN GESCHÄFTSBEDINGUNGEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Sie können die aktuellste Version der allgemeinen
            Geschäftsbedingungen jederzeit auf dieser Seite einsehen.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            20. KONTAKTINFORMATIONEN
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            Fragen zu den allgemeinen Geschäftsbedingungen richten Sie bitte an
            uns unter{" "}
            <Link
              href="mailto:kontakt@formenwerkstatt.de"
              className="font-bold text-primary"
            >
              kontakt@formenwerkstatt.de
            </Link>
            .
          </p>

          <p className="text-base !leading-relaxed text-body-color">
            <strong>Formenwerkstatt GmbH</strong>
            <br />
            Sudetenstraße 105
            <br />
            64385 Reichelsheim
            <br />
            E-Mail:{" "}
            <Link
              href="mailto:kontakt@formenwerkstatt.de"
              className="font-bold text-primary"
            >
              kontakt@formenwerkstatt.de
            </Link>
            <br />
            Telefon: +49 (0) 6164 913017
          </p>

          <p className="text-base !leading-relaxed text-body-color">
            Registergericht: Amtsgericht Darmstadt
            <br />
            Registernummer: HRB 92531
            <br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            DE291556852
          </p>

          <p className="mt-12 text-base !leading-relaxed text-body-color">
            <strong>Letzte Aktualisierung:</strong> 06.03.2024
          </p>
        </div>
      </section>
    </>
  );
}
