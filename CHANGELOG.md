# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden in dieser Datei
dokumentiert.

Das Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
und das Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [1.1.0] – 2026-07-24

### Added

- Manueller Dark-Mode-Umschalter (`ThemeToggle`) im Header (Desktop und
  Mobile). Die Wahl wird in `localStorage` gespeichert; ohne explizite Wahl
  folgt die Seite weiterhin der System-Präferenz.
- FOUC-freies Init-Skript im Layout, das das gespeicherte Theme vor dem
  ersten Paint setzt.

### Changed

- Dark-Mode-Tokens greifen nun sowohl bei expliziter Wahl
  (`data-theme="dark"`) als auch über die System-Präferenz.

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
