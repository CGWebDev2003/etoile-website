import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Achievements } from "@/components/sections/Achievements";
import { AchievementsArchive } from "@/components/sections/AchievementsArchive";

export const metadata: Metadata = {
  title: "Erfolge",
  description:
    "Auszeichnungen, Wettbewerbserfolge und Bühnenauftritte der Ballettschule Étoile Leipzig.",
  openGraph: {
    title: "Erfolge | Ballettschule Étoile",
    description:
      "Auszeichnungen, Wettbewerbserfolge und Bühnenauftritte der Ballettschule Étoile Leipzig.",
    locale: "de_DE",
    type: "website",
  },
};

export default function ErfolgePage(): ReactNode {
  return (
    <>
      <Achievements />
      <AchievementsArchive />
    </>
  );
}
