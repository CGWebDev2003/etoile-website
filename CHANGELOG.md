# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden in dieser Datei
dokumentiert.

Das Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
und das Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [1.15.0] – 2026-07-25

### Changed

- Hero-Duo-Komposition entfernt, zurück zum ursprünglichen Einzelbild
  (elegante Solo-Ballerina) ohne überlappende Ensemble-Foto-Kachel.

### Removed

- `public/images/hero-group.jpg` (nicht mehr verwendet).

## [1.14.0] – 2026-07-25

### Changed

- Duo-Bildkachel (Ensemble-Bühnenfoto) im Hero ab 1024px auf das
  1,8-fache vergrößert (140px → 252px), damit die Ensemble-Szene auf
  großen Bildschirmen besser zur Geltung kommt. Mobile/Tablet-Ansicht
  bleibt unverändert.

## [1.13.0] – 2026-07-25

### Changed

- Hero-Layout auf die ursprüngliche Duo-Komposition zurückgesetzt: die
  elegante Solo-Ballerina als großes Hauptbild mit dem Ensemble-
  Bühnenfoto als kleiner, überlappender Kachel unten links – statt der
  zwischenzeitlichen Seite-an-Seite-Anordnung.

## [1.12.0] – 2026-07-25

### Changed

- Die kleine, überlappende Duo-Bildkachel im Hero (Kinder beim Üben im
  Ballettsaal) durch ein echtes, hochwertigeres Bühnenfoto ersetzt: das
  komplette Ensemble bei einer Auftritt-Vorstellung mit floralen Reifen
  (Original-Homepage-Banner der alten Website, 1950×900px). Beide Bilder
  – elegante Solo-Ballerina und das Ensemble-Bühnenfoto – stehen jetzt
  gleichberechtigt nebeneinander (ab 1024px) bzw. gestapelt (mobil),
  statt eines kleinen Insets, damit auch das Gruppenfoto in seiner
  Detailfülle erkennbar bleibt.

## [1.11.0] – 2026-07-25

### Changed

- Hero-Bild um eine zweite, überlappende Bildkachel ergänzt: Neben der
  eleganten Solo-Ballerina zeigt ein kleines Duo-Foto Kinder beim
  verspielten Üben von Armhaltungen im Ballettsaal (echtes Foto von der
  alten Website, aus der Unterricht-Unterseite). Ziel: sowohl die
  elegante als auch die kindgerechte, verspielte Seite der Schule auf
  einen Blick zeigen, statt nur ein einzelnes, statisch wirkendes Bild.

### Added

- `public/images/hero-kids.jpg` (500×375px, das Original der alten
  Website – keine höhere Auflösung verfügbar).

## [1.10.0] – 2026-07-25

### Changed

- Navigationspunkt "Kurse" in "Kurse & Preise" umbenannt, damit die
  Preisliste beim Überfliegen der Hauptnavigation leichter auffindbar ist.

## [1.9.1] – 2026-07-25

### Fixed

- Logo im Footer wurde durch fehlendes `align-self` im Column-Flex-Container
  (`.brandCol`) auf die volle Spaltenbreite gestreckt und dadurch nicht
  proportional verzerrt dargestellt. `align-self: flex-start` ergänzt.
- Höher aufgelöste Logo-Datei eingesetzt (1477×1065px statt zuvor 189×136px,
  vom Nutzer bereitgestellt), Bildreferenzen (`width`/`height`) entsprechend
  angepasst.

## [1.9.0] – 2026-07-25

### Changed

- Echtes Logo der Ballettschule Étoile in Header und Footer eingesetzt
  (ersetzt das bisherige Inline-SVG-Platzhalterlogo). Auflösung 189×136px
  – die einzige verfügbare Qualität, da das Logo auf der alten Website
  nur eingebettet in PDFs (identisch auf jeder Seite) vorlag, nicht als
  eigenständige Bilddatei. Ursprünglich mit weißem Hintergrund; für den
  Einsatz auf hellem und dunklem Untergrund per Bildbearbeitung
  transparent gemacht. Das `next/image`-Element lädt es mit
  `unoptimized`, weil Next.js' automatische PNG-Optimierung das Bild in
  eine Palette (Indexed-PNG) mit begrenzter Farbanzahl konvertiert und
  dabei den transparenten Hintergrund mit den Kanten-Pixeln verschmilzt
  – sichtbar als grauer Kasten hinter dem Logo auf dunklem Grund.
- Hero-Illustration (Silhouette) durch ein echtes Bühnenfoto ersetzt:
  Ballerina in einer Arabeske en pointe, entnommen aus dem Kontakt-PDF
  der alten Website. Original 1950×900px, auf 820×900px zugeschnitten,
  um in den Hero-Bildbereich zu passen, ohne die Pose abzuschneiden.
  `BallerinaSilhouette`-Komponente entfernt, da nicht mehr verwendet.

## [1.8.0] – 2026-07-25

### Changed

- Kursangebot (`lib/content.ts` → `courses`) von 4 generischen
  Platzhalter-Kategorien auf die 9 echten Kursarten der alten Website
  umgestellt (Kinderballett, Pre-Ballett, Klassisches Ballett,
  Förderklasse, Ballett für Erwachsene, Stretching und Kräftigung,
  Spitzentraining, Repertoire, Einzelunterricht). Erfundene Erwähnung von
  "Onlineunterricht" entfernt.
- `Courses` bekommt eine optionale `limit`-Prop; die Startseite zeigt nur
  4 Kurse als Vorschau, `/kurse` weiterhin alle.

### Added

- Vollständige, echte Preisliste (`lib/content.ts` → `pricing`) aus der
  alten Preisliste.pdf übernommen: Gruppenunterricht 45/60 und 75/90
  Minuten, Spitzentraining für Kinder, 10er-Karten, Privatunterricht,
  Aufnahmegebühr, Geschwisterermäßigung und Probestunden-Konditionen.

## [1.7.0] – 2026-07-25

### Added

- Neue `Founder`-Sektion auf `/ueber-uns`, zwischen Schul-Text und Team
  platziert: Kurzporträt der Schulleitung Oksana Kulchytska (Ausbildung
  Kiew, Erste Solistin Leipziger Ballett unter Uwe Scholz, Gastsolistin
  Staatsoper Prag, YOUTH GLOBE Award 2017, seit 2011 zertifizierte
  Pilates-Trainerin) mit Foto.
- Echte Porträtfotos für alle sechs Pädagoginnen/Pädagogen sowie für
  Oksana Kulchytska ergänzt (aus den Originalbildern der alten Website),
  eingebunden über `next/image`.

## [1.6.0] – 2026-07-25

### Added

- Team-Bereich auf `/ueber-uns` mit den echten sechs Pädagoginnen und
  Pädagogen befüllt (Cornelia Richter, Anna Ber, Roman Slomski, Olga
  Shalaevskaya, Margarita Yermachenko, Stephanie Hipper) inkl. Ausbildung,
  bisherigen Engagements und aktuellem Unterrichtsschwerpunkt an der
  Étoile – recherchiert von der alten Website.

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
