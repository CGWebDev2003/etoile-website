import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courses } from "@/lib/content";
import styles from "./Courses.module.css";

export type CoursesProps = {
  /** Begrenzt die Anzahl angezeigter Kurse, z. B. für die Startseiten-Vorschau. */
  readonly limit?: number;
};

export function Courses({ limit }: CoursesProps = {}): ReactNode {
  const items = limit ? courses.slice(0, limit) : courses;

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading eyebrow="unsere Kurse" title="Ballett für jedes Alter" />

        <ul className={styles.grid}>
          {items.map((course) => (
            <li key={course.id} className={styles.card}>
              <span className={styles.age}>{course.age}</span>
              <h3 className={styles.title}>{course.title}</h3>
              <p className={styles.text}>{course.description}</p>
              <Link href="/kurse" className={styles.link}>
                Mehr erfahren
                <span aria-hidden="true" className={styles.arrow}>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
