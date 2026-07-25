import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LegalPlaceholder } from "@/components/sections/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Ballettschule Étoile Leipzig gemäß § 5 TMG.",
};

export default function ImpressumPage(): ReactNode {
  return (
    <LegalPlaceholder
      title="Impressum"
      intro="Die rechtlich vorgeschriebenen Angaben gemäß § 5 TMG ergänzen wir hier in der nächsten Inhalts-Phase."
    />
  );
}
