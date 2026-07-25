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

export type SocialLink = {
  readonly label: string;
  readonly href: string;
};

export const socialLinks: readonly SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ballettschule_etoile_leipzig/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@oksanakulchytska1038",
  },
];

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
  {
    value: "Beste",
    label: "Ballettschule – mehrfach ausgezeichnet bei internationalen Wettbewerben",
  },
  {
    value: "Oper",
    label: "Gemeinsame Bühnenauftritte mit der Oper Leipzig, u. a. im „Nussknacker“",
  },
  {
    value: "Staatlich",
    label:
      "Schülerinnen aufgenommen an der Palucca Hochschule Dresden und der Staatlichen Ballettschule Berlin",
  },
  { value: "10+", label: "Jahre Bühnenerfahrung der Schulleitung Oksana Kulchytska" },
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
export const team: readonly TeamMember[] = [
  {
    id: "cornelia-richter",
    name: "Cornelia Richter",
    role: "Ballett für Erwachsene",
    bio: "Ausgebildet an der Palucca Schule Dresden unter Gret Palucca, tanzte Cornelia Richter an der Semperoper Dresden, am Euroballett Luxemburg und am Ballet National de Nancy et de Lorraine – u. a. in „Schwanensee“, „Der Nussknacker“ und „Giselle“. Ihr Tanzpädagogik-Diplom erwarb sie am CEFEDEM Lyon; seit 2001 arbeitet sie zudem als Physiotherapeutin für das Leipziger Ballett. An der Étoile unterrichtet sie Ballett für Erwachsene.",
  },
  {
    id: "anna-ber",
    name: "Anna Ber",
    role: "Pre-Ballett & klassisches Ballett",
    bio: "Anna Ber wurde in Russland geboren und zur Solistin des Kinderballett-Theaters Perm ausgebildet. Ihr Diplom als Tanz- und Ballettpädagogin erhielt sie an der Staatlichen Hochschule für Tanzpädagogik und Choreographie Perm, bevor sie als Solistin und Choreografin der Ballettcompany „Crush“ sowie als Pädagogin an einer der größten privaten Ballettschulen Russlands arbeitete. An der Étoile unterrichtet sie Pre-Ballett und klassisches Ballett für Kinder und Erwachsene.",
  },
  {
    id: "roman-slomski",
    name: "Roman Slomski",
    role: "Ballettmeister",
    bio: "Roman Slomski, geboren in Gdańsk, tanzte als Solist an der Baltischen Oper und am Nationaltheater Warschau, bevor er 1991 ein Engagement am Theater Dortmund antrat. Seit 1998 ist er als Ballettmeister tätig, unter anderem als erster Ballettmeister des Leipziger Balletts, und arbeitete mit Choreografen wie John Neumeier, Maurice Béjart, George Balanchine und Uwe Scholz.",
  },
  {
    id: "olga-shalaevskaya",
    name: "Olga Shalaevskaya",
    role: "Klassisches Ballett",
    bio: "Olga Shalaevskaya wurde in Moskau geboren und an der Ballettschule des Bolschoi-Theaters mit Auszeichnung ausgebildet. Sie tanzte am Ballett der Semperoper Dresden und am Leipziger Ballett der Oper Leipzig unter Uwe Scholz und Paul Chalmer, bevor sie ihr Tanzpädagogik-Studium an der Akademie der Bolschoi-Ballettschule Moskau abschloss. An der Étoile unterrichtet sie klassisches Ballett für Kinder und Erwachsene.",
  },
  {
    id: "margarita-yermachenko",
    name: "Margarita Yermachenko",
    role: "Pre-Ballett, Jungs-Tanz & Dehnung",
    bio: "Margarita Yermachenko begann im Alter von sechs Jahren mit klassischem Tanz und Volkstanz in Minsk und studierte später Jazztanz, Tanzpädagogik und Choreografie an der Weißrussischen Staatlichen Universität für Kultur und Kunst. Sie sammelte Bühnenerfahrung in China und arbeitete u. a. mit dem Weißrussischen Staatlichen Jugendtheater. An der Étoile unterrichtet sie Pre-Ballett, einen Tanzkurs für Jungs sowie Dehnung und Bodengymnastik.",
  },
  {
    id: "stephanie-hipper",
    name: "Stephanie Hipper",
    role: "Klassisches Ballett",
    bio: "Stephanie Hipper, aufgewachsen im Kanton Zürich, erhielt mit 16 Jahren einen Elevinnen-Vertrag an der Oper Leipzig und vertrat ihre Schule 1994 beim Prix de Lausanne. Als festes Mitglied des Leipziger Balletts tanzte sie unter Professor Uwe Scholz u. a. in „Die Schöpfung“ und „Der Sommernachtstraum“. Nach Jahren als Leiterin eigener Kinder-Ballettgruppen unterrichtet sie seit März 2024 an der Étoile.",
  },
];

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
export const achievementArchive: readonly AchievementEntry[] = [
  {
    id: "2025-fuerstenfeldbruck",
    year: "2025",
    title: "Deutscher Ballettwettbewerb Fürstenfeldbruck – 1. und 2. Platz (Kategorie Mini)",
  },
  {
    id: "2025-spera",
    year: "2025",
    title:
      "Internationaler Ballettwettbewerb SPERA – mehrere Platzierungen und Einladungen zur Probewoche an der Staatlichen Ballettschule Berlin",
  },
  {
    id: "2025-selb",
    year: "2025",
    title: "Deutscher Ballettwettbewerb Selb – 4× 1. Platz, 2× 2. Platz",
  },
  {
    id: "2025-idc-berlin",
    year: "2025",
    title:
      "IDC Berlin (Internationaler Ballettwettbewerb) – 7× 1. Platz, 2× 2. Platz, 1× 3. Platz, Sonderpreise „Beste Teamarbeit“ und „Bestes Talent“",
  },
  {
    id: "2025-palucca-freyja",
    year: "2025",
    title: "Schülerin an der Palucca Hochschule für Tanz Dresden aufgenommen",
  },
  {
    id: "2024-venlo",
    year: "2024",
    title: "World Dance Contest Venlo (Niederlande) – 1× 1. Platz, 1× 2. Platz, 2× 3. Platz",
  },
  {
    id: "2024-ave-bohemia",
    year: "2024",
    title:
      "Internationaler Ballettwettbewerb Ave Bohemia Prag – Grand Prix, 11× 1. Platz, 1× 3. Platz, mit 41 teilnehmenden Kindern als beste Ballettschule ausgezeichnet",
  },
  {
    id: "2024-palucca-anouk",
    year: "2024",
    title: "Schülerin an der Palucca Schule Dresden aufgenommen",
  },
  {
    id: "2024-deutscher-wettbewerb",
    year: "2024",
    title:
      "Deutscher Ballettwettbewerb – 1× 1. Platz, 2× 2. Platz, 3× 3. Platz, 5 Tänze für den World Dance Contest Niederlande qualifiziert",
  },
  {
    id: "2024-hamburg-regional",
    year: "2024",
    title: "Regionaler Ballettwettbewerb Hamburg – 2× 1. Platz, 5× 2. Platz, 2× 3. Platz",
  },
  {
    id: "2023-ave-bohemia",
    year: "2023",
    title: "Internationaler Ballettwettbewerb Ave Bohemia Prag – 6× 1. Platz, 2× 2. Platz",
  },
  {
    id: "2023-jubilaeum",
    year: "2023",
    title: "10-jähriges Schuljubiläum mit dem Märchenballett „Schneewittchen“",
  },
  {
    id: "2023-hamburg-deutscher",
    year: "2023",
    title:
      "Deutscher Ballettwettbewerb Hamburg – 1. Platz in vier Kategorien (Minis Ballett, Minis Charakter, Erwachsene Ballett, Erwachsene Modern)",
  },
  {
    id: "2023-palucca-milla",
    year: "2023",
    title: "Schülerin an der Palucca Schule Dresden aufgenommen",
  },
  {
    id: "2022-ave-bohemia",
    year: "2022",
    title: "AVE Bohemia Prag – 5× 1. Platz, 1× 2. Platz, 1× 3. Platz",
  },
  {
    id: "2021-yagp",
    year: "2021",
    title: "YAGP Germany – 3. Platz",
  },
  {
    id: "2021-berlin-greta",
    year: "2021",
    title: "Schülerin an der Staatlichen Ballettschule Berlin aufgenommen",
  },
  {
    id: "2021-berlin-helena",
    year: "2021",
    title: "Schülerin in die 4. Ausbildungsklasse der Staatlichen Ballettschule Berlin aufgenommen",
  },
  {
    id: "2020-kinofilm",
    year: "2020",
    title:
      "Schülerinnen im Kinofilm „Into the Beat – Dein Herz tanzt!“ (Kinopremiere 16. Juli 2020)",
  },
  {
    id: "2020-berlin-mila",
    year: "2020",
    title: "Schülerin an der Staatlichen Ballettschule Berlin aufgenommen",
  },
  {
    id: "2020-tanzolymp",
    year: "2020",
    title: "Tanzolymp International Berlin – 4. Platz von 72 Teilnehmern aus 28 Ländern",
  },
  {
    id: "2019-vibe-wien",
    year: "2019",
    title: "VIBE Wien (Internationaler Ballettwettbewerb) – 2. und 3. Platz, Kategorie Professional",
  },
  {
    id: "2019-ave-bohemia",
    year: "2019",
    title: "Ave Bohemia Prag – 23 Kinder, 10 Tänze: 5× 1. Platz, 5× 2. Platz",
  },
  {
    id: "2018-opernball",
    year: "2018",
    title: "Opernball 2018 (Oper Leipzig) – Auftritt der Ballettschule Étoile",
  },
  {
    id: "2018-applaus",
    year: "2018",
    title:
      "11. Internationaler Ballettwettbewerb „Applaus“ – 3× 1. Platz, 1× 2. Platz, 1× 3. Platz, ausgezeichnet als erfolgreichste Ballettschule",
  },
  {
    id: "2017-youth-globe",
    year: "2017",
    title:
      "YOUTH GLOBE Award (AIMY) für Oksana Kulchytska – für herausragende Karriere und Engagement für junge Menschen",
  },
  {
    id: "2017-prag",
    year: "2017",
    title: "Internationaler Ballettwettbewerb Prag – 6× 1. Platz, 1× 2. Platz, 1× 3. Platz, 1× 5. Platz",
  },
];

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
