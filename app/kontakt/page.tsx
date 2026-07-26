import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Contact } from "@/components/sections/Contact";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie die Ballettschule Étoile Leipzig – Adresse, Telefon und E-Mail für Ihre Probestunde.",
  openGraph: {
    title: "Kontakt | Ballettschule Étoile",
    description:
      "Kontaktieren Sie die Ballettschule Étoile Leipzig – Adresse, Telefon und E-Mail für Ihre Probestunde.",
    locale: "de_DE",
    type: "website",
  },
};

export default function KontaktPage(): ReactNode {
  return (
    <>
      <Contact />
      <ContactForm />
    </>
  );
}
