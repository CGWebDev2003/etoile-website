# Ballettschule Étoile – Website

Website der [Ballettschule Étoile](https://www.ballettschule-etoile.de/) in
Leipzig – klassisches Ballett auf professionellem Niveau unter der Leitung von
Primaballerina Oksana Kulchytska. Umgesetzt mit Next.js (App Router), React
Server Components und CSS Modules im Blush-/Ballett-Design.

## Entwicklung
```bash
npm install
npm run dev
```

Anschließend [http://localhost:3000](http://localhost:3000) öffnen.

## Skripte

| Befehl          | Beschreibung                      |
| --------------- | --------------------------------- |
| `npm run dev`   | Entwicklungsserver                |
| `npm run build` | Produktions-Build                 |
| `npm run start` | Produktions-Server (nach `build`) |
| `npm run lint`  | ESLint                            |

## Projektstruktur

```
app/                 Root-Layout, globale Styles (Tokens), Startseite
components/
  layout/            Header, mobiles Menü, Footer
  sections/          Hero, Über uns, Kurse, Stundenplan, u. a.
  ui/                Wiederverwendbare Bausteine (Button, Container, …)
lib/content.ts       Zentrale Inhalte (Texte, Kurse, Stundenplan)
```

## Konventionen

- **Styling**: ausschließlich CSS Modules, ein Modul pro Komponente. Design
  Tokens als CSS Custom Properties in `app/globals.css`.
- **Responsiveness**: mobile-first, Breakpoints per `min-width`.
- **Rendering**: Server Components als Default; `"use client"` nur für
  interaktive Teile (mobiles Menü, Testimonial-Slider).
- **Versionierung**: Semantic Versioning, Conventional Commits, `CHANGELOG.md`.

Details siehe [`CLAUDE.md`](./CLAUDE.md) und [`AGENTS.md`](./AGENTS.md).
