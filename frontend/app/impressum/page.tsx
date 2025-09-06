export default function ImpressumPage() {
    return (
        <div className="mx-auto px-4 py-10 space-y-6">
            <h1 className="text-3xl font-bold">Impressum</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="space-y-2">
                    <h2 className="text-lg font-semibold">Angaben gemäß § 5 TMG</h2>
                    <p>
                        Jonas Ullmann<br/>
                        Meißner Gasse 22<br/>
                        09599 Freiberg<br/>
                        Deutschland
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold">Kontakt</h2>
                    <p>E-Mail:&nbsp;
                        <a className="text-blue-600 hover:underline" href="mailto:arbeitsblattsammlung@gmail.com">
                            arbeitsblattsammlung@gmail.com
                        </a>
                    </p>
                </section>
            </div>

            <section className="space-y-2">
                <h2 className="text-lg font-semibold">Haftung für Inhalte dieser Website</h2>
                <p>Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle
                    Informationen bereitzustellen. Laut Telemediengesetz (TMG) §7 (1) sind wir als Diensteanbieter für
                    eigene Informationen, die wir zur Nutzung bereitstellen, nach den allgemeinen Gesetzen
                    verantwortlich. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser
                    Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden. Als
                    Diensteanbieter im Sinne der §§ 8 bis 10 sind wir nicht verpflichtet, die von ihnen übermittelten
                    oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                    rechtswidrige Tätigkeit hinweisen.</p>
                <p>Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von
                    Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen
                    bleiben auch im Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt. </p>
                <p>Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu
                    kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im
                    Impressum.</p>
            </section>

            <section className="space-y-2">
                <h2 className="text-lg font-semibold">Urheberrechtshinweis</h2>
                <p>Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht der
                    Bundesrepublik Deutschland. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten,
                    vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls
                    notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich
                    verfolgen.</p>
                <p>Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu
                    kontaktieren.</p>
            </section>

            <section className="space-y-2">
                <h2 className="text-lg font-semibold">Bildernachweis</h2>
                <p>Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.</p>
                <p>Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:</p>
                <ul className="list-disc list-inside">
                    <li>
                        <a className="text-blue-600 hover:underline" href="https://www.pexels.com">www.pexels.com</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
