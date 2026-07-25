import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { school } from "@/lib/content";
import styles from "./AboutTeaser.module.css";

export function AboutTeaser(): ReactNode {
  return (
    <section className={styles.section}>
      <Container narrow className={styles.inner}>
        <SectionHeading
          eyebrow="unsere Schule"
          title="Ballett auf professionellem Niveau"
          align="start"
        />
        <p className={styles.text}>
          Die {school.name} in {school.city} gehört zu den erfolgreichsten
          Ballettschulen der Stadt – gegründet von der Primaballerina{" "}
          {school.director}. Wir sind offen für alle: für jedes Niveau und
          jedes Alter, vom Anfänger bis zum Profi.
        </p>
        <Link href="/ueber-uns" className={styles.link}>
          Mehr über uns
          <span aria-hidden="true" className={styles.arrow}>
            →
          </span>
        </Link>
      </Container>
    </section>
  );
}
