import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LegalPlaceholder } from "@/components/sections/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Ballettschule Étoile Leipzig.",
};

export default function DatenschutzPage(): ReactNode {
  return (
    <LegalPlaceholder
      title="Datenschutzerklärung"
      intro="Die Datenschutzerklärung gemäß DSGVO ergänzen wir hier in der nächsten Inhalts-Phase."
    />
  );
}
