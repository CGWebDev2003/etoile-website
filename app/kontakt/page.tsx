import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie die Ballettschule Étoile Leipzig – Adresse, Telefon und E-Mail für Ihre Probestunde.",
};

export default function KontaktPage(): ReactNode {
  return <Contact />;
}
