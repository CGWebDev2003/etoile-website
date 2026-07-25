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
          title="Klassisches Ballett mit Haltung und Herz"
          align="start"
        />
        <p className={styles.text}>
          Die {school.name} in {school.city} steht unter der Leitung von{" "}
          {school.director} für klassisches Ballett auf professionellem
          Niveau – mit einem erfahrenen Pädagogen-Team für Kinder,
          Jugendliche und Erwachsene.
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
