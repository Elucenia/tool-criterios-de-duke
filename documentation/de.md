<!-- ELUCENIA technical documentation · criterios-de-duke · de · no clinical/professional/rights approval -->

# Duke-ISCVID-Kriterien 2023

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/criterios-de-duke)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Pathologisches Kriterium: Mikroorganismus in Vegetation, Herzgewebe, Prothese oder Embolus (Kultur, Histologie oder PCR), oder histologisch aktive Endokarditis

`pato`

### Mikrobiologisches Hauptkriterium: typischer Erreger in ≥ 2 getrennten Blutkulturen, gelegentlicher Erreger in ≥ 3, positive Blut-PCR für Coxiella, Bartonella oder T. whipplei, oder spezifische Serologie (Phase-I-IgG gegen C. burnetii \> 1:800; IgG gegen Bartonella ≥ 1:800)

`maior_micro`

### Bildgebendes Hauptkriterium: Vegetation, Perforation, Aneurysma, Abszess, Pseudoaneurysma oder Fistel in Echokardiografie/Herz-CT; neue signifikante Klappenregurgitation; neue Prothesendehiszenz; oder abnorme FDG-Aufnahme im PET/CT an Klappe oder Elektrode

`maior_img`

### Chirurgisches Hauptkriterium: durch direkte Inspektion während einer Herzoperation dokumentierte Endokarditis, nur ohne bildgebendes Hauptkriterium und ohne nachfolgende histologische oder mikrobiologische Bestätigung

`maior_cir`

### Nebenkriterium: Prädisposition (frühere Endokarditis, Klappenprothese, Klappenrekonstruktion, angeborener Herzfehler, Klappenregurgitation oder -stenose, intrakardiales Gerät, hypertrophe Kardiomyopathie, intravenöser Drogenkonsum)

`men_pred`

### Nebenkriterium: Fieber \> 38,0 °C

`men_febre`

### Nebenkriterium: vaskuläre Phänomene (arterielle Embolie, septischer Lungeninfarkt, Hirn- oder Milzabszess, mykotisches Aneurysma, intrakranielle Blutung, Bindehautblutung, Janeway-Läsionen, eitrige Purpura)

`men_vasc`

### Nebenkriterium: immunologische Phänomene (positiver Rheumafaktor, Osler-Knötchen, Roth-Flecken, Immunkomplex-Glomerulonephritis)

`men_imuno`

### Nebenkriterium: mikrobiologischer Nachweis, der kein Hauptkriterium erfüllt

`men_micro`

### Nebenkriterium: abnormes FDG-PET/CT innerhalb von 3 Monaten nach Implantation einer Prothese, eines Transplantats oder eines Geräts

`men_img`

### Nebenkriterium: neues Regurgitationsgeräusch bei körperlicher Untersuchung, wenn keine Echokardiografie verfügbar ist

`men_exame`

### Ausgeschlossen: eine gesicherte Alternativdiagnose erklärt das Krankheitsbild

`rej_alt`

### Ausgeschlossen: kein Rezidiv nach weniger als 4 Tagen Antibiotikatherapie

`rej_res`

### Ausgeschlossen: kein pathologischer Nachweis bei Operation oder Autopsie nach weniger als 4 Tagen Antibiotikatherapie

`rej_pato`

## Fassung der Methode

Duke-ISCVID 2023: ausgewählte Kombinationen aus Tabelle 1; chirurgisches Hauptkriterium gemäß Tabelle 2, I.C, nur ohne bildgebendes Hauptkriterium und ohne nachfolgende Bestätigung; keine automatische Gleichwertigkeit mit Duke 2000

## Dokumentierte Formel

Gesichert: pathologisches Kriterium, oder 2 Hauptkriterien, oder 1 Haupt- + 3 Nebenkriterien, oder 5 Nebenkriterien.

Möglich: 1 Haupt- + 1 Nebenkriterium, oder 3 Nebenkriterien.

Ausgeschlossen: sichere Alternativdiagnose, Abklingen ohne Rezidiv nach weniger als 4 Tagen Antibiotika, keine pathologischen Belege bei Operation/Autopsie nach weniger als 4 Tagen Antibiotika, oder Kriterien für möglich nicht erfüllt.

Zählung des chirurgischen Hauptkriteriums: fügt nur dann ein Hauptkriterium hinzu, wenn es ausgewählt ist und weder ein bildgebendes Hauptkriterium noch das pathologische Kriterium ausgewählt ist. Die in Tabelle 2 vorgesehene nachfolgende Bestätigung muss geprüft werden; ein mikrobiologisches Hauptkriterium aus Blut ist nicht automatisch eine nachfolgende Bestätigung im Gewebe.

## Grenzen und Population

Die Duke-ISCVID-Kriterien 2023 hängen von spezifischen Definitionen zu Mikrobiologie, Bildgebung, intraoperativer Inspektion und prädisponierenden Bedingungen ab. Manche Mikroorganismen gelten nur bei intrakardialem Prothesenmaterial als typisch. Die Ausgabe 2023 ändert außerdem Kulturanforderungen der vorherigen Ausgabe; isolierte Zählungen ohne diese Definitionen bilden das vollständige System nicht ab. Tabelle 2, Abschnitt I.C, beschränkt das chirurgische Hauptkriterium auf Fälle ohne bildgebendes Hauptkriterium und ohne nachfolgende histologische oder mikrobiologische Bestätigung. In dieser Oberfläche verhindert die Auswahl des pathologischen Kriteriums, dass zusätzlich das chirurgische Hauptkriterium gezählt wird; das mikrobiologische Hauptkriterium aus Blut bleibt davon getrennt. Die ausfüllende Person muss die nachfolgende Bestätigung und die Quelldefinitionen prüfen: Die booleschen Felder erfassen weder den vollständigen zeitlichen Verlauf noch die Erhebung der Befunde. Die Prüfung korrigiert nur diese Zählung und ihre ausgewählten Kombinationen; sie validiert weder Diagnose, klinische Leistung, Behandlung noch die vollständige Methode.

## Referenzen

- [Fowler VG et al. The 2023 Duke-International Society for Cardiovascular Infectious Diseases Criteria for Infective Endocarditis: Updating the Modified Duke Criteria. Clin Infect Dis, 2023.](https://doi.org/10.1093/cid/ciad271)

- [Li JS et al. Proposed modifications to the Duke criteria for the diagnosis of infective endocarditis. Clin Infect Dis, 2000.](https://doi.org/10.1086/313753)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
