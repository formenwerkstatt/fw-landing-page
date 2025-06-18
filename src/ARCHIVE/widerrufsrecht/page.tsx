import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Widerrufsrecht | Formenwerkstatt`,
  description: "Widerrufsrecht | Formenwerkstatt",
  alternates: {
    canonical: "https://formenwerkstatt.de/widerrufsrecht",
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

export default function Widerrufsrecht() {
  return (
    <>
      <Breadcrumb pageName="Widerrufsrecht" description="" />

      <section id="widerrufsrecht" className="mb-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            RÜCKGABEBEDINGUNGEN
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Um für eine Rückgabe berechtigt zu sein, muss sich der Artikel in
            demselben Zustand befinden, in dem du ihn erhalten hast, ungetragen,
            ungenutzt und mit Etiketten versehen sein und sich in der
            Originalverpackung befinden. Außerdem benötigst du den Beleg oder
            einen anderen Kaufnachweis.
          </p>
          <p className="text-base leading-relaxed! text-body-color">
            Um eine Rückgabe einzuleiten, kannst du uns unter{" "}
            <Link
              href="mailto:kontakt@formenwerkstatt.de"
              className="font-bold text-primary"
            >
              kontakt@formenwerkstatt.de
            </Link>{" "}
            kontaktieren. Bitte beachte, dass Rückgaben an die folgende Adresse
            gesendet werden müssen:
          </p>
          <p className="text-base leading-relaxed! text-body-color">
            <strong>Formenwerkstatt GmbH</strong>
            <br />
            Sudetenstraße 105
            <br />
            64385 Reichelsheim
          </p>
          <p className="text-base leading-relaxed! text-body-color">
            Wenn deine Rückgabe akzeptiert wird, erhältst du von uns ein
            Rücksendeetikett sowie Anweisungen, wie und wohin du das Paket
            versenden sollst. Artikel, die an uns zurückgesendet werden, ohne
            dass zuvor eine Rückgabe angefordert wurde, werden nicht akzeptiert.
          </p>
          <p className="text-base leading-relaxed! text-body-color">
            Bei Fragen zur Rückgabe kannst du uns jederzeit unter{" "}
            <Link
              href="mailto:kontakt@formenwerkstatt.de"
              className="font-bold text-primary"
            >
              kontakt@formenwerkstatt.de
            </Link>{" "}
            kontaktieren.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            SCHÄDEN UND PROBLEME
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Bitte überprüfe deine Bestellung bei Erhalt und kontaktiere uns
            sofort, wenn der Artikel defekt oder beschädigt ist oder wenn du
            einen falschen Artikel erhalten hast, damit wir das Problem
            auswerten und beheben können.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            AUSNAHMEN / NICHT FÜR EINE RÜCKGABE BERECHTIGTE ARTIKEL
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Bestimmte Artikel können nicht zurückgegeben werden, z.&nbsp;B.
            verderbliche Waren (z.&nbsp;B. Lebensmittel, Blumen oder Pflanzen),
            Sonderanfertigungen (z.&nbsp;B. Sonderbestellungen oder
            personalisierte Artikel) und persönliche Pflegeprodukte (z.&nbsp;B.
            Schönheitsprodukte). Wir akzeptieren auch keine Rückgaben von
            gefährlichen Materialien, entflammbaren Flüssigkeiten oder Gasen.
            Bitte setze dich mit uns in Verbindung, wenn du Fragen oder Bedenken
            zu einem speziellen Artikel hast.
          </p>
          <p className="text-base leading-relaxed! text-body-color">
            Leider können wir keine Rückgaben von Angebotsartikeln oder
            Gutscheinen akzeptieren.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            UMTAUSCH
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Die Rückgabe des erhaltenen Artikels ist der schnellste Weg, um den
            gewünschten Artikel zu erhalten. Wenn die Rückgabe akzeptiert wird,
            kannst du den neuen Artikel in einem separaten Kauf erwerben.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            EUROPÄISCHE UNION - 14-TÄGIGE WIDERRUFSFRIST
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Ungeachtet dessen hast du das Recht, deine Bestellung innerhalb von
            14&nbsp;Tagen ohne Angabe von Gründen zu stornieren oder
            zurückzugeben, wenn die Ware in die Europäische Union versendet
            wird. Wie oben beschrieben, muss sich der Artikel in demselben
            Zustand befinden, in dem du ihn erhalten hast, ungetragen, ungenutzt
            und mit Etiketten versehen sein und sich in der Originalverpackung
            befinden. Außerdem benötigst du den Beleg oder einen anderen
            Kaufnachweis.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            RÜCKERSTATTUNGEN
          </h2>
          <p className="text-base leading-relaxed! text-body-color">
            Wir werden dich benachrichtigen, sobald wir deine Rückgabe erhalten
            und geprüft haben, und dir mitteilen, ob die Rückerstattung
            genehmigt wurde oder nicht. Im Falle einer Genehmigung erhältst du
            innerhalb von 10&nbsp;Werktagen eine automatische Rückerstattung auf
            deine ursprüngliche Zahlungsmethode. Bitte denke daran, dass es
            einige Zeit dauern kann, bis deine Bank oder dein
            Kreditkartenunternehmen die Erstattung bearbeitet und verbucht hat.
          </p>
          <p className="text-base leading-relaxed! text-body-color">
            Wenn mehr als 15&nbsp;Werktage vergangen sind, seit wir deine
            Rückgabe genehmigt haben, kontaktiere uns bitte unter{" "}
            <Link
              href="mailto:kontakt@formenwerkstatt.de"
              className="font-bold text-primary"
            >
              kontakt@formenwerkstatt.de
            </Link>
            .
          </p>

          <p className="mt-12 text-base leading-relaxed! text-body-color">
            <strong>Letzte Aktualisierung:</strong> 06.03.2024
          </p>
        </div>
      </section>
    </>
  );
}
