import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courses } from "@/lib/content";
import styles from "./Courses.module.css";

export function Courses(): ReactNode {
  return (
    <section className={styles.section} id="kurse">
      <Container>
        <SectionHeading eyebrow="unsere Kurse" title="Ballett für jedes Alter" />

        <ul className={styles.grid}>
          {courses.map((course) => (
            <li key={course.id} className={styles.card}>
              <span className={styles.age}>{course.age}</span>
              <h3 className={styles.title}>{course.title}</h3>
              <p className={styles.text}>{course.description}</p>
              <a href="#kontakt" className={styles.link}>
                Mehr erfahren
                <span aria-hidden="true" className={styles.arrow}>
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
