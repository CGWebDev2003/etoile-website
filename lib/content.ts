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
  { label: "Start", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kurse", href: "/kurse" },
  { label: "Erfolge", href: "/erfolge" },
  { label: "Kontakt", href: "/kontakt" },
];

/** Rechtlich vorgeschriebene Seiten – nur im Footer verlinkt, nicht in der Hauptnavigation. */
export const legalLinks: readonly NavLink[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
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

export type TeamMember = {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly bio: string;
};

/**
 * Team-Vorstellung (ohne Schulleitung, die bereits in `school`/`About` steht).
 * Wird in der Inhalts-Phase mit den echten Pädagoginnen und Pädagogen befüllt.
 */
export const team: readonly TeamMember[] = [];

export type PricingRow = {
  readonly id: string;
  readonly label: string;
  readonly price: string;
  readonly note?: string;
};

export type PricingGroup = {
  readonly id: string;
  readonly title: string;
  readonly rows: readonly PricingRow[];
};

/** Preisliste. Wird in der Inhalts-Phase befüllt. */
export const pricing: readonly PricingGroup[] = [];

export type AchievementEntry = {
  readonly id: string;
  readonly year: string;
  readonly title: string;
};

/** Vollständige Erfolgschronik für /erfolge (Highlights bleiben in `achievements`). */
export const achievementArchive: readonly AchievementEntry[] = [];

export type Testimonial = {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
};

/** Echte Google-Bewertungen der Ballettschule Étoile (jeweils 5 von 5 Sternen). */
export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Eine fantastische Ballettschule! Eines meiner Mädchen tanzt bereits seit fast vier Jahren dort, und dieses Jahr hatte auch meine Jüngere ihr Bühnendebüt – ein ganz besonderer Moment. Es ist wunderschön zu sehen, wie sich die Kinder entwickeln, mit wie viel Liebe sie begleitet werden und wie spürbar diese Hingabe jeden Tag ist. Es ist ein großes Geschenk, unsere Kinder auf dieser Reise begleiten zu dürfen. Ein herzliches Dankeschön an alle Lehrerinnen und Lehrer, die täglich so viel Liebe und Energie investieren. Es berührt uns jedes Jahr aufs Neue, unsere Kinder auf der Bühne zu sehen – oft mit Tränen in den Augen. Danke für alles!",
    author: "Teona Fritschka",
    role: "Mutter zweier Schülerinnen",
  },
  {
    quote:
      "Eine tolle Ballettschule. Motivierte und professionelle Balletttlehrerinnen, die den Kindern mit Liebe und der nötigen Disziplin das Tanzen und die Liebe zum Ballett beibringen. Unsere Tochter ist seit mehreren Jahren dabei und geht immer mit Begeisterung zum Unterricht.",
    author: "Kornelia Klöpper-Sadowsky",
    role: "Mutter einer Schülerin",
  },
  {
    quote:
      "Unser Enkelkind ist seit nun 4 Jahren in der Ballettschule und es gefällt ihr sehr gut. Wir freuen uns schon immer auf das nächste Galakonzert. Es ist unglaublich, was Oksana mit den kleinen leistet. Sie tanzen schon wie die Profis. Manches Fernsehballett könnte da noch lernen.",
    author: "Siegfried Dietze",
    role: "Großvater einer Schülerin",
  },
  {
    quote:
      "Sehr professionelle, aber auch liebevolle Betreuung der Kinder beim Balletlernen. Angemessene monatliche Preise, tolle Räumlichkeiten, zentrale Lage. Jedes Jahr ein Ballettgala, wo Kinder ihr Können auf einer Bühne vorstellen können, total klasse!",
    author: "Anastasia",
    role: "Google-Rezension",
  },
];
