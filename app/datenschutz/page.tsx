import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LegalPage } from "@/components/sections/LegalPage";
import { school } from "@/lib/content";
import styles from "@/components/sections/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Ballettschule Étoile Leipzig.",
};

export default function DatenschutzPage(): ReactNode {
  return (
    <LegalPage
      title="Datenschutzerklärung"
      pendingNote="Die vollständige Datenschutzerklärung gemäß DSGVO (Verarbeitungszwecke, Ihre Rechte als betroffene Person, Hosting-Hinweise) ergänzen wir hier in einem separaten Rechtstext-Schritt."
    >
      <div className={styles.block}>
        <p className={styles.blockHeading}>Verantwortlicher</p>
        <address className={styles.address}>
          {school.name} – {school.director}
          <br />
          {school.address.street}
          <br />
          {school.address.zip} {school.address.city}
          <br />
          E-Mail: <a href={`mailto:${school.email}`}>{school.email}</a>
        </address>
      </div>
    </LegalPage>
  );
}
