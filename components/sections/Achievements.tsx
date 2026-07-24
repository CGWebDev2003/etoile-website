import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/lib/content";
import styles from "./Achievements.module.css";

export function Achievements(): ReactNode {
  return (
    <section className={styles.section} id="erfolge">
      <Container>
        <SectionHeading eyebrow="Auszeichnungen" title="Erfolge unserer Schule" />

        <ul className={styles.grid}>
          {achievements.map((item) => (
            <li key={item.label} className={styles.item}>
              <span className={styles.value}>{item.value}</span>
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
