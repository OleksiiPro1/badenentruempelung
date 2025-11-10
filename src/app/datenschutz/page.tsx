// app/datenschutz/page.tsx
import type { Metadata } from "next";
import styles from "./styles.module.css";

/** Brand (Raumfrei Wien) */
const ACCENT   = "#D97500";
const BLACK    = "#000000";
const WHITE    = "#FFFFFF";
const GRAY_TXT = "#6B7280";
const GRAY_BR  = "#D1D5DB";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Raumfrei Wien",
  description:
    "Datenschutzerklärung von Raumfrei Wien: Informationen zur Verarbeitung personenbezogener Daten, Rechtsgrundlagen, Speicherdauer, Betroffenenrechte und Kontakt.",
  alternates: { canonical: "https://raumfrei-wien.at/datenschutz" },
};

// Компонент-обёртка
function DatenschutzHTML({ html }: { html: string }) {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function DatenschutzPage() {
  // === ВСТАВЬ СВОЙ HTML НИЖЕ ===
  const html = `
    

    <h2 class="adsimple-113075834">Datenschutzerklärung</h2>
<h2 id="einleitung-ueberblick" class="adsimple-113075834">Einleitung und Überblick</h2>
<p>Wir haben diese Datenschutzerklärung (Fassung 04.11.2025-113075834) verfasst, um Ihnen gemäß der Vorgaben der <a class="adsimple-113075834" href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=113075834#d1e2269-1-1" target="_blank" rel="noopener">Datenschutz-Grundverordnung (EU) 2016/679</a> und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche &#8211; und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) &#8211; verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.<br />
<strong class="adsimple-113075834">Kurz gesagt:</strong> Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.</p>
<p>Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische Fachbegriffe. Diese Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie möglich beschreiben. Soweit es der Transparenz förderlich ist, werden technische <strong class="adsimple-113075834">Begriffe leserfreundlich erklärt</strong>, Links zu weiterführenden Informationen geboten und <strong class="adsimple-113075834">Grafiken</strong> zum Einsatz gebracht. Wir informieren damit in klarer und einfacher Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man möglichst knappe, unklare und juristisch-technische Erklärungen abgibt, so wie sie im Internet oft Standard sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden die folgenden Erläuterungen interessant und informativ und vielleicht ist die eine oder andere Information dabei, die Sie noch nicht kannten.<br />
Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum genannte verantwortliche Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich auch im Impressum.</p>
<h2 id="anwendungsbereich" class="adsimple-113075834">Anwendungsbereich</h2>
<p>Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person. Die Verarbeitung personenbezogener Daten sorgt dafür, dass wir unsere Dienstleistungen und Produkte anbieten und abrechnen können, sei es online oder offline. Der Anwendungsbereich dieser Datenschutzerklärung umfasst:</p>
<ul class="adsimple-113075834">
<li class="adsimple-113075834">alle Onlineauftritte (Websites, Onlineshops), die wir betreiben</li>
<li class="adsimple-113075834">Social Media Auftritte und E-Mail-Kommunikation</li>
<li class="adsimple-113075834">mobile Apps für Smartphones und andere Geräte</li>
</ul>
<p>
<strong class="adsimple-113075834">Kurz gesagt:</strong> Die Datenschutzerklärung gilt für alle Bereiche, in denen personenbezogene Daten im Unternehmen über die genannten Kanäle strukturiert verarbeitet werden. Sollten wir außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen eintreten, werden wir Sie gegebenenfalls gesondert informieren.</p>
<h2 id="rechtsgrundlagen" class="adsimple-113075834">Rechtsgrundlagen</h2>
<p>In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten zu verarbeiten.<br />
Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU können Sie selbstverständlich online auf EUR-Lex, dem Zugang zum EU-Recht, unter <a class="adsimple-113075834" href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679">https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679</a> nachlesen.</p>
<p>Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>
<ol>
<li class="adsimple-113075834">
<strong class="adsimple-113075834">Einwilligung</strong> (Artikel 6 Absatz 1 lit. a DSGVO): Sie haben uns Ihre Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.</li>
<li class="adsimple-113075834">
<strong class="adsimple-113075834">Vertrag</strong> (Artikel 6 Absatz 1 lit. b DSGVO): Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir Ihre Daten. Wenn wir zum Beispiel einen Kaufvertrag mit Ihnen abschließen, benötigen wir vorab personenbezogene Informationen.</li>
<li class="adsimple-113075834">
<strong class="adsimple-113075834">Rechtliche Verpflichtung</strong> (Artikel 6 Absatz 1 lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen für die Buchhaltung aufzuheben. Diese enthalten in der Regel personenbezogene Daten.</li>
<li class="adsimple-113075834">
<strong class="adsimple-113075834">Berechtigte Interessen</strong> (Artikel 6 Absatz 1 lit. f DSGVO): Im Falle berechtigter Interessen, die Ihre Grundrechte nicht einschränken, behalten wir uns die Verarbeitung personenbezogener Daten vor. Wir müssen zum Beispiel gewisse Daten verarbeiten, um unsere Website sicher und wirtschaftlich effizient betreiben zu können. Diese Verarbeitung ist somit ein berechtigtes Interesse.</li>
</ol>
<p>Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen Interesse und Ausübung öffentlicher Gewalt sowie dem Schutz lebenswichtiger Interessen treten bei uns in der Regel nicht auf. Soweit eine solche Rechtsgrundlage doch einschlägig sein sollte, wird diese an der entsprechenden Stelle ausgewiesen.</p>
<p>Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:</p>
<ul class="adsimple-113075834">
<li class="adsimple-113075834">In <strong class="adsimple-113075834">Österreich</strong> ist dies das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (<strong class="adsimple-113075834">Datenschutzgesetz</strong>), kurz <strong class="adsimple-113075834">DSG</strong>.</li>
<li class="adsimple-113075834">In <strong class="adsimple-113075834">Deutschland</strong> gilt das <strong class="adsimple-113075834">Bundesdatenschutzgesetz</strong>, kurz<strong class="adsimple-113075834"> BDSG</strong>.</li>
</ul>
<p>Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in den folgenden Abschnitten darüber.</p>
<h2 id="kontaktdaten-verantwortliche" class="adsimple-113075834">Kontaktdaten des Verantwortlichen</h2>
<p>Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie nachfolgend die Kontaktdaten des Verantwortlichen gemäß Artikel 4 Absatz 7 EU-Datenschutz-Grundverordnung (DSGVO):<br />
<span class="adsimple-113075834" style="font-weight: 400">Musterfirma GmbH<br />
Max Mustermann<br />
Musterstraße 47, 12312 Musterstadt, Österreich</span>
<br />
<span style="font-weight: 400">Vertretungsberechtigt: Markus Mustermann</span>
<br />
E-Mail: <a href="mailto:mail@musterfirma.at">mail@musterfirma.at</a>
<br />
Telefon: <a href="tel:+43%204711%2012345">+43 4711 12345</a>
<br />
Impressum: <a href="https://www.musterfirma.at/impressum/">https://www.musterfirma.at/impressum/</a>
</p>
<h2 id="speicherdauer" class="adsimple-113075834">Speicherdauer</h2>
<p>Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die Datenverarbeitung nicht mehr vorhanden ist. In einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch nach Wegfall des ursprüngliches Zwecks zu speichern, zum Beispiel zu Zwecken der Buchführung.</p>
<p>Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung widerrufen, werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung besteht, gelöscht.</p>
<p>Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben.</p>
<h2 id="rechte-dsgvo" class="adsimple-113075834">Rechte laut Datenschutz-Grundverordnung</h2>
<p>Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen, damit es zu einer fairen und transparenten Verarbeitung von Daten kommt:</p>
<ul class="adsimple-113075834">
<li class="adsimple-113075834">Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen verarbeiten. Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten und die folgenden Informationen zu erfahren:
<ul class="adsimple-113075834">
<li class="adsimple-113075834">zu welchem Zweck wir die Verarbeitung durchführen;</li>
<li class="adsimple-113075834">die Kategorien, also die Arten von Daten, die verarbeitet werden;</li>
<li class="adsimple-113075834">wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie die Sicherheit garantiert werden kann;</li>
<li class="adsimple-113075834">wie lange die Daten gespeichert werden;</li>
<li class="adsimple-113075834">das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der Verarbeitung und dem Widerspruchsrecht gegen die Verarbeitung;</li>
<li class="adsimple-113075834">dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen Behörden finden Sie weiter unten);</li>
<li class="adsimple-113075834">die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;</li>
<li class="adsimple-113075834">ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um zu einem persönlichen Profil von Ihnen zu gelangen.</li>
</ul>
</li>
<li class="adsimple-113075834">Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet, dass wir Daten richtig stellen müssen, falls Sie Fehler finden.</li>
<li class="adsimple-113075834">Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden“), was konkret bedeutet, dass Sie die Löschung Ihrer Daten verlangen dürfen.</li>
<li class="adsimple-113075834">Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung, was bedeutet, dass wir die Daten nur mehr speichern dürfen aber nicht weiter verwenden.</li>
<li class="adsimple-113075834">Sie haben laut Artikel 20 DSGVO das Recht auf Datenübertragbarkeit, was bedeutet, dass wir Ihnen auf Anfrage Ihre Daten in einem gängigen Format zur Verfügung stellen.</li>
<li class="adsimple-113075834">Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine Änderung der Verarbeitung mit sich bringt.
<ul class="adsimple-113075834">
<li class="adsimple-113075834">Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches Interesse, Ausübung öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse) basiert, können Sie gegen die Verarbeitung Widerspruch einlegen. Wir prüfen danach so rasch wie möglich, ob wir diesem Widerspruch rechtlich nachkommen können.</li>
<li class="adsimple-113075834">Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Direktmarketing verwenden.</li>
<li class="adsimple-113075834">Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Profiling verwenden.</li>
</ul>
</li>
<li class="adsimple-113075834">Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung unterworfen zu werden.</li>
<li class="adsimple-113075834">Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt, Sie können sich jederzeit bei der Datenschutzbehörde beschweren, wenn Sie der Meinung sind, dass die Datenverarbeitung von personenbezogenen Daten gegen die DSGVO verstößt.</li>
</ul>
<p>
<strong class="adsimple-113075834">Kurz gesagt:</strong> Sie haben Rechte &#8211; zögern Sie nicht, die oben gelistete verantwortliche Stelle bei uns zu kontaktieren!</p>
<p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. Diese ist für Österreich die Datenschutzbehörde, deren Website Sie unter <a class="adsimple-113075834" href="https://www.dsb.gv.at/?tid=113075834" target="_blank" rel="noopener">https://www.dsb.gv.at/</a> finden. In Deutschland gibt es für jedes Bundesland einen Datenschutzbeauftragten. Für nähere Informationen können Sie sich an die <a class="adsimple-113075834" href="https://www.bfdi.bund.de/DE/Home/home_node.html" target="_blank" rel="noopener">Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</a> wenden. Für unser Unternehmen ist die folgende lokale Datenschutzbehörde zuständig:</p>
<h2 id="webhosting-einleitung" class="adsimple-113075834">Webhosting Einleitung</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-113075834">Webhosting Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: professionelles Hosting der Website und Absicherung des Betriebs<br />
&#x1f4d3; Verarbeitete Daten: IP-Adresse, Zeitpunkt des Websitebesuchs, verwendeter Browser und weitere Daten. Mehr Details dazu finden Sie weiter unten bzw. beim jeweils eingesetzten Webhosting Provider.<br />
&#x1f4c5; Speicherdauer: abhängig vom jeweiligen Provider, aber in der Regel 2 Wochen<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-113075834">Was ist Webhosting?</h3>
<p>Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen &#8211; auch personenbezogene Daten &#8211; automatisch erstellt und gespeichert, so auch auf dieser Website. Diese Daten sollten möglichst sparsam und nur mit Begründung verarbeitet werden. Mit Website meinen wir übrigens die Gesamtheit aller Webseiten auf einer Domain, d.h. alles von der Startseite (Homepage) bis hin zur aller letzten Unterseite (wie dieser hier). Mit Domain meinen wir zum Beispiel beispiel.de oder musterbeispiel.com.</p>
<p>Wenn Sie eine Website auf einem Computer, Tablet oder Smartphone ansehen möchten, verwenden Sie dafür ein Programm, das sich Webbrowser nennt. Sie kennen vermutlich einige Webbrowser beim Namen: Google Chrome, Microsoft Edge, Mozilla Firefox und Apple Safari. Wir sagen kurz Browser oder Webbrowser dazu.</p>
<p>Um die Website anzuzeigen, muss sich der Browser zu einem anderen Computer verbinden, wo der Code der Website gespeichert ist: dem Webserver. Der Betrieb eines Webservers ist eine komplizierte und aufwendige Aufgabe, weswegen dies in der Regel von professionellen Anbietern, den Providern, übernommen wird. Diese bieten Webhosting an und sorgen damit für eine verlässliche und fehlerfreie Speicherung der Daten von Websites. Eine ganze Menge Fachbegriffe, aber bitte bleiben Sie dran, es wird noch besser!</p>
<p>Bei der Verbindungsaufnahme des Browsers auf Ihrem Computer (Desktop, Laptop, Tablet oder Smartphone) und während der Datenübertragung zu und vom Webserver kann es zu einer Verarbeitung personenbezogener Daten kommen. Einerseits speichert Ihr Computer Daten, andererseits muss auch der Webserver Daten eine Zeit lang speichern, um einen ordentlichen Betrieb zu gewährleisten.</p>
<p>Ein Bild sagt mehr als tausend Worte, daher zeigt folgende Grafik zur Veranschaulichung das Zusammenspiel zwischen Browser, dem Internet und dem Hosting-Provider.</p>
<p>
<img role="img" src="https://www.adsimple.at/wp-content/uploads/2018/03/browser-und-webserver.svg" alt="Browser und Webserver" width="100%" />
</p>
<h3 class="adsimple-113075834">Warum verarbeiten wir personenbezogene Daten?</h3>
<p>Die Zwecke der Datenverarbeitung sind:</p>
<ol>
<li class="adsimple-113075834">Professionelles Hosting der Website und Absicherung des Betriebs</li>
<li class="adsimple-113075834">zur Aufrechterhaltung der Betriebs- und IT-Sicherheit</li>
<li class="adsimple-113075834">Anonyme Auswertung des Zugriffsverhaltens zur Verbesserung unseres Angebots und ggf. zur Strafverfolgung bzw. Verfolgung von Ansprüchen</li>
</ol>
<h3 class="adsimple-113075834">Welche Daten werden verarbeitet?</h3>
<p>Auch während Sie unsere Website jetzt gerade besuchen, speichert unser Webserver, das ist der Computer auf dem diese Webseite gespeichert ist, in der Regel automatisch Daten wie</p>
<ul class="adsimple-113075834">
<li class="adsimple-113075834">die komplette Internetadresse (URL) der aufgerufenen Webseite</li>
<li class="adsimple-113075834">Browser und Browserversion (z. B. Chrome 87)</li>
<li class="adsimple-113075834">das verwendete Betriebssystem (z. B. Windows 10)</li>
<li class="adsimple-113075834">die Adresse (URL) der zuvor besuchten Seite (Referrer URL) (z. B. <a class="adsimple-113075834" href="https://www.beispielquellsite.de/vondabinichgekommen/" target="_blank" rel="follow noopener">https://www.beispielquellsite.de/vondabinichgekommen/</a>)</li>
<li class="adsimple-113075834">den Hostnamen und die IP-Adresse des Geräts von welchem aus zugegriffen wird (z. B. COMPUTERNAME und 194.23.43.121)</li>
<li class="adsimple-113075834">Datum und Uhrzeit</li>
<li class="adsimple-113075834">in Dateien, den sogenannten Webserver-Logfiles</li>
</ul>
<h3 class="adsimple-113075834">Wie lange werden Daten gespeichert?</h3>
<p>In der Regel werden die oben genannten Daten zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten von Behörden eingesehen werden.</p>
<p>
<strong class="adsimple-113075834">Kurz gesagt:</strong> Ihr Besuch wird durch unseren Provider (Firma, die unsere Website auf speziellen Computern (Servern) laufen lässt), protokolliert, aber wir geben Ihre Daten nicht ohne Zustimmung weiter!</p>
<h3 class="adsimple-113075834">Rechtsgrundlage</h3>
<p>Die Rechtmäßigkeit der Verarbeitung personenbezogener Daten im Rahmen des Webhosting ergibt sich aus Art. 6 Abs. 1 lit. f DSGVO (Wahrung der berechtigten Interessen), denn die Nutzung von professionellem Hosting bei einem Provider ist notwendig, um das Unternehmen im Internet sicher und nutzerfreundlich präsentieren und Angriffe und Forderungen hieraus gegebenenfalls verfolgen zu können.</p>
<p>Zwischen uns und dem Hosting-Provider besteht in der Regel ein Vertrag über die Auftragsverarbeitung gemäß Art. 28 f. DSGVO, der die Einhaltung von Datenschutz gewährleistet und Datensicherheit garantiert.</p>
<h2 id="web-analytics-einleitung" class="adsimple-113075834">Web Analytics Einleitung</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-113075834">Web Analytics Datenschutzerklärung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Auswertung der Besucherinformationen zur Optimierung des Webangebots.<br />
&#x1f4d3; Verarbeitete Daten: Zugriffsstatistiken, die Daten wie Standorte der Zugriffe, Gerätedaten, Zugriffsdauer und Zeitpunkt, Navigationsverhalten, Klickverhalten und IP-Adressen enthalten. Mehr Details dazu finden Sie beim jeweils eingesetzten Web Analytics Tool.<br />
&#x1f4c5; Speicherdauer: abhängig vom eingesetzten Web-Analytics-Tool<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-113075834">Was ist Web Analytics?</h3>
<p>Wir verwenden auf unserer Website Software zur Auswertung des Verhaltens der Website-Besucher, kurz Web Analytics oder Web-Analyse genannt. Dabei werden Daten gesammelt, die der jeweilige Analytic-Tool-Anbieter (auch Trackingtool genannt) speichert, verwaltet und verarbeitet. Mit Hilfe der Daten werden Analysen über das Nutzerverhalten auf unserer Website erstellt und uns als Websitebetreiber zur Verfügung gestellt. Zusätzlich bieten die meisten Tools verschiedene Testmöglichkeiten an. So können wir etwa testen, welche Angebote oder Inhalte bei unseren Besuchern am besten ankommen. Dafür zeigen wir Ihnen für einen begrenzten Zeitabschnitt zwei verschiedene Angebote. Nach dem Test (sogenannter A/B-Test) wissen wir, welches Produkt bzw. welcher Inhalt unsere Websitebesucher interessanter finden. Für solche Testverfahren, wie auch für andere Analytics-Verfahren, können auch Userprofile erstellt werden und die Daten in Cookies gespeichert werden.</p>
<h3 class="adsimple-113075834">Warum betreiben wir Web Analytics?</h3>
<p>Mit unserer Website haben wir ein klares Ziel vor Augen: wir wollen für unsere Branche das beste Webangebot auf dem Markt liefern. Um dieses Ziel zu erreichen, wollen wir einerseits das beste und interessanteste Angebot bieten und andererseits darauf achten, dass Sie sich auf unserer Website rundum wohlfühlen. Mit Hilfe von Webanalyse-Tools können wir das Verhalten unserer Websitebesucher genauer unter die Lupe nehmen und dann entsprechend unser Webangebot für Sie und uns verbessern. So können wir beispielsweise erkennen wie alt unsere Besucher durchschnittlich sind, woher sie kommen, wann unsere Website am meisten besucht wird oder welche Inhalte oder Produkte besonders beliebt sind. All diese Informationen helfen uns die Website zu optimieren und somit bestens an Ihre Bedürfnisse, Interessen und Wünsche anzupassen.</p>
<h3 class="adsimple-113075834">Welche Daten werden verarbeitet?</h3>
<p>Welche Daten genau gespeichert werden, hängt natürlich von den verwendeten Analyse-Tools ab. Doch in der Regel wird zum Beispiel gespeichert, welche Inhalte Sie auf unserer Website ansehen, auf welche Buttons oder Links Sie klicken, wann Sie eine Seite aufrufen, welchen Browser sie verwenden, mit welchem Gerät (PC, Tablet, Smartphone usw.) Sie die Website besuchen oder welches Computersystem Sie verwenden. Wenn Sie damit einverstanden waren, dass auch Standortdaten erhoben werden dürfen, können auch diese durch den Webanalyse-Tool-Anbieter verarbeitet werden.</p>
<p>Zudem wird auch Ihre IP-Adresse gespeichert. Gemäß der Datenschutz-Grundverordnung (DSGVO) sind IP-Adressen personenbezogene Daten. Ihre IP-Adresse wird allerdings in der Regel pseudonymisiert (also in unkenntlicher und gekürzter Form) gespeichert. Für den Zweck der Tests, der Webanalyse und der Weboptimierung werden grundsätzlich keine direkten Daten, wie etwa Ihr Name, Ihr Alter, Ihre Adresse oder Ihre E-Mail-Adresse gespeichert. All diese Daten werden, sofern sie erhoben werden, pseudonymisiert gespeichert. So können Sie als Person nicht identifiziert werden.</p>
<p>Das folgende Beispiel zeigt schematisch die Funktionsweise von Google Analytics als Beispiel für client-basiertes Webtracking mit Java-Script-Code.</p>
<p>
<img role="img" src="https://www.adsimple.at/wp-content/uploads/2021/04/google-analytics-dataflow.svg" alt="Schematischer Datenfluss bei Google Analytics" width="100%" />
</p>
<p>Wie lange die jeweiligen Daten gespeichert werden, hängt immer vom Anbieter ab. Manche Cookies speichern Daten nur für ein paar Minuten bzw. bis Sie die Website wieder verlassen, andere Cookies können Daten über mehrere Jahre speichern.</p>
<h3 class="adsimple-113075834">
<span class="adsimple-113075834" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Wo und wie lange werden Daten gespeichert?&quot;}" data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}">Dauer der Datenverarbeitung</span>
</h3>
<p>Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben. Generell verarbeiten wir personenbezogene Daten nur so lange wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist. Wenn es, wie zum Beispiel im Fall von Buchhaltung, gesetzlich vorgeschrieben ist, kann diese Speicherdauer auch überschritten werden.</p>
<h3 class="adsimple-113075834">Widerspruchsrecht</h3>
<p>Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies bzw. Drittanbietern zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum Beispiel können Sie auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen.</p>
<h3 class="adsimple-113075834">Rechtsgrundlage</h3>
<p>Der Einsatz von Web-Analytics setzt Ihre Einwilligung voraus, welche wir mit unserem Cookie Popup eingeholt haben. Diese Einwilligung stellt laut<strong class="adsimple-113075834"> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Web-Analytics Tools vorkommen kann, dar.</p>
<p>Zusätzlich zur Einwilligung besteht von unserer Seite ein berechtigtes Interesse daran, das Verhalten der Websitebesucher zu analysieren und so unser Angebot technisch und wirtschaftlich zu verbessern. Mit Hilfe von Web-Analytics erkennen wir Fehler der Website, können Attacken identifizieren und die Wirtschaftlichkeit verbessern. Die Rechtsgrundlage dafür ist <strong class="adsimple-113075834">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>. Wir setzen die Tools gleichwohl nur ein, soweit sie eine Einwilligung erteilt haben.</p>
<p>Da bei Web-Analytics-Tools Cookies zum Einsatz kommen, empfehlen wir Ihnen auch das Lesen unserer allgemeinen Datenschutzerklärung zu Cookies. Um zu erfahren, welche Daten von Ihnen genau gespeichert und verarbeitet werden, sollten Sie die Datenschutzerklärungen der jeweiligen Tools durchlesen.</p>
<p>Informationen zu speziellen Web-Analytics-Tools, erhalten Sie &#8211; sofern vorhanden &#8211; in den folgenden Abschnitten.</p>
<h2 id="social-media-einleitung" class="adsimple-113075834">Social Media Einleitung</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-113075834">Social Media Datenschutzerklärung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Darstellung und Optimierung unserer Serviceleistung, Kontakt zu Besuchern, Interessenten u.a., Werbung<br />
&#x1f4d3; Verarbeitete Daten: Daten wie etwa Telefonnummern, E-Mail-Adressen, Kontaktdaten, Daten zum Nutzerverhalten, Informationen zu Ihrem Gerät und Ihre IP-Adresse.<br />
Mehr Details dazu finden Sie beim jeweils eingesetzten Social-Media-Tool.<br />
&#x1f4c5; Speicherdauer: abhängig von den verwendeten Social-Media-Plattformen<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-113075834">Was ist Social Media?</h3>
<p>Zusätzlich zu unserer Website sind wir auch in diversen Social-Media-Plattformen aktiv. Dabei können Daten von Usern verarbeitet werden, damit wir gezielt User, die sich für uns interessieren, über die sozialen Netzwerke ansprechen können. Darüber hinaus können auch Elemente einer Social-Media-Plattform direkt in unsere Website eingebettet sein. Das ist etwa der Fall, wenn Sie einen sogenannten Social-Button auf unserer Website anklicken und direkt zu unserem Social-Media-Auftritt weitergeleitet werden. Als sogenannte Sozialen Medien oder Social Media werden Websites und Apps bezeichnet, über die angemeldete Mitglieder Inhalte produzieren, Inhalte offen oder in bestimmten Gruppen austauschen und sich mit anderen Mitgliedern vernetzen können.</p>
<h3 class="adsimple-113075834">Warum nutzen wir Social Media?</h3>
<p>Seit Jahren sind Social-Media-Plattformen der Ort, wo Menschen online kommunizieren und in Kontakt treten. Mit unseren Social-Media-Auftritten können wir unsere Produkte und Dienstleistungen Interessenten näherbringen. Die auf unserer Website eingebundenen Social-Media-Elemente helfen Ihnen, schnell und ohne Komplikationen zu unseren Social-Media-Inhalten wechseln können.</p>
<p>Die Daten, die durch Ihre Nutzung eines Social-Media-Kanals gespeichert und verarbeitet werden, haben in erster Linie den Zweck, Webanalysen durchführen zu können. Ziel dieser Analysen ist es, genauere und personenbezogene Marketing- und Werbestrategien entwickeln zu können. Abhängig von Ihrem Verhalten auf einer Social-Media-Plattform, können mit Hilfe der ausgewerteten Daten, passende Rückschlüsse auf Ihre Interessen getroffen werden und sogenannte Userprofile erstellt werden. So ist es den Plattformen auch möglich, Ihnen maßgeschneiderte Werbeanzeigen zu präsentieren. Meistens werden für diesen Zweck Cookies in Ihrem Browser gesetzt, die Daten zu Ihrem Nutzungsverhalten speichern.</p>
<p>Wir gehen in der Regel davon aus, dass wir datenschutzrechtlich verantwortlich bleiben, auch wenn wir Dienste einer Social-Media-Plattform nutzen. Der Europäische Gerichtshof hat jedoch entschieden, dass in bestimmten Fällen der Betreiber der Social-Media-Plattform zusammen mit uns gemeinsam verantwortlich im Sinne des Art. 26 DSGVO sein kann. Soweit dies der Fall ist, weisen wir gesondert darauf hin und arbeiten auf Grundlage einer diesbezüglichen Vereinbarung. Das Wesentliche der Vereinbarung ist dann weiter unten bei der betroffenen Plattform wiedergegeben.</p>
<p>Bitte beachten Sie, dass bei der Nutzung der Social-Media-Plattformen oder unserer eingebauten Elemente auch Daten von Ihnen außerhalb der Europäischen Union verarbeitet werden können, da viele Social-Media-Kanäle, beispielsweise Facebook oder Twitter, amerikanische Unternehmen sind. Dadurch können Sie möglicherweise Ihre Rechte in Bezug auf Ihre personenbezogenen Daten nicht mehr so leicht einfordern bzw. durchsetzen.</p>
<h3 class="adsimple-113075834">Welche Daten werden verarbeitet?</h3>
<p>Welche Daten genau gespeichert und verarbeitet werden, hängt vom jeweiligen Anbieter der Social-Media-Plattform ab. Aber für gewöhnlich handelt es sich um Daten wie etwa Telefonnummern, E-Mailadressen, Daten, die Sie in ein Kontaktformular eingeben, Nutzerdaten wie zum Beispiel welche Buttons Sie klicken, wen Sie liken oder wem folgen, wann Sie welche Seiten besucht haben, Informationen zu Ihrem Gerät und Ihre IP-Adresse. Die meisten dieser Daten werden in Cookies gespeichert. Speziell wenn Sie selbst ein Profil bei dem besuchten Social-Media-Kanal haben und angemeldet sind, können Daten mit Ihrem Profil verknüpft werden.</p>
<p>Alle Daten, die über eine Social-Media-Plattform erhoben werden, werden auch auf den Servern der Anbieter gespeichert. Somit haben auch nur die Anbieter Zugang zu den Daten und können Ihnen die passenden Auskünfte geben bzw. Änderungen vornehmen.</p>
<p>Wenn Sie genau wissen wollen, welche Daten bei den Social-Media-Anbietern gespeichert und verarbeitet werden und wie sie der Datenverarbeitung widersprechen können, sollten Sie die jeweilige Datenschutzerklärung des Unternehmens sorgfältig durchlesen. Auch wenn Sie zur Datenspeicherung und Datenverarbeitung Fragen haben oder entsprechende Rechte geltend machen wollen, empfehlen wir Ihnen, sich direkt an den Anbieter wenden.</p>
<h3 class="adsimple-113075834">
<span class="adsimple-113075834" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Wo und wie lange werden Daten gespeichert?&quot;}" data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}">Dauer der Datenverarbeitung</span>
</h3>
<p>Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben. Beispielsweise speichert die Social-Media-Plattform Facebook Daten, bis sie für den eigenen Zweck nicht mehr benötigt werden. Kundendaten, die mit den eigenen Userdaten abgeglichen werden, werden aber schon innerhalb von zwei Tagen gelöscht. Generell verarbeiten wir personenbezogene Daten nur so lange wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist. Wenn es, wie zum Beispiel im Fall von Buchhaltung, gesetzlich vorgeschrieben ist, kann diese Speicherdauer auch überschritten werden.</p>
<h3 class="adsimple-113075834">Widerspruchsrecht</h3>
<p>Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies bzw. Drittanbietern wie eingebettete Social-Media-Elemente zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum Beispiel können Sie auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen.</p>
<p>Da bei Social-Media-Tools Cookies zum Einsatz kommen können, empfehlen wir Ihnen auch unsere allgemeine Datenschutzerklärung über Cookies. Um zu erfahren, welche Daten von Ihnen genau gespeichert und verarbeitet werden, sollten Sie die Datenschutzerklärungen der jeweiligen Tools durchlesen.</p>
<h3 class="adsimple-113075834">Rechtsgrundlage</h3>
<p>Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Social-Media-Elemente verarbeitet und gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der Datenverarbeitung <strong class="adsimple-113075834">(Art. 6 Abs. 1 lit. a DSGVO)</strong>. Grundsätzlich werden Ihre Daten bei Vorliegen einer Einwilligung auch auf Grundlage unseres berechtigten Interesses <strong class="adsimple-113075834">(Art. 6 Abs. 1 lit. f DSGVO)</strong> an einer schnellen und guten Kommunikation mit Ihnen oder anderen Kunden und Geschäftspartnern gespeichert und verarbeitet. Wir setzen die Tools gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben. Die meisten Social-Media-Plattformen setzen auch Cookies in Ihrem Browser, um Daten zu speichern. Darum empfehlen wir Ihnen, unseren Datenschutztext über Cookies genau durchzulesen und die Datenschutzerklärung oder die Cookie-Richtlinien des jeweiligen Dienstanbieters anzusehen.</p>
<p>Informationen zu speziellen Social-Media-Plattformen erfahren Sie &#8211; sofern vorhanden &#8211; in den folgenden Abschnitten.</p>
<h2 id="cookie-consent-management-platform-einleitung" class="adsimple-113075834">Cookie Consent Management Platform Einleitung</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-113075834">Cookie Consent Management Platform Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Website Besucher<br />
&#x1f91d; Zweck: Einholung und Verwaltung der Zustimmung zu bestimmten Cookies und somit dem Einsatz bestimmter Tools<br />
&#x1f4d3; Verarbeitete Daten: Daten zur Verwaltung der eingestellten Cookie-Einstellungen wie IP-Adresse, Zeitpunkt der Zustimmung, Art der Zustimmung, einzelne Zustimmungen. Mehr Details dazu finden Sie beim jeweils eingesetzten Tool.<br />
&#x1f4c5; Speicherdauer: Hängt vom eingesetzten Tool ab, man muss sich auf Zeiträume von mehreren Jahren einstellen<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit.f DSGVO (berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-113075834">Was ist eine Cookie Consent Manangement Platform?</h3>
<p>Wir verwenden auf unserer Website eine Consent Management Platform (CMP) Software, die uns und Ihnen den korrekten und sicheren Umgang mit verwendeten Skripten und Cookies erleichtert. Die Software erstellt automatisch ein Cookie-Popup, scannt und kontrolliert alle Skripts und Cookies, bietet eine datenschutzrechtlich notwendige Cookie-Einwilligung für Sie und hilft uns und Ihnen den Überblick über alle Cookies zu behalten. Bei den meisten Cookie Consent Management Tools werden alle vorhandenen Cookies identifiziert und kategorisiert. Sie als Websitebesucher entscheiden dann selbst, ob und welche Skripte und Cookies Sie zulassen oder nicht zulassen. Die folgende Grafik stellt die Beziehung zwischen Browser, Webserver und CMP dar.</p>
<p>
<img role="img" src="https://www.adsimple.at/wp-content/uploads/2021/03/consent-management-platform-overview.svg" alt="Consent Management Platform Überblick" width="100%" />
</p>
<h3 class="adsimple-113075834">Warum verwenden wir ein Cookie-Management-Tool?</h3>
<p>Unser Ziel ist es, Ihnen im Bereich Datenschutz die bestmögliche Transparenz zu bieten. Zudem sind wir dazu auch rechtlich verpflichtet. Wir wollen Sie über alle Tools und alle Cookies, die Daten von Ihnen speichern und verarbeiten können, so gut wie möglich aufklären. Es ist auch Ihr Recht, selbst zu entscheiden, welche Cookies Sie akzeptieren und welche nicht. Um Ihnen dieses Recht einzuräumen, müssen wir zuerst genau wissen, welche Cookies überhaupt auf unserer Website gelandet sind. Dank eines Cookie-Management-Tools, welches die Website regelmäßig nach allen vorhandenen Cookies scannt, wissen wir über alle Cookies Bescheid und können Ihnen DSGVO-konform Auskunft darüber geben. Über das Einwilligungssystem können Sie dann Cookies akzeptieren oder ablehnen.</p>
<h3 class="adsimple-113075834">Welche Daten werden verarbeitet?</h3>
<p>Im Rahmen unseres Cookie-Management-Tools können Sie jedes einzelnen Cookies selbst verwalten und haben die vollständige Kontrolle über die Speicherung und Verarbeitung Ihrer Daten. Die Erklärung Ihrer Einwilligung wird gespeichert, damit wir Sie nicht bei jedem neuen Besuch unserer Website abfragen müssen und wir Ihre Einwilligung, wenn gesetzlich nötig, auch nachweisen können. Gespeichert wird dies entweder in einem Opt-in-Cookie oder auf einem Server. Je nach Anbieter des Cookie-Management-Tools variiert Speicherdauer Ihrer Cookie-Einwilligung. Meist werden diese Daten (etwa pseudonyme User-ID, Einwilligungs-Zeitpunkt, Detailangaben zu den Cookie-Kategorien oder Tools, Browser, Gerätinformationen) bis zu zwei Jahren gespeichert.</p>
<h3 class="adsimple-113075834">Dauer der Datenverarbeitung</h3>
<p>Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben. Generell verarbeiten wir personenbezogene Daten nur so lange wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist. Daten, die in Cookies gespeichert werden, werden unterschiedlich lange gespeichert. Manche Cookies werden bereits nach dem Verlassen der Website wieder gelöscht, andere können über einige Jahre in Ihrem Browser gespeichert sein. Die genaue Dauer der Datenverarbeitung hängt vom verwendeten Tool ab, meistens sollten Sie sich auf eine Speicherdauer von mehreren Jahren einstellen. In den jeweiligen Datenschutzerklärungen der einzelnen Anbieter erhalten Sie in der Regel genaue Informationen über die Dauer der Datenverarbeitung.</p>
<h3 class="adsimple-113075834">Widerspruchsrecht</h3>
<p>Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum Beispiel können Sie auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen.</p>
<p>Informationen zu speziellen Cookie-Management-Tools, erfahren Sie &#8211; sofern vorhanden &#8211; in den folgenden Abschnitten.</p>
<h3 class="adsimple-113075834">Rechtsgrundlage</h3>
<p>Wenn Sie Cookies zustimmen, werden über diese Cookies personenbezogene Daten von Ihnen verarbeitet und gespeichert. Falls wir durch Ihre <strong class="adsimple-113075834">Einwilligung</strong> (Artikel 6 Abs. 1 lit. a DSGVO) Cookies verwenden dürfen, ist diese Einwilligung auch gleichzeitig die Rechtsgrundlage für die Verwendung von Cookies bzw. die Verarbeitung Ihrer Daten. Um die Einwilligung zu Cookies verwalten zu können und Ihnen die Einwilligung ermöglichen zu können, kommt eine Cookie-Consent-Management-Platform-Software zum Einsatz. Der Einsatz dieser Software ermöglicht uns, die Website auf effiziente Weise rechtskonform zu betreiben, was ein <strong class="adsimple-113075834">berechtigtes Interesse</strong> (Artikel 6 Abs. 1 lit. f DSGVO) darstellt.</p>
<h2 id="webdesign-einleitung" class="adsimple-113075834">Webdesign Einleitung</h2>
<table border="1" cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-113075834">Webdesign Datenschutzerklärung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Verbesserung der Nutzererfahrung<br />
&#x1f4d3; Verarbeitete Daten: Welche Daten verarbeitet werden, hängt stark von den verwendeten Diensten ab. Meist handelt es sich etwa um IP-Adresse, technische Daten, Spracheinstellungen,  Browserversion, Bildschirmauflösung und Name des Browsers. Mehr Details dazu finden Sie bei den jeweils eingesetzten Webdesign-Tools.<br />
&#x1f4c5; Speicherdauer: abhängig von den eingesetzten Tools<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="adsimple-113075834">Was ist Webdesign?</h3>
<p>Wir verwenden auf unserer Website verschiedene Tools, die unserem Webdesign dienen. Bei Webdesign geht es nicht, wie oft angenommen, nur darum, dass unsere Website hübsch aussieht, sondern auch um Funktionalität und Leistung. Aber natürlich ist die passende Optik einer Website auch eines der großen Ziele professionellen Webdesigns. Webdesign ist ein Teilbereich des Mediendesigns und beschäftigt sich sowohl mit der visuellen als auch der strukturellen und funktionalen Gestaltung einer Website. Ziel ist es mit Hilfe von Webdesign Ihre Erfahrung auf unserer Website zu verbessern. Im Webdesign-Jargon spricht man in diesem Zusammenhang von User-Experience (UX) und Usability. Unter User Experience versteht man alle Eindrücke und Erlebnisse, die der Websitebesucher auf einer Website erfährt. Ein Unterpunkt der User Experience ist die Usability. Dabei geht es um die Nutzerfreundlichkeit einer Website. Wert gelegt wird hier vor allem darauf, dass Inhalte, Unterseiten oder Produkte klar strukturiert sind und Sie leicht und schnell finden, wonach Sie suchen. Um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten, verwenden wir auch sogenannte Webdesign-Tools von Drittanbietern. Unter die Kategorie „Webdesign“ fallen in dieser Datenschutzerklärung also alle Dienste, die unsere Website gestalterisch verbessern. Das können beispielsweise Schriftarten, diverse Plugins oder andere eingebundene Webdesign-Funktionen sein.</p>
<h3 class="adsimple-113075834">Warum verwenden wir Webdesign-Tools?</h3>
<p>Wie Sie Informationen auf einer Website aufnehmen, hängt sehr stark von der Struktur, der Funktionalität und der visuellen Wahrnehmung der Website ab. Daher wurde auch für uns ein gutes und professionelles Webdesign immer wichtiger. Wir arbeiten ständig an der Verbesserung unserer Website und sehen dies auch als erweiterte Dienstleistung für Sie als Websitebesucher. Weiters hat eine schöne und funktionierende Website auch wirtschaftliche Vorteile für uns. Schließlich werden Sie uns nur besuchen und unsere Angebote in Anspruch nehmen, wenn Sie sich rundum wohl fühlen.</p>
<h3 class="adsimple-113075834">Welche Daten werden durch Webdesign-Tools gespeichert?</h3>
<p>Wenn Sie unsere Website besuchen, können Webdesign-Elemente in unseren Seiten eingebunden sein, die auch Daten verarbeiten können. Um welche Daten es sich genau handelt, hängt natürlich stark von den verwendeten Tools ab. Weiter unter sehen Sie genau, welche Tools wir für unsere Website verwenden. Wir empfehlen Ihnen für nähere Informationen über die Datenverarbeitung auch die jeweilige Datenschutzerklärung der verwendeten Tools durchzulesen. Meistens erfahren Sie dort, welche Daten verarbeitet werden, ob Cookies eingesetzt werden und wie lange die Daten aufbewahrt werden. Durch Schriftarten wie etwa Google Fonts werden beispielsweise auch Informationen wie Spracheinstellungen, IP-Adresse, Version des Browsers, Bildschirmauflösung des Browsers und Name des Browsers automatisch an die Google-Server übertragen.</p>
<h3 class="adsimple-113075834">Dauer der Datenverarbeitung</h3>
<p>Wie lange Daten verarbeitet werden, ist sehr individuell und hängt von den eingesetzten Webdesign-Elementen ab. Wenn Cookies beispielsweise zum Einsatz kommen, kann die Aufbewahrungsdauer nur eine Minute, aber auch ein paar Jahre dauern. Machen Sie sich diesbezüglich bitte schlau. Dazu empfehlen wir Ihnen einerseits unseren allgemeinen Textabschnitt über Cookies sowie die Datenschutzerklärungen der eingesetzten Tools. Dort erfahren Sie in der Regel, welche Cookies genau eingesetzt werden, und welche Informationen darin gespeichert werden. Google-Font-Dateien werden zum Beispiel ein Jahr gespeichert. Damit soll die Ladezeit einer Website verbessert werden. Grundsätzlich werden Daten immer nur so lange aufbewahrt, wie es für die Bereitstellung des Dienstes nötig ist. Bei gesetzlichen Vorschreibungen können Daten auch länger gespeichert werden.</p>
<h3 class="adsimple-113075834">Widerspruchsrecht</h3>
<p>Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies bzw. Drittanbietern zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Sie können auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen. Unter Webdesign-Elementen (meistens bei Schriftarten) gibt es allerdings auch Daten, die nicht ganz so einfach gelöscht werden können. Das ist dann der Fall, wenn Daten direkt bei einem Seitenaufruf automatisch erhoben und an einen Drittanbieter (wie z. B. Google) übermittelt werden. Wenden Sie sich dann bitte an den Support des entsprechenden Anbieters. Im Fall von Google erreichen Sie den Support unter <a class="adsimple-113075834" href="https://support.google.com/?hl=de">https://support.google.com/?hl=de</a>.</p>
<h3 class="adsimple-113075834">Rechtsgrundlage</h3>
<p>Wenn Sie eingewilligt haben, dass Webdesign-Tools eingesetzt werden dürfen, ist die Rechtsgrundlage der entsprechenden Datenverarbeitung diese Einwilligung. Diese Einwilligung stellt laut Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Webdesign-Tools vorkommen kann, dar. Von unserer Seite besteht zudem ein berechtigtes Interesse, das Webdesign auf unserer Website zu verbessern. Schließlich können wir Ihnen nur dann ein schönes und professionelles Webangebot liefern. Die dafür entsprechende Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen). Wir setzen Webdesign-Tools gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben. Das wollen wir hier auf jeden Fall nochmals betonen.</p>
<p>Informationen zu speziellen Webdesign-Tools erhalten Sie &#8211; sofern vorhanden &#8211; in den folgenden Abschnitten.</p>
<h2 id="erklaerung-verwendeter-begriffe" class="adsimple-113075834">Erklärung verwendeter Begriffe</h2>
<p>Wir sind stets bemüht unsere Datenschutzerklärung so klar und verständlich wie möglich zu verfassen. Besonders bei technischen und rechtlichen Themen ist das allerdings nicht immer ganz einfach. Es macht oft Sinn juristische Begriffe (wie z. B. personenbezogene Daten) oder bestimmte technische Ausdrücke (wie z. B. Cookies, IP-Adresse) zu verwenden. Wir möchte diese aber nicht ohne Erklärung verwenden. Nachfolgend finden Sie nun eine alphabetische Liste von wichtigen verwendeten Begriffen, auf die wir in der bisherigen Datenschutzerklärung vielleicht noch nicht ausreichend eingegangen sind. Falls diese Begriffe der DSGVO entnommen wurden und es sich um Begriffsbestimmungen handelt, werden wir hier auch die DSGVO-Texte anführen und gegebenenfalls noch eigene Erläuterungen hinzufügen.</p>
<h2 id="auftragsverarbeiter" class="adsimple-113075834">Auftragsverarbeiter</h2>
<p>
<strong class="adsimple-113075834">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
</p>
<p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
<blockquote>
<p>
<em>
<strong class="adsimple-113075834">„Auftragsverarbeiter“</strong> eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet;</em>
</p>
</blockquote>
<p>
<strong class="adsimple-113075834">Erläuterung:</strong> Wir sind als Unternehmen und Websiteinhaber für alle Daten, die wir von Ihnen verarbeiten verantwortlich. Neben den Verantwortlichen kann es auch sogenannte Auftragsverarbeiter geben. Dazu zählt jedes Unternehmen bzw. jede Person, die in unserem Auftrag personenbezogene Daten verarbeitet. Auftragsverarbeiter können folglich, neben Dienstleistern wie Steuerberater, etwa auch Hosting- oder Cloudanbieter, Bezahlungs- oder Newsletter-Anbieter oder große Unternehmen wie beispielsweise Google oder Microsoft sein.</p>
<h2 id="einwilligung" class="adsimple-113075834">Einwilligung</h2>
<p>
<strong class="adsimple-113075834">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
</p>
<p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
<blockquote>
<p>
<em>
<strong class="adsimple-113075834">„Einwilligung“</strong> der betroffenen Person jede freiwillig für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist;</em>
</p>
</blockquote>
<p>
<strong class="adsimple-113075834">Erläuterung: </strong>In der Regel erfolgt bei Websites eine solche Einwilligung über ein Cookie-Consent-Tool. Sie kennen das bestimmt. Immer wenn Sie erstmals eine Website besuchen, werden Sie meist über einen Banner gefragt, ob Sie der Datenverarbeitung zustimmen bzw. einwilligen. Meist können Sie auch individuelle Einstellungen treffen und so selbst entscheiden, welche Datenverarbeitung Sie erlauben und welche nicht. Wenn Sie nicht einwilligen, dürfen auch keine personenbezogene Daten von Ihnen verarbeitet werden. Grundsätzlich kann eine Einwilligung natürlich auch schriftlich, also nicht über ein Tool, erfolgen.</p>
<h2 id="personenbezogene-daten" class="adsimple-113075834">Personenbezogene Daten</h2>
<p>
<strong class="adsimple-113075834">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
</p>
<p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
<blockquote>
<p>
<strong class="adsimple-113075834">
<em>„personenbezogene Daten“</em>
</strong>
<em> alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann;</em>
</p>
</blockquote>
<p>
<strong class="adsimple-113075834">Erläuterung:</strong> Personenbezogene Daten sind also all jene Daten, die Sie als Person identifizieren können. Das sind in der Regel Daten wie etwa:</p>
<ul class="adsimple-113075834">
<li class="adsimple-113075834">Name</li>
<li class="adsimple-113075834">Adresse</li>
<li class="adsimple-113075834">E-Mail-Adresse</li>
<li class="adsimple-113075834">Post-Anschrift</li>
<li class="adsimple-113075834">Telefonnummer</li>
<li class="adsimple-113075834">Geburtsdatum</li>
<li class="adsimple-113075834">Kennnummern wie Sozialversicherungsnummer, Steueridentifikationsnummer, Personalausweisnummer oder Matrikelnummer</li>
<li class="adsimple-113075834">Bankdaten wie Kontonummer, Kreditinformationen, Kontostände uvm.</li>
</ul>
<p>Laut Europäischem Gerichtshof (EuGH) zählt auch Ihre <strong class="adsimple-113075834">IP-Adresse zu den personenbezogenen Daten</strong>. IT-Experten können anhand Ihrer IP-Adresse zumindest den ungefähren Standort Ihres Geräts und in weiterer Folge Sie als Anschlussinhabers feststellen. Daher benötigt auch das Speichern einer IP-Adresse eine Rechtsgrundlage im Sinne der DSGVO. Es gibt auch noch sogenannte <strong class="adsimple-113075834">„besondere Kategorien“</strong> der personenbezogenen Daten, die auch besonders schützenswert sind. Dazu zählen:</p>
<ul class="adsimple-113075834">
<li class="adsimple-113075834">rassische und ethnische Herkunft</li>
<li class="adsimple-113075834">politische Meinungen</li>
<li class="adsimple-113075834">religiöse bzw. weltanschauliche Überzeugungen</li>
<li class="adsimple-113075834">die Gewerkschaftszugehörigkeit</li>
<li class="adsimple-113075834">genetische Daten wie beispielsweise Daten, die aus Blut- oder Speichelproben entnommen werden</li>
<li class="adsimple-113075834">biometrische Daten (das sind Informationen zu psychischen, körperlichen oder verhaltenstypischen Merkmalen, die eine Person identifizieren können).<br />
Gesundheitsdaten</li>
<li class="adsimple-113075834">Daten zur sexuellen Orientierung oder zum Sexualleben</li>
</ul>
<h2 id="profiling" class="adsimple-113075834">Profiling</h2>
<p>
<strong class="adsimple-113075834">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
</p>
<p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
<blockquote>
<p>
<em>
<strong class="adsimple-113075834">„Profiling“</strong> jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen;</em>
</p>
</blockquote>
<p>
<strong class="adsimple-113075834">Erläuterung:</strong> Beim Profiling werden verschiedene Informationen über eine Person zusammengetragen, um daraus mehr über diese Person zu erfahren. Im Webbereich wird Profiling häufig für Werbezwecke oder auch für Bonitätsprüfungen angewandt. Web- bzw. Werbeanalyseprogramme sammeln zum Beispiel Daten über Ihre Verhalten und Ihre Interessen auf einer Website. Daraus ergibt sich ein spezielles Userprofil, mit dessen Hilfe Werbung gezielt an eine Zielgruppe ausgespielt werden kann.</p>
<p>&nbsp;</p>
<h2 id="verantwortlicher" class="adsimple-113075834">Verantwortlicher</h2>
<p>
<strong class="adsimple-113075834">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
</p>
<p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
<blockquote>
<p>
<em>
<strong class="adsimple-113075834">„Verantwortlicher“</strong> die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet; sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden;</em>
</p>
</blockquote>
<p>
<strong class="adsimple-113075834">Erläuterung:</strong> In unserem Fall sind wir für die Verarbeitung Ihrer personenbezogenen Daten verantwortlich und folglich der &#8220;Verantwortliche&#8221;. Wenn wir erhobene Daten zur Verarbeitung an andere Dienstleister weitergeben, sind diese &#8220;Auftragsverarbeiter&#8221;. Dafür muss ein &#8220;Auftragsverarbeitungsvertrag (AVV)&#8221; unterzeichnet werden.</p>
<p>&nbsp;</p>
<h2 id="verarbeitung" class="adsimple-113075834">Verarbeitung</h2>
<p>
<strong class="adsimple-113075834">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
</p>
<p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
<blockquote>
<p>
<strong class="adsimple-113075834">
<em>„Verarbeitung“</em>
</strong>
<em> jeden mit oder ohne Hilfe automatisierter Verfahren ausgeführten Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung;</em>
</p>
</blockquote>
<p>
<strong class="adsimple-113075834">Anmerkung: </strong>Wenn wir in unserer Datenschutzerklärung von Verarbeitung sprechen, meinen wir damit jegliche Art von Datenverarbeitung. Dazu zählt, wie oben in der originalen DSGVO-Erklärung erwähnt, nicht nur das Erheben sondern auch das Speichern und Verarbeiten von Daten.</p>
<p>Alle Texte sind urheberrechtlich geschützt.</p>
<p style="margin-top:15px">Quelle: <a href="https://www.adsimple.at/datenschutz-generator/" title="Datenschutzerklärung Generator Österreich">Datenschutzerklärung</a> erstellt mit dem Datenschutz Generator für Österreich von AdSimple</p>

  `; // === КОНЕЦ ВСТАВКИ HTML ===

  return (
    <main id="main" style={{ background: WHITE, color: BLACK }}>
      {/* HERO */}
      <section aria-label="Datenschutzerklärung Raumfrei Wien">
        <div className="mx-auto w-full max-w-[1150px] px-4 py-14 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm"
              style={{
                background: WHITE,
                color: ACCENT,
                border: `1px solid ${GRAY_BR}`,
              }}
            >
              Recht &amp; Transparenz
            </span>

            <h1
              className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight"
              style={{ color: BLACK }}
            >
              Datenschutzerklärung
            </h1>

            <p
              className="mt-4 text-base md:text-lg leading-relaxed"
              style={{ color: GRAY_TXT }}
            >
              Informationen zur Verarbeitung personenbezogener Daten bei Raumfrei Wien.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto w-full max-w-[1150px] px-4 pb-20">
        <div className={styles.wrapper}>
          <DatenschutzHTML html={html} />
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Raumfrei Wien",
            url: "https://raumfrei-wien.at",
            email: "office@raumfrei-wien.at",
            telephone: "+43 676 505 54 37",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Heiligenstädter Str. 32/303",
              addressLocality: "Wien",
              postalCode: "1190",
              addressCountry: "AT",
            },
          }),
        }}
      />
    </main>
  );
}