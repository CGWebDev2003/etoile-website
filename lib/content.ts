/**
 * Zentrale Inhalte der Ballettschule Étoile.
 * Getrennt von den Komponenten gehalten, damit Texte an einer Stelle
 * gepflegt werden können.
 */

export type NavLink = {
  readonly label: string;
  readonly href: string;
};

export const navLinks: readonly NavLink[] = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kurse", href: "#kurse" },
  { label: "Stundenplan", href: "#stundenplan" },
  { label: "Erfolge", href: "#erfolge" },
  { label: "Kontakt", href: "#kontakt" },
];

export const school = {
  name: "Ballettschule Étoile",
  city: "Leipzig",
  tagline: "Grazie, Eleganz, Inspiration",
  director: "Oksana Kulchytska",
  directorRole: "Primaballerina & Schulleitung",
  address: {
    street: "Humboldtstraße 9",
    zip: "04105",
    city: "Leipzig",
  },
  phone: "0177 3950529",
  phoneHref: "tel:+491773950529",
  email: "info@ballettschule-etoile.de",
  hours: "Mo – Sa nach Vereinbarung",
} as const;

export type Course = {
  readonly id: string;
  readonly title: string;
  readonly age: string;
  readonly description: string;
};

export const courses: readonly Course[] = [
  {
    id: "kinder",
    title: "Kinderballett",
    age: "ab 3 Jahren",
    description:
      "Spielerischer Einstieg in die Welt des Balletts. Kleine Tänzerinnen und Tänzer schulen Haltung, Musikalität und Körpergefühl.",
  },
  {
    id: "jugend",
    title: "Jugend & Fortgeschrittene",
    age: "8 – 18 Jahre",
    description:
      "Fundierte klassische Ausbildung an der Stange und im Raum – bis hin zu Spitzentanz, Repertoire und Wettbewerbsvorbereitung.",
  },
  {
    id: "erwachsene",
    title: "Ballett für Erwachsene",
    age: "Einsteiger & Wiedereinsteiger",
    description:
      "Eleganz in jedem Alter. Klassisches Training für Anmut, Kraft und Beweglichkeit – in entspannter, motivierender Atmosphäre.",
  },
  {
    id: "spitze",
    title: "Spitzen- & Privattraining",
    age: "nach Niveau",
    description:
      "Individuelle Förderung im Einzel- oder Onlineunterricht sowie gezieltes Spitzentraining für ambitionierte Tänzerinnen.",
  },
];

export type ScheduleClass = {
  readonly title: string;
  readonly time: string;
  readonly level: string;
};

export const scheduleDays: readonly string[] = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

/** Stundenplan: pro Tag eine Liste von Kursen. */
export const schedule: Readonly<Record<string, readonly ScheduleClass[]>> = {
  Montag: [
    { title: "Kinderballett", time: "15:00 – 15:45", level: "ab 3 J." },
    { title: "Ballett I", time: "16:00 – 17:15", level: "Kinder" },
    { title: "Erwachsene", time: "18:30 – 19:45", level: "Einsteiger" },
  ],
  Dienstag: [
    { title: "Ballett II", time: "16:00 – 17:30", level: "Jugend" },
    { title: "Spitzentraining", time: "17:45 – 19:00", level: "Fortg." },
  ],
  Mittwoch: [
    { title: "Kinderballett", time: "15:00 – 15:45", level: "ab 3 J." },
    { title: "Ballett I", time: "16:00 – 17:15", level: "Kinder" },
    { title: "Repertoire", time: "17:30 – 19:00", level: "Fortg." },
  ],
  Donnerstag: [
    { title: "Ballett II", time: "16:00 – 17:30", level: "Jugend" },
    { title: "Erwachsene", time: "18:30 – 19:45", level: "Mittelstufe" },
  ],
  Freitag: [
    { title: "Ballett I", time: "16:00 – 17:15", level: "Kinder" },
    { title: "Spitzentraining", time: "17:30 – 19:00", level: "Fortg." },
  ],
  Samstag: [
    { title: "Kinderballett", time: "10:00 – 10:45", level: "ab 3 J." },
    { title: "Repertoire", time: "11:00 – 12:30", level: "Wettbewerb" },
  ],
};

export type Achievement = {
  readonly value: string;
  readonly label: string;
};

export const achievements: readonly Achievement[] = [
  { value: "1.", label: "Preise bei nationalen & internationalen Wettbewerben" },
  { value: "10+", label: "Jahre Bühnenerfahrung der Schulleitung" },
  { value: "Oper", label: "Auftritte an der Oper Leipzig – u. a. Nussknacker" },
  { value: "Ø", label: "Aufnahmen an staatlichen Ballettschulen jedes Jahr" },
];

export type Testimonial = {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Meine Tochter blüht seit dem ersten Tag auf. Die liebevolle und zugleich professionelle Art von Frau Kulchytska ist einzigartig.",
    author: "Katrin M.",
    role: "Mutter einer Schülerin",
  },
  {
    quote:
      "Endlich eine Schule, in der klassisches Ballett wirklich unterrichtet wird – mit Herz, Disziplin und viel Freude an der Bewegung.",
    author: "Sophie L.",
    role: "Erwachsenenkurs",
  },
  {
    quote:
      "Die Vorbereitung auf die Aufnahmeprüfung war hervorragend. Ohne dieses Training hätte ich es nicht geschafft.",
    author: "Marie K.",
    role: "ehemalige Schülerin",
  },
];
