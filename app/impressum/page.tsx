import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LegalPage } from "@/components/sections/LegalPage";
import { school } from "@/lib/content";
import styles from "@/components/sections/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Ballettschule Étoile Leipzig gemäß § 5 TMG.",
  openGraph: {
    title: "Impressum | Ballettschule Étoile",
    description: "Impressum der Ballettschule Étoile Leipzig gemäß § 5 TMG.",
    locale: "de_DE",
    type: "website",
  },
};

export default function ImpressumPage(): ReactNode {
  return (
    <LegalPage
      title="Impressum"
      pendingNote="Haftungsausschluss und Urheberrechtshinweise ergänzen wir hier in einem separaten Rechtstext-Schritt."
    >
      <div className={styles.block}>
        <p className={styles.blockHeading}>Angaben gemäß § 5 TMG</p>
        <address className={styles.address}>
          {school.name}
          <br />
          {school.director} (Inhaberin)
          <br />
          <br />
          {school.address.street}
          <br />
          {school.address.zip} {school.address.city}
        </address>
      </div>

      <div className={styles.block}>
        <p className={styles.blockHeading}>Kontakt</p>
        <address className={styles.address}>
          Telefon: <a href={school.phoneHref}>{school.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${school.email}`}>{school.email}</a>
        </address>
      </div>

      <div className={styles.block}>
        <p className={styles.blockHeading}>Inhaltlich verantwortlich (§ 18 Abs. 2 MStV)</p>
        <address className={styles.address}>
          {school.director} (Inhaberin)
          <br />
          {school.address.street}
          <br />
          {school.address.zip} {school.address.city}
        </address>
      </div>
    </LegalPage>
  );
}
