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
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl">
              ALLGEMEINE GESCHÄFTSBEDINGUNGEN
            </h1>
            <p className="text-lg text-body-color mt-2">(Modell- und Formenbau)</p>
            <p className="text-base text-body-color">
              Der Formenwerkstatt GmbH, Sudetenstraße 105, D-64385 Reichelsheim
            </p>
            <p className="text-base text-body-color font-semibold mt-4">
              Stand 01.01.2025
            </p>
          </div>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 1 Geltung der Bestimmungen
          </h2>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            1. Unsere Lieferungen, Leistungen und Angebote erfolgen ausschließlich aufgrund der vorliegenden
            Allgemeinen Geschäftsbedingungen. Diese gelten somit auch für alle künftigen
            Geschäftsbeziehungen, auch wenn sie nicht nochmals ausdrücklich vereinbart werden.
            Durch die Annahme unseres Angebotes erklärt der Besteller sein Einverständnis mit diesen
            Allgemeinen Geschäftsbedingungen. Wird unser Angebot vom Besteller abweichend von
            unseren Bedingungen bestätigt, so gelten auch dann nur unsere Allgemeinen Geschäftsbedingungen,
            selbst wenn wir nicht widersprechen. Abweichungen gelten nur, wenn sie von
            uns ausdrücklich schriftlich anerkannt worden sind. Ist der Besteller mit vorstehender
            Handhabung nicht einverstanden, so hat er sofort in einem besonderen Schreiben ausdrücklich
            darauf hinzuweisen. Wir behalten uns für diesen Fall vor, das Angebot zurückzuziehen,
            ohne dass uns gegenüber Ansprüche irgendwelcher Art geltend gemacht werden
            können.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            2. Unsere Allgemeinen Geschäftsbedingungen gelten auch dann, wenn wir in Kenntnis entgegenstehender
            oder von unseren Allgemeinen Geschäftsbedingungen abweichender Bedingungen
            eines Kunden die Lieferungen oder Leistungen an den Kunden vorbehaltlos ausführen.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            3. Unsere Allgemeinen Geschäftsbedingungen gelten nur gegenüber Unternehmen im Sinne
            von § 310 Abs. 1 BGB.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 2 Angebot und Vertragsschluss
          </h2>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            1. Unsere Angebote sind freibleibend und unverbindlich, sofern sich aus der
            Auftragsbestätigung nichts anderes ergibt.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            2. Zeichnungen, Abbildungen, Maße, Gewichte oder sonstige Leistungsdaten können – soweit
            der Wert unserer Leistung hierdurch nicht negativ beeinflusst wird – aus betrieblichen
            Erfordernissen im notwendigen Umfang geändert werden. Eine solche Änderung ist nur
            ausgeschlossen, wenn diese Angaben ausdrücklich als verbindlich gekennzeichnet
            werden.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            3. An Abbildungen, Zeichnungen, Kalkulationen, Kostenanschlägen und sonstigen Unterlagen
            behalten wir uns die Eigentums- und Urheberrechte vor; sie dürfen Dritten nicht zugänglich
            gemacht werden. Dies gilt insbesondere für solche Unterlagen, die als `&lsquo;vertraulich`&rsquo; bezeichnet sind. Vor ihrer Weitergabe an Dritte bedarf der Kunde unserer ausdrücklichen Zustimmung.
            Zu Angeboten gehörende Abbildungen, Zeichnungen und sonstige Unterlagen
            sind, wenn uns der Auftrag nicht erteilt wird, auf Verlangen unverzüglich zurückzugeben.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            4. Für offensichtliche Irrtümer und Abweichungen in Preislisten, Rechnungen oder Bestätigungen behalten wir uns Berichtigung und Nachberechnung vor. Die Gefahr von Übermittlungsfehlern trägt der Besteller.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            5. Soweit der Besteller Unterlagen wie Zeichnungen, Muster, Modelle oder dergleichen zu
            liefern hat, haftet der Besteller für inhaltliche Richtigkeit, technische Durchführbarkeit und
            Vollständigkeit; wir sind nicht verpflichtet, eine Überprüfung durchzuführen. Der Besteller
            haftet dafür, dass durch Verwendung solcher Unterlagen Rechte Dritter nicht verletzt werden
            und hat uns von allen durch eine derartige Rechtsverletzung entstehenden Nachteile
            klag- und schadlos zu halten.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 3 Preise und Zahlung
          </h2>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            1. Sofern nichts Gegenteiliges schriftlich vereinbart wird, gelten unsere Preise ab Werk ausschließlich Verpackung und zuzüglich Mehrwertsteuer in jeweils gültiger Höhe. Kosten der Verpackung werden gesondert in Rechnung gestellt.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            2. Die Zahlung des Kaufpreises hat ausschließlich auf die bekannten Konten zu erfolgen. Der Abzug von Skonto ist nur bei schriftlicher besonderer Vereinbarung zulässig. Sämtliche Berechnungen erfolgen in EURO.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            3. Die vereinbarten Preise gelten nur für den jeweils abgeschlossenen Auftrag. Teillieferungen sind zulässig.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            4. Die Gefahr geht auf den Besteller über, sobald die Formenwerkstatt GmbH die Ware zur Verfügung gestellt hat und dies dem Besteller anzeigt, es sei denn, was anderes ist vereinbart.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            5. Sofern nichts anderes vereinbart, ist der Kaufpreis mit Rechnungszugang fällig und innerhalb von 14 Tagen ohne Abzug zahlbar.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            6. Ist nichts anderes schriftlich vereinbart, dann gelten für Werkzeugbauaufträge folgende Zahlungsbedingungen: 1/3 nach Bestellung sofort netto, 1/3 nach erster Lieferung sofort netto, 1/3 nach Fertigstellung 30 Tage netto.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            7. Bei Zahlungsverzug werden Zinsen in Höhe von 7 % über dem Basiszinssatz der Europäischen Zentralbank verlangt. Der Nachweis eines höheren Verzugsschadens bleibt vorbehalten. Treten nach Annahme des Auftrages Zweifel an der Kreditwürdigkeit des Bestellers, so werden alle ausstehenden Forderungen in Bar fällig.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            8. Nachträgliche Änderungen der bereits in Auftrag gegebenen Werkzeugen, Formen oder Teilen, die darauf beruhen, dass der Besteller nach Auftragserteilung neue Informationen oder Änderungswünsche mitteilt, sind gesondert zu vergüten, darüber hinaus verlängern diese Veränderungen unsere Lieferzeit in angemessenem Umfang. Ggf. ist eine erneute Auftragsbestätigung zu aktivieren. Die Mehrkosten bleiben von §3 Abs. 6 unberührt und sind sofort fällig. Stornierung bereits erteilter Aufträge werden dem Besteller die bisherigen entstandenen Kosten, wie Materialbeschaffung, Lohnkosten, Drittlieferanten, in Rechnung gestellt.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 4 Lieferung
          </h2>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            1. Lieferzeiten sind in der Regel nur annähernd und unverbindlich. Eine verbindliche Lieferzeit muss ausdrücklich, schriftlich und zu jedem Auftrag separat erfolgen. Sobald die Ware zur Übergabe bereit gestellt wurde gilt der Liefertermin eingehalten.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            2. Vereinbarte Lieferfristen verlängern sich um die Dauer der Verzögerung sobald Umstände eintreffen die Außerhalb des Einflussbereichs der Formenwerkstatt GmbH liegen, insbesondere durch höhere Gewalt, behördliche Eingriffe, Streiks, Versandschwierigkeiten vom Vorlieferanten, Produktionsstörungen, Nachträgliche Änderungen und Übermittlung falscher Daten vom Besteller.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            3. Dem Besteller entsteht kein Anspruch auf Schadensersatz durch §4 Absatz 2, es sei denn es liegt eine grobe Fahrlässigkeit der Geschäftsleitung oder eines Mitarbeiters der Formenwerkstatt GmbH vor.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 5 Eigentumsvorbehalt
          </h2>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            1. Die gelieferte Ware bleibt bis zur vollständigen Bezahlung sämtlicher Forderungen aus der Geschäftsverbindung zwischen dem Besteller und dem Lieferer Eigentum des Lieferers. Der Besteller ist zur Weiterveräußerung der Vorbehaltsware im normalen Geschäftsverkehr berechtigt. Eine Verpfändung oder Sicherheitsübereignung ist ihm jedoch nicht gestattet. Der Besteller ist verpflichtet, die Rechte des Lieferers beim Weiterverkauf der Vorbehaltsware auf Kredit zu sichern. Darüber hinaus tritt der Besteller schon jetzt seine Forderungen aus der Weiterveräußerung der Vorbehaltsware an den Lieferer ab. Der Lieferer nimmt diese Abtretung an.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            2. Auf Verlangen hat der Besteller die zur Einziehung erforderlichen Angaben über die abgetretenen Forderungen an den Lieferer zu machen und den Schuldnern die Abtretung mitzuteilen. Wird die Vorbehaltsware zusammen mit anderen Waren, und zwar gleichgültig in welchen Zustand, weiter veräußert, so gilt die in Absatz 2 vereinbarte Vorausabtretung nur in Höhe des Wertes der Vorbehaltsware, die zusammen mit den anderen Waren Gegenstand des Liefergeschäftes ist. Übersteigen die dem Lieferer nach den vorstehenden Bestimmungen zustehenden Sicherungen die zu sichernden Forderungen um 20 % so wird der Lieferer auf Verlangen des Besteller im Einzelfall vollbezahlte Lieferungen nach seiner Wahl freigeben.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 6 Gewährleistung
          </h2>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            1. Der Besteller hat die gelieferten Werke bzw. Teile und Individuell angeforderten Eigenschaften unverzüglich zu untersuchen und gegebenenfalls Mängel ebenso unverzüglich zu rügen. Ist dies ein Handelsgeschäft gelten die §§ 377, 378 HGB. Ergibt sich aus den vorstehenden §§ 377, 378 HBG nichts anderes, gilt der Vertragsgegenstand spätestens 2 Wochen nach Meldung der Abnahmebereitschaft als abgenommen.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            2. Soweit beim Gefahrenübergang ein Mangel des Liefergegenstandes vorliegt, sind wir nach unserer Wahl zur Nacherfüllung durch Nachbesserung oder Neuherstellung berechtigt. Der Besteller ist nicht berechtigt, bei Gefahr im Verzug oder bei besonderer Eilbedürftigkeit etwaige Mängel selbst zu beseitigen. Nimmt der Besteller dennoch derartige Arbeiten und Mangelbeseitigungsversuche selbst vor, sind Gewährleistungsansprüche gegen uns ausgeschlossen. Für weitergehende Ansprüche gilt VIII dieser Bedingungen.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            3. In jedem Fall ist Voraussetzung für etwaige weitere Gewährleistungsansprüche gegen uns, dass uns zuvor eine angemessene Frist zur Nacherfüllung gesetzt wurde. Alle weiteren Ansprüche aus Gewährleistung, insbesondere auf Ersatz von Schäden die nicht am Vertragsgegenstand entstanden sind, bestimmen sich nach VIII dieser Bedingungen. § 476 BGB findet keine Anwendung.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            4. Die Gewährleistung erlischt, auch bei sachgemäßer Anwendung, sobald der Besteller Eigenschaftsangaben über Materialauswahl und Wärmebehandlungsverfahren vorgibt. Sonderregelungen über Gewährleistung muss zu jedem Auftrag separat und schriftlich erfolgen.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 7 Freigabe
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            1. Sobald Konstruktionen und Technische Angaben zur Freigabe an den Besteller versendet wurden, so ist der Besteller dazu verpflichtet das Werk oder die Sache auf Funktion und Eigenschaft zu prüfen. Je nach Dauer der Freigabe wird sich die Lieferzeit ggf. anpassen und bei Verzögerung hat dies der Besteller zu Verantworten. Wird die Sache freigegeben so bestätigt der Besteller die Funktionseigenschaften und die Erfüllung seiner Anforderungen.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 8 Druckaufträge
          </h2>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            1. Bei telefonisch übermittelten Texten für Gravuren etc. kann keine Gewähr übernommen werden. Das Risiko trägt der Auftraggeber. Wir empfehlen, die Texte grundsätzlich schriftlich zu übermitteln. Mit der Auftragserteilung für Werbeaufdrucke stellt uns der Kunde von etwaigen Ansprüchen Dritter wegen Verletzung von Kennzeichnungsrechten oder anderen Rechten Dritter frei, die infolge der Ausführung des Auftrages etwa gegen uns geltend gemacht werden, und gestattet uns die Benutzung etwaiger eigener Schutzrechte, soweit sie Gegenstand des auftragsgemäßen Werbeaufdrucks sind. Die Ablehnung oder der Rücktritt von Aufträgen, die eine Schutzrechtsverletzung mit sich bringen, bleibt vorbehalten.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            Bei Bestellung mit Werbeanbringung behalten wir uns aus technischen Gründen eine 5%-ige Mehr- oder Minderlieferung vor. Ware mit Druck oder Individualisierung sind vom Umtausch ausgeschlossen.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 9 Haftungsbeschränkung
          </h2>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            1. Wegen der Verletzung von nicht wesentlichen Vertragspflichten, insbesondere bei Vertragsverhandlungen oder aufgrund Verzugs wird die Haftung ausgeschlossen, es sei denn es liegt grobe Fahrlässigkeit oder Vorsatz bei uns oder unseren Erfüllungsgehilfen vor.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            2. Das vorstehende gilt nicht für Ansprüche des Bestellers aus dem Produkthaftungsgesetz sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 10 Schutzrechte / Patentrechte
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            1. Die Formenwerkstatt GmbH haftet nicht für die Verletzung fremder Schutzrechte für einen Liefergegenstand, der nach Zeichnungen, Entwicklungen oder sonstigen Angaben des Bestellers gefertigt ist oder für eine von ihm nicht vorhersehbare Anwendung. Der Besteller hat die Formenwerkstatt GmbH in diesem Fall von Ansprüchen Dritter freizustellen. Der Besteller haftet dafür das Patentrechte oder Schutzrechte Dritter nicht verletzt werden.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 11 Geheimhaltungspflicht
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            1. Alle Angaben, Zeichnungen, Modelle usw. die dem Besteller für die Herstellung des Liefergegenstandes vom Lieferer überlassen werden, sind als Geschäftsgeheimnisse zu betrachten und vertraulich zu behandeln. Sie dürfen vom Besteller nicht für andere Zwecke verwendet, vervielfältigt oder Dritten zugänglich gemacht werden. Auf Verlangen sind sie dem Lieferer samt allen Abschriften oder Vervielfältigungen unverzüglich herauszugeben. Der Besteller haftet für jeden Schaden, der dem Lieferer aus der Verletzung einer dieser Pflichten erwächst.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 12 Pfandrecht
          </h2>
          <p className="text-base !leading-relaxed text-body-color">
            1. Der Kunde räumt dem Anbieter ein Pfandrecht an den gelieferten Waren und sonstigen Gegenständen ein, bis alle Forderungen aus dem Vertragsverhältnis, einschließlich etwaiger Nebenforderungen, vollständig beglichen sind.
          </p>

          <h2 className="my-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl">
            § 13 Gerichtsstand
          </h2>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            1. Erfüllungsort für beide Vertragsteile ist Reichelsheim, sofern nichts andere schriftliches vereinbart wurde.
          </p>
          <p className="text-base !leading-relaxed text-body-color mb-4">
            2. Der Vertrag unterliegt deutschem Recht.
          </p>
          <p className="text-base !leading-relaxed text-body-color">
            3. Sollten einzelne dieser Bestimmungen unwirksam sein, so berührt das die Gültigkeit der übrigen Bestimmungen nicht.
          </p>

          <h2 className="my-4 text-xl font-bold text-center  text-black dark:text-white sm:text-2xl lg:text-xl">
            Kontaktinformationen
          </h2>
          <p className="text-base text-center !leading-relaxed text-body-color">
            Fragen zu den allgemeinen Geschäftsbedingungen richten Sie bitte an
            uns unter{" "}
            <Link
              href="mailto:kontakt@formenwerkstatt.de"
              className="font-bold text-primary"
            >
              info@formenwerkstatt.de
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
              info@formenwerkstatt.de
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
            <strong>Letzte Aktualisierung:</strong> 01.01.2025
          </p>
        </div>
      </section>
    </>
  );
}