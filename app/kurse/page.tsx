import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Courses } from "@/components/sections/Courses";
import { Schedule } from "@/components/sections/Schedule";
import { Pricing } from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Kurse",
  description:
    "Ballettkurse für jedes Alter, Stundenplan und Preise der Ballettschule Étoile Leipzig.",
};

export default function KursePage(): ReactNode {
  return (
    <>
      <Courses />
      <Schedule />
      <Pricing />
    </>
  );
}
