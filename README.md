# Lehrstart Schweiz: Version Warm und Editorial

Website für **Lehrstart Schweiz**, einen Ratgeber für Lernende in der Schweiz zu Bewerbung, Geld und Steuern, Berufen von innen und KI beim Lernen. Die Seite verlinkt auf die eigenen Canva-Vorlagen auf Etsy.

**Stil:** Rosa Rahmen, cremefarbene Fläche und rote Serifenschrift (DM Serif Display und Figtree).

## Projektstruktur

```
.
├── index.html            Startseite
├── bewerbung.html        Ratgeber Bewerbung mit Dossier-Checkliste
├── geld-steuern.html     Ratgeber Lehrlingslohn, Budget und Steuern
├── berufe.html           Berufe von innen (Mediamatik)
├── ki-lernen.html        KI beim Lernen mit kopierbaren Prompts
├── vorlagen.html         Übersicht der Vorlagen
├── impressum.html        Impressum (Vorlage)
├── datenschutz.html      Datenschutzerklärung (Vorlage)
├── css/
│   ├── variables.css     Design-Tokens: Farben, Schriften, Radien, Abstände
│   ├── base.css          Reset, Typografie, Layout-Hilfen
│   ├── components.css    Komponenten: Navigation, Buttons, Karten, Formulare
│   └── theme.css         Stilspezifische Anpassungen dieser Version
├── js/
│   └── main.js           Mobile Navigation, Karussell, Newsletter, Checkliste, Kopieren
├── assets/
│   └── favicon.svg
├── .editorconfig
├── .gitignore
└── README.md
```

Reines HTML, CSS und JavaScript. Keine Abhängigkeiten, kein Build-Schritt.

## Lokal starten

Am einfachsten mit einem kleinen lokalen Server, damit alle Pfade wie online funktionieren:

```bash
python3 -m http.server 8000
```

Danach im Browser `http://localhost:8000` öffnen. In VS Code geht es auch mit der Erweiterung „Live Server“.

## Farben und Schriften anpassen

Alle Farben, Schriften und Abstände stehen in `css/variables.css`. Wer dort einen Wert ändert, ändert ihn auf der ganzen Website.

## Online stellen mit GitHub Pages

1. Alle Dateien in das Repository hochladen (Ordnerstruktur beibehalten).
2. **Settings**, dann **Pages** öffnen.
3. Unter **Source** den Branch `main` und den Ordner `/ (root)` wählen und speichern.
4. Nach kurzer Zeit ist die Seite unter `https://<benutzername>.github.io/<repository>/` erreichbar.

## Vor dem Livegang erledigen

- [ ] `[PREIS]` und `[ETSY-LINK]` ersetzen (index.html, bewerbung.html, vorlagen.html)
- [ ] `[deine@email.ch]` im Footer ersetzen (alle Seiten)
- [ ] Impressum und Datenschutzerklärung ausfüllen und von einer Fachperson prüfen lassen
- [ ] Platzhalter auf `berufe.html` mit eigenen Erfahrungen füllen
- [ ] Foto-Platzhalter auf der Startseite durch ein eigenes Bild ersetzen
- [ ] Newsletter-Formular in `js/main.js` mit einem Newsletter-Tool verbinden (siehe TODO)
- [ ] Datenschutz: Schriften selbst hosten statt von Google Fonts laden, oder in der Datenschutzerklärung erwähnen
- [ ] Nebenerwerb mit dem Lehrbetrieb abklären

## Hinweis

Die Inhalte sind keine Steuer- oder Rechtsberatung. Regeln zu Steuern und Lehrverträgen unterscheiden sich je nach Kanton.
