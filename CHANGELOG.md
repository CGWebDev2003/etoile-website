# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden in dieser Datei
dokumentiert.

Das Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
und das Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [1.5.0] – 2026-07-25

### Changed

- "Über uns"-Text (`About`) und Startseiten-Teaser (`AboutTeaser`) im
  Wortlaut der alten Website neu geschrieben: gleicher warmer,
  wir-bezogener Ton wie in der ursprünglichen Selbstbeschreibung, inkl.
  Gründungsgeschichte, Wettbewerbserfolgen, Oper-Leipzig-Kooperation und
  der einladenden Schlusszeile ("Wir freuen uns auf alle
  Ballettbegeisterten – und die, die es werden wollen!").
- Highlights-Karten und Section-Überschriften entsprechend angepasst.

## [1.4.1] – 2026-07-25

### Added

- Seitenspezifische Open-Graph-Vorschaudaten (Titel, Beschreibung) für alle
  6 Unterseiten (`/ueber-uns`, `/kurse`, `/erfolge`, `/kontakt`,
  `/impressum`, `/datenschutz`). Social-Media-Vorschauen zeigen nun die
  jeweilige Seite statt generisch immer die Startseite.

### Verified

- Alle Seitentitel, Meta-Beschreibungen und Open-Graph-Angaben geprüft:
  ausschließlich Name, Region und echte Domain des Zielunternehmens
  (Ballettschule Étoile Leipzig, ballettschule-etoile.de), kein alter
  Firmenname oder alte Adresse im gesamten Build-Output.

## [1.4.0] – 2026-07-25

### Changed

- Markenfarbe (`--color-blush-50` bis `-600` in `app/globals.css`) auf den
  echten, aus Logo und Überschriften der alten Website per Pixel
  ausgelesenen Farbton umgestellt (Basis `#A5123A`, vorher ein helleres,
  generisches Rosé). Wirkt sich zentral auf Buttons, Akzent-Texte,
  Hover-Zustände und den Testimonials-Hintergrund aus.
- Nebeneffekt: Kontrast von weißem Button-Text steigt von 2,9:1 (WCAG-AA-
  Fail) auf 7,6:1 (WCAG-AAA).

## [1.3.0] – 2026-07-25

### Added

- Social-Media-Links (Instagram, YouTube) als Icon-Links im Footer, zentral
  in `lib/content.ts` (`socialLinks`) gepflegt.
- Impressum-Seite mit den echten Pflichtangaben gemäß § 5 TMG befüllt
  (Ballettschule Étoile, Oksana Kulchytska als Inhaberin, Adresse, Telefon,
  E-Mail, inhaltlich Verantwortliche).
- Datenschutz-Seite mit dem "Verantwortlicher"-Kontaktblock befüllt; der
  restliche DSGVO-Fließtext bleibt als klar markierter Platzhalter bis zu
  einem eigenen Rechtstext-Schritt.

### Changed

- `LegalPlaceholder` durch die flexiblere Komponente `LegalPage`
  (Titel + beliebiger Inhalt + optionaler Platzhalter-Hinweis) ersetzt.

### Removed

- Ungenutzte `LegalPlaceholder`-Komponente entfernt.

## [1.2.2] – 2026-07-25

### Changed

- Auszeichnungen-Highlights auf der Startseite durch echte Erfolge ersetzt
  (mehrfache "Beste Ballettschule"-Auszeichnung, Kooperation mit der Oper
  Leipzig, Aufnahmen an der Palucca Hochschule Dresden und der Staatlichen
  Ballettschule Berlin, 10+ Jahre Bühnenerfahrung) statt der bisherigen
  schwachen Platzhalter-Zahlen ("1.", "Ø").
- `/erfolge` mit der vollständigen, recherchierten Erfolgschronik seit 2017
  befüllt (Wettbewerbsplatzierungen, Schüleraufnahmen an staatlichen
  Ballettschulen, Presse- und Bühnenmomente).

## [1.2.1] – 2026-07-25

### Changed

- Testimonials durch vier echte 5-Sterne-Google-Bewertungen ersetzt
  (Teona Fritschka, Kornelia Klöpper-Sadowsky, Siegfried Dietze, Anastasia)
  statt der bisherigen Platzhalter-Zitate.

## [1.2.0] – 2026-07-25

### Added

- Mehrseiten-Struktur statt Ein-Seiten-Layout: `/ueber-uns` (Schule, Oksana
  Kulchytska, Team), `/kurse` (Unterricht, Stundenplan, Preise), `/erfolge`
  (Highlights + Chronik), `/kontakt`, `/impressum`, `/datenschutz`.
- Header und Footer wandern in das Root-Layout (`app/layout.tsx`) und werden
  so für alle Routen gemeinsam gerendert statt pro Seite importiert zu werden.
- Neue Sektionen `AboutTeaser` und `ContactCta` als schlanke Startseiten-
  Teaser mit Verlinkung auf die jeweilige Detailseite.
- Neue Sektionen `Team`, `Pricing` und `AchievementsArchive` mit
  funktionsfähigem leerem Zustand ("Inhalt folgt in Kürze"), bereit für die
  Inhalts-Phase.
- Footer zeigt Impressum/Datenschutz als separate Rechtslinks-Zeile,
  getrennt von der Hauptnavigation.
- `Button` nutzt für interne Pfade automatisch `next/link` (Prefetching),
  externe Aktionen (`tel:`, `mailto:`) bleiben `<a>`.

### Changed

- `navLinks` verweisen auf echte Routen statt auf Anker-Links
  (`/kurse` statt `#kurse`).
- Startseite auf Teaser-Umfang reduziert (Hero, Kursübersicht,
  Erfolgs-Highlights, Testimonials, Kontakt-CTA); vollständiger Stundenplan
  und Kontaktdetails leben jetzt auf eigenen Seiten.
- `html` erhält `overflow-x: hidden` zusätzlich zu `body`, um horizontalen
  Overflow durch das mobile Off-Canvas-Menü zu verhindern (betraf zuvor
  jede Seite, da der Header nun global ist).

## [1.1.0] – 2026-07-24

### Removed

- Dark Mode entfernt: `@media (prefers-color-scheme: dark)`-Override der Design-
  Tokens gestrichen. Die Website rendert ausschließlich im Light-Theme
  (`color-scheme: light`).

## [1.0.0] – 2026-07-24

### Added

- Erste Version der Website der Ballettschule Étoile Leipzig im Blush-/Ballett-Design.
- Design-Token-System (Farben, Spacing auf 4px-Basis, Radien, Schatten,
  Typografie) als globale CSS Custom Properties inkl. Dark-Mode.
- Schriften über `next/font` (Montserrat, Dancing Script) – selbst gehostet,
  ohne externe Requests.
- Sticky Header mit Desktop-Navigation und barrierearmem mobilen Menü
  (Client-Komponente mit Overlay, Escape-Handling und Scroll-Lock).
- Hero-Sektion mit dekorativer Inline-SVG-Ballerina und Handschrift-Akzent.
- Sektionen: Über uns, Kurse, Stundenplan, Testimonials (Slider), Erfolge
  und Kontakt.
- Footer mit Kontaktdaten und Navigation.
- Zentrale Inhaltsdatei (`lib/content.ts`) für Texte, Kurse und Stundenplan.
- SEO-Metadaten (Title-Template, Open Graph, Sprache `de`).

### Changed

- `create-next-app`-Startseite durch die Étoile-Website ersetzt.

### Removed

- Ungenutzte Template-Assets (Next.js-/Vercel-SVGs) und Beispiel-Styles.
